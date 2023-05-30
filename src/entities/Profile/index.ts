import { ProfileSchema, Profile } from "entities/Profile/model/types/profile";

export { ProfileSchema, Profile };

export { profileActions, profileReducer } from "./model/slice/profileSlice";

export { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";

export { ProfileCard } from "./ui/ProfileCard/ProfileCard";
