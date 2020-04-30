import React from "react";

function Resulty({ result, show }) {
  return (
    <div>
      <div className="results" onClick={() => show(result.imdbID)}>
        <h1> {result.Title} </h1>
        <img src={result.Poster} />
      </div>
    </div>
  );
}

export default Resulty;
