import { create } from "zustand";
import { connector } from "../api/Axios";

export const AuthContext = create((set) => ({
  user: null,
  isLoggedIn: false,
  token: null,
  setUserToken: (token) => set({ token }),

  signup: async (data) => {
    try {
      const response = await connector.post("/auth/signup", data);
      set({ user: response.data.data, isLoggedIn: true });
      return response.data;
    } catch (error) {
      console.log("signup error", error);
      throw error;
    }
  },

  login: async (data) => {
    try {
      const response = await connector.post("/auth/login", data);
      set({ user: response.data.data, isLoggedIn: true });
      return response.data;
    } catch (error) {
      console.log("login error", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await connector.post("/auth/logout");
      set({ user: null, isLoggedIn: false });
      return response.data;
    } catch (error) {
      console.log("logout error", error);
      throw error;
    }
  },

  getuser: async (id) => {
    try {
      const response = await connector.get(`/user/${id}`);
      // Public profile lookup — do not overwrite the logged-in user's own state
      return response.data.data;
    } catch (error) {
      console.log("getuser error", error);
      throw error;
    }
  },

  profile: async () => {
    try {
      const response = await connector.get("/auth/profile");
      set({ user: response.data.data, isLoggedIn: true });
      return response.data.data;
    } catch (error) {
      console.log("profile error", error);
      throw error;
    }
  },

  updateProfile: async (data) => {
    try {
      const response = await connector.put("/auth/update", data);
      set({ user: response.data.data });
      return response.data;
    } catch (error) {
      console.log("updateProfile error", error);
      throw error;
    }
  },

  changepassword: async (data) => {
    try {
      const response = await connector.put("/auth/change-password", data);
      return response.data;
    } catch (error) {
      console.log("changepassword error", error);
      throw error;
    }
  },

  delete: async (password) => {
    try {
      const response = await connector.delete("/auth/delete", {
        data: { password },
      });
      set({ user: null, isLoggedIn: false });
      return response.data;
    } catch (error) {
      console.log("delete error", error);
      throw error;
    }
  },
  
  getLastLogin: async () => {
    try {
      const response = await connector.get("/user/last-login");
      return response.data.lastLogin;
    } catch (error) {
      console.log("getLastLogin error", error);
      throw error;
    }
  },

  getLoginHistory: async () => {
    try {
      const response = await connector.get("/user/login-history");
      return response.data.loginHistory;
    } catch (error) {
      console.log("getLoginHistory error", error);
      throw error;
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await connector.post("/auth/forgot-password", { email });
      return response.data;
    } catch (error) {
      console.log("forgotPassword error", error);
      throw error;
    }
  },

  resetPassword: async (token, newpassword, confirmnewpassword) => {
    try {
      const response = await connector.post(`/auth/reset-password/${token}`, {
        newpassword,
        confirmnewpassword,
      });
      return response.data;
    } catch (error) {
      console.log("resetPassword error", error);
      throw error;
    }
  },
}));
