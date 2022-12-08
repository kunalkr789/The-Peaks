import React from "react";
import { ReactComponent as BookmarkIcon } from "../assets/bookmark.svg";

interface IButtonProps {
  onClick: any;
  text: string;
}
function BookmarkButton({ onClick, text }: IButtonProps) {
  const style: React.CSSProperties = {
    backgroundColor: " #09357b",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.06)",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 12px 4px",
    gap: "6px",
    color: "#ffffff",
  };

  return (
    <div>
      <button onClick={onClick} style={{ ...style }}>
        <BookmarkIcon />
        {text}
      </button>
    </div>
  );
}

export default BookmarkButton;
