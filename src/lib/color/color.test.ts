import { interpolate, mixColor } from "./color";

describe("interpolate", () => {
  it("should support identities", () => {
    expect(interpolate(0, 0, 0)).toBe(0);
    expect(interpolate(1, 1, 1)).toBe(1);
  });

  it("should mix basic values", () => {
    expect(interpolate(1, 100, 1)).toBe(100);
    expect(interpolate(30, 90, 0.5)).toBe(60);
    expect(interpolate(100, 300, 0.25)).toBe(150);
  });

  it("should mix inverted values", () => {
    expect(interpolate(100, 1, 0)).toBe(100);
    expect(interpolate(90, 30, 0.5)).toBe(60);
    expect(interpolate(300, 100, 0.25)).toBe(250);
  });

  it("should mix negative values", () => {
    expect(interpolate(-10, 10, 0.5)).toBe(0);
  });
});

describe("mixColor", () => {
  it("should support identities", () => {
    expect(mixColor("#000000", "#000000", 0).toHexString()).toEqual("#000000");
    expect(mixColor("#ffffff", "#ffffff", 1).toHexString()).toEqual("#ffffff");
  });

  it("should mix colors", () => {
    expect(mixColor("#000000", "#ffffff", 0).toHexString()).toEqual("#000000");
    expect(mixColor("#ff00ff", "#00ff00", 0.5).toHexString()).toEqual(
      "#808080",
    );
    expect(mixColor("#ffffff", "#ff00ff", 0.75).toHexString()).toEqual(
      "#ff40ff",
    );
    expect(mixColor("#000000", "#ffffff", 0.0625).toHexString()).toEqual(
      "#101010",
    );
  });
});
