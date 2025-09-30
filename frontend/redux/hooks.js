import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { setAuth, logout, restoreAuth } from "./authSlice";

export const useAuthActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ setAuth, logout, restoreAuth }, dispatch);
};

export const useAuth = () => useSelector(state => state.auth);
