import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id:"63eb5a897020965c2b41af1f",
    username: "Long Tran",
    email: "longtran@gmail.com",
    profilePicture: "person/1.jpeg",
    coverPicture: "post/1.jpeg",
    isAdmin: false,
    followers: [],
    following: [1,2,3]
  },
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
