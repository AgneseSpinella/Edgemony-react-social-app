import { greetings } from "./../utils";

describe("Greetings function", () => {
  it("test greetings() function", () => {
    const result = greetings("Salvatore");
    expect(result).toBe("Hello dear Salvatore!!");
  });

  it("test greetings() function without passing a parameter", () => {
    const result = greetings();
    expect(result).toBe("Hello dear undefined!!");
  });
});

describe("Example tests", () => {
  it("testing an array", () => {
    const arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
  });
});