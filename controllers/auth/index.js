const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const refreshToken = require("./refreshToken");

module.exports = {
  signup,
  login,
  logout,
  currentUser,
  refreshToken,
};
