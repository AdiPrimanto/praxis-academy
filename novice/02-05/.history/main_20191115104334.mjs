import { create, createReportList } from './modules/canvas.mjs';
import { name, draw, resportArea, reportPerimeter } from './modules/square.mjs'

let myCanvas = create('myCanvas', document.body, 480, 320);
let report