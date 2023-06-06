import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "./articleDetails";

describe("getArticle", () => {
  test("should return article data", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data: { id: "555" } },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual({ id: "555" });
  });

  test("should return article isloading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: true },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
  });

  test("should return article error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: "error" },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual("error");
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
  });
});
