import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'tets'
}

const {
    actions:{setTitle},
    reducer
} = createSlice({
    name: 'homePage',
    initialState,
    reducers:{
        setTitle: (state, action) => ({
            ...state,
            title:action.payload
        })
    }
})

export default reducer;
export {setTitle};