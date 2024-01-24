import {createSlice} from "@reduxjs/toolkit";
const initialStateCustomer = {
    fullName:'',
    nationalID:'',
    createdAt:'',
};

const customerSlice = createSlice({
    name:'customer',
    initialState:initialStateCustomer,
    reducers:{
        createCustomer:{
            prepare(fullName,nationalID){
                return{
                 payload:{   
                    fullName,
                    nationalID,
                    createdAt:new Date().toISOString(),
                }
               }
            },
            reducer(state,action){
            state.fullName = action.payload.fullName;
            state.nationalID = action.payload.nationalID;
            state.createdAt = action.payload.createdAt;
         },
        },
        updatedName(state,action){
            state.fullName = action.payload;
        }

    }
})

export const {createCustomer,updatedName} = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer,{type,payload}){
//     switch(type){

//         case 'customer/createCustomer':
//             return {
//                 ...state,
//                 fullName:payload.fullName,
//                 nationalID:payload.nationalID,
//                 createdAt:payload.createdAt,
//             };

//         case 'customer/updatedName':
//             return {...state, fullName:payload};

//         default:
//             return state;
//     }
// }



// export function createCustomer(fullName,nationalID){
//     return {
//         type:"customer/createCustomer",
//         payload:{fullName,nationalID,createdAt: new Date().toISOString()}
//     };
// }

// export function updatedName(fullName){
//     return {
//         type:'account/updatedName', payload: fullName
//     };
// }