import type { AnyFunction } from 'bun';
import { type Mock, jest } from 'bun:test';

import _ from 'lodash';
import type { Class } from 'type-fest';

export type MockedInstance<T extends object> = {
  [K in keyof T as T[K] extends AnyFunction ? K : never]: Mock<AnyFunction>;
};

function getAllPropertyNames(object: object): string[] {
  const properties = Object.getOwnPropertyNames(object);
  const prototype: unknown = Object.getPrototypeOf(object);
  if (prototype === Object.prototype) {
    return properties;
  }
  return Array.from(new Set(properties.concat(getAllPropertyNames(prototype as object))));
}

export function createMock<T extends object>(constructor: Class<T>) {
  const prototype = constructor.prototype as Record<string, unknown>;
  const obj: Record<string, unknown> = {};
  getAllPropertyNames(constructor.prototype)
    .filter((s) => s !== 'constructor')
    .forEach((prop) => {
      const value = prototype[prop];
      if (typeof value === 'function') {
        obj[prop] = jest.fn();
      } else {
        throw new Error(`Unexpected type for property '${prop}': ${typeof prototype[prop]}`);
      }
    });
  return obj as MockedInstance<T>;
}

export function createMockObject<T extends object>(target: T) {
  return new Proxy(target, {
    get(target, property) {
      const value: unknown = _.get(target, property);
      if (value !== undefined) {
        return value;
      }
      return jest.fn();
    }
  });
}
