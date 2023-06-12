import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDeatilsComments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDeatilsComments?.error;

