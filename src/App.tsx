import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import { fetchTopNewsEffect } from "./state/reducers/app/app-effects";
import { AppState } from "./state/reducers/app/app-reducer";
import { useStoreContext } from "./state/the-peaks-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./components/article";
import Notification from "./components/notification";
import Bookmarks from "./components/bookmarks";

function App() {
  const { dispatch, state } = useStoreContext();
  const appState = state.app as AppState;

  useEffect(() => {
    dispatch(fetchTopNewsEffect());
    dispatch({
      type: "app/getBookmarks",
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </BrowserRouter>
      <Notification message="notiii" color="red" />
    </div>
  );
}

export default App;
