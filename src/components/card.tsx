import React from "react";
import "../App.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

interface ICardProps {
  data: any;
}

function Card({ data }: ICardProps) {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <Logo />
        </div>
        <div
          className="card_content"
          style={{ borderBottom: "3px solid #D32F2F" }}
        >
          <h2 className="card_title">{data?.webTitle}</h2>
          <p className="card_text">{data?.fields?.bodyText}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
