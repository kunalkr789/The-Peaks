import React from "react";
import Card from "./card";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useStoreContext } from "../state/the-peaks-context";
import { AppState } from "../state/reducers/app/app-reducer";
import { useNavigate } from "react-router-dom";

function Bookmarks() {
  const { dispatch, state } = useStoreContext();
  const navigate = useNavigate();
  const appState = state.app as AppState;
  const { bookmarks } = appState;
  const style: React.CSSProperties = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "-webkit-fill-available",
    paddingBottom: "10px",
    paddingRight: "10px",
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        padding: "3vw 11.45vw 11.45vw 11.45vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontSize: "3rem",
            fontWeight: 700,
          }}
        >
          All Bookmark
        </p>
        <div>
          <button>View Bookmark</button>
        </div>
      </div>

      <div className="main">
        <ul className="cards">
          {bookmarks.map((_, i) => (
            <Card data={_} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Bookmarks;
