
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter";



// render your react application
let contador = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;

setInterval(() => {
    ReactDOM.render(
        <SecondsCounter seconds={contador} seconds2={contador2} seconds3={contador3} seconds4={contador4} seconds5={contador5} seconds6= {contador6}/>,
        document.querySelector("#app")
    );

    contador = contador + 1;
    contador2 = contador2 + 1;
    contador3 = contador3 + 1;
    contador4 = contador4 + 1;
    contador5 = contador5 + 1;
    contador6 = contador6 + 1;
},1000);
