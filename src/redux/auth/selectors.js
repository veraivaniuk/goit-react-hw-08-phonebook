const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export {
  getIsAuthenticated,
  getUsername,
  getIsFetchingCurrent
};

