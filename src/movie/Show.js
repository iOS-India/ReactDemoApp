import React from "react";
import { Drawer, Button } from "antd";

function Show({ selected, hide }) {
  return (
    <div>
      <div className="show">
        <h2> {selected.Title} </h2>
        <p> {selected.Plot} </p>
        <img src={selected.Poster} />
      </div>
    </div>
  );
}

export default Show;
