import React, { useEffect, useState } from "react";
// import Logo from "./logo";
import { ReactComponent as Logo } from "../assets/logo.svg";
import useQuery from "../hooks/useQuery";
import { AppState } from "../state/reducers/app/app-reducer";
import { useStoreContext } from "../state/the-peaks-context";

function Article() {
  const { dispatch, state } = useStoreContext();
  const appState = state.app as AppState;
  const query = useQuery();
  const id = query.get("id");
  const data = appState.list.find((_) => _?.id === id);
  const [bookmarkAdded, setBookmarkAdded] = useState(
    appState.bookmarks.includes((_: any) => _?.id === id)
  );
  useEffect(() => {
    setBookmarkAdded(appState.bookmarks.includes((_: any) => _?.id === id));
  }, [appState.bookmarks]);
  console.log(bookmarkAdded);
  return (
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
          <button
            onClick={() => {
              dispatch({
                type: "app/showNotification",
                payload: {
                  show: true,
                  message: "saved to bookmarks",
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
            style={{ width: "fit-content" }}
          >
            Add Bookmark
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "app/showNotification",
                payload: {
                  show: true,
                  message: "saved to bookmarks",
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
            style={{ width: "fit-content" }}
          >
            Remove Bookmark
          </button>
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
