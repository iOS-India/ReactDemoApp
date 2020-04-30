import React from "react";

function Search({ handleInput, search }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search movies"
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;
