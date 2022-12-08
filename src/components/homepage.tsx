import React, { useEffect, useState } from "react";
import Card from "./card";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useStoreContext } from "../state/the-peaks-context";
import { AppState } from "../state/reducers/app/app-reducer";
import { useNavigate } from "react-router-dom";
import BookmarkButton from "./bookmarkButton";
import SearchResults from "./searchResults";
import SortAndFilter from "./sortAndFilter";
import LoadingPage from "./loadingPage";

function Homepage() {
  const { dispatch, state } = useStoreContext();
  const navigate = useNavigate();
  const appState = state.app as AppState;
  const { list, sports, loading } = appState;
  const [data, setData] = useState([...list]);
  const [sportsData, setSportsData] = useState([...sports]);
  const style: React.CSSProperties = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "-webkit-fill-available",
    paddingBottom: "10px",
    paddingRight: "10px",
  };

  useEffect(() => {
    setData([...list]);
  }, [list]);

  useEffect(() => {
    setSportsData([...sports]);
  }, [sports]);

  useEffect(() => {
    if (!appState.searchQuery)
      dispatch({
        type: "app/clearSearchQuery",
      });
  }, [appState.searchQuery]);

  function sortList(sortBy: string) {
    if (sortBy === "old") {
      const newData = list.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d2.valueOf() - d1.valueOf();
      });
      const newSportsData = sports.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d2.valueOf() - d1.valueOf();
      });
      setData([...newData]);
      setSportsData([...newSportsData]);
    } else {
      const newData = list.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d1.valueOf() - d2.valueOf();
      });
      const newSportsData = sports.sort(function (a, b) {
        const d1 = new Date(a?.webPublicationDate);
        const d2 = new Date(b?.webPublicationDate);
        return d1.valueOf() - d2.valueOf();
      });
      setData([...newData]);
      setSportsData([...newSportsData]);
    }
  }

  return loading ? (
    <LoadingPage />
  ) : appState.searchResults.length && appState.searchQuery ? (
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
          Top Stories
        </p>
        <div style={{ display: "flex" }}>
          <BookmarkButton
            text="View Bookmarks"
            onClick={() => navigate("/bookmarks")}
          />
          <SortAndFilter onChange={sortList} />
        </div>
      </div>
      <div
        onClick={() => navigate(`/article?id=${data[0]?.id}`)}
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
                <h2 className="card_title">{data[0]?.webTitle}</h2>
                <p className="card_text">{data[0]?.fields?.bodyText}</p>
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
          <div style={{ display: "flex", flexDirection: "row", height: "60%" }}>
            <div
              onClick={() => navigate(`/article?id=${data[1]?.id}`)}
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
                  <h2 className="card_title">{data[1]?.webTitle}</h2>
                </div>
              </div>
            </div>
            <div
              onClick={() => navigate(`/article?id=${data[2]?.id}`)}
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
                  <h2 className="card_title">{data[2]?.webTitle}</h2>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", height: "40%" }}>
            <div
              onClick={() => navigate(`/article?id=${data[3]?.id}`)}
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
                <h2 className="card_title">{data[3]?.webTitle}</h2>
              </div>
            </div>
            <div
              onClick={() => navigate(`/article?id=${data[4]?.id}`)}
              style={{
                ...style,
                paddingBottom: "10px",
                minHeight: "90%",
              }}
            >
              <div
                className="card_content"
                style={{
                  height: "inherit",
                  borderBottom: "3px solid #388E3C",
                }}
              >
                <h2 className="card_title">{data[4]?.webTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <ul className="cards">
          {data.map((_, i) => (i > 4 ? <Card data={_} /> : <></>))}
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
          {sportsData.map((_, i) => (
            <Card data={_} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
