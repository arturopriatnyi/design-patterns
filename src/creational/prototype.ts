/**
 * GreeterPrototype builds a greeting for a person. It can be cloned.
 *
 * Prototype lets you copy existing objects without making your code
 * dependent on their classes.
 */
export class GreeterPrototype {
  /**
   * Creates a new GreeterPrototype object from existing one
   * if it's provided.
   * @param greeter
   */
  public constructor(greeter?: GreeterPrototype) {
    this._name = greeter?._name ?? undefined;
  }

  /**
   * Person's name to greet.
   * @private
   */
  private _name: string | undefined;

  /**
   * Returns name value.
   */
  get name(): string | undefined {
    return this._name;
  }

  /**
   * Sets name value.
   * @param name
   */
  public setName(name: string) {
    this._name = name;
  }

  /**
   * Builds and returns the greeting.
   * If name is not provided: "Hello!"
   * If name is provided: "Hello, ${name}!"
   */
  public greet(): string {
    return 'Hello' + (this._name ? `, ${this._name}` : '') + '!';
  }

  /**
   * Returns cloned GreeterPrototype object.
   */
  public clone(): GreeterPrototype {
    return new GreeterPrototype(this);
  }
}
