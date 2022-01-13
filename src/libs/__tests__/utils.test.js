import { greetings } from "./../utils";

it('test greetings() function', () => {
    const result = greetings('Agnese');
    expect(result).toBe("Hello dear Agnese")
})

it('test greetings() function without passing a parameter', () => {
    const result = greetings();
    expect(result).toBe("Hello dear Agnese!!")
})

it("testin and array", () => {
    const arr = [1,2,3]
    expect(arr).toEqual([1,2,3]);
});