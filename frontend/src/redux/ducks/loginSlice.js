import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
        name:"login",
        initialState: {status:false},
        reducers:{
                login(state) {
                        state.status = true
                },
                logout(state) {
                        state.status = false
                }
        }
});

export default loginSlice.reducer;
export const {login, logout} = loginSlice.actions;