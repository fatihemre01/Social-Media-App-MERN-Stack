export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSucces = (user) => ({
  type: "LOGIN_SUCCES",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
