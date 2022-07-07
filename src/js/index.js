//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Contadorsimple from "./component/home.jsx";

let counter = 0;
setInterval(function () {
  const cuatro = Math.floor(counter / 86400);
  const tres = Math.floor(counter / 3600);
  const dos = Math.floor(counter / 60);
  const uno = Math.floor(counter / 1);
  counter++;
  ReactDOM.render(
    <Contadorsimple
      primernumero={uno}
      segundonumero={dos}
      tercernumero={tres}
      cuartonumero={cuatro}
    />,
    document.querySelector("#app")
  );
}, 1000);
