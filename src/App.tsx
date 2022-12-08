import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import {
  fetchSportsNewsEffect,
  fetchTopNewsEffect,
} from "./state/reducers/app/app-effects";
import { AppState } from "./state/reducers/app/app-reducer";
import { useStoreContext } from "./state/the-peaks-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./components/article";
import Notification from "./components/notification";
import Bookmarks from "./components/bookmarks";
import SearchResults from "./components/searchResults";

function App() {
  const { dispatch, state } = useStoreContext();
  const appState = state.app as AppState;

  useEffect(() => {
    dispatch(fetchTopNewsEffect());
    dispatch(fetchSportsNewsEffect());
    dispatch({
      type: "app/getBookmarks",
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: "8.75vw" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/article" element={<Article />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
        <Notification message={appState.notification.message} color="red" />
        <div
          style={{
            width: "100%",
            height: "8.75vw",
            backgroundColor: "#09357B",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
