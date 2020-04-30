import "./Movie.css";

import React, { useState } from "react";
// import Search from "./movie/Search";
import Axios from "axios";
import Results from "./Results";
import Search from "./Search";
import Show from "./Show";

// import Hooku from "./Hooku";

const api = {
  key: "354402dc",

  pubG:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwNDg5ODY5MC02NzdlLTAxMzgtN2M5NC0wNWIyYzM5NGZmYjciLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTg3NjM4OTYzLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImNvZGUtc2hyZXlhbnNoIn0.GNnsXmohJqLthKqzDGAw58AjfAazHC7YMxKy4CE9eSQ",

  baseUrl: " http://www.omdbapi.com/?apikey=354402dc",
};

function MovieMain() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      Axios(` ${api.baseUrl} &s=${state.s} `).then(({ data }) => {
        let results = data.Search;
        console.log(data);
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const show = (id) => {
    Axios(api.baseUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const hide = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div>
      <div style={{ marginLeft: "250px" }}>
        <h1>movie data base</h1>
        <Search handleInput={handleInput} search={search} />
      </div>
      <main>
        <Results results={state.results} show={show} />

        {typeof state.selected.Title != "undefined" ? (
          <Show selected={state.selected} hide={hide} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default MovieMain;
