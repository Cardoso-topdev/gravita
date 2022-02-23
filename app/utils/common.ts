import * as R from 'ramda';
import { getHours, getMinutes } from 'date-fns';

export const getEndTime = (date: string) =>
  R.converge(
    (hours, minutes) => `${hours}h ${minutes}m`,
    [getHours, getMinutes],
  )(new Date(date));

export const objOrEmpty = <T extends object>(
  object: T,
  condition?: boolean,
): T | object => {
  if (!object) {
    return {};
  }
  return condition ? object : R.empty<T>(object);
};

export const textToCapitalizeWord = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatPhoneNumber = (target: string) => {
  const phoneNumber = target.replace(/[^\d]/g, '');

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) {
    return phoneNumber;
  }

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`;
};
