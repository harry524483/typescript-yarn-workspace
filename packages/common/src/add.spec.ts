import { add } from "./add";

describe("add method", () => {
  it("should add numbers", () => {
    const result = add(1, 2, 4);
    expect(result).toBe(7);
  });
});
