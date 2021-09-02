// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showNum: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showNum = !state.showNum;
        }
    }
})

const initialAuthState = { isAuthenticated:false };

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})



const store = configureStore({
    reducer: {counter:counterSlice.reducer, auth:authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;





// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showNum: state.showNum
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showNum: state.showNum
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showNum: state.showNum
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showNum: !state.showNum
//     };
//   }

//   return state;
// };