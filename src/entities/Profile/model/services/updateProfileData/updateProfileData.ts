import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../types/profile";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileData(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    rejectWithValue(errors);
  }
  try {
    const response = await extra.api.put<Profile>("/profile", formData);
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
