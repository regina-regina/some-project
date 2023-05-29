import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginPassword.test", () => {
  test("should return username", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "regina",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("regina");
  });
});
