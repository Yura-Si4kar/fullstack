import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '@/config/states.config';

const clientsSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        setClientsList: (state, action) => {
            state.clientsList = action.payload;
        }
    }
});

export const { setClientsList } = clientsSlice.actions;
export default clientsSlice.reducer;