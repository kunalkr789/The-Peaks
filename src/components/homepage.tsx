import React, { useEffect } from "react";
import Card from "./card";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useStoreContext } from "../state/the-peaks-context";
import { AppState } from "../state/reducers/app/app-reducer";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const { dispatch, state } = useStoreContext();
  const navigate = useNavigate();
  const appState = state.app as AppState;
  const { list } = appState;
  const style: React.CSSProperties = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "-webkit-fill-available",
    paddingBottom: "10px",
    paddingRight: "10px",
  };

  useEffect(() => {
    if (!appState.searchQuery)
      dispatch({
        type: "app/clearSearchQuery",
      });
  }, [appState.searchQuery]);

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
          {appState.searchResults.length && appState.searchQuery
            ? "Search Results"
            : "Top Stories"}
        </p>
        <div>
          <button onClick={() => navigate("/bookmarks")}>View Bookmark</button>
        </div>
      </div>
      {appState.searchResults.length && appState.searchQuery ? (
        <div className="main">
          <ul className="cards">
            {appState.searchResults.map((_, i) => (
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <Logo />
                  </div>
                  <div
                    className="card_content"
                    style={{ borderBottom: "3px solid #D32F2F" }}
                  >
                    <h2 className="card_title">{_?.webTitle}</h2>
                    <p className="card_text">{_?.fields?.bodyText}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div
            onClick={() => navigate(`/article?id=${list[0]?.id}`)}
            style={{ display: "flex", flexDirection: "row", height: "30vw" }}
          >
            <div style={{ width: "50%", paddingRight: "10px" }}>
              <div style={{ ...style }}>
                <div className="card">
                  <div className="card_image">
                    <Logo />
                  </div>
                  <div
                    className="card_content"
                    style={{ borderBottom: "3px solid #D32F2F" }}
                  >
                    <h2 className="card_title">{list[0]?.webTitle}</h2>
                    <p className="card_text">{list[0]?.fields?.bodyText}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "50%",
                flexDirection: "column",
                height: "100%",
                paddingLeft: "10px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", height: "60%" }}
              >
                <div
                  onClick={() => navigate(`/article?id=${list[1]?.id}`)}
                  style={{
                    ...style,
                  }}
                >
                  <div className="card">
                    <div className="card_image">
                      <Logo />
                    </div>
                    <div
                      className="card_content"
                      style={{ borderBottom: "3px solid #D32F2F" }}
                    >
                      <h2 className="card_title">{list[1]?.webTitle}</h2>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => navigate(`/article?id=${list[2]?.id}`)}
                  style={{
                    ...style,
                  }}
                >
                  <div className="card">
                    <div className="card_image">
                      <Logo />
                    </div>
                    <div
                      className="card_content"
                      style={{ borderBottom: "3px solid #FFC107" }}
                    >
                      <h2 className="card_title">{list[2]?.webTitle}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", height: "40%" }}
              >
                <div
                  onClick={() => navigate(`/article?id=${list[3]?.id}`)}
                  style={{
                    ...style,
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    className="card_content"
                    style={{
                      height: "inherit",
                      borderBottom: "3px solid #2196F3",
                    }}
                  >
                    <h2 className="card_title">{list[3]?.webTitle}</h2>
                  </div>
                </div>
                <div
                  onClick={() => navigate(`/article?id=${list[4]?.id}`)}
                  style={{
                    ...style,
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    className="card_content"
                    style={{
                      height: "inherit",
                      borderBottom: "3px solid #388E3C",
                    }}
                  >
                    <h2 className="card_title">{list[4]?.webTitle}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main">
            <ul className="cards">
              {list.map((_, i) => (i > 4 ? <Card data={_} /> : <></>))}
            </ul>
          </div>
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
              Sports
            </p>
          </div>
          <div className="main">
            <ul className="cards">
              {appState.sports.map((_, i) => (
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <Logo />
                    </div>
                    <div
                      className="card_content"
                      style={{ borderBottom: "3px solid #D32F2F" }}
                    >
                      <h2 className="card_title">{_?.webTitle}</h2>
                      <p className="card_text">{_?.fields?.bodyText}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
