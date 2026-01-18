import { createAsyncThunk } from "@reduxjs/toolkit";
import { addRole } from "@/http/roles";

export const addRoleThunk = createAsyncThunk(
    'roles/addRole',
    async (roleData, { rejectWithValue }) => {
        try {
            // Simulate API call
            const response = await addRole(roleData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);