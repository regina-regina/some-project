import { Country } from "entities/Country";
import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/profile";

describe("getProfileValidateErrors.test", () => {
  test("should return errors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.NO_DATA,
          ValidateProfileError.SERVER_ERROR,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      "NO_DATA",
      "SERVER_ERROR",
    ]);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
