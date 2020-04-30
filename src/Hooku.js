import React, { useState } from "react";

function Hooku() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <div className="a">1</div>
      <div className="b">2</div>
      <div className="c">3</div>
      <div className="d">4</div>
      <div className="e">5</div>
    </div>
  );
}

export default Hooku;
