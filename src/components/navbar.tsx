import React from "react";
// import Logo from "./logo";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "8.75vw",
        backgroundColor: "#09357B",
        //paddingLeft: "11.45vw",
      }}
    >
      <div
        style={{
          height: "inherit",
          marginLeft: "11.45vw",
          marginRight: "11.45vw",
        }}
      >
        <Logo />
      </div>
    </div>
  );
}

export default Navbar;
