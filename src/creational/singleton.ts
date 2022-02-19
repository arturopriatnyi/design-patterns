/**
 * CounterSingleton provides a single instance to increment the counter.
 *
 * Singleton ensures that a class has only one instance,
 * while providing a global access point to this instance.
 */
export class CounterSingleton {
  /**
   * Single instance of CounterSingleton.
   * @private
   */
  private static instance: CounterSingleton;

  /**
   * Constructor is private to disable creating new instances
   * of CounterSingleton in client code.
   * @private
   */
  private constructor() {
    this._counter = 0;
  }

  /**
   * Counter value.
   * @private
   */
  private _counter: number;

  /**
   * Returns the counter value.
   */
  get counter(): number {
    return this._counter;
  }

  /**
   * Returns the single instance of CounterSingleton.
   */
  public static getInstance(): CounterSingleton {
    // creating a new instance on the first call ...
    if (!this.instance) {
      this.instance = new CounterSingleton();
    }

    // ... and then always returning this instance.
    return this.instance;
  }

  /**
   * Increments the counter value.
   */
  public increment(): void {
    this._counter++;
  }
}
