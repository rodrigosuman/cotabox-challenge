import React, { useState, useEffect, useContext, createContext } from "react";

import { useDispatch } from "react-redux";

import api from "../services/api.service";

import * as authServices from "../services/auth.service";

import jwtDecode from "jwt-decode";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@cotaboxChallenge:user"))
  );
  const [token, setToken] = useState(
    localStorage.getItem("@cotaboxChallenge:token")
  );
  const [sameUserToken, setSameUserToken] = useState(isSameUserToken());

  const dispatch = useDispatch();

  api.interceptors.request.use(async function (config) {
    const authorization = `Bearer ${localStorage.getItem(
      "@cotaboxChallenge:token"
    )}`;
    config.headers.Authorization = authorization;

    return config;
  });
  // useEffect(() => {
  //   console.log("trocando token");
  // }, [localStorage.getItem("@cotaboxChallenge:token")]);

  useEffect(() => {
    setSameUserToken(isSameUserToken());

    if (user) {
      localStorage.setItem("@cotaboxChallenge:user", JSON.stringify(user));
    }

    if (token) {
      localStorage.setItem("@cotaboxChallenge:token", token);
    }
  }, [user, token]);

  function login(userParams) {
    return new Promise((resolve, reject) => {
      authServices
        .login(userParams)
        .then(({ data: { user, token } }) => {
          setUser(user);
          setToken(token);

          resolve(true);
        })
        .catch((err) => reject(err));
    });
  }

  function singUp(userParams) {
    return authServices.signUp(userParams).then(({ data }) => {
      const { user, token } = data;
      setUser(user);
      setToken(token);
    });
  }

  async function signOut() {
    setUser(null);
    setToken(null);
    localStorage.clear();

    dispatch({ type: "USER_LOGOUT" });
  }

  function isSameUserToken() {
    if (user && token) {
      try {
        const { _id } = user;
        const decoded = jwtDecode(token);

        return decoded.id === _id;
      } catch (error) {
        return false;
      }
    }

    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        user,
        sameUserToken,
        setUser,
        login,
        signOut,
        singUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthProvider;
