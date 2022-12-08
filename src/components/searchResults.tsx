import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useStoreContext } from "../state/the-peaks-context";
import { AppState } from "../state/reducers/app/app-reducer";
import { useNavigate } from "react-router-dom";
import BookmarkButton from "./bookmarkButton";
import SortAndFilter from "./sortAndFilter";
import Card from "./card";

function SearchResults() {
  const { state } = useStoreContext();
  const navigate = useNavigate();
  const appState = state.app as AppState;
  const { searchResults } = appState;
  const [data, setData] = useState([...searchResults]);

  useEffect(() => {
    setData([...searchResults]);
  }, [searchResults]);

  function sortList(sortBy: string) {
    if (sortBy === "old") {
      const newData = searchResults.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d2.valueOf() - d1.valueOf();
      });
      setData([...newData]);
    } else {
      const newData = searchResults.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d1.valueOf() - d2.valueOf();
      });
      setData([...newData]);
    }
  }

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
          Search Results
        </p>
        <div style={{ display: "flex" }}>
          <BookmarkButton
            text="View Bookmarks"
            onClick={() => navigate("/bookmarks")}
          />
          <SortAndFilter onChange={sortList} />
        </div>
      </div>
      <div className="main">
        <ul className="cards">
          {data.map((_, i) => (
            <Card data={_} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;
