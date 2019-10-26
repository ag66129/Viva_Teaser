(function(e) {
    'use strict';
    var t = function(o, r, u) {
        var n = e.document,
            t = n.createElement('link'),
            i;
        if (r) {
            i = r
        } else {
            var f = (n.body || n.getElementsByTagName('head')[0]).childNodes;
            i = f[f.length - 1]
        };
        var a = n.styleSheets;
        t.rel = 'stylesheet';
        t.href = o;
        t.media = 'only x';

        function s(e) {
            if (n.body) {
                return e()
            };
            setTimeout(function() {
                s(e)
            })
        };
        s(function() {
            i.parentNode.insertBefore(t, (r ? i : i.nextSibling))
        });
        var d = function(e) {
            var i = t.href,
                n = a.length;
            while (n--) {
                if (a[n].href === i) {
                    return e()
                }
            };
            setTimeout(function() {
                d(e)
            })
        };

        function l() {
            if (t.addEventListener) {
                t.removeEventListener('load', l)
            };
            t.media = u || 'all'
        };
        if (t.addEventListener) {
            t.addEventListener('load', l)
        };
        t.onloadcssdefined = d;
        d(l);
        return t
    };
    if (typeof exports !== 'undefined') {
        exports.loadCSS = t
    } else {
        e.loadCSS = t
    }
}(typeof global !== 'undefined' ? global : this));;
(function(t) {
    if (!t.loadCSS) {
        return
    };
    var e = loadCSS.relpreload = {};
    e.support = function() {
        try {
            return t.document.createElement('link').relList.supports('preload')
        } catch (e) {
            return !1
        }
    };
    e.poly = function() {
        var n = t.document.getElementsByTagName('link');
        for (var r = 0; r < n.length; r++) {
            var e = n[r];
            if (e.rel === 'preload' && e.getAttribute('as') === 'style') {
                t.loadCSS(e.href, e, e.getAttribute('media'));
                e.rel = null
            }
        }
    };
    if (!e.support()) {
        e.poly();
        var r = t.setInterval(e.poly, 300);
        if (t.addEventListener) {
            t.addEventListener('load', function() {
                e.poly();
                t.clearInterval(r)
            })
        };
        if (t.attachEvent) {
            t.attachEvent('onload', function() {
                t.clearInterval(r)
            })
        }
    }
}(this));;
! function(t, e) {
    typeof module != 'undefined' ? module.exports = e() : typeof define == 'function' && typeof define.amd == 'object' ? define(e) : this[t] = e()
}('domready', function() {
    var o = [],
        e, t = document,
        i = t.documentElement.doScroll,
        d = 'DOMContentLoaded',
        n = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(t.readyState);
    return n || t.addEventListener(d, e = function() {
        t.removeEventListener(d, e), n = 1;
        while (e = o.shift()) e()
    }),
        function(e) {
            n ? setTimeout(e, 0) : o.push(e)
        }
});
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b
            }, h, !0), l = ta(function(a) {
                return I(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                } return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                } return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext;

    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(E(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(E(this, a || [], !0))
        },
        is: function(a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || F, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return K(a, "nextSibling")
        },
        prev: function(a) {
            return K(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = e || a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function N(a) {
        return a
    }

    function O(a) {
        throw a
    }

    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var R = r.Deferred();
    r.fn.ready = function(a) {
        return R.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
        }
    }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) T(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(r(a), c)
            })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        U = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function V() {
        this.expando = r.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
    }

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = $(c)
                } catch (e) {}
                X.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return X.hasData(a) || W.hasData(a)
        },
        data: function(a, b, c) {
            return X.access(a, b, c)
        },
        removeData: function(a, b) {
            X.remove(a, b)
        },
        _data: function(a, b, c) {
            return W.access(a, b, c)
        },
        _removeData: function(a, b) {
            W.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                X.set(this, a)
            }) : T(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X.get(f, a), void 0 !== c) return c;
                    if (c = _(f, a), void 0 !== c) return c
                } else this.each(function() {
                    X.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                X.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    W.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        ea = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function fa(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ga = {};

    function ha(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
    }

    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ia(this, !0)
        },
        hide: function() {
            return ia(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
    }

    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
    }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
                    g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
                    while (k--) g = g.lastChild;
                    r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
                } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
                k = 0;
                while (f = g[k++]) la.test(f.type || "") && c.push(f)
            }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() {
        return !0
    }

    function wa() {
        return !1
    }

    function xa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ya(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(L) || [""], j = b.length;
                while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    } return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return B(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return ya(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ya(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
    }

    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
        }
    }

    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }

    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(za, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0)
        },
        remove: function(a) {
            return Ka(this, a)
        },
        text: function(a) {
            return T(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ta = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--)
            if (a = Ua[c] + b, a in Va) return a
    }

    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b
    }

    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g
    }

    function $a(a, b, c) {
        var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b),
                i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
                    return $a(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, La.test(a) || (r.cssHooks[a + b].set = Ya)
    }), r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e)
    }
    r.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
    }

    function fb() {
        return a.setTimeout(function() {
            ab = void 0
        }), ab = r.now()
    }

    function gb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], cb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() {
                p || ia([a]), W.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }
    r.Animation = r.extend(kb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return fa(c.elem, a, ba.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
        },
        prefilters: [ib],
        prefilter: function(a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
        }
    }), r.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
        }, d
    }, r.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(da).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function() {
                    var b = kb(this, r.extend({}, a), f);
                    (e || W.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = W.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || r.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = W.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), r.each(["toggle", "show", "hide"], function(a, b) {
        var c = r.fn[b];
        r.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
        }
    }), r.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        r.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), r.timers = [], r.fx.tick = function() {
        var a, b = 0,
            c = r.timers;
        for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), ab = void 0
    }, r.fx.timer = function(a) {
        r.timers.push(a), r.fx.start()
    }, r.fx.interval = 13, r.fx.start = function() {
        bb || (bb = !0, eb())
    }, r.fx.stop = function() {
        bb = null
    }, r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, r.fn.delay = function(b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), lb = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
        }
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });

    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ")
    }

    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, qb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, qb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(L) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        } return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
            }
        }
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            } if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Rb = {
            0: 200,
            1223: 204
        },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || ra
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return T(this, function(a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.holdReady = function(a) {
        a ? r.readyWait++ : r.ready(!0)
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
    }, b || (a.jQuery = a.$ = r), r
});;
(function(e) {
    'use strict';
    if (typeof exports === 'object') {
        e(require('jquery'))
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], e)
    } else {
        e(jQuery)
    }
})(function(e) {
    'use strict';
    var n = function(e) {
        e = e || 'once';
        if (typeof e !== 'string') {
            throw new TypeError('The jQuery Once id parameter must be a string')
        };
        return e
    };
    e.fn.once = function(t) {
        var r = 'jquery-once-' + n(t);
        return this.filter(function() {
            return e(this).data(r) !== !0
        }).data(r, !0)
    };
    e.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData('jquery-once-' + n(e))
    };
    e.fn.findOnce = function(t) {
        var r = 'jquery-once-' + n(t);
        return this.filter(function() {
            return e(this).data(r) === !0
        })
    }
});;
(function() {
    var t = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};
    if (t !== null) {
        window.drupalSettings = JSON.parse(t.textContent)
    }
})();;;
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function(t, r, e) {
    t.throwError = function(t) {
        setTimeout(function() {
            throw t
        }, 0)
    };
    t.attachBehaviors = function(e, n) {
        e = e || document;
        n = n || r;
        var o = t.behaviors;
        Object.keys(o || {}).forEach(function(r) {
            if (typeof o[r].attach === 'function') {
                try {
                    o[r].attach(e, n)
                } catch (a) {
                    t.throwError(a)
                }
            }
        })
    };
    t.detachBehaviors = function(e, n, o) {
        e = e || document;
        n = n || r;
        o = o || 'unload';
        var a = t.behaviors;
        Object.keys(a || {}).forEach(function(r) {
            if (typeof a[r].detach === 'function') {
                try {
                    a[r].detach(e, n, o)
                } catch (c) {
                    t.throwError(c)
                }
            }
        })
    };
    t.checkPlain = function(t) {
        t = t.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return t
    };
    t.formatString = function(e, r) {
        var n = {};
        Object.keys(r || {}).forEach(function(e) {
            switch (e.charAt(0)) {
                case '@':
                    n[e] = t.checkPlain(r[e]);
                    break;
                case '!':
                    n[e] = r[e];
                    break;
                default:
                    n[e] = t.theme('placeholder', r[e]);
                    break
            }
        });
        return t.stringReplace(e, n, null)
    };
    t.stringReplace = function(e, n, r) {
        if (e.length === 0) {
            return e
        };
        if (!Array.isArray(r)) {
            r = Object.keys(n || {});
            r.sort(function(t, e) {
                return t.length - e.length
            })
        };
        if (r.length === 0) {
            return e
        };
        var c = r.pop(),
            a = e.split(c);
        if (r.length) {
            for (var o = 0; o < a.length; o++) {
                a[o] = t.stringReplace(a[o], n, r.slice(0))
            }
        };
        return a.join(n[c])
    };
    t.t = function(r, o, n) {
        n = n || {};
        n.context = n.context || '';
        if (typeof e !== 'undefined' && e.strings && e.strings[n.context] && e.strings[n.context][r]) {
            r = e.strings[n.context][r]
        };
        if (o) {
            r = t.formatString(r, o)
        };
        return r
    };
    t.url = function(t) {
        return r.path.baseUrl + r.path.pathPrefix + t
    };
    t.url.toAbsolute = function(t) {
        var r = document.createElement('a');
        try {
            t = decodeURIComponent(t)
        } catch (e) {};
        r.setAttribute('href', t);
        return r.cloneNode(!1).href
    };
    t.url.isLocal = function(e) {
        var n = t.url.toAbsolute(e),
            c = location.protocol;
        if (c === 'http:' && n.indexOf('https:') === 0) {
            c = 'https:'
        };
        var o = c + '//' + location.host + r.path.baseUrl.slice(0, -1);
        try {
            n = decodeURIComponent(n)
        } catch (a) {};
        try {
            o = decodeURIComponent(o)
        } catch (a) {};
        return n === o || n.indexOf(o + '/') === 0
    };
    t.formatPlural = function(n, o, a, c, u) {
        c = c || {};
        c['@count'] = n;
        var l = r.pluralDelimiter,
            f = t.t(o + l + a, c, u).split(l),
            i = 0;
        if (typeof e !== 'undefined' && e.pluralFormula) {
            i = n in e.pluralFormula ? e.pluralFormula[n] : e.pluralFormula.default
        } else if (c['@count'] !== 1) {
            i = 1
        };
        return f[i]
    };
    t.encodePath = function(t) {
        return window.encodeURIComponent(t).replace(/%2F/g, '/')
    };
    t.theme = function(e) {
        if (e in t.theme) {
            var a;
            for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
                o[r - 1] = arguments[r]
            };
            return (a = t.theme)[e].apply(a, o)
        }
    };
    t.theme.placeholder = function(e) {
        return '<em class="placeholder">' + t.checkPlain(e) + '</em>'
    }
})(Drupal, window.drupalSettings, window.drupalTranslations);;;
if (window.jQuery) {
    jQuery.noConflict()
};
document.documentElement.className += ' js';
(function(n, e, o) {
    n(function() {
        e.attachBehaviors(document, o)
    })
})(domready, Drupal, window.drupalSettings);;
/*! Picturefill - v3.0.1 - 2015-09-30
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
! function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function() {
        var b, c = document.createElement("source"),
            d = function(a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                    a.sizes = d
                }))
            },
            e = function() {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) d(b[a])
            },
            f = function() {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function() {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window),
    function(a, b, c) {
        "use strict";

        function d(a) {
            return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
        }

        function e(b, c) {
            var d = new a.Image;
            return d.onerror = function() {
                z[b] = !1, aa()
            }, d.onload = function() {
                z[b] = 1 === d.width, aa()
            }, d.src = c, "pending"
        }

        function f() {
            L = !1, O = a.devicePixelRatio, M = {}, N = {}, s.DPR = O || 1, P.width = Math.max(a.innerWidth || 0, y.clientWidth), P.height = Math.max(a.innerHeight || 0, y.clientHeight), P.vw = P.width / 100, P.vh = P.height / 100, r = [P.height, P.width, O].join("-"), P.em = s.getEmValue(), P.rem = P.em
        }

        function g(a, b, c, d) {
            var e, f, g, h;
            return "saveData" === A.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
        }

        function h(a) {
            var b, c = s.getSet(a),
                d = !1;
            "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
        }

        function i(a, b) {
            return a.res - b.res
        }

        function j(a, b, c) {
            var d;
            return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || _(d, d.set.sizes)), d
        }

        function k(a, b) {
            var c, d, e;
            if (a && b)
                for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                    if (a === s.makeUrl(e[c].url)) {
                        d = e[c];
                        break
                    } return d
        }

        function l(a, b) {
            var c, d, e, f, g = a.getElementsByTagName("source");
            for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
                srcset: f,
                media: e.getAttribute("media"),
                type: e.getAttribute("type"),
                sizes: e.getAttribute("sizes")
            })
        }

        function m(a, b) {
            function c(b) {
                var c, d = b.exec(a.substring(m));
                return d ? (c = d[0], m += c.length, c) : void 0
            }

            function e() {
                var a, c, d, e, f, i, j, k, l, m = !1,
                    o = {};
                for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), W.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : X.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : W.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
                m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
            }

            function f() {
                for (c(S), i = "", j = "in descriptor";;) {
                    if (k = a.charAt(m), "in descriptor" === j)
                        if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                        else {
                            if ("," === k) return m += 1, i && h.push(i), void e();
                            if ("(" === k) i += k, j = "in parens";
                            else {
                                if ("" === k) return i && h.push(i), void e();
                                i += k
                            }
                        }
                    else if ("in parens" === j)
                        if (")" === k) i += k, j = "in descriptor";
                        else {
                            if ("" === k) return h.push(i), void e();
                            i += k
                        }
                    else if ("after descriptor" === j)
                        if (d(k));
                        else {
                            if ("" === k) return void e();
                            j = "in descriptor", m -= 1
                        } m += 1
                }
            }
            for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
                if (c(T), m >= l) return n;
                g = c(U), h = [], "," === g.slice(-1) ? (g = g.replace(V, ""), e()) : f()
            }
        }

        function n(a) {
            function b(a) {
                function b() {
                    f && (g.push(f), f = "")
                }

                function c() {
                    g[0] && (h.push(g), g = [])
                }
                for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                    if (e = a.charAt(j), "" === e) return b(), c(), h;
                    if (k) {
                        if ("*" === e && "/" === a[j + 1]) {
                            k = !1, j += 2, b();
                            continue
                        }
                        j += 1
                    } else {
                        if (d(e)) {
                            if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                                j += 1;
                                continue
                            }
                            if (0 === i) {
                                b(), j += 1;
                                continue
                            }
                            e = " "
                        } else if ("(" === e) i += 1;
                        else if (")" === e) i -= 1;
                        else {
                            if ("," === e) {
                                b(), c(), j += 1;
                                continue
                            }
                            if ("/" === e && "*" === a.charAt(j + 1)) {
                                k = !0, j += 2;
                                continue
                            }
                        }
                        f += e, j += 1
                    }
                }
            }

            function c(a) {
                return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
            }
            var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
            for (f = b(a), g = f.length, e = 0; g > e; e++)
                if (h = f[e], i = h[h.length - 1], c(i)) {
                    if (j = i, h.pop(), 0 === h.length) return j;
                    if (h = h.join(" "), s.matchesMedia(h)) return j
                } return "100vw"
        }
        b.createElement("picture");
        var o, p, q, r, s = {},
            t = function() {},
            u = b.createElement("img"),
            v = u.getAttribute,
            w = u.setAttribute,
            x = u.removeAttribute,
            y = b.documentElement,
            z = {},
            A = {
                algorithm: ""
            },
            B = "data-pfsrc",
            C = B + "set",
            D = navigator.userAgent,
            E = /rident/.test(D) || /ecko/.test(D) && D.match(/rv\:(\d+)/) && RegExp.$1 > 35,
            F = "currentSrc",
            G = /\s+\+?\d+(e\d+)?w/,
            H = /(\([^)]+\))?\s*(.+)/,
            I = a.picturefillCFG,
            J = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
            K = "font-size:100%!important;",
            L = !0,
            M = {},
            N = {},
            O = a.devicePixelRatio,
            P = {
                px: 1,
                "in": 96
            },
            Q = b.createElement("a"),
            R = !1,
            S = /^[ \t\n\r\u000c]+/,
            T = /^[, \t\n\r\u000c]+/,
            U = /^[^ \t\n\r\u000c]+/,
            V = /[,]+$/,
            W = /^\d+$/,
            X = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
            Y = function(a, b, c, d) {
                a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
            },
            Z = function(a) {
                var b = {};
                return function(c) {
                    return c in b || (b[c] = a(c)), b[c]
                }
            },
            $ = function() {
                var a = /^([\d\.]+)(em|vw|px)$/,
                    b = function() {
                        for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                        return c
                    },
                    c = Z(function(a) {
                        return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                    });
                return function(b, d) {
                    var e;
                    if (!(b in M))
                        if (M[b] = !1, d && (e = b.match(a))) M[b] = e[1] * P[e[2]];
                        else try {
                            M[b] = new Function("e", c(b))(P)
                        } catch (f) {}
                    return M[b]
                }
            }(),
            _ = function(a, b) {
                return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
            },
            aa = function(a) {
                var c, d, e, f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                    for (s.setupRun(f), R = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            };
        o = a.console && console.warn ? function(a) {
            console.warn(a)
        } : t, F in u || (F = "src"), z["image/jpeg"] = !0, z["image/gif"] = !0, z["image/png"] = !0, z["image/svg+xml"] = b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in u, s.supSizes = "sizes" in u, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) {
            u.srcset = "data:,a", a.src = "data:,a", s.supSrcset = u.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
        }(b.createElement("img")), s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = A, s.supSrcset && (s.sel += ",img[" + C + "]"), s.DPR = O || 1, s.u = P, s.types = z, q = s.supSrcset && !s.supSizes, s.setSize = t, s.makeUrl = Z(function(a) {
            return Q.href = a, Q.href
        }), s.qsa = function(a, b) {
            return a.querySelectorAll(b)
        }, s.matchesMedia = function() {
            return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
                return !a || matchMedia(a).matches
            } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
        }, s.mMQ = function(a) {
            return a ? $(a) : !0
        }, s.calcLength = function(a) {
            var b = $(a, !0) || !1;
            return 0 > b && (b = !1), b
        }, s.supportsType = function(a) {
            return a ? z[a] : !0
        }, s.parseSize = Z(function(a) {
            var b = (a || "").match(H);
            return {
                media: b && b[1],
                length: b && b[2]
            }
        }), s.parseSet = function(a) {
            return a.cands || (a.cands = m(a.srcset, a)), a.cands
        }, s.getEmValue = function() {
            var a;
            if (!p && (a = b.body)) {
                var c = b.createElement("div"),
                    d = y.style.cssText,
                    e = a.style.cssText;
                c.style.cssText = J, y.style.cssText = K, a.style.cssText = K, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), y.style.cssText = d, a.style.cssText = e
            }
            return p || 16
        }, s.calcListLength = function(a) {
            if (!(a in N) || A.uT) {
                var b = s.calcLength(n(a));
                N[a] = b ? b : P.width
            }
            return N[a]
        }, s.setRes = function(a) {
            var b;
            if (a) {
                b = s.parseSet(a);
                for (var c = 0, d = b.length; d > c; c++) _(b[c], a.sizes)
            }
            return b
        }, s.setRes.res = _, s.applySetCandidate = function(a, b) {
            if (a.length) {
                var c, d, e, f, h, k, l, m, n, o = b[s.ns],
                    p = s.DPR;
                if (k = o.curSrc || b[F], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = E && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                    for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                        if (c = a[d], c.res >= p) {
                            e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                            break
                        } h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
            }
        }, s.setSrc = function(a, b) {
            var c;
            a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
        }, s.getSet = function(a) {
            var b, c, d, e = !1,
                f = a[s.ns].sets;
            for (b = 0; b < f.length && !e; b++)
                if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                    "pending" === d && (c = d), e = c;
                    break
                } return e
        }, s.parseSets = function(a, b, d) {
            var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
                j = a[s.ns];
            (j.src === c || d.src) && (j.src = v.call(a, "src"), j.src ? w.call(a, B, j.src) : x.call(a, B)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = v.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
                srcset: j.srcset,
                sizes: v.call(a, "sizes")
            }, j.sets.push(f), g = (q || j.src) && G.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
                url: j.src,
                d: 1,
                set: f
            }))) : j.src && j.sets.push({
                srcset: j.src,
                sizes: null
            }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g), h && s.supSrcset && !j.supported && (e ? (w.call(a, C, e), a.srcset = "") : x.call(a, C)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
        }, s.fillImg = function(a, b) {
            var c, d = b.reselect || b.reevaluate;
            a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
        }, s.setupRun = function() {
            (!R || L || O !== a.devicePixelRatio) && f()
        }, s.supPicture ? (aa = t, s.fillImg = t) : ! function() {
            var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                e = function() {
                    var a = b.readyState || "";
                    f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
                },
                f = setTimeout(e, b.body ? 9 : 99),
                g = function(a, b) {
                    var c, d, e = function() {
                        var f = new Date - d;
                        b > f ? c = setTimeout(e, b - f) : (c = null, a())
                    };
                    return function() {
                        d = new Date, c || (c = setTimeout(e, b))
                    }
                },
                h = y.clientHeight,
                i = function() {
                    L = Math.max(a.innerWidth || 0, y.clientWidth) !== P.width || y.clientHeight !== h, h = y.clientHeight, L && s.fillImgs()
                };
            Y(a, "resize", g(i, 99)), Y(b, "readystatechange", e)
        }(), s.picturefill = aa, s.fillImgs = aa, s.teardownRun = t, aa._ = s, a.picturefillCFG = {
            pf: s,
            push: function(a) {
                var b = a.shift();
                "function" == typeof s[b] ? s[b].apply(s, a) : (A[b] = a[0], R && s.fillImgs({
                    reselect: !0
                }))
            }
        };
        for (; I && I.length;) a.picturefillCFG.push(I.shift());
        a.picturefill = aa, "object" == typeof module && "object" == typeof module.exports ? module.exports = aa : "function" == typeof define && define.amd && define("picturefill", function() {
            return aa
        }), s.supPicture || (z["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
    }(window, document);;
(function(t, e, o) {
    "use strict";
    e.google_analytics = {};
    t(document).ready(function() {
        t(document.body).on("mousedown keyup touchstart", function(a) {
            t(a.target).closest("a,area").each(function() {
                if (e.google_analytics.isInternal(this.href)) {
                    if (t(this).is(".colorbox") && (o.google_analytics.trackColorbox)) {} else if (o.google_analytics.trackDownload && e.google_analytics.isDownload(this.href)) {
                        ga("send", {
                            hitType: "event",
                            eventCategory: "Downloads",
                            eventAction: e.google_analytics.getDownloadExtension(this.href).toUpperCase(),
                            eventLabel: e.google_analytics.getPageUrl(this.href),
                            transport: "beacon"
                        })
                    } else if (e.google_analytics.isInternalSpecial(this.href)) {
                        ga("send", {
                            hitType: "pageview",
                            page: e.google_analytics.getPageUrl(this.href),
                            transport: "beacon"
                        })
                    }
                } else {
                    if (o.google_analytics.trackMailto && t(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
                        ga("send", {
                            hitType: "event",
                            eventCategory: "Mails",
                            eventAction: "Click",
                            eventLabel: this.href.substring(7),
                            transport: "beacon"
                        })
                    } else if (o.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
                        if (o.google_analytics.trackDomainMode !== 2 || (o.google_analytics.trackDomainMode === 2 && !e.google_analytics.isCrossDomain(this.hostname, o.google_analytics.trackCrossDomains))) {
                            ga("send", {
                                hitType: "event",
                                eventCategory: "Outbound links",
                                eventAction: "Click",
                                eventLabel: this.href,
                                transport: "beacon"
                            })
                        }
                    }
                }
            })
        });
        if (o.google_analytics.trackUrlFragments) {
            window.onhashchange = function() {
                ga("send", {
                    hitType: "pageview",
                    page: location.pathname + location.search + location.hash
                })
            }
        };
        if (o.google_analytics.trackColorbox) {
            t(document).on("cbox_complete", function() {
                var o = t.colorbox.element().attr("href");
                if (o) {
                    ga("send", {
                        hitType: "pageview",
                        page: e.google_analytics.getPageUrl(o)
                    })
                }
            })
        }
    });
    e.google_analytics.isCrossDomain = function(e, o) {
        return t.inArray(e, o) > -1 ? !0 : !1
    };
    e.google_analytics.isDownload = function(e) {
        var t = new RegExp("\\.(" + o.google_analytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
        return t.test(e)
    };
    e.google_analytics.isInternal = function(e) {
        var t = new RegExp("^(https?):\/\/" + window.location.host, "i");
        return t.test(e)
    };
    e.google_analytics.isInternalSpecial = function(e) {
        var t = new RegExp("(\/go\/.*)$", "i");
        return t.test(e)
    };
    e.google_analytics.getPageUrl = function(e) {
        var t = new RegExp("^(https?):\/\/" + window.location.host, "i");
        return e.replace(t, "")
    };
    e.google_analytics.getDownloadExtension = function(e) {
        var a = new RegExp("\\.(" + o.google_analytics.trackDownloadExtensions + ")([\?#].*)?$", "i"),
            t = a.exec(e);
        return (t === null) ? "" : t[1]
    }
})(jQuery, Drupal, drupalSettings);;
(function(e, n, t) {
    var l = [],
        i = {
            _version: '3.3.1',
            _config: {
                'classPrefix': '',
                'enableClasses': !0,
                'enableJSClass': !0,
                'usePrefixes': !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                l.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                l.push({
                    name: null,
                    fn: e
                })
            }
        };
    t = t || function() {};
    t.prototype = i;
    var x = [];

    function o(e, n) {
        return typeof e === n
    };

    function w() {
        var r, e, i, s, f, a, n;
        for (var u in l) {
            if (l.hasOwnProperty(u)) {
                r = [];
                e = l[u];
                if (e.name) {
                    r.push(e.name.toLowerCase());
                    if (e.options && e.options.aliases && e.options.aliases.length) {
                        for (i = 0; i < e.options.aliases.length; i++) {
                            r.push(e.options.aliases[i].toLowerCase())
                        }
                    }
                };
                s = o(e.fn, 'function') ? e.fn() : e.fn;
                for (f = 0; f < r.length; f++) {
                    a = r[f];
                    n = a.split('.');
                    if (n.length === 1) {
                        t[n[0]] = s
                    } else {
                        if (t[n[0]] && !(t[n[0]] instanceof Boolean)) {
                            t[n[0]] = new Boolean(t[n[0]])
                        };
                        t[n[0]][n[1]] = s
                    };
                    x.push((s ? '' : 'no-') + n.join('-'))
                }
            }
        }
    };

    function d(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, '')
    };
    var g = 'Moz O ms Webkit',
        y = (i._config.usePrefixes ? g.split(' ') : []);
    i._cssomPrefixes = y;
    var c = function(n) {
        var f = prefixes.length,
            r = e.CSSRule,
            i;
        if (typeof r === 'undefined') {
            return undefined
        };
        if (!n) {
            return !1
        };
        n = n.replace(/^@/, '');
        i = n.replace(/-/g, '_').toUpperCase() + '_RULE';
        if (i in r) {
            return '@' + n
        };
        for (var t = 0; t < f; t++) {
            var o = prefixes[t],
                s = o.toUpperCase() + '_' + i;
            if (s in r) {
                return '@-' + o.toLowerCase() + '-' + n
            }
        };
        return !1
    };
    i.atRule = c;
    var m = (i._config.usePrefixes ? g.toLowerCase().split(' ') : []);
    i._domPrefixes = m;

    function j(e, n) {
        return !!~('' + e).indexOf(n)
    };

    function S(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    };

    function b(e, n, t) {
        var r;
        for (var i in e) {
            if (e[i] in n) {
                if (t === !1) {
                    return e[i]
                };
                r = n[e[i]];
                if (o(r, 'function')) {
                    return S(r, t || n)
                };
                return r
            }
        };
        return !1
    };

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return '-' + n.toLowerCase()
        }).replace(/^ms-/, '-ms-')
    };
    var f = n.documentElement,
        v = f.nodeName.toLowerCase() === 'svg';

    function s() {
        if (typeof n.createElement !== 'function') {
            return n.createElement(arguments[0])
        } else if (v) {
            return n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
        } else {
            return n.createElement.apply(n, arguments)
        }
    };
    var h = {
        elem: s('modernizr')
    };
    t._q.push(function() {
        delete h.elem
    });
    var r = {
        style: h.elem.style
    };
    t._q.unshift(function() {
        delete r.style
    });

    function E() {
        var e = n.body;
        if (!e) {
            e = s(v ? 'svg' : 'body');
            e.fake = !0
        };
        return e
    };

    function z(e, t, r, u) {
        var a = 'modernizr',
            o, p, d, c, l = s('div'),
            i = E();
        if (parseInt(r, 10)) {
            while (r--) {
                d = s('div');
                d.id = u ? u[r] : a + (r + 1);
                l.appendChild(d)
            }
        };
        o = s('style');
        o.type = 'text/css';
        o.id = 's' + a;
        (!i.fake ? l : i).appendChild(o);
        i.appendChild(l);
        if (o.styleSheet) {
            o.styleSheet.cssText = e
        } else {
            o.appendChild(n.createTextNode(e))
        };
        l.id = a;
        if (i.fake) {
            i.style.background = '';
            i.style.overflow = 'hidden';
            c = f.style.overflow;
            f.style.overflow = 'hidden';
            f.appendChild(i)
        };
        p = t(l, e);
        if (i.fake) {
            i.parentNode.removeChild(i);
            f.style.overflow = c;
            f.offsetHeight
        } else {
            l.parentNode.removeChild(l)
        };
        return !!p
    };

    function T(n, t) {
        var i = n.length;
        if ('CSS' in e && 'supports' in e.CSS) {
            while (i--) {
                if (e.CSS.supports(p(n[i]), t)) {
                    return !0
                }
            };
            return !1
        } else if ('CSSSupportsRule' in e) {
            var r = [];
            while (i--) {
                r.push('(' + p(n[i]) + ':' + t + ')')
            };
            r = r.join(' or ');
            return z('@supports (' + r + ') { #modernizr { position: absolute; } }', function(e) {
                return getComputedStyle(e, null).position == 'absolute'
            })
        };
        return undefined
    };

    function P(e, n, t, f) {
        f = o(f, 'undefined') ? !1 : f;
        if (!o(t, 'undefined')) {
            var m = T(e, t);
            if (!o(m, 'undefined')) {
                return m
            }
        };
        var a, l, p, i, c, h = ['modernizr', 'tspan'];
        while (!r.style) {
            a = !0;
            r.modElem = s(h.shift());
            r.style = r.modElem.style
        };

        function u() {
            if (a) {
                delete r.style;
                delete r.modElem
            }
        };
        p = e.length;
        for (l = 0; l < p; l++) {
            i = e[l];
            c = r.style[i];
            if (j(i, '-')) {
                i = d(i)
            };
            if (r.style[i] !== undefined) {
                if (!f && !o(t, 'undefined')) {
                    try {
                        r.style[i] = t
                    } catch (v) {};
                    if (r.style[i] != c) {
                        u();
                        return n == 'pfx' ? i : !0
                    }
                } else {
                    u();
                    return n == 'pfx' ? i : !0
                }
            }
        };
        u();
        return !1
    };

    function u(e, n, t, i, f) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + ' ' + y.join(r + ' ') + r).split(' ');
        if (o(n, 'string') || o(n, 'undefined')) {
            return P(s, n, i, f)
        } else {
            s = (e + ' ' + (m).join(r + ' ') + r).split(' ');
            return b(s, n, t)
        }
    };
    i.testAllProps = u;
    var C = i.prefixed = function(e, n, t) {
        if (e.indexOf('@') === 0) {
            return c(e)
        };
        if (e.indexOf('-') != -1) {
            e = d(e)
        };
        if (!n) {
            return u(e, 'pfx')
        } else {
            return u(e, n, t)
        }
    };
    t.addTest('objectfit', !!C('objectFit'), {
        aliases: ['object-fit']
    });
    w();
    delete i.addTest;
    delete i.addAsyncTest;
    for (var a = 0; a < t._q.length; a++) {
        t._q[a]()
    };
    e.Modernizr = t
})(window, document, Modernizr);;
/*! jquery.cookie v1.4.1 | MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
});;
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(a, b) {
    "use strict";

    function c(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    var d;
    if (b = b || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = b.touchBoundary || 10, this.layer = a, this.tapDelay = b.tapDelay || 200, !FastClick.notNeeded(a)) {
        for (var e = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], f = this, g = 0, h = e.length; h > g; g++) f[e[g]] = c(f[e[g]], f);
        deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
            var e = Node.prototype.removeEventListener;
            "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
        }, a.addEventListener = function(b, c, d) {
            var e = Node.prototype.addEventListener;
            "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
                a.propagationStopped || c(a)
            }), d) : e.call(a, b, c, d)
        }), "function" == typeof a.onclick && (d = a.onclick, a.addEventListener("click", function(a) {
            d(a)
        }, !1), a.onclick = null)
    }
}
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (a.disabled) return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === a.type || a.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(a.className)
}, FastClick.prototype.needsFocus = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (a.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !a.disabled && !a.readOnly;
        default:
            return /\bneedsfocus\b/.test(a.className)
    }
}, FastClick.prototype.sendClick = function(a, b) {
    "use strict";
    var c, d;
    document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
}, FastClick.prototype.determineEventType = function(a) {
    "use strict";
    return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(a) {
    "use strict";
    var b;
    deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
}, FastClick.prototype.updateScrollParent = function(a) {
    "use strict";
    var b, c;
    if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
        c = a;
        do {
            if (c.scrollHeight > c.offsetHeight) {
                b = c, a.fastClickScrollParent = c;
                break
            }
            c = c.parentElement
        } while (c)
    }
    b && (b.fastClickLastScrollTop = b.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    "use strict";
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
}, FastClick.prototype.onTouchStart = function(a) {
    "use strict";
    var b, c, d;
    if (a.targetTouches.length > 1) return !0;
    if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], deviceIsIOS) {
        if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
            this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(a) {
    "use strict";
    var b = a.changedTouches[0],
        c = this.touchBoundary;
    return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
}, FastClick.prototype.onTouchMove = function(a) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
}, FastClick.prototype.findControl = function(a) {
    "use strict";
    return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(a) {
    "use strict";
    var b, c, d, e, f, g = this.targetElement;
    if (!this.trackingClick) return !0;
    if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
    if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
        if (b = this.findControl(g)) {
            if (this.focus(g), deviceIsAndroid) return !1;
            g = b
        }
    } else if (this.needsFocus(g)) return a.timeStamp - c > 100 || deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.sendClick(g, a), deviceIsIOS && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
    return deviceIsIOS && !deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(a) {
    "use strict";
    return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
}, FastClick.prototype.onClick = function(a) {
    "use strict";
    var b;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var a = this.layer;
    deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(a) {
    "use strict";
    var b, c, d;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid) return !0;
        if (b = document.querySelector("meta[name=viewport]")) {
            if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
            if (c > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
    }
    if (deviceIsBlackBerry10 && (d = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), d[1] >= 10 && d[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
        if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
        if (document.documentElement.scrollWidth <= window.outerWidth) return !0
    }
    return "none" === a.style.msTouchAction ? !0 : !1
}, FastClick.attach = function(a, b) {
    "use strict";
    return new FastClick(a, b)
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;;
/*! http://mths.be/placeholder v2.0.8 by @mathias */
! function(a, b, c) {
    function d(a) {
        var b = {},
            d = /^jQuery\d+$/;
        return c.each(a.attributes, function(a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        }), b
    }

    function e(a, b) {
        var d = this,
            e = c(d);
        if (d.value == e.attr("placeholder") && e.hasClass("placeholder"))
            if (e.data("placeholder-password")) {
                if (e = e.hide().next().show().attr("id", e.removeAttr("id").data("placeholder-id")), a === !0) return e[0].value = b;
                e.focus()
            } else d.value = "", e.removeClass("placeholder"), d == g() && d.select()
    }

    function f() {
        var a, b = this,
            f = c(b),
            g = this.id;
        if ("" == b.value) {
            if ("password" == b.type) {
                if (!f.data("placeholder-textinput")) {
                    try {
                        a = f.clone().attr({
                            type: "text"
                        })
                    } catch (h) {
                        a = c("<input>").attr(c.extend(d(this), {
                            type: "text"
                        }))
                    }
                    a.removeAttr("name").data({
                        "placeholder-password": f,
                        "placeholder-id": g
                    }).bind("focus.placeholder", e), f.data({
                        "placeholder-textinput": a,
                        "placeholder-id": g
                    }).before(a)
                }
                f = f.removeAttr("id").hide().prev().attr("id", g).show()
            }
            f.addClass("placeholder"), f[0].value = f.attr("placeholder")
        } else f.removeClass("placeholder")
    }

    function g() {
        try {
            return b.activeElement
        } catch (a) {}
    }
    var h, i, j = "[object OperaMini]" == Object.prototype.toString.call(a.operamini),
        k = "placeholder" in b.createElement("input") && !j,
        l = "placeholder" in b.createElement("textarea") && !j,
        m = c.fn,
        n = c.valHooks,
        o = c.propHooks;
    k && l ? (i = m.placeholder = function() {
        return this
    }, i.input = i.textarea = !0) : (i = m.placeholder = function() {
        var a = this;
        return a.filter((k ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": e,
            "blur.placeholder": f
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
    }, i.input = k, i.textarea = l, h = {
        get: function(a) {
            var b = c(a),
                d = b.data("placeholder-password");
            return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
        },
        set: function(a, b) {
            var d = c(a),
                h = d.data("placeholder-password");
            return h ? h[0].value = b : d.data("placeholder-enabled") ? ("" == b ? (a.value = b, a != g() && f.call(a)) : d.hasClass("placeholder") ? e.call(a, !0, b) || (a.value = b) : a.value = b, d) : a.value = b
        }
    }, k || (n.input = h, o.value = h), l || (n.textarea = h, o.value = h), c(function() {
        c(b).delegate("form", "submit.placeholder", function() {
            var a = c(".placeholder", this).each(e);
            setTimeout(function() {
                a.each(f)
            }, 10)
        })
    }), c(a).bind("beforeunload.placeholder", function() {
        c(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery);;
(function(t, e, s, n) {
    'use strict';
    var u = function(e) {
        var i = e.length,
            n = t('head');
        while (i--) {
            if (n.has('.' + e[i]).length === 0) {
                n.append('<meta class="' + e[i] + '" />')
            }
        }
    };
    u(['foundation-mq-small', 'foundation-mq-medium', 'foundation-mq-large', 'foundation-mq-xlarge', 'foundation-mq-xxlarge', 'foundation-data-attribute-namespace']);
    t(function() {
        if (typeof FastClick !== 'undefined') {
            if (typeof s.body !== 'undefined') {
                FastClick.attach(s.body)
            }
        }
    });
    var i = function(e, i) {
            if (typeof e === 'string') {
                if (i) {
                    var n;
                    if (i.jquery) {
                        n = i[0];
                        if (!n) return i
                    } else {
                        n = i
                    };
                    return t(n.querySelectorAll(e))
                };
                return t(s.querySelectorAll(e))
            };
            return t(e, i)
        },
        a = function(t) {
            var e = [];
            if (!t) e.push('data');
            if (this.namespace.length > 0) e.push(this.namespace);
            e.push(this.name);
            return e.join('-')
        },
        r = function(t) {
            var i = t.split('-'),
                e = i.length,
                n = [];
            while (e--) {
                if (e !== 0) {
                    n.push(i[e])
                } else {
                    if (this.namespace.length > 0) {
                        n.push(this.namespace, i[e])
                    } else {
                        n.push(i[e])
                    }
                }
            };
            return n.reverse().join('-')
        },
        o = function(e, n) {
            var s = this,
                a = !i(this).data(this.attr_name(!0));
            if (i(this.scope).is('[' + this.attr_name() + ']')) {
                i(this.scope).data(this.attr_name(!0) + '-init', t.extend({}, this.settings, (n || e), this.data_options(i(this.scope))));
                if (a) {
                    this.events(this.scope)
                }
            } else {
                i('[' + this.attr_name() + ']', this.scope).each(function() {
                    var a = !i(this).data(s.attr_name(!0) + '-init');
                    i(this).data(s.attr_name(!0) + '-init', t.extend({}, s.settings, (n || e), s.data_options(i(this))));
                    if (a) {
                        s.events(this)
                    }
                })
            };
            if (typeof e === 'string') {
                return this[e].call(this, n)
            }
        },
        l = function(t, e) {
            function i() {
                e(t[0])
            };

            function n() {
                this.one('load', i);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var t = this.attr('src'),
                        e = t.match(/\?/) ? '&' : '?';
                    e += 'random=' + (new Date()).getTime();
                    this.attr('src', t + e)
                }
            };
            if (!t.attr('src')) {
                i();
                return
            };
            if (t[0].complete || t[0].readyState === 4) {
                i()
            } else {
                n.call(t)
            }
        };
    e.matchMedia = e.matchMedia || (function(t) {
        'use strict';
        var s, i = t.documentElement,
            a = i.firstElementChild || i.firstChild,
            n = t.createElement('body'),
            e = t.createElement('div');
        e.id = 'mq-test-1';
        e.style.cssText = 'position:absolute;top:-100em';
        n.style.background = 'none';
        n.appendChild(e);
        return function(t) {
            e.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>';
            i.insertBefore(n, a);
            s = e.offsetWidth === 42;
            i.removeChild(n);
            return {
                matches: s,
                media: t
            }
        }
    }(s));
    (function(t) {
        var s, i = 0,
            a = ['webkit', 'moz'],
            n = e.requestAnimationFrame,
            r = e.cancelAnimationFrame,
            o = 'undefined' !== typeof jQuery.fx;
        for (; i < a.length && !n; i++) {
            n = e[a[i] + 'RequestAnimationFrame'];
            r = r || e[a[i] + 'CancelAnimationFrame'] || e[a[i] + 'CancelRequestAnimationFrame']
        };

        function l() {
            if (s) {
                n(l);
                if (o) {
                    jQuery.fx.tick()
                }
            }
        };
        if (n) {
            e.requestAnimationFrame = n;
            e.cancelAnimationFrame = r;
            if (o) {
                jQuery.fx.timer = function(t) {
                    if (t() && jQuery.timers.push(t) && !s) {
                        s = !0;
                        l()
                    }
                };
                jQuery.fx.stop = function() {
                    s = !1
                }
            }
        } else {
            e.requestAnimationFrame = function(t) {
                var n = new Date().getTime(),
                    s = Math.max(0, 16 - (n - i)),
                    a = e.setTimeout(function() {
                        t(n + s)
                    }, s);
                i = n + s;
                return a
            };
            e.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
        }
    }(jQuery));

    function f(t) {
        if (typeof t === 'string' || t instanceof String) {
            t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '')
        };
        return t
    };
    e.Foundation = {
        name: 'Foundation',
        version: '5.4.5',
        media_queries: {
            small: i('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            medium: i('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            large: i('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            xlarge: i('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            xxlarge: i('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
        },
        stylesheet: t('<style></style>').appendTo('head')[0].sheet,
        global: {
            namespace: n
        },
        init: function(t, n, s, a, o) {
            var u = [t, s, a, o],
                r = [];
            this.rtl = /rtl/i.test(i('html').attr('dir'));
            this.scope = t || this.scope;
            this.set_namespace();
            if (n && typeof n === 'string' && !/reflow/i.test(n)) {
                if (this.libs.hasOwnProperty(n)) {
                    r.push(this.init_lib(n, u))
                }
            } else {
                for (var l in this.libs) {
                    r.push(this.init_lib(l, n))
                }
            };
            i(e).load(function() {
                i(e).trigger('resize.fndtn.clearing').trigger('resize.fndtn.dropdown').trigger('resize.fndtn.equalizer').trigger('resize.fndtn.interchange').trigger('resize.fndtn.joyride').trigger('resize.fndtn.magellan').trigger('resize.fndtn.topbar').trigger('resize.fndtn.slider')
            });
            return t
        },
        init_lib: function(e, i) {
            if (this.libs.hasOwnProperty(e)) {
                this.patch(this.libs[e]);
                if (i && i.hasOwnProperty(e)) {
                    if (typeof this.libs[e].settings !== 'undefined') {
                        t.extend(!0, this.libs[e].settings, i[e])
                    } else if (typeof this.libs[e].defaults !== 'undefined') {
                        t.extend(!0, this.libs[e].defaults, i[e])
                    };
                    return this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])
                };
                i = i instanceof Array ? i : new Array(i);
                return this.libs[e].init.apply(this.libs[e], i)
            };
            return function() {}
        },
        patch: function(t) {
            t.scope = this.scope;
            t.namespace = this.global.namespace;
            t.rtl = this.rtl;
            t['data_options'] = this.utils.data_options;
            t['attr_name'] = a;
            t['add_namespace'] = r;
            t['bindings'] = o;
            t['S'] = this.utils.S
        },
        inherit: function(t, e) {
            var i = e.split(' '),
                n = i.length;
            while (n--) {
                if (this.utils.hasOwnProperty(i[n])) {
                    t[i[n]] = this.utils[i[n]]
                }
            }
        },
        set_namespace: function() {
            var e = (this.global.namespace === n) ? t('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;
            this.global.namespace = (e === n || /false/i.test(e)) ? '' : e
        },
        libs: {},
        utils: {
            S: i,
            throttle: function(t, e) {
                var i = null;
                return function() {
                    var n = this,
                        s = arguments;
                    if (i == null) {
                        i = setTimeout(function() {
                            t.apply(n, s);
                            i = null
                        }, e)
                    }
                }
            },
            debounce: function(t, e, i) {
                var n, s;
                return function() {
                    var a = this,
                        r = arguments,
                        o = function() {
                            n = null;
                            if (!i) s = t.apply(a, r)
                        },
                        l = i && !n;
                    clearTimeout(n);
                    n = setTimeout(o, e);
                    if (l) s = t.apply(a, r);
                    return s
                }
            },
            data_options: function(e, n) {
                n = n || 'options';
                var o = {},
                    a, i, r, u = function(t) {
                        var e = Foundation.global.namespace;
                        if (e.length > 0) {
                            return t.data(e + '-' + n)
                        };
                        return t.data(n)
                    };
                var s = u(e);
                if (typeof s === 'object') {
                    return s
                };
                r = (s || ':').split(';');
                a = r.length;

                function f(t) {
                    return !isNaN(t - 0) && t !== null && t !== '' && t !== !1 && t !== !0
                };

                function l(e) {
                    if (typeof e === 'string') return t.trim(e);
                    return e
                }
                while (a--) {
                    i = r[a].split(':');
                    i = [i[0], i.slice(1).join(':')];
                    if (/true/i.test(i[1])) i[1] = !0;
                    if (/false/i.test(i[1])) i[1] = !1;
                    if (f(i[1])) {
                        if (i[1].indexOf('.') === -1) {
                            i[1] = parseInt(i[1], 10)
                        } else {
                            i[1] = parseFloat(i[1])
                        }
                    };
                    if (i.length === 2 && i[0].length > 0) {
                        o[l(i[0])] = l(i[1])
                    }
                };
                return o
            },
            register_media: function(e, i) {
                if (Foundation.media_queries[e] === n) {
                    t('head').append('<meta class="' + i + '"/>');
                    Foundation.media_queries[e] = f(t('.' + i).css('font-family'))
                }
            },
            add_custom_rule: function(t, e) {
                if (e === n && Foundation.stylesheet) {
                    Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length)
                } else {
                    var i = Foundation.media_queries[e];
                    if (i !== n) {
                        Foundation.stylesheet.insertRule('@media ' + Foundation.media_queries[e] + '{ ' + t + ' }')
                    }
                }
            },
            image_loaded: function(t, e) {
                var n = this,
                    i = t.length;
                if (i === 0) {
                    e(t)
                };
                t.each(function() {
                    l(n.S(this), function() {
                        i -= 1;
                        if (i === 0) {
                            e(t)
                        }
                    })
                })
            },
            random_str: function() {
                if (!this.fidx) this.fidx = 0;
                this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');
                return this.prefix + (this.fidx++).toString(36)
            }
        }
    };
    t.fn.foundation = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            Foundation.init.apply(Foundation, [this].concat(t));
            return this
        })
    }
}(jQuery, window, window.document));;
(function(t, e, a, s) {
    'use strict';
    Foundation.libs.topbar = {
        name: 'topbar',
        version: '5.4.5',
        settings: {
            index: 0,
            sticky_class: 'sticky',
            custom_back_text: !0,
            back_text: 'Back',
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: 'all'
        },
        init: function(e, s, i) {
            Foundation.inherit(this, 'add_custom_rule register_media throttle');
            var a = this;
            a.register_media('topbar', 'foundation-mq-topbar');
            this.bindings(s, i);
            a.S('[' + this.attr_name() + ']', this.scope).each(function() {
                var e = t(this),
                    i = e.data(a.attr_name(!0) + '-init'),
                    n = a.S('section, .top-bar-section', this);
                e.data('index', 0);
                var s = e.parent();
                if (s.hasClass('fixed') || a.is_sticky(e, s, i)) {
                    a.settings.sticky_class = i.sticky_class;
                    a.settings.sticky_topbar = e;
                    e.data('height', s.outerHeight());
                    e.data('stickyoffset', s.offset().top)
                } else {
                    e.data('height', e.outerHeight())
                };
                if (!i.assembled) {
                    a.assemble(e)
                };
                if (i.is_hover) {
                    a.S('.has-dropdown', e).addClass('not-click')
                } else {
                    a.S('.has-dropdown', e).removeClass('not-click')
                };
                a.add_custom_rule('.f-topbar-fixed { padding-top: ' + e.data('height') + 'px }');
                if (s.hasClass('fixed')) {
                    a.S('body').addClass('f-topbar-fixed')
                }
            })
        },
        is_sticky: function(t, s, e) {
            var a = s.hasClass(e.sticky_class);
            if (a && e.sticky_on === 'all') {
                return !0
            } else if (a && this.small() && e.sticky_on === 'small') {
                return (matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches)
            } else if (a && this.medium() && e.sticky_on === 'medium') {
                return (matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches)
            } else if (a && this.large() && e.sticky_on === 'large') {
                return (matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches)
            };
            return !1
        },
        toggle: function(s) {
            var i = this,
                a;
            if (s) {
                a = i.S(s).closest('[' + this.attr_name() + ']')
            } else {
                a = i.S('[' + this.attr_name() + ']')
            };
            var o = a.data(this.attr_name(!0) + '-init'),
                n = i.S('section, .top-bar-section', a);
            if (i.breakpoint()) {
                if (!i.rtl) {
                    n.css({
                        left: '0%'
                    });
                    t('>.name', n).css({
                        left: '100%'
                    })
                } else {
                    n.css({
                        right: '0%'
                    });
                    t('>.name', n).css({
                        right: '100%'
                    })
                };
                i.S('li.moved', n).removeClass('moved');
                a.data('index', 0);
                a.toggleClass('expanded').css('height', '')
            };
            if (o.scrolltop) {
                if (!a.hasClass('expanded')) {
                    if (a.hasClass('fixed')) {
                        a.parent().addClass('fixed');
                        a.removeClass('fixed');
                        i.S('body').addClass('f-topbar-fixed')
                    }
                } else if (a.parent().hasClass('fixed')) {
                    if (o.scrolltop) {
                        a.parent().removeClass('fixed');
                        a.addClass('fixed');
                        i.S('body').removeClass('f-topbar-fixed');
                        e.scrollTo(0, 0)
                    } else {
                        a.parent().removeClass('expanded')
                    }
                }
            } else {
                if (i.is_sticky(a, a.parent(), o)) {
                    a.parent().addClass('fixed')
                };
                if (a.parent().hasClass('fixed')) {
                    if (!a.hasClass('expanded')) {
                        a.removeClass('fixed');
                        a.parent().removeClass('expanded');
                        i.update_sticky_positioning()
                    } else {
                        a.addClass('fixed');
                        a.parent().addClass('expanded');
                        i.S('body').addClass('f-topbar-fixed')
                    }
                }
            }
        },
        timer: null,
        events: function(s) {
            var a = this,
                i = this.S;
            i(this.scope).off('.topbar').on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function(t) {
                t.preventDefault();
                a.toggle(this)
            }).on('click.fndtn.topbar', '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function(e) {
                var s = t(this).closest('li');
                if (a.breakpoint() && !s.hasClass('back') && !s.hasClass('has-dropdown')) {
                    a.toggle()
                }
            }).on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function(e) {
                var s = i(this),
                    n = i(e.target),
                    o = s.closest('[' + a.attr_name() + ']'),
                    r = o.data(a.attr_name(!0) + '-init');
                if (n.data('revealId')) {
                    a.toggle();
                    return
                };
                if (a.breakpoint()) return;
                if (r.is_hover && !Modernizr.touch) return;
                e.stopImmediatePropagation();
                if (s.hasClass('hover')) {
                    s.removeClass('hover').find('li').removeClass('hover');
                    s.parents('li.hover').removeClass('hover')
                } else {
                    s.addClass('hover');
                    t(s).siblings().removeClass('hover');
                    if (n[0].nodeName === 'A' && n.parent().hasClass('has-dropdown')) {
                        e.preventDefault()
                    }
                }
            }).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function(t) {
                if (a.breakpoint()) {
                    t.preventDefault();
                    var s = i(this),
                        e = s.closest('[' + a.attr_name() + ']'),
                        n = e.find('section, .top-bar-section'),
                        r = s.next('.dropdown').outerHeight(),
                        o = s.closest('li');
                    e.data('index', e.data('index') + 1);
                    o.addClass('moved');
                    if (!a.rtl) {
                        n.css({
                            left: -(100 * e.data('index')) + '%'
                        });
                        n.find('>.name').css({
                            left: 100 * e.data('index') + '%'
                        })
                    } else {
                        n.css({
                            right: -(100 * e.data('index')) + '%'
                        });
                        n.find('>.name').css({
                            right: 100 * e.data('index') + '%'
                        })
                    };
                    e.css('height', s.siblings('ul').outerHeight(!0) + e.data('height'))
                }
            });
            i(e).off('.topbar').on('resize.fndtn.topbar', a.throttle(function() {
                a.resize.call(a)
            }, 50)).trigger('resize').trigger('resize.fndtn.topbar').load(function() {
                i(this).trigger('resize.fndtn.topbar')
            });
            i('body').off('.topbar').on('click.fndtn.topbar', function(t) {
                var e = i(t.target).closest('li').closest('li.hover');
                if (e.length > 0) {
                    return
                };
                i('[' + a.attr_name() + '] li.hover').removeClass('hover')
            });
            i(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function(t) {
                t.preventDefault();
                var n = i(this),
                    e = n.closest('[' + a.attr_name() + ']'),
                    s = e.find('section, .top-bar-section'),
                    d = e.data(a.attr_name(!0) + '-init'),
                    o = n.closest('li.moved'),
                    r = o.parent();
                e.data('index', e.data('index') - 1);
                if (!a.rtl) {
                    s.css({
                        left: -(100 * e.data('index')) + '%'
                    });
                    s.find('>.name').css({
                        left: 100 * e.data('index') + '%'
                    })
                } else {
                    s.css({
                        right: -(100 * e.data('index')) + '%'
                    });
                    s.find('>.name').css({
                        right: 100 * e.data('index') + '%'
                    })
                };
                if (e.data('index') === 0) {
                    e.css('height', '')
                } else {
                    e.css('height', r.outerHeight(!0) + e.data('height'))
                };
                setTimeout(function() {
                    o.removeClass('moved')
                }, 300)
            });
            i(this.scope).find('.dropdown a').focus(function() {
                t(this).parents('.has-dropdown').addClass('hover')
            }).blur(function() {
                t(this).parents('.has-dropdown').removeClass('hover')
            })
        },
        resize: function() {
            var t = this;
            t.S('[' + this.attr_name() + ']').each(function() {
                var e = t.S(this),
                    o = e.data(t.attr_name(!0) + '-init'),
                    s = e.parent('.' + t.settings.sticky_class),
                    i;
                if (!t.breakpoint()) {
                    var n = e.hasClass('expanded');
                    e.css('height', '').removeClass('expanded').find('li').removeClass('hover');
                    if (n) {
                        t.toggle(e)
                    }
                };
                if (t.is_sticky(e, s, o)) {
                    if (s.hasClass('fixed')) {
                        s.removeClass('fixed');
                        i = s.offset().top;
                        if (t.S(a.body).hasClass('f-topbar-fixed')) {
                            i -= e.data('height')
                        };
                        e.data('stickyoffset', i);
                        s.addClass('fixed')
                    } else {
                        i = s.offset().top;
                        e.data('stickyoffset', i)
                    }
                }
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries['topbar']).matches
        },
        small: function() {
            return matchMedia(Foundation.media_queries['small']).matches
        },
        medium: function() {
            return matchMedia(Foundation.media_queries['medium']).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries['large']).matches
        },
        assemble: function(e) {
            var a = this,
                s = e.data(this.attr_name(!0) + '-init'),
                i = a.S('section, .top-bar-section', e);
            i.detach();
            a.S('.has-dropdown>a', i).each(function() {
                var i = a.S(this),
                    n = i.siblings('.dropdown'),
                    o = i.attr('href'),
                    e;
                if (!n.find('.title.back').length) {
                    if (s.mobile_show_parent_link == !0 && o) {
                        e = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + o + '">' + i.html() + '</a></li>')
                    } else {
                        e = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>')
                    };
                    if (s.custom_back_text == !0) {
                        t('h5>a', e).html(s.back_text)
                    } else {
                        t('h5>a', e).html('&laquo; ' + i.html())
                    };
                    n.prepend(e)
                }
            });
            i.appendTo(e);
            this.sticky();
            this.assembled(e)
        },
        assembled: function(e) {
            e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function(e) {
            var a = 0,
                s = this;
            t('> li', e).each(function() {
                a += s.S(this).outerHeight(!0)
            });
            return a
        },
        sticky: function() {
            var t = this;
            this.S(e).on('scroll', function() {
                t.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var a = '.' + this.settings.sticky_class,
                i = this.S(e),
                t = this;
            if (t.settings.sticky_topbar && t.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var s = this.settings.sticky_topbar.data('stickyoffset');
                if (!t.S(a).hasClass('expanded')) {
                    if (i.scrollTop() > (s)) {
                        if (!t.S(a).hasClass('fixed')) {
                            t.S(a).addClass('fixed');
                            t.S('body').addClass('f-topbar-fixed')
                        }
                    } else if (i.scrollTop() <= s) {
                        if (t.S(a).hasClass('fixed')) {
                            t.S(a).removeClass('fixed');
                            t.S('body').removeClass('f-topbar-fixed')
                        }
                    }
                }
            }
        },
        off: function() {
            this.S(this.scope).off('.fndtn.topbar');
            this.S(e).off('.fndtn.topbar')
        },
        reflow: function() {}
    }
}(jQuery, window, window.document));;
(function(t, a, n, e) {
    'use strict';
    Foundation.libs.tab = {
        name: 'tab',
        version: '5.4.5',
        settings: {
            active_class: 'active',
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(t, a, e) {
            var n = this,
                i = this.S;
            this.bindings(a, e);
            this.handle_location_hash_change();
            i('[' + this.attr_name() + '] > .active > a', this.scope).each(function() {
                n.default_tab_hashes.push(this.hash)
            })
        },
        events: function() {
            var t = this,
                e = this.S,
                n = function(a) {
                    var n = e(this).closest('[' + t.attr_name() + ']').data(t.attr_name(!0) + '-init');
                    if (!n.is_hover || Modernizr.touch) {
                        a.preventDefault();
                        a.stopPropagation();
                        t.toggle_active_tab(e(this).parent())
                    }
                };
            e(this.scope).off('.tab').on('focus.fndtn.tab', '[' + this.attr_name() + '] > * > a', n).on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', n).on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function(a) {
                var n = e(this).closest('[' + t.attr_name() + ']').data(t.attr_name(!0) + '-init');
                if (n.is_hover) t.toggle_active_tab(e(this).parent())
            });
            e(a).on('hashchange.fndtn.tab', function(a) {
                a.preventDefault();
                t.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function() {
            var a = this,
                n = this.S;
            n('[' + this.attr_name() + ']', this.scope).each(function() {
                var l = n(this).data(a.attr_name(!0) + '-init');
                if (l.deep_linking) {
                    var i;
                    if (l.scroll_to_content) {
                        i = a.scope.location.hash
                    } else {
                        i = a.scope.location.hash.replace('fndtn-', '')
                    };
                    if (i != '') {
                        var s = n(i);
                        if (s.hasClass('content') && s.parent().hasClass('tab-content')) {
                            a.toggle_active_tab(t('[' + a.attr_name() + '] > * > a[href=' + i + ']').parent())
                        } else {
                            var r = s.closest('.content').attr('id');
                            if (r != e) {
                                a.toggle_active_tab(t('[' + a.attr_name() + '] > * > a[href=#' + r + ']').parent(), i)
                            }
                        }
                    } else {
                        for (var o in a.default_tab_hashes) {
                            a.toggle_active_tab(t('[' + a.attr_name() + '] > * > a[href=' + a.default_tab_hashes[o] + ']').parent())
                        }
                    }
                }
            })
        },
        toggle_active_tab: function(i, s) {
            var o = this.S,
                h = i.closest('[' + this.attr_name() + ']'),
                d = i.find('a'),
                b = i.children('a').first(),
                r = '#' + b.attr('href').split('#')[1],
                c = o(r),
                f = i.siblings(),
                l = h.data(this.attr_name(!0) + '-init'),
                u = function(a) {
                    var i = t(this),
                        s = t(this).parents('li').prev().children('[role="tab"]'),
                        r = t(this).parents('li').next().children('[role="tab"]'),
                        e;
                    switch (a.keyCode) {
                        case 37:
                            e = s;
                            break;
                        case 39:
                            e = r;
                            break;
                        default:
                            e = !1;
                            break
                    };
                    if (e.length) {
                        i.attr({
                            'tabindex': '-1',
                            'aria-selected': null
                        });
                        e.attr({
                            'tabindex': '0',
                            'aria-selected': !0
                        }).focus()
                    };
                    t('[role="tabpanel"]').attr('aria-hidden', 'true');
                    t('#' + t(n.activeElement).attr('href').substring(1)).attr('aria-hidden', null)
                };
            if (o(this).data(this.data_attr('tab-content'))) {
                r = '#' + o(this).data(this.data_attr('tab-content')).split('#')[1];
                c = o(r)
            };
            if (l.deep_linking) {
                if (l.scroll_to_content) {
                    a.location.hash = s || r;
                    if (s == e || s == r) {
                        i.parent()[0].scrollIntoView()
                    } else {
                        o(r)[0].scrollIntoView()
                    }
                } else {
                    if (s != e) {
                        a.location.hash = 'fndtn-' + s.replace('#', '')
                    } else {
                        a.location.hash = 'fndtn-' + r.replace('#', '')
                    }
                }
            };
            i.addClass(l.active_class).triggerHandler('opened');
            d.attr({
                'aria-selected': 'true',
                tabindex: 0
            });
            f.removeClass(l.active_class);
            f.find('a').attr({
                'aria-selected': 'false',
                tabindex: -1
            });
            c.siblings().removeClass(l.active_class).attr({
                'aria-hidden': 'true',
                tabindex: -1
            }).end().addClass(l.active_class).attr('aria-hidden', 'false').find(':first-child').attr('tabindex', 0);
            l.callback(i);
            c.children().attr('tab-index', 0);
            c.triggerHandler('toggled', [i]);
            h.triggerHandler('toggled', [c]);
            d.on('keydown', u)
        },
        data_attr: function(t) {
            if (this.namespace.length > 0) {
                return this.namespace + '-' + t
            };
            return t
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document));;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.3.12
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */


! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, g, e = this;
            if (e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                lazyLoad: "ondemand",
                onBeforeChange: null,
                onAfterChange: null,
                onInit: null,
                onReInit: null,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                responsive: null,
                rtl: !1,
                slide: "div",
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.paused = !1, e.positionProp = null, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.windowWidth = 0, e.windowTimer = null, e.options = a.extend({}, e.defaults, d), e.originalSettings = e.options, f = e.options.responsive || null, f && f.length > -1) {
                for (g in f) f.hasOwnProperty(g) && (e.breakpoints.push(f[g].breakpoint), e.breakpointSettings[f[g].breakpoint] = f[g].settings);
                e.breakpoints.sort(function(a, b) {
                    return b - a
                })
            }
            e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init()
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var f = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: f
            }, e.options.speed)
        }
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        }) : (e.applyTransition(), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = null != c.options.asNavFor ? a(c.options.asNavFor).getSlick() : null;
        null != d && d.slideHandler(b, !0)
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("index", b)
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode === !0 && (b.options.slidesToScroll = 1, 0 === b.options.slidesToShow % 2 && (b.options.slidesToShow = 3)), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.checkResponsive = function() {
        var c, d, b = this;
        if (b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && null !== b.originalSettings.responsive) {
            d = null;
            for (c in b.breakpoints) b.breakpoints.hasOwnProperty(c) && a(window).width() < b.breakpoints[c] && (d = b.breakpoints[c]);
            null !== d ? null !== b.activeBreakpoint ? d !== b.activeBreakpoint && (b.activeBreakpoint = d, b.options = a.extend({}, b.originalSettings, b.breakpointSettings[d]), b.refresh()) : (b.activeBreakpoint = d, b.options = a.extend({}, b.originalSettings, b.breakpointSettings[d]), b.refresh()) : null !== b.activeBreakpoint && (b.activeBreakpoint = null, b.options = b.originalSettings, b.refresh())
        }
    }, b.prototype.changeSlide = function(b) {
        var e, f, g, c = this,
            d = a(b.target);
        switch (d.is("a") && b.preventDefault(), g = 0 !== c.slideCount % c.options.slidesToScroll, e = g ? 0 : (c.slideCount - c.currentSlide) % c.options.slidesToScroll, b.data.message) {
            case "previous":
                f = 0 === e ? c.options.slidesToScroll : c.options.slidesToShow - e, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide - f);
                break;
            case "next":
                f = 0 === e ? c.options.slidesToScroll : e, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide + f);
                break;
            case "index":
                var h = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * c.options.slidesToScroll;
                c.slideHandler(h);
            default:
                return !1
        }
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function() {
        var b = this;
        b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.parent().hasClass("slick-track") && b.$slides.unwrap().unwrap(), b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid), a(document).off(".slick-" + b.instanceUid)
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b, c) {
        var d = this;
        d.cssTransitions === !1 ? (d.$slides.eq(b).css({
            zIndex: 1e3
        }), d.$slides.eq(b).animate({
            opacity: 1
        }, d.options.speed, d.options.easing, c), d.$slides.eq(a).animate({
            opacity: 0
        }, d.options.speed, d.options.easing)) : (d.applyTransition(b), d.applyTransition(a), d.$slides.eq(b).css({
            opacity: 1,
            zIndex: 1e3
        }), d.$slides.eq(a).css({
            opacity: 0
        }), c && setTimeout(function() {
            d.disableTransition(b), d.disableTransition(a), c.call()
        }, d.options.speed))
    }, b.prototype.filterSlides = function(a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = 0;
        for (e = a.options.infinite === !0 ? a.slideCount + a.options.slidesToShow - a.options.slidesToScroll : a.slideCount; e > b;) d++, c += a.options.slidesToScroll, b = c + a.options.slidesToShow;
        return d
    }, b.prototype.getLeft = function(a) {
        var c, d, g, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideCount % b.options.slidesToShow * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToShow * d)) : 0 !== b.slideCount % b.options.slidesToShow && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (b.slideOffset = b.options.slidesToShow * b.slideWidth - b.slideCount % b.options.slidesToShow * b.slideWidth, e = b.slideCount % b.options.slidesToShow * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (g = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = g[0] ? -1 * g[0].offsetLeft : 0, b.options.centerMode === !0 && (g = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = g[0] ? -1 * g[0].offsetLeft : 0, c += (b.$list.width() - g.outerWidth()) / 2)), c
    }, b.prototype.getSlideCount = function() {
        var c, b = this;
        if (b.options.swipeToSlide === !0) {
            var d = null;
            return b.$slideTrack.find(".slick-slide").each(function(c, e) {
                return e.offsetLeft + a(e).outerWidth() / 2 > -1 * b.swipeLeft ? (d = e, !1) : void 0
            }), c = Math.abs(a(d).attr("index") - b.currentSlide)
        }
        return b.options.slidesToScroll
    }, b.prototype.init = function() {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.checkResponsive()), null !== b.options.onInit && b.options.onInit.call(this, b)
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function() {
            b.paused = !0, b.autoPlayClear()
        }).on("mouseleave.slick", function() {
            b.paused = !1, b.autoPlay()
        })
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler.bind(this)), b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", function() {
            b.paused = !0, b.autoPlayClear()
        }), b.$list.on("mouseleave.slick", function() {
            b.paused = !1, b.autoPlay()
        })), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
            b.checkResponsive(), b.setPosition()
        }), a(window).on("resize.slick.slick-" + b.instanceUid, function() {
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
            }, 50))
        }), a("*[draggable!=true]", b.$slideTrack).on("dragstart", function(a) {
            a.preventDefault()
        }), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        37 === a.keyCode ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.lazyLoad = function() {
        function g(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy");
                b.load(function() {
                    b.animate({
                        opacity: 1
                    }, 200)
                }).css({
                    opacity: 0
                }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.postSlide = function(a) {
        var b = this;
        null !== b.options.onAfterChange && b.options.onAfterChange.call(this, b, a), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
    }, b.prototype.progressiveLazyLoad = function() {
        var c, d, b = this;
        c = a("img[data-lazy]").length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }).error(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function() {
        var b = this,
            c = b.currentSlide;
        b.destroy(), a.extend(b, b.initials), b.currentSlide = c, b.init()
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), null !== b.options.onReInit && b.options.onReInit.call(this, b)
    }, b.prototype.removeSlide = function(a, b) {
        var c = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : c.slideCount - 1) : a = b === !0 ? --a : a, c.slideCount < 1 || 0 > a || a > c.slideCount - 1 ? !1 : (c.unload(), c.$slideTrack.children(this.options.slide).eq(a).remove(), c.$slides = c.$slideTrack.children(this.options.slide), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.append(c.$slides), c.$slidesCache = c.$slides, c.reinit(), void 0)
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? a + "px" : "0px", e = "top" == b.positionProp ? a + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var b = this;
        if (b.options.vertical === !1 ? b.options.centerMode === !0 && b.$list.css({
            padding: "0px " + b.options.centerPadding
        }) : (b.$list.height(b.$slides.first().outerHeight(!0) * b.options.slidesToShow), b.options.centerMode === !0 && b.$list.css({
            padding: b.options.centerPadding + " 0px"
        })), b.listWidth = b.$list.width(), b.listHeight = b.$list.height(), b.options.vertical === !1 && b.options.variableWidth === !1) b.slideWidth = Math.ceil(b.listWidth / b.options.slidesToShow), b.$slideTrack.width(Math.ceil(b.slideWidth * b.$slideTrack.children(".slick-slide").length));
        else if (b.options.variableWidth === !0) {
            var c = 0;
            b.slideWidth = Math.ceil(b.listWidth / b.options.slidesToShow), b.$slideTrack.children(".slick-slide").each(function() {
                c += Math.ceil(a(this).outerWidth(!0))
            }), b.$slideTrack.width(Math.ceil(c) + 1)
        } else b.slideWidth = Math.ceil(b.listWidth), b.$slideTrack.height(Math.ceil(b.$slides.first().outerHeight(!0) * b.$slideTrack.children(".slick-slide").length));
        var d = b.$slides.first().outerWidth(!0) - b.$slides.first().width();
        b.options.variableWidth === !1 && b.$slideTrack.children(".slick-slide").width(b.slideWidth - d)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade()
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : d.length <= b.options.slidesToShow ? d.addClass("slick-active") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = parseInt(a(b.target).parents(".slick-slide").attr("index"));
        return d || (d = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active"), c.$slides.eq(d).addClass("slick-active"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(d).addClass("slick-center")), c.asNavFor(d), void 0) : (c.slideHandler(d), void 0)
    }, b.prototype.slideHandler = function(a, b) {
        var c, d, e, f, g, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), c = a, h = i.getLeft(c), f = i.getLeft(i.currentSlide), g = 0 !== i.slideCount % i.options.slidesToScroll ? i.options.slidesToScroll : 0, i.currentLeft = null === i.swipeLeft ? f : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.slideCount - i.options.slidesToShow + g) ? (i.options.fade === !1 && (c = i.currentSlide, i.animateSlide(f, function() {
            i.postSlide(c)
        })), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (c = i.currentSlide, i.animateSlide(f, function() {
            i.postSlide(c)
        })), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), d = 0 > c ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + c : c >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : c - i.slideCount : c, i.animating = !0, null !== i.options.onBeforeChange && a !== i.currentSlide && i.options.onBeforeChange.call(this, i, i.currentSlide, d), e = i.currentSlide, i.currentSlide = d, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (i.fadeSlide(e, d, function() {
            i.postSlide(d)
        }), void 0) : (i.animateSlide(h, function() {
            i.postSlide(d)
        }), void 0)))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? "left" : 360 >= d && d >= 315 ? "left" : d >= 135 && 225 >= d ? "right" : "vertical"
    }, b.prototype.swipeEnd = function() {
        var b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case "left":
                b.slideHandler(b.currentSlide + b.getSlideCount()), b.currentDirection = 0, b.touchObject = {};
                break;
            case "right":
                b.slideHandler(b.currentSlide - b.getSlideCount()), b.currentDirection = 1, b.touchObject = {}
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var c, d, e, f, b = this;
        return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, c = b.getLeft(b.currentSlide), !b.dragging || f && 1 !== f.length ? !1 : (b.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, b.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), d = b.swipeDirection(), "vertical" !== d ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), e = b.touchObject.curX > b.touchObject.startX ? 1 : -1, b.swipeLeft = b.options.vertical === !1 ? c + b.touchObject.swipeLength * e : c + b.touchObject.swipeLength * (b.$list.height() / b.listWidth) * e, b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
    }, b.prototype.unfilterSlides = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    }, b.prototype.updateArrows = function() {
        var a = this;
        a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
    }, a.fn.slick = function(a) {
        var c = this;
        return c.each(function(c, d) {
            d.slick = new b(d, a)
        })
    }, a.fn.slickAdd = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.addSlide(a, b, c)
        })
    }, a.fn.slickCurrentSlide = function() {
        var a = this;
        return a.get(0).slick.getCurrent()
    }, a.fn.slickFilter = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.filterSlides(a)
        })
    }, a.fn.slickGoTo = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            })
        })
    }, a.fn.slickNext = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "next"
                }
            })
        })
    }, a.fn.slickPause = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.autoPlayClear(), b.slick.paused = !0
        })
    }, a.fn.slickPlay = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.paused = !1, b.slick.autoPlay()
        })
    }, a.fn.slickPrev = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "previous"
                }
            })
        })
    }, a.fn.slickRemove = function(a, b) {
        var c = this;
        return c.each(function(c, d) {
            d.slick.removeSlide(a, b)
        })
    }, a.fn.slickGetOption = function(a) {
        var b = this;
        return b.get(0).slick.options[a]
    }, a.fn.slickSetOption = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.options[a] = b, c === !0 && (e.slick.unload(), e.slick.reinit())
        })
    }, a.fn.slickUnfilter = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.unfilterSlides()
        })
    }, a.fn.unslick = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick && b.slick.destroy()
        })
    }, a.fn.getSlick = function() {
        var a = null,
            b = this;
        return b.each(function(b, c) {
            a = c.slick
        }), a
    }
});;;
Function.prototype.bind || (Function.prototype.bind = function(t) {
    if ('function' != typeof this) throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    var o = Array.prototype.slice.call(arguments, 1),
        n = this;
    return fNOP = function() {}, fBound = function() {
        return n.apply(this instanceof fNOP && t ? this : t, o.concat(Array.prototype.slice.call(arguments)))
    }, fNOP.prototype = this.prototype, fBound.prototype = new fNOP, fBound
});;
/*! smooth-scroll v7.1.1 | (c) 2015 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
}("undefined" != typeof global ? global : this.window || this.global, function(e) {
    "use strict";
    var t, n, o, r, a = {},
        u = "querySelector" in document && "addEventListener" in e,
        c = {
            selector: "[data-scroll]",
            selectorHeader: "[data-scroll-header]",
            speed: 500,
            easing: "easeInOutCubic",
            offset: 0,
            updateURL: !0,
            callback: function() {}
        },
        i = function() {
            var e = {},
                t = !1,
                n = 0,
                o = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);
            for (var r = function(n) {
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t && "[object Object]" === Object.prototype.toString.call(n[o]) ? e[o] = i(!0, e[o], n[o]) : e[o] = n[o])
            }; o > n; n++) {
                var a = arguments[n];
                r(a)
            }
            return e
        },
        s = function(e) {
            return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
        },
        l = function(e, t) {
            var n, o, r = t.charAt(0),
                a = "classList" in document.documentElement;
            for ("[" === r && (t = t.substr(1, t.length - 2), n = t.split("="), n.length > 1 && (o = !0, n[1] = n[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document; e = e.parentNode) {
                if ("." === r)
                    if (a) {
                        if (e.classList.contains(t.substr(1))) return e
                    } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
                if ("#" === r && e.id === t.substr(1)) return e;
                if ("[" === r && e.hasAttribute(n[0])) {
                    if (!o) return e;
                    if (e.getAttribute(n[0]) === n[1]) return e
                }
                if (e.tagName.toLowerCase() === t) return e
            }
            return null
        },
        f = function(e) {
            for (var t, n = String(e), o = n.length, r = -1, a = "", u = n.charCodeAt(0); ++r < o;) {
                if (t = n.charCodeAt(r), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                a += t >= 1 && 31 >= t || 127 == t || 0 === r && t >= 48 && 57 >= t || 1 === r && t >= 48 && 57 >= t && 45 === u ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(r) : "\\" + n.charAt(r)
            }
            return a
        },
        d = function(e, t) {
            var n;
            return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t
        },
        m = function(e, t, n) {
            var o = 0;
            if (e.offsetParent)
                do o += e.offsetTop, e = e.offsetParent; while (e);
            return o = o - t - n, o >= 0 ? o : 0
        },
        h = function() {
            return Math.max(e.document.body.scrollHeight, e.document.documentElement.scrollHeight, e.document.body.offsetHeight, e.document.documentElement.offsetHeight, e.document.body.clientHeight, e.document.documentElement.clientHeight)
        },
        p = function(e) {
            return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {}
        },
        g = function(t, n) {
            e.history.pushState && (n || "true" === n) && "file:" !== e.location.protocol && e.history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, t].join(""))
        },
        b = function(e) {
            return null === e ? 0 : s(e) + e.offsetTop
        };
    a.animateScroll = function(t, n, a) {
        var u = p(t ? t.getAttribute("data-options") : null),
            s = i(s || c, a || {}, u);
        n = "#" + f(n.substr(1));
        var l = "#" === n ? e.document.documentElement : e.document.querySelector(n),
            v = e.pageYOffset;
        o || (o = e.document.querySelector(s.selectorHeader)), r || (r = b(o));
        var y, O, S, I = m(l, r, parseInt(s.offset, 10)),
            H = I - v,
            E = h(),
            L = 0;
        g(n, s.updateURL);
        var j = function(o, r, a) {
                var u = e.pageYOffset;
                (o == r || u == r || e.innerHeight + u >= E) && (clearInterval(a), l.focus(), s.callback(t, n))
            },
            w = function() {
                L += 16, O = L / parseInt(s.speed, 10), O = O > 1 ? 1 : O, S = v + H * d(s.easing, O), e.scrollTo(0, Math.floor(S)), j(S, I, y)
            },
            C = function() {
                y = setInterval(w, 16)
            };
        0 === e.pageYOffset && e.scrollTo(0, 0), C()
    };
    var v = function(e) {
            var n = l(e.target, t.selector);
            n && "a" === n.tagName.toLowerCase() && (e.preventDefault(), a.animateScroll(n, n.hash, t))
        },
        y = function(e) {
            n || (n = setTimeout(function() {
                n = null, r = b(o)
            }, 66))
        };
    return a.destroy = function() {
        t && (e.document.removeEventListener("click", v, !1), e.removeEventListener("resize", y, !1), t = null, n = null, o = null, r = null)
    }, a.init = function(n) {
        u && (a.destroy(), t = i(c, n || {}), o = e.document.querySelector(t.selectorHeader), r = b(o), e.document.addEventListener("click", v, !1), o && e.addEventListener("resize", y, !1))
    }, a
});;
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function e(t) {
            this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            r = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete o[this.key])
        }, e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
            })
        }, e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function() {
            n.Context.refreshAll()
        }, e.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var o = e[i],
                    n = o.newScroll > o.oldScroll,
                    r = n ? o.forward : o.backward;
                for (var s in this.waypoints[i]) {
                    var a = this.waypoints[i][s],
                        l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
            for (var c in t) t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, e.prototype.innerHeight = function() {
            return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
        }, e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, e.prototype.innerWidth = function() {
            return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
        }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
        }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                o = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in t) {
                var s = t[r];
                for (var a in this.waypoints[r]) {
                    var l, h, p, u, c, d = this.waypoints[r][a],
                        f = d.options.offset,
                        w = d.triggerPoint,
                        y = 0,
                        g = null == w;
                    d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
                }
            }
            return n.requestAnimationFrame(function() {
                for (var t in o) o[t].flushTriggers()
            }), this
        }, e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t)
        }, e.refreshAll = function() {
            for (var t in o) o[t].refresh()
        }, e.findByElement = function(t) {
            return o[t.waypointContextKey]
        }, window.onload = function() {
            r && r(), e.refreshAll()
        }, n.requestAnimationFrame = function(e) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            i.call(window, e)
        }, n.Context = e
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function i(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
        }
        var o = {
                vertical: {},
                horizontal: {}
            },
            n = window.Waypoint;
        i.prototype.add = function(t) {
            this.waypoints.push(t)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var o = this.triggerQueues[i],
                    n = "up" === i || "left" === i;
                o.sort(n ? e : t);
                for (var r = 0, s = o.length; s > r; r += 1) {
                    var a = o[r];
                    (a.options.continuous || r === o.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints),
                o = i === this.waypoints.length - 1;
            return o ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, i.prototype.remove = function(t) {
            var e = n.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(t) {
            return o[t.axis][t.name] || new i(t)
        }, n.Group = i
    }(),
    function() {
        "use strict";

        function t(t) {
            this.$element = e(t)
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
            t.prototype[i] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t)
            }
        }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
            t[o] = e[o]
        }), i.adapters.push({
            name: "jquery",
            Adapter: t
        }), i.Adapter = t
    }(),
    function() {
        "use strict";

        function t(t) {
            return function() {
                var i = [],
                    o = arguments[0];
                return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                    var n = t.extend({}, o, {
                        element: this
                    });
                    "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
                }), i
            }
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }();;
/*! skrollr 0.6.30 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
! function(a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
            for (var d in c.easing) W[d] = c.easing[d];
        ta = c.edgeStrategy || "set", ka = {
            beforerender: c.beforerender,
            render: c.render,
            keyframe: c.keyframe
        }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
            targetTop: ha.getScrollTop()
        }, Sa = (c.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function() {
            var a = e.clientWidth,
                b = e.clientHeight;
            (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
        });
        var g = U();
        return function h() {
            $(), va = g(h)
        }(), ha
    }
    var e, f, g = {
            get: function() {
                return ha
            },
            init: function(a) {
                return ha || new d(a)
            },
            VERSION: "0.6.29"
        },
        h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = .004,
        z = "skrollr-body",
        A = 200,
        B = "start",
        C = "end",
        D = "center",
        E = "bottom",
        F = "___skrollable_id",
        G = /^(?:input|textarea|button|select)$/i,
        H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        K = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function(a, b) {
            return b.toUpperCase()
        },
        N = /[\-+]?[\d]*\.?[\d]+/g,
        O = /\{\?\}/g,
        P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        Q = /[a-z\-]+-gradient/g,
        R = "",
        S = "",
        T = function() {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b)
                    if (R = c.match(a) || +c == c && b[c].match(a)) break;
                if (!R) return void(R = S = "");
                R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                } [R]) : S = "-" + R.toLowerCase() + "-"
            }
        },
        U = function() {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                c = Ha();
            return (Sa || !b) && (b = function(b) {
                var d = Ha() - c,
                    e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function() {
                    c = Ha(), b()
                }, e)
            }), b
        },
        V = function() {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (Sa || !b) && (b = function(b) {
                return a.clearTimeout(b)
            }), b
        },
        W = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(a) {
                return a
            },
            quadratic: function(a) {
                return a * a
            },
            cubic: function(a) {
                return a * a * a
            },
            swing: function(a) {
                return -i.cos(a * i.PI) / 2 + .5
            },
            sqrt: function(a) {
                return i.sqrt(a)
            },
            outCubic: function(a) {
                return i.pow(a - 1, 3) + 1
            },
            bounce: function(a) {
                var b;
                if (.5083 >= a) b = 3;
                else if (.8489 >= a) b = 9;
                else if (.96208 >= a) b = 27;
                else {
                    if (!(.99981 >= a)) return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function(a) {
        var d, e, f = !1;
        for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = pa,
                k = ta,
                l = !1;
            if (f && F in g && delete g[F], g.attributes) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                            if ("data-edge-strategy" !== p.name)
                                if ("data-emit-events" !== p.name) {
                                    var q = p.name.match(I);
                                    if (null !== q) {
                                        var r = {
                                            props: p.value,
                                            element: g,
                                            eventType: p.name.replace(L, M)
                                        };
                                        i.push(r);
                                        var s = q[1];
                                        s && (r.constant = s.substr(1));
                                        var t = q[2];
                                        /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                        var u = q[3],
                                            v = q[4] || u;
                                        u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                                    }
                                } else l = !0;
                            else k = p.value;
                        else j = "off" !== p.value;
                    else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
                }
                if (i.length) {
                    var w, x, y;
                    !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                        element: g,
                        styleAttr: w,
                        classAttr: x,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k,
                        emitEvents: l,
                        lastFrameIndex: -1
                    }, Ea(g, [o], [])
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z))
        }
        return ha
    }, d.prototype.relativeToAbsolute = function(a, b, c) {
        var d = e.clientHeight,
            f = a.getBoundingClientRect(),
            g = f.top,
            h = f.bottom - f.top;
        return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function(a, b) {
        b = b || {};
        var d = Ha(),
            e = ha.getScrollTop(),
            f = b.duration === c ? x : b.duration;
        return oa = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: f,
            startTime: d,
            endTime: d + f,
            easing: W[b.easing || w],
            done: b.done
        }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
    }, d.prototype.stopAnimateTo = function() {
        oa && oa.done && oa.done.call(ha, !0), oa = c
    }, d.prototype.isAnimatingTo = function() {
        return !!oa
    }, d.prototype.isMobile = function() {
        return Sa
    }, d.prototype.setScrollTop = function(b, c) {
        return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
    }, d.prototype.getScrollTop = function() {
        return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function() {
        return Ja
    }, d.prototype.on = function(a, b) {
        return ka[a] = b, ha
    }, d.prototype.off = function(a) {
        return delete ka[a], ha
    }, d.prototype.destroy = function() {
        var a = V();
        a(va), ya(), Ea(e, [t], [s, u, v]);
        for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
        e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
    };
    var X = function() {
            var d, g, h, j, o, p, q, r, s, t, u, v;
            wa(e, [k, l, m, n].join(" "), function(a) {
                var e = a.changedTouches[0];
                for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
                switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                    case k:
                        d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                        break;
                    case l:
                        G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                        break;
                    default:
                    case m:
                    case n:
                        var f = g - o,
                            w = h - p,
                            x = w * w + f * f;
                        if (49 > x) {
                            if (!G.test(d.tagName)) {
                                d.focus();
                                var y = b.createEvent("MouseEvents");
                                y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                            }
                            return
                        }
                        d = c;
                        var z = r / v;
                        z = i.max(i.min(z, 3), -3);
                        var A = i.abs(z / na),
                            B = z * A + .5 * na * A * A,
                            C = ha.getScrollTop() - B,
                            D = 0;
                        C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
        },
        Y = function() {
            var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                o = Ba();
            for (j = 0, k = ia.length; k > j; j++)
                for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
            for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                a.keyFrames.sort(Ia)
            }
        },
        Z = function(a, b) {
            for (var c = 0, d = ia.length; d > c; c++) {
                var e, f, i = ia[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l.length,
                    n = l[0],
                    s = l[l.length - 1],
                    t = k < n.frame,
                    u = k > s.frame,
                    v = t ? n : s,
                    w = i.emitEvents,
                    x = i.lastFrameIndex;
                if (t || u) {
                    if (t && -1 === i.edge || u && 1 === i.edge) continue;
                    switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                        case "reset":
                            fa(j);
                            continue;
                        case "ease":
                            k = v.frame;
                            break;
                        default:
                        case "set":
                            var y = v.props;
                            for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                            continue
                    }
                } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
                for (var z = 0; m - 1 > z; z++)
                    if (k >= l[z].frame && k <= l[z + 1].frame) {
                        var A = l[z],
                            B = l[z + 1];
                        for (e in A.props)
                            if (h.call(A.props, e)) {
                                var C = (k - A.frame) / (B.frame - A.frame);
                                C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                            } w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                        break
                    }
            }
        },
        $ = function() {
            Qa && (Qa = !1, Aa());
            var a, b, d = ha.getScrollTop(),
                e = Ha();
            if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
            else if (!sa) {
                var f = ra.targetTop - d;
                f && (ra = {
                    startTop: Ma,
                    topDiff: d - Ma,
                    targetTop: d,
                    startTime: Na,
                    endTime: Na + qa
                }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
            }
            if (sa || Ma !== d) {
                La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
                var h = {
                        curTop: d,
                        lastTop: Ma,
                        maxTop: Ja,
                        direction: La
                    },
                    i = ka.beforerender && ka.beforerender.call(ha, h);
                i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
            }
            Na = e
        },
        _ = function(a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                    value: e,
                    easing: W[d]
                };
                h.props = i
            }
        },
        aa = function(a) {
            var b = [];
            return P.lastIndex = 0, a = a.replace(P, function(a) {
                return a.replace(N, function(a) {
                    return a / 255 * 100 + "%"
                })
            }), S && (Q.lastIndex = 0, a = a.replace(Q, function(a) {
                return S + a
            })), a = a.replace(N, function(a) {
                return b.push(+a), "{?}"
            }), b.unshift(a), b
        },
        ba = function(a) {
            var b, c, d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
        },
        ca = function(a, b) {
            var c;
            for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props) b[c] = a.props[c]
        },
        da = function(a, b, c) {
            var d, e = a.length;
            if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
            return f
        },
        ea = function(a) {
            var b = 1;
            return O.lastIndex = 0, a[0].replace(O, function() {
                return a[b++]
            })
        },
        fa = function(a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
        },
        ga = function() {
            ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
            var a = j(ja),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(S + "transform"),
                d = b && "none" !== b || c && "none" !== c;
            d || (ua = "")
        };
    g.setStyle = function(a, b, c) {
        var d = a.style;
        if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
        else if ("float" === b) d.styleFloat = d.cssFloat = c;
        else try {
                R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
            } catch (e) {}
    };
    var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function(b, c, d) {
            var e = function(b) {
                return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                    b.returnValue = !1, b.defaultPrevented = !0
                }), d.call(this, b)
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
                element: b,
                name: f,
                listener: d
            })
        },
        xa = g.removeEvent = function(a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
        },
        ya = function() {
            for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
            Ua = []
        },
        za = function(a, b, c) {
            ka.keyframe && ka.keyframe.call(ha, a, b, c)
        },
        Aa = function() {
            var a = ha.getScrollTop();
            Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
        },
        Ba = function() {
            var a, b, c = e.clientHeight,
                d = {};
            for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
            return d
        },
        Ca = function() {
            var a, b = 0;
            return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
        },
        Da = function(b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
        },
        Ea = function(b, d, e) {
            var f = "className";
            if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
            g = Fa(g);
            for (var j = 0, k = d.length; k > j; j++) - 1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
            b[f] = Fa(g)
        },
        Fa = function(a) {
            return a.replace(H, "")
        },
        Ga = function(a) {
            return " " + a + " "
        },
        Ha = Date.now || function() {
            return +new Date
        },
        Ia = function(a, b) {
            return a.frame - b.frame
        },
        Ja = 0,
        Ka = 1,
        La = "down",
        Ma = -1,
        Na = Ha(),
        Oa = 0,
        Pa = 0,
        Qa = !1,
        Ra = 0,
        Sa = !1,
        Ta = 0,
        Ua = [];
    "function" == typeof define && define.amd ? define([], function() {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
}(window, document);;
/*!
 * smoothState.js is jQuery plugin that progressively enhances
 * page loads to behave more like a single-page application.
 *
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @see     http://smoothstate.com
 *
 */
! function(t, n, e, o) {
    "use strict";
    if (!n.history.pushState) return t.fn.smoothState = function() {
        return this
    }, void(t.fn.smoothState.options = {});
    if (!t.fn.smoothState) {
        var r = t("html, body"),
            a = n.console,
            i = {
                debug: !1,
                anchors: "a",
                hrefRegex: "",
                forms: "form",
                allowFormCaching: !1,
                repeatDelay: 500,
                blacklist: ".no-smoothState",
                prefetch: !1,
                prefetchOn: "mouseover touchstart",
                cacheLength: 0,
                loadingClass: "is-loading",
                scroll: !0,
                alterRequest: function(t) {
                    return t
                },
                onBefore: function(t, n) {},
                onStart: {
                    duration: 0,
                    render: function(t) {}
                },
                onProgress: {
                    duration: 0,
                    render: function(t) {}
                },
                onReady: {
                    duration: 0,
                    render: function(t, n) {
                        t.html(n)
                    }
                },
                onAfter: function(t, n) {}
            },
            s = {
                isExternal: function(t) {
                    var e = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                    return "string" == typeof e[1] && e[1].length > 0 && e[1].toLowerCase() !== n.location.protocol ? !0 : "string" == typeof e[2] && e[2].length > 0 && e[2].replace(new RegExp(":(" + {
                        "http:": 80,
                        "https:": 443
                    } [n.location.protocol] + ")?$"), "") !== n.location.host ? !0 : !1
                },
                stripHash: function(t) {
                    return t.replace(/#.*/, "")
                },
                isHash: function(t, e) {
                    e = e || n.location.href;
                    var o = t.indexOf("#") > -1 ? !0 : !1,
                        r = s.stripHash(t) === s.stripHash(e) ? !0 : !1;
                    return o && r
                },
                translate: function(n) {
                    var e = {
                        dataType: "html",
                        type: "GET"
                    };
                    return n = "string" == typeof n ? t.extend({}, e, {
                        url: n
                    }) : t.extend({}, e, n)
                },
                shouldLoadAnchor: function(t, n, e) {
                    var r = t.prop("href");
                    return !(s.isExternal(r) || s.isHash(r) || t.is(n) || t.prop("target") || typeof e !== o && "" !== e && -1 === t.prop("href").search(e))
                },
                clearIfOverCapacity: function(t, n) {
                    return Object.keys || (Object.keys = function(t) {
                        var n, e = [];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                        return e
                    }), Object.keys(t).length > n && (t = {}), t
                },
                storePageIn: function(n, e, o, r) {
                    var a = t("<html></html>").append(t(o));
                    return n[e] = {
                        status: "loaded",
                        title: a.find("title").first().text(),
                        html: a.find("#" + r),
                        doc: o
                    }, n
                },
                triggerAllAnimationEndEvent: function(n, e) {
                    e = " " + e || "";
                    var o = 0,
                        r = "animationstart webkitAnimationStart oanimationstart MSAnimationStart",
                        a = "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
                        i = "allanimationend",
                        l = function(e) {
                            t(e.delegateTarget).is(n) && (e.stopPropagation(), o++)
                        },
                        u = function(e) {
                            t(e.delegateTarget).is(n) && (e.stopPropagation(), o--, 0 === o && n.trigger(i))
                        };
                    n.on(r, l), n.on(a, u), n.on("allanimationend" + e, function() {
                        o = 0, s.redraw(n)
                    })
                },
                redraw: function(t) {
                    t.height()
                }
            },
            l = function(e) {
                if (null !== e.state) {
                    var o = n.location.href,
                        r = t("#" + e.state.id),
                        a = r.data("smoothState");
                    a.href === o || s.isHash(o, a.href) || a.load(o, !1)
                }
            },
            u = function(i, l) {
                var u = t(i),
                    c = u.prop("id"),
                    f = null,
                    h = !1,
                    d = {},
                    p = n.location.href,
                    g = function(t) {
                        t = t || !1, t && d.hasOwnProperty(t) ? delete d[t] : d = {}, u.data("smoothState").cache = d
                    },
                    m = function(n, e) {
                        e = e || t.noop;
                        var o = s.translate(n);
                        if (d = s.clearIfOverCapacity(d, l.cacheLength), !d.hasOwnProperty(o.url) || "undefined" != typeof o.data) {
                            d[o.url] = {
                                status: "fetching"
                            };
                            var r = t.ajax(o);
                            r.done(function(t) {
                                s.storePageIn(d, o.url, t, c), u.data("smoothState").cache = d
                            }), r.fail(function() {
                                if (typeof d[o.url] == 'undefined') d[o.url] = {};
                                d[o.url].status = "error"
                            }), e && r.always(e)
                        }
                    },
                    y = function() {
                        if (f) {
                            var n = t(f, u);
                            if (n.length) {
                                var e = n.offset().top;
                                r.scrollTop(e)
                            }
                            f = null
                        }
                    },
                    v = function(o) {
                        var i = "#" + c,
                            s = d[o] ? t(d[o].html.html()) : null;
                        s.length ? (e.title = d[o].title, u.data("smoothState").href = o, l.loadingClass && r.removeClass(l.loadingClass), l.onReady.render(u, s), u.one("ss.onReadyEnd", function() {
                            h = !1, l.onAfter(u, s), l.scroll && y()
                        }), n.setTimeout(function() {
                            u.trigger("ss.onReadyEnd")
                        }, l.onReady.duration)) : !s && l.debug && a ? a.warn("No element with an id of " + i + " in response from " + o + " in " + d) : n.location = o
                    },
                    S = function(t, e, o) {
                        var i = s.translate(t);
                        "undefined" == typeof e && (e = !0), "undefined" == typeof o && (o = !0);
                        var f = !1,
                            h = !1,
                            p = {
                                loaded: function() {
                                    var t = f ? "ss.onProgressEnd" : "ss.onStartEnd";
                                    h && f ? h && v(i.url) : u.one(t, function() {
                                        v(i.url), o || g(i.url)
                                    }), e && n.history.pushState({
                                        id: c
                                    }, d[i.url].title, i.url), h && !o && g(i.url)
                                },
                                fetching: function() {
                                    f || (f = !0, u.one("ss.onStartEnd", function() {
                                        l.loadingClass && r.addClass(l.loadingClass), l.onProgress.render(u), n.setTimeout(function() {
                                            u.trigger("ss.onProgressEnd"), h = !0
                                        }, l.onProgress.duration)
                                    })), n.setTimeout(function() {
                                        d.hasOwnProperty(i.url) && p[d[i.url].status]()
                                    }, 10)
                                },
                                error: function() {
                                    l.debug && a ? a.log("There was an error loading: " + i.url) : n.location = i.url
                                }
                            };
                        d.hasOwnProperty(i.url) || m(i), l.onStart.render(u), n.setTimeout(function() {
                            l.scroll && r.scrollTop(0), u.trigger("ss.onStartEnd")
                        }, l.onStart.duration), p[d[i.url].status]()
                    },
                    w = function(n) {
                        var e, o = t(n.currentTarget);
                        s.shouldLoadAnchor(o, l.blacklist, l.hrefRegex) && !h && (n.stopPropagation(), e = s.translate(o.prop("href")), e = l.alterRequest(e), m(e))
                    },
                    E = function(n) {
                        var e = t(n.currentTarget);
                        if (!n.metaKey && !n.ctrlKey && s.shouldLoadAnchor(e, l.blacklist, l.hrefRegex) && (n.stopPropagation(), n.preventDefault(), !C())) {
                            T();
                            var o = s.translate(e.prop("href"));
                            h = !0, f = e.prop("hash"), o = l.alterRequest(o), l.onBefore(e, u), S(o)
                        }
                    },
                    b = function(n) {
                        var e = t(n.currentTarget);
                        if (!e.is(l.blacklist) && (n.preventDefault(), n.stopPropagation(), !C())) {
                            T();
                            var r = {
                                url: e.prop("action"),
                                data: e.serialize(),
                                type: e.prop("method")
                            };
                            h = !0, r = l.alterRequest(r), "get" === r.type.toLowerCase() && (r.url = r.url + "?" + r.data), l.onBefore(e, u), S(r, o, l.allowFormCaching)
                        }
                    },
                    P = 0,
                    C = function() {
                        var t = null === l.repeatDelay,
                            n = parseInt(Date.now()) > P;
                        return !(t || n)
                    },
                    T = function() {
                        P = parseInt(Date.now()) + parseInt(l.repeatDelay)
                    },
                    A = function(t) {
                        l.anchors && (t.on("click", l.anchors, E), l.prefetch && t.on(l.prefetchOn, l.anchors, w)), l.forms && t.on("submit", l.forms, b)
                    },
                    O = function() {
                        var t = u.prop("class");
                        u.removeClass(t), s.redraw(u), u.addClass(t)
                    };
                return l = t.extend({}, t.fn.smoothState.options, l), null === n.history.state && n.history.replaceState({
                    id: c
                }, e.title, p), s.storePageIn(d, p, e.documentElement.outerHTML, c), s.triggerAllAnimationEndEvent(u, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), A(u), {
                    href: p,
                    cache: d,
                    clear: g,
                    load: S,
                    fetch: m,
                    restartCSSAnimations: O
                }
            },
            c = function(n) {
                return this.each(function() {
                    var e = this.tagName.toLowerCase();
                    this.id && "body" !== e && "html" !== e && !t.data(this, "smoothState") ? t.data(this, "smoothState", new u(this, n)) : !this.id && a ? a.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== e && "html" !== e || !a || a.warn("The smoothstate container cannot be the " + this.tagName + " tag")
                })
            };
        n.onpopstate = l, t.smoothStateUtility = s, t.fn.smoothState = c, t.fn.smoothState.options = i
    }
}(jQuery, window, document);;
(function(e, t) {
    'use strict';
    t.behaviors.smoothstate = {
        attach: function(o, n) {
            e('#page-wrapper').smoothState({
                scroll: !1,
                prefetch: !0,
                prefetchOn: 'mouseover',
                blacklist: '.no-smoothState, a[download]',
                forms: null,
                onBefore: function(t, o) {
                    var n = e('#page-wrapper').data('smoothState');
                    n.$trigger = t;
                    n.internal = !0;
                    o.addClass('smoothing');
                    e(window).trigger('smoothStateStarted', [n])
                },
                onReady: {
                    duration: 0,
                    render: function(t, o, a) {
                        var n = e('#page-wrapper').data('smoothState'),
                            r = (typeof n.$trigger !== 'undefined' && n.$trigger !== null) ? n.$trigger.attr('data-smoothanimation') : null;
                        switch (r) {
                            case 'slideUp':
                                var i = t.clone().insertBefore(t);
                                t.html(o);
                                if (typeof Fullbundle !== 'undefined') Fullbundle.screenSize();
                                i.css({
                                    'height': 'auto',
                                    position: 'relative',
                                    'z-index': 50
                                }).find('.region-footer').css({
                                    position: 'relative'
                                });
                                t.css({
                                    position: 'relative',
                                    'z-index': 100
                                }).animate({
                                    'margin-top': -e(window).height()
                                }, 1000, 'easeInOutCubic', function() {
                                    i.remove();
                                    e(this).css('margin-top', '').removeClass('smoothing').trigger('smoothStateAnimationFinished', [n]);
                                    window.scrollTo(0, 0)
                                });
                                break;
                            default:
                                t.html(o).removeClass('smoothing').trigger('smoothStateAnimationFinished', [n]);
                                window.scrollTo(0, 0)
                        };
                        n.$trigger = null
                    }
                },
                onAfter: function(t, o) {
                    if (window.ga) {
                        ga('send', 'pageview', window.location.pathname)
                    };
                    var n = e('#page-wrapper').data('smoothState');
                    e(window).trigger('smoothStateCompleted', [n])
                }
            });
            delete t.behaviors.smoothstate
        }
    };
    e(document).on('smoothStateAnimationFinished', '#page-wrapper', function(n, t) {
        if (typeof t.cache[t.href] === 'undefined') {
            t.fetch(t.href);
            e(document).ajaxComplete(function(e, n, i) {
                if (i.url === t.href) o(t)
            })
        } else {
            o(t)
        }
    });

    function o(o) {
        var n = e('<div />').html(o.cache[o.href].doc).find('[data-drupal-selector="drupal-settings-json"]');
        if (n !== null) {
            window.drupalSettings = JSON.parse(n.text())
        };
        t.attachBehaviors(document, window.drupalSettings)
    }
})(jQuery, Drupal);;
! function(a, b) {
    "function" == typeof define && define.amd ? define([], function() {
        return a.svg4everybody = b()
    }) : "object" == typeof exports ? module.exports = b() : a.svg4everybody = b()
}(this, function() {
    function a(a, b) {
        if (b) {
            var c = document.createDocumentFragment(),
                d = !a.getAttribute("viewBox") && b.getAttribute("viewBox");
            d && a.setAttribute("viewBox", d);
            for (var e = b.cloneNode(!0); e.childNodes.length;) c.appendChild(e.firstChild);
            a.appendChild(c)
        }
    }

    function b(b) {
        b.onreadystatechange = function() {
            if (4 === b.readyState) {
                var c = b._cachedDocument;
                c || (c = b._cachedDocument = document.implementation.createHTMLDocument(""), c.body.innerHTML = b.responseText, b._cachedTarget = {}), b._embeds.splice(0).map(function(d) {
                    var e = b._cachedTarget[d.id];
                    e || (e = b._cachedTarget[d.id] = c.getElementById(d.id)), a(d.svg, e)
                })
            }
        }, b.onreadystatechange()
    }

    function c(c) {
        function d() {
            for (var c = 0; c < l.length;) {
                var g = l[c],
                    h = g.parentNode;
                if (h && /svg/i.test(h.nodeName)) {
                    var i = g.getAttribute("xlink:href");
                    if (e && (!f.validate || f.validate(i, h, g))) {
                        h.removeChild(g);
                        var m = i.split("#"),
                            n = m.shift(),
                            o = m.join("#");
                        if (n.length) {
                            var p = j[n];
                            p || (p = j[n] = new XMLHttpRequest, p.open("GET", n), p.send(), p._embeds = []), p._embeds.push({
                                svg: h,
                                id: o
                            }), b(p)
                        } else a(h, document.getElementById(o))
                    }
                } else ++c
            }
            k(d, 67)
        }
        var e, f = Object(c),
            g = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            h = /\bAppleWebKit\/(\d+)\b/,
            i = /\bEdge\/12\.(\d+)\b/;
        e = "polyfill" in f ? f.polyfill : g.test(navigator.userAgent) || (navigator.userAgent.match(i) || [])[1] < 10547 || (navigator.userAgent.match(h) || [])[1] < 537;
        var j = {},
            k = window.requestAnimationFrame || setTimeout,
            l = document.getElementsByTagName("use");
        e && d()
    }
    return c
});;
! function e(t, i, n) {
    function o(s, a) {
        if (!i[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(s, !0);
                if (r) return r(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = i[s] = {
                exports: {}
            };
            t[s][0].call(c.exports, function(e) {
                var i = t[s][1][e];
                return o(i ? i : e)
            }, c, c.exports, e, t, i, n)
        }
        return i[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
    return o
}({
    1: [function(e, t, i) {
        function n(e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }
        t.exports = n
    }, {}],
    2: [function(e, t, i) {
        function n(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        }
        t.exports = n
    }, {}],
    3: [function(e, t, i) {
        function n(e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        }
        t.exports = n
    }, {}],
    4: [function(e, t, i) {
        function n(e) {
            return .5 > e ? .5 * (1 - o(1 - 2 * e)) : .5 * o(2 * e - 1) + .5
        }
        var o = e("./bounce-out");
        t.exports = n
    }, {
        "./bounce-out": 6
    }],
    5: [function(e, t, i) {
        function n(e) {
            return 1 - o(1 - e)
        }
        var o = e("./bounce-out");
        t.exports = n
    }, {
        "./bounce-out": 6
    }],
    6: [function(e, t, i) {
        function n(e) {
            var t = 4 / 11,
                i = 8 / 11,
                n = .9,
                o = 4356 / 361,
                r = 35442 / 1805,
                s = 16061 / 1805,
                a = e * e;
            return t > e ? 7.5625 * a : i > e ? 9.075 * a - 9.9 * e + 3.4 : n > e ? o * a - r * e + s : 10.8 * e * e - 20.52 * e + 10.72
        }
        t.exports = n
    }, {}],
    7: [function(e, t, i) {
        function n(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        t.exports = n
    }, {}],
    8: [function(e, t, i) {
        function n(e) {
            return 1 - Math.sqrt(1 - e * e)
        }
        t.exports = n
    }, {}],
    9: [function(e, t, i) {
        function n(e) {
            return Math.sqrt(1 - --e * e)
        }
        t.exports = n
    }, {}],
    10: [function(e, t, i) {
        function n(e) {
            return .5 > e ? 4 * e * e * e : .5 * Math.pow(2 * e - 2, 3) + 1
        }
        t.exports = n
    }, {}],
    11: [function(e, t, i) {
        function n(e) {
            return e * e * e
        }
        t.exports = n
    }, {}],
    12: [function(e, t, i) {
        function n(e) {
            var t = e - 1;
            return t * t * t + 1
        }
        t.exports = n
    }, {}],
    13: [function(e, t, i) {
        function n(e) {
            return .5 > e ? .5 * Math.sin(13 * Math.PI / 2 * 2 * e) * Math.pow(2, 10 * (2 * e - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * e - 1 + 1)) * Math.pow(2, -10 * (2 * e - 1)) + 1
        }
        t.exports = n
    }, {}],
    14: [function(e, t, i) {
        function n(e) {
            return Math.sin(13 * e * Math.PI / 2) * Math.pow(2, 10 * (e - 1))
        }
        t.exports = n
    }, {}],
    15: [function(e, t, i) {
        function n(e) {
            return Math.sin(-13 * (e + 1) * Math.PI / 2) * Math.pow(2, -10 * e) + 1
        }
        t.exports = n
    }, {}],
    16: [function(e, t, i) {
        function n(e) {
            return 0 === e || 1 === e ? e : .5 > e ? .5 * Math.pow(2, 20 * e - 10) : -.5 * Math.pow(2, 10 - 20 * e) + 1
        }
        t.exports = n
    }, {}],
    17: [function(e, t, i) {
        function n(e) {
            return 0 === e ? e : Math.pow(2, 10 * (e - 1))
        }
        t.exports = n
    }, {}],
    18: [function(e, t, i) {
        function n(e) {
            return 1 === e ? e : 1 - Math.pow(2, -10 * e)
        }
        t.exports = n
    }, {}],
    19: [function(e, t, i) {
        t.exports = {
            backInOut: e("./back-in-out"),
            backIn: e("./back-in"),
            backOut: e("./back-out"),
            bounceInOut: e("./bounce-in-out"),
            bounceIn: e("./bounce-in"),
            bounceOut: e("./bounce-out"),
            circInOut: e("./circ-in-out"),
            circIn: e("./circ-in"),
            circOut: e("./circ-out"),
            cubicInOut: e("./cubic-in-out"),
            cubicIn: e("./cubic-in"),
            cubicOut: e("./cubic-out"),
            elasticInOut: e("./elastic-in-out"),
            elasticIn: e("./elastic-in"),
            elasticOut: e("./elastic-out"),
            expoInOut: e("./expo-in-out"),
            expoIn: e("./expo-in"),
            expoOut: e("./expo-out"),
            linear: e("./linear"),
            quadInOut: e("./quad-in-out"),
            quadIn: e("./quad-in"),
            quadOut: e("./quad-out"),
            quartInOut: e("./quart-in-out"),
            quartIn: e("./quart-in"),
            quartOut: e("./quart-out"),
            quintInOut: e("./quint-in-out"),
            quintIn: e("./quint-in"),
            quintOut: e("./quint-out"),
            sineInOut: e("./sine-in-out"),
            sineIn: e("./sine-in"),
            sineOut: e("./sine-out")
        }
    }, {
        "./back-in": 2,
        "./back-in-out": 1,
        "./back-out": 3,
        "./bounce-in": 5,
        "./bounce-in-out": 4,
        "./bounce-out": 6,
        "./circ-in": 8,
        "./circ-in-out": 7,
        "./circ-out": 9,
        "./cubic-in": 11,
        "./cubic-in-out": 10,
        "./cubic-out": 12,
        "./elastic-in": 14,
        "./elastic-in-out": 13,
        "./elastic-out": 15,
        "./expo-in": 17,
        "./expo-in-out": 16,
        "./expo-out": 18,
        "./linear": 20,
        "./quad-in": 22,
        "./quad-in-out": 21,
        "./quad-out": 23,
        "./quart-in": 25,
        "./quart-in-out": 24,
        "./quart-out": 26,
        "./quint-in": 28,
        "./quint-in-out": 27,
        "./quint-out": 29,
        "./sine-in": 31,
        "./sine-in-out": 30,
        "./sine-out": 32
    }],
    20: [function(e, t, i) {
        function n(e) {
            return e
        }
        t.exports = n
    }, {}],
    21: [function(e, t, i) {
        function n(e) {
            return e /= .5, 1 > e ? .5 * e * e : (e--, -.5 * (e * (e - 2) - 1))
        }
        t.exports = n
    }, {}],
    22: [function(e, t, i) {
        function n(e) {
            return e * e
        }
        t.exports = n
    }, {}],
    23: [function(e, t, i) {
        function n(e) {
            return -e * (e - 2)
        }
        t.exports = n
    }, {}],
    24: [function(e, t, i) {
        function n(e) {
            return .5 > e ? 8 * Math.pow(e, 4) : -8 * Math.pow(e - 1, 4) + 1
        }
        t.exports = n
    }, {}],
    25: [function(e, t, i) {
        function n(e) {
            return Math.pow(e, 4)
        }
        t.exports = n
    }, {}],
    26: [function(e, t, i) {
        function n(e) {
            return Math.pow(e - 1, 3) * (1 - e) + 1
        }
        t.exports = n
    }, {}],
    27: [function(e, t, i) {
        function n(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        }
        t.exports = n
    }, {}],
    28: [function(e, t, i) {
        function n(e) {
            return e * e * e * e * e
        }
        t.exports = n
    }, {}],
    29: [function(e, t, i) {
        function n(e) {
            return --e * e * e * e * e + 1
        }
        t.exports = n
    }, {}],
    30: [function(e, t, i) {
        function n(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        t.exports = n
    }, {}],
    31: [function(e, t, i) {
        function n(e) {
            var t = Math.cos(e * Math.PI * .5);
            return Math.abs(t) < 1e-14 ? 1 : 1 - t
        }
        t.exports = n
    }, {}],
    32: [function(e, t, i) {
        function n(e) {
            return Math.sin(e * Math.PI / 2)
        }
        t.exports = n
    }, {}],
    33: [function(e, t, i) {
        ! function() {
            var e = {},
                n = {};
            ! function() {
                var e = 1;
                n.create = function(e) {
                    var i = {
                            id: y.nextId(),
                            type: "body",
                            label: "Body",
                            angle: 0,
                            vertices: I.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                            position: {
                                x: 0,
                                y: 0
                            },
                            force: {
                                x: 0,
                                y: 0
                            },
                            torque: 0,
                            positionImpulse: {
                                x: 0,
                                y: 0
                            },
                            constraintImpulse: {
                                x: 0,
                                y: 0,
                                angle: 0
                            },
                            speed: 0,
                            angularSpeed: 0,
                            velocity: {
                                x: 0,
                                y: 0
                            },
                            angularVelocity: 0,
                            isStatic: !1,
                            isSleeping: !1,
                            motion: 0,
                            sleepThreshold: 60,
                            density: .001,
                            restitution: 0,
                            friction: .1,
                            frictionAir: .01,
                            groupId: 0,
                            slop: .05,
                            timeScale: 1,
                            render: {
                                visible: !0,
                                sprite: {
                                    xScale: 1,
                                    yScale: 1
                                },
                                lineWidth: 1.5
                            }
                        },
                        n = y.extend(i, e);
                    return t(n), n
                }, n.nextGroupId = function() {
                    return e++
                };
                var t = function(e) {
                    e.axes = e.axes || M.fromVertices(e.vertices), e.area = I.area(e.vertices), e.bounds = P.create(e.vertices), e.mass = e.mass || e.density * e.area, e.inverseMass = 1 / e.mass, e.inertia = e.inertia || I.inertia(e.vertices, e.mass), e.inverseInertia = 1 / e.inertia, e.positionPrev = e.positionPrev || {
                        x: e.position.x,
                        y: e.position.y
                    }, e.anglePrev = e.anglePrev || e.angle, e.render.fillStyle = e.render.fillStyle || (e.isStatic ? "#eeeeee" : y.choose(["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58"])), e.render.strokeStyle = e.render.strokeStyle || y.shadeColor(e.render.fillStyle, -20), I.create(e.vertices, e);
                    var t = I.centre(e.vertices);
                    I.translate(e.vertices, e.position), I.translate(e.vertices, t, -1), I.rotate(e.vertices, e.angle, e.position), M.rotate(e.axes, e.angle), P.update(e.bounds, e.vertices, e.velocity), n.setStatic(e, e.isStatic), w.set(e, e.isSleeping)
                };
                n.setStatic = function(e, t) {
                    e.isStatic = t, t && (e.restitution = 0, e.friction = 1, e.mass = e.inertia = e.density = 1 / 0, e.inverseMass = e.inverseInertia = 0, e.render.lineWidth = 1, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.angularVelocity = 0, e.speed = 0, e.angularSpeed = 0, e.motion = 0)
                }, n.resetForcesAll = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        i.force.x = 0, i.force.y = 0, i.torque = 0
                    }
                }, n.applyGravityAll = function(e, t) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.isStatic || n.isSleeping || (n.force.y += n.mass * t.y * .001, n.force.x += n.mass * t.x * .001)
                    }
                }, n.updateAll = function(e, t, i, o, r) {
                    for (var s = 0; s < e.length; s++) {
                        var a = e[s];
                        a.isStatic || a.isSleeping || a.bounds.max.x < r.min.x || a.bounds.min.x > r.max.x || a.bounds.max.y < r.min.y || a.bounds.min.y > r.max.y || n.update(a, t, i, o)
                    }
                }, n.update = function(e, t, i, n) {
                    var o = Math.pow(t * i * e.timeScale, 2),
                        r = 1 - e.frictionAir * i * e.timeScale,
                        s = e.position.x - e.positionPrev.x,
                        a = e.position.y - e.positionPrev.y;
                    e.velocity.x = s * r * n + e.force.x / e.mass * o, e.velocity.y = a * r * n + e.force.y / e.mass * o, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.position.x += e.velocity.x, e.position.y += e.velocity.y, e.angularVelocity = (e.angle - e.anglePrev) * r * n + e.torque / e.inertia * o, e.anglePrev = e.angle, e.angle += e.angularVelocity, e.speed = C.magnitude(e.velocity), e.angularSpeed = Math.abs(e.angularVelocity), I.translate(e.vertices, e.velocity), 0 !== e.angularVelocity && (I.rotate(e.vertices, e.angularVelocity, e.position), M.rotate(e.axes, e.angularVelocity)), P.update(e.bounds, e.vertices, e.velocity)
                }, n.applyForce = function(e, t, i) {
                    e.force.x += i.x, e.force.y += i.y;
                    var n = {
                        x: t.x - e.position.x,
                        y: t.y - e.position.y
                    };
                    e.torque += (n.x * i.y - n.y * i.x) * e.inverseInertia
                }, n.translate = function(e, t) {
                    e.positionPrev.x += t.x, e.positionPrev.y += t.y, e.position.x += t.x, e.position.y += t.y, I.translate(e.vertices, t), P.update(e.bounds, e.vertices, e.velocity)
                }, n.rotate = function(e, t) {
                    e.anglePrev += t, e.angle += t, I.rotate(e.vertices, t, e.position), M.rotate(e.axes, t), P.update(e.bounds, e.vertices, e.velocity)
                }, n.scale = function(e, t, i, n) {
                    I.scale(e.vertices, t, i, n), e.axes = M.fromVertices(e.vertices), e.area = I.area(e.vertices), e.mass = e.density * e.area, e.inverseMass = 1 / e.mass, I.translate(e.vertices, {
                        x: -e.position.x,
                        y: -e.position.y
                    }), e.inertia = I.inertia(e.vertices, e.mass), e.inverseInertia = 1 / e.inertia, I.translate(e.vertices, {
                        x: e.position.x,
                        y: e.position.y
                    }), P.update(e.bounds, e.vertices, e.velocity)
                }
            }();
            var o = {};
            ! function() {
                o.create = function(e) {
                    return y.extend({
                        id: y.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite"
                    }, e)
                }, o.setModified = function(e, t, i, n) {
                    if (e.isModified = t, i && e.parent && o.setModified(e.parent, t, i, n), n)
                        for (var r = 0; r < e.composites.length; r++) {
                            var s = e.composites[r];
                            o.setModified(s, t, i, n)
                        }
                }, o.add = function(e, t) {
                    for (var i = [].concat(t), n = 0; n < i.length; n++) {
                        var r = i[n];
                        switch (r.type) {
                            case "body":
                                o.addBody(e, r);
                                break;
                            case "constraint":
                                o.addConstraint(e, r);
                                break;
                            case "composite":
                                o.addComposite(e, r);
                                break;
                            case "mouseConstraint":
                                o.addConstraint(e, r.constraint)
                        }
                    }
                    return e
                }, o.remove = function(e, t, i) {
                    for (var n = [].concat(t), r = 0; r < n.length; r++) {
                        var s = n[r];
                        switch (s.type) {
                            case "body":
                                o.removeBody(e, s, i);
                                break;
                            case "constraint":
                                o.removeConstraint(e, s, i);
                                break;
                            case "composite":
                                o.removeComposite(e, s, i);
                                break;
                            case "mouseConstraint":
                                o.removeConstraint(e, s.constraint)
                        }
                    }
                    return e
                }, o.addComposite = function(e, t) {
                    return e.composites.push(t), t.parent = e, o.setModified(e, !0, !0, !1), e
                }, o.removeComposite = function(e, t, i) {
                    var n = e.composites.indexOf(t);
                    if (-1 !== n && (o.removeCompositeAt(e, n), o.setModified(e, !0, !0, !1)), i)
                        for (var r = 0; r < e.composites.length; r++) o.removeComposite(e.composites[r], t, !0);
                    return e
                }, o.removeCompositeAt = function(e, t) {
                    return e.composites.splice(t, 1), o.setModified(e, !0, !0, !1), e
                }, o.addBody = function(e, t) {
                    return e.bodies.push(t), o.setModified(e, !0, !0, !1), e
                }, o.removeBody = function(e, t, i) {
                    var n = e.bodies.indexOf(t);
                    if (-1 !== n && (o.removeBodyAt(e, n), o.setModified(e, !0, !0, !1)), i)
                        for (var r = 0; r < e.composites.length; r++) o.removeBody(e.composites[r], t, !0);
                    return e
                }, o.removeBodyAt = function(e, t) {
                    return e.bodies.splice(t, 1), o.setModified(e, !0, !0, !1), e
                }, o.addConstraint = function(e, t) {
                    return e.constraints.push(t), o.setModified(e, !0, !0, !1), e
                }, o.removeConstraint = function(e, t, i) {
                    var n = e.constraints.indexOf(t);
                    if (-1 !== n && o.removeConstraintAt(e, n), i)
                        for (var r = 0; r < e.composites.length; r++) o.removeConstraint(e.composites[r], t, !0);
                    return e
                }, o.removeConstraintAt = function(e, t) {
                    return e.constraints.splice(t, 1), o.setModified(e, !0, !0, !1), e
                }, o.clear = function(e, t, i) {
                    if (i)
                        for (var n = 0; n < e.composites.length; n++) o.clear(e.composites[n], t, !0);
                    return t ? e.bodies = e.bodies.filter(function(e) {
                        return e.isStatic
                    }) : e.bodies.length = 0, e.constraints.length = 0, e.composites.length = 0, o.setModified(e, !0, !0, !1), e
                }, o.allBodies = function(e) {
                    for (var t = [].concat(e.bodies), i = 0; i < e.composites.length; i++) t = t.concat(o.allBodies(e.composites[i]));
                    return t
                }, o.allConstraints = function(e) {
                    for (var t = [].concat(e.constraints), i = 0; i < e.composites.length; i++) t = t.concat(o.allConstraints(e.composites[i]));
                    return t
                }, o.allComposites = function(e) {
                    for (var t = [].concat(e.composites), i = 0; i < e.composites.length; i++) t = t.concat(o.allComposites(e.composites[i]));
                    return t
                }, o.get = function(e, t, i) {
                    var n, r;
                    switch (i) {
                        case "body":
                            n = o.allBodies(e);
                            break;
                        case "constraint":
                            n = o.allConstraints(e);
                            break;
                        case "composite":
                            n = o.allComposites(e).concat(e)
                    }
                    return n ? (r = n.filter(function(e) {
                        return e.id.toString() === t.toString()
                    }), 0 === r.length ? null : r[0]) : null
                }, o.move = function(e, t, i) {
                    return o.remove(e, t), o.add(i, t), e
                }, o.rebase = function(e) {
                    for (var t = o.allBodies(e).concat(o.allConstraints(e)).concat(o.allComposites(e)), i = 0; i < t.length; i++) t[i].id = y.nextId();
                    return o.setModified(e, !0, !0, !1), e
                }
            }();
            var r = {};
            ! function() {
                r.create = function(e) {
                    var t = o.create(),
                        i = {
                            label: "World",
                            gravity: {
                                x: 0,
                                y: 1
                            },
                            bounds: {
                                min: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 800,
                                    y: 600
                                }
                            }
                        };
                    return y.extend(t, i, e)
                }
            }();
            var s = {};
            ! function() {
                s.create = function(e) {
                    return {
                        id: s.id(e),
                        vertex: e,
                        normalImpulse: 0,
                        tangentImpulse: 0
                    }
                }, s.id = function(e) {
                    return e.body.id + "_" + e.index
                }
            }();
            var a = {};
            ! function() {
                a.collisions = function(e, t) {
                    for (var i = [], n = t.metrics, o = t.pairs.table, r = 0; r < e.length; r++) {
                        var s = e[r][0],
                            a = e[r][1];
                        if (!(s.groupId && a.groupId && s.groupId === a.groupId || (s.isStatic || s.isSleeping) && (a.isStatic || a.isSleeping)) && (n.midphaseTests += 1, P.overlaps(s.bounds, a.bounds))) {
                            var l, c = u.id(s, a),
                                d = o[c];
                            l = d && d.isActive ? d.collision : null;
                            var h = f.collides(s, a, l);
                            n.narrowphaseTests += 1, h.reused && (n.narrowReuseCount += 1), h.collided && (i.push(h), n.narrowDetections += 1)
                        }
                    }
                    return i
                }, a.bruteForce = function(e, t) {
                    for (var i = [], n = t.metrics, o = t.pairs.table, r = 0; r < e.length; r++)
                        for (var s = r + 1; s < e.length; s++) {
                            var a = e[r],
                                l = e[s];
                            if (!(a.groupId && l.groupId && a.groupId === l.groupId || (a.isStatic || a.isSleeping) && (l.isStatic || l.isSleeping)) && (n.midphaseTests += 1, P.overlaps(a.bounds, l.bounds))) {
                                var c, d = u.id(a, l),
                                    h = o[d];
                                c = h && h.isActive ? h.collision : null;
                                var p = f.collides(a, l, c);
                                n.narrowphaseTests += 1, p.reused && (n.narrowReuseCount += 1), p.collided && (i.push(p), n.narrowDetections += 1)
                            }
                        }
                    return i
                }
            }();
            var l = {};
            ! function() {
                l.create = function(e, t) {
                    return {
                        buckets: {},
                        pairs: {},
                        pairsList: [],
                        bucketWidth: e || 48,
                        bucketHeight: t || 48
                    }
                }, l.update = function(i, l, u, c) {
                    var d, h, f, p, v, y = u.world,
                        m = i.buckets,
                        g = u.metrics,
                        x = !1;
                    for (g.broadphaseTests = 0, d = 0; d < l.length; d++) {
                        var b = l[d];
                        if ((!b.isSleeping || c) && !(b.bounds.max.x < 0 || b.bounds.min.x > y.bounds.width || b.bounds.max.y < 0 || b.bounds.min.y > y.bounds.height)) {
                            var w = t(i, b);
                            if (!b.region || w.id !== b.region.id || c) {
                                g.broadphaseTests += 1, (!b.region || c) && (b.region = w);
                                var S = e(w, b.region);
                                for (h = S.startCol; h <= S.endCol; h++)
                                    for (f = S.startRow; f <= S.endRow; f++) {
                                        v = n(h, f), p = m[v];
                                        var k = h >= w.startCol && h <= w.endCol && f >= w.startRow && f <= w.endRow,
                                            M = h >= b.region.startCol && h <= b.region.endCol && f >= b.region.startRow && f <= b.region.endRow;
                                        !k && M && M && p && s(i, p, b), (b.region === w || k && !M || c) && (p || (p = o(m, v)), r(i, p, b))
                                    }
                                b.region = w, x = !0
                            }
                        }
                    }
                    x && (i.pairsList = a(i))
                }, l.clear = function(e) {
                    e.buckets = {}, e.pairs = {}, e.pairsList = []
                };
                var e = function(e, t) {
                        var n = Math.min(e.startCol, t.startCol),
                            o = Math.max(e.endCol, t.endCol),
                            r = Math.min(e.startRow, t.startRow),
                            s = Math.max(e.endRow, t.endRow);
                        return i(n, o, r, s)
                    },
                    t = function(e, t) {
                        var n = t.bounds,
                            o = Math.floor(n.min.x / e.bucketWidth),
                            r = Math.floor(n.max.x / e.bucketWidth),
                            s = Math.floor(n.min.y / e.bucketHeight),
                            a = Math.floor(n.max.y / e.bucketHeight);
                        return i(o, r, s, a)
                    },
                    i = function(e, t, i, n) {
                        return {
                            id: e + "," + t + "," + i + "," + n,
                            startCol: e,
                            endCol: t,
                            startRow: i,
                            endRow: n
                        }
                    },
                    n = function(e, t) {
                        return e + "," + t
                    },
                    o = function(e, t) {
                        var i = e[t] = [];
                        return i
                    },
                    r = function(e, t, i) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            if (!(i.id === o.id || i.isStatic && o.isStatic)) {
                                var r = u.id(i, o),
                                    s = e.pairs[r];
                                s ? s[2] += 1 : e.pairs[r] = [i, o, 1]
                            }
                        }
                        t.push(i)
                    },
                    s = function(e, t, i) {
                        t.splice(t.indexOf(i), 1);
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n],
                                r = u.id(i, o),
                                s = e.pairs[r];
                            s && (s[2] -= 1)
                        }
                    },
                    a = function(e) {
                        var t, i, n = [];
                        t = y.keys(e.pairs);
                        for (var o = 0; o < t.length; o++) i = e.pairs[t[o]], i[2] > 0 ? n.push(i) : delete e.pairs[t[o]];
                        return n
                    }
            }();
            var u = {};
            ! function() {
                u.create = function(e, t) {
                    var i = e.bodyA,
                        n = e.bodyB,
                        o = {
                            id: u.id(i, n),
                            bodyA: i,
                            bodyB: n,
                            contacts: {},
                            activeContacts: [],
                            separation: 0,
                            isActive: !0,
                            timeCreated: t,
                            timeUpdated: t,
                            inverseMass: i.inverseMass + n.inverseMass,
                            friction: Math.min(i.friction, n.friction),
                            restitution: Math.max(i.restitution, n.restitution),
                            slop: Math.max(i.slop, n.slop)
                        };
                    return u.update(o, e, t), o
                }, u.update = function(e, t, i) {
                    var n = e.contacts,
                        o = t.supports,
                        r = e.activeContacts;
                    if (e.collision = t, r.length = 0, t.collided) {
                        for (var a = 0; a < o.length; a++) {
                            var l = o[a],
                                c = s.id(l),
                                d = n[c];
                            r.push(d ? d : n[c] = s.create(l))
                        }
                        e.separation = t.depth, u.setActive(e, !0, i)
                    } else e.isActive === !0 && u.setActive(e, !1, i)
                }, u.setActive = function(e, t, i) {
                    t ? (e.isActive = !0, e.timeUpdated = i) : (e.isActive = !1, e.activeContacts.length = 0)
                }, u.id = function(e, t) {
                    return e.id < t.id ? e.id + "_" + t.id : t.id + "_" + e.id
                }
            }();
            var c = {};
            ! function() {
                var e = 1e3;
                c.create = function(e) {
                    return y.extend({
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    }, e)
                }, c.update = function(e, t, i) {
                    var n, o, r, s, a = e.list,
                        l = e.table,
                        c = e.collisionStart,
                        d = e.collisionEnd,
                        h = e.collisionActive,
                        f = [];
                    for (c.length = 0, d.length = 0, h.length = 0, s = 0; s < t.length; s++) n = t[s], n.collided && (o = u.id(n.bodyA, n.bodyB), f.push(o), r = l[o], r ? (r.isActive ? h.push(r) : c.push(r), u.update(r, n, i)) : (r = u.create(n, i), l[o] = r, c.push(r), a.push(r)));
                    for (s = 0; s < a.length; s++) r = a[s], r.isActive && -1 === f.indexOf(r.id) && (u.setActive(r, !1, i), d.push(r))
                }, c.removeOld = function(t, i) {
                    var n, o, r, s, a = t.list,
                        l = t.table,
                        u = [];
                    for (s = 0; s < a.length; s++) n = a[s], o = n.collision, o.bodyA.isSleeping || o.bodyB.isSleeping ? n.timeUpdated = i : i - n.timeUpdated > e && u.push(s);
                    for (s = 0; s < u.length; s++) r = u[s] - s, n = a[r], delete l[n.id], a.splice(r, 1)
                }, c.clear = function(e) {
                    return e.table = {}, e.list.length = 0, e.collisionStart.length = 0, e.collisionActive.length = 0, e.collisionEnd.length = 0, e
                }
            }();
            var d = {};
            ! function() {
                d.ray = function(e, t, i, n) {
                    n = n || Number.MIN_VALUE;
                    for (var o = C.angle(t, i), r = C.magnitude(C.sub(t, i)), s = .5 * (i.x + t.x), a = .5 * (i.y + t.y), l = S.rectangle(s, a, r, n, {
                        angle: o
                    }), u = [], c = 0; c < e.length; c++) {
                        var d = e[c];
                        if (P.overlaps(d.bounds, l.bounds)) {
                            var h = f.collides(d, l);
                            h.collided && (h.body = h.bodyA = h.bodyB = d, u.push(h))
                        }
                    }
                    return u
                }, d.region = function(e, t, i) {
                    for (var n = [], o = 0; o < e.length; o++) {
                        var r = e[o],
                            s = P.overlaps(r.bounds, t);
                        (s && !i || !s && i) && n.push(r)
                    }
                    return n
                }
            }();
            var h = {};
            ! function() {
                var e = 4,
                    t = .2,
                    i = .6;
                h.solvePosition = function(e, i) {
                    var n, o, r, s, a, l, u, c, d;
                    for (n = 0; n < e.length; n++) o = e[n], o.isActive && (r = o.collision, s = r.bodyA, a = r.bodyB, l = r.supports[0], u = r.supportCorrected, c = r.normal, d = C.sub(C.add(a.positionImpulse, l), C.add(s.positionImpulse, u)), o.separation = C.dot(c, d));
                    for (n = 0; n < e.length; n++) o = e[n], o.isActive && (r = o.collision, s = r.bodyA, a = r.bodyB, c = r.normal, positionImpulse = (o.separation * t - o.slop) * i, (s.isStatic || a.isStatic) && (positionImpulse *= 2), s.isStatic || s.isSleeping || (s.positionImpulse.x += c.x * positionImpulse, s.positionImpulse.y += c.y * positionImpulse), a.isStatic || a.isSleeping || (a.positionImpulse.x -= c.x * positionImpulse, a.positionImpulse.y -= c.y * positionImpulse))
                }, h.postSolvePosition = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        (0 !== n.positionImpulse.x || 0 !== n.positionImpulse.y) && (n.position.x += n.positionImpulse.x, n.position.y += n.positionImpulse.y, n.positionPrev.x += n.positionImpulse.x, n.positionPrev.y += n.positionImpulse.y, I.translate(n.vertices, n.positionImpulse), P.update(n.bounds, n.vertices, n.velocity), n.positionImpulse.x *= i, n.positionImpulse.y *= i)
                    }
                }, h.preSolveVelocity = function(e) {
                    var t, i, n, o, r, s, a, l, u, c, d, h, f, p, v = {};
                    for (t = 0; t < e.length; t++)
                        if (n = e[t], n.isActive)
                            for (o = n.activeContacts, r = n.collision, s = r.bodyA, a = r.bodyB, l = r.normal, u = r.tangent, i = 0; i < o.length; i++) c = o[i], d = c.vertex, h = c.normalImpulse, f = c.tangentImpulse, v.x = l.x * h + u.x * f, v.y = l.y * h + u.y * f, s.isStatic || s.isSleeping || (p = C.sub(d, s.position), s.positionPrev.x += v.x * s.inverseMass, s.positionPrev.y += v.y * s.inverseMass, s.anglePrev += C.cross(p, v) * s.inverseInertia), a.isStatic || a.isSleeping || (p = C.sub(d, a.position), a.positionPrev.x -= v.x * a.inverseMass, a.positionPrev.y -= v.y * a.inverseMass, a.anglePrev -= C.cross(p, v) * a.inverseInertia)
                }, h.solveVelocity = function(t, i) {
                    for (var n = {}, o = i * i, r = 0; r < t.length; r++) {
                        var s = t[r];
                        if (s.isActive) {
                            var a = s.collision,
                                l = a.bodyA,
                                u = a.bodyB,
                                c = a.normal,
                                d = a.tangent,
                                h = s.activeContacts,
                                f = 1 / h.length;
                            l.velocity.x = l.position.x - l.positionPrev.x, l.velocity.y = l.position.y - l.positionPrev.y, u.velocity.x = u.position.x - u.positionPrev.x, u.velocity.y = u.position.y - u.positionPrev.y, l.angularVelocity = l.angle - l.anglePrev, u.angularVelocity = u.angle - u.anglePrev;
                            for (var p = 0; p < h.length; p++) {
                                var v = h[p],
                                    m = v.vertex,
                                    g = C.sub(m, l.position),
                                    x = C.sub(m, u.position),
                                    b = C.add(l.velocity, C.mult(C.perp(g), l.angularVelocity)),
                                    w = C.add(u.velocity, C.mult(C.perp(x), u.angularVelocity)),
                                    S = C.sub(b, w),
                                    k = C.dot(c, S),
                                    M = C.dot(d, S),
                                    P = Math.abs(M),
                                    I = y.sign(M),
                                    B = (1 + s.restitution) * k,
                                    _ = y.clamp(s.separation + k, 0, 1),
                                    A = M;
                                P > _ * s.friction * o && (A = _ * s.friction * o * I);
                                var T = C.cross(g, c),
                                    O = C.cross(x, c),
                                    j = f / (s.inverseMass + l.inverseInertia * T * T + u.inverseInertia * O * O);
                                if (B *= j, A *= j, 0 > k && k * k > e * o) v.normalImpulse = 0, v.tangentImpulse = 0;
                                else {
                                    var E = v.normalImpulse;
                                    v.normalImpulse = Math.min(v.normalImpulse + B, 0), B = v.normalImpulse - E;
                                    var q = v.tangentImpulse;
                                    v.tangentImpulse = y.clamp(v.tangentImpulse + A, -P, P), A = v.tangentImpulse - q
                                }
                                n.x = c.x * B + d.x * A, n.y = c.y * B + d.y * A, l.isStatic || l.isSleeping || (l.positionPrev.x += n.x * l.inverseMass, l.positionPrev.y += n.y * l.inverseMass, l.anglePrev += C.cross(g, n) * l.inverseInertia), u.isStatic || u.isSleeping || (u.positionPrev.x -= n.x * u.inverseMass, u.positionPrev.y -= n.y * u.inverseMass, u.anglePrev -= C.cross(x, n) * u.inverseInertia)
                            }
                        }
                    }
                }
            }();
            var f = {};
            ! function() {
                f.collides = function(t, n, o) {
                    var r, s, a, l, u = o,
                        c = !1;
                    if (u) {
                        var d = t.speed * t.speed + t.angularSpeed * t.angularSpeed + n.speed * n.speed + n.angularSpeed * n.angularSpeed;
                        c = u && u.collided && .2 > d, l = u
                    } else l = {
                        collided: !1,
                        bodyA: t,
                        bodyB: n
                    };
                    if (u && c) {
                        var h = [u.bodyA.axes[u.axisNumber]];
                        if (a = e(u.bodyA.vertices, u.bodyB.vertices, h), l.reused = !0, a.overlap <= 0) return l.collided = !1, l
                    } else {
                        if (r = e(t.vertices, n.vertices, t.axes), r.overlap <= 0) return l.collided = !1, l;
                        if (s = e(n.vertices, t.vertices, n.axes), s.overlap <= 0) return l.collided = !1, l;
                        r.overlap < s.overlap ? (a = r, l.bodyA = t, l.bodyB = n) : (a = s, l.bodyA = n, l.bodyB = t), l.axisNumber = a.axisNumber
                    }
                    l.collided = !0, l.normal = a.axis, l.depth = a.overlap, t = l.bodyA, n = l.bodyB, C.dot(l.normal, C.sub(n.position, t.position)) > 0 && (l.normal = C.neg(l.normal)), l.tangent = C.perp(l.normal), l.penetration = {
                        x: l.normal.x * l.depth,
                        y: l.normal.y * l.depth
                    };
                    var f = i(t, n, l.normal),
                        p = [f[0]];
                    if (I.contains(t.vertices, f[1])) p.push(f[1]);
                    else {
                        var v = i(n, t, C.neg(l.normal));
                        I.contains(n.vertices, v[0]) && p.push(v[0]), p.length < 2 && I.contains(n.vertices, v[1]) && p.push(v[1])
                    }
                    return l.supports = p, l.supportCorrected = C.sub(f[0], l.penetration), l
                };
                var e = function(e, i, n) {
                        for (var o, r, s = {}, a = {}, l = {
                            overlap: Number.MAX_VALUE
                        }, u = 0; u < n.length; u++) {
                            if (r = n[u], t(s, e, r), t(a, i, r), o = s.min < a.min ? s.max - a.min : a.max - s.min, 0 >= o) return l.overlap = o, l;
                            o < l.overlap && (l.overlap = o, l.axis = r, l.axisNumber = u)
                        }
                        return l
                    },
                    t = function(e, t, i) {
                        for (var n = C.dot(t[0], i), o = n, r = 1; r < t.length; r += 1) {
                            var s = C.dot(t[r], i);
                            s > o ? o = s : n > s && (n = s)
                        }
                        e.min = n, e.max = o
                    },
                    i = function(e, t, i) {
                        for (var n, o, r = Number.MAX_VALUE, s = {
                            x: 0,
                            y: 0
                        }, a = t.vertices, l = e.position, u = a[0], c = a[1], d = 0; d < a.length; d++) o = a[d], s.x = o.x - l.x, s.y = o.y - l.y, n = -C.dot(i, s), r > n && (r = n, u = o);
                        var h = u.index - 1 >= 0 ? u.index - 1 : a.length - 1;
                        o = a[h], s.x = o.x - l.x, s.y = o.y - l.y, r = -C.dot(i, s), c = o;
                        var f = (u.index + 1) % a.length;
                        return o = a[f], s.x = o.x - l.x, s.y = o.y - l.y, n = -C.dot(i, s), r > n && (r = n, c = o), [u, c]
                    }
            }();
            var p = {};
            ! function() {
                var e = 1e-6,
                    t = .001;
                p.create = function(t) {
                    var i = t;
                    i.bodyA && !i.pointA && (i.pointA = {
                        x: 0,
                        y: 0
                    }), i.bodyB && !i.pointB && (i.pointB = {
                        x: 0,
                        y: 0
                    });
                    var n = i.bodyA ? C.add(i.bodyA.position, i.pointA) : i.pointA,
                        o = i.bodyB ? C.add(i.bodyB.position, i.pointB) : i.pointB,
                        r = C.magnitude(C.sub(n, o));
                    i.length = i.length || r || e;
                    var s = {
                        visible: !0,
                        lineWidth: 2,
                        strokeStyle: "#666"
                    };
                    return i.render = y.extend(s, i.render), i.id = i.id || y.nextId(), i.label = i.label || "Constraint", i.type = "constraint", i.stiffness = i.stiffness || 1, i.angularStiffness = i.angularStiffness || 0, i.angleA = i.bodyA ? i.bodyA.angle : i.angleA, i.angleB = i.bodyB ? i.bodyB.angle : i.angleB, i
                }, p.solveAll = function(e, t) {
                    for (var i = 0; i < e.length; i++) p.solve(e[i], t)
                }, p.solve = function(i, n) {
                    var o = i.bodyA,
                        r = i.bodyB,
                        s = i.pointA,
                        a = i.pointB;
                    o && !o.isStatic && (i.pointA = C.rotate(s, o.angle - i.angleA), i.angleA = o.angle), r && !r.isStatic && (i.pointB = C.rotate(a, r.angle - i.angleB), i.angleB = r.angle);
                    var l = s,
                        u = a;
                    if (o && (l = C.add(o.position, s)), r && (u = C.add(r.position, a)), l && u) {
                        var c = C.sub(l, u),
                            d = C.magnitude(c);
                        0 === d && (d = e);
                        var h = (d - i.length) / d,
                            f = C.div(c, d),
                            p = C.mult(c, .5 * h * i.stiffness * n * n);
                        if (!(Math.abs(1 - d / i.length) < t * n)) {
                            var v, m, g, x, b, S, k, M;
                            o && !o.isStatic ? (g = {
                                x: l.x - o.position.x + p.x,
                                y: l.y - o.position.y + p.y
                            }, o.velocity.x = o.position.x - o.positionPrev.x, o.velocity.y = o.position.y - o.positionPrev.y, o.angularVelocity = o.angle - o.anglePrev, v = C.add(o.velocity, C.mult(C.perp(g), o.angularVelocity)), b = C.dot(g, f), k = o.inverseMass + o.inverseInertia * b * b) : (v = {
                                x: 0,
                                y: 0
                            }, k = o ? o.inverseMass : 0), r && !r.isStatic ? (x = {
                                x: u.x - r.position.x - p.x,
                                y: u.y - r.position.y - p.y
                            }, r.velocity.x = r.position.x - r.positionPrev.x, r.velocity.y = r.position.y - r.positionPrev.y, r.angularVelocity = r.angle - r.anglePrev, m = C.add(r.velocity, C.mult(C.perp(x), r.angularVelocity)), S = C.dot(x, f), M = r.inverseMass + r.inverseInertia * S * S) : (m = {
                                x: 0,
                                y: 0
                            }, M = r ? r.inverseMass : 0);
                            var P = C.sub(m, v),
                                I = C.dot(f, P) / (k + M);
                            I > 0 && (I = 0);
                            var B, _ = {
                                x: f.x * I,
                                y: f.y * I
                            };
                            o && !o.isStatic && (B = C.cross(g, _) * o.inverseInertia * (1 - i.angularStiffness), w.set(o, !1), B = y.clamp(B, -.01, .01), o.constraintImpulse.x -= p.x, o.constraintImpulse.y -= p.y, o.constraintImpulse.angle += B, o.position.x -= p.x, o.position.y -= p.y, o.angle += B), r && !r.isStatic && (B = C.cross(x, _) * r.inverseInertia * (1 - i.angularStiffness), w.set(r, !1), B = y.clamp(B, -.01, .01), r.constraintImpulse.x += p.x, r.constraintImpulse.y += p.y, r.constraintImpulse.angle -= B, r.position.x += p.x, r.position.y += p.y, r.angle -= B)
                        }
                    }
                }, p.postSolveAll = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t],
                            n = i.constraintImpulse;
                        I.translate(i.vertices, n), 0 !== n.angle && (I.rotate(i.vertices, n.angle, i.position), M.rotate(i.axes, n.angle), n.angle = 0), P.update(i.bounds, i.vertices), n.x = 0, n.y = 0
                    }
                }
            }();
            var v = {};
            ! function() {
                v.create = function(e, t) {
                    var i = e.input.mouse,
                        n = p.create({
                            label: "Mouse Constraint",
                            pointA: i.position,
                            pointB: {
                                x: 0,
                                y: 0
                            },
                            length: .01,
                            stiffness: .1,
                            angularStiffness: 1,
                            render: {
                                strokeStyle: "#90EE90",
                                lineWidth: 3
                            }
                        }),
                        r = {
                            type: "mouseConstraint",
                            mouse: i,
                            dragBody: null,
                            dragPoint: null,
                            constraint: n
                        },
                        s = y.extend(r, t);
                    return g.on(e, "tick", function() {
                        var t = o.allBodies(e.world);
                        v.update(s, t)
                    }), s
                }, v.update = function(e, t) {
                    var i = e.mouse,
                        n = e.constraint;
                    if (0 === i.button) {
                        if (!n.bodyB)
                            for (var o = 0; o < t.length; o++) {
                                var r = t[o];
                                P.contains(r.bounds, i.position) && I.contains(r.vertices, i.position) && (n.pointA = i.position, n.bodyB = r, n.pointB = {
                                    x: i.position.x - r.position.x,
                                    y: i.position.y - r.position.y
                                }, n.angleB = r.angle, w.set(r, !1))
                            }
                    } else n.bodyB = null, n.pointB = null;
                    n.bodyB && (w.set(n.bodyB, !1), n.pointA = i.position)
                }
            }();
            var y = {};
            ! function() {
                y._nextId = 0, y.extend = function(e, t) {
                    var i, n, o;
                    "boolean" == typeof t ? (i = 2, o = t) : (i = 1, o = !0), n = Array.prototype.slice.call(arguments, i);
                    for (var r = 0; r < n.length; r++) {
                        var s = n[r];
                        if (s)
                            for (var a in s) o && s[a] && s[a].constructor === Object ? e[a] && e[a].constructor !== Object ? e[a] = s[a] : (e[a] = e[a] || {}, y.extend(e[a], o, s[a])) : e[a] = s[a]
                    }
                    return e
                }, y.clone = function(e, t) {
                    return y.extend({}, t, e)
                }, y.keys = function(e) {
                    if (Object.keys) return Object.keys(e);
                    var t = [];
                    for (var i in e) t.push(i);
                    return t
                }, y.values = function(e) {
                    var t = [];
                    if (Object.keys) {
                        for (var i = Object.keys(e), n = 0; n < i.length; n++) t.push(e[i[n]]);
                        return t
                    }
                    for (var o in e) t.push(e[o]);
                    return t
                }, y.shadeColor = function(e, t) {
                    var i = parseInt(e.slice(1), 16),
                        n = Math.round(2.55 * t),
                        o = (i >> 16) + n,
                        r = (i >> 8 & 255) + n,
                        s = (255 & i) + n;
                    return "#" + (16777216 + 65536 * (255 > o ? 1 > o ? 0 : o : 255) + 256 * (255 > r ? 1 > r ? 0 : r : 255) + (255 > s ? 1 > s ? 0 : s : 255)).toString(16).slice(1)
                }, y.shuffle = function(e) {
                    for (var t = e.length - 1; t > 0; t--) {
                        var i = Math.floor(Math.random() * (t + 1)),
                            n = e[t];
                        e[t] = e[i], e[i] = n
                    }
                    return e
                }, y.choose = function(e) {
                    return e[Math.floor(Math.random() * e.length)]
                }, y.isElement = function(e) {
                    try {
                        return e instanceof HTMLElement
                    } catch (t) {
                        return "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
                    }
                }, y.clamp = function(e, t, i) {
                    return t > e ? t : e > i ? i : e
                }, y.sign = function(e) {
                    return 0 > e ? -1 : 1
                }, y.now = function() {
                    var e = window.performance;
                    return e ? (e.now = e.now || e.webkitNow || e.msNow || e.oNow || e.mozNow, +e.now()) : +new Date
                }, y.random = function(e, t) {
                    return e + Math.random() * (t - e)
                }, y.colorToNumber = function(e) {
                    return e = e.replace("#", ""), 3 == e.length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), parseInt(e, 16)
                }, y.log = function(e, t) {
                    if (console && console.log) {
                        var i;
                        switch (t) {
                            case "warn":
                                i = "color: coral";
                                break;
                            case "error":
                                i = "color: red"
                        }
                        console.log("%c [Matter] " + t + ": " + e, i)
                    }
                }, y.nextId = function() {
                    return y._nextId++
                }
            }();
            var m = {};
            ! function() {
                var e = 60,
                    t = e,
                    i = 1e3 / e,
                    s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                        window.setTimeout(function() {
                            e(y.now())
                        }, i)
                    };
                m.create = function(t, n) {
                    n = y.isElement(t) ? n : t, t = y.isElement(t) ? t : null;
                    var o = {
                            enabled: !0,
                            positionIterations: 6,
                            velocityIterations: 4,
                            constraintIterations: 2,
                            enableSleeping: !1,
                            timeScale: 1,
                            input: {},
                            events: [],
                            timing: {
                                fps: e,
                                timestamp: 0,
                                delta: i,
                                correction: 1,
                                deltaMin: 1e3 / e,
                                deltaMax: 1e3 / (.5 * e),
                                timeScale: 1,
                                isFixed: !1
                            },
                            render: {
                                element: t,
                                controller: B
                            }
                        },
                        s = y.extend(o, n);
                    return s.render = s.render.controller.create(s.render), s.world = r.create(s.world), s.pairs = c.create(), s.metrics = s.metrics || x.create(), s.input.mouse = s.input.mouse || b.create(s.render.canvas), s.broadphase = s.broadphase || {
                        current: "grid",
                        grid: {
                            controller: l,
                            instance: l.create(),
                            detector: a.collisions
                        },
                        bruteForce: {
                            detector: a.bruteForce
                        }
                    }, s
                }, m.run = function(e) {
                    var i, n = 0,
                        o = 0,
                        r = [],
                        a = 1;
                    ! function l(c) {
                        if (s(l), e.enabled) {
                            var h, f, p = e.timing,
                                v = {
                                    timestamp: c
                                };
                            g.trigger(e, "beforeTick", v), p.isFixed ? h = p.delta : (h = c - i || p.delta, i = c, r.push(h), r = r.slice(-t), h = Math.min.apply(null, r), h = h < p.deltaMin ? p.deltaMin : h, h = h > p.deltaMax ? p.deltaMax : h, f = h / p.delta, p.delta = h), 0 !== a && (f *= p.timeScale / a), 0 === p.timeScale && (f = 0), a = p.timeScale, o += 1, c - n >= 1e3 && (p.fps = o * ((c - n) / 1e3), n = c, o = 0), g.trigger(e, "tick", v), e.world.isModified && e.render.controller.clear(e.render), m.update(e, h, f), d(e), u(e), m.render(e), g.trigger(e, "afterTick", v)
                        }
                    }()
                }, m.update = function(e, t, i) {
                    i = "undefined" != typeof i ? i : 1;
                    var r, s = e.world,
                        a = e.timing,
                        l = e.broadphase[e.broadphase.current],
                        u = [];
                    a.timestamp += t * a.timeScale, a.correction = i;
                    var d = {
                        timestamp: e.timing.timestamp
                    };
                    g.trigger(e, "beforeUpdate", d);
                    var f = o.allBodies(s),
                        v = o.allConstraints(s);
                    for (x.reset(e.metrics), e.enableSleeping && w.update(f), n.applyGravityAll(f, s.gravity), n.updateAll(f, t, a.timeScale, i, s.bounds), r = 0; r < e.constraintIterations; r++) p.solveAll(v, a.timeScale);
                    p.postSolveAll(f), l.controller ? (s.isModified && l.controller.clear(l.instance), l.controller.update(l.instance, f, e, s.isModified), u = l.instance.pairsList) : u = f;
                    var y = l.detector(u, e),
                        m = e.pairs,
                        b = a.timestamp;
                    for (c.update(m, y, b), c.removeOld(m, b), e.enableSleeping && w.afterCollisions(m.list), h.preSolveVelocity(m.list), r = 0; r < e.velocityIterations; r++) h.solveVelocity(m.list, a.timeScale);
                    for (r = 0; r < e.positionIterations; r++) h.solvePosition(m.list, a.timeScale);
                    return h.postSolvePosition(f), x.update(e.metrics, e), n.resetForcesAll(f), s.isModified && o.setModified(s, !1, !1, !0), g.trigger(e, "afterUpdate", d), e
                }, m.render = function(e) {
                    var t = {
                        timestamp: e.timing.timestamp
                    };
                    g.trigger(e, "beforeRender", t), e.render.controller.world(e), g.trigger(e, "afterRender", t)
                }, m.merge = function(e, t) {
                    if (y.extend(e, t), t.world) {
                        e.world = t.world, m.clear(e);
                        for (var i = o.allBodies(e.world), n = 0; n < i.length; n++) {
                            var r = i[n];
                            w.set(r, !1), r.id = y.nextId()
                        }
                    }
                }, m.clear = function(e) {
                    var t = e.world;
                    c.clear(e.pairs);
                    var i = e.broadphase[e.broadphase.current];
                    if (i.controller) {
                        var n = o.allBodies(t);
                        i.controller.clear(i.instance), i.controller.update(i.instance, n, e, !0)
                    }
                };
                var u = function(e) {
                        var t = e.input.mouse,
                            i = t.sourceEvents;
                        i.mousemove && g.trigger(e, "mousemove", {
                            mouse: t
                        }), i.mousedown && g.trigger(e, "mousedown", {
                            mouse: t
                        }), i.mouseup && g.trigger(e, "mouseup", {
                            mouse: t
                        }), b.clearSourceEvents(t)
                    },
                    d = function(e) {
                        var t = e.pairs;
                        t.collisionStart.length > 0 && g.trigger(e, "collisionStart", {
                            pairs: t.collisionStart
                        }), t.collisionActive.length > 0 && g.trigger(e, "collisionActive", {
                            pairs: t.collisionActive
                        }), t.collisionEnd.length > 0 && g.trigger(e, "collisionEnd", {
                            pairs: t.collisionEnd
                        })
                    }
            }();
            var g = {};
            ! function() {
                g.on = function(e, t, i) {
                    for (var n, o = t.split(" "), r = 0; r < o.length; r++) n = o[r], e.events = e.events || {}, e.events[n] = e.events[n] || [], e.events[n].push(i);
                    return i
                }, g.off = function(e, t, i) {
                    if (!t) return void(e.events = {});
                    "function" == typeof t && (i = t, t = y.keys(e.events).join(" "));
                    for (var n = t.split(" "), o = 0; o < n.length; o++) {
                        var r = e.events[n[o]],
                            s = [];
                        if (i)
                            for (var a = 0; a < r.length; a++) r[a] !== i && s.push(r[a]);
                        e.events[n[o]] = s
                    }
                }, g.trigger = function(e, t, i) {
                    var n, o, r, s;
                    if (e.events) {
                        i || (i = {}), n = t.split(" ");
                        for (var a = 0; a < n.length; a++)
                            if (o = n[a], r = e.events[o]) {
                                s = y.clone(i, !1), s.name = o, s.source = e;
                                for (var l = 0; l < r.length; l++) r[l].apply(e, [s])
                            }
                    }
                }
            }();
            var x = {};
            ! function() {
                x.create = function() {
                    return {
                        extended: !1,
                        narrowDetections: 0,
                        narrowphaseTests: 0,
                        narrowReuse: 0,
                        narrowReuseCount: 0,
                        midphaseTests: 0,
                        broadphaseTests: 0,
                        narrowEff: 1e-4,
                        midEff: 1e-4,
                        broadEff: 1e-4,
                        collisions: 0,
                        buckets: 0,
                        bodies: 0,
                        pairs: 0
                    }
                }, x.reset = function(e) {
                    e.extended && (e.narrowDetections = 0, e.narrowphaseTests = 0, e.narrowReuse = 0, e.narrowReuseCount = 0, e.midphaseTests = 0, e.broadphaseTests = 0, e.narrowEff = 0, e.midEff = 0, e.broadEff = 0, e.collisions = 0, e.buckets = 0, e.pairs = 0, e.bodies = 0)
                }, x.update = function(e, t) {
                    if (e.extended) {
                        var i = t.world,
                            n = (t.broadphase[t.broadphase.current], o.allBodies(i));
                        e.collisions = e.narrowDetections, e.pairs = t.pairs.list.length, e.bodies = n.length, e.midEff = (e.narrowDetections / (e.midphaseTests || 1)).toFixed(2), e.narrowEff = (e.narrowDetections / (e.narrowphaseTests || 1)).toFixed(2), e.broadEff = (1 - e.broadphaseTests / (n.length || 1)).toFixed(2), e.narrowReuse = (e.narrowReuseCount / (e.narrowphaseTests || 1)).toFixed(2)
                    }
                }
            }();
            var b;
            ! function() {
                b = function(t) {
                    var i = this;
                    this.element = t || document.body, this.absolute = {
                        x: 0,
                        y: 0
                    }, this.position = {
                        x: 0,
                        y: 0
                    }, this.mousedownPosition = {
                        x: 0,
                        y: 0
                    }, this.mouseupPosition = {
                        x: 0,
                        y: 0
                    }, this.offset = {
                        x: 0,
                        y: 0
                    }, this.scale = {
                        x: 1,
                        y: 1
                    }, this.wheelDelta = 0, this.button = -1, this.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null
                    }, this.mousemove = function(t) {
                        var n = e(t, i.element),
                            o = t.changedTouches;
                        o && (i.button = 0, t.preventDefault()), i.absolute.x = n.x, i.absolute.y = n.y, i.position.x = i.absolute.x * i.scale.x + i.offset.x, i.position.y = i.absolute.y * i.scale.y + i.offset.y, i.sourceEvents.mousemove = t
                    }, this.mousedown = function(t) {
                        var n = e(t, i.element),
                            o = t.changedTouches;
                        o ? (i.button = 0, t.preventDefault()) : i.button = t.button, i.absolute.x = n.x, i.absolute.y = n.y, i.position.x = i.absolute.x * i.scale.x + i.offset.x, i.position.y = i.absolute.y * i.scale.y + i.offset.y, i.mousedownPosition.x = i.position.x, i.mousedownPosition.y = i.position.y, i.sourceEvents.mousedown = t
                    }, this.mouseup = function(t) {
                        var n = e(t, i.element),
                            o = t.changedTouches;
                        o && t.preventDefault(), i.button = -1, i.absolute.x = n.x, i.absolute.y = n.y, i.position.x = i.absolute.x * i.scale.x + i.offset.x, i.position.y = i.absolute.y * i.scale.y + i.offset.y, i.mouseupPosition.x = i.position.x, i.mouseupPosition.y = i.position.y, i.sourceEvents.mouseup = t
                    }, this.mousewheel = function(e) {
                        i.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)), e.preventDefault()
                    }, b.setElement(i, i.element)
                }, b.create = function(e) {
                    return new b(e)
                }, b.setElement = function(e, t) {
                    e.element = t, t.addEventListener("mousemove", e.mousemove), t.addEventListener("mousedown", e.mousedown), t.addEventListener("mouseup", e.mouseup), t.addEventListener("mousewheel", e.mousewheel), t.addEventListener("DOMMouseScroll", e.mousewheel), t.addEventListener("touchmove", e.mousemove), t.addEventListener("touchstart", e.mousedown), t.addEventListener("touchend", e.mouseup)
                }, b.clearSourceEvents = function(e) {
                    e.sourceEvents.mousemove = null, e.sourceEvents.mousedown = null, e.sourceEvents.mouseup = null, e.sourceEvents.mousewheel = null, e.wheelDelta = 0
                }, b.setOffset = function(e, t) {
                    e.offset.x = t.x, e.offset.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                }, b.setScale = function(e, t) {
                    e.scale.x = t.x, e.scale.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                };
                var e = function(e, t) {
                    var i, n, o = t.getBoundingClientRect(),
                        r = document.documentElement || document.body.parentNode || document.body,
                        s = void 0 !== window.pageXOffset ? window.pageXOffset : r.scrollLeft,
                        a = void 0 !== window.pageYOffset ? window.pageYOffset : r.scrollTop,
                        l = e.changedTouches;
                    return l ? (i = l[0].pageX - o.left - s, n = l[0].pageY - o.top - a) : (i = e.pageX - o.left - s, n = e.pageY - o.top - a), {
                        x: i / (t.clientWidth / t.width),
                        y: n / (t.clientHeight / t.height)
                    }
                }
            }();
            var w = {};
            ! function() {
                var e = .18,
                    t = .08,
                    i = .9;
                w.update = function(e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n],
                            r = o.speed * o.speed + o.angularSpeed * o.angularSpeed;
                        if (o.force.x > 0 || o.force.y > 0) w.set(o, !1);
                        else {
                            var s = Math.min(o.motion, r),
                                a = Math.max(o.motion, r);
                            o.motion = i * s + (1 - i) * a, o.sleepThreshold > 0 && o.motion < t ? (o.sleepCounter += 1, o.sleepCounter >= o.sleepThreshold && w.set(o, !0)) : o.sleepCounter > 0 && (o.sleepCounter -= 1)
                        }
                    }
                }, w.afterCollisions = function(t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (n.isActive) {
                            var o = n.collision,
                                r = o.bodyA,
                                s = o.bodyB;
                            if (!(r.isSleeping && s.isSleeping || r.isStatic || s.isStatic) && (r.isSleeping || s.isSleeping)) {
                                var a = r.isSleeping && !r.isStatic ? r : s,
                                    l = a === r ? s : r;
                                !a.isStatic && l.motion > e && w.set(a, !1)
                            }
                        }
                    }
                }, w.set = function(e, t) {
                    t ? (e.isSleeping = !0, e.sleepCounter = e.sleepThreshold, e.positionImpulse.x = 0, e.positionImpulse.y = 0, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.speed = 0, e.angularSpeed = 0, e.motion = 0) : (e.isSleeping = !1, e.sleepCounter = 0)
                }
            }();
            var S = {};
            ! function() {
                S.rectangle = function(e, t, i, o, r) {
                    r = r || {};
                    var s = {
                        label: "Rectangle Body",
                        position: {
                            x: e,
                            y: t
                        },
                        vertices: I.fromPath("L 0 0 L " + i + " 0 L " + i + " " + o + " L 0 " + o)
                    };
                    if (r.chamfer) {
                        var a = r.chamfer;
                        s.vertices = I.chamfer(s.vertices, a.radius, a.quality, a.qualityMin, a.qualityMax), delete r.chamfer
                    }
                    return n.create(y.extend({}, s, r))
                }, S.trapezoid = function(e, t, i, o, r, s) {
                    s = s || {}, r *= .5;
                    var a = (1 - 2 * r) * i,
                        l = i * r,
                        u = l + a,
                        c = u + l,
                        d = {
                            label: "Trapezoid Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: I.fromPath("L 0 0 L " + l + " " + -o + " L " + u + " " + -o + " L " + c + " 0")
                        };
                    if (s.chamfer) {
                        var h = s.chamfer;
                        d.vertices = I.chamfer(d.vertices, h.radius, h.quality, h.qualityMin, h.qualityMax), delete s.chamfer
                    }
                    return n.create(y.extend({}, d, s))
                }, S.circle = function(e, t, i, n, o) {
                    n = n || {}, n.label = "Circle Body", o = o || 25;
                    var r = Math.ceil(Math.max(10, Math.min(o, i)));
                    return r % 2 === 1 && (r += 1), n.circleRadius = i, S.polygon(e, t, r, i, n)
                }, S.polygon = function(e, t, i, o, r) {
                    if (r = r || {}, 3 > i) return S.circle(e, t, o, r);
                    for (var s = 2 * Math.PI / i, a = "", l = .5 * s, u = 0; i > u; u += 1) {
                        var c = l + u * s,
                            d = Math.cos(c) * o,
                            h = Math.sin(c) * o;
                        a += "L " + d.toFixed(3) + " " + h.toFixed(3) + " "
                    }
                    var f = {
                        label: "Polygon Body",
                        position: {
                            x: e,
                            y: t
                        },
                        vertices: I.fromPath(a)
                    };
                    if (r.chamfer) {
                        var p = r.chamfer;
                        f.vertices = I.chamfer(f.vertices, p.radius, p.quality, p.qualityMin, p.qualityMax), delete r.chamfer
                    }
                    return n.create(y.extend({}, f, r))
                }
            }();
            var k = {};
            ! function() {
                k.stack = function(e, t, i, r, s, a, l) {
                    for (var u, c = o.create({
                        label: "Stack"
                    }), d = e, h = t, f = 0, p = 0; r > p; p++) {
                        for (var v = 0, y = 0; i > y; y++) {
                            var m = l(d, h, y, p, u, f);
                            if (m) {
                                var g = m.bounds.max.y - m.bounds.min.y,
                                    x = m.bounds.max.x - m.bounds.min.x;
                                g > v && (v = g), n.translate(m, {
                                    x: .5 * x,
                                    y: .5 * g
                                }), d = m.bounds.max.x + s, o.addBody(c, m), u = m, f += 1
                            }
                        }
                        h += v + a, d = e
                    }
                    return c
                }, k.chain = function(e, t, i, n, r, s) {
                    for (var a = e.bodies, l = 1; l < a.length; l++) {
                        var u = a[l - 1],
                            c = a[l],
                            d = u.bounds.max.y - u.bounds.min.y,
                            h = u.bounds.max.x - u.bounds.min.x,
                            f = c.bounds.max.y - c.bounds.min.y,
                            v = c.bounds.max.x - c.bounds.min.x,
                            m = {
                                bodyA: u,
                                pointA: {
                                    x: h * t,
                                    y: d * i
                                },
                                bodyB: c,
                                pointB: {
                                    x: v * n,
                                    y: f * r
                                }
                            },
                            g = y.extend(m, s);
                        o.addConstraint(e, p.create(g))
                    }
                    return e.label += " Chain", e
                }, k.mesh = function(e, t, i, n, r) {
                    var s, a, l, u, c, d = e.bodies;
                    for (s = 0; i > s; s++) {
                        for (a = 0; t > a; a++) a > 0 && (l = d[a - 1 + s * t], u = d[a + s * t], o.addConstraint(e, p.create(y.extend({
                            bodyA: l,
                            bodyB: u
                        }, r))));
                        for (a = 0; t > a; a++) s > 0 && (l = d[a + (s - 1) * t], u = d[a + s * t], o.addConstraint(e, p.create(y.extend({
                            bodyA: l,
                            bodyB: u
                        }, r))), n && a > 0 && (c = d[a - 1 + (s - 1) * t], o.addConstraint(e, p.create(y.extend({
                            bodyA: c,
                            bodyB: u
                        }, r)))), n && t - 1 > a && (c = d[a + 1 + (s - 1) * t], o.addConstraint(e, p.create(y.extend({
                            bodyA: c,
                            bodyB: u
                        }, r)))))
                    }
                    return e.label += " Mesh", e
                }, k.pyramid = function(e, t, i, o, r, s, a) {
                    return k.stack(e, t, i, o, r, s, function(t, s, l, u, c, d) {
                        var h = Math.min(o, Math.ceil(i / 2)),
                            f = c ? c.bounds.max.x - c.bounds.min.x : 0;
                        if (!(u > h)) {
                            u = h - u;
                            var p = u,
                                v = i - 1 - u;
                            if (!(p > l || l > v)) {
                                1 === d && n.translate(c, {
                                    x: (l + (i % 2 === 1 ? 1 : -1)) * f,
                                    y: 0
                                });
                                var y = c ? l * f : 0;
                                return a(e + y + l * r, s, l, u, c, d)
                            }
                        }
                    })
                }, k.newtonsCradle = function(e, t, i, n, r) {
                    for (var s = o.create({
                        label: "Newtons Cradle"
                    }), a = 0; i > a; a++) {
                        var l = 1.9,
                            u = S.circle(e + a * n * l, t + r, n, {
                                inertia: 99999,
                                restitution: 1,
                                friction: 0,
                                frictionAir: 1e-4,
                                slop: .01
                            }),
                            c = p.create({
                                pointA: {
                                    x: e + a * n * l,
                                    y: t
                                },
                                bodyB: u
                            });
                        o.addBody(s, u), o.addConstraint(s, c)
                    }
                    return s
                }, k.car = function(e, t, i, r, s) {
                    var a = n.nextGroupId(),
                        l = -20,
                        u = .5 * -i + l,
                        c = .5 * i - l,
                        d = 0,
                        h = o.create({
                            label: "Car"
                        }),
                        f = S.trapezoid(e, t, i, r, .3, {
                            groupId: a,
                            friction: .01,
                            chamfer: {
                                radius: 10
                            }
                        }),
                        v = S.circle(e + u, t + d, s, {
                            groupId: a,
                            restitution: .5,
                            friction: .9,
                            density: .01
                        }),
                        y = S.circle(e + c, t + d, s, {
                            groupId: a,
                            restitution: .5,
                            friction: .9,
                            density: .01
                        }),
                        m = p.create({
                            bodyA: f,
                            pointA: {
                                x: u,
                                y: d
                            },
                            bodyB: v,
                            stiffness: .5
                        }),
                        g = p.create({
                            bodyA: f,
                            pointA: {
                                x: c,
                                y: d
                            },
                            bodyB: y,
                            stiffness: .5
                        });
                    return o.addBody(h, f), o.addBody(h, v), o.addBody(h, y), o.addConstraint(h, m), o.addConstraint(h, g), h
                }, k.softBody = function(e, t, i, n, o, r, s, a, l, u) {
                    l = y.extend({
                        inertia: 1 / 0
                    }, l), u = y.extend({
                        stiffness: .4
                    }, u);
                    var c = k.stack(e, t, i, n, o, r, function(e, t) {
                        return S.circle(e, t, a, l)
                    });
                    return k.mesh(c, i, n, s, u), c.label = "Soft Body", c
                }
            }();
            var M = {};
            ! function() {
                M.fromVertices = function(e) {
                    for (var t = {}, i = 0; i < e.length; i++) {
                        var n = (i + 1) % e.length,
                            o = C.normalise({
                                x: e[n].y - e[i].y,
                                y: e[i].x - e[n].x
                            }),
                            r = 0 === o.y ? 1 / 0 : o.x / o.y;
                        r = r.toFixed(3).toString(), t[r] = o
                    }
                    return y.values(t)
                }, M.rotate = function(e, t) {
                    if (0 !== t)
                        for (var i = Math.cos(t), n = Math.sin(t), o = 0; o < e.length; o++) {
                            var r, s = e[o];
                            r = s.x * i - s.y * n, s.y = s.x * n + s.y * i, s.x = r
                        }
                }
            }();
            var P = {};
            ! function() {
                P.create = function(e) {
                    var t = {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    };
                    return e && P.update(t, e), t
                }, P.update = function(e, t, i) {
                    e.min.x = Number.MAX_VALUE, e.max.x = Number.MIN_VALUE, e.min.y = Number.MAX_VALUE, e.max.y = Number.MIN_VALUE;
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.x > e.max.x && (e.max.x = o.x), o.x < e.min.x && (e.min.x = o.x), o.y > e.max.y && (e.max.y = o.y), o.y < e.min.y && (e.min.y = o.y)
                    }
                    i && (i.x > 0 ? e.max.x += i.x : e.min.x += i.x, i.y > 0 ? e.max.y += i.y : e.min.y += i.y)
                }, P.contains = function(e, t) {
                    return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                }, P.overlaps = function(e, t) {
                    return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                }, P.translate = function(e, t) {
                    e.min.x += t.x, e.max.x += t.x, e.min.y += t.y, e.max.y += t.y
                }, P.shift = function(e, t) {
                    var i = e.max.x - e.min.x,
                        n = e.max.y - e.min.y;
                    e.min.x = t.x, e.max.x = t.x + i, e.min.y = t.y, e.max.y = t.y + n
                }
            }();
            var C = {};
            ! function() {
                C.magnitude = function(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y)
                }, C.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y
                }, C.rotate = function(e, t) {
                    var i = Math.cos(t),
                        n = Math.sin(t);
                    return {
                        x: e.x * i - e.y * n,
                        y: e.x * n + e.y * i
                    }
                }, C.rotateAbout = function(e, t, i) {
                    var n = Math.cos(t),
                        o = Math.sin(t);
                    return {
                        x: i.x + ((e.x - i.x) * n - (e.y - i.y) * o),
                        y: i.y + ((e.x - i.x) * o + (e.y - i.y) * n)
                    }
                }, C.normalise = function(e) {
                    var t = C.magnitude(e);
                    return 0 === t ? {
                        x: 0,
                        y: 0
                    } : {
                        x: e.x / t,
                        y: e.y / t
                    }
                }, C.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y
                }, C.cross = function(e, t) {
                    return e.x * t.y - e.y * t.x
                }, C.add = function(e, t) {
                    return {
                        x: e.x + t.x,
                        y: e.y + t.y
                    }
                }, C.sub = function(e, t) {
                    return {
                        x: e.x - t.x,
                        y: e.y - t.y
                    }
                }, C.mult = function(e, t) {
                    return {
                        x: e.x * t,
                        y: e.y * t
                    }
                }, C.div = function(e, t) {
                    return {
                        x: e.x / t,
                        y: e.y / t
                    }
                }, C.perp = function(e, t) {
                    return t = t === !0 ? -1 : 1, {
                        x: t * -e.y,
                        y: t * e.x
                    }
                }, C.neg = function(e) {
                    return {
                        x: -e.x,
                        y: -e.y
                    }
                }, C.angle = function(e, t) {
                    return Math.atan2(t.y - e.y, t.x - e.x)
                }
            }();
            var I = {};
            ! function() {
                I.create = function(e, t) {
                    for (var i = 0; i < e.length; i++) e[i].index = i, e[i].body = t
                }, I.fromPath = function(e) {
                    var t = /L\s*([\-\d\.]*)\s*([\-\d\.]*)/gi,
                        i = [];
                    return e.replace(t, function(e, t, n) {
                        i.push({
                            x: parseFloat(t, 10),
                            y: parseFloat(n, 10)
                        })
                    }), i
                }, I.centre = function(e) {
                    for (var t, i, n, o = I.area(e, !0), r = {
                        x: 0,
                        y: 0
                    }, s = 0; s < e.length; s++) n = (s + 1) % e.length, t = C.cross(e[s], e[n]), i = C.mult(C.add(e[s], e[n]), t), r = C.add(r, i);
                    return C.div(r, 6 * o)
                }, I.area = function(e, t) {
                    for (var i = 0, n = e.length - 1, o = 0; o < e.length; o++) i += (e[n].x - e[o].x) * (e[n].y + e[o].y), n = o;
                    return t ? i / 2 : Math.abs(i) / 2
                }, I.inertia = function(e, t) {
                    for (var i, n, o = 0, r = 0, s = e, a = 0; a < s.length; a++) n = (a + 1) % s.length, i = Math.abs(C.cross(s[n], s[a])), o += i * (C.dot(s[n], s[n]) + C.dot(s[n], s[a]) + C.dot(s[a], s[a])), r += i;
                    return t / 6 * (o / r)
                }, I.translate = function(e, t, i) {
                    var n;
                    if (i)
                        for (n = 0; n < e.length; n++) e[n].x += t.x * i, e[n].y += t.y * i;
                    else
                        for (n = 0; n < e.length; n++) e[n].x += t.x, e[n].y += t.y
                }, I.rotate = function(e, t, i) {
                    if (0 !== t)
                        for (var n = Math.cos(t), o = Math.sin(t), r = 0; r < e.length; r++) {
                            var s = e[r],
                                a = s.x - i.x,
                                l = s.y - i.y;
                            s.x = i.x + (a * n - l * o), s.y = i.y + (a * o + l * n)
                        }
                }, I.contains = function(e, t) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i],
                            o = e[(i + 1) % e.length];
                        if ((t.x - n.x) * (o.y - n.y) + (t.y - n.y) * (n.x - o.x) > 0) return !1
                    }
                    return !0
                }, I.scale = function(e, t, i, n) {
                    if (1 === t && 1 === i) return e;
                    n = n || I.centre(e);
                    for (var o, r, s = 0; s < e.length; s++) o = e[s], r = C.sub(o, n), e[s].x = n.x + r.x * t, e[s].y = n.y + r.y * i;
                    return e
                }, I.chamfer = function(e, t, i, n, o) {
                    t = t || [8], t.length || (t = [t]), i = "undefined" != typeof i ? i : -1, n = n || 2, o = o || 14;
                    for (var r = (I.centre(e), []), s = 0; s < e.length; s++) {
                        var a = e[s - 1 >= 0 ? s - 1 : e.length - 1],
                            l = e[s],
                            u = e[(s + 1) % e.length],
                            c = t[s < t.length ? s : t.length - 1];
                        if (0 !== c) {
                            var d = C.normalise({
                                    x: l.y - a.y,
                                    y: a.x - l.x
                                }),
                                h = C.normalise({
                                    x: u.y - l.y,
                                    y: l.x - u.x
                                }),
                                f = Math.sqrt(2 * Math.pow(c, 2)),
                                p = C.mult(y.clone(d), c),
                                v = C.normalise(C.mult(C.add(d, h), .5)),
                                m = C.sub(l, C.mult(v, f)),
                                g = i; - 1 === i && (g = 1.75 * Math.pow(c, .32)), g = y.clamp(g, n, o), g % 2 === 1 && (g += 1);
                            for (var x = Math.acos(C.dot(d, h)), b = x / g, w = 0; g > w; w++) r.push(C.add(C.rotate(p, b * w), m))
                        } else r.push(l)
                    }
                    return r
                }
            }();
            var B = {};
            ! function() {
                B.create = function(t) {
                    var i = {
                            controller: B,
                            element: null,
                            canvas: null,
                            options: {
                                width: 800,
                                height: 600,
                                background: "#fafafa",
                                wireframeBackground: "#222",
                                hasBounds: !1,
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showBroadphase: !1,
                                showBounds: !1,
                                showVelocity: !1,
                                showCollisions: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showShadows: !1
                            }
                        },
                        n = y.extend(i, t);
                    return n.canvas = n.canvas || e(n.options.width, n.options.height), n.context = n.canvas.getContext("2d"), n.textures = {}, n.bounds = n.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: n.options.width,
                            y: n.options.height
                        }
                    }, B.setBackground(n, n.options.background), y.isElement(n.element) ? n.element.appendChild(n.canvas) : y.log('No "render.element" passed, "render.canvas" was not inserted into document.', "warn"), n
                }, B.clear = function() {}, B.setBackground = function(e, t) {
                    if (e.currentBackground !== t) {
                        var i = t;
                        /(jpg|gif|png)$/.test(t) && (i = "url(" + t + ")"), e.canvas.style.background = i, e.canvas.style.backgroundSize = "contain", e.currentBackground = t
                    }
                }, B.world = function(e) {
                    var t, i = e.render,
                        n = e.world,
                        r = i.canvas,
                        s = i.context,
                        a = i.options,
                        l = o.allBodies(n),
                        u = o.allConstraints(n),
                        c = [],
                        d = [];
                    a.wireframes ? B.setBackground(i, a.wireframeBackground) : B.setBackground(i, a.background), s.globalCompositeOperation = "source-in", s.fillStyle = "transparent", s.fillRect(0, 0, r.width, r.height), s.globalCompositeOperation = "source-over";
                    var h = i.bounds.max.x - i.bounds.min.x,
                        f = i.bounds.max.y - i.bounds.min.y,
                        p = h / i.options.width,
                        v = f / i.options.height;
                    if (a.hasBounds) {
                        for (t = 0; t < l.length; t++) {
                            var y = l[t];
                            P.overlaps(y.bounds, i.bounds) && c.push(y)
                        }
                        for (t = 0; t < u.length; t++) {
                            var m = u[t],
                                g = m.bodyA,
                                x = m.bodyB,
                                b = m.pointA,
                                w = m.pointB;
                            g && (b = C.add(g.position, m.pointA)), x && (w = C.add(x.position, m.pointB)), b && w && (P.contains(i.bounds, b) || P.contains(i.bounds, w)) && d.push(m)
                        }
                        s.scale(1 / p, 1 / v), s.translate(-i.bounds.min.x, -i.bounds.min.y)
                    } else d = u, c = l;
                    !a.wireframes || e.enableSleeping && a.showSleeping ? B.bodies(e, c, s) : B.bodyWireframes(e, c, s), a.showBounds && B.bodyBounds(e, c, s), (a.showAxes || a.showAngleIndicator) && B.bodyAxes(e, c, s), a.showPositions && B.bodyPositions(e, c, s), a.showVelocity && B.bodyVelocity(e, c, s), a.showIds && B.bodyIds(e, c, s), a.showCollisions && B.collisions(e, e.pairs.list, s), B.constraints(d, s), a.showBroadphase && "grid" === e.broadphase.current && B.grid(e, e.broadphase[e.broadphase.current].instance, s), a.showDebug && B.debug(e, s), a.hasBounds && s.setTransform(1, 0, 0, 1, 0, 0)
                }, B.debug = function(e, t) {
                    var i = t,
                        n = e.world,
                        r = e.render,
                        s = r.options,
                        a = o.allBodies(n),
                        u = "    ";
                    if (e.timing.timestamp - (r.debugTimestamp || 0) >= 500) {
                        var c = "";
                        c += "fps: " + Math.round(e.timing.fps) + u, e.metrics.extended && (c += "delta: " + e.timing.delta.toFixed(3) + u, c += "correction: " + e.timing.correction.toFixed(3) + u, c += "bodies: " + a.length + u, e.broadphase.controller === l && (c += "buckets: " + e.metrics.buckets + u), c += "\n", c += "collisions: " + e.metrics.collisions + u, c += "pairs: " + e.pairs.list.length + u, c += "broad: " + e.metrics.broadEff + u, c += "mid: " + e.metrics.midEff + u, c += "narrow: " + e.metrics.narrowEff + u), r.debugString = c, r.debugTimestamp = e.timing.timestamp
                    }
                    if (r.debugString) {
                        i.font = "12px Arial", i.fillStyle = s.wireframes ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
                        for (var d = r.debugString.split("\n"), h = 0; h < d.length; h++) i.fillText(d[h], 50, 50 + 18 * h)
                    }
                }, B.constraints = function(e, t) {
                    for (var i = t, n = 0; n < e.length; n++) {
                        var o = e[n];
                        if (o.render.visible && o.pointA && o.pointB) {
                            var r = o.bodyA,
                                s = o.bodyB;
                            r ? (i.beginPath(), i.moveTo(r.position.x + o.pointA.x, r.position.y + o.pointA.y)) : (i.beginPath(), i.moveTo(o.pointA.x, o.pointA.y)), s ? i.lineTo(s.position.x + o.pointB.x, s.position.y + o.pointB.y) : i.lineTo(o.pointB.x, o.pointB.y), i.lineWidth = o.render.lineWidth, i.strokeStyle = o.render.strokeStyle, i.stroke()
                        }
                    }
                }, B.bodyShadows = function(e, t, i) {
                    for (var n = i, o = e.render, r = (o.options, 0); r < t.length; r++) {
                        var s = t[r];
                        if (s.render.visible) {
                            if (s.circleRadius) n.beginPath(), n.arc(s.position.x, s.position.y, s.circleRadius, 0, 2 * Math.PI), n.closePath();
                            else {
                                n.beginPath(), n.moveTo(s.vertices[0].x, s.vertices[0].y);
                                for (var a = 1; a < s.vertices.length; a++) n.lineTo(s.vertices[a].x, s.vertices[a].y);
                                n.closePath()
                            }
                            var l = s.position.x - .5 * o.options.width,
                                u = s.position.y - .2 * o.options.height,
                                c = Math.abs(l) + Math.abs(u);
                            n.shadowColor = "rgba(0,0,0,0.15)", n.shadowOffsetX = .05 * l, n.shadowOffsetY = .05 * u, n.shadowBlur = 1 + 12 * Math.min(1, c / 1e3), n.fill(), n.shadowColor = null, n.shadowOffsetX = null, n.shadowOffsetY = null, n.shadowBlur = null
                        }
                    }
                }, B.bodies = function(e, i, n) {
                    var o, r = n,
                        s = e.render,
                        a = s.options;
                    for (o = 0; o < i.length; o++) {
                        var l = i[o];
                        if (l.render.visible)
                            if (l.render.sprite && l.render.sprite.texture && !a.wireframes) {
                                var u = l.render.sprite,
                                    c = t(s, u.texture);
                                a.showSleeping && l.isSleeping && (r.globalAlpha = .5), r.translate(l.position.x, l.position.y), r.rotate(l.angle), r.drawImage(c, c.width * -.5 * u.xScale, c.height * -.5 * u.yScale, c.width * u.xScale, c.height * u.yScale), r.rotate(-l.angle), r.translate(-l.position.x, -l.position.y), a.showSleeping && l.isSleeping && (r.globalAlpha = 1)
                            } else {
                                if (l.circleRadius) r.beginPath(), r.arc(l.position.x, l.position.y, l.circleRadius, 0, 2 * Math.PI);
                                else {
                                    r.beginPath(), r.moveTo(l.vertices[0].x, l.vertices[0].y);
                                    for (var d = 1; d < l.vertices.length; d++) r.lineTo(l.vertices[d].x, l.vertices[d].y);
                                    r.closePath()
                                }
                                a.wireframes ? (r.lineWidth = 1, r.strokeStyle = "#bbb", a.showSleeping && l.isSleeping && (r.strokeStyle = "rgba(255,255,255,0.2)"), r.stroke()) : (r.fillStyle = a.showSleeping && l.isSleeping ? y.shadeColor(l.render.fillStyle, 50) : l.render.fillStyle, r.lineWidth = l.render.lineWidth, r.strokeStyle = l.render.strokeStyle, r.fill(), r.stroke())
                            }
                    }
                }, B.bodyWireframes = function(e, t, i) {
                    var n, o, r = i;
                    for (r.beginPath(), n = 0; n < t.length; n++) {
                        var s = t[n];
                        if (s.render.visible) {
                            for (r.moveTo(s.vertices[0].x, s.vertices[0].y), o = 1; o < s.vertices.length; o++) r.lineTo(s.vertices[o].x, s.vertices[o].y);
                            r.lineTo(s.vertices[0].x, s.vertices[0].y)
                        }
                    }
                    r.lineWidth = 1, r.strokeStyle = "#bbb", r.stroke()
                }, B.bodyBounds = function(e, t, i) {
                    var n = i,
                        o = e.render,
                        r = o.options;
                    n.beginPath();
                    for (var s = 0; s < t.length; s++) {
                        var a = t[s];
                        a.render.visible && n.rect(a.bounds.min.x, a.bounds.min.y, a.bounds.max.x - a.bounds.min.x, a.bounds.max.y - a.bounds.min.y)
                    }
                    n.strokeStyle = r.wireframes ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)", n.lineWidth = 1, n.stroke()
                }, B.bodyAxes = function(e, t, i) {
                    var n, o, r = i,
                        s = e.render,
                        a = s.options;
                    for (r.beginPath(), n = 0; n < t.length; n++) {
                        var l = t[n];
                        if (l.render.visible)
                            if (a.showAxes)
                                for (o = 0; o < l.axes.length; o++) {
                                    var u = l.axes[o];
                                    r.moveTo(l.position.x, l.position.y), r.lineTo(l.position.x + 20 * u.x, l.position.y + 20 * u.y)
                                } else r.moveTo(l.position.x, l.position.y), r.lineTo((l.vertices[0].x + l.vertices[l.vertices.length - 1].x) / 2, (l.vertices[0].y + l.vertices[l.vertices.length - 1].y) / 2)
                    }
                    r.strokeStyle = a.wireframes ? "indianred" : "rgba(0,0,0,0.3)", r.lineWidth = 1, r.stroke()
                }, B.bodyPositions = function(e, t, i) {
                    var n, o, r = i,
                        s = e.render,
                        a = s.options;
                    for (r.beginPath(), o = 0; o < t.length; o++) n = t[o], n.render.visible && (r.arc(n.position.x, n.position.y, 3, 0, 2 * Math.PI, !1), r.closePath());
                    for (r.fillStyle = a.wireframes ? "indianred" : "rgba(0,0,0,0.5)", r.fill(), r.beginPath(), o = 0; o < t.length; o++) n = t[o], n.render.visible && (r.arc(n.positionPrev.x, n.positionPrev.y, 2, 0, 2 * Math.PI, !1), r.closePath());
                    r.fillStyle = "rgba(255,165,0,0.8)", r.fill()
                }, B.bodyVelocity = function(e, t, i) {
                    var n = i,
                        o = e.render;
                    o.options, n.beginPath();
                    for (var r = 0; r < t.length; r++) {
                        var s = t[r];
                        s.render.visible && (n.moveTo(s.position.x, s.position.y), n.lineTo(s.position.x + 2 * (s.position.x - s.positionPrev.x), s.position.y + 2 * (s.position.y - s.positionPrev.y)))
                    }
                    n.lineWidth = 3, n.strokeStyle = "cornflowerblue", n.stroke()
                }, B.bodyIds = function(e, t, i) {
                    for (var n = i, o = 0; o < t.length; o++) {
                        var r = t[o];
                        r.render.visible && (n.font = "12px Arial", n.fillStyle = "rgba(255,255,255,0.5)", n.fillText(r.id, r.position.x + 10, r.position.y - 10))
                    }
                }, B.collisions = function(e, t, i) {
                    var n, o, r, s, a = i,
                        l = e.render.options;
                    for (a.beginPath(), r = 0; r < t.length; r++)
                        for (n = t[r], o = n.collision, s = 0; s < n.activeContacts.length; s++) {
                            var u = n.activeContacts[s],
                                c = u.vertex;
                            a.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5)
                        }
                    for (a.fillStyle = l.wireframes ? "rgba(255,255,255,0.7)" : "orange", a.fill(), a.beginPath(), r = 0; r < t.length; r++)
                        if (n = t[r], o = n.collision, n.activeContacts.length > 0) {
                            var d = n.activeContacts[0].vertex.x,
                                h = n.activeContacts[0].vertex.y;
                            2 === n.activeContacts.length && (d = (n.activeContacts[0].vertex.x + n.activeContacts[1].vertex.x) / 2, h = (n.activeContacts[0].vertex.y + n.activeContacts[1].vertex.y) / 2), a.moveTo(d - 8 * o.normal.x, h - 8 * o.normal.y), a.lineTo(d, h)
                        } a.strokeStyle = l.wireframes ? "rgba(255,165,0,0.7)" : "orange", a.lineWidth = 1, a.stroke()
                }, B.grid = function(e, t, i) {
                    var n = i,
                        o = e.render.options;
                    n.strokeStyle = o.wireframes ? "rgba(255,180,0,0.1)" : "rgba(255,180,0,0.5)", n.beginPath();
                    for (var r = y.keys(t.buckets), s = 0; s < r.length; s++) {
                        var a = r[s];
                        if (!(t.buckets[a].length < 2)) {
                            var l = a.split(",");
                            n.rect(.5 + parseInt(l[0], 10) * t.bucketWidth, .5 + parseInt(l[1], 10) * t.bucketHeight, t.bucketWidth, t.bucketHeight)
                        }
                    }
                    n.lineWidth = 1, n.stroke()
                }, B.inspector = function(e, t) {
                    var i, n = e.engine,
                        o = (n.input.mouse, e.selected),
                        r = n.render,
                        s = r.options;
                    if (s.hasBounds) {
                        var a = r.bounds.max.x - r.bounds.min.x,
                            l = r.bounds.max.y - r.bounds.min.y,
                            u = a / r.options.width,
                            c = l / r.options.height;
                        t.scale(1 / u, 1 / c), t.translate(-r.bounds.min.x, -r.bounds.min.y)
                    }
                    for (var d = 0; d < o.length; d++) {
                        var h = o[d].data;
                        switch (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.9)", t.setLineDash([1, 2]), h.type) {
                            case "body":
                                i = h.bounds, t.beginPath(), t.rect(Math.floor(i.min.x - 3), Math.floor(i.min.y - 3), Math.floor(i.max.x - i.min.x + 6), Math.floor(i.max.y - i.min.y + 6)), t.closePath(), t.stroke();
                                break;
                            case "constraint":
                                var f = h.pointA;
                                h.bodyA && (f = h.pointB), t.beginPath(), t.arc(f.x, f.y, 10, 0, 2 * Math.PI), t.closePath(), t.stroke()
                        }
                        t.setLineDash([0]), t.translate(-.5, -.5)
                    }
                    null !== e.selectStart && (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.6)", t.fillStyle = "rgba(255,165,0,0.1)", i = e.selectBounds, t.beginPath(), t.rect(Math.floor(i.min.x), Math.floor(i.min.y), Math.floor(i.max.x - i.min.x), Math.floor(i.max.y - i.min.y)), t.closePath(), t.stroke(), t.fill(), t.translate(-.5, -.5)), s.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                };
                var e = function(e, t) {
                        var i = document.createElement("canvas");
                        return i.width = e, i.height = t, i.oncontextmenu = function() {
                            return !1
                        }, i.onselectstart = function() {
                            return !1
                        }, i
                    },
                    t = function(e, t) {
                        var i = e.textures[t];
                        return i ? i : (i = e.textures[t] = new Image, i.src = t, i)
                    }
            }();
            var _ = {};
            ! function() {
                _.create = function(e) {
                    var t = {
                            controller: _,
                            element: null,
                            canvas: null,
                            options: {
                                width: 800,
                                height: 600,
                                background: "#fafafa",
                                wireframeBackground: "#222",
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showBroadphase: !1,
                                showBounds: !1,
                                showVelocity: !1,
                                showCollisions: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showShadows: !1
                            }
                        },
                        i = y.extend(t, e);
                    return i.context = new PIXI.WebGLRenderer(800, 600, i.canvas, !1, !0), i.canvas = i.context.view, i.stage = new PIXI.Stage, i.textures = {}, i.sprites = {}, i.primitives = {}, i.spriteBatch = new PIXI.SpriteBatch, i.stage.addChild(i.spriteBatch), y.isElement(i.element) ? i.element.appendChild(i.canvas) : y.log('No "render.element" passed, "render.canvas" was not inserted into document.', "warn"), i.canvas.oncontextmenu = function() {
                        return !1
                    }, i.canvas.onselectstart = function() {
                        return !1
                    }, i
                }, _.clear = function(e) {
                    for (var t = e.stage, i = e.spriteBatch; t.children[0];) t.removeChild(t.children[0]);
                    for (; i.children[0];) i.removeChild(i.children[0]);
                    var n = e.sprites["bg-0"];
                    e.textures = {}, e.sprites = {}, e.primitives = {}, e.sprites["bg-0"] = n, n && i.addChildAt(n, 0), e.stage.addChild(e.spriteBatch), e.currentBackground = null
                }, _.setBackground = function(e, t) {
                    if (e.currentBackground !== t) {
                        var n = t.indexOf && -1 !== t.indexOf("#"),
                            o = e.sprites["bg-0"];
                        if (n) {
                            var r = y.colorToNumber(t);
                            e.stage.setBackgroundColor(r), o && e.spriteBatch.removeChild(o)
                        } else if (!o) {
                            var s = i(e, t);
                            o = e.sprites["bg-0"] = new PIXI.Sprite(s), o.position.x = 0, o.position.y = 0, e.spriteBatch.addChildAt(o, 0)
                        }
                        e.currentBackground = t
                    }
                }, _.world = function(e) {
                    var t, i = e.render,
                        n = e.world,
                        r = i.context,
                        s = i.stage,
                        a = i.options,
                        l = o.allBodies(n),
                        u = o.allConstraints(n);
                    for (a.wireframes ? _.setBackground(i, a.wireframeBackground) : _.setBackground(i, a.background), t = 0; t < l.length; t++) _.body(e, l[t]);
                    for (t = 0; t < u.length; t++) _.constraint(e, u[t]);
                    r.render(s)
                }, _.constraint = function(e, t) {
                    var i = e.render,
                        n = t.bodyA,
                        o = t.bodyB,
                        r = t.pointA,
                        s = t.pointB,
                        a = i.stage,
                        l = t.render,
                        u = "c-" + t.id,
                        c = i.primitives[u];
                    return c || (c = i.primitives[u] = new PIXI.Graphics), l.visible && t.pointA && t.pointB ? (-1 === a.children.indexOf(c) && a.addChild(c), c.clear(), c.beginFill(0, 0), c.lineStyle(l.lineWidth, y.colorToNumber(l.strokeStyle), 1), n ? c.moveTo(n.position.x + r.x, n.position.y + r.y) : c.moveTo(r.x, r.y), o ? c.lineTo(o.position.x + s.x, o.position.y + s.y) : c.lineTo(s.x, s.y), void c.endFill()) : void c.clear()
                }, _.body = function(i, n) {
                    var o = i.render,
                        r = n.render;
                    if (r.visible)
                        if (r.sprite && r.sprite.texture) {
                            var s = "b-" + n.id,
                                a = o.sprites[s],
                                l = o.spriteBatch;
                            a || (a = o.sprites[s] = e(o, n)), -1 === l.children.indexOf(a) && l.addChild(a), a.position.x = n.position.x, a.position.y = n.position.y, a.rotation = n.angle
                        } else {
                            var u = "b-" + n.id,
                                c = o.primitives[u],
                                d = o.stage;
                            c || (c = o.primitives[u] = t(o, n), c.initialAngle = n.angle), -1 === d.children.indexOf(c) && d.addChild(c), c.position.x = n.position.x, c.position.y = n.position.y, c.rotation = n.angle - c.initialAngle
                        }
                };
                var e = function(e, t) {
                        var n = t.render,
                            o = n.sprite.texture,
                            r = i(e, o),
                            s = new PIXI.Sprite(r);
                        return s.anchor.x = .5, s.anchor.y = .5, s
                    },
                    t = function(e, t) {
                        var i = t.render,
                            n = e.options,
                            o = new PIXI.Graphics;
                        o.clear(), n.wireframes ? (o.beginFill(0, 0), o.lineStyle(1, y.colorToNumber("#bbb"), 1)) : (o.beginFill(y.colorToNumber(i.fillStyle), 1), o.lineStyle(t.render.lineWidth, y.colorToNumber(i.strokeStyle), 1)), o.moveTo(t.vertices[0].x - t.position.x, t.vertices[0].y - t.position.y);
                        for (var r = 1; r < t.vertices.length; r++) o.lineTo(t.vertices[r].x - t.position.x, t.vertices[r].y - t.position.y);
                        return o.lineTo(t.vertices[0].x - t.position.x, t.vertices[0].y - t.position.y), o.endFill(), (n.showAngleIndicator || n.showAxes) && (o.beginFill(0, 0), n.wireframes ? o.lineStyle(1, y.colorToNumber("#CD5C5C"), 1) : o.lineStyle(1, y.colorToNumber(t.render.strokeStyle)), o.moveTo(0, 0), o.lineTo((t.vertices[0].x + t.vertices[t.vertices.length - 1].x) / 2 - t.position.x, (t.vertices[0].y + t.vertices[t.vertices.length - 1].y) / 2 - t.position.y), o.endFill()), o
                    },
                    i = function(e, t) {
                        var i = e.textures[t];
                        return i || (i = e.textures[t] = PIXI.Texture.fromImage(t)), i
                    }
            }(), r.add = o.add, r.remove = o.remove, r.addComposite = o.addComposite, r.addBody = o.addBody, r.addConstraint = o.addConstraint, r.clear = o.clear, e.Body = n, e.Composite = o, e.World = r, e.Contact = s, e.Detector = a, e.Grid = l, e.Pairs = c, e.Pair = u, e.Resolver = h, e.SAT = f, e.Constraint = p, e.MouseConstraint = v, e.Common = y, e.Engine = m, e.Metrics = x, e.Mouse = b, e.Sleeping = w, e.Bodies = S, e.Composites = k, e.Axes = M, e.Bounds = P, e.Vector = C, e.Vertices = I, e.Render = B, e.RenderPixi = _, e.Events = g, e.Query = d, "undefined" != typeof i && ("undefined" != typeof t && t.exports && (i = t.exports = e), i.Matter = e), "function" == typeof define && define.amd && define("Matter", [], function() {
                return e
            }), "object" == typeof window && "object" == typeof window.document && (window.Matter = e)
        }()
    }, {}],
    34: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function(e, t, i) {
                for (var n = !0; n;) {
                    var o = e,
                        r = t,
                        s = i;
                    n = !1, null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, r);
                    if (void 0 !== a) {
                        if ("value" in a) return a.value;
                        var l = a.get;
                        if (void 0 === l) return;
                        return l.call(s)
                    }
                    var u = Object.getPrototypeOf(o);
                    if (null === u) return;
                    e = u, t = r, i = s, n = !0, a = u = void 0
                }
            },
            l = e("./Sprite"),
            u = n(l),
            c = e("./Rect"),
            d = n(c),
            h = function(e) {
                function t() {
                    o(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.element = null, this.bounds = new d["default"], this.frame = new d["default"]
                }
                return r(t, e), s(t, [{
                    key: "draw",
                    value: function(e) {
                        this.element && e.drawImage(this.element, this.frame.x, this.frame.y, this.frame.w, this.frame.h, this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this,
                            i = new Image;
                        i.src = e, i.complete ? this._onLoadComplete(i) : i.onload = function() {
                            t._onLoadComplete(i)
                        }
                    }
                }, {
                    key: "_onLoadComplete",
                    value: function(e) {
                        this.element = e, this.bounds.w = e.width, this.bounds.h = e.height, this.frame.w = e.width, this.frame.h = e.height
                    }
                }]), t
            }(u["default"]);
        i["default"] = h, t.exports = i["default"]
    }, {
        "./Rect": 36,
        "./Sprite": 37
    }],
    35: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function(e, t, i) {
                for (var n = !0; n;) {
                    var o = e,
                        r = t,
                        s = i;
                    n = !1, null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, r);
                    if (void 0 !== a) {
                        if ("value" in a) return a.value;
                        var l = a.get;
                        if (void 0 === l) return;
                        return l.call(s)
                    }
                    var u = Object.getPrototypeOf(o);
                    if (null === u) return;
                    e = u, t = r, i = s, n = !0, a = u = void 0
                }
            },
            l = e("./Sprite"),
            u = n(l),
            c = function(e) {
                function t() {
                    o(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.size = 20, this.family = "Arial", this.weight = "normal", this.color = "#000000", this.baseline = "top", this.align = "left", this.lineSpace = void 0, this._text = "", this._lines = []
                }
                return r(t, e), s(t, [{
                    key: "draw",
                    value: function(e) {
                        if (e.font = this.weight + " " + this.size + "pt " + this.family, e.textBaseline = this.baseline, e.textAlign = this.align, e.fillStyle = this.color, this._multiline)
                            for (var t = 0, i = this._lines.length; i > t; t++) {
                                var n = void 0 !== this.lineSpace ? this.lineSpace : this.size + 8;
                                e.fillText(this._lines[t], 0, t * n)
                            } else e.fillText(this._text, 0, 0)
                    }
                }, {
                    key: "text",
                    get: function() {
                        return this._text
                    },
                    set: function(e) {
                        e !== this._text && (this._text = e, this._lines = this._text.split("\n"), this._multiline = this._lines.length > 0)
                    }
                }]), t
            }(u["default"]);
        i["default"] = c, t.exports = i["default"]
    }, {
        "./Sprite": 37
    }],
    36: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function r() {
            n(this, r), this.x = 0, this.y = 0, this.w = 0, this.h = 0
        };
        i["default"] = o, t.exports = i["default"]
    }, {}],
    37: [function(e, t, i) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t["default"] = e, t
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("./matrix"),
            a = n(s),
            l = function() {
                function e() {
                    o(this, e), this.x = 0, this.y = 0, this.alpha = 1, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.enabled = !0, this.children = [], this.parent = null, this.transform = a.create(), this._alpha = 1
                }
                return r(e, [{
                    key: "add",
                    value: function(e) {
                        e.remove(), e.parent = this, this.children.push(e);
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        var t = this.children.indexOf(e);
                        t >= 0 && (this.children.splice(t, 1), e.parent = null)
                    }
                }, {
                    key: "removeFromParent",
                    value: function() {
                        this.parent && this.parent.remove(this)
                    }
                }, {
                    key: "removeChildren",
                    value: function() {
                        for (var e = 0, t = this.children.length; t > e; e++) this.children[e].parent = null;
                        this.children = []
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                        if (t || this.enabled && this.parent) {
                            this._alpha = this.alpha, a.identity(this.transform), 0 !== this.rotation && a.rotate(this.transform, this.rotation), (1 !== this.scaleX || 1 !== this.scaleY) && a.scale(this.transform, this.scaleX, this.scaleY), (0 !== this.x || 0 !== this.y) && a.translate(this.transform, this.x, this.y), this.parent && (this._alpha *= this.parent._alpha, a.multiply(this.transform, this.parent.transform, this.transform)), e.globalAlpha = this._alpha, e.setTransform(this.transform[0], this.transform[1], this.transform[3], this.transform[4], this.transform[6], this.transform[7]), this.draw && this.draw(e);
                            for (var i = 0, n = this.children.length; n > i; i++) this.children[i].render(e)
                        }
                    }
                }]), e
            }();
        i["default"] = l, t.exports = i["default"]
    }, {
        "./matrix": 40
    }],
    38: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function(e, t, i) {
                for (var n = !0; n;) {
                    var o = e,
                        r = t,
                        s = i;
                    n = !1, null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, r);
                    if (void 0 !== a) {
                        if ("value" in a) return a.value;
                        var l = a.get;
                        if (void 0 === l) return;
                        return l.call(s)
                    }
                    var u = Object.getPrototypeOf(o);
                    if (null === u) return;
                    e = u, t = r, i = s, n = !0, a = u = void 0
                }
            },
            l = e("./Sprite"),
            u = n(l),
            c = {
                antialias: !0,
                color: "#000000"
            },
            d = function(e) {
                function t(e) {
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? c : arguments[1];
                    o(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.canvas = e, this.ctx = e.getContext("2d"), this.ctx.imageSmoothingEnabled = i.antialias, this.ctx.mozImageSmoothingEnabled = i.antialias, this.color = i.color
                }
                return r(t, e), s(t, [{
                    key: "render",
                    value: function() {
                        this.ctx.save(), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), a(Object.getPrototypeOf(t.prototype), "render", this).call(this, this.ctx, !0), this.ctx.restore()
                    }
                }, {
                    key: "color",
                    get: function() {
                        return this._color
                    },
                    set: function(e) {
                        this._color = e, this.canvas.style.backgroundColor = e
                    }
                }]), t
            }(u["default"]);
        i["default"] = d, t.exports = i["default"]
    }, {
        "./Sprite": 37
    }],
    39: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("./Sprite"),
            r = n(o),
            s = e("./Label"),
            a = n(s),
            l = e("./Img"),
            u = n(l),
            c = e("./Rect"),
            d = n(c),
            h = e("./Stage"),
            f = n(h),
            p = {};
        p.Sprite = r["default"], p.Label = a["default"], p.Img = u["default"], p.Rect = d["default"], p.Stage = f["default"], window && (window.CS = p), i["default"] = p, t.exports = i["default"]
    }, {
        "./Img": 34,
        "./Label": 35,
        "./Rect": 36,
        "./Sprite": 37,
        "./Stage": 38
    }],
    40: [function(e, t, i) {
        "use strict";

        function n() {
            var e = new Float32Array(9);
            return o(e), e
        }

        function o(e) {
            e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1
        }

        function r(e, t) {
            for (var i in t) e[i] = t[i]
        }

        function s(e, t, i) {
            var n = t[0],
                o = t[1],
                r = t[2],
                s = t[3],
                a = t[4],
                l = t[5],
                u = t[6],
                c = t[7],
                d = t[8],
                h = i[0],
                f = i[1],
                p = i[2],
                v = i[3],
                y = i[4],
                m = i[5],
                g = i[6],
                x = i[7],
                b = i[8];
            e[0] = n * h + o * v + r * g, e[1] = n * f + o * y + r * x, e[2] = n * p + o * m + r * b, e[3] = s * h + a * v + l * g, e[4] = s * f + a * y + l * x, e[5] = s * p + a * m + l * b, e[6] = u * h + c * v + d * g, e[7] = u * f + c * y + d * x, e[8] = u * p + c * m + d * b
        }

        function a(e, t, i) {
            e[6] += t, e[7] += i
        }

        function l(e, t, i) {
            e[0] *= t, e[4] *= i, e[3] *= t, e[1] *= i, e[6] *= t, e[7] *= i
        }

        function u(e, t) {
            var i = Math.cos(t),
                n = Math.sin(t),
                o = e[0],
                r = e[3],
                s = e[6];
            e[0] = o * i - e[1] * n, e[1] = o * n + e[1] * i, e[3] = r * i - e[4] * n, e[4] = r * n + e[4] * i, e[6] = s * i - e[7] * n, e[7] = s * n + e[7] * i
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.create = n, i.identity = o, i.copy = r, i.multiply = s, i.translate = a, i.scale = l, i.rotate = u
    }, {}],
    41: [function(e, t, i) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t["default"] = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t, i, n) {
            var o = f["default"].Bodies.rectangle(e, t, i, n, {
                isStatic: !0
            });
            return o.render.visible = !1, o
        }

        function a(e, t, i) {
            var n = e.position;
            f["default"].Body.translate(e, {
                x: -n.x,
                y: -n.y
            }), f["default"].Body.translate(e, {
                x: t,
                y: i
            })
        }

        function l() {
            var e = {
                create: function() {
                    return {
                        controller: e
                    }
                },
                world: function() {},
                clear: function() {}
            };
            return e
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            c = e("../cs/cs.js"),
            d = o(c),
            h = e("matter-js"),
            f = o(h),
            p = e("./Shape"),
            v = o(p),
            y = e("./Bird"),
            m = o(y),
            g = e("../tweener/Tweener"),
            x = o(g),
            b = e("./math"),
            w = n(b),
            S = e("./utils"),
            k = n(S),
            M = e("./config"),
            P = o(M),
            C = function() {
                function e() {
                    r(this, e), this.config = P["default"]
                }
                return u(e, [{
                    key: "init",
                    value: function(e, t, i) {
                        this.canvas || (this.tweener = new x["default"], this.time = 0, this.delta = 0, k.bodyEventFix(), this.initGraphics(e, t, i), this.initEngine(), this.initEvents(), this.createBounds(), this.createShapes(), this.render())
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.onResize(e, t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.canvas && (this.destroyEvents(), this.destroyGraphics(), this.destroyEngine())
                    }
                }, {
                    key: "initGraphics",
                    value: function(e, t, i) {
                        this.skipFrame = !1, this.canvas = e, this.container = e.parentElement, e.width = t || this.container.offsetWidth, e.height = i || this.container.offsetHeight, this.config.preRender ? (this.ctx = e.getContext("2d"), this._rc = document.createElement("canvas"), this._rc.width = this.canvas.width, this._rc.height = this.canvas.height, this.stage = new d["default"].Stage(this._rc, {
                            antialias: this.config.antialias,
                            color: this.config.bgcolor
                        })) : this.stage = new d["default"].Stage(e, {
                            antialias: this.config.antialias,
                            color: this.config.bgcolor
                        })
                    }
                }, {
                    key: "destroyGraphics",
                    value: function() {
                        this._raf && (cancelAnimationFrame(this._raf), this._raf = null), this.canvas = null
                    }
                }, {
                    key: "initEngine",
                    value: function() {
                        this.bounds = [], this.squares = [], this.triangles = [], this.physicsSkip = this.config.physicsFrameRate;
                        var e = f["default"].Engine.create({
                            render: {
                                controller: l(),
                                enabled: !1,
                                options: {
                                    width: this.canvas.width,
                                    height: this.canvas.height
                                }
                            }
                        });
                        this.engine = e, this.root = f["default"].Composite.create(), this.engine.world.bounds.max.x = this.canvas.width, this.engine.world.bounds.max.y = this.canvas.height, this.engine.world.gravity.y = this.config.gravity, f["default"].World.add(this.engine.world, this.root)
                    }
                }, {
                    key: "destroyEngine",
                    value: function() {
                        f["default"].Engine.clear(this.engine), this.root = null, this.engine = null
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        this.mouse = {
                            x: 0,
                            y: 0,
                            dx: 0,
                            dy: 0
                        }, this.moving = !1, this.events = {}, this.events.onResize = this.onResize.bind(this), this.events.onClick = this.onClick.bind(this), this.events.onMove = this.onMove.bind(this), this.events.onTouch = this.onTouch.bind(this), this.events.onTouchMove = this.onTouchMove.bind(this), k.isMobile() ? (window.addEventListener("touchend", this.events.onTouch), window.addEventListener("touchmove", this.events.onTouchMove)) : (window.addEventListener("click", this.events.onClick), window.addEventListener("mousemove", this.events.onMove)), this.config.autoResize && window.addEventListener("resize", this.events.onResize)
                    }
                }, {
                    key: "destroyEvents",
                    value: function() {
                        window.removeEventListener("click", this.events.onClick), window.removeEventListener("mousemove", this.events.onMove), window.removeEventListener("touchend", this.events.onTouch), window.removeEventListener("touchmove", this.events.onTouchMove), window.removeEventListener("resize", this.events.onResize), this.events = {}
                    }
                }, {
                    key: "onResize",
                    value: function(e, t) {
                        var i = this.canvas.parentElement,
                            n = i.offsetWidth,
                            o = i.offsetHeight;
                        e && t && !isNaN(e) && (n = e, o = t), this.canvas.width = n, this.canvas.height = o, this.engine.world.bounds.max.x = n, this.engine.world.bounds.max.y = o, a(this.bounds[0], n / 2, o + this.borderSize / 2 - 10), a(this.bounds[1], 0 - this.borderSize / 2 + 10, o / 2), a(this.bounds[2], n + this.borderSize / 2 - 10, o / 2), this.config.preRender && (this._rc.width = n, this._rc.height = o)
                    }
                }, {
                    key: "onTouch",
                    value: function(e) {
                        var t = e.changedTouches[0];
                        this.onClick(t)
                    }
                }, {
                    key: "onTouchMove",
                    value: function(e) {
                        var t = e.changedTouches[0];
                        this.onMove(t)
                    }
                }, {
                    key: "updateMouse",
                    value: function(e) {
                        var t = this.canvas.getBoundingClientRect(),
                            i = e.clientX - t.left,
                            n = e.clientY - t.top;
                        this.mouse.dx = i - this.mouse.x, this.mouse.dy = n - this.mouse.y, this.mouse.x = i, this.mouse.y = n
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        if (this.updateMouse(e), !(this.mouse.x < 0 || this.mouse.y < 0 || this.mouse.x > this.canvas.width || this.mouse.y > this.canvas.height)) {
                            var t = this.mouse.x,
                                i = this.mouse.y,
                                n = Math.floor(Math.random() * this.squares.length),
                                o = this.squares.splice(n, 1)[0],
                                r = this.triangles.splice(n, 1)[0];
                            o.move(t, i), r.move(t, i, this.spawnBird.bind(this))
                        }
                    }
                }, {
                    key: "onMove",
                    value: function(e) {
                        this.updateMouse(e), this.moving = !0
                    }
                }, {
                    key: "createBounds",
                    value: function() {
                        this.borderSize = 200;
                        var e = this.canvas.width,
                            t = this.canvas.height;
                        this.bounds = [], this.bounds.push(s(e / 2, t + this.borderSize / 2 - 10, 5e3, this.borderSize)), this.bounds.push(s(0 - this.borderSize / 2 + 10, t / 2, this.borderSize, 5e3)), this.bounds.push(s(e + this.borderSize / 2 - 10, t / 2, this.borderSize, 5e3)), f["default"].World.add(this.engine.world, this.bounds)
                    }
                }, {
                    key: "createShapes",
                    value: function() {
                        this.triangles = [], this.squares = [];
                        for (var e = this.config.maxShapes; e--;) this.spawnShapes()
                    }
                }, {
                    key: "spawnShapes",
                    value: function() {
                        this.spawnSquare(this.canvas.width, this.canvas.height), this.spawnTriangle(this.canvas.width, this.canvas.height)
                    }
                }, {
                    key: "spawnSquare",
                    value: function(e, t) {
                        var i = Math.random() * e / 2 + 10,
                            n = Math.random() * t - t,
                            o = new v["default"]("square", i, n);
                        this.squares.push(o)
                    }
                }, {
                    key: "spawnTriangle",
                    value: function(e, t) {
                        var i = e / 2 + Math.random() * e / 2 - 10,
                            n = Math.random() * t - t,
                            o = new v["default"]("triangle", i, n);
                        this.triangles.push(o)
                    }
                }, {
                    key: "spawnBird",
                    value: function(e, t) {
                        var i = new m["default"](e, t);
                        i.onDismiss = this.spawnShapes.bind(this), i.fly()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = k.getTime(),
                            t = e - this.time,
                            i = 1;
                        this.config.fixedDeltaTime > 0 && (t = this.config.fixedDeltaTime), t > 100 && (t = 100), this.config.frameSkip && (i = 2), this.time = e, this.delta = t, m["default"].delta = t * i, null !== this.canvas && (this.physicsSkip >= this.config.physicsFrameRate && (this.update(t * this.config.physicsFrameRate), this.physicsSkip = 0), this.physicsSkip += 1, this.tweener.update(t * i / 1e3), this.skipFrame || this.stage.render(), this.config.renderFrameSkip && (this.skipFrame ? this.skipFrame = !1 : this.skipFrame = !0), this.config.preRender && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.drawImage(this._rc, 0, 0)), this._raf = requestAnimationFrame(this.render.bind(this)))
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        f["default"].Engine.update(this.engine, e);
                        for (var t = f["default"].Matter.Composite.allBodies(this.root), i = t.length, n = 0; i > n; n++) {
                            var o = t[n];
                            this.config.regroupForce > 0 && this.regroup(o), this.moving && this.applyMouseForce(o)
                        }
                        this.moving = !1
                    }
                }, {
                    key: "applyMouseForce",
                    value: function(e) {
                        var t = this.mouse.x,
                            i = this.mouse.y + 30,
                            n = 5e-7 * (100 / this.config.physicsFrameRate),
                            o = 110,
                            r = w.distance(e.position, {
                                x: t,
                                y: i
                            }),
                            s = 0,
                            a = 0;
                        if (o > r) {
                            var l = e.position.x - t,
                                u = e.position.y - i;
                            s += l * n, a += u * n, f["default"].Body.applyForce(e, this.mouse, {
                                x: s,
                                y: a
                            })
                        }
                    }
                }, {
                    key: "regroup",
                    value: function(e) {
                        var t = this.canvas.width,
                            i = this.canvas.height,
                            n = e.position.x,
                            o = 0,
                            r = 0,
                            s = 5e-5 * this.config.regroupForce;
                        void 0 === e.will && (e.will = 1), "triangle" === e.label && t / 2 + 10 > n ? (o += s * e.will, r -= s, e.will += .01 * this.config.physicsFrameRate) : "square" === e.label && n > t / 2 - 10 ? (o -= s * e.will, r -= s, e.will += .01 * this.config.physicsFrameRate) : e.will = 1, (0 !== o || 0 !== r) && f["default"].Body.applyForce(e, {
                            x: t / 2,
                            y: i
                        }, {
                            x: o,
                            y: r
                        })
                    }
                }]), e
            }();
        i["default"] = C, t.exports = i["default"]
    }, {
        "../cs/cs.js": 39,
        "../tweener/Tweener": 49,
        "./Bird": 42,
        "./Shape": 43,
        "./config": 44,
        "./math": 45,
        "./utils": 46,
        "matter-js": 33
    }],
    42: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("../cs/cs.js"),
            a = n(s),
            l = e("eases"),
            u = n(l),
            c = e("matter-js"),
            d = n(c),
            h = null,
            f = function() {
                function e(t, i) {
                    o(this, e), h = window.app, this.size = 20, this.obj = this.getBody(t, i), this.view = new a["default"].Sprite, this.view.draw = this.draw.bind(this), this.view.x = this.x, this.view.y = this.y, this.color = h.config.colorC, this.wingPos = {
                        x: 0,
                        y: 0
                    }, this.count = 0, this.type = 0, this.invertColors = Math.random() < .5, h.stage.add(this.view)
                }
                return r(e, [{
                    key: "getBody",
                    value: function(e, t) {
                        var i = d["default"].Bodies.circle(e, t, this.size / 2);
                        return i.render.fillStyle = this.color, i.render.lineWidth = 0, i.render.strokeStyle = "rgba(0, 0, 0, 0)", d["default"].Composite.add(h.root, i), d["default"].Body.setStatic(i, !0), i
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        var t = this.x,
                            i = this.y,
                            n = this.a;
                        e.fillStyle = this.color, e.fillRect(-this.size / 2, -this.size / 2, this.size, this.size), this.view.x = t, this.view.y = i, this.view.rotation = n, this.drawWing(e, 1, this.invertColors ? h.config.colorA : h.config.colorB), this.drawWing(e, -1, this.invertColors ? h.config.colorB : h.config.colorA), this.update()
                    }
                }, {
                    key: "drawWing",
                    value: function(e, t, i) {
                        e.fillStyle = i, e.beginPath(), e.moveTo(-this.size / 2 * t, -this.size / 2), e.lineTo(-this.size / 2 * t, this.size / 2), e.lineTo(1.5 * -this.size * t, this.wingPos.y), e.fill(), e.closePath()
                    }
                }, {
                    key: "fly",
                    value: function() {
                        this.type = Math.floor(2 * Math.random()), this.type = 1, this.speed = 2 + 4 * Math.random(), this.torque = .3 + 3 * Math.random(), this.wingSpeed = .2 + .8 * Math.random(), this.scaleSpeed = .005 * (.4 * Math.random() - .3), this.changeDirection()
                    }
                }, {
                    key: "changeDirection",
                    value: function() {
                        if (this.y < -100) return void this.dismiss();
                        var e = .5 * -Math.PI + Math.random() * Math.PI,
                            t = e - this.a;
                        h.tweener.add(this).to({
                            a: e
                        }, Math.abs(t) * this.torque, u["default"].linear).then(this.changeDirection.bind(this))
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.count += e.delta / 16, this.wingPos.y = 10 * Math.sin(this.count * this.wingSpeed);
                        var t = this.a,
                            i = this.speed * (e.delta / 16),
                            n = Math.sin(t) * i,
                            o = -Math.cos(t) * i;
                        this.x += n, this.y += o, this.view.scaleX += this.scaleSpeed, this.view.scaleY = this.view.scaleX
                    }
                }, {
                    key: "dismiss",
                    value: function() {
                        d["default"].Composite.remove(h.root, this.obj), this.view.removeFromParent(), this.view.draw = null, this.onDismiss && (this.onDismiss(), this.onDismiss = null)
                    }
                }, {
                    key: "updatePosition",
                    value: function(e, t) {
                        d["default"].Body.translate(this.obj, {
                            x: e - this.obj.position.x,
                            y: t - this.obj.position.y
                        })
                    }
                }, {
                    key: "updateAngle",
                    value: function(e) {
                        d["default"].Body.rotate(this.obj, e - this.obj.angle)
                    }
                }, {
                    key: "x",
                    get: function() {
                        return this.obj.position.x
                    },
                    set: function(e) {
                        this.updatePosition(e, this.y)
                    }
                }, {
                    key: "y",
                    get: function() {
                        return this.obj.position.y
                    },
                    set: function(e) {
                        this.updatePosition(this.x, e)
                    }
                }, {
                    key: "a",
                    get: function() {
                        return this.obj.angle
                    },
                    set: function(e) {
                        this.updateAngle(e)
                    }
                }]), e
            }();
        i["default"] = f, f.delta = 0, t.exports = i["default"]
    }, {
        "../cs/cs.js": 39,
        eases: 19,
        "matter-js": 33
    }],
    43: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            var i = document.createElement("canvas");
            i.width = t, i.height = t, i.size = t, i.halfSize = t / 2;
            var n = i.getContext("2d");
            return n.fillStyle = e, n
        }

        function s(e, t) {
            if (m) return m;
            var i = r(e, t);
            i.fillStyle = e, i.beginPath();
            for (var n = 3, o = t / 2, s = 2 * Math.PI / n, a = .5 * s, l = 0; n > l; l += 1) {
                var u = a + l * s,
                    c = Math.cos(u) * o + t / 2,
                    d = Math.sin(u) * o + t / 2;
                0 === l ? i.moveTo(c, d) : i.lineTo(c, d)
            }
            return i.fill(), i.closePath(), m = i.canvas
        }

        function a(e, t) {
            if (g) return g;
            var i = r(e, t);
            return i.fillStyle = e, i.fillRect(0, 0, t, t), g = i.canvas
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            u = e("../cs/cs.js"),
            c = n(u),
            d = e("eases"),
            h = n(d),
            f = e("matter-js"),
            p = n(f),
            v = null,
            y = function() {
                function e(t, i, n) {
                    o(this, e), v = window.app, this.type = t, this.obj = "square" === t ? this.getSquare(i, n) : this.getTriangle(i, n), this.obj.label = t, this.obj.friction = v.config.friction, this.obj.sleepThreshold = 60, this.moving = !1, p["default"].Body.applyForce(this.obj, {
                        x: i,
                        y: n
                    }, {
                        x: 0,
                        y: .002 * Math.random()
                    }), this.color = this.obj.render.fillStyle, this.vertices = [];
                    for (var r = this.obj.vertices.length, l = 0; r > l; l++) {
                        var u = this.obj.vertices[l];
                        this.vertices[l] = {
                            x: u.x,
                            y: u.y
                        }
                    }
                    this.view = new c["default"].Sprite, this._img = "square" === t ? a(this.color, 20) : s(this.color, 30), this.mode = v.config.cacheShapeDraw ? "image" : "vertice", "image" === this.mode ? (this.view.x = i, this.view.y = n, this.view.draw = this.drawImage.bind(this)) : this.view.draw = this.drawVertices.bind(this), v.stage.add(this.view)
                }
                return l(e, [{
                    key: "getSquare",
                    value: function(e, t) {
                        var i = p["default"].Bodies.rectangle(e, t, 20, 20);
                        return i.render.fillStyle = v.config.colorA, i.render.lineWidth = 0, i.render.strokeStyle = "rgba(0, 0, 0, 0)", p["default"].Composite.add(v.root, i), i
                    }
                }, {
                    key: "getTriangle",
                    value: function(e, t) {
                        var i = p["default"].Bodies.polygon(e, t, 3, 15);
                        return i.render.fillStyle = v.config.colorB, i.render.lineWidth = 0, i.render.strokeStyle = "rgba(0, 0, 0, 0)", p["default"].Composite.add(v.root, i), i
                    }
                }, {
                    key: "move",
                    value: function(e, t, i) {
                        this.moving = !0;
                        var n = this,
                            o = .5;
                        v.tweener.add(this).to({
                            x: e
                        }, o, h["default"].quadIn).then(function() {
                            n.dismiss(), i && i(e, t)
                        }), v.tweener.add(this).to({
                            y: t
                        }, o, h["default"].sinOut)
                    }
                }, {
                    key: "dismiss",
                    value: function() {
                        p["default"].Composite.remove(v.root, this.obj), this.view.removeFromParent(), this.view.draw = null
                    }
                }, {
                    key: "updatePosition",
                    value: function(e, t) {
                        p["default"].Body.setStatic(this.obj, !0), p["default"].Body.translate(this.obj, {
                            x: e - this.obj.position.x,
                            y: t - this.obj.position.y
                        })
                    }
                }, {
                    key: "drawImage",
                    value: function(e) {
                        var t = this.moving ? .9 : .4;
                        this.view.x -= (this.view.x - this.obj.position.x) * t, this.view.y -= (this.view.y - this.obj.position.y) * t, this.view.rotation -= (this.view.rotation - this.obj.angle) * t, e.drawImage(this._img, -this._img.halfSize, -this._img.halfSize, this._img.size, this._img.size), this.updateScreenCoords()
                    }
                }, {
                    key: "drawVertices",
                    value: function(e) {
                        var t = this.moving ? .9 : .4;
                        e.fillStyle = this.color, e.beginPath();
                        for (var i = this.obj.vertices.length, n = 0; i > n; n++) {
                            var o = this.obj.vertices[n],
                                r = this.vertices[n];
                            r.x -= (r.x - o.x) * t, r.y -= (r.y - o.y) * t, 0 === n ? e.moveTo(r.x, r.y) : e.lineTo(r.x, r.y)
                        }
                        e.fill(), e.closePath(), this.updateScreenCoords()
                    }
                }, {
                    key: "updateScreenCoords",
                    value: function() {
                        this.obj.torque = .007 * -this.obj.angularVelocity;
                        var e = this.x,
                            t = this.y;
                        if (0 > e || e > v.canvas.width || t > v.canvas.height)
                            if (e = Math.random() * v.canvas.width, t = -Math.random() * v.canvas.height - 30, p["default"].Body.translate(this.obj, {
                                x: -this.obj.position.x + e,
                                y: -this.obj.position.y + t
                            }), "image" === this.mode) this.view.x = e, this.view.y = t;
                            else
                                for (var i = this.obj.vertices.length, n = 0; i > n; n++) {
                                    var o = this.obj.vertices[n];
                                    this.vertices[n] = {
                                        x: o.x,
                                        y: o.y
                                    }
                                }
                    }
                }, {
                    key: "x",
                    get: function() {
                        return this.obj.position.x
                    },
                    set: function(e) {
                        this.updatePosition(e, this.y)
                    }
                }, {
                    key: "y",
                    get: function() {
                        return this.obj.position.y
                    },
                    set: function(e) {
                        this.updatePosition(this.x, e)
                    }
                }]), e
            }();
        i["default"] = y;
        var m = null,
            g = null;
        t.exports = i["default"]
    }, {
        "../cs/cs.js": 39,
        eases: 19,
        "matter-js": 33
    }],
    44: [function(e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = {
            gravity: .5,
            friction: .05,
            maxShapes: 100,
            physicsFrameRate: 1,
            regroupForce: 1,
            autoResize: !0,
            cacheShapeDraw: !1,
            renderFrameSkip: !1,
            fixedDeltaTime: 1e3 / 60,
            preRender: !1,
            antialias: !0,
            bgcolor: "rgba(0, 0, 0, 0)",
            colorA: "#FF0000",
            colorB: "#34ACDB",
            colorC: "#FFFFFF"
        };
        i["default"] = n, t.exports = i["default"]
    }, {}],
    45: [function(e, t, i) {
        "use strict";

        function n(e, t, i) {
            return t > e ? t : e > i ? i : e
        }

        function o(e, t) {
            var i = t.x - e.x,
                n = t.y - e.y;
            return Math.sqrt(i * i + n * n)
        }

        function r(e) {
            return 0 > e ? -1 : e > 0 ? 1 : 0
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.clamp = n, i.distance = o, i.sign = r
    }, {}],
    46: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                i = t.exec(location.search);
            return null !== i && (i = decodeURIComponent(i[1].replace(/\+/g, " "))), i
        }

        function o(e) {
            for (var t in e) {
                var i = n(t);
                null !== i && (e[t] = i)
            }
        }

        function r() {
            document.body.addEvt || (document.body.addEvt = document.body.addEventListener, document.body.addEventListener = function(e, t, i) {
                e.match("mouse") || e.match("touch") || e.match("DOMMouse") || document.body.addEvt(e, t, i)
            })
        }

        function s() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        }

        function a() {
            return (new Date).getTime()
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.getParam = n, i.updateWithParams = o, i.bodyEventFix = r, i.isMobile = s, i.getTime = a
    }, {}],
    47: [function(e, t, i) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t["default"] = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var r = e("./fullbundle/Application.js"),
            s = o(r),
            a = e("./fullbundle/utils.js"),
            l = n(a),
            u = e("./fullbundle/config"),
            c = o(u);
        window.positionImpulse = null, l.updateWithParams(c["default"]), window.app = new s["default"], window.fbanim = window.app
    }, {
        "./fullbundle/Application.js": 41,
        "./fullbundle/config": 44,
        "./fullbundle/utils.js": 46
    }],
    48: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            r = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    n(this, e), this._ref = t, this._lastState = t, this._target = t, this._queue = [], this._length = 0, this._current = 0
                }
                return o(e, [{
                    key: "_getParams",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? this._target : arguments[0],
                            t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                            i = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                            n = {
                                tgt: e,
                                dur: t,
                                pos: 0,
                                ez: i,
                                fr: null,
                                to: null,
                                cb: null
                            };
                        return this._queue[this._length] = n, this._length += 1, n
                    }
                }, {
                    key: "_getProps",
                    value: function(e, t) {
                        var i = {};
                        for (var n in t) i[n] = void 0 !== e[n] ? e[n] : this._target[n];
                        return i
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return this._target = e, this._lastState = e, this
                    }
                }, {
                    key: "to",
                    value: function(e, t, i) {
                        var n = this._getParams(this._target, t, i);
                        return n.fr = this._getProps(this._lastState, e), n.to = e, this._lastState = e, this
                    }
                }, {
                    key: "from",
                    value: function(e, t, i) {
                        var n = this._getParams(this._target, t, i);
                        return n.fr = e, n.to = this._getProps(this._lastState, e), this
                    }
                }, {
                    key: "wait",
                    value: function(e) {
                        var t = this._getParams();
                        return t.dur = e, this
                    }
                }, {
                    key: "then",
                    value: function(e) {
                        var t = this._queue[this._length - 1];
                        return t ? t.cb = e : e(), this
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var t = this._queue[this._current];
                        if (!t) return !0;
                        var i = 1,
                            n = !1;
                        if (t.pos += e, t.dur > 0 && t.pos < t.dur && (i = t.ez ? t.ez(t.pos / t.dur) : t.pos / t.dur), t.to && t.tgt)
                            for (var o in t.to) {
                                var r = t.fr[o],
                                    s = t.to[o];
                                t.tgt[o] = r + (s - r) * i
                            }
                        return t.pos >= t.dur && (t.cb && t.cb(), this._current += 1, this._current >= this._length && (n = !0)), n
                    }
                }]), e
            }();
        i["default"] = r, t.exports = i["default"]
    }, {}],
    49: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("./Tween"),
            a = n(s),
            l = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    o(this, e), this.debug = !1, this.tweens = [], this._interval = null, this.setAutoUpdateRate(t)
                }
                return r(e, [{
                    key: "dispose",
                    value: function() {
                        clearInterval(this._interval), this._interval = null, this.tweens = null
                    }
                }, {
                    key: "setAutoUpdateRate",
                    value: function(e) {
                        clearInterval(this._interval), this._interval = null, e > 0 && (this._time = this.getTime(), this._interval = setInterval(this._autoUpdate.bind(this), 1e3 * e))
                    }
                }, {
                    key: "_autoUpdate",
                    value: function() {
                        var e = this.getTime(),
                            t = e - this._time;
                        this._time = e, this.update(t)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        var t = new a["default"](e);
                        return this.tweens.push(t), t
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        for (var t = this.tweens.length; t--;) {
                            var i = this.tweens[t];
                            i._ref === e && this.tweens.splice(t, 1)
                        }
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        for (var t = this.tweens.length; t--;) {
                            var i = this.tweens[t];
                            i.update(e) && this.tweens.splice(t, 1)
                        }
                    }
                }, {
                    key: "getTime",
                    value: function() {
                        return (new Date).getTime() / 1e3
                    }
                }]), e
            }();
        i["default"] = l, t.exports = i["default"]
    }, {
        "./Tween": 48
    }]
}, {}, [47]);;;
var Fullbundle = {},
    localStorageFallback = {},
    sessionStorageFallback = {};
(function(e, i, o, a, n, t) {
    'use strict';
    i.behaviors.fullbundle = {
        attach: function(i) {
            var r = e(window),
                l = e('#page-wrapper').data('smoothState'),
                u = ((typeof l.internal !== 'undefined' && l.internal) || document.referrer.match(/fullbundle\.com/i));
            e.fn.load = function(t) {
                e(window).on('load', t)
            };
            e(document).foundation();
            r.on('resize orientationchange', function() {
                t.screenSize()
            }).resize();
            if (window.location.hash) smoothScroll.animateScroll(null, window.location.hash, {
                easing: 'easeInOutQuad'
            });
            smoothScroll.init({
                updateURL: !1
            });
            if (!o.objectfit) {
                e('.node.node--type-project .screen-size .field--name-field-image').each(function() {
                    var t = e(this),
                        n = t.find('img'),
                        i = n.attr('src') || n.attr('srcset');
                    if (i) t.css('backgroundImage', 'url(' + i + ')')
                })
            };
            svg4everybody();
            e('[data-track]').once('track').each(function() {
                var n = e(this);
                n.on(n.attr('data-track'), function(e) {
                    t.sendGAEvent('Track', t.capitalize(e.type), n.text())
                })
            });
            e('#contact-message-contact-form').submit(function() {
                t.sendGAEvent('Form', 'Submit', 'Contact Form')
            });
            if (typeof n !== 'undefined') {
                var s = e('#creativitylogic');
                n.config.autoResize = !1;
                if (!(matchMedia(a.media_queries.medium).matches)) {
                    n.config.physicsFrameRate = 2;
                    n.config.maxShapes = 70;
                    n.config.regroupForce = 0;
                    n.config.renderFrameSkip = !1;
                    n.config.preRender = !0
                };
                if (e('#homeanimation').length > 0) n.init(e('#homeanimation')[0]);
                r.smartresize(function() {
                    if (e('#homeanimation').length > 0) n.resize(s.outerWidth(), s.outerHeight())
                });
                r.on('smoothStateStarted', function() {
                    if (e('#homeanimation').length > 0) n.destroy()
                })
            };
            var c = 0;
            r.smartscroll(function() {
                var n = e(this).scrollTop(),
                    i = (n <= c || n <= 250);
                e('body').toggleClass('scrolling-up', i);
                t.resetScollingTimeout(i);
                c = n
            });
            e('.page > header').on('click', function() {
                t.resetScollingTimeout(!1)
            });
            if (e('.projects').length > 0) {
                e('.projects').slick({
                    slide: 'article',
                    infinite: !1,
                    adaptiveHeight: !0,
                    prevArrow: e('.project-nav .previous a'),
                    nextArrow: e('.project-nav .next a')
                })
            };
            t.dynamicBlockquoteBrandline();
            r.smartresize(function() {
                t.dynamicBlockquoteBrandline()
            });
            e('[data-toggle-slides]').on('click', function(t) {
                e(this).parents('[data-slides]').children().toggleClass('active')
            });
            e('.readmore').on('click', function() {
                var t = e(this),
                    n = t.prev('.more');
                if (n.hasClass('show')) {
                    n.removeClass('show');
                    t.text('More...')
                } else {
                    n.addClass('show');
                    t.text('Less...')
                }
            })
        }
    };
    localStorageFallback = {};
    t.Local = (typeof(Storage) !== 'undefined') ? {
        get: function(e) {
            try {
                return localStorage.getItem(e)
            } catch (t) {}
        },
        set: function(e, t) {
            try {
                localStorage.setItem(e, t)
            } catch (n) {}
        },
        remove: function(e) {
            try {
                localStorage.removeItem(e)
            } catch (t) {}
        }
    } : {
        get: function(e) {
            return localStorageFallback[e]
        },
        set: function(e, t) {
            localStorageFallback[e] = t
        },
        remove: function(e) {
            delete localStorageFallback[e]
        }
    };
    sessionStorageFallback = {};
    t.Session = (typeof(Storage) !== 'undefined') ? {
        get: function(e) {
            try {
                return sessionStorage.getItem(e)
            } catch (t) {}
        },
        set: function(e, t) {
            try {
                sessionStorage.setItem(e, t)
            } catch (n) {}
        },
        remove: function(e) {
            try {
                sessionStorage.removeItem(e)
            } catch (t) {}
        }
    } : {
        get: function(e) {
            return sessionStorageFallback[e]
        },
        set: function(e, t) {
            sessionStorageFallback[e] = t
        },
        remove: function(e) {
            delete sessionStorageFallback[e]
        }
    };
    t.sendGAEvent = function(e, t, n) {
        if (typeof ga === 'function') {
            ga('send', {
                'hitType': 'event',
                'eventCategory': e,
                'eventAction': t,
                'eventLabel': n,
                'transport': 'beacon'
            });
            return !0
        } else {
            return !1
        }
    };
    t.renderedBlockquoteLineHeight = function() {
        var t = e('<blockquote>').css({
                width: '50px',
                position: 'absolute',
                left: '-2000px',
                padding: '0px',
                margin: '0px'
            }).html('A<br />B<br />C<br />D<br />E<br />').appendTo('body'),
            n = t.height() / 5;
        t.remove();
        return n
    };
    t.dynamicBlockquoteBrandline = function() {
        var t = this.renderedBlockquoteLineHeight();
        e('blockquote.line').each(function() {
            var n = e(this),
                i = n.clone();
            i.css({
                position: 'absolute',
                left: '-2000px',
                height: 'auto',
                padding: '0px',
                margin: '0px',
                width: n.width() + 'px'
            }).removeClass('line').insertAfter(n);
            e(this).attr('data-lines', Math.round(i.height() / t));
            i.remove()
        })
    };
    t.screenSize = function() {
        e('.screen-size').each(function() {
            var o = e(window),
                t = e(this),
                r = o.width() - parseInt(t.css('padding-left')) - parseInt(t.css('padding-right')),
                a = o.height() - parseInt(t.css('padding-top')) - parseInt(t.css('padding-bottom')),
                n = t.find('[data-minheight]'),
                c = n.outerHeight();
            if (n.attr('data-minheight') === '') {
                n.attr('data-minheight', c).css('height', '100%')
            };
            var i = n.attr('data-minheight');
            t.width(r).height((a < i) ? i : a);
            t.trigger('screenSizeComplete', [t.outerWidth(), t.outerHeight()])
        })
    };
    t.setScollingTimeout = function() {
        t.scollingTimeout = setTimeout(function() {
            if (e(window).scrollTop() > 0) e('body').removeClass('scrolling-up')
        }, 5000)
    };
    t.resetScollingTimeout = function(e) {
        if (t.scollingTimeout) clearTimeout(t.scollingTimeout);
        if (e) this.setScollingTimeout()
    };
    t.capitalize = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
    };
    t.inViewport = function(t) {
        var r = t.outerHeight(),
            n = e(window).height(),
            i = t[0].getBoundingClientRect(),
            o = i.top,
            a = i.bottom;
        return Math.max(0, o > 0 ? Math.min(r, n - o) : (a < n ? a : n))
    };
    var r = function(e, t, n) {
        var i;
        return function() {
            var a = this,
                o = arguments;

            function r() {
                if (!n) e.apply(a, o);
                i = null
            };
            if (i) clearTimeout(i);
            else if (n) e.apply(a, o);
            i = setTimeout(r, t || 50)
        }
    };
    jQuery.fn.smartresize = function(e) {
        return e ? this.bind('resize', r(e)) : this.trigger('smartresize')
    };
    jQuery.fn.smartscroll = function(e) {
        return e ? this.bind('scroll', r(e, 20)) : this.trigger('smartscroll')
    };
    e.extend(e.easing, {
        easeInOutCubic: function(e, t, n, i, o) {
            if ((t /= o / 2) < 1) return i / 2 * t * t * t + n;
            return i / 2 * ((t -= 2) * t * t + 2) + n
        }
    })
})(jQuery, Drupal, Modernizr, Foundation, fbanim, Fullbundle);;
(function(t, a, n, o) {
    'use strict';
    n.animation = n.animation || {};
    n.animation.counter = function(t) {
        t.prop('counter', 0).animate({
            counter: t.text()
        }, {
            duration: 2000,
            easing: 'easeInOutCubic',
            step: function(n) {
                t.text(Math.ceil(n))
            }
        })
    };
    a.behaviors.fullbundleanimation = {
        attach: function(a) {
            t('[data-count]', a).waypoint(function(a) {
                var o = t(this.element);
                if (a === 'down' && !o.prop('animated')) {
                    o.prop('animated', !0);
                    n.animation.counter(o)
                }
            }, {
                offset: '100%'
            });
            t('[data-waypoint]', a).addClass('out').waypoint(function(n) {
                var a = t(this.element);
                if (n === 'down' && !a.prop('animated')) {
                    a.prop('animated', !0).removeClass('out')
                }
            }, {
                offset: '40%'
            })
        }
    }
})(jQuery, Drupal, Fullbundle, skrollr);;
(function(t, i) {
    'use strict';
    i.behaviors.tweets_block = {
        attach: function(e, i) {
            var s = this;
            if (typeof i.fb_twitter === 'undefined') return;
            this.settings = i.fb_twitter.tweets_block;
            this.$block = t('#' + this.settings.block_id);
            if (this.$block.length < 1) return;
            this.$tweet_list = this.$block.find(this.settings.tweet_list);
            this.$tweets = this.$tweet_list.find(this.settings.tweet_selector);
            this.$vis_tweets = this.$tweets.slice(0, this.settings.tweet_visibility);
            this.init();
            t(window).on('resize', function() {
                s.init()
            });
            this.$tweets.css({
                'font-size': this.settings.minSize + 'em',
                'width': this.settings.minSize * 100 + '%'
            });
            this.$tweet_list.scroll(function() {
                s.$tweets.each(function() {
                    s.tweetSize(t(this))
                })
            }).scroll()
        },
        init: function() {
            this.$block.height(t('.page').height() - t('.page > header').height());
            this.list_height = this.$tweet_list.height();
            this.mid_point = this.list_height / 3
        },
        tweetSize: function(t) {
            var s = t.position(),
                n = (s.top >= this.mid_point) ? this.list_height : 0,
                i, e, h;
            i = this.percentBetween(s.top, this.mid_point, n);
            if (i > 100) i = 100;
            e = this.settings.maxSize - ((this.settings.maxSize - this.settings.minSize) / 100 * i);
            h = e * 100;
            t.css({
                'font-size': e + 'em',
                'width': h + '%'
            })
        },
        percentBetween: function(t, i, e) {
            return (t - i) / (e - i) * 100
        }
    }
})(jQuery, Drupal);;;
var disqus_config, reset_disqus;
(function(e) {
    e.behaviors.fb_disqus = {
        attach: function(n, e) {
            var s = function() {
                this.page.url = e.node.url;
                this.page.identifier = e.node.id;
                this.page.title = e.node.title
            };
            if (document.getElementById(e.disqus_id)) {
                var t = document,
                    i = t.createElement('script');
                i.src = '//fullbundle.disqus.com/embed.js';
                i.setAttribute('data-timestamp', +new Date());
                (t.head || t.body).appendChild(i)
            };
            var d = function() {
                if (typeof DISQUS !== 'undefined' && document.getElementById(e.disqus_id)) {
                    DISQUS.reset({
                        reload: !0,
                        config: s
                    })
                }
            };
            window.addEventListener('orientationchange', function() {
                d()
            }, !1)
        }
    }
})(Drupal);;
(function(e, n) {
    'use strict';
    n.behaviors.fb_helpcrunch = {
        attach: function(n, t) {
            e('body').once('helpcrunch').each(function() {
                (function(e, n) {
                    e.HelpCrunch = function() {
                        e.HelpCrunch.q.push(arguments)
                    };
                    e.HelpCrunch.q = [];

                    function t() {
                        var e = document.createElement('script');
                        e.async = 1;
                        e.type = 'text/javascript';
                        e.src = 'https://widget.helpcrunch.com/';
                        (n.body || n.head).appendChild(e)
                    };
                    if (e.attachEvent) {
                        e.attachEvent('onload', t)
                    } else {
                        e.addEventListener('load', t, !1)
                    }
                })(window, document);
                HelpCrunch('init', 'fullbundle', {
                    applicationId: 1728,
                    applicationSecret: '6ErQlpFks8fVQi37sH1HosOKrW2rzPrrJTNTvN3y6DPj6P5/TCGx+ndXxsD+VNtRepgb+/O7aTsAEIC7k5Q5bg=='
                })
            });
            HelpCrunch('onChatOpen', function() {
                Fullbundle.Session.set('userOpenedChat', !0)
            });
            HelpCrunch('onCustomerMessage', function() {
                Fullbundle.Local.set('userSentMessage', !0)
            });
            // HelpCrunch('showChatWidget');
            // if (window.ga) {
            //     HelpCrunch('onCustomerMessage', function() {
            //         Fullbundle.sendGAEvent('LiveChat', 'sendsMessage')
            //     });
            //     HelpCrunch('onChatOpen', function() {
            //         Fullbundle.sendGAEvent('LiveChat', 'opensChat')
            //     });
            //     HelpCrunch('onChatClose', function() {
            //         Fullbundle.sendGAEvent('LiveChat', 'closesChat')
            //     })
            // }
        }
    }
})(jQuery, Drupal);;
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
                var o = a.offset();
                i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
            } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function() {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function(e) {
                x.abort(e)
            }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), g = v[0], x = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(t) {
                    var r = "timeout" === t ? "timeout" : "aborted";
                    a("aborting upload... " + r), this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (n) {}
                    v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                }
            }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                _ = function(t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
            f.resetForm()
        }), t.clearForm && x.push(function() {
            f.clearForm(t.includeHidden)
        }), !t.dataType && t.target) {
            var y = t.success || function() {};
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
            for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
        }, t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
                    for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                        name: f,
                        value: m[l]
                    });
                else if (n.fileapi && "file" == d.type) {
                    r && r.push(d);
                    var v = d.files;
                    if (v.length)
                        for (l = 0; l < v.length; l++) a.push({
                            name: f,
                            value: v[l],
                            type: d.type
                        });
                    else a.push({
                        name: f,
                        value: "",
                        type: d.type
                    })
                } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
                    name: f,
                    value: m,
                    type: d.type,
                    required: d.required
                }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});;
(function(s, e) {
    e.theme.progressBar = function(s) {
        return '<div id="' + s + '" class="progress" aria-live="polite"><div class="progress__label">&nbsp;</div><div class="progress__track"><div class="progress__bar"></div></div><div class="progress__percentage"></div><div class="progress__description">&nbsp;</div></div>'
    };
    e.ProgressBar = function(r, i, t, a) {
        this.id = r;
        this.method = t || 'GET';
        this.updateCallback = i;
        this.errorCallback = a;
        this.element = s(e.theme('progressBar', r))
    };
    s.extend(e.ProgressBar.prototype, {
        setProgress: function(e, r, i) {
            if (e >= 0 && e <= 100) {
                s(this.element).find('div.progress__bar').css('width', e + '%');
                s(this.element).find('div.progress__percentage').html(e + '%')
            };
            s('div.progress__description', this.element).html(r);
            s('div.progress__label', this.element).html(i);
            if (this.updateCallback) {
                this.updateCallback(e, r, this)
            }
        },
        startMonitoring: function(s, e) {
            this.delay = e;
            this.uri = s;
            this.sendPing()
        },
        stopMonitoring: function() {
            clearTimeout(this.timer);
            this.uri = null
        },
        sendPing: function() {
            if (this.timer) {
                clearTimeout(this.timer)
            };
            if (this.uri) {
                var r = this,
                    i = this.uri;
                if (i.indexOf('?') === -1) {
                    i += '?'
                } else {
                    i += '&'
                };
                i += '_format=json';
                s.ajax({
                    type: this.method,
                    url: i,
                    data: '',
                    dataType: 'json',
                    success: function(s) {
                        if (s.status === 0) {
                            r.displayError(s.data);
                            return
                        };
                        r.setProgress(s.percentage, s.message, s.label);
                        r.timer = setTimeout(function() {
                            r.sendPing()
                        }, r.delay)
                    },
                    error: function(s) {
                        var i = new e.AjaxError(s, r.uri);
                        r.displayError('<pre>' + i.message + '</pre>')
                    }
                })
            }
        },
        displayError: function(e) {
            var r = s('<div class="messages messages--error"></div>').html(e);
            s(this.element).before(r).hide();
            if (this.errorCallback) {
                this.errorCallback(this)
            }
        }
    })
})(jQuery, Drupal);;
(function(i) {
    i.behaviors.responsiveImageAJAX = {
        attach: function() {
            if (window.picturefill) {
                window.picturefill()
            }
        }
    }
})(Drupal);;;

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t]
        };
        return r
    } else {
        return Array.from(e)
    }
}(function(e, r, t, s) {
    t.behaviors.AJAX = {
        attach: function(r, s) {
            function a(r) {
                var a = s.ajax[r];
                if (typeof a.selector === 'undefined') {
                    a.selector = '#' + r
                };
                e(a.selector).once('drupal-ajax').each(function() {
                    a.element = this;
                    a.base = r;
                    t.ajax(a)
                })
            };
            Object.keys(s.ajax || {}).forEach(function(e) {
                return a(e)
            });
            t.ajax.bindAjaxLinks(document.body);
            e('.use-ajax-submit').once('ajax').each(function() {
                var r = {};
                r.url = e(this.form).attr('action');
                r.setClick = !0;
                r.event = 'click';
                r.progress = {
                    type: 'throbber'
                };
                r.base = e(this).attr('id');
                r.element = this;
                t.ajax(r)
            })
        },
        detach: function(e, r, s) {
            if (s === 'unload') {
                t.ajax.expired().forEach(function(e) {
                    t.ajax.instances[e.instanceIndex] = null
                })
            }
        }
    };
    t.AjaxError = function(r, s, a) {
        var i = void 0,
            n = void 0,
            o = void 0;
        if (r.status) {
            i = '\n' + t.t('An AJAX HTTP error occurred.') + '\n' + t.t('HTTP Result Code: !status', {
                '!status': r.status
            })
        } else {
            i = '\n' + t.t('An AJAX HTTP request terminated abnormally.')
        };
        i += '\n' + t.t('Debugging information follows.');
        var f = '\n' + t.t('Path: !uri', {
            '!uri': s
        });
        n = '';
        try {
            n = '\n' + t.t('StatusText: !statusText', {
                '!statusText': e.trim(r.statusText)
            })
        } catch (l) {};
        o = '';
        try {
            o = '\n' + t.t('ResponseText: !responseText', {
                '!responseText': e.trim(r.responseText)
            })
        } catch (l) {};
        o = o.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
        o = o.replace(/[\n]+\s+/g, '\n');
        var c = r.status === 0 ? '\n' + t.t('ReadyState: !readyState', {
            '!readyState': r.readyState
        }) : '';
        a = a ? '\n' + t.t('CustomMessage: !customMessage', {
            '!customMessage': a
        }) : '';
        this.message = i + f + n + a + o + c;
        this.name = 'AjaxError'
    };
    t.AjaxError.prototype = new Error();
    t.AjaxError.prototype.constructor = t.AjaxError;
    t.ajax = function(e) {
        if (arguments.length !== 1) {
            throw new Error('Drupal.ajax() function must be called with one configuration object only')
        };
        var a = e.base || !1,
            s = e.element || !1;
        delete e.base;
        delete e.element;
        if (!e.progress && !s) {
            e.progress = !1
        };
        var r = new t.Ajax(a, s, e);
        r.instanceIndex = t.ajax.instances.length;
        t.ajax.instances.push(r);
        return r
    };
    t.ajax.instances = [];
    t.ajax.expired = function() {
        return t.ajax.instances.filter(function(e) {
            return e && e.element !== !1 && !document.body.contains(e.element)
        })
    };
    t.ajax.bindAjaxLinks = function(r) {
        e(r).find('.use-ajax').once('ajax').each(function(r, s) {
            var a = e(s),
                o = {
                    progress: {
                        type: 'throbber'
                    },
                    dialogType: a.data('dialog-type'),
                    dialog: a.data('dialog-options'),
                    dialogRenderer: a.data('dialog-renderer'),
                    base: a.attr('id'),
                    element: s
                };
            var i = a.attr('href');
            if (i) {
                o.url = i;
                o.event = 'click'
            };
            t.ajax(o)
        })
    };
    t.Ajax = function(r, a, o) {
        var f = {
            event: a ? 'mousedown' : null,
            keypress: !0,
            selector: r ? '#' + r : null,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: t.t('Please wait...')
            },
            submit: {
                js: !0
            }
        };
        e.extend(this, f, o);
        this.commands = new t.AjaxCommands();
        this.instanceIndex = !1;
        if (this.wrapper) {
            this.wrapper = '#' + this.wrapper
        };
        this.element = a;
        this.element_settings = o;
        this.elementSettings = o;
        if (this.element && this.element.form) {
            this.$form = e(this.element.form)
        };
        if (!this.url) {
            var l = e(this.element);
            if (l.is('a')) {
                this.url = l.attr('href')
            } else if (this.element && a.form) {
                this.url = this.$form.attr('action')
            }
        };
        var c = this.url;
        this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');
        if (s.ajaxTrustedUrl[c]) {
            s.ajaxTrustedUrl[this.url] = !0
        };
        var i = this;
        i.options = {
            url: i.url,
            data: i.submit,
            beforeSerialize: function(e, t) {
                return i.beforeSerialize(e, t)
            },
            beforeSubmit: function(e, t, r) {
                i.ajaxing = !0;
                return i.beforeSubmit(e, t, r)
            },
            beforeSend: function(e, t) {
                i.ajaxing = !0;
                return i.beforeSend(e, t)
            },
            success: function(r, a, o) {
                if (typeof r === 'string') {
                    r = e.parseJSON(r)
                };
                if (r !== null && !s.ajaxTrustedUrl[i.url]) {
                    if (o.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        var n = t.t('The response failed verification so will not be processed.');
                        return i.error(o, i.url, n)
                    }
                };
                return i.success(r, a)
            },
            complete: function(e, t) {
                i.ajaxing = !1;
                if (t === 'error' || t === 'parsererror') {
                    return i.error(e, i.url)
                }
            },
            dataType: 'json',
            type: 'POST'
        };
        if (o.dialog) {
            i.options.data.dialogOptions = o.dialog
        };
        if (i.options.url.indexOf('?') === -1) {
            i.options.url += '?'
        } else {
            i.options.url += '&'
        };
        var n = 'drupal_' + (o.dialogType || 'ajax');
        if (o.dialogRenderer) {
            n += '.' + o.dialogRenderer
        };
        i.options.url += t.ajax.WRAPPER_FORMAT + '=' + n;
        e(i.element).on(o.event, function(e) {
            if (!s.ajaxTrustedUrl[i.url] && !t.url.isLocal(i.url)) {
                throw new Error(t.t('The callback URL is not local and not trusted: !url', {
                    '!url': i.url
                }))
            };
            return i.eventResponse(this, e)
        });
        if (o.keypress) {
            e(i.element).on('keypress', function(e) {
                return i.keypressResponse(this, e)
            })
        };
        if (o.prevent) {
            e(i.element).on(o.prevent, !1)
        }
    };
    t.ajax.WRAPPER_FORMAT = '_wrapper_format';
    t.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
    t.Ajax.prototype.execute = function() {
        if (this.ajaxing) {
            return
        };
        try {
            this.beforeSerialize(this.element, this.options);
            return e.ajax(this.options)
        } catch (t) {
            this.ajaxing = !1;
            r.alert('An error occurred while attempting to process ' + this.options.url + ': ' + t.message);
            return e.Deferred().reject()
        }
    };
    t.Ajax.prototype.keypressResponse = function(t, r) {
        var s = this;
        if (r.which === 13 || r.which === 32 && t.type !== 'text' && t.type !== 'textarea' && t.type !== 'tel' && t.type !== 'number') {
            r.preventDefault();
            r.stopPropagation();
            e(t).trigger(s.elementSettings.event)
        }
    };
    t.Ajax.prototype.eventResponse = function(t, s) {
        s.preventDefault();
        s.stopPropagation();
        var a = this;
        if (a.ajaxing) {
            return
        };
        try {
            if (a.$form) {
                if (a.setClick) {
                    t.form.clk = t
                };
                a.$form.ajaxSubmit(a.options)
            } else {
                a.beforeSerialize(a.element, a.options);
                e.ajax(a.options)
            }
        } catch (o) {
            a.ajaxing = !1;
            r.alert('An error occurred while attempting to process ' + a.options.url + ': ' + o.message)
        }
    };
    t.Ajax.prototype.beforeSerialize = function(e, r) {
        if (this.$form) {
            var o = this.settings || s;
            t.detachBehaviors(this.$form.get(0), o, 'serialize')
        };
        r.data[t.Ajax.AJAX_REQUEST_PARAMETER] = 1;
        var a = s.ajaxPageState;
        r.data['ajax_page_state[theme]'] = a.theme;
        r.data['ajax_page_state[theme_token]'] = a.theme_token;
        r.data['ajax_page_state[libraries]'] = a.libraries
    };
    t.Ajax.prototype.beforeSubmit = function(e, t, r) {};
    t.Ajax.prototype.beforeSend = function(t, r) {
        if (this.$form) {
            r.extraData = r.extraData || {};
            r.extraData.ajax_iframe_upload = '1';
            var a = e.fieldValue(this.element);
            if (a !== null) {
                r.extraData[this.element.name] = a
            }
        };
        e(this.element).prop('disabled', !0);
        if (!this.progress || !this.progress.type) {
            return
        };
        var s = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
        if (s in this && typeof this[s] === 'function') {
            this[s].call(this)
        }
    };
    t.Ajax.prototype.setProgressIndicatorBar = function() {
        var r = new t.ProgressBar('ajax-progress-' + this.element.id, e.noop, this.progress.method, e.noop);
        if (this.progress.message) {
            r.setProgress(-1, this.progress.message)
        };
        if (this.progress.url) {
            r.startMonitoring(this.progress.url, this.progress.interval || 1500)
        };
        this.progress.element = e(r.element).addClass('ajax-progress ajax-progress-bar');
        this.progress.object = r;
        e(this.element).after(this.progress.element)
    };
    t.Ajax.prototype.setProgressIndicatorThrobber = function() {
        this.progress.element = e('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
        if (this.progress.message) {
            this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>')
        };
        e(this.element).after(this.progress.element)
    };
    t.Ajax.prototype.setProgressIndicatorFullscreen = function() {
        this.progress.element = e('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
        e('body').after(this.progress.element)
    };
    t.Ajax.prototype.success = function(r, a) {
        var n = this;
        if (this.progress.element) {
            e(this.progress.element).remove()
        };
        if (this.progress.object) {
            this.progress.object.stopMonitoring()
        };
        e(this.element).prop('disabled', !1);
        var l = e(this.element).parents('[data-drupal-selector]').addBack().toArray(),
            c = !1;
        Object.keys(r || {}).forEach(function(e) {
            if (r[e].command && n.commands[r[e].command]) {
                n.commands[r[e].command](n, r[e], a);
                if (r[e].command === 'invoke' && r[e].method === 'focus') {
                    c = !0
                }
            }
        });
        if (!c && this.element && !e(this.element).data('disable-refocus')) {
            var o = !1;
            for (var i = l.length - 1; !o && i > 0; i--) {
                o = document.querySelector('[data-drupal-selector="' + l[i].getAttribute('data-drupal-selector') + '"]')
            };
            if (o) {
                e(o).trigger('focus')
            }
        };
        if (this.$form) {
            var f = this.settings || s;
            t.attachBehaviors(this.$form.get(0), f)
        };
        this.settings = null
    };
    t.Ajax.prototype.getEffect = function(e) {
        var r = e.effect || this.effect,
            s = e.speed || this.speed,
            t = {};
        if (r === 'none') {
            t.showEffect = 'show';
            t.hideEffect = 'hide';
            t.showSpeed = ''
        } else if (r === 'fade') {
            t.showEffect = 'fadeIn';
            t.hideEffect = 'fadeOut';
            t.showSpeed = s
        } else {
            t.showEffect = r + 'Toggle';
            t.hideEffect = r + 'Toggle';
            t.showSpeed = s
        };
        return t
    };
    t.Ajax.prototype.error = function(r, a, o) {
        if (this.progress.element) {
            e(this.progress.element).remove()
        };
        if (this.progress.object) {
            this.progress.object.stopMonitoring()
        };
        e(this.wrapper).show();
        e(this.element).prop('disabled', !1);
        if (this.$form) {
            var i = this.settings || s;
            t.attachBehaviors(this.$form.get(0), i)
        };
        throw new t.AjaxError(r, a, o)
    };
    t.AjaxCommands = function() {};
    t.AjaxCommands.prototype = {
        insert: function(r, a, o) {
            var c = a.selector ? e(a.selector) : e(r.wrapper),
                f = a.method || r.method,
                n = r.getEffect(a),
                l = void 0,
                d = e('<div></div>').html(a.data),
                i = d.contents();
            if (i.length !== 1 || i.get(0).nodeType !== 1) {
                i = d
            };
            switch (f) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    l = a.settings || r.settings || s;
                    t.detachBehaviors(c.get(0), l)
            };
            c[f](i);
            if (n.showEffect !== 'show') {
                i.hide()
            };
            if (i.find('.ajax-new-content').length > 0) {
                i.find('.ajax-new-content').hide();
                i.show();
                i.find('.ajax-new-content')[n.showEffect](n.showSpeed)
            } else if (n.showEffect !== 'show') {
                i[n.showEffect](n.showSpeed)
            };
            if (i.parents('html').length > 0) {
                l = a.settings || r.settings || s;
                t.attachBehaviors(i.get(0), l)
            }
        },
        remove: function(r, a, o) {
            var i = a.settings || r.settings || s;
            e(a.selector).each(function() {
                t.detachBehaviors(this, i)
            }).remove()
        },
        changed: function(r, s, a) {
            var o = e(s.selector);
            if (!o.hasClass('ajax-changed')) {
                o.addClass('ajax-changed');
                if (s.asterisk) {
                    o.find(s.asterisk).append(' <abbr class="ajax-changed" title="' + t.t('Changed') + '">*</abbr> ')
                }
            }
        },
        alert: function(e, t, s) {
            r.alert(t.text, t.title)
        },
        redirect: function(e, t, s) {
            r.location = t.url
        },
        css: function(t, r, s) {
            e(r.selector).css(r.argument)
        },
        settings: function(r, a, o) {
            var i = s.ajax;
            if (i) {
                t.ajax.expired().forEach(function(e) {
                    if (e.selector) {
                        var t = e.selector.replace('#', '');
                        if (t in i) {
                            delete i[t]
                        }
                    }
                })
            };
            if (a.merge) {
                e.extend(!0, s, a.settings)
            } else {
                r.settings = a.settings
            }
        },
        data: function(t, r, s) {
            e(r.selector).data(r.name, r.value)
        },
        invoke: function(t, r, s) {
            var a = e(r.selector);
            a[r.method].apply(a, _toConsumableArray(r.args))
        },
        restripe: function(t, r, s) {
            e(r.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even')
        },
        update_build_id: function(t, r, s) {
            e('input[name="form_build_id"][value="' + r.old + '"]').val(r.new)
        },
        add_css: function(t, r, s) {
            e('head').prepend(r.data);
            var a = void 0,
                o = /^@import url\("(.*)"\);$/igm;
            if (document.styleSheets[0].addImport && o.test(r.data)) {
                o.lastIndex = 0;
                do {
                    a = o.exec(r.data);
                    document.styleSheets[0].addImport(a[1])
                }
                while (a);
            }
        }
    }
})(jQuery, window, Drupal, drupalSettings);;
(function(e, t, n) {
    t.Views = {};
    t.Views.parseQueryString = function(t) {
        var s = {};
        var i = t.indexOf('?');
        if (i !== -1) {
            t = t.substring(i + 1)
        };
        var e = void 0,
            r = t.split('&');
        for (var n = 0; n < r.length; n++) {
            e = r[n].split('=');
            if (e[0] !== 'q' && e[1]) {
                s[decodeURIComponent(e[0].replace(/\+/g, ' '))] = decodeURIComponent(e[1].replace(/\+/g, ' '))
            }
        };
        return s
    };
    t.Views.parseViewArgs = function(e, g) {
        var s = {};
        var r = t.Views.getPath(e),
            i = t.url(g).substring(n.path.baseUrl.length);
        if (i && r.substring(0, i.length + 1) === i + '/') {
            s.view_args = decodeURIComponent(r.substring(i.length + 1, r.length));
            s.view_path = r
        };
        return s
    };
    t.Views.pathPortion = function(t) {
        var e = window.location.protocol;
        if (t.substring(0, e.length) === e) {
            t = t.substring(t.indexOf('/', e.length + 2))
        };
        return t
    };
    t.Views.getPath = function(e) {
        e = t.Views.pathPortion(e);
        e = e.substring(n.path.baseUrl.length, e.length);
        if (e.substring(0, 3) === '?q=') {
            e = e.substring(3, e.length)
        };
        var i = ['#', '?', '&'];
        for (var r = 0; r < i.length; r++) {
            if (e.indexOf(i[r]) > -1) {
                e = e.substr(0, e.indexOf(i[r]))
            }
        };
        return e
    }
})(jQuery, Drupal, drupalSettings);;
(function(e, t, i) {
    t.behaviors.ViewsAjaxView = {};
    t.behaviors.ViewsAjaxView.attach = function() {
        if (i && i.views && i.views.ajaxViews) {
            var e = i.views.ajaxViews;
            Object.keys(e || {}).forEach(function(i) {
                t.views.instances[i] = new t.views.ajaxView(e[i])
            })
        }
    };
    t.views = {};
    t.views.instances = {};
    t.views.ajaxView = function(s) {
        var o = '.js-view-dom-id-' + s.view_dom_id;
        this.$view = e(o);
        var r = i.views.ajax_path;
        if (r.constructor.toString().indexOf('Array') !== -1) {
            r = r[0]
        };
        var a = window.location.search || '';
        if (a !== '') {
            a = a.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
            if (a !== '') {
                a = (/\?/.test(r) ? '&' : '?') + a
            }
        };
        this.element_settings = {
            url: r + a,
            submit: s,
            setClick: !0,
            event: 'click',
            selector: o,
            progress: {
                type: 'fullscreen'
            }
        };
        this.settings = s;
        this.$exposed_form = e('form#views-exposed-form-' + s.view_name.replace(/_/g, '-') + '-' + s.view_display_id.replace(/_/g, '-'));
        this.$exposed_form.once('exposed-form').each(e.proxy(this.attachExposedFormAjax, this));
        this.$view.filter(e.proxy(this.filterNestedViews, this)).once('ajax-pager').each(e.proxy(this.attachPagerAjax, this));
        var n = e.extend({}, this.element_settings, {
            event: 'RefreshView',
            base: this.selector,
            element: this.$view.get(0)
        });
        this.refreshViewAjax = t.ajax(n)
    };
    t.views.ajaxView.prototype.attachExposedFormAjax = function() {
        var i = this;
        this.exposedFormAjax = [];
        e('input[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function(s) {
            var a = e.extend({}, i.element_settings, {
                base: e(this).attr('id'),
                element: this
            });
            i.exposedFormAjax[s] = t.ajax(a)
        })
    };
    t.views.ajaxView.prototype.filterNestedViews = function() {
        return !this.$view.parents('.view').length
    };
    t.views.ajaxView.prototype.attachPagerAjax = function() {
        this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each(e.proxy(this.attachPagerLinkAjax, this))
    };
    t.views.ajaxView.prototype.attachPagerLinkAjax = function(i, s) {
        var n = e(s),
            r = {};
        var a = n.attr('href');
        e.extend(r, this.settings, t.Views.parseQueryString(a), t.Views.parseViewArgs(a, this.settings.view_base_path));
        var o = e.extend({}, this.element_settings, {
            submit: r,
            base: !1,
            element: s
        });
        this.pagerAjax = t.ajax(o)
    };
    t.AjaxCommands.prototype.viewsScrollTop = function(i, s) {
        var a = e(s.selector).offset(),
            t = s.selector;
        while (e(t).scrollTop() === 0 && e(t).parent()) {
            t = e(t).parent()
        };
        if (a.top - 10 < e(t).scrollTop()) {
            e(t).animate({
                scrollTop: a.top - 10
            }, 500)
        }
    }
})(jQuery, Drupal, drupalSettings);;
window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var e = window.styleMedia || window.media;
    if (!e) {
        var t = document.createElement("style"),
            i = document.getElementsByTagName("script")[0],
            n = null;
        t.type = "text/css";
        t.id = "matchmediajs-test";
        i.parentNode.insertBefore(t, i);
        n = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle;
        e = {
            matchMedium: function(e) {
                var i = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                if (t.styleSheet) {
                    t.styleSheet.cssText = i
                } else {
                    t.textContent = i
                }
                return n.width === "1px"
            }
        }
    }
    return function(t) {
        return {
            matches: e.matchMedium(t || "all"),
            media: t || "all"
        }
    }
}());;