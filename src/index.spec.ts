import { greet } from "./index";

test("greets by name", () => {
  expect(greet("World")).toBe("Hello, World!");
});
