import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let time = new Date();
time = time.getHours();
let Greeting = " ";
const cssStyle = {};

if(time > 12 && time < 16){
  Greeting = "Good afternoon";
  cssStyle.color = 'Red';
}else if(time >= 16 && time <23){
  Greeting = "Good Evening";
  cssStyle.color = 'black';

}else if(time >=23){
  Greeting = "Good Night"
}
else{
  Greeting = "Good morning";
  cssStyle.color = 'green';
}


ReactDom.render(
  <>
  <div>
    <h1>Hello sir , <span style = {cssStyle}> {Greeting}  </span></h1>
  </div>
  </>,
  document.getElementById('root')
);