import user from "./Slices/userSlice";

export const mainReducer = {
  user: user.reducer,
};

export const selectUser = (state) => {
  return state.user;
};
