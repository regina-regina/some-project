import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
  username: "admin",
  age: 22,
  country: Country.Russia,
  lastname: "one",
  first: "asd",
  city: "asf",
  currency: Currency.USD,
};

const dataWithNameError = {
  age: 22,
  country: Country.Russia,
  first: "asd",
  city: "asf",
  currency: Currency.USD,
};

const dataWithCountryError = {
  username: "one",
  age: 22,
  lastname: "one",
  first: "asd",
  city: "asf",
  currency: Currency.USD,
};

describe("validateProfileData.test", () => {
  test("success", async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });
  test("name error", async () => {
    const result = validateProfileData(dataWithNameError);
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test("country error", async () => {
    const result = validateProfileData(dataWithCountryError);
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });
  test("no data error", async () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
