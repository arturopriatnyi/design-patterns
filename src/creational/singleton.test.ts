import { CounterSingleton } from './singleton';

describe('CounterSingleton', () => {
  const firstCounter = CounterSingleton.getInstance();
  const secondCounter = CounterSingleton.getInstance();

  it('always returns the same instance', () => {
    expect(firstCounter).toBe(secondCounter);
  });

  it('increments counter correctly', () => {
    firstCounter.increment();
    secondCounter.increment();

    expect(firstCounter.counter).toBe(2);
    expect(secondCounter.counter).toBe(2);
  });
});
