import { createSlice } from "@reduxjs/toolkit";


export const check = createSlice({
  name:"toolkit",
  initialState:{
    count:null,
    loading:false,
    currentPage:1,
    data:[],
    search:'',
    oneItem:{}
  },
  reducers:{
    startRequest(state){
      state.loading = true
    },
    endRequest(state,{payload}){
      state.loading = false
      state.count  = payload.count
      state.data = payload.dataPeople
    },
    changePage(state,{payload}){
      state.currentPage = payload
    },
    changeSearch(state,{payload}){
      state.currentPage = 1
      state.search = payload
    },
    chaneOneItem(state,{payload}){
      state.oneItem = payload
    }
  }
})

export default check.reducer;

export const { 
  startRequest,
  endRequest,
  addSome,
  changePage,
  changeSearch,
  chaneOneItem
} = check.actions;
