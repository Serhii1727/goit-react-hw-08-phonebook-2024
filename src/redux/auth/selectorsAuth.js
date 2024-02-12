export const selectAuthToken = state => {
  return state.auth.token;
};

export const selectUserData = state => {
  return state.auth.userData;
};

export const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};

export const selectError = state => {
  return state.auth.error;
};

export const selectIsLoading = state => {
  return state.auth.isLoading;
};
