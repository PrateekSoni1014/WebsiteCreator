import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'tets',
    webSiteConfig: {},
    success:false,
    loading:false,
    currentDomain:'',
    error:false
}

const {
    actions:{setTitle, getWebSiteDataStart, getWebSiteDataSuccess, getWebSiteDataError},
    reducer
} = createSlice({
    name: 'homePage',
    initialState,
    reducers:{
        setTitle: (state, action) => ({
            ...state,
            title:action.payload
        }),
        getWebSiteDataStart: (state, action) =>({
            ...state,
            currentDomain:action.payload,
            success:true,
            loading:true
        }),
        getWebSiteDataSuccess: (state, action)=>({
            ...state,
            webSiteConfig:action.payload
        }),
        getWebSiteDataError: (state,action)=>({
            ...state,
            success:false,
            error:action.payload
        })
    }
})

export default reducer;
export {setTitle, getWebSiteDataStart, getWebSiteDataSuccess, getWebSiteDataError};