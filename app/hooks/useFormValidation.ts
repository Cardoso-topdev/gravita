import { useState, useCallback } from 'react';
import * as R from 'ramda';
import { ObjectSchema, ValidationError } from 'yup';
import { ChangeEvent, FormEvent } from 'react';
import { textToCapitalizeWord } from '../utils/common';
import { formatPhoneNumber } from 'utils/common';

type Fields = Record<string, any>;

type OnSubmitFunc = (fields: Fields) => void | Promise<void>;

type Opts = {
  abortEarly: boolean;
};

export const useFormValidation = <T, K extends { [key: string]: any }>(
  initialValues: T,
  schema: ObjectSchema<K>,
) => {
  const [values, setValues] = useState<T>(initialValues);

  const [errors, setErrors] = useState<T | Fields>(initialValues);

  const [disabled, setDisabled] = useState(true);

  const [isDirty, setIsDirty] = useState(false);

  const [isSubmitting, setSubmitting] = useState(false);

  const handleValidateAll = useCallback<
    (values: Fields, options?: Opts) => void
  >(
    async (values: Fields, options: Opts = { abortEarly: false }) => {
      try {
        await schema.validate(values, options);

        setDisabled(false);
      } catch (error) {
        setDisabled(true);
      }
    },
    [setDisabled, schema],
  );

  const handleValidateOne = useCallback<
    (path: string, value: Fields) => Promise<void>
  >(
    async (path: string, value: Fields) => {
      try {
        await schema.validateAt(path, value);

        await handleValidateAll(value);
      } catch (error) {
        if (error instanceof ValidationError) {
          setErrors((prevValues) => ({
            ...prevValues,
            [error.path]: R.pipe(
              R.head,
              R.split(/(?=[A-Z])/),
              R.join(' '),
              R.toLower,
              textToCapitalizeWord,
              R.replace('_', ' ')
            )(error.errors),
          }));
        }
      }
    },
    [schema, handleValidateAll],
  );

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);

    setErrors((prevValues) => ({
      ...prevValues,
      [target.name]: R.empty(''),
    }));

    setValues((prevValues) => {
      const newValues = { ...prevValues, [target.name]: target.value };

      if(/(?=phone)/.test(target.name)) {
        const updatedValues = R.mergeRight(newValues, { [target.name]: formatPhoneNumber(target.value)}); 

        handleValidateOne(target.name, updatedValues);

        return updatedValues as T;
      }
      handleValidateOne(target.name, newValues);

      return newValues;
    });
  };

  const handleSubmit = (onSubmit: OnSubmitFunc) => async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    await onSubmit(values);

    setSubmitting(false);
  };

  return {
    values,
    errors,
    disabled,
    isDirty,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
