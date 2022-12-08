import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { fetchSearchResultsEffect } from "../state/reducers/app/app-effects";
import { AppState } from "../state/reducers/app/app-reducer";
import { useStoreContext } from "../state/the-peaks-context";

function Navbar() {
  const { dispatch, state } = useStoreContext();
  const appState = state.app as AppState;
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  return (
    <div
      style={{
        width: "100%",
        height: "8.75vw",
        backgroundColor: "#09357B",
      }}
    >
      <div
        style={{
          height: "inherit",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "11.45vw",
          marginRight: "11.45vw",
        }}
      >
        <a href="/">
          <Logo />
        </a>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            borderBottom: "2px solid #fff",
            alignSelf: "end",
            height: "max-content",
            display: "flex",
            padding: "10px",
          }}
        >
          {showSearchInput && (
            <input
              onChange={(e) => {
                dispatch({
                  type: "app/setSearchQuery",
                  payload: e.target.value,
                });
                if (e.target.value)
                  dispatch(fetchSearchResultsEffect(e.target.value));
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{
                height: "fit-content",
                background: "none",
                border: "none",
              }}
              value={appState.searchQuery}
              type="search"
              placeholder="search all news"
            />
          )}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
