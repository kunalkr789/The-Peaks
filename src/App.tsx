import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { fetchTopNewsEffect } from "./state/reducers/app/app-effects";
import { AppState } from "./state/reducers/app/app-reducer";
import { useStoreContext } from "./state/the-peaks-context";

function App() {
  const { dispatch, state } = useStoreContext();
  const appState = state.app as AppState;

  useEffect(() => {
    dispatch(fetchTopNewsEffect());
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
