import { default as init } from "https://esm.sh/xe-nodejs-mock";
import * as rnd from "https://esm.sh/xe-nodejs-mock/rnd.js";
var arr = init(100);
console.table(arr);

var x = rnd.oneOf(arr);
console.dir(x);

var d = rnd.daten(42);
var n = rnd.fixed(5);
console.log(d, n);
