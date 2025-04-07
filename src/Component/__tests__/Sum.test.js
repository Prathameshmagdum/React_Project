import { Sum } from "../Sum";

test("Calculate the sum funtion to result out the correct addition", ()=>{
    const result = Sum(3,4);
    expect(result).toBe(7);
})