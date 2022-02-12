import * as R from 'ramda';
import { getHours, getMinutes } from 'date-fns';

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

export const getEndTime = (date: string) =>
  R.converge(
    (hours, minutes) => `${hours}:${minutes}`,
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

export const firstCapDataLike = (value: string): string =>
  value.replace(/^\w/, (e) => e.toUpperCase());

export function debounce<F extends (...args: any[]) => void>(
  func: F,
  waitMilliseconds = 50,
  isImmediate: boolean = false,
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: Parameters<F>) {
    const doLater = function () {
      timeoutId = undefined;
      if (!isImmediate) {
        func(...args);
      }
    };

    const shouldCallNow = isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func(...args);
    }
  };
}

export const textToCapitalizeWord = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);
