import Array, { push as Array_push } from "std:global/Array";
import String from "std:global/String";
import RegExp from "std:global/RegExp";
import Error from "std:global/Error";
import EvalError from "std:global/EvalError";
import RangeError from "std:global/RangeError";
import ReferenceError from "std:global/ReferenceError";
import SyntaxError from "std:global/SyntaxError";
import TypeError from "std:global/TypeError";
import URIError from "std:global/URIError";
import MediaError from "std:global/MediaError";
import { apply as Reflect_apply } from "std:global/Reflect";
const a = new Array();
a.length;
Reflect_apply(Array_push, a, [1]);
const first = a[0];
const s = new String();
s.length;
const r = new RegExp();
r.lastIndex;
const e = new Error();
e.message;
const ee = new EvalError();
ee.message;
const re = new RangeError();
re.message;
const rf = new ReferenceError();
rf.message;
const se = new SyntaxError();
se.message;
const te = new TypeError();
te.message;
const ue = new URIError();
ue.message;
const me = new MediaError();
me.message;
function someFn(param) {
    return param;
}
const l = someFn.length;
const p = someFn.prototype;
const n = someFn.name;
const pl = someFn.prototype.length;
