import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorization } from "@/http/auth"; // <-- твій запит до бекенду

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