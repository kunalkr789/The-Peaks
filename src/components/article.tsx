import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import useQuery from "../hooks/useQuery";
import { AppState } from "../state/reducers/app/app-reducer";
import { useStoreContext } from "../state/the-peaks-context";
import BookmarkButton from "./bookmarkButton";
import SearchResults from "./searchResults";

function Article() {
  const { dispatch, state } = useStoreContext();
  const appState = state.app as AppState;
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get("id");
  const data =
    appState.list.find((_) => _?.id === id) ||
    appState.searchResults.find((_) => _?.id === id) ||
    appState.sports.find((_) => _?.id === id);
  const [bookmarkAdded, setBookmarkAdded] = useState(
    appState.bookmarks.includes((_: any) => _?.id === id)
  );

  useEffect(() => {
    const data = appState.bookmarks.find((_: any) => _?.id === id);
    if (data) setBookmarkAdded(true);
    else setBookmarkAdded(false);
  }, [appState.bookmarks]);

  return appState.searchResults.length && appState.searchQuery && !id ? (
    <SearchResults />
  ) : (
    <div
      style={{
        minHeight: "90vh",
        padding: "3vw 11.45vw 11.45vw 11.45vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "60%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!bookmarkAdded ? (
          <BookmarkButton
            text="Add Bookmark"
            onClick={() => {
              dispatch({
                type: "app/showNotification",
                payload: {
                  show: true,
                  message: "SAVED TO BOOKMARKS",
                  type: "add",
                },
              });
              dispatch({
                type: "app/addBookmark",
                payload: data,
              });
              setTimeout(() => {
                dispatch({
                  type: "app/showNotification",
                  payload: { show: false, message: "" },
                });
              }, 3000);
            }}
          />
        ) : (
          <BookmarkButton
            text="Remove Bookmark"
            onClick={() => {
              dispatch({
                type: "app/showNotification",
                payload: {
                  show: true,
                  message: "REMOVED FROM BOOKMARKS",
                  type: "delete",
                },
              });
              dispatch({
                type: "app/removeBookmark",
                payload: id,
              });
              setTimeout(() => {
                dispatch({
                  type: "app/showNotification",
                  payload: { show: false, message: "" },
                });
              }, 3000);
            }}
          />
        )}
        <p style={{ fontSize: ".75rem" }}>{data?.webPublicationDate}</p>
        <p style={{ fontSize: "2.125rem", fontWeight: 700 }}>
          {data?.webTitle}
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>
          {data?.fields?.headline}
        </p>
        <p style={{ fontSize: ".875rem" }}>{data?.fields?.bodyText}</p>
      </div>
      <div style={{ width: "40%", padding: "10px" }}></div>
    </div>
  );
}

export default Article;
