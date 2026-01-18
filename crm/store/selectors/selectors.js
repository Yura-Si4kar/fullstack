export const selectIsAuth = (state) => state.authorization.isAuthenticated;
export const selectUsersList = (state) => state.users.usersList;
export const selectIsLoading = (state) => state.authorization.loading;
export const selectIsError = (state) => state.authorization.error;
export const selectUser = (state) => state.authorization.user;
export const selectRolesList = (state) => state.roles.rolesList;