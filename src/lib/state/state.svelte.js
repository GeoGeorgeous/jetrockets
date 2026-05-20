import { getContext, setContext } from 'svelte';

/**
 * Creates a typed context pair for a state class.
 *
 * @example
 * class CounterState {
 *   count = $state(0);
 *   increment() { this.count++; }
 * }
 *
 * export const { setState: setCounter, getState: getCounter } = defineContext('counter', CounterState);
 *
 * // In a parent component:
 * setCounter();
 *
 * // In any child component:
 * const counter = getCounter();
 *
 * @param {string} name - Unique name for the context symbol (used in error messages).
 * @param {new (...args: any[]) => any} StateClass - The class to instantiate.
 */
export function defineContext(name, StateClass) {
  const KEY = Symbol(name);

  return {
    setState: (...args) => {
      const instance = new StateClass(...args);
      setContext(KEY, instance);
      return instance;
    },
    getState: () => {
      const ctx = getContext(KEY);
      if (!ctx)
        throw new Error(
          `"${name}" context not found. Call setState() in a parent component first.`,
        );
      return ctx;
    },
  };
}
