import * as R from 'ramda';

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
