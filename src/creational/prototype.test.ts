import { GreeterPrototype } from './prototype';

describe('GreeterPrototype', () => {
  it('clones itself', () => {
    const greeter = new GreeterPrototype();
    greeter.setName('Alice');

    const greeterClone = greeter.clone();

    expect(greeterClone.name).toBe(greeter.name);
  });

  it('greets correctly', () => {
    const greeter = new GreeterPrototype();
    expect(greeter.greet()).toBe('Hello!');

    greeter.setName('Alice');

    expect(greeter.greet()).toBe('Hello, Alice!');
  });
});
