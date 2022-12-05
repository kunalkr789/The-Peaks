import { fetchTopNewsAction } from "./app-effects";

export type AlertColor = "success" | "warning";
const sliceName = "app";

interface Notification {
  severity: AlertColor;
  message: string;
  timestamp: number;
  id: string;
}

export interface AppState {
  notification: Notification[];
  list: any[];
  loading: boolean;
}

const initialState: AppState = {
  notification: [],
  list: [],
  loading: false,
};

function reducer(state: AppState, action: { type: string; payload?: any }) {
  switch (action.type) {
    case `${fetchTopNewsAction}-pending`:
      return {
        ...state,
        loading: true,
      };
    case `${fetchTopNewsAction}-completed`:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case `${fetchTopNewsAction}-rejected`:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}

const appSlice = {
  sliceName,
  initialState,
  reducer,
};

export default appSlice;
