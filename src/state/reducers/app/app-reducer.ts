import { fetchTopNewsAction } from "./app-effects";

export type AlertColor = "add" | "remove";
const sliceName = "app";

interface Notification {
  show: boolean;
  type?: AlertColor;
  message: string;
  timestamp?: number;
  id?: string;
}

export interface AppState {
  notification: Notification;
  list: any[];
  bookmarks: any[];
  loading: boolean;
}

const initialState: AppState = {
  notification: {
    show: false,
    message: "",
  },
  list: [],
  bookmarks: [],
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
    case "app/showNotification":
      return {
        ...state,
        notification: action.payload,
      };
    case "app/addBookmark":
      const list = state.bookmarks.concat(action.payload);
      localStorage.setItem("bookmarks", JSON.stringify(list));
      return {
        ...state,
        bookmarks: list,
      };
    case "app/removeBookmark":
      const updatedList = state.bookmarks.filter(
        (_) => _?.id !== action.payload
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedList));
      return {
        ...state,
        bookmarks: state.bookmarks.filter((_) => _?.id !== action.payload),
      };
    case "app/getBookmarks":
      const bookmarks = localStorage.getItem("bookmarks");
      return {
        ...state,
        bookmarks: bookmarks ? JSON.parse(bookmarks) : [],
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
