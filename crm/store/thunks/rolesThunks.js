import { createAsyncThunk } from "@reduxjs/toolkit";
import { addRole, updateRole } from "@/http/roles";

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

export const updateRoleThunk = createAsyncThunk(
    'roles/updateRole',
    async (roleData, { rejectWithValue }) => {
        try {
            // Simulate API call
            const response = await updateRole(roleData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);