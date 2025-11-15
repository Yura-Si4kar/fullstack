export const selectIsAuth = (state) => state.authorization.auth;
export const selectUser = (state) => state.authorization.user;
export const selectIsLoading = (state) => state.authorization.loading;
export const selectIsError = (state) => state.authorization.error;