import React, { useEffect, useState } from "react";
import "../App.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { AppState } from "../state/reducers/app/app-reducer";
import { useStoreContext } from "../state/the-peaks-context";
import { ReactComponent as BookmarkIcon } from "../assets/bookmark.svg";

interface INotificationProps {
  message: string;
  color: string;
}

function Notification({ message, color }: INotificationProps) {
  const { dispatch, state } = useStoreContext();
  const appState = state.app as AppState;
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    setNotify(appState.notification.show);
  }, [appState.notification]);

  return notify ? (
    <div
      style={{
        backgroundColor:
          appState.notification.type === "add" ? "#388E3C" : "#D32F2F",
        width: "100vw",
        position: "fixed",
        bottom: 0,
        height: "32px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BookmarkIcon />
      <p
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: ".875rem",
          fontWeight: 700,
          paddingLeft: "10px",
        }}
      >
        {message}
      </p>
    </div>
  ) : (
    <></>
  );
}

export default Notification;
