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
    actions:{getWebSiteDataStart, getWebSiteDataSuccess,getWebSiteDataError,
         updateSettingStart, updateSettingSuccess, updateSettingError,
         createSettingStart, createSettingSuccess, createSettingError,
        },
    reducer
} = createSlice({
    name: 'setting',
    initialState,
    reducers:{
        getWebSiteDataStart: (state, action) =>({
            ...state,
            currentDomain:action.payload,
            loading:true
        }),
        getWebSiteDataSuccess: (state, action)=>({
            ...state,
            success:true,
            webSiteConfig:action.payload
        }),
        getWebSiteDataError: (state,action)=>({
            ...state,
            success:false,
            error:action.payload
        }),
        updateSettingStart: (state, action) =>({
            ...state,
            currentDomain:action.payload,
            loading:true
        }), 
        updateSettingSuccess: (state, action) =>({
            ...state,
            success:true,
            webSiteConfig:action.payload
        }), 
        updateSettingError: (state, action) =>({
            ...state,
            success:false,
            error:action.payload
        }),
        createSettingStart: (state, action) =>({
            ...state,
            currentDomain:action.payload,
            loading:true
        }), 
        createSettingSuccess: (state, action) =>({
            ...state,
            success:true,
            webSiteConfig:action.payload
        }), 
        createSettingError: (state, action) =>({
            ...state,
            success:false,
            error:action.payload
        })
    }
})

export default reducer;
export {getWebSiteDataStart, getWebSiteDataSuccess, getWebSiteDataError,
     updateSettingStart, updateSettingSuccess, updateSettingError,
     createSettingStart, createSettingSuccess, createSettingError,};