import { createSlice } from "@reduxjs/toolkit";


export const check = createSlice({
  name:"toolkit",
  initialState:{
    tmp:0,
    PlayList:null,
    loading:false,
    erro:false,
    correctItem:null
  },
  reducers:{
    startRequest(state){
      state.loading = true
    },
    endRequest(state,actions){
      state.loading = false
      state.PlayList = actions.payload
    },
  }
})

export default check.reducer;

export const { startRequest,endRequest} = check.actions;
