import { evaluateDynamicStyle, splitDynamicStyles } from "./style";

const fn1 = () => ({});
const fn2 = () => ({});
const fn3 = () => "#f00";

describe("splitDynamicStyles", () => {
  it("should correctly handle the empty case", () => {
    expect(splitDynamicStyles({})).toEqual({ dynamic: {}, static: {} });
  });

  it("should split top-level dynamic styles", () => {
    expect(
      splitDynamicStyles({
        addButton: fn2,
        base: { backgroundColor: "#000", color: "#fff" },
        bordered: { borderRadius: 0 },
        box: fn1,
      }),
    ).toEqual({
      dynamic: { addButton: fn2, box: fn1 },
      static: {
        base: { backgroundColor: "#000", color: "#fff" },
        bordered: { borderRadius: 0 },
      },
    });
  });

  it("should split nested dynamic styles", () => {
    expect(
      splitDynamicStyles({
        addButton: { backgroundColor: "#000", color: fn3 },
        base: { backgroundColor: "#000", color: "#fff" },
        bordered: { borderRadius: 0 },
        box: fn1,
      }),
    ).toEqual({
      dynamic: { addButton: { color: fn3 }, box: fn1 },
      static: {
        addButton: { backgroundColor: "#000" },
        base: { backgroundColor: "#000", color: "#fff" },
        bordered: { borderRadius: 0 },
      },
    });
  });
});

describe("evaluateDynamicStyle", () => {
  const props = { background: "#fff", color: "#000" };
  it("should correctly handle the empty case", () => {
    expect(evaluateDynamicStyle({}, {})).toEqual({});
  });

  it("should evaluate a static style", () => {
    expect(
      evaluateDynamicStyle({ borderRadius: 2, color: "#fff" }, props),
    ).toEqual({ borderRadius: 2, color: "#fff" });
  });

  it("should evaluate a top-level dynamic style", () => {
    expect(
      evaluateDynamicStyle(({ color }) => ({ borderRadius: 2, color }), props),
    ).toEqual({ borderRadius: 2, color: "#000" });
  });

  it("should evaluate nested dynamic styles", () => {
    expect(
      evaluateDynamicStyle(
        { backgroundColor: ({ background }) => background, borderRadius: 2 },
        props,
      ),
    ).toEqual({ backgroundColor: "#fff", borderRadius: 2 });
  });
});
