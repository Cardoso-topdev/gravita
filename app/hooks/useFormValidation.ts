import { useState, useCallback } from 'react';
import { ObjectSchema, ValidationError } from 'yup';
import { ChangeEvent, FormEvent } from 'react';
import * as R from 'ramda';
import { firstCapDataLike, debounce } from '../utils/common';

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
              firstCapDataLike,
            )(error.errors),
          }));
        }
      }
    },
    [schema, handleValidateAll],
  );

  const handleChange = debounce(
    async ({ target }: ChangeEvent<HTMLInputElement>) => {
      setIsDirty(true);

      setErrors((prevValues) => ({
        ...prevValues,
        [target.name]: '',
      }));

      setValues((prevValues) => {
        const newValues = { ...prevValues, [target.name]: target.value };

        handleValidateOne(target.name, newValues);

        return newValues;
      });
    },
    500,
  );

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
