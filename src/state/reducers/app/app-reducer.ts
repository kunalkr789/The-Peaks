import {
  fetchSearchResultsAction,
  fetchSportsNewsAction,
  fetchTopNewsAction,
} from "./app-effects";

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
  searchResults: any[];
  loading: boolean;
  searchQuery: string;
  sports: any[];
}

const initialState: AppState = {
  notification: {
    show: false,
    message: "",
  },
  list: [],
  bookmarks: [],
  searchResults: [],
  loading: false,
  searchQuery: "",
  sports: [],
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
    case `${fetchSearchResultsAction}-pending`:
      return {
        ...state,
        loading: true,
      };
    case `${fetchSearchResultsAction}-completed`:
      return {
        ...state,
        searchResults: state.searchResults.concat(action.payload),
        loading: false,
      };
    case `${fetchSearchResultsAction}-rejected`:
      return {
        ...state,
        loading: false,
      };
    case `${fetchSportsNewsAction}-pending`:
      return {
        ...state,
        loading: true,
      };
    case `${fetchSportsNewsAction}-completed`:
      return {
        ...state,
        sports: action.payload,
        loading: false,
      };
    case `${fetchSportsNewsAction}-rejected`:
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
    case "app/setSearchQuery":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "app/clearSearchQuery":
      return {
        ...state,
        searchQuery: "",
        //searchResults: [],
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
