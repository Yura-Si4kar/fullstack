import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '@/config/states.config';
import { deleteUser, updateUserThunk } from "../thunks/usersThunks";

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsersList: (state, action) => {
            state.usersList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserThunk.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(updateUserThunk.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.usersList.findIndex(user => user._id === action.payload._id);
                if (index !== -1) {
                    state.usersList[index] = action.payload;
                }
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.usersList = state.usersList.filter(user => user._id !== action.payload.userId);
            });
    }
});

export const { setUsersList } = usersSlice.actions;
export default usersSlice.reducer;