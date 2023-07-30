import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {signIn, signUp } from '../../helpers/helpers';

const SIGNIN = 'library/user/SIGNIN'
const ADD = 'library/user/ADD';

export const uploadUser = createAsyncThunk(ADD, async (user) => {
    await signUp(user);
    return user;
});

export const signinReducer = createAsyncThunk(SIGNIN, async (user) => {
    let result = await signIn(user);
    return  result;
});


const initialState = {
    user: {},
    authenticatedUser: {}
};



const usersSlice = createSlice({
    name: 'library/user',
    initialState,
    extraReducers: {
        [uploadUser.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.user = action.payload;
        },
        [signinReducer.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.authenticatedUser = action.payload;
        },
    },
});

export default usersSlice.reducer;