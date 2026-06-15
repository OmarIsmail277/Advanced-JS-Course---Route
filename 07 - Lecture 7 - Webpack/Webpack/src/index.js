import { add } from "./math.js";
import "./style.css";

const res = add(2, 3);

console.log(res);
console.log("resss");

document.body.innerHTML = `<h1>result is ${res}</h1>`;
