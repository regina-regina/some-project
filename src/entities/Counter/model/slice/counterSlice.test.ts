import { counterActions, counterReducer } from "./counterSlice";
import { CounterSchema } from "../type/counterSchema";

describe("CounterSlice", () => {
  test("should return counter value", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11,
    });
  });
});

describe("CounterSlice", () => {
  test("should return counter value", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9,
    });
  });
});

describe("CounterSlice", () => {
  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
