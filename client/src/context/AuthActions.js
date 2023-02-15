export const LoginStart = (userCredentials) => ({
    type:"LOGIN_START",
})
export const LoginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload: user,
})
export const LoginFail = (error) => ({
    type:"LOGIN_FAILURE",
    payload: error
})
export const Follow = (useId) => ({
    type:"FOLLOW",
    payload: useId
})
export const UnFollow = (useId) => ({
    type:"UNFOLLOW",
    payload: useId
})