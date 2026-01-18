import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorization, registration } from "@/http/auth";
import { getMe } from "@/http/users";

// 🔹 1. createAsyncThunk для login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await authorization(email, password);
      
      return response; // повертає дані користувача
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await registration(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);


export const fetchMe = createAsyncThunk(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMe();
      return data.user;
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);