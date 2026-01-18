import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/config/states.config';
import { addRoleThunk } from '../thunks/rolesThunks';

const rolesSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {
        setRolesList: (state, action) => {
            state.rolesList = action.payload;
        },
        addUserRole: (state, action) => {
            state.rolesList.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addRoleThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(addRoleThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addRoleThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.rolesList.push(action.payload);
            })
    }
});

export const { setRolesList, addUserRole } = rolesSlice.actions;
export default rolesSlice.reducer;