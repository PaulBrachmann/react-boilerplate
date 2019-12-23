import i18n, { init } from ".";

it("should work", async () => {
  await init();
  expect(i18n.translate("__tests__:key")).toBe("It works!");
  expect(i18n.translate("__tests__:noKey")).toBe("noKey");
});
