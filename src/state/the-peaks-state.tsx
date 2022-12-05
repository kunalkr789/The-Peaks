import { combineReducers } from "../utils/combine-reducer";
import appSlice from "./reducers/app/app-reducer";

const rootState = {
  [appSlice.sliceName]: appSlice.initialState,
};

const log = process.env.REACT_APP_DEVELOPMENT === "development" ? true : false;

const rootReducer = combineReducers(
  {
    [appSlice.sliceName]: appSlice.reducer,
  },
  { log: true }
);

const store = {
  rootState,
  rootReducer,
};

export default store;
