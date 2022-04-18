// PouchDB 7.3.0
// 
// (c) 2012-2022 Dale Harvey and the PouchDB team
// PouchDB may be freely distributed under the Apache license, version 2.0.
// For all details and documentation:
// http://pouchdb.com

! function(e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
 else if ("function" == typeof define && define.amd) define([], e);
 else {
  ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).PouchDB = e() } }((function() { return function e(t, n, r) {
  function o(s, a) { if (!n[s]) { if (!t[s]) { var u = "function" == typeof require && require; if (!a && u) return u(s, !0); if (i) return i(s, !0); var c = new Error("Cannot find module '" + s + "'"); throw c.code = "MODULE_NOT_FOUND", c } var f = n[s] = { exports: {} };
    t[s][0].call(f.exports, (function(e) { return o(t[s][1][e] || e) }), f, f.exports, e, t, n, r) } return n[s].exports } for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]); return o }({ 1: [function(e, t, n) { "use strict";
   t.exports = function(e) { return function() { var t = arguments.length; if (t) { for (var n = [], r = -1; ++r < t;) n[r] = arguments[r]; return e.call(this, n) } return e.call(this, []) } } }, {}], 2: [function(e, t, n) {}, {}], 3: [function(e, t, n) { var r = Object.create || function(e) { var t = function() {}; return t.prototype = e, new t },
    o = Object.keys || function(e) { var t = []; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n); return n },
    i = Function.prototype.bind || function(e) { var t = this; return function() { return t.apply(e, arguments) } };

   function s() { this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = r(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 } t.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._maxListeners = void 0; var a, u = 10; try { var c = {};
    Object.defineProperty && Object.defineProperty(c, "x", { value: 0 }), a = 0 === c.x } catch (e) { a = !1 }

   function f(e) { return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners }

   function l(e, t, n) { if (t) e.call(n);
    else
     for (var r = e.length, o = w(e, r), i = 0; i < r; ++i) o[i].call(n) }

   function d(e, t, n, r) { if (t) e.call(n, r);
    else
     for (var o = e.length, i = w(e, o), s = 0; s < o; ++s) i[s].call(n, r) }

   function h(e, t, n, r, o) { if (t) e.call(n, r, o);
    else
     for (var i = e.length, s = w(e, i), a = 0; a < i; ++a) s[a].call(n, r, o) }

   function p(e, t, n, r, o, i) { if (t) e.call(n, r, o, i);
    else
     for (var s = e.length, a = w(e, s), u = 0; u < s; ++u) a[u].call(n, r, o, i) }

   function v(e, t, n, r) { if (t) e.apply(n, r);
    else
     for (var o = e.length, i = w(e, o), s = 0; s < o; ++s) i[s].apply(n, r) }

   function y(e, t, n, o) { var i, s, a; if ("function" != typeof n) throw new TypeError('"listener" argument must be a function'); if ((s = e._events) ? (s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), a = s[t]) : (s = e._events = r(null), e._eventsCount = 0), a) { if ("function" == typeof a ? a = s[t] = o ? [n, a] : [a, n] : o ? a.unshift(n) : a.push(n), !a.warned && (i = f(e)) && i > 0 && a.length > i) { a.warned = !0; var u = new Error("Possible EventEmitter memory leak detected. " + a.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
      u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, "object" == typeof console && console.warn && console.warn("%s: %s", u.name, u.message) } } else a = s[t] = n, ++e._eventsCount; return e }

   function _() { if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
     case 0:
      return this.listener.call(this.target);
     case 1:
      return this.listener.call(this.target, arguments[0]);
     case 2:
      return this.listener.call(this.target, arguments[0], arguments[1]);
     case 3:
      return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
     default:
      for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
      this.listener.apply(this.target, e) } }

   function g(e, t, n) { var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
     o = i.call(_, r); return o.listener = n, r.wrapFn = o, o }

   function m(e, t, n) { var r = e._events; if (!r) return []; var o = r[t]; return o ? "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n]; return t }(o) : w(o, o.length) : [] }

   function b(e) { var t = this._events; if (t) { var n = t[e]; if ("function" == typeof n) return 1; if (n) return n.length } return 0 }

   function w(e, t) { for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r]; return n } a ? Object.defineProperty(s, "defaultMaxListeners", { enumerable: !0, get: function() { return u }, set: function(e) { if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
     u = e } }) : s.defaultMaxListeners = u, s.prototype.setMaxListeners = function(e) { if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this }, s.prototype.getMaxListeners = function() { return f(this) }, s.prototype.emit = function(e) { var t, n, r, o, i, s, a = "error" === e; if (s = this._events) a = a && null == s.error;
    else if (!a) return !1; if (a) { if (arguments.length > 1 && (t = arguments[1]), t instanceof Error) throw t; var u = new Error('Unhandled "error" event. (' + t + ")"); throw u.context = t, u } if (!(n = s[e])) return !1; var c = "function" == typeof n; switch (r = arguments.length) {
     case 1:
      l(n, c, this); break;
     case 2:
      d(n, c, this, arguments[1]); break;
     case 3:
      h(n, c, this, arguments[1], arguments[2]); break;
     case 4:
      p(n, c, this, arguments[1], arguments[2], arguments[3]); break;
     default:
      for (o = new Array(r - 1), i = 1; i < r; i++) o[i - 1] = arguments[i];
      v(n, c, this, o) } return !0 }, s.prototype.addListener = function(e, t) { return y(this, e, t, !1) }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) { return y(this, e, t, !0) }, s.prototype.once = function(e, t) { if ("function" != typeof t) throw new TypeError('"listener" argument must be a function'); return this.on(e, g(this, e, t)), this }, s.prototype.prependOnceListener = function(e, t) { if ("function" != typeof t) throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, g(this, e, t)), this }, s.prototype.removeListener = function(e, t) { var n, o, i, s, a; if ("function" != typeof t) throw new TypeError('"listener" argument must be a function'); if (!(o = this._events)) return this; if (!(n = o[e])) return this; if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = r(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) { for (i = -1, s = n.length - 1; s >= 0; s--)
      if (n[s] === t || n[s].listener === t) { a = n[s].listener, i = s; break } if (i < 0) return this;
     0 === i ? n.shift() : function(e, t) { for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
      e.pop() }(n, i), 1 === n.length && (o[e] = n[0]), o.removeListener && this.emit("removeListener", e, a || t) } return this }, s.prototype.removeAllListeners = function(e) { var t, n, i; if (!(n = this._events)) return this; if (!n.removeListener) return 0 === arguments.length ? (this._events = r(null), this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = r(null) : delete n[e]), this; if (0 === arguments.length) { var s, a = o(n); for (i = 0; i < a.length; ++i) "removeListener" !== (s = a[i]) && this.removeAllListeners(s); return this.removeAllListeners("removeListener"), this._events = r(null), this._eventsCount = 0, this } if ("function" == typeof(t = n[e])) this.removeListener(e, t);
    else if (t)
     for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]); return this }, s.prototype.listeners = function(e) { return m(this, e, !0) }, s.prototype.rawListeners = function(e) { return m(this, e, !1) }, s.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : b.call(e, t) }, s.prototype.listenerCount = b, s.prototype.eventNames = function() { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [] } }, {}], 4: [function(e, t, n) { "use strict"; var r, o, i, s = [e(2), e(7), e(6), e(5), e(8), e(9)],
    a = -1,
    u = [],
    c = !1;

   function f() { r && o && (r = !1, o.length ? u = o.concat(u) : a = -1, u.length && l()) }

   function l() { if (!r) { c = !1, r = !0; for (var e = u.length, t = setTimeout(f); e;) { for (o = u, u = []; o && ++a < e;) o[a].run();
      a = -1, e = u.length } o = null, a = -1, r = !1, clearTimeout(t) } } for (var d = -1, h = s.length; ++d < h;)
    if (s[d] && s[d].test && s[d].test()) { i = s[d].install(l); break }
   function p(e, t) { this.fun = e, this.array = t } p.prototype.run = function() { var e = this.fun,
     t = this.array; switch (t.length) {
     case 0:
      return e();
     case 1:
      return e(t[0]);
     case 2:
      return e(t[0], t[1]);
     case 3:
      return e(t[0], t[1], t[2]);
     default:
      return e.apply(null, t) } }, t.exports = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
     for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    u.push(new p(e, t)), c || r || (c = !0, i()) } }, { 2: 2, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 }], 5: [function(e, t, n) {
   (function(e) {
    (function() { "use strict";
     n.test = function() { return !e.setImmediate && void 0 !== e.MessageChannel }, n.install = function(t) { var n = new e.MessageChannel; return n.port1.onmessage = t,
       function() { n.port2.postMessage(0) } } }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 6: [function(e, t, n) {
   (function(e) {
    (function() { "use strict"; var t = e.MutationObserver || e.WebKitMutationObserver;
     n.test = function() { return t }, n.install = function(n) { var r = 0,
       o = new t(n),
       i = e.document.createTextNode(""); return o.observe(i, { characterData: !0 }),
       function() { i.data = r = ++r % 2 } } }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 7: [function(e, t, n) {
   (function(e) {
    (function() { "use strict";
     n.test = function() { return "function" == typeof e.queueMicrotask }, n.install = function(t) { return function() { e.queueMicrotask(t) } } }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 8: [function(e, t, n) {
   (function(e) {
    (function() { "use strict";
     n.test = function() { return "document" in e && "onreadystatechange" in e.document.createElement("script") }, n.install = function(t) { return function() { var n = e.document.createElement("script"); return n.onreadystatechange = function() { t(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null }, e.document.documentElement.appendChild(n), t } } }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 9: [function(e, t, n) { "use strict";
   n.test = function() { return !0 }, n.install = function(e) { return function() { setTimeout(e, 0) } } }, {}], 10: [function(e, t, n) { "function" == typeof Object.create ? t.exports = function(e, t) { t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })) } : t.exports = function(e, t) { if (t) { e.super_ = t; var n = function() {};
     n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e } } }, {}], 11: [function(e, t, n) { var r, o, i = t.exports = {};

   function s() { throw new Error("setTimeout has not been defined") }

   function a() { throw new Error("clearTimeout has not been defined") }

   function u(e) { if (r === setTimeout) return setTimeout(e, 0); if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0); try { return r(e, 0) } catch (t) { try { return r.call(null, e, 0) } catch (t) { return r.call(this, e, 0) } } }! function() { try { r = "function" == typeof setTimeout ? setTimeout : s } catch (e) { r = s } try { o = "function" == typeof clearTimeout ? clearTimeout : a } catch (e) { o = a } }(); var c, f = [],
    l = !1,
    d = -1;

   function h() { l && c && (l = !1, c.length ? f = c.concat(f) : d = -1, f.length && p()) }

   function p() { if (!l) { var e = u(h);
     l = !0; for (var t = f.length; t;) { for (c = f, f = []; ++d < t;) c && c[d].run();
      d = -1, t = f.length } c = null, l = !1,
      function(e) { if (o === clearTimeout) return clearTimeout(e); if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e); try { o(e) } catch (t) { try { return o.call(null, e) } catch (t) { return o.call(this, e) } } }(e) } }

   function v(e, t) { this.fun = e, this.array = t }

   function y() {} i.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
     for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    f.push(new v(e, t)), 1 !== f.length || l || u(p) }, v.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 } }, {}], 12: [function(e, t, n) {! function(e) { if ("object" == typeof n) t.exports = e();
    else { var r; try { r = window } catch (e) { r = self } r.SparkMD5 = e() } }((function(e) { "use strict"; var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function n(e, t) { var n = e[0],
      r = e[1],
      o = e[2],
      i = e[3];
     r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + t[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + t[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + t[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + t[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + t[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + t[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + t[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + t[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + t[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + t[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + t[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + t[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0, e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = o + e[2] | 0, e[3] = i + e[3] | 0 }

    function r(e) { var t, n = []; for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24); return n }

    function o(e) { var t, n = []; for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24); return n }

    function i(e) { var t, o, i, s, a, u, c = e.length,
      f = [1732584193, -271733879, -1732584194, 271733878]; for (t = 64; t <= c; t += 64) n(f, r(e.substring(t - 64, t))); for (o = (e = e.substring(t - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < o; t += 1) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3); if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55)
      for (n(f, i), t = 0; t < 16; t += 1) i[t] = 0; return s = (s = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), u = parseInt(s[1], 16) || 0, i[14] = a, i[15] = u, n(f, i), f }

    function s(e) { var n, r = ""; for (n = 0; n < 4; n += 1) r += t[e >> 8 * n + 4 & 15] + t[e >> 8 * n & 15]; return r }

    function a(e) { var t; for (t = 0; t < e.length; t += 1) e[t] = s(e[t]); return e.join("") }

    function u(e) { return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e }

    function c(e) { var t, n = [],
      r = e.length; for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16)); return String.fromCharCode.apply(String, n) }

    function f() { this.reset() } return "5d41402abc4b2a76b9719d911017c592" !== a(i("hello")) && function(e, t) { var n = (65535 & e) + (65535 & t); return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n }, "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
     function t(e, t) { return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t) } ArrayBuffer.prototype.slice = function(n, r) { var o, i, s, a, u = this.byteLength,
       c = t(n, u),
       f = u; return r !== e && (f = t(r, u)), c > f ? new ArrayBuffer(0) : (o = f - c, i = new ArrayBuffer(o), s = new Uint8Array(i), a = new Uint8Array(this, c, o), s.set(a), i) } }(), f.prototype.append = function(e) { return this.appendBinary(u(e)), this }, f.prototype.appendBinary = function(e) { this._buff += e, this._length += e.length; var t, o = this._buff.length; for (t = 64; t <= o; t += 64) n(this._hash, r(this._buff.substring(t - 64, t))); return this._buff = this._buff.substring(t - 64), this }, f.prototype.end = function(e) { var t, n, r = this._buff,
      o = r.length,
      i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3); return this._finish(i, o), n = a(this._hash), e && (n = c(n)), this.reset(), n }, f.prototype.reset = function() { return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this }, f.prototype.getState = function() { return { buff: this._buff, length: this._length, hash: this._hash.slice() } }, f.prototype.setState = function(e) { return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this }, f.prototype.destroy = function() { delete this._hash, delete this._buff, delete this._length }, f.prototype._finish = function(e, t) { var r, o, i, s = t; if (e[s >> 2] |= 128 << (s % 4 << 3), s > 55)
      for (n(this._hash, e), s = 0; s < 16; s += 1) e[s] = 0;
     r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), i = parseInt(r[1], 16) || 0, e[14] = o, e[15] = i, n(this._hash, e) }, f.hash = function(e, t) { return f.hashBinary(u(e), t) }, f.hashBinary = function(e, t) { var n = a(i(e)); return t ? c(n) : n }, f.ArrayBuffer = function() { this.reset() }, f.ArrayBuffer.prototype.append = function(e) { var t, r, i, s, a, u = (r = this._buff.buffer, i = e, s = !0, (a = new Uint8Array(r.byteLength + i.byteLength)).set(new Uint8Array(r)), a.set(new Uint8Array(i), r.byteLength), s ? a : a.buffer),
      c = u.length; for (this._length += e.byteLength, t = 64; t <= c; t += 64) n(this._hash, o(u.subarray(t - 64, t))); return this._buff = t - 64 < c ? new Uint8Array(u.buffer.slice(t - 64)) : new Uint8Array(0), this }, f.ArrayBuffer.prototype.end = function(e) { var t, n, r = this._buff,
      o = r.length,
      i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3); return this._finish(i, o), n = a(this._hash), e && (n = c(n)), this.reset(), n }, f.ArrayBuffer.prototype.reset = function() { return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this }, f.ArrayBuffer.prototype.getState = function() { var e, t = f.prototype.getState.call(this); return t.buff = (e = t.buff, String.fromCharCode.apply(null, new Uint8Array(e))), t }, f.ArrayBuffer.prototype.setState = function(e) { return e.buff = function(e, t) { var n, r = e.length,
       o = new ArrayBuffer(r),
       i = new Uint8Array(o); for (n = 0; n < r; n += 1) i[n] = e.charCodeAt(n); return t ? i : o }(e.buff, !0), f.prototype.setState.call(this, e) }, f.ArrayBuffer.prototype.destroy = f.prototype.destroy, f.ArrayBuffer.prototype._finish = f.prototype._finish, f.ArrayBuffer.hash = function(e, t) { var r = a(function(e) { var t, r, i, s, a, u, c = e.length,
       f = [1732584193, -271733879, -1732584194, 271733878]; for (t = 64; t <= c; t += 64) n(f, o(e.subarray(t - 64, t))); for (r = (e = t - 64 < c ? e.subarray(t - 64) : new Uint8Array(0)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < r; t += 1) i[t >> 2] |= e[t] << (t % 4 << 3); if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55)
       for (n(f, i), t = 0; t < 16; t += 1) i[t] = 0; return s = (s = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), u = parseInt(s[1], 16) || 0, i[14] = a, i[15] = u, n(f, i), f }(new Uint8Array(e))); return t ? c(r) : r }, f })) }, {}], 13: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), Object.defineProperty(n, "v1", { enumerable: !0, get: function() { return r.default } }), Object.defineProperty(n, "v3", { enumerable: !0, get: function() { return o.default } }), Object.defineProperty(n, "v4", { enumerable: !0, get: function() { return i.default } }), Object.defineProperty(n, "v5", { enumerable: !0, get: function() { return s.default } }), Object.defineProperty(n, "NIL", { enumerable: !0, get: function() { return a.default } }), Object.defineProperty(n, "version", { enumerable: !0, get: function() { return u.default } }), Object.defineProperty(n, "validate", { enumerable: !0, get: function() { return c.default } }), Object.defineProperty(n, "stringify", { enumerable: !0, get: function() { return f.default } }), Object.defineProperty(n, "parse", { enumerable: !0, get: function() { return l.default } }); var r = d(e(21)),
    o = d(e(22)),
    i = d(e(24)),
    s = d(e(25)),
    a = d(e(15)),
    u = d(e(27)),
    c = d(e(26)),
    f = d(e(20)),
    l = d(e(16));

   function d(e) { return e && e.__esModule ? e : { default: e } } }, { 15: 15, 16: 16, 20: 20, 21: 21, 22: 22, 24: 24, 25: 25, 26: 26, 27: 27 }], 14: [function(e, t, n) { "use strict";

   function r(e) { return 14 + (e + 64 >>> 9 << 4) + 1 }

   function o(e, t) { const n = (65535 & e) + (65535 & t); return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n }

   function i(e, t, n, r, i, s) { return o((a = o(o(t, e), o(r, s))) << (u = i) | a >>> 32 - u, n); var a, u }

   function s(e, t, n, r, o, s, a) { return i(t & n | ~t & r, e, t, o, s, a) }

   function a(e, t, n, r, o, s, a) { return i(t & r | n & ~r, e, t, o, s, a) }

   function u(e, t, n, r, o, s, a) { return i(t ^ n ^ r, e, t, o, s, a) }

   function c(e, t, n, r, o, s, a) { return i(n ^ (t | ~r), e, t, o, s, a) } Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var f = function(e) { if ("string" == typeof e) { const t = unescape(encodeURIComponent(e));
     e = new Uint8Array(t.length); for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n) } return function(e) { const t = [],
      n = 32 * e.length; for (let r = 0; r < n; r += 8) { const n = e[r >> 5] >>> r % 32 & 255,
       o = parseInt("0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n), 16);
      t.push(o) } return t }(function(e, t) { e[t >> 5] |= 128 << t % 32, e[r(t) - 1] = t; let n = 1732584193,
      i = -271733879,
      f = -1732584194,
      l = 271733878; for (let t = 0; t < e.length; t += 16) { const r = n,
       d = i,
       h = f,
       p = l;
      n = s(n, i, f, l, e[t], 7, -680876936), l = s(l, n, i, f, e[t + 1], 12, -389564586), f = s(f, l, n, i, e[t + 2], 17, 606105819), i = s(i, f, l, n, e[t + 3], 22, -1044525330), n = s(n, i, f, l, e[t + 4], 7, -176418897), l = s(l, n, i, f, e[t + 5], 12, 1200080426), f = s(f, l, n, i, e[t + 6], 17, -1473231341), i = s(i, f, l, n, e[t + 7], 22, -45705983), n = s(n, i, f, l, e[t + 8], 7, 1770035416), l = s(l, n, i, f, e[t + 9], 12, -1958414417), f = s(f, l, n, i, e[t + 10], 17, -42063), i = s(i, f, l, n, e[t + 11], 22, -1990404162), n = s(n, i, f, l, e[t + 12], 7, 1804603682), l = s(l, n, i, f, e[t + 13], 12, -40341101), f = s(f, l, n, i, e[t + 14], 17, -1502002290), i = s(i, f, l, n, e[t + 15], 22, 1236535329), n = a(n, i, f, l, e[t + 1], 5, -165796510), l = a(l, n, i, f, e[t + 6], 9, -1069501632), f = a(f, l, n, i, e[t + 11], 14, 643717713), i = a(i, f, l, n, e[t], 20, -373897302), n = a(n, i, f, l, e[t + 5], 5, -701558691), l = a(l, n, i, f, e[t + 10], 9, 38016083), f = a(f, l, n, i, e[t + 15], 14, -660478335), i = a(i, f, l, n, e[t + 4], 20, -405537848), n = a(n, i, f, l, e[t + 9], 5, 568446438), l = a(l, n, i, f, e[t + 14], 9, -1019803690), f = a(f, l, n, i, e[t + 3], 14, -187363961), i = a(i, f, l, n, e[t + 8], 20, 1163531501), n = a(n, i, f, l, e[t + 13], 5, -1444681467), l = a(l, n, i, f, e[t + 2], 9, -51403784), f = a(f, l, n, i, e[t + 7], 14, 1735328473), i = a(i, f, l, n, e[t + 12], 20, -1926607734), n = u(n, i, f, l, e[t + 5], 4, -378558), l = u(l, n, i, f, e[t + 8], 11, -2022574463), f = u(f, l, n, i, e[t + 11], 16, 1839030562), i = u(i, f, l, n, e[t + 14], 23, -35309556), n = u(n, i, f, l, e[t + 1], 4, -1530992060), l = u(l, n, i, f, e[t + 4], 11, 1272893353), f = u(f, l, n, i, e[t + 7], 16, -155497632), i = u(i, f, l, n, e[t + 10], 23, -1094730640), n = u(n, i, f, l, e[t + 13], 4, 681279174), l = u(l, n, i, f, e[t], 11, -358537222), f = u(f, l, n, i, e[t + 3], 16, -722521979), i = u(i, f, l, n, e[t + 6], 23, 76029189), n = u(n, i, f, l, e[t + 9], 4, -640364487), l = u(l, n, i, f, e[t + 12], 11, -421815835), f = u(f, l, n, i, e[t + 15], 16, 530742520), i = u(i, f, l, n, e[t + 2], 23, -995338651), n = c(n, i, f, l, e[t], 6, -198630844), l = c(l, n, i, f, e[t + 7], 10, 1126891415), f = c(f, l, n, i, e[t + 14], 15, -1416354905), i = c(i, f, l, n, e[t + 5], 21, -57434055), n = c(n, i, f, l, e[t + 12], 6, 1700485571), l = c(l, n, i, f, e[t + 3], 10, -1894986606), f = c(f, l, n, i, e[t + 10], 15, -1051523), i = c(i, f, l, n, e[t + 1], 21, -2054922799), n = c(n, i, f, l, e[t + 8], 6, 1873313359), l = c(l, n, i, f, e[t + 15], 10, -30611744), f = c(f, l, n, i, e[t + 6], 15, -1560198380), i = c(i, f, l, n, e[t + 13], 21, 1309151649), n = c(n, i, f, l, e[t + 4], 6, -145523070), l = c(l, n, i, f, e[t + 11], 10, -1120210379), f = c(f, l, n, i, e[t + 2], 15, 718787259), i = c(i, f, l, n, e[t + 9], 21, -343485551), n = o(n, r), i = o(i, d), f = o(f, h), l = o(l, p) } return [n, i, f, l] }(function(e) { if (0 === e.length) return []; const t = 8 * e.length,
      n = new Uint32Array(r(t)); for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32; return n }(e), 8 * e.length)) };
   n.default = f }, {}], 15: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
   n.default = "00000000-0000-0000-0000-000000000000" }, {}], 16: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r, o = (r = e(26)) && r.__esModule ? r : { default: r }; var i = function(e) { if (!(0, o.default)(e)) throw TypeError("Invalid UUID"); let t; const n = new Uint8Array(16); return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n };
   n.default = i }, { 26: 26 }], 17: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
   n.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i }, {}], 18: [function(e, t, n) { "use strict"; let r;
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = function() { if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return r(o) }; const o = new Uint8Array(16) }, {}], 19: [function(e, t, n) { "use strict";

   function r(e, t, n, r) { switch (e) {
     case 0:
      return t & n ^ ~t & r;
     case 1:
      return t ^ n ^ r;
     case 2:
      return t & n ^ t & r ^ n & r;
     case 3:
      return t ^ n ^ r } }

   function o(e, t) { return e << t | e >>> 32 - t } Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var i = function(e) { const t = [1518500249, 1859775393, 2400959708, 3395469782],
     n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]; if ("string" == typeof e) { const t = unescape(encodeURIComponent(e));
     e = []; for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n)) } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128); const i = e.length / 4 + 2,
     s = Math.ceil(i / 16),
     a = new Array(s); for (let t = 0; t < s; ++t) { const n = new Uint32Array(16); for (let r = 0; r < 16; ++r) n[r] = e[64 * t + 4 * r] << 24 | e[64 * t + 4 * r + 1] << 16 | e[64 * t + 4 * r + 2] << 8 | e[64 * t + 4 * r + 3];
     a[t] = n } a[s - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = 8 * (e.length - 1) & 4294967295; for (let e = 0; e < s; ++e) { const i = new Uint32Array(80); for (let t = 0; t < 16; ++t) i[t] = a[e][t]; for (let e = 16; e < 80; ++e) i[e] = o(i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16], 1); let s = n[0],
      u = n[1],
      c = n[2],
      f = n[3],
      l = n[4]; for (let e = 0; e < 80; ++e) { const n = Math.floor(e / 20),
       a = o(s, 5) + r(n, u, c, f) + l + t[n] + i[e] >>> 0;
      l = f, f = c, c = o(u, 30) >>> 0, u = s, s = a } n[0] = n[0] + s >>> 0, n[1] = n[1] + u >>> 0, n[2] = n[2] + c >>> 0, n[3] = n[3] + f >>> 0, n[4] = n[4] + l >>> 0 } return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]] };
   n.default = i }, {}], 20: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r, o = (r = e(26)) && r.__esModule ? r : { default: r }; const i = []; for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).substr(1)); var s = function(e, t = 0) { const n = (i[e[t + 0]] + i[e[t + 1]] + i[e[t + 2]] + i[e[t + 3]] + "-" + i[e[t + 4]] + i[e[t + 5]] + "-" + i[e[t + 6]] + i[e[t + 7]] + "-" + i[e[t + 8]] + i[e[t + 9]] + "-" + i[e[t + 10]] + i[e[t + 11]] + i[e[t + 12]] + i[e[t + 13]] + i[e[t + 14]] + i[e[t + 15]]).toLowerCase(); if (!(0, o.default)(n)) throw TypeError("Stringified UUID is invalid"); return n };
   n.default = s }, { 26: 26 }], 21: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r = i(e(18)),
    o = i(e(20));

   function i(e) { return e && e.__esModule ? e : { default: e } } let s, a, u = 0,
    c = 0; var f = function(e, t, n) { let i = t && n || 0; const f = t || new Array(16); let l = (e = e || {}).node || s,
     d = void 0 !== e.clockseq ? e.clockseq : a; if (null == l || null == d) { const t = e.random || (e.rng || r.default)();
     null == l && (l = s = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == d && (d = a = 16383 & (t[6] << 8 | t[7])) } let h = void 0 !== e.msecs ? e.msecs : Date.now(),
     p = void 0 !== e.nsecs ? e.nsecs : c + 1; const v = h - u + (p - c) / 1e4; if (v < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (v < 0 || h > u) && void 0 === e.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    u = h, c = p, a = d, h += 122192928e5; const y = (1e4 * (268435455 & h) + p) % 4294967296;
    f[i++] = y >>> 24 & 255, f[i++] = y >>> 16 & 255, f[i++] = y >>> 8 & 255, f[i++] = 255 & y; const _ = h / 4294967296 * 1e4 & 268435455;
    f[i++] = _ >>> 8 & 255, f[i++] = 255 & _, f[i++] = _ >>> 24 & 15 | 16, f[i++] = _ >>> 16 & 255, f[i++] = d >>> 8 | 128, f[i++] = 255 & d; for (let e = 0; e < 6; ++e) f[i + e] = l[e]; return t || (0, o.default)(f) };
   n.default = f }, { 18: 18, 20: 20 }], 22: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r = i(e(23)),
    o = i(e(14));

   function i(e) { return e && e.__esModule ? e : { default: e } } var s = (0, r.default)("v3", 48, o.default);
   n.default = s }, { 14: 14, 23: 23 }], 23: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = function(e, t, n) {
    function i(e, i, s, a) { if ("string" == typeof e && (e = function(e) { e = unescape(encodeURIComponent(e)); const t = []; for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n)); return t }(e)), "string" == typeof i && (i = (0, o.default)(i)), 16 !== i.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)"); let u = new Uint8Array(16 + e.length); if (u.set(i), u.set(e, i.length), u = n(u), u[6] = 15 & u[6] | t, u[8] = 63 & u[8] | 128, s) { a = a || 0; for (let e = 0; e < 16; ++e) s[a + e] = u[e]; return s } return (0, r.default)(u) } try { i.name = e } catch (e) {} return i.DNS = s, i.URL = a, i }, n.URL = n.DNS = void 0; var r = i(e(20)),
    o = i(e(16));

   function i(e) { return e && e.__esModule ? e : { default: e } } const s = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
   n.DNS = s; const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
   n.URL = a }, { 16: 16, 20: 20 }], 24: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r = i(e(18)),
    o = i(e(20));

   function i(e) { return e && e.__esModule ? e : { default: e } } var s = function(e, t, n) { const i = (e = e || {}).random || (e.rng || r.default)(); if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) { n = n || 0; for (let e = 0; e < 16; ++e) t[n + e] = i[e]; return t } return (0, o.default)(i) };
   n.default = s }, { 18: 18, 20: 20 }], 25: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r = i(e(23)),
    o = i(e(19));

   function i(e) { return e && e.__esModule ? e : { default: e } } var s = (0, r.default)("v5", 80, o.default);
   n.default = s }, { 19: 19, 23: 23 }], 26: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r, o = (r = e(17)) && r.__esModule ? r : { default: r }; var i = function(e) { return "string" == typeof e && o.default.test(e) };
   n.default = i }, { 17: 17 }], 27: [function(e, t, n) { "use strict";
   Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0; var r, o = (r = e(26)) && r.__esModule ? r : { default: r }; var i = function(e) { if (!(0, o.default)(e)) throw TypeError("Invalid UUID"); return parseInt(e.substr(14, 1), 16) };
   n.default = i }, { 26: 26 }], 28: [function(e, t, n) { "use strict";

   function r(e, t, n) { var r = n[n.length - 1];
    e === r.element && (n.pop(), r = n[n.length - 1]); var o = r.element,
     i = r.index; if (Array.isArray(o)) o.push(e);
    else if (i === t.length - 2) { o[t.pop()] = e } else t.push(e) } n.stringify = function(e) { var t = [];
    t.push({ obj: e }); for (var n, r, o, i, s, a, u, c, f, l, d = ""; n = t.pop();)
     if (r = n.obj, d += n.prefix || "", o = n.val || "") d += o;
     else if ("object" != typeof r) d += void 0 === r ? null : JSON.stringify(r);
    else if (null === r) d += "null";
    else if (Array.isArray(r)) { for (t.push({ val: "]" }), i = r.length - 1; i >= 0; i--) s = 0 === i ? "" : ",", t.push({ obj: r[i], prefix: s });
     t.push({ val: "[" }) } else { for (u in a = [], r) r.hasOwnProperty(u) && a.push(u); for (t.push({ val: "}" }), i = a.length - 1; i >= 0; i--) f = r[c = a[i]], l = i > 0 ? "," : "", l += JSON.stringify(c) + ":", t.push({ obj: f, prefix: l });
     t.push({ val: "{" }) } return d }, n.parse = function(e) { for (var t, n, o, i, s, a, u, c, f, l = [], d = [], h = 0;;)
     if ("}" !== (t = e[h++]) && "]" !== t && void 0 !== t) switch (t) {
      case " ":
      case "\t":
      case "\n":
      case ":":
      case ",":
       break;
      case "n":
       h += 3, r(null, l, d); break;
      case "t":
       h += 3, r(!0, l, d); break;
      case "f":
       h += 4, r(!1, l, d); break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "-":
       for (n = "", h--;;) { if (o = e[h++], !/[\d\.\-e\+]/.test(o)) { h--; break } n += o } r(parseFloat(n), l, d); break;
      case '"':
       for (i = "", s = void 0, a = 0;
        '"' !== (u = e[h++]) || "\\" === s && a % 2 == 1;) i += u, "\\" === (s = u) ? a++ : a = 0;
       r(JSON.parse('"' + i + '"'), l, d); break;
      case "[":
       c = { element: [], index: l.length }, l.push(c.element), d.push(c); break;
      case "{":
       f = { element: {}, index: l.length }, l.push(f.element), d.push(f); break;
      default:
       throw new Error("unexpectedly reached end of input: " + t) } else { if (1 === l.length) return l.pop();
      r(l.pop(), l, d) } } }, {}], 29: [function(e, t, n) {
   (function(n) {
    (function() { "use strict";

     function r(e) { return e && "object" == typeof e && "default" in e ? e.default : e } var o, i, s = r(e(4)),
      a = e(13),
      u = r(e(12)),
      c = r(e(28)),
      f = r(e(1)),
      l = r(e(10)),
      d = r(e(3));

     function h(e) { return "$" + e }

     function p(e) { return e.substring(1) }

     function v() { this._store = {} }

     function y(e) { if (this._store = new v, e && Array.isArray(e))
       for (var t = 0, n = e.length; t < n; t++) this.add(e[t]) }

     function _(e) { if (e instanceof ArrayBuffer) return function(e) { if ("function" == typeof e.slice) return e.slice(0); var t = new ArrayBuffer(e.byteLength),
        n = new Uint8Array(t),
        r = new Uint8Array(e); return n.set(r), t }(e); var t = e.size,
       n = e.type; return "function" == typeof e.slice ? e.slice(0, t, n) : e.webkitSlice(0, t, n) } v.prototype.get = function(e) { var t = h(e); return this._store[t] }, v.prototype.set = function(e, t) { var n = h(e); return this._store[n] = t, !0 }, v.prototype.has = function(e) { return h(e) in this._store }, v.prototype.keys = function() { return Object.keys(this._store).map(e => p(e)) }, v.prototype.delete = function(e) { var t = h(e),
       n = t in this._store; return delete this._store[t], n }, v.prototype.forEach = function(e) { for (var t = Object.keys(this._store), n = 0, r = t.length; n < r; n++) { var o = t[n];
       e(this._store[o], o = p(o)) } }, Object.defineProperty(v.prototype, "size", { get: function() { return Object.keys(this._store).length } }), y.prototype.add = function(e) { return this._store.set(e, !0) }, y.prototype.has = function(e) { return this._store.has(e) }, y.prototype.forEach = function(e) { this._store.forEach((function(t, n) { e(n) })) }, Object.defineProperty(y.prototype, "size", { get: function() { return this._store.size } }), ! function() { if ("undefined" == typeof Symbol || "undefined" == typeof Map || "undefined" == typeof Set) return !1; var e = Object.getOwnPropertyDescriptor(Map, Symbol.species); return e && "get" in e && Map[Symbol.species] === Map }() ? (o = y, i = v) : (o = Set, i = Map); var g = Function.prototype.toString,
      m = g.call(Object);

     function b(e) { var t, n, r; if (!e || "object" != typeof e) return e; if (Array.isArray(e)) { for (t = [], n = 0, r = e.length; n < r; n++) t[n] = b(e[n]); return t } if (e instanceof Date && isFinite(e)) return e.toISOString(); if (function(e) { return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer || "undefined" != typeof Blob && e instanceof Blob }(e)) return _(e); if (! function(e) { var t = Object.getPrototypeOf(e); if (null === t) return !0; var n = t.constructor; return "function" == typeof n && n instanceof n && g.call(n) == m }(e)) return e; for (n in t = {}, e)
       if (Object.prototype.hasOwnProperty.call(e, n)) { var o = b(e[n]);
        void 0 !== o && (t[n] = o) } return t }

     function w(e) { var t = !1; return f((function(n) { if (t) throw new Error("once called more than once");
       t = !0, e.apply(this, n) })) }

     function k(e) { return f((function(t) { t = b(t); var n = this,
        r = "function" == typeof t[t.length - 1] && t.pop(),
        o = new Promise((function(r, o) { var i; try { var s = w((function(e, t) { e ? o(e) : r(t) }));
          t.push(s), (i = e.apply(n, t)) && "function" == typeof i.then && r(i) } catch (e) { o(e) } })); return r && o.then((function(e) { r(null, e) }), r), o })) }

     function j(e, t) { return k(f((function(n) { if (this._closed) return Promise.reject(new Error("database is closed")); if (this._destroyed) return Promise.reject(new Error("database is destroyed")); var r = this; return function(e, t, n) { if (e.constructor.listeners("debug").length) { for (var r = ["api", e.name, t], o = 0; o < n.length - 1; o++) r.push(n[o]);
         e.constructor.emit("debug", r); var i = n[n.length - 1];
         n[n.length - 1] = function(n, r) { var o = ["api", e.name, t];
          o = o.concat(n ? ["error", n] : ["success", r]), e.constructor.emit("debug", o), i(n, r) } } }(r, e, n), this.taskqueue.isReady ? t.apply(this, n) : new Promise((function(t, o) { r.taskqueue.addTask((function(i) { i ? o(i) : t(r[e].apply(r, n)) })) })) }))) }

     function O(e, t) { for (var n = {}, r = 0, o = t.length; r < o; r++) { var i = t[r];
       i in e && (n[i] = e[i]) } return n } var q;

     function A(e) { return e }

     function S(e) { return [{ ok: e }] }

     function x(e, t, n) { var r = t.docs,
       o = new i;
      r.forEach((function(e) { o.has(e.id) ? o.get(e.id).push(e) : o.set(e.id, [e]) })); var s = o.size,
       a = 0,
       u = new Array(s);

      function c() { var e;++a === s && (e = [], u.forEach((function(t) { t.docs.forEach((function(n) { e.push({ id: t.id, docs: [n] }) })) })), n(null, { results: e })) } var f = [];
      o.forEach((function(e, t) { f.push(t) })); var l = 0;

      function d() { if (!(l >= f.length)) { var n = Math.min(l + 6, f.length),
         r = f.slice(l, n);! function(n, r) { n.forEach((function(n, i) { var s = r + i,
           a = o.get(n),
           f = O(a[0], ["atts_since", "attachments"]);
          f.open_revs = a.map((function(e) { return e.rev })), f.open_revs = f.open_revs.filter(A); var l = A;
          0 === f.open_revs.length && (delete f.open_revs, l = S), ["revs", "attachments", "binary", "ajax", "latest"].forEach((function(e) { e in t && (f[e] = t[e]) })), e.get(n, f, (function(e, t) { var r, o, i;
           r = e ? [{ error: e }] : l(t), o = n, i = r, u[s] = { id: o, docs: i }, c(), d() })) })) }(r, l), l += r.length } } d() } try { localStorage.setItem("_pouch_check_localstorage", 1), q = !!localStorage.getItem("_pouch_check_localstorage") } catch (e) { q = !1 }

     function E() { return q }

     function P() { d.call(this), this._listeners = {},
       function(e) { E() && addEventListener("storage", (function(t) { e.emit(t.key) })) }(this) }

     function C(e) { if ("undefined" != typeof console && "function" == typeof console[e]) { var t = Array.prototype.slice.call(arguments, 1);
       console[e].apply(console, t) } }

     function L(e) { var t = 0; return e || (t = 2e3),
       function(e, t) { return e = parseInt(e, 10) || 0, (t = parseInt(t, 10)) != t || t <= e ? t = (e || 1) << 1 : t += 1, t > 6e5 && (e = 3e5, t = 6e5), ~~((t - e) * Math.random() + e) }(e, t) }

     function $(e, t) { C("info", "The above " + e + " is totally normal. " + t) } l(P, d), P.prototype.addListener = function(e, t, n, r) { if (!this._listeners[t]) { var o = this,
        i = !1;
       this._listeners[t] = a, this.on(e, a) }

      function a() { if (o._listeners[t])
        if (i) i = "waiting";
        else { i = !0; var e = O(r, ["style", "include_docs", "attachments", "conflicts", "filter", "doc_ids", "view", "since", "query_params", "binary", "return_docs"]);
         n.changes(e).on("change", (function(e) { e.seq > r.since && !r.cancelled && (r.since = e.seq, r.onChange(e)) })).on("complete", (function() { "waiting" === i && s(a), i = !1 })).on("error", (function() { i = !1 })) } } }, P.prototype.removeListener = function(e, t) { t in this._listeners && (d.prototype.removeListener.call(this, e, this._listeners[t]), delete this._listeners[t]) }, P.prototype.notifyLocalWindows = function(e) { E() && (localStorage[e] = "a" === localStorage[e] ? "b" : "a") }, P.prototype.notify = function(e) { this.emit(e), this.notifyLocalWindows(e) }; var D = "function" == typeof Object.assign ? Object.assign : function(e) { for (var t = Object(e), n = 1; n < arguments.length; n++) { var r = arguments[n]; if (null != r)
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]) } return t };

     function I(e, t, n) { Error.call(this, n), this.status = e, this.name = t, this.message = n, this.error = !0 } l(I, Error), I.prototype.toString = function() { return JSON.stringify({ status: this.status, name: this.name, message: this.message, reason: this.reason }) };
     new I(401, "unauthorized", "Name or password is incorrect."); var B = new I(400, "bad_request", "Missing JSON list of 'docs'"),
      T = new I(404, "not_found", "missing"),
      M = new I(409, "conflict", "Document update conflict"),
      R = new I(400, "bad_request", "_id field must contain a string"),
      N = new I(412, "missing_id", "_id is required for puts"),
      U = new I(400, "bad_request", "Only reserved document ids may start with underscore."),
      F = (new I(412, "precondition_failed", "Database not open"), new I(500, "unknown_error", "Database encountered an unknown error")),
      K = new I(500, "badarg", "Some query argument is invalid"),
      J = (new I(400, "invalid_request", "Request was invalid"), new I(400, "query_parse_error", "Some query parameter is invalid")),
      z = new I(500, "doc_validation", "Bad special document member"),
      V = new I(400, "bad_request", "Something wrong with the request"),
      G = new I(400, "bad_request", "Document must be a JSON object"),
      Q = (new I(404, "not_found", "Database not found"), new I(500, "indexed_db_went_bad", "unknown")),
      W = (new I(500, "web_sql_went_bad", "unknown"), new I(500, "levelDB_went_went_bad", "unknown"), new I(403, "forbidden", "Forbidden by design doc validate_doc_update function"), new I(400, "bad_request", "Invalid rev format")),
      Y = (new I(412, "file_exists", "The database could not be created, the file already exists."), new I(412, "missing_stub", "A pre-existing attachment stub wasn't found"));
     new I(413, "invalid_url", "Provided URL is invalid");

     function H(e, t) {
      function n(t) { for (var n = Object.getOwnPropertyNames(e), r = 0, o = n.length; r < o; r++) "function" != typeof e[n[r]] && (this[n[r]] = e[n[r]]);
       void 0 === this.stack && (this.stack = (new Error).stack), void 0 !== t && (this.reason = t) } return n.prototype = I.prototype, new n(t) }

     function X(e) { if ("object" != typeof e) { var t = e;
       (e = F).data = t } return "error" in e && "conflict" === e.error && (e.name = "conflict", e.status = 409), "name" in e || (e.name = e.error || "unknown"), "status" in e || (e.status = 500), "message" in e || (e.message = e.message || e.reason), "stack" in e || (e.stack = (new Error).stack), e }

     function Z(e) { var t = {},
       n = e.filter && "function" == typeof e.filter; return t.query = e.query_params,
       function(r) { r.doc || (r.doc = {}); var o = n && function(e, t, n) { try { return !e(t, n) } catch (e) { var r = "Filter function threw: " + e.toString(); return H(V, r) } }(e.filter, r.doc, t); if ("object" == typeof o) return o; if (o) return !1; if (e.include_docs) { if (!e.attachments)
          for (var i in r.doc._attachments) Object.prototype.hasOwnProperty.call(r.doc._attachments, i) && (r.doc._attachments[i].stub = !0) } else delete r.doc; return !0 } }

     function ee(e) { for (var t = [], n = 0, r = e.length; n < r; n++) t = t.concat(e[n]); return t }

     function te(e) { var t; if (e ? "string" != typeof e ? t = H(R) : /^_/.test(e) && !/^_(design|local)/.test(e) && (t = H(U)) : t = H(N), t) throw t }

     function ne(e) { return "boolean" == typeof e._remote ? e._remote : "function" == typeof e.type && (C("warn", "db.type() is deprecated and will be removed in a future version of PouchDB"), "http" === e.type()) }

     function re(e) { if (!e) return null; var t = e.split("/"); return 2 === t.length ? t : 1 === t.length ? [e, e] : null }

     function oe(e) { var t = re(e); return t ? t.join("/") : null } var ie = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
      se = /(?:^|&)([^&=]*)=?([^&]*)/g,
      ae = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

     function ue(e) { for (var t = ae.exec(e), n = {}, r = 14; r--;) { var o = ie[r],
        i = t[r] || "",
        s = -1 !== ["user", "password"].indexOf(o);
       n[o] = s ? decodeURIComponent(i) : i } return n.queryKey = {}, n[ie[12]].replace(se, (function(e, t, r) { t && (n.queryKey[t] = r) })), n }

     function ce(e, t) { var n = [],
       r = []; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n.push(o), r.push(t[o])); return n.push(e), Function.apply(null, n).apply(null, r) }

     function fe(e, t, n) { return e.get(t).catch((function(e) { if (404 !== e.status) throw e; return {} })).then((function(r) { var o = r._rev,
        i = n(r); return i ? (i._id = t, i._rev = o, function(e, t, n) { return e.put(t).then((function(e) { return { updated: !0, rev: e.rev } }), (function(r) { if (409 !== r.status) throw r; return fe(e, t._id, n) })) }(e, i, n)) : { updated: !1, rev: o } })) } var le = function(e) { return atob(e) },
      de = function(e) { return btoa(e) };

     function he(e, t) { e = e || [], t = t || {}; try { return new Blob(e, t) } catch (o) { if ("TypeError" !== o.name) throw o; for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]); return n.getBlob(t.type) } }

     function pe(e) { for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o); return n }

     function ve(e, t) { return he([pe(e)], { type: t }) }

     function ye(e, t) { return ve(le(e), t) }

     function _e(e, t) { var n = new FileReader,
       r = "function" == typeof n.readAsBinaryString;
      n.onloadend = function(e) { var n = e.target.result || ""; if (r) return t(n);
       t(function(e) { for (var t = "", n = new Uint8Array(e), r = n.byteLength, o = 0; o < r; o++) t += String.fromCharCode(n[o]); return t }(n)) }, r ? n.readAsBinaryString(e) : n.readAsArrayBuffer(e) }

     function ge(e, t) { _e(e, (function(e) { t(e) })) }

     function me(e, t) { ge(e, (function(e) { t(de(e)) })) } var be = self.setImmediate || self.setTimeout;

     function we(e, t, n, r, o) {
      (n > 0 || r < t.size) && (t = function(e, t, n) { return e.webkitSlice ? e.webkitSlice(t, n) : e.slice(t, n) }(t, n, r)),
      function(e, t) { var n = new FileReader;
       n.onloadend = function(e) { var n = e.target.result || new ArrayBuffer(0);
        t(n) }, n.readAsArrayBuffer(e) }(t, (function(t) { e.append(t), o() })) }

     function ke(e, t, n, r, o) {
      (n > 0 || r < t.length) && (t = t.substring(n, r)), e.appendBinary(t), o() }

     function je(e, t) { var n = "string" == typeof e,
       r = n ? e.length : e.size,
       o = Math.min(32768, r),
       i = Math.ceil(r / o),
       s = 0,
       a = n ? new u : new u.ArrayBuffer,
       c = n ? ke : we;

      function f() { be(d) }

      function l() { var e = function(e) { return de(e) }(a.end(!0));
       t(e), a.destroy() }

      function d() { var t = s * o,
        n = t + o;
       s++, c(a, e, t, n, s < i ? f : l) } d() }

     function Oe(e) { return u.hash(e) }

     function qe(e, t) { if (!t) return a.v4().replace(/-/g, "").toLowerCase(); var n = D({}, e); return delete n._rev_tree, Oe(JSON.stringify(n)) } var Ae = a.v4;

     function Se(e) { for (var t, n, r, o, i = e.rev_tree.slice(); o = i.pop();) { var s = o.ids,
        a = s[2],
        u = o.pos; if (a.length)
        for (var c = 0, f = a.length; c < f; c++) i.push({ pos: u + 1, ids: a[c] });
       else { var l = !!s[1].deleted,
         d = s[0];
        t && !(r !== l ? r : n !== u ? n < u : t < d) || (t = d, n = u, r = l) } } return n + "-" + t }

     function xe(e, t) { for (var n, r = e.slice(); n = r.pop();)
       for (var o = n.pos, i = n.ids, s = i[2], a = t(0 === s.length, o, i[0], n.ctx, i[1]), u = 0, c = s.length; u < c; u++) r.push({ pos: o + 1, ids: s[u], ctx: a }) }

     function Ee(e, t) { return e.pos - t.pos }

     function Pe(e) { var t = [];
      xe(e, (function(e, n, r, o, i) { e && t.push({ rev: n + "-" + r, pos: n, opts: i }) })), t.sort(Ee).reverse(); for (var n = 0, r = t.length; n < r; n++) delete t[n].pos; return t }

     function Ce(e) { for (var t = Se(e), n = Pe(e.rev_tree), r = [], o = 0, i = n.length; o < i; o++) { var s = n[o];
       s.rev === t || s.opts.deleted || r.push(s.rev) } return r }

     function Le(e) { for (var t, n = [], r = e.slice(); t = r.pop();) { var o = t.pos,
        i = t.ids,
        s = i[0],
        a = i[1],
        u = i[2],
        c = 0 === u.length,
        f = t.history ? t.history.slice() : [];
       f.push({ id: s, opts: a }), c && n.push({ pos: o + 1 - f.length, ids: f }); for (var l = 0, d = u.length; l < d; l++) r.push({ pos: o + 1, ids: u[l], history: f }) } return n.reverse() }

     function $e(e, t) { return e.pos - t.pos }

     function De(e, t, n) { var r = function(e, t, n) { for (var r, o = 0, i = e.length; o < i;) n(e[r = o + i >>> 1], t) < 0 ? o = r + 1 : i = r; return o }(e, t, n);
      e.splice(r, 0, t) }

     function Ie(e, t) { for (var n, r, o = t, i = e.length; o < i; o++) { var s = e[o],
        a = [s.id, s.opts, []];
       r ? (r[2].push(a), r = a) : n = r = a } return n }

     function Be(e, t) { return e[0] < t[0] ? -1 : 1 }

     function Te(e, t) { for (var n = [{ tree1: e, tree2: t }], r = !1; n.length > 0;) { var o = n.pop(),
        i = o.tree1,
        s = o.tree2;
       (i[1].status || s[1].status) && (i[1].status = "available" === i[1].status || "available" === s[1].status ? "available" : "missing"); for (var a = 0; a < s[2].length; a++)
        if (i[2][0]) { for (var u = !1, c = 0; c < i[2].length; c++) i[2][c][0] === s[2][a][0] && (n.push({ tree1: i[2][c], tree2: s[2][a] }), u = !0);
         u || (r = "new_branch", De(i[2], s[2][a], Be)) } else r = "new_leaf", i[2][0] = s[2][a] } return { conflicts: r, tree: e } }

     function Me(e, t, n) { var r, o = [],
       i = !1,
       s = !1; if (!e.length) return { tree: [t], conflicts: "new_leaf" }; for (var a = 0, u = e.length; a < u; a++) { var c = e[a]; if (c.pos === t.pos && c.ids[0] === t.ids[0]) r = Te(c.ids, t.ids), o.push({ pos: c.pos, ids: r.tree }), i = i || r.conflicts, s = !0;
       else if (!0 !== n) { var f = c.pos < t.pos ? c : t,
         l = c.pos < t.pos ? t : c,
         d = l.pos - f.pos,
         h = [],
         p = []; for (p.push({ ids: f.ids, diff: d, parent: null, parentIdx: null }); p.length > 0;) { var v = p.pop(); if (0 !== v.diff)
          for (var y = v.ids[2], _ = 0, g = y.length; _ < g; _++) p.push({ ids: y[_], diff: v.diff - 1, parent: v.ids, parentIdx: _ });
         else v.ids[0] === l.ids[0] && h.push(v) } var m = h[0];
        m ? (r = Te(m.ids, l.ids), m.parent[2][m.parentIdx] = r.tree, o.push({ pos: f.pos, ids: f.ids }), i = i || r.conflicts, s = !0) : o.push(c) } else o.push(c) } return s || o.push(t), o.sort($e), { tree: o, conflicts: i || "internal_node" } }

     function Re(e, t, n) { var r = Me(e, t),
       o = function(e, t) { for (var n, r, o = Le(e), i = 0, s = o.length; i < s; i++) { var a, u = o[i],
          c = u.ids; if (c.length > t) { n || (n = {}); var f = c.length - t;
          a = { pos: u.pos + f, ids: Ie(c, f) }; for (var l = 0; l < f; l++) { var d = u.pos + l + "-" + c[l].id;
           n[d] = !0 } } else a = { pos: u.pos, ids: Ie(c, 0) };
         r = r ? Me(r, a, !0).tree : [a] } return n && xe(r, (function(e, t, r) { delete n[t + "-" + r] })), { tree: r, revs: n ? Object.keys(n) : [] } }(r.tree, n); return { tree: o.tree, stemmedRevs: o.revs, conflicts: r.conflicts } }

     function Ne(e) { return e.ids }

     function Ue(e, t) { t || (t = Se(e)); for (var n, r = t.substring(t.indexOf("-") + 1), o = e.rev_tree.map(Ne); n = o.pop();) { if (n[0] === r) return !!n[1].deleted;
       o = o.concat(n[2]) } }

     function Fe(e) { return /^_local/.test(e) }

     function Ke(e, t, n) { d.call(this); var r = this;
      this.db = e; var o = (t = t ? b(t) : {}).complete = w((function(t, n) { var o, s;
       t ? (s = "error", ("listenerCount" in (o = r) ? o.listenerCount(s) : d.listenerCount(o, s)) > 0 && r.emit("error", t)) : r.emit("complete", n), r.removeAllListeners(), e.removeListener("destroyed", i) }));

      function i() { r.cancel() } n && (r.on("complete", (function(e) { n(null, e) })), r.on("error", n)), e.once("destroyed", i), t.onChange = function(e, t, n) { r.isCancelled || function(e, t, n, r) { try { e.emit("change", t, n, r) } catch (e) { C("error", 'Error in .on("change", function):', e) } }(r, e, t, n) }; var s = new Promise((function(e, n) { t.complete = function(t, r) { t ? n(t) : e(r) } }));
      r.once("cancel", (function() { e.removeListener("destroyed", i), t.complete(null, { status: "cancelled" }) })), this.then = s.then.bind(s), this.catch = s.catch.bind(s), this.then((function(e) { o(null, e) }), o), e.taskqueue.isReady ? r.validateChanges(t) : e.taskqueue.addTask((function(e) { e ? t.complete(e) : r.isCancelled ? r.emit("cancel") : r.validateChanges(t) })) }

     function Je(e, t, n) { var r = [{ rev: e._rev }]; "all_docs" === n.style && (r = Pe(t.rev_tree).map((function(e) { return { rev: e.rev } }))); var o = { id: t.id, changes: r, doc: e }; return Ue(t, e._rev) && (o.deleted = !0), n.conflicts && (o.doc._conflicts = Ce(t), o.doc._conflicts.length || delete o.doc._conflicts), o }

     function ze(e, t) { return e < t ? -1 : e > t ? 1 : 0 }

     function Ve(e, t) { return function(n, r) { n || r[0] && r[0].error ? ((n = n || r[0]).docId = t, e(n)) : e(null, r.length ? r[0] : r) } }

     function Ge(e, t) { var n = ze(e._id, t._id); return 0 !== n ? n : ze(e._revisions ? e._revisions.start : 0, t._revisions ? t._revisions.start : 0) }

     function Qe() { for (var e in d.call(this), Qe.prototype) "function" == typeof this[e] && (this[e] = this[e].bind(this)) }

     function We() { this.isReady = !1, this.failed = !1, this.queue = [] }

     function Ye(e, t) { if (!(this instanceof Ye)) return new Ye(e, t); var n = this; if (t = t || {}, e && "object" == typeof e && (e = (t = e).name, delete t.name), void 0 === t.deterministic_revs && (t.deterministic_revs = !0), this.__opts = t = b(t), n.auto_compaction = t.auto_compaction, n.prefix = Ye.prefix, "string" != typeof e) throw new Error("Missing/invalid DB name"); var r = function(e, t) { var n = e.match(/([a-z-]*):\/\/(.*)/); if (n) return { name: /https?/.test(n[1]) ? n[1] + "://" + n[2] : n[2], adapter: n[1] }; var r = Ye.adapters,
        o = Ye.preferredAdapters,
        i = Ye.prefix,
        s = t.adapter; if (!s)
        for (var a = 0; a < o.length && ("idb" === (s = o[a]) && "websql" in r && E() && localStorage["_pouch__websqldb_" + i + e]); ++a) C("log", 'PouchDB is downgrading "' + e + '" to WebSQL to avoid data loss, because it was already opened with WebSQL.'); var u = r[s]; return { name: !u || !("use_prefix" in u) || u.use_prefix ? i + e : e, adapter: s } }((t.prefix || "") + e, t); if (t.name = r.name, t.adapter = t.adapter || r.adapter, n.name = e, n._adapter = t.adapter, Ye.emit("debug", ["adapter", "Picked adapter: ", t.adapter]), !Ye.adapters[t.adapter] || !Ye.adapters[t.adapter].valid()) throw new Error("Invalid Adapter: " + t.adapter); if (t.view_adapter && (!Ye.adapters[t.view_adapter] || !Ye.adapters[t.view_adapter].valid())) throw new Error("Invalid View Adapter: " + t.view_adapter);
      Qe.call(n), n.taskqueue = new We, n.adapter = t.adapter, Ye.adapters[t.adapter].call(n, t, (function(e) { if (e) return n.taskqueue.fail(e);! function(e) {
        function t(t) { e.removeListener("closed", n), t || e.constructor.emit("destroyed", e.name) }

        function n() { e.removeListener("destroyed", t), e.constructor.emit("unref", e) } e.once("destroyed", t), e.once("closed", n), e.constructor.emit("ref", e) }(n), n.emit("created", n), Ye.emit("created", n.name), n.taskqueue.ready(n) })) } l(Ke, d), Ke.prototype.cancel = function() { this.isCancelled = !0, this.db.taskqueue.isReady && this.emit("cancel") }, Ke.prototype.validateChanges = function(e) { var t = e.complete,
       n = this;
      Ye._changesFilterPlugin ? Ye._changesFilterPlugin.validate(e, (function(r) { if (r) return t(r);
       n.doChanges(e) })) : n.doChanges(e) }, Ke.prototype.doChanges = function(e) { var t = this,
       n = e.complete; if ("live" in (e = b(e)) && !("continuous" in e) && (e.continuous = e.live), e.processChange = Je, "latest" === e.since && (e.since = "now"), e.since || (e.since = 0), "now" !== e.since) { if (Ye._changesFilterPlugin) { if (Ye._changesFilterPlugin.normalize(e), Ye._changesFilterPlugin.shouldFilter(this, e)) return Ye._changesFilterPlugin.filter(this, e) } else ["doc_ids", "filter", "selector", "view"].forEach((function(t) { t in e && C("warn", 'The "' + t + '" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.') })); "descending" in e || (e.descending = !1), e.limit = 0 === e.limit ? 1 : e.limit, e.complete = n; var r = this.db._changes(e); if (r && "function" == typeof r.cancel) { var o = t.cancel;
        t.cancel = f((function(e) { r.cancel(), o.apply(this, e) })) } } else this.db.info().then((function(r) { t.isCancelled ? n(null, { status: "cancelled" }) : (e.since = r.update_seq, t.doChanges(e)) }), n) }, l(Qe, d), Qe.prototype.post = j("post", (function(e, t, n) { if ("function" == typeof t && (n = t, t = {}), "object" != typeof e || Array.isArray(e)) return n(H(G));
      this.bulkDocs({ docs: [e] }, t, Ve(n, e._id)) })), Qe.prototype.put = j("put", (function(e, t, n) { if ("function" == typeof t && (n = t, t = {}), "object" != typeof e || Array.isArray(e)) return n(H(G)); if (te(e._id), Fe(e._id) && "function" == typeof this._putLocal) return e._deleted ? this._removeLocal(e, n) : this._putLocal(e, n); var r, o, i, s, a = this;

      function u(n) { "function" == typeof a._put && !1 !== t.new_edits ? a._put(e, t, n) : a.bulkDocs({ docs: [e] }, t, Ve(n, e._id)) } t.force && e._rev ? (r = e._rev.split("-"), o = r[1], i = parseInt(r[0], 10) + 1, s = qe(), e._revisions = { start: i, ids: [s, o] }, e._rev = i + "-" + s, t.new_edits = !1, u((function(t) { var r = t ? null : { ok: !0, id: e._id, rev: e._rev };
       n(t, r) }))) : u(n) })), Qe.prototype.putAttachment = j("putAttachment", (function(e, t, n, r, o) { var i = this;

      function s(e) { var n = "_rev" in e ? parseInt(e._rev, 10) : 0; return e._attachments = e._attachments || {}, e._attachments[t] = { content_type: o, data: r, revpos: ++n }, i.put(e) } return "function" == typeof o && (o = r, r = n, n = null), void 0 === o && (o = r, r = n, n = null), o || C("warn", "Attachment", t, "on document", e, "is missing content_type"), i.get(e).then((function(e) { if (e._rev !== n) throw H(M); return s(e) }), (function(t) { if (t.reason === T.message) return s({ _id: e }); throw t })) })), Qe.prototype.removeAttachment = j("removeAttachment", (function(e, t, n, r) { var o = this;
      o.get(e, (function(e, i) { if (e) r(e);
       else if (i._rev === n) { if (!i._attachments) return r();
        delete i._attachments[t], 0 === Object.keys(i._attachments).length && delete i._attachments, o.put(i, r) } else r(H(M)) })) })), Qe.prototype.remove = j("remove", (function(e, t, n, r) { var o; "string" == typeof t ? (o = { _id: e, _rev: t }, "function" == typeof n && (r = n, n = {})) : (o = e, "function" == typeof t ? (r = t, n = {}) : (r = n, n = t)), (n = n || {}).was_delete = !0; var i = { _id: o._id, _rev: o._rev || n.rev, _deleted: !0 }; if (Fe(i._id) && "function" == typeof this._removeLocal) return this._removeLocal(o, r);
      this.bulkDocs({ docs: [i] }, n, Ve(r, i._id)) })), Qe.prototype.revsDiff = j("revsDiff", (function(e, t, n) { "function" == typeof t && (n = t, t = {}); var r = Object.keys(e); if (!r.length) return n(null, {}); var o = 0,
       s = new i;

      function a(e, t) { s.has(e) || s.set(e, { missing: [] }), s.get(e).missing.push(t) } r.map((function(t) { this._getRevisionTree(t, (function(i, u) { if (i && 404 === i.status && "missing" === i.message) s.set(t, { missing: e[t] });
        else { if (i) return n(i);! function(t, n) { var r = e[t].slice(0);
          xe(n, (function(e, n, o, i, s) { var u = n + "-" + o,
            c = r.indexOf(u); - 1 !== c && (r.splice(c, 1), "available" !== s.status && a(t, u)) })), r.forEach((function(e) { a(t, e) })) }(t, u) } if (++o === r.length) { var c = {}; return s.forEach((function(e, t) { c[t] = e })), n(null, c) } })) }), this) })), Qe.prototype.bulkGet = j("bulkGet", (function(e, t) { x(this, e, t) })), Qe.prototype.compactDocument = j("compactDocument", (function(e, t, n) { var r = this;
      this._getRevisionTree(e, (function(o, i) { if (o) return n(o); var s = function(e) { var t = {},
          n = []; return xe(e, (function(e, r, o, i) { var s = r + "-" + o; return e && (t[s] = 0), void 0 !== i && n.push({ from: i, to: s }), s })), n.reverse(), n.forEach((function(e) { void 0 === t[e.from] ? t[e.from] = 1 + t[e.to] : t[e.from] = Math.min(t[e.from], 1 + t[e.to]) })), t }(i),
        a = [],
        u = [];
       Object.keys(s).forEach((function(e) { s[e] > t && a.push(e) })), xe(i, (function(e, t, n, r, o) { var i = t + "-" + n; "available" === o.status && -1 !== a.indexOf(i) && u.push(i) })), r._doCompaction(e, u, n) })) })), Qe.prototype.compact = j("compact", (function(e, t) { "function" == typeof e && (t = e, e = {});
      e = e || {}, this._compactionQueue = this._compactionQueue || [], this._compactionQueue.push({ opts: e, callback: t }), 1 === this._compactionQueue.length && function e(t) { var n = t._compactionQueue[0],
        r = n.opts,
        o = n.callback;
       t.get("_local/compaction").catch((function() { return !1 })).then((function(n) { n && n.last_seq && (r.last_seq = n.last_seq), t._compact(r, (function(n, r) { n ? o(n) : o(null, r), s((function() { t._compactionQueue.shift(), t._compactionQueue.length && e(t) })) })) })) }(this) })), Qe.prototype._compact = function(e, t) { var n = this,
       r = { return_docs: !1, last_seq: e.last_seq || 0 },
       o = [];
      n.changes(r).on("change", (function(e) { o.push(n.compactDocument(e.id, 0)) })).on("complete", (function(e) { var r = e.last_seq;
       Promise.all(o).then((function() { return fe(n, "_local/compaction", (function(e) { return (!e.last_seq || e.last_seq < r) && (e.last_seq = r, e) })) })).then((function() { t(null, { ok: !0 }) })).catch(t) })).on("error", t) }, Qe.prototype.get = j("get", (function(e, t, n) { if ("function" == typeof t && (n = t, t = {}), "string" != typeof e) return n(H(R)); if (Fe(e) && "function" == typeof this._getLocal) return this._getLocal(e, n); var r = [],
       o = this;

      function i() { var i = [],
        s = r.length; if (!s) return n(null, i);
       r.forEach((function(r) { o.get(e, { rev: r, revs: t.revs, latest: t.latest, attachments: t.attachments, binary: t.binary }, (function(e, t) { if (e) i.push({ missing: r });
         else { for (var o, a = 0, u = i.length; a < u; a++)
           if (i[a].ok && i[a].ok._rev === t._rev) { o = !0; break } o || i.push({ ok: t }) }--s || n(null, i) })) })) } if (!t.open_revs) return this._get(e, t, (function(r, i) { if (r) return r.docId = e, n(r); var s = i.doc,
        a = i.metadata,
        u = i.ctx; if (t.conflicts) { var c = Ce(a);
        c.length && (s._conflicts = c) } if (Ue(a, s._rev) && (s._deleted = !0), t.revs || t.revs_info) { for (var f = s._rev.split("-"), l = parseInt(f[0], 10), d = f[1], h = Le(a.rev_tree), p = null, v = 0; v < h.length; v++) { var y = h[v],
          _ = y.ids.map((function(e) { return e.id })).indexOf(d);
         (_ === l - 1 || !p && -1 !== _) && (p = y) } if (!p) return (r = new Error("invalid rev tree")).docId = e, n(r); var g = p.ids.map((function(e) { return e.id })).indexOf(s._rev.split("-")[1]) + 1,
         m = p.ids.length - g; if (p.ids.splice(g, m), p.ids.reverse(), t.revs && (s._revisions = { start: p.pos + p.ids.length - 1, ids: p.ids.map((function(e) { return e.id })) }), t.revs_info) { var b = p.pos + p.ids.length;
         s._revs_info = p.ids.map((function(e) { return { rev: --b + "-" + e.id, status: e.opts.status } })) } } if (t.attachments && s._attachments) { var w = s._attachments,
         k = Object.keys(w).length; if (0 === k) return n(null, s);
        Object.keys(w).forEach((function(e) { this._getAttachment(s._id, e, w[e], { rev: s._rev, binary: t.binary, ctx: u }, (function(t, r) { var o = s._attachments[e];
          o.data = r, delete o.stub, delete o.length, --k || n(null, s) })) }), o) } else { if (s._attachments)
         for (var j in s._attachments) Object.prototype.hasOwnProperty.call(s._attachments, j) && (s._attachments[j].stub = !0);
        n(null, s) } })); if ("all" === t.open_revs) this._getRevisionTree(e, (function(e, t) { if (e) return n(e);
       r = Pe(t).map((function(e) { return e.rev })), i() }));
      else { if (!Array.isArray(t.open_revs)) return n(H(F, "function_clause"));
       r = t.open_revs; for (var s = 0; s < r.length; s++) { var a = r[s]; if ("string" != typeof a || !/^\d+-/.test(a)) return n(H(W)) } i() } })), Qe.prototype.getAttachment = j("getAttachment", (function(e, t, n, r) { var o = this;
      n instanceof Function && (r = n, n = {}), this._get(e, n, (function(i, s) { return i ? r(i) : s.doc._attachments && s.doc._attachments[t] ? (n.ctx = s.ctx, n.binary = !0, void o._getAttachment(e, t, s.doc._attachments[t], n, r)) : r(H(T)) })) })), Qe.prototype.allDocs = j("allDocs", (function(e, t) { if ("function" == typeof e && (t = e, e = {}), e.skip = void 0 !== e.skip ? e.skip : 0, e.start_key && (e.startkey = e.start_key), e.end_key && (e.endkey = e.end_key), "keys" in e) { if (!Array.isArray(e.keys)) return t(new TypeError("options.keys must be an array")); var n = ["startkey", "endkey", "key"].filter((function(t) { return t in e }))[0]; if (n) return void t(H(J, "Query parameter `" + n + "` is not compatible with multi-get")); if (!ne(this) && (function(e) { var t = "limit" in e ? e.keys.slice(e.skip, e.limit + e.skip) : e.skip > 0 ? e.keys.slice(e.skip) : e.keys;
         e.keys = t, e.skip = 0, delete e.limit, e.descending && (t.reverse(), e.descending = !1) }(e), 0 === e.keys.length)) return this._allDocs({ limit: 0 }, t) } return this._allDocs(e, t) })), Qe.prototype.changes = function(e, t) { return "function" == typeof e && (t = e, e = {}), (e = e || {}).return_docs = "return_docs" in e ? e.return_docs : !e.live, new Ke(this, e, t) }, Qe.prototype.close = j("close", (function(e) { return this._closed = !0, this.emit("closed"), this._close(e) })), Qe.prototype.info = j("info", (function(e) { var t = this;
      this._info((function(n, r) { if (n) return e(n);
       r.db_name = r.db_name || t.name, r.auto_compaction = !(!t.auto_compaction || ne(t)), r.adapter = t.adapter, e(null, r) })) })), Qe.prototype.id = j("id", (function(e) { return this._id(e) })), Qe.prototype.type = function() { return "function" == typeof this._type ? this._type() : this.adapter }, Qe.prototype.bulkDocs = j("bulkDocs", (function(e, t, n) { if ("function" == typeof t && (n = t, t = {}), t = t || {}, Array.isArray(e) && (e = { docs: e }), !e || !e.docs || !Array.isArray(e.docs)) return n(H(B)); for (var r = 0; r < e.docs.length; ++r)
       if ("object" != typeof e.docs[r] || Array.isArray(e.docs[r])) return n(H(G)); var o; if (e.docs.forEach((function(e) { e._attachments && Object.keys(e._attachments).forEach((function(t) { o = o || function(e) { return "_" === e.charAt(0) && e + " is not a valid attachment name, attachment names cannot start with '_'" }(t), e._attachments[t].content_type || C("warn", "Attachment", t, "on document", e._id, "is missing content_type") })) })), o) return n(H(V, o)); "new_edits" in t || (t.new_edits = !("new_edits" in e) || e.new_edits); var i = this;
      t.new_edits || ne(i) || e.docs.sort(Ge),
       function(e) { for (var t = 0; t < e.length; t++) { var n = e[t]; if (n._deleted) delete n._attachments;
         else if (n._attachments)
          for (var r = Object.keys(n._attachments), o = 0; o < r.length; o++) { var i = r[o];
           n._attachments[i] = O(n._attachments[i], ["data", "digest", "content_type", "length", "revpos", "stub"]) } } }(e.docs); var s = e.docs.map((function(e) { return e._id })); return this._bulkDocs(e, t, (function(e, r) { if (e) return n(e); if (t.new_edits || (r = r.filter((function(e) { return e.error }))), !ne(i))
        for (var o = 0, a = r.length; o < a; o++) r[o].id = r[o].id || s[o];
       n(null, r) })) })), Qe.prototype.registerDependentDatabase = j("registerDependentDatabase", (function(e, t) { var n = b(this.__opts);
      this.__opts.view_adapter && (n.adapter = this.__opts.view_adapter); var r = new this.constructor(e, n);
      fe(this, "_local/_pouch_dependentDbs", (function(t) { return t.dependentDbs = t.dependentDbs || {}, !t.dependentDbs[e] && (t.dependentDbs[e] = !0, t) })).then((function() { t(null, { db: r }) })).catch(t) })), Qe.prototype.destroy = j("destroy", (function(e, t) { "function" == typeof e && (t = e, e = {}); var n = this,
       r = !("use_prefix" in n) || n.use_prefix;

      function o() { n._destroy(e, (function(e, r) { if (e) return t(e);
        n._destroyed = !0, n.emit("destroyed"), t(null, r || { ok: !0 }) })) } if (ne(n)) return o();
      n.get("_local/_pouch_dependentDbs", (function(e, i) { if (e) return 404 !== e.status ? t(e) : o(); var s = i.dependentDbs,
        a = n.constructor,
        u = Object.keys(s).map((function(e) { var t = r ? e.replace(new RegExp("^" + a.prefix), "") : e; return new a(t, n.__opts).destroy() }));
       Promise.all(u).then(o, t) })) })), We.prototype.execute = function() { var e; if (this.failed)
       for (; e = this.queue.shift();) e(this.failed);
      else
       for (; e = this.queue.shift();) e() }, We.prototype.fail = function(e) { this.failed = e, this.execute() }, We.prototype.ready = function(e) { this.isReady = !0, this.db = e, this.execute() }, We.prototype.addTask = function(e) { this.queue.push(e), this.failed && this.execute() }, l(Ye, Qe); var He = "undefined" != typeof AbortController ? AbortController : function() { return { abort: function() {} } },
      Xe = fetch,
      Ze = Headers;
     Ye.adapters = {}, Ye.preferredAdapters = [], Ye.prefix = "_pouch_"; var et = new d;! function(e) { Object.keys(d.prototype).forEach((function(t) { "function" == typeof d.prototype[t] && (e[t] = et[t].bind(et)) })); var t = e._destructionListeners = new i;
      e.on("ref", (function(e) { t.has(e.name) || t.set(e.name, []), t.get(e.name).push(e) })), e.on("unref", (function(e) { if (t.has(e.name)) { var n = t.get(e.name),
         r = n.indexOf(e);
        r < 0 || (n.splice(r, 1), n.length > 1 ? t.set(e.name, n) : t.delete(e.name)) } })), e.on("destroyed", (function(e) { if (t.has(e)) { var n = t.get(e);
        t.delete(e), n.forEach((function(e) { e.emit("destroyed", !0) })) } })) }(Ye), Ye.adapter = function(e, t, n) { t.valid() && (Ye.adapters[e] = t, n && Ye.preferredAdapters.push(e)) }, Ye.plugin = function(e) { if ("function" == typeof e) e(Ye);
      else { if ("object" != typeof e || 0 === Object.keys(e).length) throw new Error('Invalid plugin: got "' + e + '", expected an object or a function');
       Object.keys(e).forEach((function(t) { Ye.prototype[t] = e[t] })) } return this.__defaults && (Ye.__defaults = D({}, this.__defaults)), Ye }, Ye.defaults = function(e) {
      function t(e, n) { if (!(this instanceof t)) return new t(e, n);
       n = n || {}, e && "object" == typeof e && (e = (n = e).name, delete n.name), n = D({}, t.__defaults, n), Ye.call(this, e, n) } return l(t, Ye), t.preferredAdapters = Ye.preferredAdapters.slice(), Object.keys(Ye).forEach((function(e) { e in t || (t[e] = Ye[e]) })), t.__defaults = D({}, this.__defaults, e), t }, Ye.fetch = function(e, t) { return Xe(e, t) };

     function tt(e, t) { for (var n = e, r = 0, o = t.length; r < o; r++) { if (!(n = n[t[r]])) break } return n }

     function nt(e) { for (var t = [], n = "", r = 0, o = e.length; r < o; r++) { var i = e[r];
       r > 0 && "\\" === e[r - 1] && ("$" === i || "." === i) ? n = n.substring(0, n.length - 1) + i : "." === i ? (t.push(n), n = "") : n += i } return t.push(n), t } var rt = ["$or", "$nor", "$not"];

     function ot(e) { return rt.indexOf(e) > -1 }

     function it(e) { return Object.keys(e)[0] }

     function st(e) { var t = {},
       n = { $or: !0, $nor: !0 }; return e.forEach((function(e) { Object.keys(e).forEach((function(r) { var o = e[r]; if ("object" != typeof o && (o = { $eq: o }), ot(r))
         if (o instanceof Array) { if (n[r]) return n[r] = !1, void(t[r] = o); var i = [];
          t[r].forEach((function(e) { Object.keys(o).forEach((function(t) { var n = o[t],
             r = Math.max(Object.keys(e).length, Object.keys(n).length),
             s = st([e, n]);
            Object.keys(s).length <= r || i.push(s) })) })), t[r] = i } else t[r] = st([o]);
        else { var s = t[r] = t[r] || {};
         Object.keys(o).forEach((function(e) { var t = o[e]; return "$gt" === e || "$gte" === e ? function(e, t, n) { if (void 0 !== n.$eq) return;
           void 0 !== n.$gte ? "$gte" === e ? t > n.$gte && (n.$gte = t) : t >= n.$gte && (delete n.$gte, n.$gt = t) : void 0 !== n.$gt ? "$gte" === e ? t > n.$gt && (delete n.$gt, n.$gte = t) : t > n.$gt && (n.$gt = t) : n[e] = t }(e, t, s) : "$lt" === e || "$lte" === e ? function(e, t, n) { if (void 0 !== n.$eq) return;
           void 0 !== n.$lte ? "$lte" === e ? t < n.$lte && (n.$lte = t) : t <= n.$lte && (delete n.$lte, n.$lt = t) : void 0 !== n.$lt ? "$lte" === e ? t < n.$lt && (delete n.$lt, n.$lte = t) : t < n.$lt && (n.$lt = t) : n[e] = t }(e, t, s) : "$ne" === e ? function(e, t) { "$ne" in t ? t.$ne.push(e) : t.$ne = [e] }(t, s) : "$eq" === e ? function(e, t) { delete t.$gt, delete t.$gte, delete t.$lt, delete t.$lte, delete t.$ne, t.$eq = e }(t, s) : "$regex" === e ? function(e, t) { "$regex" in t ? t.$regex.push(e) : t.$regex = [e] }(t, s) : void(s[e] = t) })) } })) })), t }

     function at(e) { var t = b(e),
       n = !1;
      (function e(t, n) { for (var r in t) { "$and" === r && (n = !0); var o = t[r]; "object" == typeof o && (n = e(o, n)) } return n })(t, !1) && ("$and" in (t = function e(t) { for (var n in t) { if (Array.isArray(t))
         for (var r in t) t[r].$and && (t[r] = st(t[r].$and)); var o = t[n]; "object" == typeof o && e(o) } return t }(t)) && (t = st(t.$and)), n = !0), ["$or", "$nor"].forEach((function(e) { e in t && t[e].forEach((function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) { var r = t[n],
          o = e[r]; "object" == typeof o && null !== o || (e[r] = { $eq: o }) } })) })), "$not" in t && (t.$not = st([t.$not])); for (var r = Object.keys(t), o = 0; o < r.length; o++) { var i = r[o],
        s = t[i]; "object" != typeof s || null === s ? s = { $eq: s } : n || ("$ne" in s && (s.$ne = [s.$ne]), "$regex" in s && (s.$regex = [s.$regex])), t[i] = s } return t }

     function ut(e, t) { if (e === t) return 0;
      e = ct(e), t = ct(t); var n = pt(e),
       r = pt(t); if (n - r != 0) return n - r; switch (typeof e) {
       case "number":
        return e - t;
       case "boolean":
        return e < t ? -1 : 1;
       case "string":
        return function(e, t) { return e === t ? 0 : e > t ? 1 : -1 }(e, t) } return Array.isArray(e) ? function(e, t) { for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) { var o = ut(e[r], t[r]); if (0 !== o) return o } return e.length === t.length ? 0 : e.length > t.length ? 1 : -1 }(e, t) : function(e, t) { for (var n = Object.keys(e), r = Object.keys(t), o = Math.min(n.length, r.length), i = 0; i < o; i++) { var s = ut(n[i], r[i]); if (0 !== s) return s; if (0 !== (s = ut(e[n[i]], t[r[i]]))) return s } return n.length === r.length ? 0 : n.length > r.length ? 1 : -1 }(e, t) }

     function ct(e) { switch (typeof e) {
       case "undefined":
        return null;
       case "number":
        return e === 1 / 0 || e === -1 / 0 || isNaN(e) ? null : e;
       case "object":
        var t = e; if (Array.isArray(e)) { var n = e.length;
         e = new Array(n); for (var r = 0; r < n; r++) e[r] = ct(t[r]) } else { if (e instanceof Date) return e.toJSON(); if (null !== e)
          for (var o in e = {}, t)
           if (Object.prototype.hasOwnProperty.call(t, o)) { var i = t[o];
            void 0 !== i && (e[o] = ct(i)) } } } return e }

     function ft(e) { if (null !== e) switch (typeof e) {
       case "boolean":
        return e ? 1 : 0;
       case "number":
        return function(e) { if (0 === e) return "1"; var t = e.toExponential().split(/e\+?/),
          n = parseInt(t[1], 10),
          r = e < 0,
          o = r ? "0" : "2",
          i = (s = ((r ? -n : n) - -324).toString(), a = "0", u = 3, function(e, t, n) { for (var r = "", o = n - e.length; r.length < o;) r += t; return r }(s, a, u) + s); var s, a, u;
         o += "" + i; var c = Math.abs(parseFloat(t[0]));
         r && (c = 10 - c); var f = c.toFixed(20); return f = f.replace(/\.?0+$/, ""), o += "" + f }(e);
       case "string":
        return e.replace(/\u0002/g, "").replace(/\u0001/g, "").replace(/\u0000/g, "");
       case "object":
        var t = Array.isArray(e),
         n = t ? e : Object.keys(e),
         r = -1,
         o = n.length,
         i = ""; if (t)
         for (; ++r < o;) i += lt(n[r]);
        else
         for (; ++r < o;) { var s = n[r];
          i += lt(s) + lt(e[s]) }
        return i }
      return "" }

     function lt(e) { return pt(e = ct(e)) + "" + ft(e) + "\0" }

     function dt(e, t) { var n, r = t; if ("1" === e[t]) n = 0, t++;
      else { var o = "0" === e[t];
       t++; var i = "",
        s = e.substring(t, t + 3),
        a = parseInt(s, 10) + -324; for (o && (a = -a), t += 3;;) { var u = e[t]; if ("\0" === u) break;
        i += u, t++ } n = 1 === (i = i.split(".")).length ? parseInt(i, 10) : parseFloat(i[0] + "." + i[1]), o && (n -= 10), 0 !== a && (n = parseFloat(n + "e" + a)) } return { num: n, length: t - r } }

     function ht(e, t) { var n = e.pop(); if (t.length) { var r = t[t.length - 1];
       n === r.element && (t.pop(), r = t[t.length - 1]); var o = r.element,
        i = r.index; if (Array.isArray(o)) o.push(n);
       else if (i === e.length - 2) { o[e.pop()] = n } else e.push(n) } }

     function pt(e) { var t = ["boolean", "number", "string", "object"].indexOf(typeof e); return ~t ? null === e ? 1 : Array.isArray(e) ? 5 : t < 3 ? t + 2 : t + 3 : Array.isArray(e) ? 5 : void 0 }

     function vt(e, t, n) { if (e = e.filter((function(e) { return yt(e.doc, t.selector, n) })), t.sort) { var r = function(e) {
        function t(t) { return e.map((function(e) { var n = nt(it(e)); return tt(t, n) })) } return function(e, n) { var r, o, i = ut(t(e.doc), t(n.doc)); return 0 !== i ? i : (r = e.doc._id, o = n.doc._id, r < o ? -1 : r > o ? 1 : 0) } }(t.sort);
       e = e.sort(r), "string" != typeof t.sort[0] && "desc" === (o = t.sort[0])[it(o)] && (e = e.reverse()) } var o; if ("limit" in t || "skip" in t) { var i = t.skip || 0,
        s = ("limit" in t ? t.limit : e.length) + i;
       e = e.slice(i, s) } return e }

     function yt(e, t, n) { return n.every((function(n) { var r = t[n],
        o = nt(n),
        i = tt(e, o); return ot(n) ? function(e, t, n) { if ("$or" === e) return t.some((function(e) { return yt(n, e, Object.keys(e)) })); if ("$not" === e) return !yt(n, t, Object.keys(t)); return !t.find((function(e) { return yt(n, e, Object.keys(e)) })) }(n, r, e) : _t(r, e, o, i) })) }

     function _t(e, t, n, r) { return !e || ("object" == typeof e ? Object.keys(e).every((function(o) { var i = e[o]; if (0 === o.indexOf("$")) return gt(o, t, i, n, r); var s = nt(o); if (void 0 === r && "object" != typeof i && s.length > 0) return !1; var a = tt(r, s); return "object" == typeof i ? _t(i, t, n, a) : gt("$eq", t, i, s, a) })) : e === r) }

     function gt(e, t, n, r, o) { if (!kt[e]) throw new Error('unknown operator "' + e + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all'); return kt[e](t, n, r, o) }

     function mt(e) { return null != e }

     function bt(e) { return void 0 !== e }

     function wt(e, t) { return t.some((function(t) { return e instanceof Array ? e.some((function(e) { return 0 === ut(t, e) })) : 0 === ut(t, e) })) } var kt = { $elemMatch: function(e, t, n, r) { return !!Array.isArray(r) && (0 !== r.length && ("object" == typeof r[0] ? r.some((function(e) { return yt(e, t, Object.keys(t)) })) : r.some((function(r) { return _t(t, e, n, r) })))) }, $allMatch: function(e, t, n, r) { return !!Array.isArray(r) && (0 !== r.length && ("object" == typeof r[0] ? r.every((function(e) { return yt(e, t, Object.keys(t)) })) : r.every((function(r) { return _t(t, e, n, r) })))) }, $eq: function(e, t, n, r) { return bt(r) && 0 === ut(r, t) }, $gte: function(e, t, n, r) { return bt(r) && ut(r, t) >= 0 }, $gt: function(e, t, n, r) { return bt(r) && ut(r, t) > 0 }, $lte: function(e, t, n, r) { return bt(r) && ut(r, t) <= 0 }, $lt: function(e, t, n, r) { return bt(r) && ut(r, t) < 0 }, $exists: function(e, t, n, r) { return t ? bt(r) : !bt(r) }, $mod: function(e, t, n, r) { return mt(r) && function(e, t) { return "number" == typeof e && parseInt(e, 10) === e && e % t[0] === t[1] }(r, t) }, $ne: function(e, t, n, r) { return t.every((function(e) { return 0 !== ut(r, e) })) }, $in: function(e, t, n, r) { return mt(r) && wt(r, t) }, $nin: function(e, t, n, r) { return mt(r) && !wt(r, t) }, $size: function(e, t, n, r) { return mt(r) && Array.isArray(r) && function(e, t) { return e.length === t }(r, t) }, $all: function(e, t, n, r) { return Array.isArray(r) && function(e, t) { return t.every((function(t) { return e.some((function(e) { return 0 === ut(t, e) })) })) }(r, t) }, $regex: function(e, t, n, r) { return mt(r) && "string" == typeof r && t.every((function(e) { return function(e, t) { return new RegExp(t).test(e) }(r, e) })) }, $type: function(e, t, n, r) { return function(e, t) { switch (t) {
         case "null":
          return null === e;
         case "boolean":
          return "boolean" == typeof e;
         case "number":
          return "number" == typeof e;
         case "string":
          return "string" == typeof e;
         case "array":
          return e instanceof Array;
         case "object":
          return "[object Object]" === {}.toString.call(e) } }(r, t) } };

     function jt(e, t) { if (e.selector && e.filter && "_selector" !== e.filter) { var n = "string" == typeof e.filter ? e.filter : "function"; return t(new Error('selector invalid for filter "' + n + '"')) } t() }

     function Ot(e) { e.view && !e.filter && (e.filter = "_view"), e.selector && !e.filter && (e.filter = "_selector"), e.filter && "string" == typeof e.filter && ("_view" === e.filter ? e.view = oe(e.view) : e.filter = oe(e.filter)) }

     function qt(e, t) { return t.filter && "string" == typeof t.filter && !t.doc_ids && !ne(e.db) }

     function At(e, t) { var n = t.complete; if ("_view" === t.filter) { if (!t.view || "string" != typeof t.view) { var r = H(V, "`view` filter parameter not found or invalid."); return n(r) } var o = re(t.view);
       e.db.get("_design/" + o[0], (function(r, i) { if (e.isCancelled) return n(null, { status: "cancelled" }); if (r) return n(X(r)); var s = i && i.views && i.views[o[1]] && i.views[o[1]].map; if (!s) return n(H(T, i.views ? "missing json key: " + o[1] : "missing json key: views"));
        t.filter = ce(["return function(doc) {", '  "use strict";', "  var emitted = false;", "  var emit = function (a, b) {", "    emitted = true;", "  };", "  var view = " + s + ";", "  view(doc);", "  if (emitted) {", "    return true;", "  }", "};"].join("\n"), {}), e.doChanges(t) })) } else if (t.selector) t.filter = function(e) { return function(e, t) { if ("object" != typeof t) throw new Error("Selector error: expected a JSON object"); var n = vt([{ doc: e }], { selector: t = at(t) }, Object.keys(t)); return n && 1 === n.length }(e, t.selector) }, e.doChanges(t);
      else { var i = re(t.filter);
       e.db.get("_design/" + i[0], (function(r, o) { if (e.isCancelled) return n(null, { status: "cancelled" }); if (r) return n(X(r)); var s = o && o.filters && o.filters[i[1]]; if (!s) return n(H(T, o && o.filters ? "missing json key: " + i[1] : "missing json key: filters"));
        t.filter = ce('"use strict";\nreturn ' + s + ";", {}), e.doChanges(t) })) } }

     function St(e) { return e.reduce((function(e, t) { return e[t] = !0, e }), {}) } Ye.plugin((function(e) { e._changesFilterPlugin = { validate: jt, normalize: Ot, shouldFilter: qt, filter: At } })), Ye.version = "7.3.0"; var xt = St(["_id", "_rev", "_access", "_attachments", "_deleted", "_revisions", "_revs_info", "_conflicts", "_deleted_conflicts", "_local_seq", "_rev_tree", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats", "_removed"]),
      Et = St(["_access", "_attachments", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats"]);

     function Pt(e) { if (!/^\d+-/.test(e)) return H(W); var t = e.indexOf("-"),
       n = e.substring(0, t),
       r = e.substring(t + 1); return { prefix: parseInt(n, 10), id: r } }

     function Ct(e, t, n) { var r, o, i;
      n || (n = { deterministic_revs: !0 }); var s = { status: "available" }; if (e._deleted && (s.deleted = !0), t)
       if (e._id || (e._id = Ae()), o = qe(e, n.deterministic_revs), e._rev) { if ((i = Pt(e._rev)).error) return i;
        e._rev_tree = [{ pos: i.prefix, ids: [i.id, { status: "missing" }, [[o, s, []]]] }], r = i.prefix + 1 } else e._rev_tree = [{ pos: 1, ids: [o, s, []] }], r = 1;
      else if (e._revisions && (e._rev_tree = function(e, t) { for (var n = e.start - e.ids.length + 1, r = e.ids, o = [r[0], t, []], i = 1, s = r.length; i < s; i++) o = [r[i], { status: "missing" }, [o]]; return [{ pos: n, ids: o }] }(e._revisions, s), r = e._revisions.start, o = e._revisions.ids[0]), !e._rev_tree) { if ((i = Pt(e._rev)).error) return i;
       r = i.prefix, o = i.id, e._rev_tree = [{ pos: r, ids: [o, s, []] }] } te(e._id), e._rev = r + "-" + o; var a = { metadata: {}, data: {} }; for (var u in e)
       if (Object.prototype.hasOwnProperty.call(e, u)) { var c = "_" === u[0]; if (c && !xt[u]) { var f = H(z, u); throw f.message = z.message + ": " + u, f } c && !Et[u] ? a.metadata[u.slice(1)] = e[u] : a.data[u] = e[u] } return a }

     function Lt(e, t, n) { var r = function(e) { try { return le(e) } catch (e) { return { error: H(K, "Attachment is not a valid base64 string") } } }(e.data); if (r.error) return n(r.error);
      e.length = r.length, e.data = "blob" === t ? ve(r, e.content_type) : "base64" === t ? de(r) : r, je(r, (function(t) { e.digest = "md5-" + t, n() })) }

     function $t(e, t, n) { if (e.stub) return n(); "string" == typeof e.data ? Lt(e, t, n) : function(e, t, n) { je(e.data, (function(r) { e.digest = "md5-" + r, e.length = e.data.size || e.data.length || 0, "binary" === t ? ge(e.data, (function(t) { e.data = t, n() })) : "base64" === t ? me(e.data, (function(t) { e.data = t, n() })) : n() })) }(e, t, n) }

     function Dt(e, t, n, r, o, i, s, a) { if (function(e, t) { for (var n, r = e.slice(), o = t.split("-"), i = parseInt(o[0], 10), s = o[1]; n = r.pop();) { if (n.pos === i && n.ids[0] === s) return !0; for (var a = n.ids[2], u = 0, c = a.length; u < c; u++) r.push({ pos: n.pos + 1, ids: a[u] }) } return !1 }(t.rev_tree, n.metadata.rev) && !a) return r[o] = n, i(); var u = t.winningRev || Se(t),
       c = "deleted" in t ? t.deleted : Ue(t, u),
       f = "deleted" in n.metadata ? n.metadata.deleted : Ue(n.metadata),
       l = /^1-/.test(n.metadata.rev); if (c && !f && a && l) { var d = n.data;
       d._rev = u, d._id = n.metadata.id, n = Ct(d, a) } var h = Re(t.rev_tree, n.metadata.rev_tree[0], e); if (a && (c && f && "new_leaf" !== h.conflicts || !c && "new_leaf" !== h.conflicts || c && !f && "new_branch" === h.conflicts)) { var p = H(M); return r[o] = p, i() } var v = n.metadata.rev;
      n.metadata.rev_tree = h.tree, n.stemmedRevs = h.stemmedRevs || [], t.rev_map && (n.metadata.rev_map = t.rev_map); var y = Se(n.metadata),
       _ = Ue(n.metadata, y),
       g = c === _ ? 0 : c < _ ? -1 : 1;
      s(n, y, _, v === y ? _ : Ue(n.metadata, v), !0, g, o, i) }

     function It(e, t, n, r, o, s, a, u, c) { e = e || 1e3; var f = u.new_edits,
       l = new i,
       d = 0,
       h = t.length;

      function p() {++d === h && c && c() } t.forEach((function(e, t) { if (e._id && Fe(e._id)) { var r = e._deleted ? "_removeLocal" : "_putLocal";
        n[r](e, { ctx: o }, (function(e, n) { s[t] = e || n, p() })) } else { var i = e.metadata.id;
        l.has(i) ? (h--, l.get(i).push([e, t])) : l.set(i, [[e, t]]) } })), l.forEach((function(t, n) { var o = 0;

       function i() {++o < t.length ? c() : p() }

       function c() { var c = t[o],
         l = c[0],
         d = c[1]; if (r.has(n)) Dt(e, r.get(n), l, s, d, i, a, f);
        else { var h = Re([], l.metadata.rev_tree[0], e);
         l.metadata.rev_tree = h.tree, l.stemmedRevs = h.stemmedRevs || [],
          function(e, t, n) { var r = Se(e.metadata),
            o = Ue(e.metadata, r); if ("was_delete" in u && o) return s[t] = H(T, "deleted"), n(); if (f && function(e) { return "missing" === e.metadata.rev_tree[0].ids[1].status }(e)) { var i = H(M); return s[t] = i, n() } a(e, r, o, o, !1, o ? 0 : 1, t, n) }(l, d, i) } } c() })) } var Bt = "document-store",
      Tt = "meta-store";

     function Mt(e) { try { return JSON.stringify(e) } catch (t) { return c.stringify(e) } }

     function Rt(e) { return function(t) { var n = "unknown_error";
       t.target && t.target.error && (n = t.target.error.name || t.target.error.message), e(H(Q, n, t.type)) } }

     function Nt(e, t, n) { return { data: Mt(e), winningRev: t, deletedOrLocal: n ? "1" : "0", seq: e.seq, id: e.id } }

     function Ut(e) { if (!e) return null; var t = function(e) { try { return JSON.parse(e) } catch (t) { return c.parse(e) } }(e.data); return t.winningRev = e.winningRev, t.deleted = "1" === e.deletedOrLocal, t.seq = e.seq, t }

     function Ft(e) { if (!e) return e; var t = e._doc_id_rev.lastIndexOf(":"); return e._id = e._doc_id_rev.substring(0, t - 1), e._rev = e._doc_id_rev.substring(t + 1), delete e._doc_id_rev, e }

     function Kt(e, t, n, r) { n ? r(e ? "string" != typeof e ? e : ye(e, t) : he([""], { type: t })) : e ? "string" != typeof e ? _e(e, (function(e) { r(de(e)) })) : r(e) : r("") }

     function Jt(e, t, n, r) { var o = Object.keys(e._attachments || {}); if (!o.length) return r && r(); var i = 0;

      function s() {++i === o.length && r && r() } o.forEach((function(r) { t.attachments && t.include_docs ? function(e, t) { var r = e._attachments[t],
         o = r.digest;
        n.objectStore("attach-store").get(o).onsuccess = function(e) { r.body = e.target.result.body, s() } }(e, r) : (e._attachments[r].stub = !0, s()) })) }

     function zt(e, t) { return Promise.all(e.map((function(e) { if (e.doc && e.doc._attachments) { var n = Object.keys(e.doc._attachments); return Promise.all(n.map((function(n) { var r = e.doc._attachments[n]; if ("body" in r) { var o = r.body,
           i = r.content_type; return new Promise((function(s) { Kt(o, i, t, (function(t) { e.doc._attachments[n] = D(O(r, ["digest", "content_type"]), { data: t }), s() })) })) } }))) } }))) }

     function Vt(e, t, n) { var r = [],
       o = n.objectStore("by-sequence"),
       i = n.objectStore("attach-store"),
       s = n.objectStore("attach-seq-store"),
       a = e.length;

      function u() {--a || function() { if (!r.length) return;
        r.forEach((function(e) { s.index("digestSeq").count(IDBKeyRange.bound(e + "::", e + "::￿", !1, !1)).onsuccess = function(t) { t.target.result || i.delete(e) } })) }() } e.forEach((function(e) { var n = o.index("_doc_id_rev"),
        i = t + "::" + e;
       n.getKey(i).onsuccess = function(e) { var t = e.target.result; if ("number" != typeof t) return u();
        o.delete(t), s.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess = function(e) { var t = e.target.result; if (t) { var n = t.value.digestSeq.split("::")[0];
          r.push(n), s.delete(t.primaryKey), t.continue() } else u() } } })) }

     function Gt(e, t, n) { try { return { txn: e.transaction(t, n) } } catch (e) { return { error: e } } } var Qt = new P;

     function Wt(e, t, n, r, o, s) { for (var a, u, c, f, l, d, h, p, v = t.docs, y = 0, _ = v.length; y < _; y++) { var g = v[y];
       g._id && Fe(g._id) || (g = v[y] = Ct(g, n.new_edits, e)).error && !h && (h = g) } if (h) return s(h); var m = !1,
       b = 0,
       w = new Array(v.length),
       k = new i,
       j = !1,
       O = r._meta.blobSupport ? "blob" : "base64";

      function q() { m = !0, A() }

      function A() { p && m && (p.docCount += b, d.put(p)) }

      function S() { j || (Qt.notify(r._meta.name), s(null, w)) }

      function x(e, t, n, r, o, i, s, a) { e.metadata.winningRev = t, e.metadata.deleted = n; var u = e.data; if (u._id = e.metadata.id, u._rev = e.metadata.rev, r && (u._deleted = !0), u._attachments && Object.keys(u._attachments).length) return function(e, t, n, r, o, i) { var s = e.data,
         a = 0,
         u = Object.keys(s._attachments);

        function c() { a === u.length && E(e, t, n, r, o, i) }

        function l() { a++, c() } u.forEach((function(n) { var r = e.data._attachments[n]; if (r.stub) a++, c();
         else { var o = r.data;
          delete r.data, r.revpos = parseInt(t, 10),
           function(e, t, n) { f.count(e).onsuccess = function(r) { if (r.target.result) return n(); var o = { digest: e, body: t };
             f.put(o).onsuccess = n } }(r.digest, o, l) } })) }(e, t, n, o, s, a);
       b += i, A(), E(e, t, n, o, s, a) }

      function E(e, t, n, o, i, s) { var f = e.data,
        d = e.metadata;

       function h(i) { var s = e.stemmedRevs || [];
        o && r.auto_compaction && (s = s.concat(function(e) { var t = []; return xe(e.rev_tree, (function(e, n, r, o, i) { "available" !== i.status || e || (t.push(n + "-" + r), i.status = "missing") })), t }(e.metadata))), s && s.length && Vt(s, e.metadata.id, a), d.seq = i.target.result; var c = Nt(d, t, n);
        u.put(c).onsuccess = p }

       function p() { w[i] = { ok: !0, id: d.id, rev: d.rev }, k.set(e.metadata.id, e.metadata),
         function(e, t, n) { var r = 0,
           o = Object.keys(e.data._attachments || {}); if (!o.length) return n();

          function i() {++r === o.length && n() }

          function s(n) { var r = e.data._attachments[n].digest,
            o = l.put({ seq: t, digestSeq: r + "::" + t });
           o.onsuccess = i, o.onerror = function(e) { e.preventDefault(), e.stopPropagation(), i() } } for (var a = 0; a < o.length; a++) s(o[a]) }(e, d.seq, s) } f._doc_id_rev = d.id + "::" + d.rev, delete f._id, delete f._rev; var v = c.put(f);
       v.onsuccess = h, v.onerror = function(e) { e.preventDefault(), e.stopPropagation(), c.index("_doc_id_rev").getKey(f._doc_id_rev).onsuccess = function(e) { c.put(f, e.target.result).onsuccess = h } } }! function(e, t, n) { if (!e.length) return n(); var r, o = 0;

       function i() { o++, e.length === o && (r ? n(r) : n()) } e.forEach((function(e) { var n = e.data && e.data._attachments ? Object.keys(e.data._attachments) : [],
         o = 0; if (!n.length) return i();

        function s(e) { r = e, ++o === n.length && i() } for (var a in e.data._attachments) Object.prototype.hasOwnProperty.call(e.data._attachments, a) && $t(e.data._attachments[a], t, s) })) }(v, O, (function(t) { if (t) return s(t);! function() { var t = Gt(o, [Bt, "by-sequence", "attach-store", "local-store", "attach-seq-store", Tt], "readwrite"); if (t.error) return s(t.error);
        (a = t.txn).onabort = Rt(s), a.ontimeout = Rt(s), a.oncomplete = S, u = a.objectStore(Bt), c = a.objectStore("by-sequence"), f = a.objectStore("attach-store"), l = a.objectStore("attach-seq-store"), (d = a.objectStore(Tt)).get(Tt).onsuccess = function(e) { p = e.target.result, A() },
         function(e) { var t = []; if (v.forEach((function(e) { e.data && e.data._attachments && Object.keys(e.data._attachments).forEach((function(n) { var r = e.data._attachments[n];
             r.stub && t.push(r.digest) })) })), !t.length) return e(); var n, r = 0;
          t.forEach((function(o) {! function(e, t) { f.get(e).onsuccess = function(n) { if (n.target.result) t();
             else { var r = H(Y, "unknown stub attachment with digest " + e);
              r.status = 412, t(r) } } }(o, (function(o) { o && !n && (n = o), ++r === t.length && e(n) })) })) }((function(t) { if (t) return j = !0, s(t);! function() { if (!v.length) return; var t = 0;

           function o() {++t === v.length && It(e.revs_limit, v, r, k, a, w, x, n, q) }

           function i(e) { var t = Ut(e.target.result);
            t && k.set(t.id, t), o() } for (var s = 0, c = v.length; s < c; s++) { var f = v[s]; if (f._id && Fe(f._id)) o();
            else u.get(f.metadata.id).onsuccess = i } }() })) }() })) }

     function Yt(e, t, n, r, o) { var i, s, a;

      function u(e) { s = e.target.result, i && o(i, s, a) }

      function c(e) { i = e.target.result, s && o(i, s, a) }

      function f(e) { var t = e.target.result; if (!t) return o();
       o([t.key], [t.value], t) } - 1 === r && (r = 1e3), "function" == typeof e.getAll && "function" == typeof e.getAllKeys && r > 1 && !n ? (a = { continue: function() { if (!i.length) return o(); var n, a = i[i.length - 1]; if (t && t.upper) try { n = IDBKeyRange.bound(a, t.upper, !0, t.upperOpen) } catch (e) { if ("DataError" === e.name && 0 === e.code) return o() } else n = IDBKeyRange.lowerBound(a, !0);
        t = n, i = null, s = null, e.getAll(t, r).onsuccess = u, e.getAllKeys(t, r).onsuccess = c } }, e.getAll(t, r).onsuccess = u, e.getAllKeys(t, r).onsuccess = c) : n ? e.openCursor(t, "prev").onsuccess = f : e.openCursor(t).onsuccess = f }

     function Ht(e, t, n) { var r, o, i = "startkey" in e && e.startkey,
       s = "endkey" in e && e.endkey,
       a = "key" in e && e.key,
       u = "keys" in e && e.keys,
       c = e.skip || 0,
       f = "number" == typeof e.limit ? e.limit : -1,
       l = !1 !== e.inclusive_end; if (!u && (o = (r = function(e, t, n, r, o) { try { if (e && t) return o ? IDBKeyRange.bound(t, e, !n, !1) : IDBKeyRange.bound(e, t, !1, !n); if (e) return o ? IDBKeyRange.upperBound(e) : IDBKeyRange.lowerBound(e); if (t) return o ? IDBKeyRange.lowerBound(t, !n) : IDBKeyRange.upperBound(t, !n); if (r) return IDBKeyRange.only(r) } catch (e) { return { error: e } } return null }(i, s, l, a, e.descending)) && r.error) && ("DataError" !== o.name || 0 !== o.code)) return n(H(Q, o.name, o.message)); var d = [Bt, "by-sequence", Tt];
      e.attachments && d.push("attach-store"); var h = Gt(t, d, "readonly"); if (h.error) return n(h.error); var p = h.txn;
      p.oncomplete = function() { e.attachments ? zt(k, e.binary).then(A) : A() }, p.onabort = Rt(n); var v, y, _, g = p.objectStore(Bt),
       m = p.objectStore("by-sequence"),
       b = p.objectStore(Tt),
       w = m.index("_doc_id_rev"),
       k = [];

      function j(t, n) { var r = { id: n.id, key: n.id, value: { rev: t } };
       n.deleted ? u && (k.push(r), r.value.deleted = !0, r.doc = null) : c-- <= 0 && (k.push(r), e.include_docs && function(t, n, r) { var o = t.id + "::" + r;
        w.get(o).onsuccess = function(r) { if (n.doc = Ft(r.target.result) || {}, e.conflicts) { var o = Ce(t);
          o.length && (n.doc._conflicts = o) } Jt(n.doc, e, p) } }(n, r, t)) }

      function O(e) { for (var t = 0, n = e.length; t < n && k.length !== f; t++) { var r = e[t]; if (r.error && u) k.push(r);
        else { var o = Ut(r);
         j(o.winningRev, o) } } }

      function q(e, t, n) { n && (O(t), k.length < f && n.continue()) }

      function A() { var t = { total_rows: v, offset: e.skip, rows: k };
       e.update_seq && void 0 !== y && (t.update_seq = y), n(null, t) } return b.get(Tt).onsuccess = function(e) { v = e.target.result.docCount }, e.update_seq && (_ = function(e) { e.target.result && e.target.result.length > 0 && (y = e.target.result[0]) }, m.openCursor(null, "prev").onsuccess = function(e) { var t = e.target.result,
        n = void 0; return t && t.key && (n = t.key), _({ target: { result: [n] } }) }), o || 0 === f ? void 0 : u ? function(e, t, n) { var r = new Array(e.length),
        o = 0;
       e.forEach((function(i, s) { t.get(i).onsuccess = function(t) { t.target.result ? r[s] = t.target.result : r[s] = { key: i, error: "not_found" }, ++o === e.length && n(e, r, {}) } })) }(e.keys, g, q) : -1 === f ? function(e, t, n) { if ("function" != typeof e.getAll) { var r = [];
        e.openCursor(t).onsuccess = function(e) { var t = e.target.result;
         t ? (r.push(t.value), t.continue()) : n({ target: { result: r } }) } } else e.getAll(t).onsuccess = n }(g, r, (function(t) { var n = t.target.result;
       e.descending && (n = n.reverse()), O(n) })) : void Yt(g, r, e.descending, f + c, q) } var Xt = !1,
      Zt = [];

     function en() {!Xt && Zt.length && (Xt = !0, Zt.shift()()) }

     function tn(e, t, n, r) { if ((e = b(e)).continuous) { var s = n + ":" + Ae(); return Qt.addListener(n, s, t, e), Qt.notify(n), { cancel: function() { Qt.removeListener(n, s) } } } var a = e.doc_ids && new o(e.doc_ids);
      e.since = e.since || 0; var u = e.since,
       c = "limit" in e ? e.limit : -1;
      0 === c && (c = 1); var f, l, d, h, p = [],
       v = 0,
       y = Z(e),
       _ = new i;

      function g(e, t, n, r) { if (n.seq !== t) return r(); if (n.winningRev === e._rev) return r(n, e); var o = e._id + "::" + n.winningRev;
       h.get(o).onsuccess = function(e) { r(n, Ft(e.target.result)) } }

      function m() { e.complete(null, { results: p, last_seq: u }) } var w = [Bt, "by-sequence"];
      e.attachments && w.push("attach-store"); var k = Gt(r, w, "readonly"); if (k.error) return e.complete(k.error);
      (f = k.txn).onabort = Rt(e.complete), f.oncomplete = function() {!e.continuous && e.attachments ? zt(p).then(m) : m() }, l = f.objectStore("by-sequence"), d = f.objectStore(Bt), h = l.index("_doc_id_rev"), Yt(l, e.since && !e.descending ? IDBKeyRange.lowerBound(e.since, !0) : null, e.descending, c, (function(t, n, r) { if (r && t.length) { var o = new Array(t.length),
         i = new Array(t.length),
         s = 0;
        n.forEach((function(n, u) {! function(e, t, n) { if (a && !a.has(e._id)) return n(); var r = _.get(e._id); if (r) return g(e, t, r, n);
          d.get(e._id).onsuccess = function(o) { r = Ut(o.target.result), _.set(e._id, r), g(e, t, r, n) } }(Ft(n), t[u], (function(n, a) { i[u] = n, o[u] = a, ++s === t.length && function() { for (var t = [], n = 0, s = o.length; n < s && v !== c; n++) { var a = o[n]; if (a) { var u = i[n];
             t.push(l(u, a)) } } Promise.all(t).then((function(t) { for (var n = 0, r = t.length; n < r; n++) t[n] && e.onChange(t[n]) })).catch(e.complete), v !== c && r.continue() }() })) })) }

       function l(t, n) { var r = e.processChange(n, t, e);
        u = r.seq = t.seq; var o = y(r); return "object" == typeof o ? Promise.reject(o) : o ? (v++, e.return_docs && p.push(r), e.attachments && e.include_docs ? new Promise((function(t) { Jt(n, e, f, (function() { zt([r], e.binary).then((function() { t(r) })) })) })) : Promise.resolve(r)) : Promise.resolve() } })) } var nn, rn = new i,
      on = new i;

     function sn(e, t) { var n = this;! function(e, t, n) { Zt.push((function() { e((function(e, r) {! function(e, t, n, r) { try { e(t, n) } catch (t) { r.emit("error", t) } }(t, e, r, n), Xt = !1, s((function() { en() })) })) })), en() }((function(t) {! function(e, t, n) { var r = t.name,
         o = null,
         i = null;

        function a(e) { return function(t, n) { t && t instanceof Error && !t.reason && i && (t.reason = i), e(t, n) } }

        function u(e, t) { var n = e.objectStore(Bt);
         n.createIndex("deletedOrLocal", "deletedOrLocal", { unique: !1 }), n.openCursor().onsuccess = function(e) { var r = e.target.result; if (r) { var o = r.value,
            i = Ue(o);
           o.deletedOrLocal = i ? "1" : "0", n.put(o), r.continue() } else t() } }

        function c(e, t) { var n = e.objectStore("local-store"),
          r = e.objectStore(Bt),
          o = e.objectStore("by-sequence");
         r.openCursor().onsuccess = function(e) { var i = e.target.result; if (i) { var s = i.value,
            a = s.id,
            u = Fe(a),
            c = Se(s); if (u) { var f = a + "::" + c,
             l = a + "::",
             d = a + "::~",
             h = o.index("_doc_id_rev"),
             p = IDBKeyRange.bound(l, d, !1, !1),
             v = h.openCursor(p);
            v.onsuccess = function(e) { if (v = e.target.result) { var t = v.value;
              t._doc_id_rev === f && n.put(t), o.delete(v.primaryKey), v.continue() } else r.delete(i.primaryKey), i.continue() } } else i.continue() } else t && t() } }

        function f(e, t) { var n = e.objectStore("by-sequence"),
          r = e.objectStore("attach-store"),
          o = e.objectStore("attach-seq-store");
         r.count().onsuccess = function(e) { if (!e.target.result) return t();
          n.openCursor().onsuccess = function(e) { var n = e.target.result; if (!n) return t(); for (var r = n.value, i = n.primaryKey, s = Object.keys(r._attachments || {}), a = {}, u = 0; u < s.length; u++) { a[r._attachments[s[u]].digest] = !0 } var c = Object.keys(a); for (u = 0; u < c.length; u++) { var f = c[u];
            o.put({ seq: i, digestSeq: f + "::" + i }) } n.continue() } } }

        function l(e) { var t = e.objectStore("by-sequence"),
          n = e.objectStore(Bt);
         n.openCursor().onsuccess = function(e) { var r = e.target.result; if (r) { var o, i = (o = r.value).data ? Ut(o) : (o.deleted = "1" === o.deletedOrLocal, o); if (i.winningRev = i.winningRev || Se(i), i.seq) return s();! function() { var e = i.id + "::",
             n = i.id + "::￿",
             r = t.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e, n)),
             o = 0;
            r.onsuccess = function(e) { var t = e.target.result; if (!t) return i.seq = o, s(); var n = t.primaryKey;
             n > o && (o = n), t.continue() } }() }

          function s() { var e = Nt(i, i.winningRev, i.deleted);
           n.put(e).onsuccess = function() { r.continue() } } } } e._meta = null, e._remote = !1, e.type = function() { return "idb" }, e._id = k((function(t) { t(null, e._meta.instanceId) })), e._bulkDocs = function(n, r, i) { Wt(t, n, r, e, o, a(i)) }, e._get = function(e, t, n) { var r, i, s, a = t.ctx; if (!a) { var u = Gt(o, [Bt, "by-sequence", "attach-store"], "readonly"); if (u.error) return n(u.error);
          a = u.txn }

         function c() { n(s, { doc: r, metadata: i, ctx: a }) } a.objectStore(Bt).get(e).onsuccess = function(e) { if (!(i = Ut(e.target.result))) return s = H(T, "missing"), c(); var n; if (t.rev) n = t.latest ? function(e, t) { for (var n, r = t.rev_tree.slice(); n = r.pop();) { var o = n.pos,
             i = n.ids,
             s = i[0],
             a = i[1],
             u = i[2],
             c = 0 === u.length,
             f = n.history ? n.history.slice() : []; if (f.push({ id: s, pos: o, opts: a }), c)
             for (var l = 0, d = f.length; l < d; l++) { var h = f[l]; if (h.pos + "-" + h.id === e) return o + "-" + s }
            for (var p = 0, v = u.length; p < v; p++) r.push({ pos: o + 1, ids: u[p], history: f }) } throw new Error("Unable to resolve latest revision for id " + t.id + ", rev " + e) }(t.rev, i) : t.rev;
          else if (n = i.winningRev, Ue(i)) return s = H(T, "deleted"), c(); var o = a.objectStore("by-sequence"),
           u = i.id + "::" + n;
          o.index("_doc_id_rev").get(u).onsuccess = function(e) { if ((r = e.target.result) && (r = Ft(r)), !r) return s = H(T, "missing"), c();
           c() } } }, e._getAttachment = function(e, t, n, r, i) { var s; if (r.ctx) s = r.ctx;
         else { var a = Gt(o, [Bt, "by-sequence", "attach-store"], "readonly"); if (a.error) return i(a.error);
          s = a.txn } var u = n.digest,
          c = n.content_type;
         s.objectStore("attach-store").get(u).onsuccess = function(e) { Kt(e.target.result.body, c, r.binary, (function(e) { i(null, e) })) } }, e._info = function(t) { var n, r, i = Gt(o, [Tt, "by-sequence"], "readonly"); if (i.error) return t(i.error); var s = i.txn;
         s.objectStore(Tt).get(Tt).onsuccess = function(e) { r = e.target.result.docCount }, s.objectStore("by-sequence").openCursor(null, "prev").onsuccess = function(e) { var t = e.target.result;
          n = t ? t.key : 0 }, s.oncomplete = function() { t(null, { doc_count: r, update_seq: n, idb_attachment_format: e._meta.blobSupport ? "binary" : "base64" }) } }, e._allDocs = function(e, t) { Ht(e, o, a(t)) }, e._changes = function(t) { return tn(t, e, r, o) }, e._close = function(e) { o.close(), rn.delete(r), e() }, e._getRevisionTree = function(e, t) { var n = Gt(o, [Bt], "readonly"); if (n.error) return t(n.error);
         n.txn.objectStore(Bt).get(e).onsuccess = function(e) { var n = Ut(e.target.result);
          n ? t(null, n.rev_tree) : t(H(T)) } }, e._doCompaction = function(e, t, n) { var r = Gt(o, [Bt, "by-sequence", "attach-store", "attach-seq-store"], "readwrite"); if (r.error) return n(r.error); var i = r.txn;
         i.objectStore(Bt).get(e).onsuccess = function(n) { var r = Ut(n.target.result);
          xe(r.rev_tree, (function(e, n, r, o, i) { var s = n + "-" + r; - 1 !== t.indexOf(s) && (i.status = "missing") })), Vt(t, e, i); var o = r.winningRev,
           s = r.deleted;
          i.objectStore(Bt).put(Nt(r, o, s)) }, i.onabort = Rt(n), i.oncomplete = function() { n() } }, e._getLocal = function(e, t) { var n = Gt(o, ["local-store"], "readonly"); if (n.error) return t(n.error); var r = n.txn.objectStore("local-store").get(e);
         r.onerror = Rt(t), r.onsuccess = function(e) { var n = e.target.result;
          n ? (delete n._doc_id_rev, t(null, n)) : t(H(T)) } }, e._putLocal = function(e, t, n) { "function" == typeof t && (n = t, t = {}), delete e._revisions; var r = e._rev,
          i = e._id;
         e._rev = r ? "0-" + (parseInt(r.split("-")[1], 10) + 1) : "0-1"; var s, a = t.ctx; if (!a) { var u = Gt(o, ["local-store"], "readwrite"); if (u.error) return n(u.error);
          (a = u.txn).onerror = Rt(n), a.oncomplete = function() { s && n(null, s) } } var c, f = a.objectStore("local-store");
         r ? (c = f.get(i)).onsuccess = function(o) { var i = o.target.result;
          i && i._rev === r ? f.put(e).onsuccess = function() { s = { ok: !0, id: e._id, rev: e._rev }, t.ctx && n(null, s) } : n(H(M)) } : ((c = f.add(e)).onerror = function(e) { n(H(M)), e.preventDefault(), e.stopPropagation() }, c.onsuccess = function() { s = { ok: !0, id: e._id, rev: e._rev }, t.ctx && n(null, s) }) }, e._removeLocal = function(e, t, n) { "function" == typeof t && (n = t, t = {}); var r, i = t.ctx; if (!i) { var s = Gt(o, ["local-store"], "readwrite"); if (s.error) return n(s.error);
          (i = s.txn).oncomplete = function() { r && n(null, r) } } var a = e._id,
          u = i.objectStore("local-store"),
          c = u.get(a);
         c.onerror = Rt(n), c.onsuccess = function(o) { var i = o.target.result;
          i && i._rev === e._rev ? (u.delete(a), r = { ok: !0, id: a, rev: "0-0" }, t.ctx && n(null, r)) : n(H(T)) } }, e._destroy = function(e, t) { Qt.removeAllListeners(r); var n = on.get(r);
         n && n.result && (n.result.close(), rn.delete(r)); var o = indexedDB.deleteDatabase(r);
         o.onsuccess = function() { on.delete(r), E() && r in localStorage && delete localStorage[r], t(null, { ok: !0 }) }, o.onerror = Rt(t) }; var d = rn.get(r); if (d) return o = d.idb, e._meta = d.global, s((function() { n(null, e) })); var h = indexedDB.open(r, 5);
        on.set(r, h), h.onupgradeneeded = function(e) { var t = e.target.result; if (e.oldVersion < 1) return function(e) { var t = e.createObjectStore(Bt, { keyPath: "id" });
          e.createObjectStore("by-sequence", { autoIncrement: !0 }).createIndex("_doc_id_rev", "_doc_id_rev", { unique: !0 }), e.createObjectStore("attach-store", { keyPath: "digest" }), e.createObjectStore(Tt, { keyPath: "id", autoIncrement: !1 }), e.createObjectStore("detect-blob-support"), t.createIndex("deletedOrLocal", "deletedOrLocal", { unique: !1 }), e.createObjectStore("local-store", { keyPath: "_id" }); var n = e.createObjectStore("attach-seq-store", { autoIncrement: !0 });
          n.createIndex("seq", "seq"), n.createIndex("digestSeq", "digestSeq", { unique: !0 }) }(t); var n = e.currentTarget.transaction;
         e.oldVersion < 3 && function(e) { e.createObjectStore("local-store", { keyPath: "_id" }).createIndex("_doc_id_rev", "_doc_id_rev", { unique: !0 }) }(t), e.oldVersion < 4 && function(e) { var t = e.createObjectStore("attach-seq-store", { autoIncrement: !0 });
          t.createIndex("seq", "seq"), t.createIndex("digestSeq", "digestSeq", { unique: !0 }) }(t); var r = [u, c, f, l],
          o = e.oldVersion;! function e() { var t = r[o - 1];
          o++, t && t(n, e) }() }, h.onsuccess = function(t) {
         (o = t.target.result).onversionchange = function() { o.close(), rn.delete(r) }, o.onabort = function(e) { C("error", "Database has a global failure", e.target.error), i = e.target.error, o.close(), rn.delete(r) }; var s, a, u, c, f = o.transaction([Tt, "detect-blob-support", Bt], "readwrite"),
          l = !1;

         function d() { void 0 !== u && l && (e._meta = { name: r, instanceId: c, blobSupport: u }, rn.set(r, { idb: o, global: e._meta }), n(null, e)) }

         function h() { if (void 0 !== a && void 0 !== s) { var e = r + "_id";
           e in s ? c = s[e] : s[e] = c = Ae(), s.docCount = a, f.objectStore(Tt).put(s) } } f.objectStore(Tt).get(Tt).onsuccess = function(e) { s = e.target.result || { id: Tt }, h() },
          function(e, t) { e.objectStore(Bt).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess = function(e) { t(e.target.result) } }(f, (function(e) { a = e, h() })), nn || (nn = function(e) { return new Promise((function(t) { var n = he([""]),
             r = e.objectStore("detect-blob-support").put(n, "key");
            r.onsuccess = function() { var e = navigator.userAgent.match(/Chrome\/(\d+)/),
              n = navigator.userAgent.match(/Edge\//);
             t(n || !e || parseInt(e[1], 10) >= 43) }, r.onerror = e.onabort = function(e) { e.preventDefault(), e.stopPropagation(), t(!1) } })).catch((function() { return !1 })) }(f)), nn.then((function(e) { u = e, d() })), f.oncomplete = function() { l = !0, d() }, f.onabort = Rt(n) }, h.onerror = function(e) { var t = e.target.error && e.target.error.message;
         t ? -1 !== t.indexOf("stored database is a higher version") && (t = new Error('This DB was created with the newer "indexeddb" adapter, but you are trying to open it with the older "idb" adapter')) : t = "Failed to open indexedDB, are you in private browsing mode?", C("error", t), n(H(Q, t)) } }(n, e, t) }), t, n.constructor) } sn.valid = function() { try { return "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange } catch (e) { return !1 } }; var an = {};

     function un(e) { var t = e.doc || e.ok,
       n = t && t._attachments;
      n && Object.keys(n).forEach((function(e) { var t = n[e];
       t.data = ye(t.data, t.content_type) })) }

     function cn(e) { return /^_design/.test(e) ? "_design/" + encodeURIComponent(e.slice(8)) : /^_local/.test(e) ? "_local/" + encodeURIComponent(e.slice(7)) : encodeURIComponent(e) }

     function fn(e) { return e._attachments && Object.keys(e._attachments) ? Promise.all(Object.keys(e._attachments).map((function(t) { var n = e._attachments[t]; if (n.data && "string" != typeof n.data) return new Promise((function(e) { me(n.data, e) })).then((function(e) { n.data = e })) }))) : Promise.resolve() }

     function ln(e, t) { if (function(e) { if (!e.prefix) return !1; var t = ue(e.prefix).protocol; return "http" === t || "https" === t }(t)) { var n = t.name.substr(t.prefix.length);
       e = t.prefix.replace(/\/?$/, "/") + encodeURIComponent(n) } var r = ue(e);
      (r.user || r.password) && (r.auth = { username: r.user, password: r.password }); var o = r.path.replace(/(^\/|\/$)/g, "").split("/"); return r.db = o.pop(), -1 === r.db.indexOf("%") && (r.db = encodeURIComponent(r.db)), r.path = o.join("/"), r }

     function dn(e, t) { return hn(e, e.db + "/" + t) }

     function hn(e, t) { var n = e.path ? "/" : ""; return e.protocol + "://" + e.host + (e.port ? ":" + e.port : "") + "/" + e.path + n + t }

     function pn(e) { return "?" + Object.keys(e).map((function(t) { return t + "=" + encodeURIComponent(e[t]) })).join("&") }

     function vn(e, t) { var r = this,
       o = ln(e.name, e),
       i = dn(o, "");
      e = b(e); var a, u = function(t, n) { if ((n = n || {}).headers = n.headers || new Ze, n.credentials = "include", e.auth || o.auth) { var r = e.auth || o.auth,
         i = r.username + ":" + r.password,
         s = de(unescape(encodeURIComponent(i)));
        n.headers.set("Authorization", "Basic " + s) } var a = e.headers || {}; return Object.keys(a).forEach((function(e) { n.headers.append(e, a[e]) })),
        function(e) { var t = "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
          n = -1 !== t.indexOf("msie"),
          r = -1 !== t.indexOf("trident"),
          o = -1 !== t.indexOf("edge"),
          i = !("method" in e) || "GET" === e.method; return (n || r || o) && i }(n) && (t += (-1 === t.indexOf("?") ? "?" : "&") + "_nonce=" + Date.now()), (e.fetch || Xe)(t, n) };

      function c(e, t) { return j(e, f((function(e) { d().then((function() { return t.apply(this, e) })).catch((function(t) { e.pop()(t) })) }))).bind(r) }

      function l(e, t, n) { var r = {}; return (t = t || {}).headers = t.headers || new Ze, t.headers.get("Content-Type") || t.headers.set("Content-Type", "application/json"), t.headers.get("Accept") || t.headers.set("Accept", "application/json"), u(e, t).then((function(e) { return r.ok = e.ok, r.status = e.status, e.json() })).then((function(e) { if (r.data = e, !r.ok) { r.data.status = r.status; var t = X(r.data); if (n) return n(t); throw t } if (Array.isArray(r.data) && (r.data = r.data.map((function(e) { return e.error || e.missing ? X(e) : e }))), !n) return r;
        n(null, r.data) })) }

      function d() { return e.skip_setup ? Promise.resolve() : a || ((a = l(i).catch((function(e) { return e && e.status && 404 === e.status ? ($(404, "PouchDB is just detecting if the remote exists."), l(i, { method: "PUT" })) : Promise.reject(e) })).catch((function(e) { return !(!e || !e.status || 412 !== e.status) || Promise.reject(e) }))).catch((function() { a = null })), a) }

      function h(e) { return e.split("/").map(encodeURIComponent).join("/") } s((function() { t(null, r) })), r._remote = !0, r.type = function() { return "http" }, r.id = c("id", (function(e) { u(hn(o, "")).then((function(e) { return e.json() })).catch((function() { return {} })).then((function(t) { var n = t && t.uuid ? t.uuid + o.db : dn(o, "");
        e(null, n) })) })), r.compact = c("compact", (function(e, t) { "function" == typeof e && (t = e, e = {}), e = b(e), l(dn(o, "_compact"), { method: "POST" }).then((function() {! function n() { r.info((function(r, o) { o && !o.compact_running ? t(null, { ok: !0 }) : setTimeout(n, e.interval || 200) })) }() })) })), r.bulkGet = j("bulkGet", (function(e, t) { var n = this;

       function r(t) { var n = {};
        e.revs && (n.revs = !0), e.attachments && (n.attachments = !0), e.latest && (n.latest = !0), l(dn(o, "_bulk_get" + pn(n)), { method: "POST", body: JSON.stringify({ docs: e.docs }) }).then((function(n) { e.attachments && e.binary && n.data.results.forEach((function(e) { e.docs.forEach(un) })), t(null, n.data) })).catch(t) }

       function i() { var r = Math.ceil(e.docs.length / 50),
         o = 0,
         i = new Array(r);

        function s(e) { return function(n, s) { i[e] = s.results, ++o === r && t(null, { results: ee(i) }) } } for (var a = 0; a < r; a++) { var u = O(e, ["revs", "attachments", "binary", "latest"]);
         u.docs = e.docs.slice(50 * a, Math.min(e.docs.length, 50 * (a + 1))), x(n, u, s(a)) } } var s = hn(o, ""),
        a = an[s]; "boolean" != typeof a ? r((function(e, n) { e ? (an[s] = !1, $(e.status, "PouchDB is just detecting if the remote supports the _bulk_get API."), i()) : (an[s] = !0, t(null, n)) })) : a ? r(t) : i() })), r._info = function(e) { d().then((function() { return u(dn(o, "")) })).then((function(e) { return e.json() })).then((function(t) { t.host = dn(o, ""), e(null, t) })).catch(e) }, r.fetch = function(e, t) { return d().then((function() { var n = "/" === e.substring(0, 1) ? hn(o, e.substring(1)) : dn(o, e); return u(n, t) })) }, r.get = c("get", (function(e, t, n) { "function" == typeof t && (n = t, t = {}); var r = {};

       function i(e) { var n = e._attachments,
         r = n && Object.keys(n); if (n && r.length) return function(e, t) { return new Promise((function(n, r) { var o, i = 0,
           s = 0,
           a = 0,
           u = e.length;

          function c() {++a === u ? o ? r(o) : n() : d() }

          function f() { i--, c() }

          function l(e) { i--, o = o || e, c() }

          function d() { for (; i < t && s < u;) i++, e[s++]().then(f, l) } d() })) }(r.map((function(r) { return function() { return function(r) { var i = n[r],
            s = cn(e._id) + "/" + h(r) + "?rev=" + e._rev; return u(dn(o, s)).then((function(e) { return "buffer" in e ? e.buffer() : e.blob() })).then((function(e) { if (t.binary) { var n = Object.getOwnPropertyDescriptor(e.__proto__, "type"); return n && !n.set || (e.type = i.content_type), e } return new Promise((function(t) { me(e, t) })) })).then((function(e) { delete i.stub, delete i.length, i.data = e })) }(r) } })), 5) }(t = b(t)).revs && (r.revs = !0), t.revs_info && (r.revs_info = !0), t.latest && (r.latest = !0), t.open_revs && ("all" !== t.open_revs && (t.open_revs = JSON.stringify(t.open_revs)), r.open_revs = t.open_revs), t.rev && (r.rev = t.rev), t.conflicts && (r.conflicts = t.conflicts), t.update_seq && (r.update_seq = t.update_seq), e = cn(e), l(dn(o, e + pn(r))).then((function(e) { return Promise.resolve().then((function() { if (t.attachments) return n = e.data, Array.isArray(n) ? Promise.all(n.map((function(e) { if (e.ok) return i(e.ok) }))) : i(n); var n })).then((function() { n(null, e.data) })) })).catch((function(t) { t.docId = e, n(t) })) })), r.remove = c("remove", (function(e, t, n, r) { var i; "string" == typeof t ? (i = { _id: e, _rev: t }, "function" == typeof n && (r = n, n = {})) : (i = e, "function" == typeof t ? (r = t, n = {}) : (r = n, n = t)); var s = i._rev || n.rev;
       l(dn(o, cn(i._id)) + "?rev=" + s, { method: "DELETE" }, r).catch(r) })), r.getAttachment = c("getAttachment", (function(e, t, r, i) { "function" == typeof r && (i = r, r = {}); var s, a = r.rev ? "?rev=" + r.rev : "",
        c = dn(o, cn(e)) + "/" + h(t) + a;
       u(c, { method: "GET" }).then((function(e) { if (s = e.headers.get("content-type"), e.ok) return void 0 === n || n.browser || "function" != typeof e.buffer ? e.blob() : e.buffer(); throw e })).then((function(e) { void 0 === n || n.browser || (e.type = s), i(null, e) })).catch((function(e) { i(e) })) })), r.removeAttachment = c("removeAttachment", (function(e, t, n, r) { l(dn(o, cn(e) + "/" + h(t)) + "?rev=" + n, { method: "DELETE" }, r).catch(r) })), r.putAttachment = c("putAttachment", (function(e, t, n, r, i, s) { "function" == typeof i && (s = i, i = r, r = n, n = null); var a = cn(e) + "/" + h(t),
        u = dn(o, a); if (n && (u += "?rev=" + n), "string" == typeof r) { var c; try { c = le(r) } catch (e) { return s(H(K, "Attachment is not a valid base64 string")) } r = c ? ve(c, i) : "" } l(u, { headers: new Ze({ "Content-Type": i }), method: "PUT", body: r }, s).catch(s) })), r._bulkDocs = function(e, t, n) { e.new_edits = t.new_edits, d().then((function() { return Promise.all(e.docs.map(fn)) })).then((function() { return l(dn(o, "_bulk_docs"), { method: "POST", body: JSON.stringify(e) }, n) })).catch(n) }, r._put = function(e, t, n) { d().then((function() { return fn(e) })).then((function() { return l(dn(o, cn(e._id)), { method: "PUT", body: JSON.stringify(e) }) })).then((function(e) { n(null, e.data) })).catch((function(t) { t.docId = e && e._id, n(t) })) }, r.allDocs = c("allDocs", (function(e, t) { "function" == typeof e && (t = e, e = {}); var n, r = {},
        i = "GET";
       (e = b(e)).conflicts && (r.conflicts = !0), e.update_seq && (r.update_seq = !0), e.descending && (r.descending = !0), e.include_docs && (r.include_docs = !0), e.attachments && (r.attachments = !0), e.key && (r.key = JSON.stringify(e.key)), e.start_key && (e.startkey = e.start_key), e.startkey && (r.startkey = JSON.stringify(e.startkey)), e.end_key && (e.endkey = e.end_key), e.endkey && (r.endkey = JSON.stringify(e.endkey)), void 0 !== e.inclusive_end && (r.inclusive_end = !!e.inclusive_end), void 0 !== e.limit && (r.limit = e.limit), void 0 !== e.skip && (r.skip = e.skip); var s = pn(r);
       void 0 !== e.keys && (i = "POST", n = { keys: e.keys }), l(dn(o, "_all_docs" + s), { method: i, body: JSON.stringify(n) }).then((function(n) { e.include_docs && e.attachments && e.binary && n.data.rows.forEach(un), t(null, n.data) })).catch(t) })), r._changes = function(e) { var t = "batch_size" in e ? e.batch_size : 25;
       (e = b(e)).continuous && !("heartbeat" in e) && (e.heartbeat = 1e4); var n = "timeout" in e ? e.timeout : 3e4; "timeout" in e && e.timeout && n - e.timeout < 5e3 && (n = e.timeout + 5e3), "heartbeat" in e && e.heartbeat && n - e.heartbeat < 5e3 && (n = e.heartbeat + 5e3); var r = {}; "timeout" in e && e.timeout && (r.timeout = e.timeout); var i = void 0 !== e.limit && e.limit,
        a = i; if (e.style && (r.style = e.style), (e.include_docs || e.filter && "function" == typeof e.filter) && (r.include_docs = !0), e.attachments && (r.attachments = !0), e.continuous && (r.feed = "longpoll"), e.seq_interval && (r.seq_interval = e.seq_interval), e.conflicts && (r.conflicts = !0), e.descending && (r.descending = !0), e.update_seq && (r.update_seq = !0), "heartbeat" in e && e.heartbeat && (r.heartbeat = e.heartbeat), e.filter && "string" == typeof e.filter && (r.filter = e.filter), e.view && "string" == typeof e.view && (r.filter = "_view", r.view = e.view), e.query_params && "object" == typeof e.query_params)
        for (var u in e.query_params) Object.prototype.hasOwnProperty.call(e.query_params, u) && (r[u] = e.query_params[u]); var c, f = "GET";
       e.doc_ids ? (r.filter = "_doc_ids", f = "POST", c = { doc_ids: e.doc_ids }) : e.selector && (r.filter = "_selector", f = "POST", c = { selector: e.selector }); var h, p = new He,
        v = function(n, s) { if (!e.aborted) { r.since = n, "object" == typeof r.since && (r.since = JSON.stringify(r.since)), e.descending ? i && (r.limit = a) : r.limit = !i || a > t ? t : a; var u = dn(o, "_changes" + pn(r)),
           v = { signal: p.signal, method: f, body: JSON.stringify(c) };
          h = n, e.aborted || d().then((function() { return l(u, v, s) })).catch(s) } },
        y = { results: [] },
        _ = function(n, r) { if (!e.aborted) { var o = 0; if (r && r.results) { o = r.results.length, y.last_seq = r.last_seq; var u = null,
            c = null; "number" == typeof r.pending && (u = r.pending), "string" != typeof y.last_seq && "number" != typeof y.last_seq || (c = y.last_seq);
           e.query_params, r.results = r.results.filter((function(t) { a--; var n = Z(e)(t); return n && (e.include_docs && e.attachments && e.binary && un(t), e.return_docs && y.results.push(t), e.onChange(t, u, c)), n })) } else if (n) return e.aborted = !0, void e.complete(n);
          r && r.last_seq && (h = r.last_seq); var f = i && a <= 0 || r && o < t || e.descending;
          (!e.continuous || i && a <= 0) && f ? e.complete(null, y) : s((function() { v(h, _) })) } }; return v(e.since || 0, _), { cancel: function() { e.aborted = !0, p.abort() } } }, r.revsDiff = c("revsDiff", (function(e, t, n) { "function" == typeof t && (n = t, t = {}), l(dn(o, "_revs_diff"), { method: "POST", body: JSON.stringify(e) }, n).catch(n) })), r._close = function(e) { e() }, r._destroy = function(e, t) { l(dn(o, ""), { method: "DELETE" }).then((function(e) { t(null, e) })).catch((function(e) { 404 === e.status ? t(null, { ok: !0 }) : t(e) })) } }

     function yn(e) { this.status = 400, this.name = "query_parse_error", this.message = e, this.error = !0; try { Error.captureStackTrace(this, yn) } catch (e) {} }

     function _n(e) { this.status = 404, this.name = "not_found", this.message = e, this.error = !0; try { Error.captureStackTrace(this, _n) } catch (e) {} }

     function gn(e) { this.status = 500, this.name = "invalid_value", this.message = e, this.error = !0; try { Error.captureStackTrace(this, gn) } catch (e) {} }

     function mn(e, t) { return t && e.then((function(e) { s((function() { t(null, e) })) }), (function(e) { s((function() { t(e) })) })), e }

     function bn(e, t) { return function() { var n = arguments,
        r = this; return e.add((function() { return t.apply(r, n) })) } }

     function wn(e) { var t = new o(e),
       n = new Array(t.size),
       r = -1; return t.forEach((function(e) { n[++r] = e })), n }

     function kn(e) { var t = new Array(e.size),
       n = -1; return e.forEach((function(e, r) { t[++n] = r })), t }

     function jn(e) { return new gn("builtin " + e + " function requires map values to be numbers or number arrays") }

     function On(e) { for (var t = 0, n = 0, r = e.length; n < r; n++) { var o = e[n]; if ("number" != typeof o) { if (!Array.isArray(o)) throw jn("_sum");
        t = "number" == typeof t ? [t] : t; for (var i = 0, s = o.length; i < s; i++) { var a = o[i]; if ("number" != typeof a) throw jn("_sum");
         void 0 === t[i] ? t.push(a) : t[i] += a } } else "number" == typeof t ? t += o : t[0] += o } return t } vn.valid = function() { return !0 }, l(yn, Error), l(_n, Error), l(gn, Error); var qn = C.bind(null, "log"),
      An = Array.isArray,
      Sn = JSON.parse;

     function xn(e, t) { return ce("return (" + e.replace(/;\s*$/, "") + ");", { emit: t, sum: On, log: qn, isArray: An, toJSON: Sn }) }

     function En() { this.promise = new Promise((function(e) { e() })) }

     function Pn(e) { if (!e) return "undefined"; switch (typeof e) {
       case "function":
       case "string":
        return e.toString();
       default:
        return JSON.stringify(e) } }

     function Cn(e, t, n, r, o, i) { var s, a = function(e, t) { return Pn(e) + Pn(t) + "undefined" }(n, r); if (!o && (s = e._cachedViews = e._cachedViews || {})[a]) return s[a]; var u = e.info().then((function(u) { var c = u.db_name + "-mrview-" + (o ? "temp" : Oe(a)); return fe(e, "_local/" + i, (function(e) { e.views = e.views || {}; var n = t; - 1 === n.indexOf("/") && (n = t + "/" + t); var r = e.views[n] = e.views[n] || {}; if (!r[c]) return r[c] = !0, e })).then((function() { return e.registerDependentDatabase(c).then((function(t) { var o = t.db;
         o.auto_compaction = !0; var i = { name: c, db: o, sourceDB: e, adapter: e.adapter, mapFun: n, reduceFun: r }; return i.db.get("_local/lastSeq").catch((function(e) { if (404 !== e.status) throw e })).then((function(e) { return i.seq = e ? e.seq : 0, s && i.db.once("destroyed", (function() { delete s[a] })), i })) })) })) })); return s && (s[a] = u), u } En.prototype.add = function(e) { return this.promise = this.promise.catch((function() {})).then((function() { return e() })), this.promise }, En.prototype.finish = function() { return this.promise }; var Ln = {},
      $n = new En;

     function Dn(e) { return -1 === e.indexOf("/") ? [e, e] : e.split("/") }

     function In(e, t) { try { e.emit("error", t) } catch (e) { C("error", "The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."), C("error", t) } } var Bn = function(e, t) { return On(t) },
      Tn = function(e, t) { return t.length },
      Mn = function(e, t) { return { sum: On(t), min: Math.min.apply(null, t), max: Math.max.apply(null, t), count: t.length, sumsqr: function(e) { for (var t = 0, n = 0, r = e.length; n < r; n++) { var o = e[n];
          t += o * o } return t }(t) } }; var Rn = function(e, t, n, r) {
      function a(e, t, n) { try { t(n) } catch (t) { In(e, t) } }

      function u(e, t, n, r, o) { try { return { output: t(n, r, o) } } catch (t) { return In(e, t), { error: t } } }

      function c(e, t) { var n = ut(e.key, t.key); return 0 !== n ? n : ut(e.value, t.value) }

      function l(e, t, n) { return n = n || 0, "number" == typeof t ? e.slice(n, t + n) : n > 0 ? e.slice(n) : e }

      function d(e) { var t = e.value; return t && "object" == typeof t && t._id || e.id }

      function h(e) { return function(t) { return e.include_docs && e.attachments && e.binary && function(e) { e.rows.forEach((function(e) { var t = e.doc && e.doc._attachments;
          t && Object.keys(t).forEach((function(e) { var n = t[e];
           t[e].data = ye(n.data, n.content_type) })) })) }(t), t } }

      function p(e, t, n, r) { var o = t[e];
       void 0 !== o && (r && (o = encodeURIComponent(JSON.stringify(o))), n.push(e + "=" + o)) }

      function v(e) { if (void 0 !== e) { var t = Number(e); return isNaN(t) || t !== parseInt(e, 10) ? e : t } }

      function y(e, t) { var n = e.descending ? "endkey" : "startkey",
        r = e.descending ? "startkey" : "endkey"; if (void 0 !== e[n] && void 0 !== e[r] && ut(e[n], e[r]) > 0) throw new yn("No rows can match your key range, reverse your start_key and end_key or set {descending : true}"); if (t.reduce && !1 !== e.reduce) { if (e.include_docs) throw new yn("{include_docs:true} is invalid for reduce"); if (e.keys && e.keys.length > 1 && !e.group && !e.group_level) throw new yn("Multi-key fetches for reduce views must use {group: true}") } ["group_level", "limit", "skip"].forEach((function(t) { var n = function(e) { if (e) { if ("number" != typeof e) return new yn('Invalid value for integer: "' + e + '"'); if (e < 0) return new yn('Invalid value for positive integer: "' + e + '"') } }(e[t]); if (n) throw n })) }

      function _(e) { return function(t) { if (404 === t.status) return e; throw t } }

      function g(e, t, n) { var r = "_local/doc_" + e,
        i = { _id: r, keys: [] },
        s = n.get(e),
        a = s[0]; return (function(e) { return 1 === e.length && /^1-/.test(e[0].rev) }(s[1]) ? Promise.resolve(i) : t.db.get(r).catch(_(i))).then((function(e) { return function(e) { return e.keys.length ? t.db.allDocs({ keys: e.keys, include_docs: !0 }) : Promise.resolve({ rows: [] }) }(e).then((function(t) { return function(e, t) { for (var n = [], r = new o, i = 0, s = t.rows.length; i < s; i++) { var u = t.rows[i].doc; if (u && (n.push(u), r.add(u._id), u._deleted = !a.has(u._id), !u._deleted)) { var c = a.get(u._id); "value" in c && (u.value = c.value) } } var f = kn(a); return f.forEach((function(e) { if (!r.has(e)) { var t = { _id: e },
             o = a.get(e); "value" in o && (t.value = o.value), n.push(t) } })), e.keys = wn(f.concat(e.keys)), n.push(e), n }(e, t) })) })) }

      function m(e) { var t = "string" == typeof e ? e : e.name,
        n = Ln[t]; return n || (n = Ln[t] = new En), n }

      function b(e, n) { return bn(m(e), (function() { return function(e, n) { var r, o; var s = t(e.mapFun, (function(e, t) { var n = { id: o._id, key: ct(e) };
           null != t && (n.value = ct(t)), r.push(n) })),
          u = e.seq || 0;

         function f(t, n) { return function() { return function(e, t, n) { return e.db.get("_local/lastSeq").catch(_({ _id: "_local/lastSeq", seq: 0 })).then((function(r) { var o = kn(t); return Promise.all(o.map((function(n) { return g(n, e, t) }))).then((function(t) { var o = ee(t); return r.seq = n, o.push(r), e.db.bulkDocs({ docs: o }) })) })) }(e, t, n) } } let l = 0,
          d = { view: e.name, indexed_docs: l };
         e.sourceDB.emit("indexing", d); var h = new En;

         function p() { return e.sourceDB.changes({ return_docs: !0, conflicts: !0, include_docs: !0, style: "all_docs", since: u, limit: n.changes_batch_size }).then(v) }

         function v(t) { var d = t.results; if (!d.length) return; var v = function(t) { for (var n = new i, f = 0, l = t.length; f < l; f++) { var d = t[f]; if ("_" !== d.doc._id[0]) { r = [], (o = d.doc)._deleted || a(e.sourceDB, s, o), r.sort(c); var h = y(r);
             n.set(d.doc._id, [h, d.changes]) } u = d.seq } return n }(d);
          h.add(f(v, u)), l += d.length; let _ = { view: e.name, last_seq: t.last_seq, results_count: d.length, indexed_docs: l }; return e.sourceDB.emit("indexing", _), d.length < n.changes_batch_size ? void 0 : p() }

         function y(e) { for (var t, n = new i, r = 0, o = e.length; r < o; r++) { var s = e[r],
            a = [s.key, s.id];
           r > 0 && 0 === ut(s.key, t) && a.push(r), n.set(lt(a), s), t = s.key } return n } return p().then((function() { return h.finish() })).then((function() { e.seq = u })) }(e, n) }))() }

      function w(e, t) { return bn(m(e), (function() { return function(e, t) { var r, o = e.reduceFun && !1 !== t.reduce,
          s = t.skip || 0;
         void 0 === t.keys || t.keys.length || (t.limit = 0, delete t.keys);

         function a(t) { return t.include_docs = !0, e.db.allDocs(t).then((function(e) { return r = e.total_rows, e.rows.map((function(e) { if ("value" in e.doc && "object" == typeof e.doc.value && null !== e.doc.value) { var t = Object.keys(e.doc.value).sort(),
              n = ["id", "key", "value"]; if (!(t < n || t > n)) return e.doc.value } var r = function(e) { for (var t = [], n = [], r = 0;;) { var o = e[r++]; if ("\0" !== o) switch (o) {
               case "1":
                t.push(null); break;
               case "2":
                t.push("1" === e[r]), r++; break;
               case "3":
                var i = dt(e, r);
                t.push(i.num), r += i.length; break;
               case "4":
                for (var s = "";;) { var a = e[r]; if ("\0" === a) break;
                 s += a, r++ } s = s.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "").replace(/\u0002\u0002/g, ""), t.push(s); break;
               case "5":
                var u = { element: [], index: t.length };
                t.push(u.element), n.push(u); break;
               case "6":
                var c = { element: {}, index: t.length };
                t.push(c.element), n.push(c); break;
               default:
                throw new Error("bad collationIndex or unexpectedly reached end of input: " + o) } else { if (1 === t.length) return t.pop();
               ht(t, n) } } }(e.doc._id); return { key: r[0], id: r[1], value: "value" in e.doc ? e.doc.value : null } })) })) }

         function c(a) { var c; if (c = o ? function(e, t, r) { 0 === r.group_level && delete r.group_level; var o = r.group || r.group_level,
             i = n(e.reduceFun),
             s = [],
             a = isNaN(r.group_level) ? Number.POSITIVE_INFINITY : r.group_level;
            t.forEach((function(e) { var t = s[s.length - 1],
              n = o ? e.key : null; if (o && Array.isArray(n) && (n = n.slice(0, a)), t && 0 === ut(t.groupKey, n)) return t.keys.push([e.key, e.id]), void t.values.push(e.value);
             s.push({ keys: [[e.key, e.id]], values: [e.value], groupKey: n }) })), t = []; for (var c = 0, f = s.length; c < f; c++) { var d = s[c],
              h = u(e.sourceDB, i, d.keys, d.values, !1); if (h.error && h.error instanceof gn) throw h.error;
             t.push({ value: h.error ? null : h.output, key: d.groupKey }) } return { rows: l(t, r.limit, r.skip) } }(e, a, t) : void 0 === t.keys ? { total_rows: r, offset: s, rows: a } : { total_rows: r, offset: s, rows: l(a, t.limit, t.skip) }, t.update_seq && (c.update_seq = e.seq), t.include_docs) { var f = wn(a.map(d)); return e.sourceDB.allDocs({ keys: f, include_docs: !0, conflicts: t.conflicts, attachments: t.attachments, binary: t.binary }).then((function(e) { var t = new i; return e.rows.forEach((function(e) { t.set(e.id, e.doc) })), a.forEach((function(e) { var n = d(e),
              r = t.get(n);
             r && (e.doc = r) })), c })) } return c } if (void 0 !== t.keys) { var f = t.keys.map((function(e) { var n = { startkey: lt([e]), endkey: lt([e, {}]) }; return t.update_seq && (n.update_seq = !0), a(n) })); return Promise.all(f).then(ee).then(c) } var h, p, v = { descending: t.descending }; if (t.update_seq && (v.update_seq = !0), "start_key" in t && (h = t.start_key), "startkey" in t && (h = t.startkey), "end_key" in t && (p = t.end_key), "endkey" in t && (p = t.endkey), void 0 !== h && (v.startkey = t.descending ? lt([h, {}]) : lt([h])), void 0 !== p) { var y = !1 !== t.inclusive_end;
          t.descending && (y = !y), v.endkey = lt(y ? [p, {}] : [p]) } if (void 0 !== t.key) { var _ = lt([t.key]),
           g = lt([t.key, {}]);
          v.descending ? (v.endkey = _, v.startkey = g) : (v.startkey = _, v.endkey = g) } return o || ("number" == typeof t.limit && (v.limit = t.limit), v.skip = s), a(v).then(c) }(e, t) }))() }

      function k(t, n, o) { if ("function" == typeof t._query) return function(e, t, n) { return new Promise((function(r, o) { e._query(t, n, (function(e, t) { if (e) return o(e);
          r(t) })) })) }(t, n, o); if (ne(t)) return function(e, t, n) { var r, o, i, s = [],
         a = "GET"; if (p("reduce", n, s), p("include_docs", n, s), p("attachments", n, s), p("limit", n, s), p("descending", n, s), p("group", n, s), p("group_level", n, s), p("skip", n, s), p("stale", n, s), p("conflicts", n, s), p("startkey", n, s, !0), p("start_key", n, s, !0), p("endkey", n, s, !0), p("end_key", n, s, !0), p("inclusive_end", n, s), p("key", n, s, !0), p("update_seq", n, s), s = "" === (s = s.join("&")) ? "" : "?" + s, void 0 !== n.keys) { var u = "keys=" + encodeURIComponent(JSON.stringify(n.keys));
         u.length + s.length + 1 <= 2e3 ? s += ("?" === s[0] ? "&" : "?") + u : (a = "POST", "string" == typeof t ? r = { keys: n.keys } : t.keys = n.keys) } if ("string" == typeof t) { var c = Dn(t); return e.fetch("_design/" + c[0] + "/_view/" + c[1] + s, { headers: new Ze({ "Content-Type": "application/json" }), method: a, body: JSON.stringify(r) }).then((function(e) { return o = e.ok, i = e.status, e.json() })).then((function(e) { if (!o) throw e.status = i, X(e); return e.rows.forEach((function(e) { if (e.value && e.value.error && "builtin_reduce_error" === e.value.error) throw new Error(e.reason) })), e })).then(h(n)) } return r = r || {}, Object.keys(t).forEach((function(e) { Array.isArray(t[e]) ? r[e] = t[e] : r[e] = t[e].toString() })), e.fetch("_temp_view" + s, { headers: new Ze({ "Content-Type": "application/json" }), method: "POST", body: JSON.stringify(r) }).then((function(e) { return o = e.ok, i = e.status, e.json() })).then((function(e) { if (!o) throw e.status = i, X(e); return e })).then(h(n)) }(t, n, o); var i = { changes_batch_size: t.__opts.view_update_changes_batch_size || 50 }; if ("string" != typeof n) return y(o, n), $n.add((function() { return Cn(t, "temp_view/temp_view", n.map, n.reduce, !0, e).then((function(e) { return t = b(e, i).then((function() { return w(e, o) })), n = function() { return e.db.destroy() }, t.then((function(e) { return n().then((function() { return e })) }), (function(e) { return n().then((function() { throw e })) })); var t, n })) })), $n.finish(); var a = n,
        u = Dn(a),
        c = u[0],
        f = u[1]; return t.get("_design/" + c).then((function(n) { var u = n.views && n.views[f]; if (!u) throw new _n("ddoc " + n._id + " has no view named " + f); return r(n, f), y(o, u), Cn(t, a, u.map, u.reduce, !1, e).then((function(e) { return "ok" === o.stale || "update_after" === o.stale ? ("update_after" === o.stale && s((function() { b(e, i) })), w(e, o)) : b(e, i).then((function() { return w(e, o) })) })) })) } var j; return { query: function(e, t, n) { var r = this; "function" == typeof t && (n = t, t = {}), t = t ? function(e) { return e.group_level = v(e.group_level), e.limit = v(e.limit), e.skip = v(e.skip), e }(t) : {}, "function" == typeof e && (e = { map: e }); var o = Promise.resolve().then((function() { return k(r, e, t) })); return mn(o, n), o }, viewCleanup: (j = function() { var t = this; return "function" == typeof t._viewCleanup ? function(e) { return new Promise((function(t, n) { e._viewCleanup((function(e, r) { if (e) return n(e);
           t(r) })) })) }(t) : ne(t) ? function(e) { return e.fetch("_view_cleanup", { headers: new Ze({ "Content-Type": "application/json" }), method: "POST" }).then((function(e) { return e.json() })) }(t) : function(t) { return t.get("_local/" + e).then((function(e) { var n = new i;
          Object.keys(e.views).forEach((function(e) { var t = Dn(e),
            r = "_design/" + t[0],
            i = t[1],
            s = n.get(r);
           s || (s = new o, n.set(r, s)), s.add(i) })); var r = { keys: kn(n), include_docs: !0 }; return t.allDocs(r).then((function(r) { var o = {};
           r.rows.forEach((function(t) { var r = t.key.substring(8);
            n.get(t.key).forEach((function(n) { var i = r + "/" + n;
             e.views[i] || (i = n); var s = Object.keys(e.views[i]),
              a = t.doc && t.doc.views && t.doc.views[n];
             s.forEach((function(e) { o[e] = o[e] || a })) })) })); var i = Object.keys(o).filter((function(e) { return !o[e] })).map((function(e) { return bn(m(e), (function() { return new t.constructor(e, t.__opts).destroy() }))() })); return Promise.all(i).then((function() { return { ok: !0 } })) })) }), _({ ok: !0 })) }(t) }, f((function(e) { var t = e.pop(),
         n = j.apply(this, e); return "function" == typeof t && mn(n, t), n }))) } }("mrviews", (function(e, t) { if ("function" == typeof e && 2 === e.length) { var n = e; return function(e) { return n(e, t) } } return xn(e.toString(), t) }), (function(e) { var t = e.toString(),
       n = function(e) { if (/^_sum/.test(e)) return Bn; if (/^_count/.test(e)) return Tn; if (/^_stats/.test(e)) return Mn; if (/^_/.test(e)) throw new Error(e + " is not a supported reduce function.") }(t); return n || xn(t) }), (function(e, t) { var n = e.views && e.views[t]; if ("string" != typeof n.map) throw new _n("ddoc " + e._id + " has no string view named " + t + ", instead found object of type: " + typeof n.map) })); var Nn = { query: function(e, t, n) { return Rn.query.call(this, e, t, n) }, viewCleanup: function(e) { return Rn.viewCleanup.call(this, e) } };

     function Un(e) { return /^1-/.test(e) }

     function Fn(e, t) { var n = Object.keys(t._attachments); return Promise.all(n.map((function(n) { return e.getAttachment(t._id, n, { rev: t._rev }) }))) }

     function Kn(e, t, n, r) { n = b(n); var o = [],
       i = !0;

      function s(t) { return e.allDocs({ keys: t, include_docs: !0, conflicts: !0 }).then((function(e) { if (r.cancelled) throw new Error("cancelled");
        e.rows.forEach((function(e) { var t;
         e.deleted || !e.doc || !Un(e.value.rev) || (t = e.doc, t._attachments && Object.keys(t._attachments).length > 0) || function(e) { return e._conflicts && e._conflicts.length > 0 }(e.doc) || (e.doc._conflicts && delete e.doc._conflicts, o.push(e.doc), delete n[e.id]) })) })) } return Promise.resolve().then((function() { var e = Object.keys(n).filter((function(e) { var t = n[e].missing; return 1 === t.length && Un(t[0]) })); if (e.length > 0) return s(e) })).then((function() { var s = function(e) { var t = []; return Object.keys(e).forEach((function(n) { e[n].missing.forEach((function(e) { t.push({ id: n, rev: e }) })) })), { docs: t, revs: !0, latest: !0 } }(n); if (s.docs.length) return e.bulkGet(s).then((function(n) { if (r.cancelled) throw new Error("cancelled"); return Promise.all(n.results.map((function(n) { return Promise.all(n.docs.map((function(n) { var r = n.ok; return n.error && (i = !1), r && r._attachments ? function(e, t, n) { var r = ne(t) && !ne(e),
            o = Object.keys(n._attachments); return r ? e.get(n._id).then((function(r) { return Promise.all(o.map((function(o) { return function(e, t, n) { return !e._attachments || !e._attachments[n] || e._attachments[n].digest !== t._attachments[n].digest }(r, n, o) ? t.getAttachment(n._id, o) : e.getAttachment(r._id, o) }))) })).catch((function(e) { if (404 !== e.status) throw e; return Fn(t, n) })) : Fn(t, n) }(t, e, r).then((function(e) { var t = Object.keys(r._attachments); return e.forEach((function(e, n) { var o = r._attachments[t[n]];
            delete o.stub, delete o.length, o.data = e })), r })) : r }))) }))).then((function(e) { o = o.concat(ee(e).filter(Boolean)) })) })) })).then((function() { return { ok: i, docs: o } })) }

     function Jn(e, t, n, r, o) { return e.get(t).catch((function(n) { if (404 === n.status) return "http" !== e.adapter && "https" !== e.adapter || $(404, "PouchDB is just checking if a remote checkpoint exists."), { session_id: r, _id: t, history: [], replicator: "pouchdb", version: 1 }; throw n })).then((function(i) { if (!o.cancelled && i.last_seq !== n) return i.history = (i.history || []).filter((function(e) { return e.session_id !== r })), i.history.unshift({ last_seq: n, session_id: r }), i.history = i.history.slice(0, 5), i.version = 1, i.replicator = "pouchdb", i.session_id = r, i.last_seq = n, e.put(i).catch((function(i) { if (409 === i.status) return Jn(e, t, n, r, o); throw i })) })) }

     function zn(e, t, n, r, o) { this.src = e, this.target = t, this.id = n, this.returnValue = r, this.opts = o || {} } zn.prototype.writeCheckpoint = function(e, t) { var n = this; return this.updateTarget(e, t).then((function() { return n.updateSource(e, t) })) }, zn.prototype.updateTarget = function(e, t) { return this.opts.writeTargetCheckpoint ? Jn(this.target, this.id, e, t, this.returnValue) : Promise.resolve(!0) }, zn.prototype.updateSource = function(e, t) { if (this.opts.writeSourceCheckpoint) { var n = this; return Jn(this.src, this.id, e, t, this.returnValue).catch((function(e) { if (Qn(e)) return n.opts.writeSourceCheckpoint = !1, !0; throw e })) } return Promise.resolve(!0) }; var Vn = { undefined: function(e, t) { return 0 === ut(e.last_seq, t.last_seq) ? t.last_seq : 0 }, 1: function(e, t) { return function(e, t) { if (e.session_id === t.session_id) return { last_seq: e.last_seq, history: e.history }; return function e(t, n) { var r = t[0],
          o = t.slice(1),
          i = n[0],
          s = n.slice(1); if (!r || 0 === n.length) return { last_seq: 0, history: [] }; if (Gn(r.session_id, n)) return { last_seq: r.last_seq, history: t }; if (Gn(i.session_id, o)) return { last_seq: i.last_seq, history: s }; return e(o, s) }(e.history, t.history) }(t, e).last_seq } };

     function Gn(e, t) { var n = t[0],
       r = t.slice(1); return !(!e || 0 === t.length) && (e === n.session_id || Gn(e, r)) }

     function Qn(e) { return "number" == typeof e.status && 4 === Math.floor(e.status / 100) } zn.prototype.getCheckpoint = function() { var e = this; return e.opts && e.opts.writeSourceCheckpoint && !e.opts.writeTargetCheckpoint ? e.src.get(e.id).then((function(e) { return e.last_seq || 0 })).catch((function(e) { if (404 !== e.status) throw e; return 0 })) : e.target.get(e.id).then((function(t) { return e.opts && e.opts.writeTargetCheckpoint && !e.opts.writeSourceCheckpoint ? t.last_seq || 0 : e.src.get(e.id).then((function(e) { return t.version !== e.version ? 0 : (n = t.version ? t.version.toString() : "undefined") in Vn ? Vn[n](t, e) : 0; var n }), (function(n) { if (404 === n.status && t.last_seq) return e.src.put({ _id: e.id, last_seq: 0 }).then((function() { return 0 }), (function(n) { return Qn(n) ? (e.opts.writeSourceCheckpoint = !1, t.last_seq) : 0 })); throw n })) })).catch((function(e) { if (404 !== e.status) throw e; return 0 })) };

     function Wn(e, t, n) { var r = n.doc_ids ? n.doc_ids.sort(ut) : "",
       o = n.filter ? n.filter.toString() : "",
       i = "",
       s = "",
       a = ""; return n.selector && (a = JSON.stringify(n.selector)), n.filter && n.query_params && (i = JSON.stringify(function(e) { return Object.keys(e).sort(ut).reduce((function(t, n) { return t[n] = e[n], t }), {}) }(n.query_params))), n.filter && "_view" === n.filter && (s = n.view.toString()), Promise.all([e.id(), t.id()]).then((function(e) { var t = e[0] + e[1] + o + s + i + r + a; return new Promise((function(e) { je(t, e) })) })).then((function(e) { return "_local/" + (e = e.replace(/\//g, ".").replace(/\+/g, "_")) })) }

     function Yn(e, t, n, r, o) { var i, a, u, c = [],
       f = { seq: 0, changes: [], docs: [] },
       l = !1,
       d = !1,
       h = !1,
       p = 0,
       v = n.continuous || n.live || !1,
       y = n.batch_size || 100,
       _ = n.batches_limit || 10,
       g = n.style || "all_docs",
       m = !1,
       w = n.doc_ids,
       k = n.selector,
       j = [],
       O = Ae();
      o = o || { ok: !0, start_time: (new Date).toISOString(), docs_read: 0, docs_written: 0, doc_write_failures: 0, errors: [] }; var q = {};

      function A() { return u ? Promise.resolve() : Wn(e, t, n).then((function(o) { a = o; var i = {};
        i = !1 === n.checkpoint ? { writeSourceCheckpoint: !1, writeTargetCheckpoint: !1 } : "source" === n.checkpoint ? { writeSourceCheckpoint: !0, writeTargetCheckpoint: !1 } : "target" === n.checkpoint ? { writeSourceCheckpoint: !1, writeTargetCheckpoint: !0 } : { writeSourceCheckpoint: !0, writeTargetCheckpoint: !0 }, u = new zn(e, t, a, r, i) })) }

      function S() { if (j = [], 0 !== i.docs.length) { var e = i.docs,
         s = { timeout: n.timeout }; return t.bulkDocs({ docs: e, new_edits: !1 }, s).then((function(t) { if (r.cancelled) throw D(), new Error("cancelled"); var n = Object.create(null);
         t.forEach((function(e) { e.error && (n[e.id] = e) })); var i = Object.keys(n).length;
         o.doc_write_failures += i, o.docs_written += e.length - i, e.forEach((function(e) { var t = n[e._id]; if (t) { o.errors.push(t); var i = (t.name || "").toLowerCase(); if ("unauthorized" !== i && "forbidden" !== i) throw t;
           r.emit("denied", b(t)) } else j.push(e) })) }), (function(t) { throw o.doc_write_failures += e.length, t })) } }

      function x() { if (i.error) throw new Error("There was a problem getting docs.");
       o.last_seq = p = i.seq; var e = b(o); return j.length && (e.docs = j, "number" == typeof i.pending && (e.pending = i.pending, delete i.pending), r.emit("change", e)), l = !0, u.writeCheckpoint(i.seq, O).then((function() { if (r.emit("checkpoint", { checkpoint: i.seq }), l = !1, r.cancelled) throw D(), new Error("cancelled");
        i = void 0, M() })).catch((function(e) { throw N(e), e })) }

      function E() { return Kn(e, t, i.diffs, r).then((function(e) { i.error = !e.ok, e.docs.forEach((function(e) { delete i.diffs[e._id], o.docs_read++, i.docs.push(e) })) })) }

      function P() { var e;
       r.cancelled || i || (0 !== c.length ? (i = c.shift(), r.emit("checkpoint", { start_next_batch: i.seq }), (e = {}, i.changes.forEach((function(t) { r.emit("checkpoint", { revs_diff: t }), "_user/" !== t.id && (e[t.id] = t.changes.map((function(e) { return e.rev }))) })), t.revsDiff(e).then((function(e) { if (r.cancelled) throw D(), new Error("cancelled");
        i.diffs = e }))).then(E).then(S).then(x).then(P).catch((function(e) { $("batch processing terminated with error", e) }))) : C(!0)) }

      function C(e) { 0 !== f.changes.length ? (e || d || f.changes.length >= y) && (c.push(f), f = { seq: 0, changes: [], docs: [] }, "pending" !== r.state && "stopped" !== r.state || (r.state = "active", r.emit("active")), P()) : 0 !== c.length || i || ((v && q.live || d) && (r.state = "pending", r.emit("paused")), d && D()) }

      function $(e, t) { h || (t.message || (t.message = e), o.ok = !1, o.status = "aborting", c = [], f = { seq: 0, changes: [], docs: [] }, D(t)) }

      function D(i) { if (!(h || r.cancelled && (o.status = "cancelled", l)))
        if (o.status = o.status || "complete", o.end_time = (new Date).toISOString(), o.last_seq = p, h = !0, i) {
         (i = H(i)).result = o; var s = (i.name || "").toLowerCase(); "unauthorized" === s || "forbidden" === s ? (r.emit("error", i), r.removeAllListeners()) : function(e, t, n, r) { if (!1 === e.retry) return t.emit("error", n), void t.removeAllListeners(); if ("function" != typeof e.back_off_function && (e.back_off_function = L), t.emit("requestError", n), "active" === t.state || "pending" === t.state) { t.emit("paused", n), t.state = "stopped"; var o = function() { e.current_back_off = 0 };
           t.once("paused", (function() { t.removeListener("active", o) })), t.once("active", o) } e.current_back_off = e.current_back_off || 0, e.current_back_off = e.back_off_function(e.current_back_off), setTimeout(r, e.current_back_off) }(n, r, i, (function() { Yn(e, t, n, r) })) } else r.emit("complete", o), r.removeAllListeners() }

      function I(e, t, o) { if (r.cancelled) return D(); "number" == typeof t && (f.pending = t), Z(n)(e) && (f.seq = e.seq || o, f.changes.push(e), r.emit("checkpoint", { pending_batch: f.seq }), s((function() { C(0 === c.length && q.live) }))) }

      function B(e) { if (m = !1, r.cancelled) return D(); if (e.results.length > 0) q.since = e.results[e.results.length - 1].seq, M(), C(!0);
       else { var t = function() { v ? (q.live = !0, M()) : d = !0, C(!0) };
        i || 0 !== e.results.length ? t() : (l = !0, u.writeCheckpoint(e.last_seq, O).then((function() { l = !1, o.last_seq = p = e.last_seq, t() })).catch(N)) } }

      function T(e) { if (m = !1, r.cancelled) return D();
       $("changes rejected", e) }

      function M() { if (!m && !d && c.length < _) { m = !0, r._changes && (r.removeListener("cancel", r._abortChanges), r._changes.cancel()), r.once("cancel", o); var t = e.changes(q).on("change", I);
        t.then(i, i), t.then(B).catch(T), n.retry && (r._changes = t, r._abortChanges = o) }

       function o() { t.cancel() }

       function i() { r.removeListener("cancel", o) } }

      function R() { A().then((function() { if (!r.cancelled) return u.getCheckpoint().then((function(e) { q = { since: p = e, limit: y, batch_size: y, style: g, doc_ids: w, selector: k, return_docs: !0 }, n.filter && ("string" != typeof n.filter ? q.include_docs = !0 : q.filter = n.filter), "heartbeat" in n && (q.heartbeat = n.heartbeat), "timeout" in n && (q.timeout = n.timeout), n.query_params && (q.query_params = n.query_params), n.view && (q.view = n.view), M() }));
        D() })).catch((function(e) { $("getCheckpoint rejected with ", e) })) }

      function N(e) { l = !1, $("writeCheckpoint completed with error", e) } r.ready(e, t), r.cancelled ? D() : (r._addedListeners || (r.once("cancel", D), "function" == typeof n.complete && (r.once("error", n.complete), r.once("complete", (function(e) { n.complete(null, e) }))), r._addedListeners = !0), void 0 === n.since ? R() : A().then((function() { return l = !0, u.writeCheckpoint(n.since, O) })).then((function() { l = !1, r.cancelled ? D() : (p = n.since, R()) })).catch(N)) }

     function Hn() { d.call(this), this.cancelled = !1, this.state = "pending"; var e = this,
       t = new Promise((function(t, n) { e.once("complete", t), e.once("error", n) }));
      e.then = function(e, n) { return t.then(e, n) }, e.catch = function(e) { return t.catch(e) }, e.catch((function() {})) }

     function Xn(e, t) { var n = t.PouchConstructor; return "string" == typeof e ? new n(e, t) : e }

     function Zn(e, t, n, r) { if ("function" == typeof n && (r = n, n = {}), void 0 === n && (n = {}), n.doc_ids && !Array.isArray(n.doc_ids)) throw H(V, "`doc_ids` filter parameter is not a list.");
      n.complete = r, (n = b(n)).continuous = n.continuous || n.live, n.retry = "retry" in n && n.retry, n.PouchConstructor = n.PouchConstructor || this; var o = new Hn(n); return Yn(Xn(e, n), Xn(t, n), n, o), o }

     function er(e, t, n, r) { return "function" == typeof n && (r = n, n = {}), void 0 === n && (n = {}), (n = b(n)).PouchConstructor = n.PouchConstructor || this, new tr(e = Xn(e, n), t = Xn(t, n), n, r) }

     function tr(e, t, n, r) { var o = this;
      this.canceled = !1; var i = n.push ? D({}, n, n.push) : n,
       s = n.pull ? D({}, n, n.pull) : n;

      function a(e) { o.emit("change", { direction: "pull", change: e }) }

      function u(e) { o.emit("change", { direction: "push", change: e }) }

      function c(e) { o.emit("denied", { direction: "push", doc: e }) }

      function f(e) { o.emit("denied", { direction: "pull", doc: e }) }

      function l() { o.pushPaused = !0, o.pullPaused && o.emit("paused") }

      function d() { o.pullPaused = !0, o.pushPaused && o.emit("paused") }

      function h() { o.pushPaused = !1, o.pullPaused && o.emit("active", { direction: "push" }) }

      function p() { o.pullPaused = !1, o.pushPaused && o.emit("active", { direction: "pull" }) } this.push = Zn(e, t, i), this.pull = Zn(t, e, s), this.pushPaused = !0, this.pullPaused = !0; var v = {};

      function y(e) { return function(t, n) {
        ("change" === t && (n === a || n === u) || "denied" === t && (n === f || n === c) || "paused" === t && (n === d || n === l) || "active" === t && (n === p || n === h)) && (t in v || (v[t] = {}), v[t][e] = !0, 2 === Object.keys(v[t]).length && o.removeAllListeners(t)) } }

      function _(e, t, n) {-1 == e.listeners(t).indexOf(n) && e.on(t, n) } n.live && (this.push.on("complete", o.pull.cancel.bind(o.pull)), this.pull.on("complete", o.push.cancel.bind(o.push))), this.on("newListener", (function(e) { "change" === e ? (_(o.pull, "change", a), _(o.push, "change", u)) : "denied" === e ? (_(o.pull, "denied", f), _(o.push, "denied", c)) : "active" === e ? (_(o.pull, "active", p), _(o.push, "active", h)) : "paused" === e && (_(o.pull, "paused", d), _(o.push, "paused", l)) })), this.on("removeListener", (function(e) { "change" === e ? (o.pull.removeListener("change", a), o.push.removeListener("change", u)) : "denied" === e ? (o.pull.removeListener("denied", f), o.push.removeListener("denied", c)) : "active" === e ? (o.pull.removeListener("active", p), o.push.removeListener("active", h)) : "paused" === e && (o.pull.removeListener("paused", d), o.push.removeListener("paused", l)) })), this.pull.on("removeListener", y("pull")), this.push.on("removeListener", y("push")); var g = Promise.all([this.push, this.pull]).then((function(e) { var t = { push: e[0], pull: e[1] }; return o.emit("complete", t), r && r(null, t), o.removeAllListeners(), t }), (function(e) { if (o.cancel(), r ? r(e) : o.emit("error", e), o.removeAllListeners(), r) throw e }));
      this.then = function(e, t) { return g.then(e, t) }, this.catch = function(e) { return g.catch(e) } } l(Hn, d), Hn.prototype.cancel = function() { this.cancelled = !0, this.state = "cancelled", this.emit("cancel") }, Hn.prototype.ready = function(e, t) { var n = this;

      function r() { n.cancel() }

      function o() { e.removeListener("destroyed", r), t.removeListener("destroyed", r) } n._readyCalled || (n._readyCalled = !0, e.once("destroyed", r), t.once("destroyed", r), n.once("complete", o), n.once("error", o)) }, l(tr, d), tr.prototype.cancel = function() { this.canceled || (this.canceled = !0, this.push.cancel(), this.pull.cancel()) }, Ye.plugin((function(e) { e.adapter("idb", sn, !0) })).plugin((function(e) { e.adapter("http", vn, !1), e.adapter("https", vn, !1) })).plugin(Nn).plugin((function(e) { e.replicate = Zn, e.sync = er, Object.defineProperty(e.prototype, "replicate", { get: function() { var e = this; return void 0 === this.replicateMethods && (this.replicateMethods = { from: function(t, n, r) { return e.constructor.replicate(t, e, n, r) }, to: function(t, n, r) { return e.constructor.replicate(e, t, n, r) } }), this.replicateMethods } }), e.prototype.sync = function(e, t, n) { return this.constructor.sync(this, e, t, n) } })), t.exports = Ye }).call(this) }).call(this, e(11)) }, { 1: 1, 10: 10, 11: 11, 12: 12, 13: 13, 28: 28, 3: 3, 4: 4 }] }, {}, [29])(29) }));