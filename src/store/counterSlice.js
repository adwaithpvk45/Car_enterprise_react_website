import { createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0,
        items:[],
        quantity:{}
    },
    reducers:{
        increment:(state,action)=>{
            state.count +=1;
            const exists = state.items.some((item)=>item.id===action.payload.id)
            if(!exists){
            state.items.push(action.payload)
            }else{
            console.log("Item already exists")
            }
                state.quantity[action.payload.id]=(state.quantity[action.payload.id]||0)+1
            console.log(state.quantity)
        },
        decrement:(state,action)=>{
            console.log(state.quantity)
            state.count -=1;
            if (state.quantity[action.payload.id] >= 1) {
                state.quantity[action.payload.id] -= 1;
            } else {
                delete state.quantity[action.payload.id];
                state.items=state.items.filter((item)=>item.id!==action.payload.id)
            }
           console.log(state.items)
        },
        deleteItem:(state,action)=>{
            console.log(state.quantity[action.payload.id])
            console.log(state.count)
            state.items=state.items.filter((item)=>item.id!==action.payload.id)
            // if (state.quantity[action.payload.id]) {
                state.count = state.count- state.quantity[action.payload.id];
            // }            // console.log(state.count)
            delete state.quantity[action.payload.id]

        }
        }

})
// .console.log(count)
export const {increment,decrement,deleteItem} = counterSlice.actions
export default counterSlice.reducer