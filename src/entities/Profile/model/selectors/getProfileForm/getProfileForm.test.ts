import { Country } from "entities/Country";
import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
  test("should return formData", () => {
    const form = {
      username: "admin",
      age: 22,
      country: Country.Russia,
      lastname: "one",
      first: "asd",
      city: "asf",
      currency: Currency.USD,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
