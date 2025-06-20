import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forgotEmail, setForgotEmail] = useState("");
  const [redirectPath, setRedirectPath] = useState(null);
  const [updateimgname, setUpdateImgname] = useState(false);
  const [dataFetching, setDataFetching] = useState(true);

  const ForgotPassword = (email) => {
    setForgotEmail(email.current.value);
  };

  // You will implement createUser, signIn, logOut, etc. with JWT-based logic later

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    forgotEmail,
    ForgotPassword,
    redirectPath,
    setRedirectPath,
    updateimgname,
    setUpdateImgname,
    dataFetching,
    setDataFetching,
    // Future JWT functions like signIn, createUser, logOut can go here
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
