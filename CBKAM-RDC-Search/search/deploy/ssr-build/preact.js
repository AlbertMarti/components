!function() {
    var n, l, t, u, i, o, r, e, f, c, s, a, h, p = 65536, v = 1 << 17, d = {}, y = [], w = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _ = Array.isArray;
    function g(n, l) {
        for (var t in l)
            n[t] = l[t];
        return n
    }
    function m(n) {
        n && n.parentNode && n.parentNode.removeChild(n)
    }
    function b(l, t, u) {
        var i, o, r, e = {};
        for (r in t)
            "key" == r ? i = t[r] : "ref" == r ? o = t[r] : e[r] = t[r];
        if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : u),
            "function" == typeof l && null != l.defaultProps)
            for (r in l.defaultProps)
                void 0 === e[r] && (e[r] = l.defaultProps[r]);
        return k(l, e, i, o, null)
    }
    function k(n, u, i, o, r) {
        var e = {
            type: n,
            props: u,
            key: i,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == r ? ++t : r,
            __i: -1,
            __u: 0
        };
        return null == r && null != l.vnode && l.vnode(e),
        e
    }
    function C(n) {
        return n.children
    }
    function x(n, l) {
        this.props = n,
        this.context = l
    }
    function S(n, l) {
        if (null == l)
            return n.__ ? S(n.__, n.__i + 1) : null;
        for (var t; l < n.__k.length; l++)
            if (null != (t = n.__k[l]) && null != t.__e)
                return t.__e;
        return "function" == typeof n.type ? S(n) : null
    }
    function M(n) {
        var l, t;
        if (null != (n = n.__) && null != n.__c) {
            for (n.__e = n.__c.base = null,
                l = 0; l < n.__k.length; l++)
                if (null != (t = n.__k[l]) && null != t.__e) {
                    n.__e = n.__c.base = t.__e;
                    break
                }
                return M(n)
        }
    }
    function P(n) {
        (!n.__d && (n.__d = !0) && i.push(n) && !$.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)($)
    }
    function $() {
        var n, t, u, o, r, f, c, s;
        for (i.sort(e); n = i.shift(); )
            n.__d && (t = i.length,
                      o = void 0,
                      f = (r = (u = n).__v).__e,
                      c = [],
                      s = [],
                      u.__P && ((o = g({}, r)).__v = r.__v + 1,
                                l.vnode && l.vnode(o),
                                O(u.__P, o, r, u.__n, u.__P.namespaceURI, 32 & r.__u ? [f] : null, c, null == f ? S(r) : f, !!(32 & r.__u), s),
                                o.__v = r.__v,
                                o.__.__k[o.__i] = o,
                                V(c, o, s),
                                o.__e != f && M(o)),
                      i.length > t && i.sort(e));
            $.__r = 0
    }
    function I(n, l, t, u, i, o, r, e, f, c, s) {
        var a, h, v, w, _, g = u && u.__k || y, m = l.length;
        for (t.__d = f,
            A(t, l, g),
             f = t.__d,
             a = 0; a < m; a++)
            null != (v = t.__k[a]) && (h = -1 === v.__i ? d : g[v.__i] || d,
                                       v.__i = a,
                                       O(n, v, h, i, o, r, e, f, c, s),
                                       w = v.__e,
                                       v.ref && h.ref != v.ref && (h.ref && z(h.ref, null, v),
                                                                   s.push(v.ref, v.__c || w, v)),
                                       null == _ && null != w && (_ = w),
                                       v.__u & p || h.__k === v.__k ? f = E(v, f, n) : "function" == typeof v.type && void 0 !== v.__d ? f = v.__d : w && (f = w.nextSibling),
                                       v.__d = void 0,
                                       v.__u &= -196609);
            t.__d = f,
            t.__e = _
    }
    function A(n, l, t) {
        var u, i, o, r, e, f = l.length, c = t.length, s = c, a = 0;
        for (n.__k = [],
            u = 0; u < f; u++)
            null != (i = l[u]) && "boolean" != typeof i && "function" != typeof i ? (r = u + a,
                                                                                     (i = n.__k[u] = "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? k(null, i, null, null, null) : _(i) ? k(C, {
                                                                                         children: i
                                                                                     }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? k(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = n,
                                                                                     i.__b = n.__b + 1,
                                                                                     o = null,
                                                                                     -1 !== (e = i.__i = F(i, t, r, s)) && (s--,
                                                                                                                            (o = t[e]) && (o.__u |= v)),
                                                                                     null == o || null === o.__v ? (-1 == e && a--,
                                                                                                                    "function" != typeof i.type && (i.__u |= p)) : e !== r && (e == r - 1 ? a-- : e == r + 1 ? a++ : (e > r ? a-- : a++,
                                                                                                                                                                                                                      i.__u |= p))) : i = n.__k[u] = null;
                                                                                                                                                                                                                      if (s)
                                                                                                                                                                                                                          for (u = 0; u < c; u++)
                                                                                                                                                                                                                              null != (o = t[u]) && 0 == (o.__u & v) && (o.__e == n.__d && (n.__d = S(o)),
                                                                                                                                                                                                                                                                N(o, o))
    }
    function E(n, l, t) {
        var u, i;
        if ("function" == typeof n.type) {
            for (u = n.__k,
                i = 0; u && i < u.length; i++)
                u[i] && (u[i].__ = n,
                         l = E(u[i], l, t));
                return l
        }
        n.__e != l && (l && n.type && !t.contains(l) && (l = S(n)),
                       t.insertBefore(n.__e, l || null),
                       l = n.__e);
        do {
            l = l && l.nextSibling
        } while (null != l && 8 === l.nodeType);
        return l
    }
    function F(n, l, t, u) {
        var i = n.key
        , o = n.type
        , r = t - 1
        , e = t + 1
        , f = l[t];
        if (null === f || f && i == f.key && o === f.type && 0 == (f.__u & v))
            return t;
        if (u > (null != f && 0 == (f.__u & v) ? 1 : 0))
            for (; r >= 0 || e < l.length; ) {
                if (r >= 0) {
                    if ((f = l[r]) && 0 == (f.__u & v) && i == f.key && o === f.type)
                        return r;
                    r--
                }
                if (e < l.length) {
                    if ((f = l[e]) && 0 == (f.__u & v) && i == f.key && o === f.type)
                        return e;
                    e++
                }
            }
            return -1
    }
    function H(n, l, t) {
        "-" === l[0] ? n.setProperty(l, null == t ? "" : t) : n[l] = null == t ? "" : "number" != typeof t || w.test(l) ? t : t + "px"
    }
    function L(n, l, t, u, i) {
        var o;
        n: if ("style" === l)
        if ("string" == typeof t)
            n.style.cssText = t;
        else {
            if ("string" == typeof u && (n.style.cssText = u = ""),
                u)
                for (l in u)
                    t && l in t || H(n.style, l, "");
            if (t)
                for (l in t)
                    u && t[l] === u[l] || H(n.style, l, t[l])
        }
        else if ("o" === l[0] && "n" === l[1])
            o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")),
            l = l.toLowerCase()in n || "onFocusOut" === l || "onFocusIn" === l ? l.toLowerCase().slice(2) : l.slice(2),
            n.l || (n.l = {}),
            n.l[l + o] = t,
            t ? u ? t.t = u.t : (t.t = f,
                                 n.addEventListener(l, o ? s : c, o)) : n.removeEventListener(l, o ? s : c, o);
                                 else {
                                     if ("http://www.w3.org/2000/svg" == i)
                                         l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                                     else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n)
                                         try {
                                             n[l] = null == t ? "" : t;
                                             break n
                                         } catch (n) {}
                                         "function" == typeof t || (null == t || !1 === t && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == t ? "" : t))
                                 }
    }
    function T(n) {
        return function(t) {
            if (this.l) {
                var u = this.l[t.type + n];
                if (null == t.u)
                    t.u = f++;
                else if (t.u < u.t)
                    return;
                return u(l.event ? l.event(t) : t)
            }
        }
    }
    function O(n, t, u, i, o, r, e, f, c, s) {
        var a, h, p, v, d, y, w, m, b, k, S, M, P, $, A, E, F = t.type;
        if (void 0 !== t.constructor)
            return null;
        128 & u.__u && (c = !!(32 & u.__u),
                        r = [f = t.__e = u.__e]),
                        (a = l.__b) && a(t);
                        n: if ("function" == typeof F)
                        try {
                            if (m = t.props,
                                b = "prototype"in F && F.prototype.render,
                                k = (a = F.contextType) && i[a.__c],
                                S = a ? k ? k.props.value : a.__ : i,
                                u.__c ? w = (h = t.__c = u.__c).__ = h.__E : (b ? t.__c = h = new F(m,S) : (t.__c = h = new x(m,S),
                                                                                                            h.constructor = F,
                                                                                                            h.render = R),
                                                                              k && k.sub(h),
                                                                              h.props = m,
                                                                              h.state || (h.state = {}),
                                                                              h.context = S,
                                                                              h.__n = i,
                                                                              p = h.__d = !0,
                                                                              h.__h = [],
                                                                              h._sb = []),
                                b && null == h.__s && (h.__s = h.state),
                                b && null != F.getDerivedStateFromProps && (h.__s == h.state && (h.__s = g({}, h.__s)),
                                                                            g(h.__s, F.getDerivedStateFromProps(m, h.__s))),
                                v = h.props,
                                d = h.state,
                                h.__v = t,
                                p)
                                b && null == F.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(),
                                b && null != h.componentDidMount && h.__h.push(h.componentDidMount);
                                else {
                                    if (b && null == F.getDerivedStateFromProps && m !== v && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, S),
                                        !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, S) || t.__v === u.__v)) {
                                        for (t.__v !== u.__v && (h.props = m,
                                            h.state = h.__s,
                                            h.__d = !1),
                                             t.__e = u.__e,
                                             t.__k = u.__k,
                                             t.__k.some(function(n) {
                                                 n && (n.__ = t)
                                             }),
                                             M = 0; M < h._sb.length; M++)
                                            h.__h.push(h._sb[M]);
                                        h._sb = [],
                                        h.__h.length && e.push(h);
                                        break n
                                        }
                                        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, S),
                                        b && null != h.componentDidUpdate && h.__h.push(function() {
                                            h.componentDidUpdate(v, d, y)
                                        })
                                }
                                if (h.context = S,
                                    h.props = m,
                                    h.__P = n,
                                    h.__e = !1,
                                    P = l.__r,
                                    $ = 0,
                                    b) {
                                    for (h.state = h.__s,
                                        h.__d = !1,
                                         P && P(t),
                                         a = h.render(h.props, h.state, h.context),
                                         A = 0; A < h._sb.length; A++)
                                        h.__h.push(h._sb[A]);
                                    h._sb = []
                                    } else
                                        do {
                                            h.__d = !1,
                                            P && P(t),
                                            a = h.render(h.props, h.state, h.context),
                                            h.state = h.__s
                                        } while (h.__d && ++$ < 25);
                                    h.state = h.__s,
                                    null != h.getChildContext && (i = g(g({}, i), h.getChildContext())),
                                    b && !p && null != h.getSnapshotBeforeUpdate && (y = h.getSnapshotBeforeUpdate(v, d)),
                                    I(n, _(E = null != a && a.type === C && null == a.key ? a.props.children : a) ? E : [E], t, u, i, o, r, e, f, c, s),
                                    h.base = t.__e,
                                    t.__u &= -161,
                                    h.__h.length && e.push(h),
                                    w && (h.__E = h.__ = null)
                        } catch (n) {
                            if (t.__v = null,
                                c || null != r) {
                                for (t.__u |= c ? 160 : 128; f && 8 === f.nodeType && f.nextSibling; )
                                    f = f.nextSibling;
                                r[r.indexOf(f)] = null,
                                t.__e = f
                                } else
                                    t.__e = u.__e,
                                    t.__k = u.__k;
                                l.__e(n, t, u)
                        }
                        else
                            null == r && t.__v === u.__v ? (t.__k = u.__k,
                                                            t.__e = u.__e) : t.__e = j(u.__e, t, u, i, o, r, e, c, s);
                                                            (a = l.diffed) && a(t)
    }
    function V(n, t, u) {
        t.__d = void 0;
        for (var i = 0; i < u.length; i++)
            z(u[i], u[++i], u[++i]);
        l.__c && l.__c(t, n),
        n.some(function(t) {
            try {
                n = t.__h,
                t.__h = [],
                n.some(function(n) {
                    n.call(t)
                })
            } catch (n) {
                l.__e(n, t.__v)
            }
        })
    }
    function j(t, u, i, o, r, e, f, c, s) {
        var a, h, p, v, y, w, g, b = i.props, k = u.props, C = u.type;
        if ("svg" === C ? r = "http://www.w3.org/2000/svg" : "math" === C ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"),
            null != e)
            for (a = 0; a < e.length; a++)
                if ((y = e[a]) && "setAttribute"in y == !!C && (C ? y.localName === C : 3 === y.nodeType)) {
                    t = y,
                    e[a] = null;
                    break
                }
                if (null == t) {
                    if (null === C)
                        return document.createTextNode(k);
                    t = document.createElementNS(r, C, k.is && k),
                    c && (l.__m && l.__m(u, e),
                          c = !1),
                          e = null
                }
                if (null === C)
                    b === k || c && t.data === k || (t.data = k);
        else {
            if (e = e && n.call(t.childNodes),
                b = i.props || d,
                !c && null != e)
                for (b = {},
                    a = 0; a < t.attributes.length; a++)
                    b[(y = t.attributes[a]).name] = y.value;
                    for (a in b)
                        if (y = b[a],
                            "children" == a)
                            ;
                        else if ("dangerouslySetInnerHTML" == a)
                            p = y;
            else if (!(a in k)) {
                if ("value" == a && "defaultValue"in k || "checked" == a && "defaultChecked"in k)
                    continue;
                L(t, a, null, y, r)
            }
            for (a in k)
                y = k[a],
                "children" == a ? v = y : "dangerouslySetInnerHTML" == a ? h = y : "value" == a ? w = y : "checked" == a ? g = y : c && "function" != typeof y || b[a] === y || L(t, a, y, b[a], r);
            if (h)
                c || p && (h.__html === p.__html || h.__html === t.innerHTML) || (t.innerHTML = h.__html),
                u.__k = [];
            else if (p && (t.innerHTML = ""),
                I(t, _(v) ? v : [v], u, i, o, "foreignObject" === C ? "http://www.w3.org/1999/xhtml" : r, e, f, e ? e[0] : i.__k && S(i, 0), c, s),
                     null != e)
                for (a = e.length; a--; )
                    m(e[a]);
            c || (a = "value",
                  "progress" === C && null == w ? t.removeAttribute("value") : void 0 !== w && (w !== t[a] || "progress" === C && !w || "option" === C && w !== b[a]) && L(t, a, w, b[a], r),
                  a = "checked",
                  void 0 !== g && g !== t[a] && L(t, a, g, b[a], r))
        }
        return t
    }
    function z(n, t, u) {
        try {
            if ("function" == typeof n) {
                var i = "function" == typeof n.__u;
                i && n.__u(),
                i && null == t || (n.__u = n(t))
            } else
                n.current = t
        } catch (n) {
            l.__e(n, u)
        }
    }
    function N(n, t, u) {
        var i, o;
        if (l.unmount && l.unmount(n),
            (i = n.ref) && (i.current && i.current !== n.__e || z(i, null, t)),
            null != (i = n.__c)) {
            if (i.componentWillUnmount)
                try {
                    i.componentWillUnmount()
                } catch (n) {
                    l.__e(n, t)
                }
                i.base = i.__P = null
            }
            if (i = n.__k)
                for (o = 0; o < i.length; o++)
                    i[o] && N(i[o], t, u || "function" != typeof n.type);
        u || m(n.__e),
        n.__c = n.__ = n.__e = n.__d = void 0
    }
    function R(n, l, t) {
        return this.constructor(n, t)
    }
    function q(t, u, i) {
        var o, r, e, f;
        l.__ && l.__(t, u),
        r = (o = "function" == typeof i) ? null : i && i.__k || u.__k,
        e = [],
        f = [],
        O(u, t = (!o && i || u).__k = b(C, null, [t]), r || d, d, u.namespaceURI, !o && i ? [i] : r ? null : u.firstChild ? n.call(u.childNodes) : null, e, !o && i ? i : r ? r.__e : u.firstChild, o, f),
        V(e, t, f)
    }
    n = y.slice,
    l = {
        __e: function(n, l, t, u) {
            for (var i, o, r; l = l.__; )
                if ((i = l.__c) && !i.__)
                    try {
                        if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)),
                            r = i.__d),
                            null != i.componentDidCatch && (i.componentDidCatch(n, u || {}),
                                                            r = i.__d),
                            r)
                            return i.__E = i
                    } catch (l) {
                        n = l
                    }
                    throw n
        }
    },
    t = 0,
    u = function(n) {
        return null != n && null == n.constructor
    }
    ,
    x.prototype.setState = function(n, l) {
        var t;
        t = null != this.__s && this.__s !== this.state ? this.__s : this.__s = g({}, this.state),
        "function" == typeof n && (n = n(g({}, t), this.props)),
        n && g(t, n),
        null != n && this.__v && (l && this._sb.push(l),
                                  P(this))
    }
    ,
    x.prototype.forceUpdate = function(n) {
        this.__v && (this.__e = !0,
                     n && this.__h.push(n),
                     P(this))
    }
    ,
    x.prototype.render = C,
    i = [],
    r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    e = function(n, l) {
        return n.__v.__b - l.__v.__b
    }
    ,
    $.__r = 0,
    f = 0,
    c = T(!1),
    s = T(!0),
    a = 0,
    h = {
        __proto__: null,
        render: q,
        hydrate: function n(l, t) {
            q(l, t, n)
        },
        createElement: b,
        h: b,
        Fragment: C,
        createRef: function() {
            return {
                current: null
            }
        },
        isValidElement: u,
        Component: x,
        cloneElement: function(l, t, u) {
            var i, o, r, e, f = g({}, l.props);
            for (r in l.type && l.type.defaultProps && (e = l.type.defaultProps),
                t)
                "key" == r ? i = t[r] : "ref" == r ? o = t[r] : f[r] = void 0 === t[r] && void 0 !== e ? e[r] : t[r];
            return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : u),
            k(l.type, f, i || l.key, o || l.ref, null)
        },
        createContext: function(n, l) {
            var t = {
                __c: l = "__cC" + a++,
                __: n,
                Consumer: function(n, l) {
                    return n.children(l)
                },
                Provider: function(n) {
                    var t, u;
                    return this.getChildContext || (t = new Set,
                                                    (u = {})[l] = this,
                                                    this.getChildContext = function() {
                                                        return u
                                                    }
                                                    ,
                                                    this.componentWillUnmount = function() {
                                                        t = null
                                                    }
                                                    ,
                                                    this.shouldComponentUpdate = function(n) {
                                                        this.props.value !== n.value && t.forEach(function(n) {
                                                            n.__e = !0,
                                                            P(n)
                                                        })
                                                    }
                                                    ,
                                                    this.sub = function(n) {
                                                        t.add(n);
                                                        var l = n.componentWillUnmount;
                                                        n.componentWillUnmount = function() {
                                                            t && t.delete(n),
                                                    l && l.call(n)
                                                        }
                                                    }
                    ),
                    n.children
                }
            };
            return t.Provider.__ = t.Consumer.contextType = t
        },
        toChildArray: function n(l, t) {
            return t = t || [],
            null == l || "boolean" == typeof l || (_(l) ? l.some(function(l) {
                n(l, t)
            }) : t.push(l)),
            t
        },
        options: l
    },
    typeof module < "u" ? module.exports = h : self.preact = h
}();
//# sourceMappingURL=preact.min.js.map
