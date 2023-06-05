import { UserSchema, User } from "entities/User/model/types/user";
import { userReducer, userActions } from "./model/slice/userSlice";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";

export {
  userReducer,
  userActions,
  UserSchema,
  User,
  getUserAuthData,
  getUserInited,
};
