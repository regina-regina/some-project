import { UserSchema, User } from "entities/User/model/types/user";
import { userReducer, userActions } from "./model/slice/userSlice";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";

export { userReducer, userActions, UserSchema, User, getUserAuthData };
