import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios from "axios";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.test", () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test("successlogin", async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({ data: { username: "123", id: "1" } })
  //   );
  //   const action = loginByUsername({ username: "123", password: "123" });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(dispatch).toHaveBeenCalledWith(
  //     userActions.setAuthdata({ username: "123", id: "1" })
  //   );
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe("fulfilled");
  // });

  // test("fail login", async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({ status: 403 })
  //   );
  //   const action = loginByUsername({ username: "123", password: "123" });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe("rejected");
  // });

  test("success login", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { username: "123", id: "1" } }),
    );
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "123", password: "123" });
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthdata({ username: "123", id: "1" }),
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  test("fail login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "123", password: "123" });
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
