import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeUser, updateUser } from "@/http/users";

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await removeUser(userId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Delete user failed");
        }
    }
);

export const updateUserThunk = createAsyncThunk(
    "users/updateUser",
    async (updateData, { rejectWithValue }) => { 
        try {
            const response = await updateUser(updateData);
            
            return response.user;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Update user failed");
        }
    }
);