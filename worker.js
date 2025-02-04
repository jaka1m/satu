// _worker.js
import { connect as Pe } from "cloudflare:sockets";
var kr = Object.defineProperty;
var Kt = Object.getOwnPropertyDescriptor;
var Xt = Object.getOwnPropertyNames;
var qt = Object.prototype.hasOwnProperty;
var tr = (i, r) => () => (i && (r = i(i = 0)), r);
var Nr = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var Kr = (i, r) => {
  for (var t in r)
    kr(i, t, { get: r[t], enumerable: true });
};
var Gt = (i, r, t, e) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let n of Xt(r))
      !qt.call(i, n) && n !== t && kr(i, n, { get: () => r[n], enumerable: !(e = Kt(r, n)) || e.enumerable });
  return i;
};
var Xr = (i) => Gt(kr({}, "__esModule", { value: true }), i);
function Gr() {
  throw new Error("setTimeout has not been defined");
}
function Qr() {
  throw new Error("clearTimeout has not been defined");
}
function Zr(i) {
  if (j === setTimeout)
    return setTimeout(i, 0);
  if ((j === Gr || !j) && setTimeout)
    return j = setTimeout, setTimeout(i, 0);
  try {
    return j(i, 0);
  } catch {
    try {
      return j.call(null, i, 0);
    } catch {
      return j.call(this, i, 0);
    }
  }
}
function Qt(i) {
  if (rr === clearTimeout)
    return clearTimeout(i);
  if ((rr === Qr || !rr) && clearTimeout)
    return rr = clearTimeout, clearTimeout(i);
  try {
    return rr(i);
  } catch {
    try {
      return rr.call(null, i);
    } catch {
      return rr.call(this, i);
    }
  }
}
function Zt() {
  !hr || !ir || (hr = false, ir.length ? K = ir.concat(K) : yr = -1, K.length && jr());
}
function jr() {
  if (!hr) {
    var i = Zr(Zt);
    hr = true;
    for (var r = K.length; r; ) {
      for (ir = K, K = []; ++yr < r; )
        ir && ir[yr].run();
      yr = -1, r = K.length;
    }
    ir = null, hr = false, Qt(i);
  }
}
function jt(i) {
  var r = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var t = 1; t < arguments.length; t++)
      r[t - 1] = arguments[t];
  K.push(new rt(i, r)), K.length === 1 && !hr && Zr(jr);
}
function rt(i, r) {
  this.fun = i, this.array = r;
}
function er() {
}
function Ei(i) {
  throw new Error("process.binding is not supported");
}
function yi() {
  return "/";
}
function Ai(i) {
  throw new Error("process.chdir is not supported");
}
function Fi() {
  return 0;
}
function mi(i) {
  var r = di.call(ur) * 1e-3, t = Math.floor(r), e = Math.floor(r % 1 * 1e9);
  return i && (t = t - i[0], e = e - i[1], e < 0 && (t--, e += 1e9)), [t, e];
}
function Ri() {
  var i = /* @__PURE__ */ new Date(), r = i - gi;
  return r / 1e3;
}
var j;
var rr;
var K;
var hr;
var ir;
var yr;
var ri;
var ti;
var ii;
var ei;
var ni;
var oi;
var fi;
var ai;
var ui;
var hi;
var si;
var ci;
var li;
var xi;
var pi;
var wi;
var ur;
var di;
var gi;
var L;
var qr;
var D = tr(() => {
  j = Gr, rr = Qr;
  typeof globalThis.setTimeout == "function" && (j = setTimeout);
  typeof globalThis.clearTimeout == "function" && (rr = clearTimeout);
  K = [], hr = false, yr = -1;
  rt.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  ri = "browser", ti = "browser", ii = true, ei = {}, ni = [], oi = "", fi = {}, ai = {}, ui = {};
  hi = er, si = er, ci = er, li = er, xi = er, pi = er, wi = er;
  ur = globalThis.performance || {}, di = ur.now || ur.mozNow || ur.msNow || ur.oNow || ur.webkitNow || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  gi = /* @__PURE__ */ new Date();
  L = { nextTick: jt, title: ri, browser: ii, env: ei, argv: ni, version: oi, versions: fi, on: hi, addListener: si, once: ci, off: li, removeListener: xi, removeAllListeners: pi, emit: wi, binding: Ei, cwd: yi, chdir: Ai, umask: Fi, hrtime: mi, platform: ti, release: ai, config: ui, uptime: Ri }, qr = {};
  Object.keys(qr).forEach((i) => {
    let r = i.split("."), t = L;
    for (let e = 0; e < r.length; e++) {
      let n = r[e];
      e === r.length - 1 ? t[n] = qr[i] : t = t[n] || (t[n] = {});
    }
  });
});
function nt() {
  Lr = true;
  for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, t = i.length; r < t; ++r)
    H[r] = i[r], W[i.charCodeAt(r)] = r;
  W["-".charCodeAt(0)] = 62, W["_".charCodeAt(0)] = 63;
}
function Ti(i) {
  Lr || nt();
  var r, t, e, n, o, f, u = i.length;
  if (u % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  o = i[u - 2] === "=" ? 2 : i[u - 1] === "=" ? 1 : 0, f = new _i(u * 3 / 4 - o), e = o > 0 ? u - 4 : u;
  var a = 0;
  for (r = 0, t = 0; r < e; r += 4, t += 3)
    n = W[i.charCodeAt(r)] << 18 | W[i.charCodeAt(r + 1)] << 12 | W[i.charCodeAt(r + 2)] << 6 | W[i.charCodeAt(r + 3)], f[a++] = n >> 16 & 255, f[a++] = n >> 8 & 255, f[a++] = n & 255;
  return o === 2 ? (n = W[i.charCodeAt(r)] << 2 | W[i.charCodeAt(r + 1)] >> 4, f[a++] = n & 255) : o === 1 && (n = W[i.charCodeAt(r)] << 10 | W[i.charCodeAt(r + 1)] << 4 | W[i.charCodeAt(r + 2)] >> 2, f[a++] = n >> 8 & 255, f[a++] = n & 255), f;
}
function Ui(i) {
  return H[i >> 18 & 63] + H[i >> 12 & 63] + H[i >> 6 & 63] + H[i & 63];
}
function vi(i, r, t) {
  for (var e, n = [], o = r; o < t; o += 3)
    e = (i[o] << 16) + (i[o + 1] << 8) + i[o + 2], n.push(Ui(e));
  return n.join("");
}
function tt(i) {
  Lr || nt();
  for (var r, t = i.length, e = t % 3, n = "", o = [], f = 16383, u = 0, a = t - e; u < a; u += f)
    o.push(vi(i, u, u + f > a ? a : u + f));
  return e === 1 ? (r = i[t - 1], n += H[r >> 2], n += H[r << 4 & 63], n += "==") : e === 2 && (r = (i[t - 2] << 8) + i[t - 1], n += H[r >> 10], n += H[r >> 4 & 63], n += H[r << 2 & 63], n += "="), o.push(n), o.join("");
}
function Ar() {
  return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function X(i, r) {
  if (Ar() < r)
    throw new RangeError("Invalid typed array length");
  return h.TYPED_ARRAY_SUPPORT ? (i = new Uint8Array(r), i.__proto__ = h.prototype) : (i === null && (i = new h(r)), i.length = r), i;
}
function h(i, r, t) {
  if (!h.TYPED_ARRAY_SUPPORT && !(this instanceof h))
    return new h(i, r, t);
  if (typeof i == "number") {
    if (typeof r == "string")
      throw new Error("If encoding is specified then the first argument must be a string");
    return Wr(this, i);
  }
  return ot(this, i, r, t);
}
function ot(i, r, t, e) {
  if (typeof r == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && r instanceof ArrayBuffer ? Si(i, r, t, e) : typeof r == "string" ? Ii(i, r, t) : Di(i, r);
}
function ft(i) {
  if (typeof i != "number")
    throw new TypeError('"size" argument must be a number');
  if (i < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Bi(i, r, t, e) {
  return ft(r), r <= 0 ? X(i, r) : t !== void 0 ? typeof e == "string" ? X(i, r).fill(t, e) : X(i, r).fill(t) : X(i, r);
}
function Wr(i, r) {
  if (ft(r), i = X(i, r < 0 ? 0 : Or(r) | 0), !h.TYPED_ARRAY_SUPPORT)
    for (var t = 0; t < r; ++t)
      i[t] = 0;
  return i;
}
function Ii(i, r, t) {
  if ((typeof t != "string" || t === "") && (t = "utf8"), !h.isEncoding(t))
    throw new TypeError('"encoding" must be a valid string encoding');
  var e = at(r, t) | 0;
  i = X(i, e);
  var n = i.write(r, t);
  return n !== e && (i = i.slice(0, n)), i;
}
function br(i, r) {
  var t = r.length < 0 ? 0 : Or(r.length) | 0;
  i = X(i, t);
  for (var e = 0; e < t; e += 1)
    i[e] = r[e] & 255;
  return i;
}
function Si(i, r, t, e) {
  if (r.byteLength, t < 0 || r.byteLength < t)
    throw new RangeError("'offset' is out of bounds");
  if (r.byteLength < t + (e || 0))
    throw new RangeError("'length' is out of bounds");
  return t === void 0 && e === void 0 ? r = new Uint8Array(r) : e === void 0 ? r = new Uint8Array(r, t) : r = new Uint8Array(r, t, e), h.TYPED_ARRAY_SUPPORT ? (i = r, i.__proto__ = h.prototype) : i = br(i, r), i;
}
function Di(i, r) {
  if (V(r)) {
    var t = Or(r.length) | 0;
    return i = X(i, t), i.length === 0 || r.copy(i, 0, 0, t), i;
  }
  if (r) {
    if (typeof ArrayBuffer < "u" && r.buffer instanceof ArrayBuffer || "length" in r)
      return typeof r.length != "number" || Gi(r.length) ? X(i, 0) : br(i, r);
    if (r.type === "Buffer" && Array.isArray(r.data))
      return br(i, r.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Or(i) {
  if (i >= Ar())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Ar().toString(16) + " bytes");
  return i | 0;
}
function V(i) {
  return !!(i != null && i._isBuffer);
}
function at(i, r) {
  if (V(i))
    return i.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(i) || i instanceof ArrayBuffer))
    return i.byteLength;
  typeof i != "string" && (i = "" + i);
  var t = i.length;
  if (t === 0)
    return 0;
  for (var e = false; ; )
    switch (r) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return Fr(i).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return pt(i).length;
      default:
        if (e)
          return Fr(i).length;
        r = ("" + r).toLowerCase(), e = true;
    }
}
function Pi(i, r, t) {
  var e = false;
  if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
    return "";
  for (i || (i = "utf8"); ; )
    switch (i) {
      case "hex":
        return Hi(this, r, t);
      case "utf8":
      case "utf-8":
        return st(this, r, t);
      case "ascii":
        return Wi(this, r, t);
      case "latin1":
      case "binary":
        return Oi(this, r, t);
      case "base64":
        return bi(this, r, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Vi(this, r, t);
      default:
        if (e)
          throw new TypeError("Unknown encoding: " + i);
        i = (i + "").toLowerCase(), e = true;
    }
}
function nr(i, r, t) {
  var e = i[r];
  i[r] = i[t], i[t] = e;
}
function ut(i, r, t, e, n) {
  if (i.length === 0)
    return -1;
  if (typeof t == "string" ? (e = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = n ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
    if (n)
      return -1;
    t = i.length - 1;
  } else if (t < 0)
    if (n)
      t = 0;
    else
      return -1;
  if (typeof r == "string" && (r = h.from(r, e)), V(r))
    return r.length === 0 ? -1 : it(i, r, t, e, n);
  if (typeof r == "number")
    return r = r & 255, h.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(i, r, t) : Uint8Array.prototype.lastIndexOf.call(i, r, t) : it(i, [r], t, e, n);
  throw new TypeError("val must be string, number or Buffer");
}
function it(i, r, t, e, n) {
  var o = 1, f = i.length, u = r.length;
  if (e !== void 0 && (e = String(e).toLowerCase(), e === "ucs2" || e === "ucs-2" || e === "utf16le" || e === "utf-16le")) {
    if (i.length < 2 || r.length < 2)
      return -1;
    o = 2, f /= 2, u /= 2, t /= 2;
  }
  function a(F, v) {
    return o === 1 ? F[v] : F.readUInt16BE(v * o);
  }
  var p;
  if (n) {
    var x = -1;
    for (p = t; p < f; p++)
      if (a(i, p) === a(r, x === -1 ? 0 : p - x)) {
        if (x === -1 && (x = p), p - x + 1 === u)
          return x * o;
      } else
        x !== -1 && (p -= p - x), x = -1;
  } else
    for (t + u > f && (t = f - u), p = t; p >= 0; p--) {
      for (var l = true, g = 0; g < u; g++)
        if (a(i, p + g) !== a(r, g)) {
          l = false;
          break;
        }
      if (l)
        return p;
    }
  return -1;
}
function Yi(i, r, t, e) {
  t = Number(t) || 0;
  var n = i.length - t;
  e ? (e = Number(e), e > n && (e = n)) : e = n;
  var o = r.length;
  if (o % 2 !== 0)
    throw new TypeError("Invalid hex string");
  e > o / 2 && (e = o / 2);
  for (var f = 0; f < e; ++f) {
    var u = parseInt(r.substr(f * 2, 2), 16);
    if (isNaN(u))
      return f;
    i[t + f] = u;
  }
  return f;
}
function Ci(i, r, t, e) {
  return gr(Fr(r, i.length - t), i, t, e);
}
function ht(i, r, t, e) {
  return gr(Xi(r), i, t, e);
}
function Mi(i, r, t, e) {
  return ht(i, r, t, e);
}
function ki(i, r, t, e) {
  return gr(pt(r), i, t, e);
}
function Ni(i, r, t, e) {
  return gr(qi(r, i.length - t), i, t, e);
}
function bi(i, r, t) {
  return r === 0 && t === i.length ? tt(i) : tt(i.slice(r, t));
}
function st(i, r, t) {
  t = Math.min(i.length, t);
  for (var e = [], n = r; n < t; ) {
    var o = i[n], f = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (n + u <= t) {
      var a, p, x, l;
      switch (u) {
        case 1:
          o < 128 && (f = o);
          break;
        case 2:
          a = i[n + 1], (a & 192) === 128 && (l = (o & 31) << 6 | a & 63, l > 127 && (f = l));
          break;
        case 3:
          a = i[n + 1], p = i[n + 2], (a & 192) === 128 && (p & 192) === 128 && (l = (o & 15) << 12 | (a & 63) << 6 | p & 63, l > 2047 && (l < 55296 || l > 57343) && (f = l));
          break;
        case 4:
          a = i[n + 1], p = i[n + 2], x = i[n + 3], (a & 192) === 128 && (p & 192) === 128 && (x & 192) === 128 && (l = (o & 15) << 18 | (a & 63) << 12 | (p & 63) << 6 | x & 63, l > 65535 && l < 1114112 && (f = l));
      }
    }
    f === null ? (f = 65533, u = 1) : f > 65535 && (f -= 65536, e.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023), e.push(f), n += u;
  }
  return Li(e);
}
function Li(i) {
  var r = i.length;
  if (r <= et)
    return String.fromCharCode.apply(String, i);
  for (var t = "", e = 0; e < r; )
    t += String.fromCharCode.apply(String, i.slice(e, e += et));
  return t;
}
function Wi(i, r, t) {
  var e = "";
  t = Math.min(i.length, t);
  for (var n = r; n < t; ++n)
    e += String.fromCharCode(i[n] & 127);
  return e;
}
function Oi(i, r, t) {
  var e = "";
  t = Math.min(i.length, t);
  for (var n = r; n < t; ++n)
    e += String.fromCharCode(i[n]);
  return e;
}
function Hi(i, r, t) {
  var e = i.length;
  (!r || r < 0) && (r = 0), (!t || t < 0 || t > e) && (t = e);
  for (var n = "", o = r; o < t; ++o)
    n += Ki(i[o]);
  return n;
}
function Vi(i, r, t) {
  for (var e = i.slice(r, t), n = "", o = 0; o < e.length; o += 2)
    n += String.fromCharCode(e[o] + e[o + 1] * 256);
  return n;
}
function I(i, r, t) {
  if (i % 1 !== 0 || i < 0)
    throw new RangeError("offset is not uint");
  if (i + r > t)
    throw new RangeError("Trying to access beyond buffer length");
}
function C(i, r, t, e, n, o) {
  if (!V(i))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r > n || r < o)
    throw new RangeError('"value" argument is out of bounds');
  if (t + e > i.length)
    throw new RangeError("Index out of range");
}
function dr(i, r, t, e) {
  r < 0 && (r = 65535 + r + 1);
  for (var n = 0, o = Math.min(i.length - t, 2); n < o; ++n)
    i[t + n] = (r & 255 << 8 * (e ? n : 1 - n)) >>> (e ? n : 1 - n) * 8;
}
function mr(i, r, t, e) {
  r < 0 && (r = 4294967295 + r + 1);
  for (var n = 0, o = Math.min(i.length - t, 4); n < o; ++n)
    i[t + n] = r >>> (e ? n : 3 - n) * 8 & 255;
}
function ct(i, r, t, e, n, o) {
  if (t + e > i.length)
    throw new RangeError("Index out of range");
  if (t < 0)
    throw new RangeError("Index out of range");
}
function lt(i, r, t, e, n) {
  return n || ct(i, r, t, 4, 34028234663852886e22, -34028234663852886e22), Et(i, r, t, e, 23, 4), t + 4;
}
function xt(i, r, t, e, n) {
  return n || ct(i, r, t, 8, 17976931348623157e292, -17976931348623157e292), Et(i, r, t, e, 52, 8), t + 8;
}
function $i(i) {
  if (i = zi(i).replace(Ji, ""), i.length < 2)
    return "";
  for (; i.length % 4 !== 0; )
    i = i + "=";
  return i;
}
function zi(i) {
  return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
}
function Ki(i) {
  return i < 16 ? "0" + i.toString(16) : i.toString(16);
}
function Fr(i, r) {
  r = r || 1 / 0;
  for (var t, e = i.length, n = null, o = [], f = 0; f < e; ++f) {
    if (t = i.charCodeAt(f), t > 55295 && t < 57344) {
      if (!n) {
        if (t > 56319) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (f + 1 === e) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        n = t;
        continue;
      }
      if (t < 56320) {
        (r -= 3) > -1 && o.push(239, 191, 189), n = t;
        continue;
      }
      t = (n - 55296 << 10 | t - 56320) + 65536;
    } else
      n && (r -= 3) > -1 && o.push(239, 191, 189);
    if (n = null, t < 128) {
      if ((r -= 1) < 0)
        break;
      o.push(t);
    } else if (t < 2048) {
      if ((r -= 2) < 0)
        break;
      o.push(t >> 6 | 192, t & 63 | 128);
    } else if (t < 65536) {
      if ((r -= 3) < 0)
        break;
      o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
    } else if (t < 1114112) {
      if ((r -= 4) < 0)
        break;
      o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
    } else
      throw new Error("Invalid code point");
  }
  return o;
}
function Xi(i) {
  for (var r = [], t = 0; t < i.length; ++t)
    r.push(i.charCodeAt(t) & 255);
  return r;
}
function qi(i, r) {
  for (var t, e, n, o = [], f = 0; f < i.length && !((r -= 2) < 0); ++f)
    t = i.charCodeAt(f), e = t >> 8, n = t % 256, o.push(n), o.push(e);
  return o;
}
function pt(i) {
  return Ti($i(i));
}
function gr(i, r, t, e) {
  for (var n = 0; n < e && !(n + t >= r.length || n >= i.length); ++n)
    r[n + t] = i[n];
  return n;
}
function Gi(i) {
  return i !== i;
}
function Qi(i) {
  return i != null && (!!i._isBuffer || wt(i) || Zi(i));
}
function wt(i) {
  return !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i);
}
function Zi(i) {
  return typeof i.readFloatLE == "function" && typeof i.slice == "function" && wt(i.slice(0, 0));
}
function Rr(i, r, t, e, n) {
  var o, f, u = n * 8 - e - 1, a = (1 << u) - 1, p = a >> 1, x = -7, l = t ? n - 1 : 0, g = t ? -1 : 1, F = i[r + l];
  for (l += g, o = F & (1 << -x) - 1, F >>= -x, x += u; x > 0; o = o * 256 + i[r + l], l += g, x -= 8)
    ;
  for (f = o & (1 << -x) - 1, o >>= -x, x += e; x > 0; f = f * 256 + i[r + l], l += g, x -= 8)
    ;
  if (o === 0)
    o = 1 - p;
  else {
    if (o === a)
      return f ? NaN : (F ? -1 : 1) * (1 / 0);
    f = f + Math.pow(2, e), o = o - p;
  }
  return (F ? -1 : 1) * f * Math.pow(2, o - e);
}
function Et(i, r, t, e, n, o) {
  var f, u, a, p = o * 8 - n - 1, x = (1 << p) - 1, l = x >> 1, g = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, F = e ? 0 : o - 1, v = e ? 1 : -1, k = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, f = x) : (f = Math.floor(Math.log(r) / Math.LN2), r * (a = Math.pow(2, -f)) < 1 && (f--, a *= 2), f + l >= 1 ? r += g / a : r += g * Math.pow(2, 1 - l), r * a >= 2 && (f++, a /= 2), f + l >= x ? (u = 0, f = x) : f + l >= 1 ? (u = (r * a - 1) * Math.pow(2, n), f = f + l) : (u = r * Math.pow(2, l - 1) * Math.pow(2, n), f = 0)); n >= 8; i[t + F] = u & 255, F += v, u /= 256, n -= 8)
    ;
  for (f = f << n | u, p += n; p > 0; i[t + F] = f & 255, F += v, f /= 256, p -= 8)
    ;
  i[t + F - v] |= k * 128;
}
var H;
var W;
var _i;
var Lr;
var et;
var Ji;
var yt = tr(() => {
  Y();
  D();
  P();
  H = [], W = [], _i = typeof Uint8Array < "u" ? Uint8Array : Array, Lr = false;
  h.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
  h.poolSize = 8192;
  h._augment = function(i) {
    return i.__proto__ = h.prototype, i;
  };
  h.from = function(i, r, t) {
    return ot(null, i, r, t);
  };
  h.kMaxLength = Ar();
  h.TYPED_ARRAY_SUPPORT && (h.prototype.__proto__ = Uint8Array.prototype, h.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && h[Symbol.species]);
  h.alloc = function(i, r, t) {
    return Bi(null, i, r, t);
  };
  h.allocUnsafe = function(i) {
    return Wr(null, i);
  };
  h.allocUnsafeSlow = function(i) {
    return Wr(null, i);
  };
  h.isBuffer = Qi;
  h.compare = function(r, t) {
    if (!V(r) || !V(t))
      throw new TypeError("Arguments must be Buffers");
    if (r === t)
      return 0;
    for (var e = r.length, n = t.length, o = 0, f = Math.min(e, n); o < f; ++o)
      if (r[o] !== t[o]) {
        e = r[o], n = t[o];
        break;
      }
    return e < n ? -1 : n < e ? 1 : 0;
  };
  h.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  h.concat = function(r, t) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return h.alloc(0);
    var e;
    if (t === void 0)
      for (t = 0, e = 0; e < r.length; ++e)
        t += r[e].length;
    var n = h.allocUnsafe(t), o = 0;
    for (e = 0; e < r.length; ++e) {
      var f = r[e];
      if (!V(f))
        throw new TypeError('"list" argument must be an Array of Buffers');
      f.copy(n, o), o += f.length;
    }
    return n;
  };
  h.byteLength = at;
  h.prototype._isBuffer = true;
  h.prototype.swap16 = function() {
    var r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var t = 0; t < r; t += 2)
      nr(this, t, t + 1);
    return this;
  };
  h.prototype.swap32 = function() {
    var r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var t = 0; t < r; t += 4)
      nr(this, t, t + 3), nr(this, t + 1, t + 2);
    return this;
  };
  h.prototype.swap64 = function() {
    var r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var t = 0; t < r; t += 8)
      nr(this, t, t + 7), nr(this, t + 1, t + 6), nr(this, t + 2, t + 5), nr(this, t + 3, t + 4);
    return this;
  };
  h.prototype.toString = function() {
    var r = this.length | 0;
    return r === 0 ? "" : arguments.length === 0 ? st(this, 0, r) : Pi.apply(this, arguments);
  };
  h.prototype.equals = function(r) {
    if (!V(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? true : h.compare(this, r) === 0;
  };
  h.prototype.compare = function(r, t, e, n, o) {
    if (!V(r))
      throw new TypeError("Argument must be a Buffer");
    if (t === void 0 && (t = 0), e === void 0 && (e = r ? r.length : 0), n === void 0 && (n = 0), o === void 0 && (o = this.length), t < 0 || e > r.length || n < 0 || o > this.length)
      throw new RangeError("out of range index");
    if (n >= o && t >= e)
      return 0;
    if (n >= o)
      return -1;
    if (t >= e)
      return 1;
    if (t >>>= 0, e >>>= 0, n >>>= 0, o >>>= 0, this === r)
      return 0;
    for (var f = o - n, u = e - t, a = Math.min(f, u), p = this.slice(n, o), x = r.slice(t, e), l = 0; l < a; ++l)
      if (p[l] !== x[l]) {
        f = p[l], u = x[l];
        break;
      }
    return f < u ? -1 : u < f ? 1 : 0;
  };
  h.prototype.includes = function(r, t, e) {
    return this.indexOf(r, t, e) !== -1;
  };
  h.prototype.indexOf = function(r, t, e) {
    return ut(this, r, t, e, true);
  };
  h.prototype.lastIndexOf = function(r, t, e) {
    return ut(this, r, t, e, false);
  };
  h.prototype.write = function(r, t, e, n) {
    if (t === void 0)
      n = "utf8", e = this.length, t = 0;
    else if (e === void 0 && typeof t == "string")
      n = t, e = this.length, t = 0;
    else if (isFinite(t))
      t = t | 0, isFinite(e) ? (e = e | 0, n === void 0 && (n = "utf8")) : (n = e, e = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var o = this.length - t;
    if ((e === void 0 || e > o) && (e = o), r.length > 0 && (e < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    for (var f = false; ; )
      switch (n) {
        case "hex":
          return Yi(this, r, t, e);
        case "utf8":
        case "utf-8":
          return Ci(this, r, t, e);
        case "ascii":
          return ht(this, r, t, e);
        case "latin1":
        case "binary":
          return Mi(this, r, t, e);
        case "base64":
          return ki(this, r, t, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ni(this, r, t, e);
        default:
          if (f)
            throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), f = true;
      }
  };
  h.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  et = 4096;
  h.prototype.slice = function(r, t) {
    var e = this.length;
    r = ~~r, t = t === void 0 ? e : ~~t, r < 0 ? (r += e, r < 0 && (r = 0)) : r > e && (r = e), t < 0 ? (t += e, t < 0 && (t = 0)) : t > e && (t = e), t < r && (t = r);
    var n;
    if (h.TYPED_ARRAY_SUPPORT)
      n = this.subarray(r, t), n.__proto__ = h.prototype;
    else {
      var o = t - r;
      n = new h(o, void 0);
      for (var f = 0; f < o; ++f)
        n[f] = this[f + r];
    }
    return n;
  };
  h.prototype.readUIntLE = function(r, t, e) {
    r = r | 0, t = t | 0, e || I(r, t, this.length);
    for (var n = this[r], o = 1, f = 0; ++f < t && (o *= 256); )
      n += this[r + f] * o;
    return n;
  };
  h.prototype.readUIntBE = function(r, t, e) {
    r = r | 0, t = t | 0, e || I(r, t, this.length);
    for (var n = this[r + --t], o = 1; t > 0 && (o *= 256); )
      n += this[r + --t] * o;
    return n;
  };
  h.prototype.readUInt8 = function(r, t) {
    return t || I(r, 1, this.length), this[r];
  };
  h.prototype.readUInt16LE = function(r, t) {
    return t || I(r, 2, this.length), this[r] | this[r + 1] << 8;
  };
  h.prototype.readUInt16BE = function(r, t) {
    return t || I(r, 2, this.length), this[r] << 8 | this[r + 1];
  };
  h.prototype.readUInt32LE = function(r, t) {
    return t || I(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  };
  h.prototype.readUInt32BE = function(r, t) {
    return t || I(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  };
  h.prototype.readIntLE = function(r, t, e) {
    r = r | 0, t = t | 0, e || I(r, t, this.length);
    for (var n = this[r], o = 1, f = 0; ++f < t && (o *= 256); )
      n += this[r + f] * o;
    return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  h.prototype.readIntBE = function(r, t, e) {
    r = r | 0, t = t | 0, e || I(r, t, this.length);
    for (var n = t, o = 1, f = this[r + --n]; n > 0 && (o *= 256); )
      f += this[r + --n] * o;
    return o *= 128, f >= o && (f -= Math.pow(2, 8 * t)), f;
  };
  h.prototype.readInt8 = function(r, t) {
    return t || I(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  };
  h.prototype.readInt16LE = function(r, t) {
    t || I(r, 2, this.length);
    var e = this[r] | this[r + 1] << 8;
    return e & 32768 ? e | 4294901760 : e;
  };
  h.prototype.readInt16BE = function(r, t) {
    t || I(r, 2, this.length);
    var e = this[r + 1] | this[r] << 8;
    return e & 32768 ? e | 4294901760 : e;
  };
  h.prototype.readInt32LE = function(r, t) {
    return t || I(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  };
  h.prototype.readInt32BE = function(r, t) {
    return t || I(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  };
  h.prototype.readFloatLE = function(r, t) {
    return t || I(r, 4, this.length), Rr(this, r, true, 23, 4);
  };
  h.prototype.readFloatBE = function(r, t) {
    return t || I(r, 4, this.length), Rr(this, r, false, 23, 4);
  };
  h.prototype.readDoubleLE = function(r, t) {
    return t || I(r, 8, this.length), Rr(this, r, true, 52, 8);
  };
  h.prototype.readDoubleBE = function(r, t) {
    return t || I(r, 8, this.length), Rr(this, r, false, 52, 8);
  };
  h.prototype.writeUIntLE = function(r, t, e, n) {
    if (r = +r, t = t | 0, e = e | 0, !n) {
      var o = Math.pow(2, 8 * e) - 1;
      C(this, r, t, e, o, 0);
    }
    var f = 1, u = 0;
    for (this[t] = r & 255; ++u < e && (f *= 256); )
      this[t + u] = r / f & 255;
    return t + e;
  };
  h.prototype.writeUIntBE = function(r, t, e, n) {
    if (r = +r, t = t | 0, e = e | 0, !n) {
      var o = Math.pow(2, 8 * e) - 1;
      C(this, r, t, e, o, 0);
    }
    var f = e - 1, u = 1;
    for (this[t + f] = r & 255; --f >= 0 && (u *= 256); )
      this[t + f] = r / u & 255;
    return t + e;
  };
  h.prototype.writeUInt8 = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 1, 255, 0), h.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), this[t] = r & 255, t + 1;
  };
  h.prototype.writeUInt16LE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[t] = r & 255, this[t + 1] = r >>> 8) : dr(this, r, t, true), t + 2;
  };
  h.prototype.writeUInt16BE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 2, 65535, 0), h.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 8, this[t + 1] = r & 255) : dr(this, r, t, false), t + 2;
  };
  h.prototype.writeUInt32LE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255) : mr(this, r, t, true), t + 4;
  };
  h.prototype.writeUInt32BE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 4, 4294967295, 0), h.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255) : mr(this, r, t, false), t + 4;
  };
  h.prototype.writeIntLE = function(r, t, e, n) {
    if (r = +r, t = t | 0, !n) {
      var o = Math.pow(2, 8 * e - 1);
      C(this, r, t, e, o - 1, -o);
    }
    var f = 0, u = 1, a = 0;
    for (this[t] = r & 255; ++f < e && (u *= 256); )
      r < 0 && a === 0 && this[t + f - 1] !== 0 && (a = 1), this[t + f] = (r / u >> 0) - a & 255;
    return t + e;
  };
  h.prototype.writeIntBE = function(r, t, e, n) {
    if (r = +r, t = t | 0, !n) {
      var o = Math.pow(2, 8 * e - 1);
      C(this, r, t, e, o - 1, -o);
    }
    var f = e - 1, u = 1, a = 0;
    for (this[t + f] = r & 255; --f >= 0 && (u *= 256); )
      r < 0 && a === 0 && this[t + f + 1] !== 0 && (a = 1), this[t + f] = (r / u >> 0) - a & 255;
    return t + e;
  };
  h.prototype.writeInt8 = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 1, 127, -128), h.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  };
  h.prototype.writeInt16LE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[t] = r & 255, this[t + 1] = r >>> 8) : dr(this, r, t, true), t + 2;
  };
  h.prototype.writeInt16BE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 2, 32767, -32768), h.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 8, this[t + 1] = r & 255) : dr(this, r, t, false), t + 2;
  };
  h.prototype.writeInt32LE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 4, 2147483647, -2147483648), h.TYPED_ARRAY_SUPPORT ? (this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24) : mr(this, r, t, true), t + 4;
  };
  h.prototype.writeInt32BE = function(r, t, e) {
    return r = +r, t = t | 0, e || C(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), h.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255) : mr(this, r, t, false), t + 4;
  };
  h.prototype.writeFloatLE = function(r, t, e) {
    return lt(this, r, t, true, e);
  };
  h.prototype.writeFloatBE = function(r, t, e) {
    return lt(this, r, t, false, e);
  };
  h.prototype.writeDoubleLE = function(r, t, e) {
    return xt(this, r, t, true, e);
  };
  h.prototype.writeDoubleBE = function(r, t, e) {
    return xt(this, r, t, false, e);
  };
  h.prototype.copy = function(r, t, e, n) {
    if (e || (e = 0), !n && n !== 0 && (n = this.length), t >= r.length && (t = r.length), t || (t = 0), n > 0 && n < e && (n = e), n === e || r.length === 0 || this.length === 0)
      return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (e < 0 || e >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (n < 0)
      throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length), r.length - t < n - e && (n = r.length - t + e);
    var o = n - e, f;
    if (this === r && e < t && t < n)
      for (f = o - 1; f >= 0; --f)
        r[f + t] = this[f + e];
    else if (o < 1e3 || !h.TYPED_ARRAY_SUPPORT)
      for (f = 0; f < o; ++f)
        r[f + t] = this[f + e];
    else
      Uint8Array.prototype.set.call(r, this.subarray(e, e + o), t);
    return o;
  };
  h.prototype.fill = function(r, t, e, n) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (n = t, t = 0, e = this.length) : typeof e == "string" && (n = e, e = this.length), r.length === 1) {
        var o = r.charCodeAt(0);
        o < 256 && (r = o);
      }
      if (n !== void 0 && typeof n != "string")
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !h.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
    } else
      typeof r == "number" && (r = r & 255);
    if (t < 0 || this.length < t || this.length < e)
      throw new RangeError("Out of range index");
    if (e <= t)
      return this;
    t = t >>> 0, e = e === void 0 ? this.length : e >>> 0, r || (r = 0);
    var f;
    if (typeof r == "number")
      for (f = t; f < e; ++f)
        this[f] = r;
    else {
      var u = V(r) ? r : Fr(new h(r, n).toString()), a = u.length;
      for (f = 0; f < e - t; ++f)
        this[f + t] = u[f % a];
    }
    return this;
  };
  Ji = /[^+\/0-9A-Za-z-_]/g;
});
var P = tr(() => {
  yt();
});
var At = tr(() => {
  Y();
  D();
  P();
});
var Y = tr(() => {
  At();
});
var Ft = {};
Kr(Ft, { default: () => ji });
var ji;
var dt = tr(() => {
  Y();
  D();
  P();
  ji = {};
});
var mt = Nr((rn, _r) => {
  Y();
  D();
  P();
  var or = (dt(), Xr(Ft));
  if (or && or.default) {
    _r.exports = or.default;
    for (let i in or)
      _r.exports[i] = or[i];
  } else
    or && (_r.exports = or);
});
var Ot = {};
Kr(Ot, { Buffer: () => c, INSPECT_MAX_BYTES: () => Bt, SlowBuffer: () => se, isBuffer: () => Lt, kMaxLength: () => oe });
function Tt() {
  Vr = true;
  for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, t = i.length; r < t; ++r)
    J[r] = i[r], O[i.charCodeAt(r)] = r;
  O["-".charCodeAt(0)] = 62, O["_".charCodeAt(0)] = 63;
}
function te(i) {
  Vr || Tt();
  var r, t, e, n, o, f, u = i.length;
  if (u % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  o = i[u - 2] === "=" ? 2 : i[u - 1] === "=" ? 1 : 0, f = new re(u * 3 / 4 - o), e = o > 0 ? u - 4 : u;
  var a = 0;
  for (r = 0, t = 0; r < e; r += 4, t += 3)
    n = O[i.charCodeAt(r)] << 18 | O[i.charCodeAt(r + 1)] << 12 | O[i.charCodeAt(r + 2)] << 6 | O[i.charCodeAt(r + 3)], f[a++] = n >> 16 & 255, f[a++] = n >> 8 & 255, f[a++] = n & 255;
  return o === 2 ? (n = O[i.charCodeAt(r)] << 2 | O[i.charCodeAt(r + 1)] >> 4, f[a++] = n & 255) : o === 1 && (n = O[i.charCodeAt(r)] << 10 | O[i.charCodeAt(r + 1)] << 4 | O[i.charCodeAt(r + 2)] >> 2, f[a++] = n >> 8 & 255, f[a++] = n & 255), f;
}
function ie(i) {
  return J[i >> 18 & 63] + J[i >> 12 & 63] + J[i >> 6 & 63] + J[i & 63];
}
function ee(i, r, t) {
  for (var e, n = [], o = r; o < t; o += 3)
    e = (i[o] << 16) + (i[o + 1] << 8) + i[o + 2], n.push(ie(e));
  return n.join("");
}
function gt(i) {
  Vr || Tt();
  for (var r, t = i.length, e = t % 3, n = "", o = [], f = 16383, u = 0, a = t - e; u < a; u += f)
    o.push(ee(i, u, u + f > a ? a : u + f));
  return e === 1 ? (r = i[t - 1], n += J[r >> 2], n += J[r << 4 & 63], n += "==") : e === 2 && (r = (i[t - 2] << 8) + i[t - 1], n += J[r >> 10], n += J[r >> 4 & 63], n += J[r << 2 & 63], n += "="), o.push(n), o.join("");
}
function vr(i, r, t, e, n) {
  var o, f, u = n * 8 - e - 1, a = (1 << u) - 1, p = a >> 1, x = -7, l = t ? n - 1 : 0, g = t ? -1 : 1, F = i[r + l];
  for (l += g, o = F & (1 << -x) - 1, F >>= -x, x += u; x > 0; o = o * 256 + i[r + l], l += g, x -= 8)
    ;
  for (f = o & (1 << -x) - 1, o >>= -x, x += e; x > 0; f = f * 256 + i[r + l], l += g, x -= 8)
    ;
  if (o === 0)
    o = 1 - p;
  else {
    if (o === a)
      return f ? NaN : (F ? -1 : 1) * (1 / 0);
    f = f + Math.pow(2, e), o = o - p;
  }
  return (F ? -1 : 1) * f * Math.pow(2, o - e);
}
function Ut(i, r, t, e, n, o) {
  var f, u, a, p = o * 8 - n - 1, x = (1 << p) - 1, l = x >> 1, g = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, F = e ? 0 : o - 1, v = e ? 1 : -1, k = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, f = x) : (f = Math.floor(Math.log(r) / Math.LN2), r * (a = Math.pow(2, -f)) < 1 && (f--, a *= 2), f + l >= 1 ? r += g / a : r += g * Math.pow(2, 1 - l), r * a >= 2 && (f++, a /= 2), f + l >= x ? (u = 0, f = x) : f + l >= 1 ? (u = (r * a - 1) * Math.pow(2, n), f = f + l) : (u = r * Math.pow(2, l - 1) * Math.pow(2, n), f = 0)); n >= 8; i[t + F] = u & 255, F += v, u /= 256, n -= 8)
    ;
  for (f = f << n | u, p += n; p > 0; i[t + F] = f & 255, F += v, f /= 256, p -= 8)
    ;
  i[t + F - v] |= k * 128;
}
function Tr() {
  return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function q(i, r) {
  if (Tr() < r)
    throw new RangeError("Invalid typed array length");
  return c.TYPED_ARRAY_SUPPORT ? (i = new Uint8Array(r), i.__proto__ = c.prototype) : (i === null && (i = new c(r)), i.length = r), i;
}
function c(i, r, t) {
  if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c))
    return new c(i, r, t);
  if (typeof i == "number") {
    if (typeof r == "string")
      throw new Error("If encoding is specified then the first argument must be a string");
    return Jr(this, i);
  }
  return It(this, i, r, t);
}
function It(i, r, t, e) {
  if (typeof r == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && r instanceof ArrayBuffer ? ue(i, r, t, e) : typeof r == "string" ? ae(i, r, t) : he(i, r);
}
function St(i) {
  if (typeof i != "number")
    throw new TypeError('"size" argument must be a number');
  if (i < 0)
    throw new RangeError('"size" argument must not be negative');
}
function fe(i, r, t, e) {
  return St(r), r <= 0 ? q(i, r) : t !== void 0 ? typeof e == "string" ? q(i, r).fill(t, e) : q(i, r).fill(t) : q(i, r);
}
function Jr(i, r) {
  if (St(r), i = q(i, r < 0 ? 0 : $r(r) | 0), !c.TYPED_ARRAY_SUPPORT)
    for (var t = 0; t < r; ++t)
      i[t] = 0;
  return i;
}
function ae(i, r, t) {
  if ((typeof t != "string" || t === "") && (t = "utf8"), !c.isEncoding(t))
    throw new TypeError('"encoding" must be a valid string encoding');
  var e = Dt(r, t) | 0;
  i = q(i, e);
  var n = i.write(r, t);
  return n !== e && (i = i.slice(0, n)), i;
}
function Hr(i, r) {
  var t = r.length < 0 ? 0 : $r(r.length) | 0;
  i = q(i, t);
  for (var e = 0; e < t; e += 1)
    i[e] = r[e] & 255;
  return i;
}
function ue(i, r, t, e) {
  if (r.byteLength, t < 0 || r.byteLength < t)
    throw new RangeError("'offset' is out of bounds");
  if (r.byteLength < t + (e || 0))
    throw new RangeError("'length' is out of bounds");
  return t === void 0 && e === void 0 ? r = new Uint8Array(r) : e === void 0 ? r = new Uint8Array(r, t) : r = new Uint8Array(r, t, e), c.TYPED_ARRAY_SUPPORT ? (i = r, i.__proto__ = c.prototype) : i = Hr(i, r), i;
}
function he(i, r) {
  if ($(r)) {
    var t = $r(r.length) | 0;
    return i = q(i, t), i.length === 0 || r.copy(i, 0, 0, t), i;
  }
  if (r) {
    if (typeof ArrayBuffer < "u" && r.buffer instanceof ArrayBuffer || "length" in r)
      return typeof r.length != "number" || Ie(r.length) ? q(i, 0) : Hr(i, r);
    if (r.type === "Buffer" && vt(r.data))
      return Hr(i, r.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function $r(i) {
  if (i >= Tr())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Tr().toString(16) + " bytes");
  return i | 0;
}
function se(i) {
  return +i != i && (i = 0), c.alloc(+i);
}
function $(i) {
  return !!(i != null && i._isBuffer);
}
function Dt(i, r) {
  if ($(i))
    return i.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(i) || i instanceof ArrayBuffer))
    return i.byteLength;
  typeof i != "string" && (i = "" + i);
  var t = i.length;
  if (t === 0)
    return 0;
  for (var e = false; ; )
    switch (r) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return Ur(i).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return bt(i).length;
      default:
        if (e)
          return Ur(i).length;
        r = ("" + r).toLowerCase(), e = true;
    }
}
function ce(i, r, t) {
  var e = false;
  if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
    return "";
  for (i || (i = "utf8"); ; )
    switch (i) {
      case "hex":
        return me(this, r, t);
      case "utf8":
      case "utf-8":
        return Ct(this, r, t);
      case "ascii":
        return Fe(this, r, t);
      case "latin1":
      case "binary":
        return de(this, r, t);
      case "base64":
        return ye(this, r, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ge(this, r, t);
      default:
        if (e)
          throw new TypeError("Unknown encoding: " + i);
        i = (i + "").toLowerCase(), e = true;
    }
}
function fr(i, r, t) {
  var e = i[r];
  i[r] = i[t], i[t] = e;
}
function Pt(i, r, t, e, n) {
  if (i.length === 0)
    return -1;
  if (typeof t == "string" ? (e = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = n ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
    if (n)
      return -1;
    t = i.length - 1;
  } else if (t < 0)
    if (n)
      t = 0;
    else
      return -1;
  if (typeof r == "string" && (r = c.from(r, e)), $(r))
    return r.length === 0 ? -1 : Rt(i, r, t, e, n);
  if (typeof r == "number")
    return r = r & 255, c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(i, r, t) : Uint8Array.prototype.lastIndexOf.call(i, r, t) : Rt(i, [r], t, e, n);
  throw new TypeError("val must be string, number or Buffer");
}
function Rt(i, r, t, e, n) {
  var o = 1, f = i.length, u = r.length;
  if (e !== void 0 && (e = String(e).toLowerCase(), e === "ucs2" || e === "ucs-2" || e === "utf16le" || e === "utf-16le")) {
    if (i.length < 2 || r.length < 2)
      return -1;
    o = 2, f /= 2, u /= 2, t /= 2;
  }
  function a(F, v) {
    return o === 1 ? F[v] : F.readUInt16BE(v * o);
  }
  var p;
  if (n) {
    var x = -1;
    for (p = t; p < f; p++)
      if (a(i, p) === a(r, x === -1 ? 0 : p - x)) {
        if (x === -1 && (x = p), p - x + 1 === u)
          return x * o;
      } else
        x !== -1 && (p -= p - x), x = -1;
  } else
    for (t + u > f && (t = f - u), p = t; p >= 0; p--) {
      for (var l = true, g = 0; g < u; g++)
        if (a(i, p + g) !== a(r, g)) {
          l = false;
          break;
        }
      if (l)
        return p;
    }
  return -1;
}
function le(i, r, t, e) {
  t = Number(t) || 0;
  var n = i.length - t;
  e ? (e = Number(e), e > n && (e = n)) : e = n;
  var o = r.length;
  if (o % 2 !== 0)
    throw new TypeError("Invalid hex string");
  e > o / 2 && (e = o / 2);
  for (var f = 0; f < e; ++f) {
    var u = parseInt(r.substr(f * 2, 2), 16);
    if (isNaN(u))
      return f;
    i[t + f] = u;
  }
  return f;
}
function xe(i, r, t, e) {
  return Sr(Ur(r, i.length - t), i, t, e);
}
function Yt(i, r, t, e) {
  return Sr(ve(r), i, t, e);
}
function pe(i, r, t, e) {
  return Yt(i, r, t, e);
}
function we(i, r, t, e) {
  return Sr(bt(r), i, t, e);
}
function Ee(i, r, t, e) {
  return Sr(Be(r, i.length - t), i, t, e);
}
function ye(i, r, t) {
  return r === 0 && t === i.length ? gt(i) : gt(i.slice(r, t));
}
function Ct(i, r, t) {
  t = Math.min(i.length, t);
  for (var e = [], n = r; n < t; ) {
    var o = i[n], f = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (n + u <= t) {
      var a, p, x, l;
      switch (u) {
        case 1:
          o < 128 && (f = o);
          break;
        case 2:
          a = i[n + 1], (a & 192) === 128 && (l = (o & 31) << 6 | a & 63, l > 127 && (f = l));
          break;
        case 3:
          a = i[n + 1], p = i[n + 2], (a & 192) === 128 && (p & 192) === 128 && (l = (o & 15) << 12 | (a & 63) << 6 | p & 63, l > 2047 && (l < 55296 || l > 57343) && (f = l));
          break;
        case 4:
          a = i[n + 1], p = i[n + 2], x = i[n + 3], (a & 192) === 128 && (p & 192) === 128 && (x & 192) === 128 && (l = (o & 15) << 18 | (a & 63) << 12 | (p & 63) << 6 | x & 63, l > 65535 && l < 1114112 && (f = l));
      }
    }
    f === null ? (f = 65533, u = 1) : f > 65535 && (f -= 65536, e.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023), e.push(f), n += u;
  }
  return Ae(e);
}
function Ae(i) {
  var r = i.length;
  if (r <= _t)
    return String.fromCharCode.apply(String, i);
  for (var t = "", e = 0; e < r; )
    t += String.fromCharCode.apply(String, i.slice(e, e += _t));
  return t;
}
function Fe(i, r, t) {
  var e = "";
  t = Math.min(i.length, t);
  for (var n = r; n < t; ++n)
    e += String.fromCharCode(i[n] & 127);
  return e;
}
function de(i, r, t) {
  var e = "";
  t = Math.min(i.length, t);
  for (var n = r; n < t; ++n)
    e += String.fromCharCode(i[n]);
  return e;
}
function me(i, r, t) {
  var e = i.length;
  (!r || r < 0) && (r = 0), (!t || t < 0 || t > e) && (t = e);
  for (var n = "", o = r; o < t; ++o)
    n += Ue(i[o]);
  return n;
}
function ge(i, r, t) {
  for (var e = i.slice(r, t), n = "", o = 0; o < e.length; o += 2)
    n += String.fromCharCode(e[o] + e[o + 1] * 256);
  return n;
}
function S(i, r, t) {
  if (i % 1 !== 0 || i < 0)
    throw new RangeError("offset is not uint");
  if (i + r > t)
    throw new RangeError("Trying to access beyond buffer length");
}
function M(i, r, t, e, n, o) {
  if (!$(i))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r > n || r < o)
    throw new RangeError('"value" argument is out of bounds');
  if (t + e > i.length)
    throw new RangeError("Index out of range");
}
function Br(i, r, t, e) {
  r < 0 && (r = 65535 + r + 1);
  for (var n = 0, o = Math.min(i.length - t, 2); n < o; ++n)
    i[t + n] = (r & 255 << 8 * (e ? n : 1 - n)) >>> (e ? n : 1 - n) * 8;
}
function Ir(i, r, t, e) {
  r < 0 && (r = 4294967295 + r + 1);
  for (var n = 0, o = Math.min(i.length - t, 4); n < o; ++n)
    i[t + n] = r >>> (e ? n : 3 - n) * 8 & 255;
}
function Mt(i, r, t, e, n, o) {
  if (t + e > i.length)
    throw new RangeError("Index out of range");
  if (t < 0)
    throw new RangeError("Index out of range");
}
function kt(i, r, t, e, n) {
  return n || Mt(i, r, t, 4), Ut(i, r, t, e, 23, 4), t + 4;
}
function Nt(i, r, t, e, n) {
  return n || Mt(i, r, t, 8), Ut(i, r, t, e, 52, 8), t + 8;
}
function _e(i) {
  if (i = Te(i).replace(Re, ""), i.length < 2)
    return "";
  for (; i.length % 4 !== 0; )
    i = i + "=";
  return i;
}
function Te(i) {
  return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
}
function Ue(i) {
  return i < 16 ? "0" + i.toString(16) : i.toString(16);
}
function Ur(i, r) {
  r = r || 1 / 0;
  for (var t, e = i.length, n = null, o = [], f = 0; f < e; ++f) {
    if (t = i.charCodeAt(f), t > 55295 && t < 57344) {
      if (!n) {
        if (t > 56319) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (f + 1 === e) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        n = t;
        continue;
      }
      if (t < 56320) {
        (r -= 3) > -1 && o.push(239, 191, 189), n = t;
        continue;
      }
      t = (n - 55296 << 10 | t - 56320) + 65536;
    } else
      n && (r -= 3) > -1 && o.push(239, 191, 189);
    if (n = null, t < 128) {
      if ((r -= 1) < 0)
        break;
      o.push(t);
    } else if (t < 2048) {
      if ((r -= 2) < 0)
        break;
      o.push(t >> 6 | 192, t & 63 | 128);
    } else if (t < 65536) {
      if ((r -= 3) < 0)
        break;
      o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
    } else if (t < 1114112) {
      if ((r -= 4) < 0)
        break;
      o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
    } else
      throw new Error("Invalid code point");
  }
  return o;
}
function ve(i) {
  for (var r = [], t = 0; t < i.length; ++t)
    r.push(i.charCodeAt(t) & 255);
  return r;
}
function Be(i, r) {
  for (var t, e, n, o = [], f = 0; f < i.length && !((r -= 2) < 0); ++f)
    t = i.charCodeAt(f), e = t >> 8, n = t % 256, o.push(n), o.push(e);
  return o;
}
function bt(i) {
  return te(_e(i));
}
function Sr(i, r, t, e) {
  for (var n = 0; n < e && !(n + t >= r.length || n >= i.length); ++n)
    r[n + t] = i[n];
  return n;
}
function Ie(i) {
  return i !== i;
}
function Lt(i) {
  return i != null && (!!i._isBuffer || Wt(i) || Se(i));
}
function Wt(i) {
  return !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i);
}
function Se(i) {
  return typeof i.readFloatLE == "function" && typeof i.slice == "function" && Wt(i.slice(0, 0));
}
var J;
var O;
var re;
var Vr;
var ne;
var vt;
var Bt;
var oe;
var _t;
var Re;
var Ht = tr(() => {
  Y();
  D();
  P();
  J = [], O = [], re = typeof Uint8Array < "u" ? Uint8Array : Array, Vr = false;
  ne = {}.toString, vt = Array.isArray || function(i) {
    return ne.call(i) == "[object Array]";
  };
  Bt = 50;
  c.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
  oe = Tr();
  c.poolSize = 8192;
  c._augment = function(i) {
    return i.__proto__ = c.prototype, i;
  };
  c.from = function(i, r, t) {
    return It(null, i, r, t);
  };
  c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array);
  c.alloc = function(i, r, t) {
    return fe(null, i, r, t);
  };
  c.allocUnsafe = function(i) {
    return Jr(null, i);
  };
  c.allocUnsafeSlow = function(i) {
    return Jr(null, i);
  };
  c.isBuffer = Lt;
  c.compare = function(r, t) {
    if (!$(r) || !$(t))
      throw new TypeError("Arguments must be Buffers");
    if (r === t)
      return 0;
    for (var e = r.length, n = t.length, o = 0, f = Math.min(e, n); o < f; ++o)
      if (r[o] !== t[o]) {
        e = r[o], n = t[o];
        break;
      }
    return e < n ? -1 : n < e ? 1 : 0;
  };
  c.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  c.concat = function(r, t) {
    if (!vt(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return c.alloc(0);
    var e;
    if (t === void 0)
      for (t = 0, e = 0; e < r.length; ++e)
        t += r[e].length;
    var n = c.allocUnsafe(t), o = 0;
    for (e = 0; e < r.length; ++e) {
      var f = r[e];
      if (!$(f))
        throw new TypeError('"list" argument must be an Array of Buffers');
      f.copy(n, o), o += f.length;
    }
    return n;
  };
  c.byteLength = Dt;
  c.prototype._isBuffer = true;
  c.prototype.swap16 = function() {
    var r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var t = 0; t < r; t += 2)
      fr(this, t, t + 1);
    return this;
  };
  c.prototype.swap32 = function() {
    var r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var t = 0; t < r; t += 4)
      fr(this, t, t + 3), fr(this, t + 1, t + 2);
    return this;
  };
  c.prototype.swap64 = function() {
    var r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var t = 0; t < r; t += 8)
      fr(this, t, t + 7), fr(this, t + 1, t + 6), fr(this, t + 2, t + 5), fr(this, t + 3, t + 4);
    return this;
  };
  c.prototype.toString = function() {
    var r = this.length | 0;
    return r === 0 ? "" : arguments.length === 0 ? Ct(this, 0, r) : ce.apply(this, arguments);
  };
  c.prototype.equals = function(r) {
    if (!$(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? true : c.compare(this, r) === 0;
  };
  c.prototype.inspect = function() {
    var r = "", t = Bt;
    return this.length > 0 && (r = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (r += " ... ")), "<Buffer " + r + ">";
  };
  c.prototype.compare = function(r, t, e, n, o) {
    if (!$(r))
      throw new TypeError("Argument must be a Buffer");
    if (t === void 0 && (t = 0), e === void 0 && (e = r ? r.length : 0), n === void 0 && (n = 0), o === void 0 && (o = this.length), t < 0 || e > r.length || n < 0 || o > this.length)
      throw new RangeError("out of range index");
    if (n >= o && t >= e)
      return 0;
    if (n >= o)
      return -1;
    if (t >= e)
      return 1;
    if (t >>>= 0, e >>>= 0, n >>>= 0, o >>>= 0, this === r)
      return 0;
    for (var f = o - n, u = e - t, a = Math.min(f, u), p = this.slice(n, o), x = r.slice(t, e), l = 0; l < a; ++l)
      if (p[l] !== x[l]) {
        f = p[l], u = x[l];
        break;
      }
    return f < u ? -1 : u < f ? 1 : 0;
  };
  c.prototype.includes = function(r, t, e) {
    return this.indexOf(r, t, e) !== -1;
  };
  c.prototype.indexOf = function(r, t, e) {
    return Pt(this, r, t, e, true);
  };
  c.prototype.lastIndexOf = function(r, t, e) {
    return Pt(this, r, t, e, false);
  };
  c.prototype.write = function(r, t, e, n) {
    if (t === void 0)
      n = "utf8", e = this.length, t = 0;
    else if (e === void 0 && typeof t == "string")
      n = t, e = this.length, t = 0;
    else if (isFinite(t))
      t = t | 0, isFinite(e) ? (e = e | 0, n === void 0 && (n = "utf8")) : (n = e, e = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var o = this.length - t;
    if ((e === void 0 || e > o) && (e = o), r.length > 0 && (e < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    for (var f = false; ; )
      switch (n) {
        case "hex":
          return le(this, r, t, e);
        case "utf8":
        case "utf-8":
          return xe(this, r, t, e);
        case "ascii":
          return Yt(this, r, t, e);
        case "latin1":
        case "binary":
          return pe(this, r, t, e);
        case "base64":
          return we(this, r, t, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ee(this, r, t, e);
        default:
          if (f)
            throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), f = true;
      }
  };
  c.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  _t = 4096;
  c.prototype.slice = function(r, t) {
    var e = this.length;
    r = ~~r, t = t === void 0 ? e : ~~t, r < 0 ? (r += e, r < 0 && (r = 0)) : r > e && (r = e), t < 0 ? (t += e, t < 0 && (t = 0)) : t > e && (t = e), t < r && (t = r);
    var n;
    if (c.TYPED_ARRAY_SUPPORT)
      n = this.subarray(r, t), n.__proto__ = c.prototype;
    else {
      var o = t - r;
      n = new c(o, void 0);
      for (var f = 0; f < o; ++f)
        n[f] = this[f + r];
    }
    return n;
  };
  c.prototype.readUIntLE = function(r, t, e) {
    r = r | 0, t = t | 0, e || S(r, t, this.length);
    for (var n = this[r], o = 1, f = 0; ++f < t && (o *= 256); )
      n += this[r + f] * o;
    return n;
  };
  c.prototype.readUIntBE = function(r, t, e) {
    r = r | 0, t = t | 0, e || S(r, t, this.length);
    for (var n = this[r + --t], o = 1; t > 0 && (o *= 256); )
      n += this[r + --t] * o;
    return n;
  };
  c.prototype.readUInt8 = function(r, t) {
    return t || S(r, 1, this.length), this[r];
  };
  c.prototype.readUInt16LE = function(r, t) {
    return t || S(r, 2, this.length), this[r] | this[r + 1] << 8;
  };
  c.prototype.readUInt16BE = function(r, t) {
    return t || S(r, 2, this.length), this[r] << 8 | this[r + 1];
  };
  c.prototype.readUInt32LE = function(r, t) {
    return t || S(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  };
  c.prototype.readUInt32BE = function(r, t) {
    return t || S(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  };
  c.prototype.readIntLE = function(r, t, e) {
    r = r | 0, t = t | 0, e || S(r, t, this.length);
    for (var n = this[r], o = 1, f = 0; ++f < t && (o *= 256); )
      n += this[r + f] * o;
    return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  c.prototype.readIntBE = function(r, t, e) {
    r = r | 0, t = t | 0, e || S(r, t, this.length);
    for (var n = t, o = 1, f = this[r + --n]; n > 0 && (o *= 256); )
      f += this[r + --n] * o;
    return o *= 128, f >= o && (f -= Math.pow(2, 8 * t)), f;
  };
  c.prototype.readInt8 = function(r, t) {
    return t || S(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  };
  c.prototype.readInt16LE = function(r, t) {
    t || S(r, 2, this.length);
    var e = this[r] | this[r + 1] << 8;
    return e & 32768 ? e | 4294901760 : e;
  };
  c.prototype.readInt16BE = function(r, t) {
    t || S(r, 2, this.length);
    var e = this[r + 1] | this[r] << 8;
    return e & 32768 ? e | 4294901760 : e;
  };
  c.prototype.readInt32LE = function(r, t) {
    return t || S(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  };
  c.prototype.readInt32BE = function(r, t) {
    return t || S(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  };
  c.prototype.readFloatLE = function(r, t) {
    return t || S(r, 4, this.length), vr(this, r, true, 23, 4);
  };
  c.prototype.readFloatBE = function(r, t) {
    return t || S(r, 4, this.length), vr(this, r, false, 23, 4);
  };
  c.prototype.readDoubleLE = function(r, t) {
    return t || S(r, 8, this.length), vr(this, r, true, 52, 8);
  };
  c.prototype.readDoubleBE = function(r, t) {
    return t || S(r, 8, this.length), vr(this, r, false, 52, 8);
  };
  c.prototype.writeUIntLE = function(r, t, e, n) {
    if (r = +r, t = t | 0, e = e | 0, !n) {
      var o = Math.pow(2, 8 * e) - 1;
      M(this, r, t, e, o, 0);
    }
    var f = 1, u = 0;
    for (this[t] = r & 255; ++u < e && (f *= 256); )
      this[t + u] = r / f & 255;
    return t + e;
  };
  c.prototype.writeUIntBE = function(r, t, e, n) {
    if (r = +r, t = t | 0, e = e | 0, !n) {
      var o = Math.pow(2, 8 * e) - 1;
      M(this, r, t, e, o, 0);
    }
    var f = e - 1, u = 1;
    for (this[t + f] = r & 255; --f >= 0 && (u *= 256); )
      this[t + f] = r / u & 255;
    return t + e;
  };
  c.prototype.writeUInt8 = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), this[t] = r & 255, t + 1;
  };
  c.prototype.writeUInt16LE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = r & 255, this[t + 1] = r >>> 8) : Br(this, r, t, true), t + 2;
  };
  c.prototype.writeUInt16BE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 8, this[t + 1] = r & 255) : Br(this, r, t, false), t + 2;
  };
  c.prototype.writeUInt32LE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255) : Ir(this, r, t, true), t + 4;
  };
  c.prototype.writeUInt32BE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255) : Ir(this, r, t, false), t + 4;
  };
  c.prototype.writeIntLE = function(r, t, e, n) {
    if (r = +r, t = t | 0, !n) {
      var o = Math.pow(2, 8 * e - 1);
      M(this, r, t, e, o - 1, -o);
    }
    var f = 0, u = 1, a = 0;
    for (this[t] = r & 255; ++f < e && (u *= 256); )
      r < 0 && a === 0 && this[t + f - 1] !== 0 && (a = 1), this[t + f] = (r / u >> 0) - a & 255;
    return t + e;
  };
  c.prototype.writeIntBE = function(r, t, e, n) {
    if (r = +r, t = t | 0, !n) {
      var o = Math.pow(2, 8 * e - 1);
      M(this, r, t, e, o - 1, -o);
    }
    var f = e - 1, u = 1, a = 0;
    for (this[t + f] = r & 255; --f >= 0 && (u *= 256); )
      r < 0 && a === 0 && this[t + f + 1] !== 0 && (a = 1), this[t + f] = (r / u >> 0) - a & 255;
    return t + e;
  };
  c.prototype.writeInt8 = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  };
  c.prototype.writeInt16LE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = r & 255, this[t + 1] = r >>> 8) : Br(this, r, t, true), t + 2;
  };
  c.prototype.writeInt16BE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 8, this[t + 1] = r & 255) : Br(this, r, t, false), t + 2;
  };
  c.prototype.writeInt32LE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24) : Ir(this, r, t, true), t + 4;
  };
  c.prototype.writeInt32BE = function(r, t, e) {
    return r = +r, t = t | 0, e || M(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255) : Ir(this, r, t, false), t + 4;
  };
  c.prototype.writeFloatLE = function(r, t, e) {
    return kt(this, r, t, true, e);
  };
  c.prototype.writeFloatBE = function(r, t, e) {
    return kt(this, r, t, false, e);
  };
  c.prototype.writeDoubleLE = function(r, t, e) {
    return Nt(this, r, t, true, e);
  };
  c.prototype.writeDoubleBE = function(r, t, e) {
    return Nt(this, r, t, false, e);
  };
  c.prototype.copy = function(r, t, e, n) {
    if (e || (e = 0), !n && n !== 0 && (n = this.length), t >= r.length && (t = r.length), t || (t = 0), n > 0 && n < e && (n = e), n === e || r.length === 0 || this.length === 0)
      return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (e < 0 || e >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (n < 0)
      throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length), r.length - t < n - e && (n = r.length - t + e);
    var o = n - e, f;
    if (this === r && e < t && t < n)
      for (f = o - 1; f >= 0; --f)
        r[f + t] = this[f + e];
    else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
      for (f = 0; f < o; ++f)
        r[f + t] = this[f + e];
    else
      Uint8Array.prototype.set.call(r, this.subarray(e, e + o), t);
    return o;
  };
  c.prototype.fill = function(r, t, e, n) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (n = t, t = 0, e = this.length) : typeof e == "string" && (n = e, e = this.length), r.length === 1) {
        var o = r.charCodeAt(0);
        o < 256 && (r = o);
      }
      if (n !== void 0 && typeof n != "string")
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !c.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
    } else
      typeof r == "number" && (r = r & 255);
    if (t < 0 || this.length < t || this.length < e)
      throw new RangeError("Out of range index");
    if (e <= t)
      return this;
    t = t >>> 0, e = e === void 0 ? this.length : e >>> 0, r || (r = 0);
    var f;
    if (typeof r == "number")
      for (f = t; f < e; ++f)
        this[f] = r;
    else {
      var u = $(r) ? r : Ur(new c(r, n).toString()), a = u.length;
      for (f = 0; f < e - t; ++f)
        this[f + t] = u[f % a];
    }
    return this;
  };
  Re = /[^+\/0-9A-Za-z-_]/g;
});
var Vt = Nr((un, Dr) => {
  Y();
  D();
  P();
  var ar = (Ht(), Xr(Ot));
  if (ar && ar.default) {
    Dr.exports = ar.default;
    for (let i in ar)
      Dr.exports[i] = ar[i];
  } else
    ar && (Dr.exports = ar);
});
var Jt = Nr((ln, Pr) => {
  Y();
  D();
  P();
  (function() {
    "use strict";
    var i = "input is invalid type", r = typeof window == "object", t = r ? window : {};
    t.JS_SHA256_NO_WINDOW && (r = false);
    var e = !r && typeof self == "object", n = !t.JS_SHA256_NO_NODE_JS && typeof L == "object" && L.versions && L.versions.node;
    n ? t = globalThis : e && (t = self);
    var o = !t.JS_SHA256_NO_COMMON_JS && typeof Pr == "object" && Pr.exports, f = typeof define == "function" && define.amd, u = !t.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", a = "0123456789abcdef".split(""), p = [-2147483648, 8388608, 32768, 128], x = [24, 16, 8, 0], l = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], g = ["hex", "array", "digest", "arrayBuffer"], F = [];
    (t.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(s) {
      return Object.prototype.toString.call(s) === "[object Array]";
    }), u && (t.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(s) {
      return typeof s == "object" && s.buffer && s.buffer.constructor === ArrayBuffer;
    });
    var v = function(s, A) {
      return function(d) {
        return new B(A, true).update(d)[s]();
      };
    }, k = function(s) {
      var A = v("hex", s);
      n && (A = xr(A, s)), A.create = function() {
        return new B(s);
      }, A.update = function(m) {
        return A.create().update(m);
      };
      for (var d = 0; d < g.length; ++d) {
        var y = g[d];
        A[y] = v(y, s);
      }
      return A;
    }, xr = function(s, A) {
      var d = mt(), y = Vt().Buffer, m = A ? "sha224" : "sha256", E;
      y.from && !t.JS_SHA256_NO_BUFFER_FROM ? E = y.from : E = function(w) {
        return new y(w);
      };
      var R = function(w) {
        if (typeof w == "string")
          return d.createHash(m).update(w, "utf8").digest("hex");
        if (w == null)
          throw new Error(i);
        return w.constructor === ArrayBuffer && (w = new Uint8Array(w)), Array.isArray(w) || ArrayBuffer.isView(w) || w.constructor === y ? d.createHash(m).update(E(w)).digest("hex") : s(w);
      };
      return R;
    }, pr = function(s, A) {
      return function(d, y) {
        return new wr(d, A, true).update(y)[s]();
      };
    }, sr = function(s) {
      var A = pr("hex", s);
      A.create = function(m) {
        return new wr(m, s);
      }, A.update = function(m, E) {
        return A.create(m).update(E);
      };
      for (var d = 0; d < g.length; ++d) {
        var y = g[d];
        A[y] = pr(y, s);
      }
      return A;
    };
    function B(s, A) {
      A ? (F[0] = F[16] = F[1] = F[2] = F[3] = F[4] = F[5] = F[6] = F[7] = F[8] = F[9] = F[10] = F[11] = F[12] = F[13] = F[14] = F[15] = 0, this.blocks = F) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], s ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = false, this.first = true, this.is224 = s;
    }
    B.prototype.update = function(s) {
      if (!this.finalized) {
        var A, d = typeof s;
        if (d !== "string") {
          if (d === "object") {
            if (s === null)
              throw new Error(i);
            if (u && s.constructor === ArrayBuffer)
              s = new Uint8Array(s);
            else if (!Array.isArray(s) && (!u || !ArrayBuffer.isView(s)))
              throw new Error(i);
          } else
            throw new Error(i);
          A = true;
        }
        for (var y, m = 0, E, R = s.length, w = this.blocks; m < R; ) {
          if (this.hashed && (this.hashed = false, w[0] = this.block, this.block = w[16] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0), A)
            for (E = this.start; m < R && E < 64; ++m)
              w[E >>> 2] |= s[m] << x[E++ & 3];
          else
            for (E = this.start; m < R && E < 64; ++m)
              y = s.charCodeAt(m), y < 128 ? w[E >>> 2] |= y << x[E++ & 3] : y < 2048 ? (w[E >>> 2] |= (192 | y >>> 6) << x[E++ & 3], w[E >>> 2] |= (128 | y & 63) << x[E++ & 3]) : y < 55296 || y >= 57344 ? (w[E >>> 2] |= (224 | y >>> 12) << x[E++ & 3], w[E >>> 2] |= (128 | y >>> 6 & 63) << x[E++ & 3], w[E >>> 2] |= (128 | y & 63) << x[E++ & 3]) : (y = 65536 + ((y & 1023) << 10 | s.charCodeAt(++m) & 1023), w[E >>> 2] |= (240 | y >>> 18) << x[E++ & 3], w[E >>> 2] |= (128 | y >>> 12 & 63) << x[E++ & 3], w[E >>> 2] |= (128 | y >>> 6 & 63) << x[E++ & 3], w[E >>> 2] |= (128 | y & 63) << x[E++ & 3]);
          this.lastByteIndex = E, this.bytes += E - this.start, E >= 64 ? (this.block = w[16], this.start = E - 64, this.hash(), this.hashed = true) : this.start = E;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }
    }, B.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var s = this.blocks, A = this.lastByteIndex;
        s[16] = this.block, s[A >>> 2] |= p[A & 3], this.block = s[16], A >= 56 && (this.hashed || this.hash(), s[0] = this.block, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), s[14] = this.hBytes << 3 | this.bytes >>> 29, s[15] = this.bytes << 3, this.hash();
      }
    }, B.prototype.hash = function() {
      var s = this.h0, A = this.h1, d = this.h2, y = this.h3, m = this.h4, E = this.h5, R = this.h6, w = this.h7, _ = this.blocks, U, N, b, G, T, Q, Z, cr, Cr, Mr, Er;
      for (U = 16; U < 64; ++U)
        T = _[U - 15], N = (T >>> 7 | T << 25) ^ (T >>> 18 | T << 14) ^ T >>> 3, T = _[U - 2], b = (T >>> 17 | T << 15) ^ (T >>> 19 | T << 13) ^ T >>> 10, _[U] = _[U - 16] + N + _[U - 7] + b << 0;
      for (Er = A & d, U = 0; U < 64; U += 4)
        this.first ? (this.is224 ? (cr = 300032, T = _[0] - 1413257819, w = T - 150054599 << 0, y = T + 24177077 << 0) : (cr = 704751109, T = _[0] - 210244248, w = T - 1521486534 << 0, y = T + 143694565 << 0), this.first = false) : (N = (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10), b = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7), cr = s & A, G = cr ^ s & d ^ Er, Z = m & E ^ ~m & R, T = w + b + Z + l[U] + _[U], Q = N + G, w = y + T << 0, y = T + Q << 0), N = (y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10), b = (w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7), Cr = y & s, G = Cr ^ y & A ^ cr, Z = w & m ^ ~w & E, T = R + b + Z + l[U + 1] + _[U + 1], Q = N + G, R = d + T << 0, d = T + Q << 0, N = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), b = (R >>> 6 | R << 26) ^ (R >>> 11 | R << 21) ^ (R >>> 25 | R << 7), Mr = d & y, G = Mr ^ d & s ^ Cr, Z = R & w ^ ~R & m, T = E + b + Z + l[U + 2] + _[U + 2], Q = N + G, E = A + T << 0, A = T + Q << 0, N = (A >>> 2 | A << 30) ^ (A >>> 13 | A << 19) ^ (A >>> 22 | A << 10), b = (E >>> 6 | E << 26) ^ (E >>> 11 | E << 21) ^ (E >>> 25 | E << 7), Er = A & d, G = Er ^ A & y ^ Mr, Z = E & R ^ ~E & w, T = m + b + Z + l[U + 3] + _[U + 3], Q = N + G, m = s + T << 0, s = T + Q << 0, this.chromeBugWorkAround = true;
      this.h0 = this.h0 + s << 0, this.h1 = this.h1 + A << 0, this.h2 = this.h2 + d << 0, this.h3 = this.h3 + y << 0, this.h4 = this.h4 + m << 0, this.h5 = this.h5 + E << 0, this.h6 = this.h6 + R << 0, this.h7 = this.h7 + w << 0;
    }, B.prototype.hex = function() {
      this.finalize();
      var s = this.h0, A = this.h1, d = this.h2, y = this.h3, m = this.h4, E = this.h5, R = this.h6, w = this.h7, _ = a[s >>> 28 & 15] + a[s >>> 24 & 15] + a[s >>> 20 & 15] + a[s >>> 16 & 15] + a[s >>> 12 & 15] + a[s >>> 8 & 15] + a[s >>> 4 & 15] + a[s & 15] + a[A >>> 28 & 15] + a[A >>> 24 & 15] + a[A >>> 20 & 15] + a[A >>> 16 & 15] + a[A >>> 12 & 15] + a[A >>> 8 & 15] + a[A >>> 4 & 15] + a[A & 15] + a[d >>> 28 & 15] + a[d >>> 24 & 15] + a[d >>> 20 & 15] + a[d >>> 16 & 15] + a[d >>> 12 & 15] + a[d >>> 8 & 15] + a[d >>> 4 & 15] + a[d & 15] + a[y >>> 28 & 15] + a[y >>> 24 & 15] + a[y >>> 20 & 15] + a[y >>> 16 & 15] + a[y >>> 12 & 15] + a[y >>> 8 & 15] + a[y >>> 4 & 15] + a[y & 15] + a[m >>> 28 & 15] + a[m >>> 24 & 15] + a[m >>> 20 & 15] + a[m >>> 16 & 15] + a[m >>> 12 & 15] + a[m >>> 8 & 15] + a[m >>> 4 & 15] + a[m & 15] + a[E >>> 28 & 15] + a[E >>> 24 & 15] + a[E >>> 20 & 15] + a[E >>> 16 & 15] + a[E >>> 12 & 15] + a[E >>> 8 & 15] + a[E >>> 4 & 15] + a[E & 15] + a[R >>> 28 & 15] + a[R >>> 24 & 15] + a[R >>> 20 & 15] + a[R >>> 16 & 15] + a[R >>> 12 & 15] + a[R >>> 8 & 15] + a[R >>> 4 & 15] + a[R & 15];
      return this.is224 || (_ += a[w >>> 28 & 15] + a[w >>> 24 & 15] + a[w >>> 20 & 15] + a[w >>> 16 & 15] + a[w >>> 12 & 15] + a[w >>> 8 & 15] + a[w >>> 4 & 15] + a[w & 15]), _;
    }, B.prototype.toString = B.prototype.hex, B.prototype.digest = function() {
      this.finalize();
      var s = this.h0, A = this.h1, d = this.h2, y = this.h3, m = this.h4, E = this.h5, R = this.h6, w = this.h7, _ = [s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s & 255, A >>> 24 & 255, A >>> 16 & 255, A >>> 8 & 255, A & 255, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, d & 255, y >>> 24 & 255, y >>> 16 & 255, y >>> 8 & 255, y & 255, m >>> 24 & 255, m >>> 16 & 255, m >>> 8 & 255, m & 255, E >>> 24 & 255, E >>> 16 & 255, E >>> 8 & 255, E & 255, R >>> 24 & 255, R >>> 16 & 255, R >>> 8 & 255, R & 255];
      return this.is224 || _.push(w >>> 24 & 255, w >>> 16 & 255, w >>> 8 & 255, w & 255), _;
    }, B.prototype.array = B.prototype.digest, B.prototype.arrayBuffer = function() {
      this.finalize();
      var s = new ArrayBuffer(this.is224 ? 28 : 32), A = new DataView(s);
      return A.setUint32(0, this.h0), A.setUint32(4, this.h1), A.setUint32(8, this.h2), A.setUint32(12, this.h3), A.setUint32(16, this.h4), A.setUint32(20, this.h5), A.setUint32(24, this.h6), this.is224 || A.setUint32(28, this.h7), s;
    };
    function wr(s, A, d) {
      var y, m = typeof s;
      if (m === "string") {
        var E = [], R = s.length, w = 0, _;
        for (y = 0; y < R; ++y)
          _ = s.charCodeAt(y), _ < 128 ? E[w++] = _ : _ < 2048 ? (E[w++] = 192 | _ >>> 6, E[w++] = 128 | _ & 63) : _ < 55296 || _ >= 57344 ? (E[w++] = 224 | _ >>> 12, E[w++] = 128 | _ >>> 6 & 63, E[w++] = 128 | _ & 63) : (_ = 65536 + ((_ & 1023) << 10 | s.charCodeAt(++y) & 1023), E[w++] = 240 | _ >>> 18, E[w++] = 128 | _ >>> 12 & 63, E[w++] = 128 | _ >>> 6 & 63, E[w++] = 128 | _ & 63);
        s = E;
      } else if (m === "object") {
        if (s === null)
          throw new Error(i);
        if (u && s.constructor === ArrayBuffer)
          s = new Uint8Array(s);
        else if (!Array.isArray(s) && (!u || !ArrayBuffer.isView(s)))
          throw new Error(i);
      } else
        throw new Error(i);
      s.length > 64 && (s = new B(A, true).update(s).array());
      var U = [], N = [];
      for (y = 0; y < 64; ++y) {
        var b = s[y] || 0;
        U[y] = 92 ^ b, N[y] = 54 ^ b;
      }
      B.call(this, A, d), this.update(N), this.oKeyPad = U, this.inner = true, this.sharedMemory = d;
    }
    wr.prototype = new B(), wr.prototype.finalize = function() {
      if (B.prototype.finalize.call(this), this.inner) {
        this.inner = false;
        var s = this.array();
        B.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(s), B.prototype.finalize.call(this);
      }
    };
    var z = k();
    z.sha256 = z, z.sha224 = k(true), z.sha256.hmac = sr(), z.sha224.hmac = sr(true), o ? Pr.exports = z : (t.sha256 = z.sha256, t.sha224 = z.sha224, f && define(function() {
      return z;
    }));
  })();
});
Y();
D();
P();
var De = Jt().sha224;
var lr = "ca110us";
var zr = "cdn.xn--b6gac.eu.org";
var yn = { async fetch(i, r, t) {
  try {
    zr = r.PROXYIP || zr, lr = r.PASSWORD || lr;
    let e = i.headers.get("Upgrade");
    if (!e || e !== "websocket")
      switch (new URL(i.url).pathname) {
        case `/${lr}`:
          let o = i.headers.get("Host");
          return new Response(`trojan://${lr}@${o}:443/?type=ws&host=${o}&security=tls`, { status: 200, headers: { "Content-Type": "text/plain;charset=utf-8" } });
        default:
          return new Response("404 Not found", { status: 404 });
      }
    else
      return await Ye(i);
  } catch (e) {
    let n = e;
    return new Response(n.toString());
  }
} };
async function Ye(i) {
  let r = new WebSocketPair(), [t, e] = Object.values(r);
  e.accept();
  let n = "", o = "", f = (l, g) => {
    console.log(`[${n}:${o}] ${l}`, g || "");
  }, u = i.headers.get("sec-websocket-protocol") || "", a = ke(e, u, f), p = { value: null }, x = null;
  return a.pipeTo(new WritableStream({ async write(l, g) {
    if (x)
      return x(l);
    if (p.value) {
      let sr = p.value.writable.getWriter();
      await sr.write(l), sr.releaseLock();
      return;
    }
    let { hasError: F, message: v, portRemote: k = 443, addressRemote: xr = "", rawClientData: pr } = await Ce(l);
    if (n = xr, o = `${k}--${Math.random()} tcp`, F)
      throw new Error(v);
    Me(p, xr, k, pr, e, f);
  }, close() {
    f("readableWebSocketStream is closed");
  }, abort(l) {
    f("readableWebSocketStream is aborted", JSON.stringify(l));
  } })).catch((l) => {
    f("readableWebSocketStream pipeTo error", l);
  }), new Response(null, { status: 101, webSocket: t });
}
async function Ce(i) {
  if (i.byteLength < 56)
    return { hasError: true, message: "invalid data" };
  let r = 56;
  if (new Uint8Array(i.slice(56, 57))[0] !== 13 || new Uint8Array(i.slice(57, 58))[0] !== 10)
    return { hasError: true, message: "invalid header format (missing CR LF)" };
  if (new TextDecoder().decode(i.slice(0, r)) !== De(lr))
    return { hasError: true, message: "invalid password" };
  let e = i.slice(r + 2);
  if (e.byteLength < 6)
    return { hasError: true, message: "invalid SOCKS5 request data" };
  let n = new DataView(e);
  if (n.getUint8(0) !== 1)
    return { hasError: true, message: "unsupported command, only TCP (CONNECT) is allowed" };
  let f = n.getUint8(1), u = 0, a = 2, p = "";
  switch (f) {
    case 1:
      u = 4, p = new Uint8Array(e.slice(a, a + u)).join(".");
      break;
    case 3:
      u = new Uint8Array(e.slice(a, a + 1))[0], a += 1, p = new TextDecoder().decode(e.slice(a, a + u));
      break;
    case 4:
      u = 16;
      let F = new DataView(e.slice(a, a + u)), v = [];
      for (let k = 0; k < 8; k++)
        v.push(F.getUint16(k * 2).toString(16));
      p = v.join(":");
      break;
    default:
      return { hasError: true, message: `invalid addressType is ${f}` };
  }
  if (!p)
    return { hasError: true, message: `address is empty, addressType is ${f}` };
  let x = a + u, l = e.slice(x, x + 2), g = new DataView(l).getUint16(0);
  return { hasError: false, addressRemote: p, portRemote: g, rawClientData: e.slice(x + 4) };
}
async function Me(i, r, t, e, n, o) {
  async function f(p, x) {
    let l = Pe({ hostname: p, port: x });
    i.value = l, o(`connected to ${p}:${x}`);
    let g = l.writable.getWriter();
    return await g.write(e), g.releaseLock(), l;
  }
  async function u() {
    let p = await f(zr || r, t);
    p.closed.catch((x) => {
      console.log("retry tcpSocket closed error", x);
    }).finally(() => {
      Yr(n);
    }), $t(p, n, null, o);
  }
  let a = await f(r, t);
  $t(a, n, u, o);
}
function ke(i, r, t) {
  let e = false;
  return new ReadableStream({ start(o) {
    i.addEventListener("message", (a) => {
      if (e)
        return;
      let p = a.data;
      o.enqueue(p);
    }), i.addEventListener("close", () => {
      Yr(i), !e && o.close();
    }), i.addEventListener("error", (a) => {
      t("webSocketServer error"), o.error(a);
    });
    let { earlyData: f, error: u } = Ne(r);
    u ? o.error(u) : f && o.enqueue(f);
  }, pull(o) {
  }, cancel(o) {
    e || (t(`readableStream was canceled, due to ${o}`), e = true, Yr(i));
  } });
}
async function $t(i, r, t, e) {
  let n = false;
  await i.readable.pipeTo(new WritableStream({ start() {
  }, async write(o, f) {
    n = true, r.readyState !== zt && f.error("webSocket connection is not open"), r.send(o);
  }, close() {
    e(`remoteSocket.readable is closed, hasIncomingData: ${n}`);
  }, abort(o) {
    console.error("remoteSocket.readable abort", o);
  } })).catch((o) => {
    console.error("remoteSocketToWS error:", o.stack || o), Yr(r);
  }), n === false && t && (e("retry"), t());
}
function Ne(i) {
  if (!i)
    return { error: null };
  try {
    i = i.replace(/-/g, "+").replace(/_/g, "/");
    let r = atob(i);
    return { earlyData: Uint8Array.from(r, (e) => e.charCodeAt(0)).buffer, error: null };
  } catch (r) {
    return { error: r };
  }
}
var zt = 1;
var be = 2;
function Yr(i) {
  try {
    (i.readyState === zt || i.readyState === be) && i.close();
  } catch (r) {
    console.error("safeCloseWebSocket error", r);
  }
}
export {
  yn as default
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/*! Bundled license information:

@esbuild-plugins/node-globals-polyfill/Buffer.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)

js-sha256/src/sha256.js:
  (**
   * [js-sha256]{@link https://github.com/emn178/js-sha256}
   *
   * @version 0.11.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2024
   * @license MIT
   *)
*/
//# sourceMappingURL=_worker.js.map
