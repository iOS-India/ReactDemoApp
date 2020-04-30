import React from "react";
import Resulty from "./Resulty";

function Results({ results, show }) {
  return (
    <div className="kaalo">
      {results.map((result) => (
        <Resulty key={result.imdbID} result={result} show={show} />
      ))}
    </div>
  );
}

export default Results;
