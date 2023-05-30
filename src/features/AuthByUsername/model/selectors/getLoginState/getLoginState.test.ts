import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginPassword.test", () => {
  test("should return state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: undefined,
        username: "regina",
        password: "123",
        isLoading: false,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      error: undefined,
      username: "regina",
      password: "123",
      isLoading: false,
    });
  });
});
