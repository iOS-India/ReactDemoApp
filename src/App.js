import "./App.css";

import React, { useState } from "react";
import Search from "./movie/Search";
import Axios from "axios";
import Results from "./movie/Results";
import MovieMain from "./movie/MovieMain";
import Crud from "./crud/Crud";
 import Hooku from "./Hooku";
import aa from "./components/Tablle"
function App() {
  return (
    <div className="App" >
    <Crud/>
    </div>
  );
}

export default App;
