import counter from "./counter";

describe("counter", () => {
  it("should initialize to 0", () => {
    expect(counter.create().value).toBe(0);
  });

  it("should restore from snapshot", () => {
    expect(counter.create({ value: -3 }).value).toBe(-3);
  });

  it("should increment", () => {
    const counterInstance = counter.create();

    counterInstance.increment();
    expect(counterInstance.value).toBe(1);

    counterInstance.increment(7);
    expect(counterInstance.value).toBe(8);
  });

  it("should decrement", () => {
    const counterInstance = counter.create({ value: 7 });

    counterInstance.decrement();
    expect(counterInstance.value).toBe(6);

    counterInstance.decrement(3);
    expect(counterInstance.value).toBe(3);
  });
});
