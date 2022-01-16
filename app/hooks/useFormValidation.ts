import { useState, useCallback } from 'react';
import { ObjectSchema, ValidationError } from 'yup';
import { ChangeEvent, FormEvent } from 'react';
import * as R from 'ramda';
import { firstCapDataLike } from '../utils/common';

type Fields = Record<string, any>;

type OnSubmitFunc = (fields: Fields) => void | Promise<void>;

type Opts = {
  abortEarly: boolean;
};

export const useFormValidation = <T, K extends { [key: string]: any }>(
  initialValues: T,
  schema: ObjectSchema<K>
) => {
  const [values, setValues] = useState<T>(initialValues);

  const [errors, setErrors] = useState<T | Fields>(initialValues);

  const [disabled, setDisabled] = useState(true);

  const [isDirty, setIsDirty] = useState(false);

  const [isSubmitting, setSubmitting] = useState(false);

  const handleValidateOne = useCallback<
    (path: string, value: Fields) => Promise<void>
  >(
    async (path: string, value: Fields) => {
      try {
        await schema.validateAt(path, value);
      } catch (error) {
        if (error instanceof ValidationError) {
          setErrors((prevValues) => ({
            ...prevValues,
            [error.path]: R.pipe(R.head, firstCapDataLike)(error.errors),
          }));
        }
      }
    },
    [schema]
  );

  const handleValidateAll = useCallback(
    async (values: Fields, options: Opts = { abortEarly: false }) => {
      try {
        await schema.validate(values, options);

        setDisabled(false);
      } catch (error) {
        setDisabled(true);

        if (error instanceof ValidationError) {
          const errs = R.pipe<ValidationError[], any[], any[], Fields, Fields>(
            R.prop('inner'),
            R.map((e) => ({ [e.path]: R.head(e.errors) })),
            R.reduce(R.mergeWith(R.concat), {}),
            R.mapObjIndexed(firstCapDataLike)
          )(error);

          setErrors(errs);
        }
      }
    },
    [setDisabled, schema]
  );

  const handleChange = useCallback(
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
    [setValues, setIsDirty, setErrors, handleValidateOne]
  );

  const handleSubmit = (onSubmit: OnSubmitFunc) => async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await handleValidateAll(values);

      await onSubmit(values);
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
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
