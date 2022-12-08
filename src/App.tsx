import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import {
  fetchSearchResultsEffect,
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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="App"
      style={{ overflow: "auto", height: "-webkit-fill-available" }}
      // onScrollCapture={(e) => {
      //   const target = e.target as HTMLDivElement;
      //   let bottom = target.scrollHeight - target.clientHeight;
      //   let distanceBottom = Math.round((bottom / 100) * 50);
      //   console.log(target.scrollTop, bottom, distanceBottom);
      //   if (
      //     target.scrollTop > bottom - distanceBottom &&
      //     appState.searchResults.length % 10 === 0 &&
      //     !appState.loading
      //   ) {
      //     console.log("in");
      //     dispatch(
      //       fetchSearchResultsEffect(
      //         appState.searchQuery,
      //         appState.searchResults.length / 10
      //       )
      //     );
      //   }
      // }}
    >
      <Navbar />
      <div
        style={{
          paddingTop: "8.75vw",
          overflow: "auto",
          height: "-webkit-fill-available",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/article" element={<Article />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
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
