import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

// const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
//   loginForm: loginReducer,
// };

// eslint-disable-next-line operator-linebreak
export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    // asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) => (StoryComponent: Story) => (
    <StoreProvider
      initialState={state}
      // asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
