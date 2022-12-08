import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

interface ICardProps {
  data: any;
}

function Card({ data }: ICardProps) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/article?id=${data?.id}`)}
      className="cards_item"
    >
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
