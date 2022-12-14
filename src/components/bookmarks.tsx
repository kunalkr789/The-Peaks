import React, { useEffect, useState } from "react";
import Card from "./card";
import { useStoreContext } from "../state/the-peaks-context";
import { AppState } from "../state/reducers/app/app-reducer";
import SearchResults from "./searchResults";
import SortAndFilter from "./sortAndFilter";

function Bookmarks() {
  const { state } = useStoreContext();
  const appState = state.app as AppState;
  const { bookmarks } = appState;
  const [data, setData] = useState([...bookmarks]);

  useEffect(() => {
    setData([...bookmarks]);
  }, [bookmarks]);

  function sortList(sortBy: string) {
    if (sortBy === "old") {
      const newData = bookmarks.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d2.valueOf() - d1.valueOf();
      });
      setData([...newData]);
    } else {
      const newData = bookmarks.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d1.valueOf() - d2.valueOf();
      });
      setData([...newData]);
    }
  }

  return appState.searchResults.length && appState.searchQuery ? (
    <SearchResults />
  ) : (
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

export default Bookmarks;
