import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import thunkMiddleware from 'redux-thunk'
import {loadState, saveState} from "../utils/storage/storage";

export const RootReducer = combineReducers({
  counter: counterReducer
})

export const store = legacy_createStore(RootReducer, loadState('state'), applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  saveState('state', {
    counter: store.getState().counter
  });
});

export type StoreType = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch