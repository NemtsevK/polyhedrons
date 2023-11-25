"use strict";
var _b, _c, _m;

function _n() {
  var r, n, e, t, a, l, f, o = [131072, 512, 2, 131584, 131330, 514, 131328, 65794, 513, 66048, 256, 1, 257, 258, 65536, 65537, 65538, 65792, 131329, 66049, 66050, 131073, 131074, 131585];
  if (null == _b) {
    for (_c = Array(32), a = _b = Array(32), n = 32; 0 <= --n;) _c[n] = Array(192), a[n] = Array(192);
    for (r = 192; 0 <= --r;) {
      for (t = r + 64, n = 24; 0 <= --n;) e = o[n], a[n][r] = "rgb(" + ((e = e * (t >> 1) + (e >> 1 & 65793) * (1 & t)) >> 16) + "," + (e >> 8 & 255) + "," + (255 & e) + ")";
      for (n = 9; 0 < --n;) a[n + 23][r] = "rgb(" + (e = t * n >> 3) + "," + e + "," + e + ")";
      for (n = 32; 0 <= --n;) _c[n][r] = "rgba" + a[n][r].slice(3, -1) + ",.125)"
    }
  }
  for (l = document.getElementsByTagName("div"), _m = [], r = -1; ++r < l.length;) "miniViewer" == l[r].getAttribute("name") && (f = l[r].getElementsByTagName("canvas")).length && _o(l[r], f[0])
}

function _o(r, n) {
  function e(r, n, e, t, a, l, f, o, h, g, i) {
    for (var y, A, u, w, s, I = r.length; 0 <= --I;) (y = n[(s = r[I]) >> 7])[384 + (s &= 127)] = l * (A = y[s] - e) + f * (u = y[128 + s] - t) + o * (w = y[256 + s] - a), y[512 + s] = h * A + g * u + i * w
  }

  function t(r, n, e) {
    r - Gr < n[e] && (n[e] = r - Gr), r + Gr > n[++e] && (n[e] = r + Gr)
  }

  function a(r, n, e) {
    var a, l, f = r.length;
    for (e[1] = e[3] = e[5] = -(e[0] = e[2] = e[4] = Number.MAX_VALUE); 0 <= --f;) t((a = n[(l = r[f]) >> 7])[l &= 127], e, 0), t(a[128 + l], e, 2), t(a[256 + l], e, 4)
  }

  function l(r, n, e) {
    for (var t, a = r[n]; (t = 2 * n + 1) < e && (t < e - 1 && r[t] < r[t + 1] && t++, !(a >= r[t])); r[n] = r[t], n = t) ;
    r[n] = a
  }

  function f(r, n) {
    for (var e, t = (n >> 1) - 1; 0 <= t; t--) l(r, t, n);
    for (t = n - 1; 0 < t; t--) e = r[t], r[t] = r[0], r[0] = e, l(r, 0, t)
  }

  function o(r, n, e, t) {
    var a, l, o, h, g, i, y;
    for (f(r, e), f(n, t), a = l = o = h = g = 0; ;) if ((i = r[o]) < (y = n[h])) {
      if (2 == (g ^= 1) && (l += i - a), a = i, ++o >= e) return l
    } else if (1 == (g ^= 2) && (l += y - a), a = y, ++h >= t) return l
  }

  function h(r, n, e, t, a, l, f, o, h, g, i, y) {
    for (var A, u, w, I, b, v, M, m, F, k, d, E, _, T, C, L, B, S, U, X, V, P, q, x, R, Y, D, G, W, O, Q, j, z, H, J, K, Z = 3019169939857233e154, $ = g.length; 0 <= --$;) g[$] = 0;
    for (W = Array($ = r), T = l[0], C = l[1], L = l[2]; 0 <= --$;) for (W[$] = Q = new Int32Array(U = (O = e[$ >> 9][511 & $]).length), I = (B = t[(D = O[0]) >> 7])[X = 127 & D], b = B[X + 128], v = B[X + 256]; 0 <= --U; D = Y, I = M, b = m, v = F) {
      0 == (_ = N(A = I - (M = (B = t[(Y = O[U]) >> 7])[X = 127 & Y]), u = b - (m = B[X + 128]), w = v - (F = B[X + 256]))) && 0 == (_ = N(A *= Z, u *= Z, w *= Z)) || (A /= _ = w < 0 ? -_ : _, u /= _, w /= _), (Q[U] = R = p(A, u, w, M, m, F, a, l, f, o, n)) == n && n++, E = L[R];
      r:for (S = Y, P = D, j = h[R], _ = 0 == (z = (k = Math.abs(T[R])) > (d = Math.abs(C[R])) ? E < k ? 0 : 256 : E < d ? 128 : 256) ? M : 128 == z ? m : F, H = 0 == z ? I : 128 == z ? b : v; 0 <= S; S = P, P = -1, _ = H) {
        for (J = 0, V = X = g[R]; (x = J + V >> 1) < V;) {
          if ((q = j[x]) == S) continue r;
          _ < t[q >> 7][(127 & q) + z] ? V = x : J = x + 1
        }
        g[R]++ == (K = j).length && s(j, 0, h[R] = j = new Int32Array(j.length + 4), 0, x), s(K, x, j, x + 1, X - x), j[x] = S
      }
    }
    for ($ = r, G = new Int32Array(11); 0 <= --$;) {
      for (U = V = 0, O = e[$ >> 9][511 & $], Q = W[$]; U < O.length;) {
        for (X = g[R = Q[U]], j = h[R], Y = O[U], D = O[++U % O.length], S = -1; (R = j[--X]) != Y;) R == D && (S = 1);
        for (; (Y = j[X]) != D; X += S) G = c(G, V++, Y, 8), null != y && y[Y]++
      }
      if (null != (O = null == i ? V == O.length ? null : e[$ >> 9][511 & $] = new Int32Array(V) : i[$] = new Int32Array(3 * V)) && s(G, 0, O, 0, V), null != i) for (U = V << 1; --U >= V;) O[U] = -1
    }
    return n
  }

  function g(r, n, e, t, a, l, f, o, h) {
    var g, i, y, A, u, w, s, I;
    return Math.hypot(r - e, n - t) <= Gr ? Math.abs((u = (g = h[(s = o[(l + 2) % o.length]) >> 7])[384 + (s &= 127)] - (y = (i = h[(I = f[(a + f.length - 1) % f.length]) >> 7])[384 + (I &= 127)])) * ((A = i[512 + I]) - .5 * (n + t)) - (w = g[512 + s] - A) * (y - .5 * (r + e))) < 5820766091346741e-26 * (u * u + w * w) ? 2 : 1 : 0
  }

  function i(r, n, e, t, a, l) {
    var f, o, h, g, i, y, A, u = 5820766091346741e-26;
    return (A = Math.hypot(f = r - e, o = n - t)) <= Gr ? 0 : Math.hypot(h = a - r, g = l - n) <= Gr ? 1 : Math.abs(f * (y = l - t) - o * (i = a - e)) < (f * i + o * y) * u && Math.abs(h * y - g * i) < (h * i + g * y) * u ? A / Math.hypot(i, y) : -1
  }

  function y(r, n, e, t, a) {
    var l, f;
    return (r[t] - (l = r[e])) * (n[a] - (f = n[e])) - (r[a] - l) * (n[t] - f)
  }

  function A(r, n, e, t, a, l) {
    for (var f, o, h = 0, g = r[e], i = n[e]; --t >= e;) f = r[t], o = n[t], i <= l ? l < o && (a - g) * (o - i) < (f - g) * (l - i) && h++ : o <= l && (f - g) * (l - i) < (a - g) * (o - i) && h--, g = f, i = o;
    return h
  }

  function u(r, n, e, t, a, l, f) {
    var o, h, g;
    if (l != t && l != a) {
      for (o = h = r[t] - 1; 0 <= o && e[o] > f; o--) ;
      if ((o < 0 || n[o] != l) && (o == h || n[o + 1] != l)) {
        for (o++, g = r[t]++; (h = g) > o;) n[h] = n[g = h - 1], e[h] = e[g];
        n[o] = l, e[o] = f
      }
    }
  }

  function w(r, n, e, t, a) {
    var l, f = t + a;
    if ((l = n - t) < 0) for (; --f >= t;) e[f] = r[f + l]; else for (; t < f; t++) e[t] = r[t + l]
  }

  function s(r, n, e, t, a) {
    var l, f = t + a;
    if ((l = n - t) < 0) for (; --f >= t;) e[f] = r[f + l]; else for (; t < f; t++) e[t] = r[t + l]
  }

  function I(r, n, e, t, a) {
    var l, f = t + a;
    if ((l = n - t) < 0) for (; --f >= t;) e[f] = r[f + l]; else for (; t < f; t++) e[t] = r[t + l]
  }

  function c(r, n, e, t) {
    var a;
    return n >= r.length && (s(r, 0, a = new Int32Array(r.length + t), 0, r.length), r = a), r[n] = e, r
  }

  function b(r, n) {
    return r[r.length] = n, r
  }

  function v(r, n, e) {
    for (var t, a, l, f, o = r.length, h = n[0], g = n[1], i = n[2], y = n[3], A = 0; 0 <= --o;) if ((l = Math.abs(a = (t = e[(f = r[o]) >> 7])[f &= 127] * h + t[f + 128] * g + t[f + 256] * i + y)) > Gr) {
      if (A == (f = 3 + l / a >> 1)) return 3;
      A = 3 - f
    }
    return A
  }

  function M(r, n, e) {
    for (var t, a = t = r.length - 1; 0 <= a && r[a] != n; a--) ;
    return 0 <= a && (r[(a + 1) % r.length] == e || r[(a + t) % r.length] == e) ? -1 : -2
  }

  function m(r, n, e, t, a, l, f) {
    for (var o, h, g, i, y, A, u, w, s, I, c, b, v, m, F, k, p, d, E, N, _, T, C, L, B, S, U, X, V, P, q = 0, x = a[0], R = a[1], Y = a[2], D = l[0], G = l[1], W = l[2], O = l[3], Q = -1; ++Q < e.length;) if (Math.abs(p = (y = (o = f[(S = e[Q]) >> 7])[V = 127 & S]) * D + (A = o[V + 128]) * G + (u = o[V + 256]) * W + O) > Gr) {
      q = p / Math.abs(p);
      break
    }
    if (0 == q) return 0;
    for (P = Q++ + e.length, E = C = L = X = 0; ; Q++) {
      if (d = (w = (o = f[(U = e[Q % e.length]) >> 7])[V = 127 & U]) * D + (s = o[V + 128]) * G + (I = o[V + 256]) * W + O, _ = Math.abs(d) > Gr ? d / Math.abs(d) : 0, 0 == E) 0 == _ ? E = 1 : _ != q && (p /= p - d, r[C++] = n < 0 ? y + p * (w - y) : 0 == n ? A + p * (s - A) : u + p * (I - u), L = 2147483648); else if (1 == E) 0 == _ ? ((X = M(t, S, U)) == (2 == (E = ((b = A - g) * (k = I - u) - (F = s - A) * (v = u - i)) * x + (v * (m = w - y) - k * (c = y - h)) * R + (c * F - m * b) * Y < 0 ? 3 : 2) ? -2 : -1) && (r[C++] = n < 0 ? y : 0 == n ? A : u), T = N) : (_ != N && (r[C++] = n < 0 ? y : 0 == n ? A : u, L = 2147483648), E = 0); else {
        if (0 == _) {
          X = S, S = U, y = w, A = s, u = I;
          continue
        }
        0 <= X && (X = M(t, X, S)), L |= (B = _ == T ? 0 : 1) << 31, 0 == (X + E + B & 1) && (r[C++] = n < 0 ? y : 0 == n ? A : u), E = 0
      }
      if (P <= Q) return L | C;
      h = y, g = A, i = u, N = q, S = U, y = w, A = s, u = I, p = d, q = _
    }
  }

  function F(r, n, e, t, a, l, f, o, h, g, i, y, A) {
    for (var u, w, I, c, b, v, M, m, F, p, d, E, N, _, T, C, L, B, S, U, X, V, P, q, x, R, Y, D, G, W, O, Q, j, z, H, J, K, Z, rr, nr, er, tr, ar, lr, fr, or, hr, gr, ir, yr, Ar, ur, wr, sr, Ir, cr, br, vr, Mr = e[ir = r >> 9][yr = 511 & r], mr = (br = jr[Fn[vr = (sr = a[0])[ir][yr]]])[0] * (Lr = t[ir][yr]), Fr = br[1] * Lr, kr = br[2] * Lr, pr = n[0], dr = n[1], Er = n[2], Nr = n[3], _r = f[0], Tr = f[1], Cr = f[2], Lr = 0; ; Lr++) if (Math.abs(Q = (b = (u = A[(tr = Mr[Lr]) >> 7])[hr = 127 & tr]) * pr + (v = u[hr + 128]) * dr + (M = u[hr + 256]) * Er + Nr) > Gr) {
      Z = Q / Math.abs(Q);
      break
    }
    for (Ar = Lr++ + Mr.length, z = !1, ur = wr = l[er = J = or = 0]; ; Lr++) {
      if (j = (m = (u = A[(ar = Mr[Lr % Mr.length]) >> 7])[hr = 127 & ar]) * pr + (F = u[hr + 128]) * dr + (p = u[hr + 256]) * Er + Nr, 0 == (rr = Math.abs(j) > Gr ? j / Math.abs(j) : 0) && (fr = ar), 0 == J) 0 == rr || rr == Z ? (ur[or++] = ar, J = 1 - rr * rr) : (ur[or++] = fr = lr = k(A, d = _ = b + (Q /= Q - j) * (P = m - b), E = T = v + Q * (q = F - v), N = C = M + Q * (x = p - M), o, h, g, i, y), nr = Z, z = !0); else if (1 == J) 0 != rr && rr != K ? (lr = tr, d = _ = b, E = T = v, N = C = M, nr = K, z = !0, J = 0) : (H = ((q = v - I) * (D = p - M) - (Y = F - v) * (x = M - c)) * mr + (x * (R = m - b) - D * (P = b - w)) * Fr + (P * Y - R * q) * kr < 0, 0 == rr ? (J = H ? 3 : 2, nr = K) : (H ? (lr = tr, d = _ = b, E = T = v, N = C = M, nr = K, z = !0) : ur[or++] = ar, J = 0)); else {
        if (0 == rr) {
          tr = ar, b = m, v = F, M = p;
          continue
        }
        3 == J || rr != nr ? (lr = tr, d = w, E = I, N = c, _ = b, T = v, C = M, z = !0) : (ur[or++] = tr, ur[or++] = ar), J = 0
      }
      if (z && (0 == er ? (U = d, X = E, V = N) : (R = d - L, Y = E - B, D = N - S, Cr[er] = 0 < (W * D - Y * O) * mr + (O * R - D * G) * Fr + (G * Y - R * W) * kr ? 1 : 0, Tr[er] = nr), _r[er] = or, (ur = l[++er])[0] = lr, ur[1] = ar, G = m - (L = _), W = F - (B = T), O = p - (S = C), z = !(or = 2)), Ar <= Lr) break;
      w = b, I = v, c = M, K = Z, tr = ar, b = m, v = F, M = p, Q = j, Z = rr
    }
    if (R = U - L, Y = X - B, D = V - S, Cr[er] = 0 < (W * D - Y * O) * mr + (O * R - D * G) * Fr + (G * Y - R * W) * kr ? 1 : 0, Tr[er] = rr, _r[er] = or + (hr = _r[0]), s(wr, 0, ur, or, hr), 4 <= er) for (Lr = 0; ++Lr <= er;) if (1 == Cr[Lr]) for (w = (u = A[(lr = (ur = l[Lr])[0]) >> 7])[lr &= 127], I = u[lr + 128], c = u[lr + 256], b = (u = A[(lr = ur[(gr = _r[Lr]) - 1]) >> 7])[lr &= 127], v = u[lr + 128], M = u[lr + 256]; ;) {
      for (or = 0, P = b - w, q = v - I, x = M - c, Q = -Number.MAX_VALUE, hr = -1; ++or <= er;) or != Lr && 0 == Cr[or] && Tr[or] == Tr[Lr] && (j = P * (R = (u = A[(lr = (wr = l[or])[0]) >> 7])[lr &= 127] - b) + q * (Y = u[lr + 128] - v) + x * (D = u[lr + 256] - M)) <= 0 && Q <= j && (Q = j, 0 <= P * (G = (d = (u = A[(lr = wr[_r[or] - 1]) >> 7])[lr &= 127]) - w) + q * (W = (E = u[lr + 128]) - I) + x * (O = (N = u[lr + 256]) - c) && (hr = or, U = d, X = E, V = N));
      if (hr < 0) break;
      s(l[hr], 0, ur, gr, or = _r[hr]), Cr[hr] = 2, _r[Lr] = gr += or, b = U, v = X, M = V
    }
    for (Ir = a[1], cr = a[2], Lr = gr = 0; ++Lr <= er;) 1 == Cr[Lr] && (or = _r[Lr], null == e[lr = (hr = 0 == gr++ ? r : $++) >> 9] && (cr[lr] = new Int16Array((Ir[lr] = new Int16Array((sr[lr] = new Int16Array((t[lr] = new Int8Array((e[lr] = Array(512)).length)).length)).length)).length)), tr = 511 & hr, hr == r && or == Mr.length || (e[lr][tr] = Mr = new Int32Array(or)), s(l[Lr], 0, Mr, 0, or), t[lr][tr] = t[ir][yr], sr[lr][tr] = vr, Ir[lr][tr] = Ir[ir][yr], cr[lr][tr] = cr[ir][yr]);
    return fr
  }

  function k(r, n, e, t, a, l, f, o, h) {
    for (var g, i, y, A, u, w = 4095 & ~~(((i = n - l) - Gr) * f), s = 4095 & ~~((i + Gr) * f); ; w = w + 1 & 4095) {
      for (y = o[w]; 0 <= y; y = h[u][A]) if (E((g = r[u = y >> 7])[A = 127 & y] - n, g[128 + A] - e, g[256 + A] - t) < a) return y;
      if (w == s) break
    }
    return null == (g = r[w = (y = J++) >> 7]) && (g = r[w] = new Float64Array(640), h[w] = new Int32Array(128)), g[s = 127 & y] = n, g[s + 128] = e, g[s + 256] = t, h[w][s] = o[w = 4095 & ~~(i * f)], o[w] = y
  }

  function p(r, n, e, t, a, l, f, o, h, g, i) {
    for (var y, A, u, w, s, I, c = 4095.99, b = 5.960464477539063e-8, v = (4095 & ~~(((w = .2857142857142857 * Math.abs(3 * (e - .5 * n) - r)) - b) * c)) - 1, M = 4095 & ~~((w + b) * c), m = o[0], F = o[1], k = o[2], p = o[3], d = o[4]; ++v <= M;) for (I = h[v]; 0 <= I; I = g[I]) if (E((A = F[I]) * e - (u = k[I]) * n, u * r - (y = m[I]) * e, y * n - A * r) <= 5.421010862427522e-20 && Math.hypot(p[I] - (t - (s = l + (t * y + a * A) / (u + 1)) * y), d[I] - (a - s * A)) <= f) return I;
    return m[i] = r, F[i] = n, k[i] = e, p[i] = t - (s = l + (t * r + a * n) / (e + 1)) * r, d[i] = a - s * n, g[i] = h[v = 4095 & ~~(w * c)], h[v] = i
  }

  function d(r, n, e) {
    var t;
    return tn[t = K++] = r, an[t] = n, ln[t] = e, t
  }

  function E(r, n, e) {
    return n *= n, (r *= r) < (e *= e) && n < e ? r + n + e : r < n ? r + e + n : n + e + r
  }

  function N(r, n, e) {
    return Math.sqrt(E(r, n, e))
  }

  function _(r, n) {
    var e;
    return r = r.substring(1 - (e = "-" == r.charAt(0) ? -1 : 1) >> 1), e * ("C" == r.charAt(0) ? n[parseInt(r.substring(1), 10)] : parseFloat(r))
  }

  function T(r) {
    r.preventDefault()
  }

  function C(r, e, t) {
    var a, l, f, o;
    r ? Ur = !0 : Sr = !0, l = ~~(e - (a = n.getBoundingClientRect()).left + .5), f = ~~(t - a.top + .5), Br = 0, or < l && l <= hr && gr < f && f <= ir ? 0 <= (Br = 0 < (kr = l - (o = wr)) && kr <= cr && sr < f && f <= Ir ? -1 : 1) && (l <= o ? Mr < o && wr-- : o + cr < l && o < mr && wr++) : pr < l && l <= dr && Er < f && f <= Nr ? (Br = 1, Xr ^= !0) : (tr = l, ar = er = f), 0 < Br && (lr = tr, fr = ar, x(), O())
  }

  function L(r) {
    r.button && 2 != r.button || C(r.button, r.clientX, r.clientY)
  }

  function B(r) {
    var n;
    r.preventDefault(), C(0, (n = r.targetTouches[0]).clientX, n.clientY)
  }

  function S(r) {
    r.button && 2 != r.button || (r.button ? Ur = !1 : Sr = !1)
  }

  function U(r) {
    r.preventDefault(), Sr = !1
  }

  function X(r, e) {
    var t, a, l, f, o;
    Sr | Ur && Br <= 0 && (a = ~~(r - (t = n.getBoundingClientRect()).left + .5), lr = tr, fr = ar, Br < 0 ? wr = (a -= kr) < Mr ? Mr : mr < a ? mr : a : (l = ~~(e - t.top + .5), Sr && (tr = a, ar = l), Ur && .5 <= (o = (f = Rr * Math.exp((l - er) * Qr)) * xr) && (Rr = f, Yr = .75 / (Wr < o ? .5 * (o + Wr) : o)), er = l), x(), O())
  }

  function V(r) {
    X(r.clientX, r.clientY)
  }

  function P(r) {
    var n;
    r.preventDefault(), X((n = r.targetTouches[0]).clientX, n.clientY)
  }

  function q() {
    Sr = Ur = !1
  }

  function x() {
    var r, n, e, t, a, l, f, o, h, g, i, y, A, u, w, s, I, c, b, v, M, m, F, k, p, d, E, _, T, C, L, B, S, U, X, V, P, q, x, Y, D, G, W, O, Q, j, $, rr, er, or, hr, gr, ir, yr, Ar, ur, sr, Ir, cr, br, vr, Mr, mr, kr, pr, dr, Er, Nr, _r, Br, Sr, Ur, Vr, Pr, qr, xr, Gr, Qr = 1.5707963267948966, jr = (lr - z) * (V = Yr), fn = (H - fr) * V, on = (tr - z) * V, hn = (H - ar) * V;
    for (1 <= (q = Math.hypot(jr, fn)) ? (0 != (V = Math.hypot(on, hn)) && (on *= V = 1 - (q - 1) / V, hn *= V), n = 0) : (q = N(jr, fn, n = Math.cos(q * Qr)), n /= q), jr /= q, fn /= q, 1 < (q = Math.hypot(on, hn)) && (on *= V = (P = q % 4) / q, hn *= V, 1 < P && (on *= V = (P <= 3 ? 2 - P : P - 4) / P, hn *= V)), t = n * (on /= q = N(on, hn, r = Math.cos(q * Qr))) - (r /= q) * jr, a = jr * (hn /= q) - on * fn, f = (e = fn * r - hn * n) * (q = .5 / (l = Math.sqrt(.5 * (1 + jr * on + fn * hn + n * r)))), o = t * q, h = a * q, (yr = zr)[0] = g = l * (u = yr[0]) - f * (w = yr[1]) - o * (s = yr[2]) - h * (I = yr[3]), yr[1] = i = l * w + f * u + o * I - h * s, yr[2] = y = l * s - f * I + o * u + h * w, yr[3] = A = l * I + f * s - o * w + h * u, c = g * (V = 2 * i), M = V * i, m = V * y, F = V * A, b = g * (V = 2 * y), k = V * y, p = V * A, v = g * (V = 2 * A), E = 1 - (k + (d = V * A)), _ = m - v, T = F + b, C = m + v, L = 1 - (M + d), B = p - c, S = F - b, U = p + c, X = 1 - (M + k), er = (wr - Fr) * Dr, Ar = rn, ur = nn, sr = en, Ir = Rr, ir = K, Cr = cr = 0; 0 <= --ir;) R(ir, E * (e = tn[ir]) + _ * (t = an[ir]) + T * (a = ln[ir]), C * e + L * t + B * a, er * (sr[ir] = (S * e + U * t + X * a) * Ir), Ir, Ar, ur);
    if (0 == ++Lr) for (ir = J; 0 <= --ir;) mn[ir] = 0;
    for (vr = ++Lr, Mr = pn, mr = cn, kr = bn, ir = nr; 0 <= --ir;) if (gr = 1 + (hr = 1 + (or = 3 * ir)), rr = (G = Ar[hr] - (x = Ar[or])) * (j = ur[gr] - (Y = ur[or])) - (Q = Ar[gr] - x) * (W = ur[hr] - Y), Xr) {
      for (Er = 0 < rr ? Mr : dn, Nr = 0 < rr ? cr : Cr, pr = (dr = wn[ir]).length, br = ~~(191.99 * Math.abs(rr) / N(W * ($ = sr[gr] - (D = sr[or])) - j * (O = sr[hr] - D), O * Q - $ * G, rr)); 0 <= --pr;) Mn[Er[Nr++] = dr[pr]] = br;
      0 < rr ? cr = Nr : Cr = Nr
    } else {
      for (pr = (dr = un[ir]).length, br = -1; 0 <= --pr;) if (!(mr[_r = dr[pr]] = (V = rr * vn[_r]) <= 0)) for (br < 0 && (br = ~~(191.99 * V / N(W * ($ = sr[gr] - (D = sr[or])) - j * (O = sr[hr] - D), O * Q - $ * G, rr))), Mn[_r] = br, Br = (Er = yn[_r]).length; 0 <= --Br;) mn[Er[Br]] = vr;
      kr[ir] = rr <= 0 ? 2 : 1
    }
    for (Sr = Hr, Ur = Jr, ir = Xr ? Z : J, P = er * Ir; 0 <= --ir;) !Xr && mn[ir] != vr || (R(ir, E * (e = Kr[ir]) + _ * (t = Zr[ir]) + T * (a = $r[ir]), C * e + L * t + B * a, P * (S * e + U * t + X * a), Ir, Sr, Ur), In[0][ir] = ~~(Wr + Sr[ir]), In[1][ir] = ~~(Or - Ur[ir]));
    if (Xr) Tr = cr; else for (Vr = An, Pr = En, ir = br = xr = 0; ;) if (qr = Vr[ir], 0 == br && 0 <= qr[br = kr[kn[Gr = qr[0]]]]) Pr[xr++] = br << 24 | ir, ir = qr[br], br = 0; else {
      for (pr = 2; ++pr < qr.length;) mr[Gr = qr[pr]] || (Mr[cr++] = Gr);
      if (0 <= qr[3 - br]) ir = qr[3 - br], br = 0; else {
        if (0 == xr) return void (Tr = cr);
        br = (ir = Pr[--xr]) >> 24, ir &= 16777215
      }
    }
  }

  function R(r, n, e, t, a, l, f) {
    var o = 42535295865117303e21, h = -42535295865117303e21;
    t = t < 1 ? a / (1 - t) : Number.POSITIVE_INFINITY, f[r] = 0 != e ? e * t : 0, isFinite(l[r] = 0 != n ? n * t : 0) && isFinite(f[r]) || (Math.abs(n) >= Math.abs(e) ? f[r] = (l[r] = 0 < n ? o : h) * (e / n) : l[r] = (f[r] = 0 < e ? o : h) * (n / e))
  }

  function Y(r, n, e, t, a) {
    for (var l = r.length; 0 <= --l;) n[l] = t[r[l]], e[l] = a[r[l]]
  }

  function D(r, n, e) {
    var t;
    for (Sn.beginPath(), Sn.moveTo(r[0], n[0]), t = 0; ++t < e;) Sn.lineTo(r[t], n[t]);
    Sn.closePath(), Sn.stroke()
  }

  function G(r, n, e) {
    var t;
    for (Sn.beginPath(), Sn.moveTo(r[0], n[0]), t = 0; ++t < e;) Sn.lineTo(r[t], n[t]);
    Sn.fill()
  }

  function W(r, n, e, t, a) {
    var l, f, o, h, g, i;
    Sn.beginPath(), Sn.moveTo(l = r + a, n), Sn.quadraticCurveTo(r, n, r, h = n + a), Sn.lineTo(r, i = (g = n + t) - a), Sn.quadraticCurveTo(r, g, l, g), Sn.lineTo(o = (f = r + e) - a, g), Sn.quadraticCurveTo(f, g, f, i), Sn.lineTo(f, h), Sn.quadraticCurveTo(f, n, o, n), Sn.lineTo(l, n), Sn.fill()
  }

  function O() {
    var r, n, e, t, a, l, f, o, h, g, i, y, A, u;
    if (Sn.fillStyle = Tn, Sn.fillRect(0, 0, Q, j), t = sn[0], a = sn[1], l = In[0], f = In[1], Xr) for (o = Cr, h = dn, g = Bn; ;) {
      for (n = 0; n < o; n++) Y(e = hn[r = h[n]], t, a, l, f), Sn.fillStyle = _n[r][255 & Mn[r]], G(t, a, e.length), Sn.strokeStyle = g, D(t, a, e.length);
      if (h == pn) break;
      o = Tr, h = pn, g = Ln
    } else for (n = 0; n < Tr; n++) for (Y(e = gn[r = pn[n]], t, a, l, f), Sn.fillStyle = Sn.strokeStyle = Nn[r][255 & Mn[r]], G(t, a, e.length), i = on; ;) {
      if (null == i[r]) D(t, a, e.length); else for (A = (y = i[r]).length; 0 <= --A;) Y(u = y[A], t, a, l, f), function (r, n, e) {
        var t;
        for (Sn.beginPath(), Sn.moveTo(r[0], n[0]), t = 0; ++t < e;) Sn.lineTo(r[t], n[t]);
        Sn.stroke()
      }(t, a, u.length);
      if (i == fn) break;
      Sn.strokeStyle = Cn, i = fn
    }
    Sn.fillStyle = "lightGray", W(or, r = gr, yr, Ar, n = vr), Sn.strokeStyle = Tn, Sn.beginPath(), Sn.moveTo(ur, r), Sn.lineTo(ur, ir), Sn.closePath(), Sn.stroke(), Sn.fillStyle = "#505050", W(wr, sr, cr, br, n), Xr || (Sn.fillStyle = _b[4][64], Sn.fillRect(pr, Er, _r, _r)), Sn.strokeStyle = Sn.fillStyle = "black", Sn.strokeRect(pr, Er, _r, _r), 0 < (r = rr) && (Sn.font = ~~(Q / 20) + "px Courier New", Sn.fillText("WARNING: " + r + (1 == r ? " face is non-planar" : " faces are non-planar"), 0, 63 * j >> 6)), wr == Mr && (Sn.font = "10px Courier New", Sn.fillText("v3.0", Q >> 6, 63 * j >> 6))
  }

  var Q, j, z, H, J, K, Z, $, rr, nr, er, tr, ar, lr, fr, or, hr, gr, ir, yr, Ar, ur, wr, sr, Ir, cr, br, vr, Mr, mr, Fr, kr, pr, dr, Er, Nr, _r, Tr, Cr, Lr, Br, Sr, Ur, Xr, Vr, Pr, qr, xr, Rr, Yr, Dr, Gr, Wr, Or, Qr, jr, zr, Hr, Jr, Kr, Zr, $r, rn, nn, en, tn, an, ln, fn, on, hn, gn, yn, An, un, wn, sn, In, cn, bn, vn, Mn, mn, Fn, kn, pn, dn, En, Nn, _n, Tn, Cn, Ln, Bn, Sn;
  _m[_m.length] = (Sn = n.getContext("2d"), void function () {
    var t, l, f, M, C, X, R, Y, D, G, W, er, kr, Tr, Cr, Br, Un, Xn, Vn, Pn, qn, xn, Rn, Yn, Dn, Gn, Wn, On, Qn, jn, zn, Hn, Jn, Kn, Zn, $n, re, ne, ee, te, ae, le, fe, oe, he, ge, ie, ye, Ae, ue, we, se, Ie, ce, be, ve, Me, me, Fe, ke, pe, de, Ee, Ne, _e, Te, Ce, Le, Be, Se, Ue, Xe, Ve, Pe, qe, xe, Re, Ye, De, Ge, We, Oe, Qe, je, ze, He, Je, Ke, Ze, $e, rt, nt, et, tt, at, lt, ft, ot, ht, gt, it, yt, At, ut, wt, st, It, ct, bt, vt, Mt, mt, Ft, kt, pt, dt, Et, Nt, _t, Tt, Ct, Lt, Bt, St, Ut, Xt, Vt, Pt, qt, xt, Rt, Yt, Dt, Gt, Wt, Ot, Qt, jt, zt, Ht, Jt, Kt, Zt, $t, ra, na, ea, ta, aa, la, fa, oa, ha, ga, ia, ya, Aa, ua, wa, sa, Ia, ca, ba, va, Ma, ma, Fa, ka, pa, da, Ea, Na, _a, Ta, Ca, La, Ba, Sa, Ua, Xa, Va, Pa, qa, xa, Ra, Ya, Da, Ga, Wa, Oa, Qa, ja, za, Ha, Ja, Ka, Za, $a, rl, nl, el, tl, al, ll, fl, ol, hl, gl, il, yl, Al, ul, wl, sl, Il, cl, bl, vl, Ml, ml, Fl, kl, pl, dl, El, Nl, _l, Tl, Cl, Ll, Bl, Sl, Ul, Xl, Vl, Pl, ql, xl, Rl, Yl, Dl, Gl, Wl, Ol, Ql, jl, zl, Hl, Jl, Kl,
      Zl, $l = 5820766091346741e-26, rf = 33881317890172014e-37, nf = 2.3283064365386963e-10, ef = 1.4629180792671596e-9, tf = 3019169939857233e154;
    if (tr = lr = z = (He = Q = n.width) >> 1, ar = fr = H = (Je = j = n.height) >> 1, Tn = (Ke = r.getElementsByClassName("Background")).length ? Ke[0].value : "#606060", Cn = (Ke = r.getElementsByClassName("EdgeColor")).length ? Ke[0].value : "black", Ln = (Ke = r.getElementsByClassName("WireColor")).length ? Ke[0].value : "black", Sn.fillStyle = Tn, Sn.fillRect(0, 0, He, Je), Ir = (ir = (gr = Me = Je >> 6) + (Ar = me = Je < 256 ? 8 : Je >> 5)) - 1, sr = Me + 1, vr = me >> 1, wr = (Fr = Fe = (3 * (le = (mr = (hr = (or = He >> 2) + (yr = He >> 1)) - (cr = br = me - 2) - 1) - (Mr = or + 1)) >> 2) + Mr) + (le >> 4), ur = Fe + (cr >> 1), Dr = (Qr = .5 / (Wr = He >> 1)) / (re = 3 * (mr - Fe) >> 3), (Ke = r.getElementsByClassName("Perspective")).length && ((wr = Fe + ~~(parseFloat(Ke[0].value) * re)) > mr && (wr = mr), wr < Mr && (wr = Mr)), dr = (pr = He >> 6) + (_r = Ee = me << 1), Nr = (Er = Me) + Ee, (Ze = zr = new Float64Array(4))[0] = 1, (Ke = r.getElementsByClassName("Quaternion")).length) {
      for (l = Ke[0].value.match(/[^ \t\n\r\f,;]+/g), Me = -1, re = 0; ++Me < 4;) re += (Ze[Me] = parseFloat(l[Me])) * Ze[Me];
      for (0 == re && (Ze[0] = re = 1, Ze[1] = Ze[2] = Ze[3] = 0), Me = 4, re = Math.sqrt(re); 0 <= --Me;) Ze[Me] /= re
    }
    if (l = r.getElementsByClassName("Counts")[0].value.match(/[^ \t\n\r\f,;]+/g), ne = parseInt(l[0], 10), $e = ee = parseInt(l[1], 10), nt = rt = nr = parseInt(l[2], 10), tt = un = Array((et = new Int32Array(nt)).length), ft = ln = new Float64Array((lt = an = new Float64Array((at = tn = new Float64Array((en = new Float64Array((nn = new Float64Array((rn = new Float64Array(3 * rt)).length)).length)).length)).length)).length), bn = new Int8Array((wn = Array(rt)).length), ot = new Float64Array(ne), 0 < ne) for (l = r.getElementsByClassName("Constants")[0].value.match(/[^ \t\n\r\f,;]+/g), Me = -1; ++Me < ne;) ot[Me] = parseFloat(l[Me]);
    for (it = $r = new Float64Array((gt = Zr = new Float64Array((ht = Kr = new Float64Array((Jr = new Float64Array((Hr = new Float64Array($e)).length)).length)).length)).length), yt = new Float64Array(ee), l = r.getElementsByClassName("Vertices")[0].value.match(/[^ \t\n\r\f,;]+/g), At = 0, Te = Me = -1, wt = -(ut = Number.MAX_VALUE); ++Te < $e;) (yt[Te] = re = N(st = ht[Te] = _(l[++Me], ot), gt[Te] = _(l[++Me], ot), it[Te] = _(l[++Me], ot))) > At && (At = re), st < ut && (ut = st), wt < st && (wt = st);
    for (1 == (It = new Int32Array(isFinite(st = 4095.99 / (wt - ut)) ? 4096 : 1)).length && (st = 0), Me = It.length; 0 <= --Me;) It[Me] = -1;
    for (ot = null, ct = Array(rt), bt = Array(ee), vt = new Int32Array((De = new Int32Array($e)).length), dt = Array((Mt = Array(512)).length), mt = Array(Me = 3); 0 <= --Me;) mt[Me] = Array(dt.length);
    for (Me = nt + 511 >> 9, Ft = mt[0], kt = mt[1], pt = mt[2]; 0 <= --Me;) pt[Me] = new Int16Array((kt[Me] = new Int16Array((Ft[Me] = new Int16Array((dt[Me] = new Int8Array((Mt[Me] = Array(512)).length)).length)).length)).length);
    for (Et = Array((Qe = new Int32Array(nt)).length), Me = nt; 0 <= --Me;) Et[Me] = new Float64Array(4);
    for (l = r.getElementsByClassName("Faces")[0].value.match(/[^ \t\n\r\f,;]+/g), Oe = new Int32Array(he = 0), Me = Te = -1, ae = te = 0; ++Me < rt;) {
      for (Fe = 0; "#" != (t = l[++Te]).charAt(0);) vt[De[Fe++] = parseInt(t, 10)]++;
      if (te += Fe, ct[Me] = new Int32Array(Fe), Qe[Me] = -Fe, s(De, 0, Mt[ke = Me >> 9][Ne = 511 & Me] = new Int32Array(Fe), 0, Fe), ae < Fe && (ae = Fe), 1 < t.length) {
        for (me = 16777215 & parseInt(t.substring(1), 16), de = he; 0 <= --de && Oe[de] != me;) ;
        de < 0 && (Oe = c(Oe, de = he++, me, 32)), Qe[Me] = de
      }
      Ft[ke][Ne] = Me
    }
    for (Nt = Array(Me = 4); 0 <= --Me;) Nt[Me] = new Int32Array(te);
    for (_t = Array(Me = ee); 0 <= --Me;) for (_t[Me] = new Int32Array(me = vt[Me]), bt[Me] = De = new Int32Array(me <<= 1); 0 <= --me;) De[me] = -1;
    for (Me = rt; 0 <= --Me;) for (me = (De = Mt[Me >> 9][511 & Me]).length; 0 <= --me;) _t[Fe = De[me]][--vt[Fe]] = me << 18 | Me;
    for (Me = ee, Vr = qr = !1; 0 <= --Me;) if (0 < (De = _t[Me]).length) for (Ct = (Tt = Mt[(262143 & (Fe = De[Ne = 0])) >> 9][511 & Fe]).length - 1, Fe >>>= 18; Ne < De.length - 1;) {
      for (_e = Tt[(Fe + Ct) % Tt.length], me = ++Ne; me < De.length; me++) if (de = (Tt = Mt[(262143 & (Fe = De[me])) >> 9][511 & Fe]).length - 1, (Lt = Tt[(1 + (Fe >>>= 18)) % Tt.length] == _e) || Tt[(Fe + de) % Tt.length] == _e) {
        (Lt ? 1 == Ct : 1 < Ct) && (Vr = !0), Ct = Lt ? de : 1;
        break
      }
      me >= De.length ? (qr = !0, Ct = (Tt = Mt[(262143 & (Fe = De[Ne])) >> 9][511 & Fe]).length - 1, Fe >>>= 18) : me != Ne && (Ee = De[Ne], De[Ne] = De[me], De[me] = Ee)
    }
    for (Me = rt, Bt = Nt[te = 0], St = Nt[1], Ut = Nt[2], Xt = Nt[3]; 0 <= --Me;) for (me = (De = Mt[Me >> 9][511 & Me]).length, Pt = De[0], Vt = ct[Me]; 0 <= --me;) {
      for (de = Pt + (qt = De[me]) - (ke = Pt < qt ? Pt : qt), Fe = 0, Tt = bt[Pt]; 0 <= (Ne = Tt[Fe]) && (Bt[Ne] != ke || St[Ne] != de); Fe++) ;
      Ne < 0 ? (Bt[Tt[vt[Pt]++] = bt[qt][vt[qt]++] = Ne = te++] = ke, St[Ne] = de, Ut[Ne] = Xt[Ne] = Me) : (Xt[Ne] != Ut[Ne] && (qr = !0), Ut[Ne] += Me - (Xt[Ne] = Me < (Fe = Ut[Ne]) ? Fe : Me)), Vt[me] = Ne, Pt = qt
    }
    for (Me = ee; 0 <= --Me;) if (0 < (De = _t[Me]).length) if (1 == De.length) qr = !0; else for (pe = 0, me = 1, Tt = bt[Me], Te = vt[Me], xt = 262143 & De[0]; ;) {
      for (de = xt + (Rt = 262143 & De[me]) - (ke = xt < Rt ? xt : Rt), Fe = pe; Fe < Te && (Ut[Ne = Tt[Fe]] != ke || Xt[Ne] != de); Fe++) ;
      if (Fe < Te ? (Tt[Fe] = Tt[pe], Tt[pe++] = Ne) : qr = !0, Te <= pe || 1 == (me = (me + 1) % De.length)) break;
      xt = Rt
    }
    if (!(Pr = qr) && Vr) r:for (Gt = new Uint8Array((Dt = new Uint8Array((Yt = new Int32Array(Me = rt)).length)).length), ve = 0; 0 <= --Me;) if (!Dt[Me]) for (Dt[Yt[Fe = 0] = Me] = !0, me = 1; Fe < me; Fe++) for (ke = (Tt = ct[pe = Yt[Fe]]).length, De = Mt[pe >> 9][511 & pe], Wt = Gt[pe]; 0 <= --ke;) {
      for (Ee = (Ot = ct[de = Ut[Ne = Tt[ke]] + Xt[Ne] - pe]).length, Vt = Mt[de >> 9][511 & de]; 0 <= --Ee && Ot[Ee] != Ne;) ;
      if (Qt = Wt != (De[ke] == Vt[Ee]), Dt[de]) {
        if (Gt[de] != Qt) {
          Pr = !0;
          break r
        }
      } else Dt[Yt[me++] = de] = !0, (Gt[de] = Qt) && ve++
    }
    if (_t = bt = ct = null, Bn = Pr ? Ln : "#888888", Rr = Wr * ((Ke = r.getElementsByClassName("Scale")).length ? .75 * parseFloat(Ke[0].value) : .75) / At, Yr = 1 / Wr, Wr += .5, Or = .5 + (Je >> 1), jt = (Gr = (xr = At) * $l) * Gr, je = ze = null, 0 != he) for (ze = Array((je = Array(Me = he)).length); 0 <= --Me;) for (ze[Me] = Array(192), je[Me] = Array(192), me = 192, Tt = je[Me], Vt = ze[Me], Ht = (zt = Oe[Me]) >> 8 & 255, Jt = 255 & zt, zt >>= 16; 0 <= --me;) Tt[me] = "rgb(" + ~~((zt * (Fe = me + 64) + 127) / 255) + "," + ~~((Ht * Fe + 127) / 255) + "," + ~~((Jt * Fe + 127) / 255) + ")", Vt[me] = "rgba" + Tt[me].slice(3, -1) + ",.125)";
    for (Te = -1, J = Fe = 0, Kt = Array((Zt = Array(1024)).length); ++Te < $e;) (vt[Te] = k(Kt, f = ht[Te], M = gt[Te], C = it[Te], jt, ut, st, It, Zt)) != Te && (J++, Fe = 1, (Se = Kt[Me = Te >> 7] = null == Kt[Me] ? new Float64Array(640) : Kt[Me])[me = 127 & Te] = f, Se[me + 128] = M, Se[me + 256] = C);
    if (0 != Fe) for (Me = nt; 0 <= --Me;) for (me = (De = Mt[Me >> 9][511 & Me]).length; 0 <= --me;) for (; (De[me] = vt[pe = De[me]]) != pe;) ;
    for (Be = new Float64Array((Le = new Float64Array((Ve = new Int32Array(ge = ae)).length)).length), Me = K = rr = be = ye = Ae = we = se = 0, Oe = null, J = $e; Me < rt; Me++) {
      for (me = (De = Mt[Ne = Me >> 9][pe = 511 & Me]).length, Cr = Br = Un = 0, X = (Se = Kt[(Te = De[1]) >> 7])[Te &= 127], R = Se[Te + 128], Y = Se[Te + 256], D = (Se = Kt[(Te = De[0]) >> 7])[Te &= 127], G = Se[Te + 128], W = Se[Te + 256]; Cr += (Fe = (f = (R - G) * ((Tr = (Se = Kt[(Te = De[--me]) >> 7])[256 + (Te &= 127)]) - W) - (Y - W) * ((kr = Se[Te + 128]) - G)) * Cr + (M = (Y - W) * ((er = Se[Te]) - D) - (X - D) * (Tr - W)) * Br + (C = (X - D) * (kr - G) - (R - G) * (er - D)) * Un < 0 ? -1 : 1) * f, Br += Fe * M, Un += Fe * C, !(me <= 0);) X = D, R = G, Y = W, D = er, G = kr, W = Tr;
      for (0 == (re = N(Cr, Br, Un)) && 0 == (re = N(Cr *= tf, Br *= tf, Un *= tf)) && (re = Un = 1), Cr /= re, Br /= re, Un /= re, Fe = -1, pt[Ne][pe] = Me; ++Fe < Me && E(Br * (C = (Vt = Et[et[Fe]])[2]) - (M = Vt[1]) * Un, Un * (f = Vt[0]) - C * Cr, Cr * M - f * Br) > rf;) ;
      for ($t = 0, pt[Ne][pe] = pt[Fe >> 9][511 & Fe]; ;) {
        for (D = (1 - (W = -Cr) * W / (re = 1 + Un * (ra = Un < 0 ? -1 : 1))) * ra, kr = 1 - (Tr = -Br * ra) * Tr / re, er = (G = Cr * Tr / re) * ra, me = De.length, X = (Se = Kt[(Te = De[0]) >> 7])[Te &= 127], R = Se[Te + 128], Y = Se[Te + 256]; 0 <= --me;) Le[me] = (Se = Kt[(Te = De[me]) >> 7])[384 + (Te &= 127)] = D * (f = Se[Te] - X) + G * (M = Se[Te + 128] - R) + W * (C = Se[Te + 256] - Y), Be[me] = Se[Te + 512] = er * f + kr * M + Tr * C;
        if (0 != $t) break;
        for (me = De.length, $t = 0, Rn = Le[1] - (f = Le[0]), Yn = Be[1] - (M = Be[0]); 0 <= --me;) $t += Math.atan2((qn = f - (f = Le[me])) * Yn - (xn = M - (M = Be[me])) * Rn, qn * Rn + xn * Yn), Rn = qn, Yn = xn;
        if (0 <= $t) break;
        Cr = -Cr, Br = -Br, Un = -Un
      }
      for (re = -(X * Cr + R * Br + Y * Un); Fe < Me && (Math.abs(re - (Vt = Et[et[Fe]])[3]) > Gr || E(Cr - Vt[0], Br - Vt[1], Un - Vt[2]) > rf); Fe++) ;
      if ((Vt = Et[et[Me] = Fe == Me ? be++ : et[Fe]])[0] = Cr, Vt[1] = Br, Vt[2] = Un, Vt[3] = re, d(f = X + D * (Dn = function (r, n, e, t, a, l) {
        var f, o, h, g, i, y, A, u, w, s, I, c, b, v;
        r:for (f = e; ;) for (b = .5 * ((o = r[t]) + r[a]), v = .5 * ((h = n[t]) + n[a]), i = l, g = (o -= b) * o + (h -= v) * h; ;) {
          for (; i < e; i++) if ((o = r[i] - b) * o + (h = n[i] - v) * h > g) {
            if (0 != l) {
              a = t, e = t = i, l--;
              continue r
            }
            b = (b = r[t]) + (I = ((A = n[i] - (v = n[t])) * (u = (o = r[a] - b) * o + (h = n[a] - v) * h) - h * (w = (y = r[i] - b) * y + A * A)) * (s = .5 / (o * A - h * y))), v += c = (o * w - y * u) * s, g = I * I + c * c
          }
          if (2 == l) return n[0] = v, b;
          i = e + 1, e = 0 == l ? a : f, t = a, a = l++
        }
      }(Le, Be, De.length, 0, 1, 2)) + er * (Gn = Be[0]), M = R + G * Dn + kr * Gn, C = Y + W * Dn + Tr * Gn), d(f + (re = 5.960464477539063e-8 * At) * D, M + re * G, C + re * W), d(f + re * er, M + re * kr, C + re * Tr), ce = 0, 2 < (me = De.length - 1)) {
        r:for (; 0 <= (Fe = me--);) for (X = (Se = Kt[(Te = De[Fe]) >> 7])[Te &= 127], R = Se[Te + 128], Y = Se[Te + 256]; 0 <= --Fe;) if (Math.abs((Cr * ((Se = Kt[(Te = De[Fe]) >> 7])[_e = 127 & Te] - X) + Br * (Se[_e + 128] - R) + Un * (Se[_e + 256] - Y)) / yt[Te]) > nf) {
          rr++;
          break r
        }
        for (me = De.length, qn = (Se = Kt[(Te = De[ve = 0]) >> 7])[384 + (Te &= 127)], xn = Se[Te + 512], ke = 1; 1 < --me; ve = me, ke = 0) {
          for (Zn = (Rn = (Se = Kt[(Te = De[me]) >> 7])[384 + (Te &= 127)]) - qn, $n = (Yn = Se[Te + 512]) - xn, Dn = (Se = Kt[(Te = De[Fe = me - 1]) >> 7])[384 + (Te &= 127)], Gn = Se[Te + 512]; ke < Fe; Fe--) {
            if (zn = (Wn = (Se = Kt[(Te = De[Fe - 1]) >> 7])[384 + (Te &= 127)]) - Dn, Hn = (On = Se[Te + 512]) - Gn, Math.abs(re = Hn * Zn - zn * $n) > Gr && 0 <= (na = (zn * (Kn = xn - Gn) - Hn * (Jn = qn - Dn)) / re) && na <= 1 && 0 <= (ea = (Zn * Kn - $n * Jn) / re) && ea <= 1) {
              if (0 == ce) {
                if (0 == ye && (xe = new Int32Array(ye = ae << 1)), ge < (pe = De.length << 2) && (Be = new Float64Array((Le = new Float64Array((Ve = new Int32Array(ge = pe)).length)).length)), Ae < De.length) for (Ce = Array((Ue = Array((Pe = new Int32Array(pe = Ae = De.length)).length)).length); 0 <= --pe;) Ce[pe] = new Float64Array((Ue[pe] = new Int32Array(Ae - 3)).length);
                for (pe = ie = De.length; 0 <= --pe;) Le[pe] = (Se = Kt[(Te = Ve[pe] = De[pe]) >> 7])[384 + (Te &= 127)], Be[pe] = Se[Te + 512], Pe[pe] = 0
              }
              for (pe = ie, Qn = qn + na * Zn, jn = xn + na * $n; 0 <= --pe && Math.hypot(Le[pe] - Qn, Be[pe] - jn) > Gr;) ;
              ce += 4, 0 <= pe && pe < De.length && (ce -= 1 + ((Qn = Le[pe]) == qn && (jn = Be[pe]) == xn || Qn == Rn && jn == Yn ? 1 : 0) + (Qn == Dn && jn == Gn || Qn == Wn && jn == On ? 1 : 0)), pe < 0 && (ge <= ie && (ta = ge, I(Le, 0, Le = new Float64Array(ge += De.length), 0, ta), I(Be, 0, Be = new Float64Array(ge), 0, ta), s(Ve, 0, Ve = new Int32Array(ge), 0, ta)), Le[pe = ie++] = Qn, Be[pe] = jn, Ve[pe] = k(Kt, X + D * Qn + er * jn, R + G * Qn + kr * jn, Y + W * Qn + Tr * jn, jt, ut, st, It, Zt), $e = J), u(Pe, Ue[ve], Ce[ve], ve, me, pe, na), u(Pe, Ue[Fe], Ce[Fe], Fe, Fe - 1, pe, ea)
            }
            Dn = Wn, Gn = On
          }
          qn = Rn, xn = Yn
        }
      }
      if (4 <= ce) {
        if (we < ie) Xe = Array((qe = new Int32Array(we = ie)).length), se = 0; else for (me = ie; 0 <= --me;) qe[me] = 0;
        if (se < (pe = 4294967294 & De.length)) for (me = ie, se = pe; 0 <= --me;) Xe[me] = new Int32Array(pe);
        for (me = De.length, Fe = Ee = 0; 0 <= --me; Fe = me) {
          for (pe = Pe[Fe], Tt = Ue[Fe], de = me; 0 <= --pe;) Xe[Xe[de][qe[de]++] = ke = Tt[pe]][qe[ke]++] = de, de = ke;
          Xe[Xe[de][qe[de]++] = Fe][qe[Fe]++] = de
        }
        for (me = ie; 0 <= --me;) for (; 0 < qe[me];) {
          for ($t = aa = 0, Zn = (qn = Le[Fe = _e = Xe[de = me][qe[de] - 1]]) - Le[de], $n = (xn = Be[Fe]) - Be[de]; ;) {
            for (ke = Ct = --qe[Fe], Tt = Xe[Fe], la = -Number.MAX_VALUE; 0 <= ke; ke--) (pe = Tt[ke]) != de && (zn = Le[pe] - qn, Hn = Be[pe] - xn, (fa = Math.atan2(Zn * Hn - $n * zn, Zn * zn + $n * Hn)) > la && (la = fa, ve = ke, Ne = pe));
            if (Tt[ve] = Tt[Ct], $t += la, xe[aa++] = Ve[de = Fe], Fe == me && Ne == _e) break;
            Zn = -qn + (qn = Le[Fe = Ne]), $n = -xn + (xn = Be[Fe])
          }
          0 < $t && (null == Mt[ke = (Fe = 0 == Ee ? Me : nt++) >> 9] && (pt[ke] = new Int16Array((kt[ke] = new Int16Array((Ft[ke] = new Int16Array((dt[ke] = new Int8Array((Mt[ke] = Array(512)).length)).length)).length)).length)), s(xe, 0, Mt[ke][pe = 511 & Fe] = 0 == Ee && aa == De.length ? Mt[ke][pe] : new Int32Array(aa), 0, aa), Ee = 1, pt[ke][pe] = pt[(Ne = Ft[ke][pe] = Me) >> 9][511 & Ne])
        }
      }
    }
    for (yt = null, ha = 0, oa = new Int32Array(Me = be), De = new Int32Array(be), ga = te; 0 <= --Me;) {
      for (Cr = (Vt = Et[Me])[me = Fe = 0], Br = Vt[1], Un = Vt[2], re = Vt[3]; Fe < ha; Fe++) if (E(Cr - (Vt = Et[oa[Fe]])[0], Br - Vt[1], Un - Vt[2]) <= rf) {
        if (Math.abs(re - Vt[3]) <= Gr) break
      } else if (E(Cr + Vt[0], Br + Vt[1], Un + Vt[2]) <= rf) {
        if (Math.abs(re + Vt[3]) <= Gr) break
      } else me++;
      (De[Me] = Fe) == ha && (oa[ha++] = Me, ga += me)
    }
    for (ia = new Int32Array(Me = rt), kn = new Int32Array(ha); 0 <= --Me;) oa[ia[Me] = me = De[Fe = et[Me]]] == Fe && (kn[me] = Me);
    for (Me = nt, ya = Array((De = new Int32Array(ha)).length); 0 <= --Me;) De[ia[Ft[Me >> 9][511 & Me]]]++;
    for (Me = ha; 0 <= --Me;) ya[Me] = new Int32Array(De[Me]);
    for (Me = nt, Aa = Array(512); 0 <= --Me;) ya[me = ia[Ft[Fe = Me >> 9][Ne = 511 & Me]]][--De[me]] = Me, a(Mt[Fe][Ne], Kt, (Aa[Fe] = null == Aa[Fe] ? Array(512) : Aa[Fe])[Ne] = new Float64Array(6));
    for (Me = ha, ue = Ae - 3; 0 <= --Me;) {
      for (ua = wa = 0, De = ya[Me]; ua < De.length; ua++) for (Ia = De.length, ba = !0, ca = Ft[(sa = De[ua]) >> 9][511 & sa]; --Ia > ua;) if (ba && (ba = !1, f = (Vt = Aa[sa >> 9][511 & sa])[0], Xn = Vt[1], M = Vt[2], Vn = Vt[3], C = Vt[4], Pn = Vt[5]), (Fa = Ft[ma = (va = De[Ia]) >> 9][Ma = 511 & va]) != ca && Xn > (Vt = Aa[ma][Ma])[0] && f < Vt[1] && Vn > Vt[2] && M < Vt[3] && Pn > Vt[4] && C < Vt[5]) {
        for (0 == wa++ && (re = 1 + (Un = (Vt = Et[oa[Me]])[2]) * (ra = Un < 0 ? -1 : 1), D = (1 - (W = -Vt[0]) * W / re) * ra, kr = 1 - (Tr = -Vt[1] * ra) * Tr / re, er = (G = -W * Tr / re) * ra), e(Tt = Mt[sa >> 9][511 & sa], Kt, X = at[Te = 3 * ca], R = lt[Te], Y = ft[Te], D, G, W, er, kr, Tr), e(Ot = Mt[ma][Ma], Kt, X, R, Y, D, G, W, er, kr, Tr), me = Tt.length, qn = (Se = Kt[(Te = Tt[ce = 0]) >> 7])[384 + (Te &= 127)], xn = Se[Te + 512]; ;) {
          for (Fe = Ot.length, Zn = (Rn = (Se = Kt[(Te = Tt[--me]) >> 7])[384 + (Te &= 127)]) - qn, $n = (Yn = Se[Te + 512]) - xn, Dn = (Se = Kt[(Te = Ot[0]) >> 7])[384 + (Te &= 127)], Gn = Se[Te + 512]; ;) {
            for (pa = ka = 0, zn = (Wn = (Se = Kt[(Te = Ot[--Fe]) >> 7])[384 + (Te &= 127)]) - Dn, Hn = (On = Se[Te + 512]) - Gn; pa < 4; ka++) {
              if (0 == ka) {
                if ((ea = i(qn, xn, Dn, Gn, Wn, On)) < 0) continue;
                pa++, na = 0
              } else if (1 == ka) {
                if ((ea = i(Rn, Yn, Dn, Gn, Wn, On)) < 0) continue;
                pa++, na = 1
              } else if (2 == ka) {
                if ((na = i(Dn, Gn, qn, xn, Rn, Yn)) < 0) continue;
                pa++, ea = 0
              } else if (3 == ka) {
                if ((na = i(Wn, On, qn, xn, Rn, Yn)) < 0) continue;
                pa++, ea = 1
              } else {
                if (0 != pa || Math.abs(re = Hn * Zn - zn * $n) <= Gr || (na = (zn * (Kn = xn - Gn) - Hn * (Jn = qn - Dn)) / re) < 0 || 1 < na || (ea = (Zn * Kn - $n * Jn) / re) < 0 || 1 < ea) break;
                pa = 4
              }
              if (0 == ce) {
                if (ge < (pe = (Ee = Tt.length + Ot.length) << 1) && (Be = new Float64Array((Le = new Float64Array((Ve = new Int32Array(ge = pe)).length)).length)), ye < (pe = Tt.length + Ot.length << 1) && (xe = new Int32Array(ye = pe)), Ae < Ee && (Ce = Array((Ue = Array((Pe = new Int32Array(Ae = Ee)).length)).length), ue = 0), ue < (Ee = Tt.length > Ot.length ? Tt.length : Ot.length)) for (pe = Ae; 0 <= --pe;) Ce[pe] = new Float64Array((Ue[pe] = new Int32Array(ue = Ee)).length);
                for (da = Tt, ie = 0; ;) {
                  for (pe = -1; ++pe < da.length;) Le[ie] = (Se = Kt[(Te = Ve[ie] = da[pe]) >> 7])[384 + (Te &= 127)], Be[ie] = Se[Te + 512], Pe[ie++] = 0;
                  if (da == Ot) break;
                  da = Ot
                }
              }
              for (pe = ie, Qn = qn + na * Zn, jn = xn + na * $n, _e = Te = 0; 0 <= --pe && Math.hypot(Le[pe] - Qn, Be[pe] - jn) > Gr;) ;
              ce += 8, 0 <= pe && pe < Tt.length + Ot.length && (jn = Be[pe], ce -= 1 + (_e = (Qn = Le[pe]) == qn && jn == xn || Qn == Rn && jn == Yn ? 3 : 0) + (Te = Qn == Dn && jn == Gn || Qn == Wn && jn == On ? 3 : 0)), pe < 0 && (ge <= ie && (ta = ge, I(Le, 0, Le = new Float64Array(ge += Tt.length + Ot.length), 0, ta), I(Be, 0, Be = new Float64Array(ge), 0, ta), s(Ve, 0, Ve = new Int32Array(ge), 0, ta)), Le[pe = ie++] = Qn, Be[pe] = jn, Ve[pe] = k(Kt, X + D * Qn + er * jn, R + G * Qn + kr * jn, Y + W * Qn + Tr * jn, jt, ut, st, It, Zt), $e = J), 0 == _e && u(Pe, Ue[Ee = (me + 1) % Tt.length], Ce[Ee], Ee, me, pe, na), 0 == Te && u(Pe, Ue[Ee = Tt.length + (Fe + 1) % Ot.length], Ce[Ee], Ee, Tt.length + Fe, pe, ea)
            }
            if (Fe <= 0) break;
            Dn = Wn, Gn = On
          }
          if (me <= 0) break;
          qn = Rn, xn = Yn
        }
        if (16 <= ce) {
          if (we < ie) Xe = Array((qe = new Int32Array(we = ie)).length), se = 0; else for (me = ie; 0 <= --me;) qe[me] = 0;
          if (0 == se) for (pe = ie, se = 4; 0 <= --pe;) Xe[pe] = new Int32Array(4);
          for (me = (Fe = Tt.length) + Ot.length; 0 <= --me; Fe = me == Tt.length ? 0 : me) {
            for (pe = Pe[Fe], da = Ue[Fe], de = me; 0 <= --pe;) Xe[Xe[de][qe[de]++] = ke = da[pe]][qe[ke]++] = de, de = ke;
            Xe[Xe[de][qe[de]++] = Fe][qe[Fe]++] = de
          }
          for (me = ie; 0 <= --me;) for (qn = (Se = Kt[(_e = Ve[Fe = me]) >> 7])[Te = 127 & _e], xn = Se[Te + 128], Rn = Se[Te + 256]; 0 <= --Fe;) (Te = Ve[Fe]) != _e && (Se = Kt[Te >> 7])[Te &= 127] == qn && Se[Te + 128] == xn && Se[Te + 256] == Rn && (Ve[Fe] = _e);
          for (me = -1; ++me < ie;) for (Te = Ve[Fe = me]; ++Fe < ie;) if (Ve[Fe] == Te) for (w(Xe[Fe], 0, Xe[me], qe[me], qe[Fe]), pe = ie, qe[me] += qe[Fe], qe[Fe] = 0; 0 <= --pe;) for (de = qe[pe], da = Xe[pe]; 0 <= --de;) da[de] == Fe && (da[de] = me);
          for (me = ie; 0 <= --me;) {
            for (Fe = -1, Ne = qe[me], da = Xe[me]; ++Fe < Ne;) for (de = da[pe = Fe]; ++pe < Ne;) da[pe] == de && (da[pe] = da[--Ne]);
            qe[me] = Ne
          }
          for (me = ie, Ee = 0; 0 <= --me;) for (; 0 < qe[me];) {
            for ($t = aa = 0, Zn = (qn = Le[Fe = _e = Xe[de = me][qe[de] - 1]]) - Le[de], $n = (xn = Be[Fe]) - Be[de]; ;) {
              for (Ct = (ke = qe[Fe]--) - 1, da = Xe[Fe], la = -Number.MAX_VALUE; 0 <= --ke;) (pe = da[ke]) != de && (re = Math.atan2(Zn * (Hn = Be[pe] - xn) - $n * (zn = Le[pe] - qn), Zn * zn + $n * Hn)) > la && (la = re, ve = ke, Ne = pe);
              if (da[ve] = da[Ct], $t += la, (xe[aa++] = de = Fe) == me && Ne == _e) break;
              Zn = -qn + (qn = Le[Fe = Ne]), $n = -xn + (xn = Be[Fe])
            }
            if (0 < $t) {
              r:for (pe = 0, Ne = xe[aa - 2], _e = xe[aa - 1]; pe < aa; Ne = _e, _e = Te, pe++) if (y(Le, Be, Ne, _e, Te = xe[pe]) > Gr) {
                for (de = pe + aa - 2; --de > pe;) if (y(Le, Be, Ne, _e, ke = xe[de % aa]) > Gr && y(Le, Be, _e, Te, ke) > Gr && y(Le, Be, Te, Ne, ke) > Gr) continue r;
                qn = (Le[Ne] + Le[_e] + Le[Te]) / 3, xn = (Be[Ne] + Be[_e] + Be[Te]) / 3;
                break
              }
              if (0 != (ke = (0 == A(Le, Be, 0, Tt.length, qn, xn) ? 0 : 1) + (0 == A(Le, Be, Tt.length, Tt.length + Ot.length, qn, xn) ? 0 : 2))) {
                if (3 == ke && (ke = Tt.length > Ot.length || Tt.length == Ot.length && (et[ca] == oa[Me] || et[Fa] != oa[Me]) ? 1 : 2), pe = Ft[(de = sa + (ke - 1) * (va - sa)) >> 9][511 & de], null == Mt[ve = (Fe = 0 == (Ee & ke) ? de : nt++) >> 9] && (pt[ve] = new Int16Array((kt[ve] = new Int16Array((Ft[ve] = new Int16Array((dt[ve] = new Int8Array((Mt[ve] = Array(512)).length)).length)).length)).length)), Ct = 511 & Fe, Fe != de && (pt[ve][Ct] = pt[(Ne = Ft[ve][Ct] = pe) >> 9][511 & Ne], (Aa[ve] = null == Aa[ve] ? Array(512) : Aa[ve])[Ct] = new Float64Array(6), De = c(De, De.length, Fe, 1)), Fe == sa && (ba = !0), et[pe] != oa[Me]) for (_e = 1 + (Te = aa - 1) >> 1; 0 <= --_e;) Ne = xe[_e], xe[_e] = xe[Te - _e], xe[Te - _e] = Ne;
                for (Ne = aa, Mt[ve][Ct] = Ea = Fe == de && aa == Mt[ve][Ct].length ? Mt[ve][Ct] : new Int32Array(aa); 0 <= --Ne;) Ea[Ne] = Ve[xe[Ne]];
                a(Ea, Kt, Aa[ve][Ct]), Ee |= ke
              }
            }
          }
          if (3 != Ee) {
            for (a(Mt[ke = (de = 1 == Ee ? va : sa) >> 9][pe = 511 & de] = Mt[me = --nt >> 9][Fe = 511 & nt], Kt, Aa[ke][pe]), De[1 == Ee ? Ia : ua] = De[Te = De.length - 1], s(De, 0, De = new Int32Array(Te), 0, Te); 0 < Te--;) if (De[Te] == nt) {
              De[Te] = de;
              break
            }
            sa == nt && (sa = de), 2 == Ee && (Ia = --ua), Ft[ke][pe] = Ft[me][Fe], pt[ke][pe] = pt[me][Fe]
          }
        }
      }
      ya[Me] = De
    }
    for (Ue = Xe = ya = Ve = Pe = qe = xe = Le = Be = null, Me = nt, De = new Int32Array(nr); 0 <= --Me;) De[Ft[Me >> 9][511 & Me]]++;
    for (Me = rt; 0 <= --Me;) wn[Me] = new Int32Array(De[Me]);
    for (_n = Array(Me = nt); 0 <= --Me;) _n[wn[me = Ft[Me >> 9][511 & Me]][--De[me]] = Me] = (Fe = Qe[me]) < 0 ? _c[31 & -Fe] : ze[Fe];
    for (Et.length = be, jr = Et, Fn = et, Z = $e, Na = hn = Array((dn = new Int32Array(Me = Ie = $ = nt)).length), oe = 0; 0 <= --Me;) (Fe = (De = Mt[(me = kt[Ne = Me >> 9][ke = 511 & Me] = Me) >> 9][511 & me]).length) > oe && (oe = Fe), s(De, 0, Na[Me] = new Int32Array(Fe), 0, Fe), dt[Ne][ke] = 1;
    for (Ta = Array(3), Me = 3, me = (_a = Array(oe + 1)).length; 0 <= --Me;) Ta[Me] = new Int32Array(me);
    for (Me = oe + 1, me = ha - 2 + (3 * oe >> 1); 0 <= --Me;) _a[Me] = new Int32Array(me);
    for (La = Array((Ca = new Int32Array(Me = nt)).length); 0 <= --Me;) La[Me] = new Int32Array(0);
    for (Me = 0, Sa = new Float64Array((Ba = new Float64Array(4294967294 & oe)).length); Me < nt; Me++) for (X = (Vt = Aa[ke = (me = Me) >> 9][Te = 511 & Me])[0], D = Vt[1], R = Vt[2], G = Vt[3], Y = Vt[4], W = Vt[5], Cr = (Xa = Et[et[Ft[ke][Te]]])[0], Br = Xa[1], Un = Xa[2], Ua = pt[ke][Te], De = Mt[ke][Te]; ++me < nt;) pt[Ee = me >> 9][Ne = 511 & me] != Ua && D > (Vt = Aa[Ee][Ne])[0] && X < Vt[1] && G > Vt[2] && R < Vt[3] && W > Vt[4] && Y < Vt[5] && (C = Math.abs(Cr * (kr = (Va = Et[et[Ft[Ee][Ne]]])[1]) - (er = Va[0]) * Br), 0 != (pe = m(Ba, Fe = (f = Math.abs(Br * (Tr = Va[2]) - kr * Un)) > (M = Math.abs(Un * er - Tr * Cr)) ? C < f ? -1 : 1 : C < M ? 0 : 1, De, Mt[Ee][Ne], Xa, Va, Kt)) && 0 != (de = m(Sa, Fe, Mt[Ee][Ne], De, Va, Xa, Kt)) && (de < 0 || pe < 0) && o(Ba, Sa, 2147483647 & pe, 2147483647 & de) * N(f, M, C) > nf * (Fe < 0 ? f : 0 == Fe ? M : C) && (de < 0 && (La[me] = c(La[me], Ca[me]++, Me, 16)), pe < 0 && (La[Me] = c(La[Me], Ca[Me]++, me, 16))));
    for (Aa = null, Pa = Array(Ie << 1), qa = new Int32Array(Me = 4096); 0 <= --Me;) qa[Me] = -1;
    for (Ra = Array(Me = 5), me = (xa = new Int32Array(ga)).length; 0 <= --Me;) Ra[Me] = new Float64Array(me);
    for (Me = te, Ya = 0; 0 <= --Me;) 0 == (re = N(f = (Se = Kt[(_e = Bt[Me]) >> 7])[_e &= 127] - (D = (Da = Kt[(Te = St[Me]) >> 7])[Te &= 127]), M = Se[_e + 128] - (G = Da[Te + 128]), C = Se[_e + 256] - (W = Da[Te + 256]))) && 0 == (re = N(f *= tf, M *= tf, C *= tf)) || (f /= re = C < 0 ? -re : re, M /= re, C /= re), p(f, M, C, D, G, W, Gr, Ra, qa, xa, Ya) == Ya && Ya++;
    for (Nt = null, Me = nt, Oa = !1, Wa = new Int32Array((Ga = new Int32Array(512)).length << 1); 0 <= --Me;) {
      for (Cr = (Xa = Et[et[Ft[Me >> 9][511 & Me]]])[0], Br = Xa[1], Un = Xa[2], me = Ca[Wa[Ga[0] = 0] = Me], Te = 1, De = La[Me], Ne = (Fe = nt) - 1; 0 <= --me;) for (Va = Et[et[Ft[(Ia = De[me]) >> 9][511 & Ia]]], W = Math.abs(C = Cr * (kr = Va[1]) - (er = Va[0]) * Br), Qa = (Ct = (D = Math.abs(f = Br * (Tr = Va[2]) - kr * Un)) > (G = Math.abs(M = Un * er - Tr * Cr)) ? W < D ? -1 : 1 : W < G ? 0 : 1) < 0 ? D : 0 == Ct ? G : W, f /= re = (C < 0 ? -1 : 1) * (fa = N(f, M, C)), M /= re, C /= re, fa = nf * Qa / fa, pe = Fe - (Ee = Me), ve = nt, Ot = Na[Ia]; Ee < ve; Ee += pe, pe = 1) if ((ke = m(Ba, Ct, da = Mt[Ee >> 9][511 & Ee], Ot, Xa, Va, Kt)) < 0 && 0 != (_e = m(Sa, Ct, Ot, da, Va, Xa, Kt)) && o(Ba, Sa, 2147483647 & ke, 2147483647 & _e) > fa) for (Oa = !0, p(f, M, C, (Se = Kt[(_e = F(Ee, Va, Mt, dt, mt, _a, Ta, jt, ut, st, It, Zt, Kt)) >> 7])[_e &= 127], Se[_e + 128], Se[_e + 256], Gr, Ra, qa, xa, Ya) == Ya && Ya++, Te + (ke = (_e = $) - nt + 1) > Wa.length && s(Wa, 0, Wa = new Int32Array(Wa.length + 4096), 0, Te), Wa[Ga[de = Ee == Me ? 0 : Ee - Ne]] = ke << 20 | Te, Wa[Ga[de] = Te++] = Ee, _e - Ne > Ga.length && s(Ga, 0, Ga = new Int32Array(Ga.length + 2048), 0, nt - Ne); nt < _e; Wa[Ga[nt - Ne] = Te++] = nt++) ;
      Pa[Me] = Tt = new Int32Array(Te);
      r:for (me = Fe = 0, ve = 1048575, ke = 1; ;) if (1048575 < (Ne = Wa[me]) && (Wa[me] = ke << 20 | ve, ve = me, me = 1048575 & Ne, Ne = -(ke = Ne >>> 20)), 0 <= (Tt[Fe++] = Ne)) {
        for (; 0 == --ke;) {
          if (1048575 == ve) break r;
          ve = 1048575 & (ke = Wa[me = ve]), ke >>>= 20
        }
        me++
      }
    }
    for (Ga = Wa = null, za = Array((ja = new Int32Array(Me = ga)).length); 0 <= --Me;) za[Me] = new Int32Array(5);
    for (Ce = Ba = Sa = La = Ca = null, _t = Array((vt = new Int32Array($e = J)).length), Ya = h(nt, Ya, Mt, Kt, Gr, Ra, qa, xa, za, ja, Ha = Array(nt), vt), Me = $e; 0 <= --Me;) _t[Me] = new Int32Array(vt[Me]);
    for (Me = nt; 0 <= --Me;) for (me = ~~((De = Ha[Me]).length / 3); 0 <= --me;) _t[Fe = De[me]][--vt[Fe]] = me << 18 | Me;
    for (Me = nt, Ja = new Float64Array((Ka = new Int32Array(4)).length); 0 <= --Me;) for (me = Fe = ~~((De = Ha[Me]).length / 3), Te = De[0], Ea = null; 0 <= --me; Te = De[me]) if (De[Fe + me] < 0) {
      for (null == Ea && (Cr = (Ea = Et[et[Ft[Me >> 9][511 & Me]]])[0], Br = Ea[1], Un = Ea[2]), Ne = (Tt = _t[_e = De[me]]).length, pa = 1, Ka[0] = me << 18 | Me; 0 <= --Ne;) if ((ve = 262143 & (de = Tt[Ne])) != Me && ((Ot = Ha[ve])[((Ee = (de >>>= 18) + (ke = ~~(Ot.length / 3))) - (pe = -1)) % ke] == Te || Ot[de = (Ee - (pe = 1)) % ke] == Te)) {
        for (re = Math.atan2(N(X = Br * (C = (Ea = Et[et[Ft[ve >> 9][511 & ve]]])[2] * pe) - Un * (M = Ea[1] * pe), R = Un * (f = Ea[0] * pe) - Cr * C, Y = Cr * M - Br * f), Cr * f + Br * M + Un * C), (re *= 0 <= X * ((Da = Kt[Te >> 7])[Ee = 127 & Te] - (Se = Kt[_e >> 7])[ke = 127 & _e]) + R * (Da[Ee + 128] - Se[ke + 128]) + Y * (Da[Ee + 256] - Se[ke + 256]) ? -1 : 1) <= -3.141592653589793 && (re += 6.283185307179586), Ee = 0; ++Ee < pa && ((fa = Ja[Ee]) - re >= ef || re - fa < ef && (Ha[262143 & (ke = Ka[Ee])][ke >>> 18] == Te ? pe < 0 && re <= fa : pe < 0 || re <= fa));) ;
        Vt = Ja, (ke = pa++) == (da = Ka).length && (s(Ka, 0, Ka = new Int32Array(Ka.length + 2), 0, Ee), I(Ja, 0, Ja = new Float64Array(Ja.length + 2), 0, Ee)), s(da, Ee, Ka, Ee + 1, ke - Ee), I(Vt, Ee, Ja, Ee + 1, ke - Ee), Ka[Ee] = de << 18 | ve, Ja[Ee] = re
      }
      for (pe = Me, de = 1, ke = me, Ne = Fe, Ot = De; 0 <= --pa; de = 1 - Ct, ke = Ee, Ne = Ia, Ot = da) Ct = (da = Ha[ve = 262143 & (Ee = Ka[pa])])[Ee >>>= 18] == Te ? 1 : 0, da[((Ia = ~~(da.length / 3)) << Ct) + Ee] = de * nt + pe, Ot[(Ne << de) + ke] = Ct * nt + (pe = ve)
    }
    for ($a = new Int32Array((rl = new Int32Array((nl = new Int32Array((Za = new Float64Array(nt)).length)).length)).length), Me = nt; 0 <= --Me;) $a[Me] = -1;
    for (el = new Int32Array((Dt = new Uint8Array((Yt = new Int32Array(Me = nt << 1)).length)).length), tl = al = 0; 0 <= --Me;) if (!Dt[Me]) {
      for (Dt[Yt[Fe = 0] = Me] = !0, me = 1; Fe < me; Fe++) for (el[al + Fe] = de = Yt[Fe], ($a[pe = de % nt] < 0 ? $a : rl)[pe] = tl, Ne = (ke = ~~((De = Ha[pe]).length / 3)) << ~~(de / nt); 0 <= --ke;) Dt[ve = De[Ne + ke]] || (Dt[Yt[me++] = ve] = !0);
      for (ve = (nl[tl] = al) + me, re = 0; al < ve; al++) for (me = 1, Ne = ~~((De = Ha[(Fe = el[al]) % nt]).length / 3), _e = 1 - (~~(Fe / nt) << 1), D = (Se = Kt[(Te = De[0]) >> 7])[Te &= 127], G = Se[Te + 128], W = Se[Te + 256], er = (Se = Kt[(Te = De[1]) >> 7])[Te &= 127], kr = Se[Te + 128], Tr = Se[Te + 256]; ++me < Ne;) re += ((kr - G) * ((Y = (Se = Kt[(Te = De[me]) >> 7])[256 + (Te &= 127)]) - W) - (Tr - W) * ((kr = Se[Te + 128]) - G)) * (D + er + (er = Se[Te])) * _e, Tr = Y;
      Za[tl++] = re / 6
    }
    for (Dt = _t = Ha = null, ol = new Int32Array((fl = new Int32Array((ll = new Int32Array(Me = tl)).length)).length); 0 <= --Me;) ll[fl[Me] = ol[Me] = Me] = -1;
    for (Me = nt; 0 <= --Me;) {
      if ((me = ol[$a[Me]]) != (Fe = ol[rl[Me]])) for (de = me + Fe - (ke = me < Fe ? me : Fe), fl[ke] = fl[ll[fl[ke]] = de], fl[de] = -1; -1 != de; de = ll[de]) ol[de] = ke;
      dt[Me >> 9][511 & Me] = 0
    }
    for (Me = tl; 0 <= --Me;) if (-1 != (Ne = fl[Me])) {
      for (me = Me, re = -Number.MAX_VALUE; Za[me] > re && (re = Za[me], Fe = me), me != Ne; me = ll[me]) ;
      for (me = nl[Fe++] - 1, Ne = Fe == tl ? nt << 1 : nl[Fe]; ++me < Ne;) dt[(ke = (Fe = el[me]) % nt) >> 9][511 & ke] |= 1 + ~~(Fe / nt)
    }
    Ja = Za = null, gl = new Int32Array((hl = new Int32Array(nt)).length), Ka = rl = $a = nl = Yt = el = ll = fl = ol = null;
    r:for (Me = -1, ve = nt; ++Me < ve;) if (0 == dt[me = (gl[Me] = Me) >> 9][Ne = 511 & Me]) {
      for (gl[Me] = -1; ; gl[ve] = -1) {
        if (--ve <= Me) break r;
        if (0 != (Fe = dt[pe = ve >> 9][de = 511 & ve])) break
      }
      Mt[(gl[ve] = Me) >> 9][Ne] = Mt[pe][de], Ft[me][Ne] = Ft[pe][de], kt[me][Ne] = kt[pe][de], pt[me][Ne] = pt[pe][de], dt[me][Ne] = Fe
    }
    for (me = Ie; 0 <= --me;) {
      for (ke = Ne = (De = Pa[me]).length, Fe = 0; 0 <= --ke;) 0 <= (Me = De[ke]) && 0 <= (De[ke] = _e = gl[Me]) && (Fe |= dt[_e >> 9][511 & _e]);
      3 == Fe && s(De, 0, Pa[me + Ie] = new Int32Array(Ne), 0, Ne)
    }
    for (me = Ie, nt = ve; 0 <= --me;) for (ke = (il = Pa[me]).length, yl = Pa[me + Ie]; 0 <= --ke;) if (0 <= (Me = il[ke])) if (1 == (Fe = dt[Ne = Me >> 9][ve = 511 & Me])) null != yl && (yl[ke] = -1); else if (Te = (_e = (De = Mt[Ne][ve]).length) - 1, 3 == Fe) {
      for (null == Mt[pe = nt >> 9] && (pt[pe] = new Int16Array((kt[pe] = new Int16Array((Ft[pe] = new Int16Array((dt[pe] = new Int8Array((Mt[pe] = Array(512)).length)).length)).length)).length)), Mt[pe][de = 511 & nt] = Tt = new Int32Array(De.length); 0 <= --_e;) Tt[Te - _e] = De[_e];
      Ft[pe][de] = Ft[Ne][ve], kt[pe][de] = kt[Ne][ve], pt[pe][de] = pt[Ne][ve], dt[pe][de] = -(dt[Ne][ve] = 1), yl[ke] = nt++
    } else {
      for (_e >>= 1, dt[Ne][ve] = -1; 0 <= --_e;) Ee = De[_e], De[_e] = De[Te - _e], De[Te - _e] = Ee;
      null != yl && (il[ke] = -1)
    }
    for (me = Pa.length; 0 <= --me;) if (null != (De = Pa[me])) {
      if ((_e = De[pe = 0]) < -1) r:for (Me = 0, Ne = -1; ;) if ((De[pe] = _e = De[Me++]) < -1) 0 <= Ne && (De[gl[Ne]] = Te, hl[Ne] = Ee), gl[++Ne] = pe++, Te = Ee = _e; else for (_e < 0 ? Te++ : pe++; 0 == ++Ee;) {
        if (0 == Te ? pe-- : -1 == (De[Fe = gl[Ne]] = Te) && s(De, Fe + 1, De, Fe, --pe - Fe), 0 == Ne) break r;
        Fe = gl[--Ne], 0 == Te && ++De[Fe], Te = De[Fe], Ee = hl[Ne]
      }
      pe < 2 && (Pa[me] = null)
    }
    for (me = Pa.length, ul = nt, Al = new Uint8Array(120); 0 <= --me;) if (null != (De = Pa[me])) {
      for (Me = 0; (_e = De[Me++]) < 0;) ;
      Cr = (Ea = Et[et[Fe = Ft[_e >> 9][511 & _e]]])[0], Br = Ea[1], D = (1 - (W = -Cr) * W / (re = 1 + (Un = Ea[2]) * (ra = Un < 0 ? -1 : 1))) * ra, kr = 1 - (Tr = -Br * ra) * Tr / re, er = (G = Cr * Tr / re) * ra;
      r:for (de = 1, X = at[Fe *= 3], R = lt[Fe], Y = ft[Fe]; ; de = 2) n:for (Me = pe = ke = wl = 0, Ne = -1; ;) if ((De[pe++] = _e = De[Me++]) < 0) 0 <= Ne && (hl[Ne] = Ee), gl[++Ne] = pe - 1, Ee = _e, ke = de; else for (1 == de && e(Mt[_e >> 9][511 & _e], Kt, X, R, Y, D, G, W, er, kr, Tr); 0 == ++Ee;) {
        if (0 == --ke) {
          for (ua = Fe = Ct = gl[Ne] - (Te = -1), wa = Ia = 0, wl = 1; Fe < pe; wa++) for ((_e = De[Fe++]) < 0 ? (ve = wa, Te = _e, _e = De[Fe++]) : 0 == ++Te && (ve = 2147483647), De[ua++] = _e, (sa = Ia + wa) > (ta = Al.length) && function (r, n, e, t, a) {
            var l, f;
            if (l = t + a, (f = 0 - t) < 0) for (; --l >= t;) e[l] = r[l + f]; else for (; t < l; t++) e[t] = r[t + f]
          }(Al, 0, Al = new Uint8Array(sa), 0, ta), sa = -1; ++sa < wa;) Al[Ia++] = ve <= sa;
          for (Te = Ct, ve = 0, sa = ua; ++Te < ua;) e:for (_e = Ct - 1; ++_e < Te; ve++) if (!Al[ve] && 0 <= (xt = De[_e])) {
            for (Fe = (Tt = Mt[xt >> 9][511 & xt]).length, Vt = Mt[(Rt = De[Te]) >> 9][511 & Rt], qn = (Se = Kt[(Pt = Tt[0]) >> 7])[384 + (Pt &= 127)], xn = Se[Pt + 512], Il = (Se = Kt[(Pt = Vt[0]) >> 7])[384 + (Pt &= 127)], cl = Se[Pt + 512], sl = 0; 0 <= --Fe; qn = Rn, xn = Yn) for (Ee = Vt.length, Zn = (Rn = (Se = Kt[(Pt = Tt[Fe]) >> 7])[384 + (Pt &= 127)]) - qn, $n = (Yn = Se[Pt + 512]) - xn, Dn = Il, Gn = cl; 0 <= --Ee; Dn = Wn, Gn = On) if (Math.hypot(Jn = Rn - (Wn = (Se = Kt[(Pt = Vt[Ee]) >> 7])[384 + (Pt &= 127)]), Kn = Yn - (On = Se[Pt + 512])) > Gr && Math.hypot(zn = Dn - qn, Hn = Gn - xn) > Gr && Math.abs(zn * $n - Hn * Zn) < (zn * Zn + Hn * $n) * $l && Math.abs(Jn * $n - Kn * Zn) < (Jn * Zn + Kn * $n) * $l) {
              if (0 < sl++) continue e;
              f = qn, M = xn, Cr = Rn, Br = Yn, Qn = Dn, jn = Gn, Xn = Wn, Vn = On, wa = Fe, Ia = Ee
            }
            if (0 < sl) {
              for (Fe = Tt.length; 0 <= --Fe;) for (Ee = Vt.length, Pt = Tt[Fe]; 0 <= --Ee;) if (Vt[Ee] == Pt) {
                if (Math.hypot((qn = (Se = Kt[Pt >> 7])[384 + (Pt &= 127)]) - f, (xn = Se[Pt + 512]) - M) <= Gr ? Math.hypot(qn - Xn, xn - Vn) > Gr : Math.hypot(qn - Cr, xn - Br) > Gr || Math.hypot(qn - Qn, xn - jn) > Gr) continue e;
                break
              }
              for ((va = Tt.length + Vt.length - (bl = g(f, M, Xn, Vn, Ia, wa, Vt, Tt, Kt)) - (vl = g(Cr, Br, Qn, jn, wa, Ia, Tt, Vt, Kt))) == Tt.length || va == Vt.length ? (ml = wa + Ia - (Ml = va == Tt.length ? wa : Ia) + 2, 3 == (da = (Ot = va == Tt.length ? Tt : Vt) == Tt ? Vt : Tt).length ? Ot[(Ml + ((va == Tt.length ? bl : vl) >> 1)) % Ot.length] = da[ml % 3] : (Ot[Ml] = da[3 & ml], Ot[(Ml + 1) % Ot.length] = da[ml + 1 & 3])) : (s(Tt, Ml = (wa + (bl + 3 >> 1)) % Tt.length, Ot = new Int32Array(va), 0, Fl = ((ml = wa + (3 - vl >> 1)) > Ml ? ml : Tt.length) - Ml), (kl = ml - Ml) <= 0 && (kl += Tt.length, s(Tt, 0, Ot, Fl, ml)), s(Vt, Ml = (Ia + (vl + 3 >> 1)) % Vt.length, Ot, kl, Fl = ((ml = Ia + (3 - bl >> 1)) > Ml ? ml : Vt.length) - Ml), ml <= Ml && s(Vt, 0, Ot, kl + Fl, ml)), Mt[(De[Te] = va = xt + Rt - (ml = Rt < xt ? xt : Rt)) >> 9][511 & va] = Ot, Ml = Te - Ct - 1, Mt[ml >> 9][511 & ml] = null, ml = ua - Ct + (De[_e] = -1), Fl = ve + (kl = Te - _e), sa--, ul--; ++Ml < ml;) Al[Fl += Ml] &= Al[Fl - kl]
            }
          }
          if (1 == Ct) break r;
          if (De[Ct - 1] = Ct - sa, (pe = sa) < ua) e:for (; Ct < ua; Ct++) if (De[Ct] < 0) {
            do {
              if (--ua <= Ct) break e
            } while (De[ua] < 0);
            De[Ct] = De[ua]
          }
        }
        if (0 == Ne) {
          if (0 != wl) break n;
          break r
        }
        Ee = hl[--Ne], ke = de - 1
      }
    }
    if (Al = hl = gl = null, ul < nt) {
      r:for (Me = -1, fe = 0; ++Me < ul;) {
        if (null == (De = Mt[Fe = Me >> 9][Ne = 511 & Me])) {
          do {
            if (--nt <= Me) break r
          } while (null == Mt[pe = nt >> 9][de = 511 & nt]);
          Mt[Fe][Ne] = De = Mt[pe][de], Ft[Fe][Ne] = Ft[pe][de], kt[Fe][Ne] = kt[pe][de], pt[Fe][Ne] = pt[pe][de], dt[Fe][Ne] = dt[pe][de]
        }
        (me = De.length) > fe && (fe = me)
      }
      if (nt = ul, oe < fe) {
        for (_a = Array(fe + 1), Me = fe + 1, me = ha - 2 + (3 * fe >> 1); 0 <= --Me;) _a[Me] = new Int32Array(me);
        for (Ta = Array(Me = 3); 0 <= --Me;) Ta[Me] = new Int32Array(_a.length)
      }
    }
    for (Me = $ = nt, Fe = -1, pl = Array(512); 0 <= --Me; pl[me][511 & Me] = Fe, Fe = Me) null == pl[me = Me >> 9] && (pl[me] = new Int32Array(512));
    r:for (Te = El = 0, Nl = ke = -1, dl = 2, _l = null, De = new Int32Array(ha), Cl = new Int32Array(ha), Tl = Array(256); ; Nl--) {
      for (me = Te, Me = -1; 0 <= me; me = pl[Ia][Ct]) Cl[Fe = ia[Ft[Ia = me >> 9][Ct = 511 & me]]] != Nl && (Cl[Fe] = Nl, Me < 0 ? Me = Fe : De[Ne] = Fe, Ne = Fe);
      for (Fe = 0, De[Ne] = -1, Ne = 2147483647; 0 <= Me; Me = De[Me]) {
        for (me = Te, ve = Ee = _e = 0; 0 <= me; me = pl[Ia][Ct]) ia[Bl = Ft[Ia = me >> 9][Ct = 511 & me]] == Me ? ve++ : (3 == (de = v(Tt = Mt[Ia][Ct], Ll = Et[oa[Me]], Kt)) && (Ee += function (r, n, e, t, a) {
          var l, f, o, h, g, i, y, A, u, w, s, I, c, b, v, M, m, F, k, p, d, E, N, _, T, C, L, B, S, U, X, V, P, q;
          for (f = (q = jr[Fn[t]])[0] * r, o = q[1] * r, h = q[2] * r, g = e[0], i = e[1], y = e[2], A = e[3], V = 0; ; V++) if (Math.abs(_ = (I = (l = a[(X = n[V]) >> 7])[X &= 127]) * g + (c = l[X + 128]) * i + (b = l[X + 256]) * y + A) > Gr) {
            L = _ / Math.abs(_);
            break
          }
          for (P = V++ + n.length, T = U = 0; ; V++) {
            if (B = Math.abs(_ = (v = (l = a[(X = n[V % n.length]) >> 7])[X &= 127]) * g + (M = l[X + 128]) * i + (m = l[X + 256]) * y + A) > Gr ? _ / Math.abs(_) : 0, 0 == T) 0 == B ? T = 1 : B != L && U++; else if (1 == T) 0 != B && B != C ? (U++, T = 0) : (T = ((k = c - w) * (N = m - b) - (E = M - c) * (p = b - s)) * f + (p * (d = v - I) - N * (F = I - u)) * o + (F * E - d * k) * h < 0 ? 8 : 2, 0 == B ? S = C : (U += T >> 2, T = 0)); else {
              if (0 == B) {
                I = v, c = M, b = m;
                continue
              }
              U += B != S ? 1 : T >> 2, T = 0
            }
            if (P <= V) return U >> 1;
            u = I, w = c, s = b, C = L, I = v, c = M, b = m, L = B
          }
        }(dt[Ia][Ct], Tt, Ll, Bl, Kt)), _e |= de);
        (0 != ve || 3 == _e) && Ee <= Ne && (Ee < Ne || Fe < ve) && (pe = Me, Ne = Ee, Fe = ve)
      }
      for (null != _l && (_l[dl] = El), Ll = Et[oa[((Tl[Ia = El >> 8] = null == Tl[Ia] ? Array(256) : Tl[Ia])[255 & El++] = _l = new Int32Array(Fe + 3))[0] = pe]], Fe = Te, _e = Te = -1, ve = 3; 0 <= (me = Fe);) if (Fe = pl[Ia = me >> 9][Ct = 511 & me], ia[Ft[Ia][Ct]] == pe) _l[ve++] = me; else {
        if (3 == (de = v(Tt = Mt[Ia][Ct], Ll, Kt))) {
          for (Oa = !0, F(me, Ll, Mt, dt, mt, _a, Ta, jt, ut, st, It, Zt, Kt), de = v(Mt[Ia][Ct], Ll, Kt), Ee = nt, nt = $; Ee < nt; pl[sa][511 & Ee] = Fe, Fe = Ee++) null == pl[sa = Ee >> 9] && (pl[sa] = new Int32Array(512));
          pl[Ia][Ct] = Fe
        }
        1 == de ? (_e < 0 ? _e = me : pl[Ne >> 9][511 & Ne] = me, Ne = me) : (Te < 0 ? Te = me : pl[Me >> 9][511 & Me] = me, Me = me)
      }
      for (0 <= Te && (pl[Me >> 9][511 & Me] = -1), 0 <= _e && (pl[Ne >> 9][511 & Ne] = -1), _l[1] = Te, _l[2] = _e; ;) {
        if (1 == (dl = 3 - dl) && ++ke >= El) break r;
        if (0 <= (Te = (_l = Tl[ke >> 8][255 & ke])[dl])) break
      }
    }
    for (me = El + 256 - ((Me = El + 255 >> 8) << 8), An = Array(El); 0 <= --Me; me = 256) w(Tl[Me], 0, An, Me << 8, me);
    if (h($ = nt, Ya, Mt, Kt, Gr, Ra, qa, xa, za, ja, null, null), za = _a = Ta = Pa = Zt = pl = ja = xa = qa = Ra = null, ($e = J) > ee) {
      for (vt = new Int32Array(Me = $e); --Me >= Z;) vt[Me] = -1;
      for (Me = Z; 0 <= --Me;) vt[Me] = Me;
      for (Me = nt; 0 <= --Me;) for (me = (De = Mt[Me >> 9][511 & Me]).length; 0 <= --me;) vt[Fe = De[me]] = Fe;
      r:for (Me = Z - 1, Te = $e; ++Me < Te;) if (vt[Me] < 0) {
        do {
          if (--Te <= Me) break r
        } while (vt[Te] < 0);
        vt[Te] = Me
      }
      for (it = $r = new Float64Array((gt = Zr = new Float64Array((ht = Kr = new Float64Array((Jr = new Float64Array((Hr = new Float64Array(Te)).length)).length)).length)).length), Me = $e; 0 <= --Me;) 0 <= (Fe = vt[Me]) && (ht[Fe] = (Se = Kt[Me >> 7])[pe = 127 & Me], gt[Fe] = Se[pe + 128], it[Fe] = Se[pe + 256]);
      for ($e = J = Te, Me = nt; 0 <= --Me;) for (me = (De = Mt[Me >> 9][511 & Me]).length; 0 <= --me;) De[me] = vt[De[me]]
    }
    for (vt = It = oa = ia = Cl = Kt = null, Me = nt, De = new Int32Array(rt), Sl = Array((We = new Int32Array(Ie)).length); 0 <= --Me;) De[Ft[me = Me >> 9][Fe = 511 & Me]]++, We[kt[me][Fe]]++;
    for (Me = rt; 0 <= --Me;) tt[Me] = new Int32Array(De[Me]), De[Me] = 0;
    for (Me = Ie; 0 <= --Me;) Sl[Me] = new Int32Array(We[Me]), We[Me] = 0;
    for (Nn = Array(Me = nt), fe = 0; 0 <= --Me;) tt[me = Ft[Ne = Me >> 9][ke = 511 & Me]][De[me]++] = Me, Sl[Fe = kt[Ne][ke]][We[Fe]++] = Me, Nn[Me] = (Fe = Qe[me]) < 0 ? _b[31 & -Fe] : je[Fe], (Fe = Mt[Ne][ke].length) > fe && (fe = Fe);
    for (me = nt + 512 - ((Me = nt + 511 >> 9) << 9), vn = new Int8Array((gn = Array(nt)).length); 0 <= --Me; me = 512) w(Mt[Me], 0, gn, Fe = Me << 9, me), function (r, n, e, t, a) {
      var l, f;
      if (l = t + a, (f = 0 - t) < 0) for (; --l >= t;) e[l] = r[l + f]; else for (; t < l; t++) e[t] = r[t + f]
    }(dt[Me], 0, vn, Fe, me);
    for (dt = Mt = Tl = null, fn = Array((on = Array(nt)).length), Ye = new Int32Array((Re = new Int32Array((Ge = new Int32Array(fe)).length + 1)).length), Oa && (We = new Int32Array(fe)), Ul = yn = Array(nt), Xl = Hr, Vl = Jr, Pl = new Int32Array(0), ql = new Int32Array(0), Ee = Ie; 0 <= --Ee;) if (0 != (xl = Sl[Ee]).length) {
      for (re = 1 + (Un = (Vt = Et[et[Bl = Ft[(Me = xl[0]) >> 9][511 & Me]]])[2]) * (ra = Un < 0 ? -1 : 1), D = (1 - (W = -Vt[0]) * W / re) * ra, kr = 1 - (Tr = -Vt[1] * ra) * Tr / re, er = (G = -W * Tr / re) * ra, X = at[Fe = 3 * Bl], R = lt[Fe], Y = ft[Fe], me = (Ot = Na[Ee]).length; 0 <= --me;) Xl[Te = Ot[me]] = D * (f = ht[Te] - X) + G * (M = gt[Te] - R) + W * (C = it[Te] - Y), Vl[Te] = er * f + kr * M + Tr * C;
      for (Me = xl.length; 0 <= --Me;) {
        for (me = (Ea = gn[ve = xl[Me]]).length; 0 <= --me;) Xl[Te = Ea[me]] = D * (f = ht[Te] - X) + G * (M = gt[Te] - R) + W * (C = it[Te] - Y), Vl[Te] = er * f + kr * M + Tr * C;
        for (De = Re, al = Ot.length - 1, da = Array(0), qn = Xl[Te = Ea[Gl = de = (1 - (_e = vn[ve]) >> 1) * ((pe = Ea.length) - 1)]], xn = Vl[Te], Yl = Dl = -1, Rl = me = Fe = ke = 0; 0 <= --pe;) {
          for (re = Math.hypot(Zn = (Rn = Xl[Pt = Ea[Wl = de + _e * pe]]) - qn, $n = (Yn = Vl[Pt]) - xn), Ne = al, Dn = Xl[qt = Ot[0]], Gn = Vl[qt]; Wn = Xl[Hl = Ot[Ne]], On = Vl[Hl], na = ea = Number.MAX_VALUE, (Hl == Pt && qt == Te || (na = Math.hypot(zn = Wn - qn, Hn = On - xn)) > Gr && (ea = Math.hypot(Jn = Rn - Dn, Kn = Yn - Gn)) > Gr && Math.abs(zn * $n - Hn * Zn) < (zn * Zn + Hn * $n) * $l && Math.abs(Jn * $n - Kn * Zn) < (Jn * Zn + Kn * $n) * $l) && ((Jl = ea < re ? qt : Te) != Te || 0 != ke && Ge[ke - 1] == Gl || (Ge[ke++] = Gl), (Kl = na < re ? Hl : Pt) != Pt || 0 != ke && Ge[0] == Wl || (Ge[ke++] = Wl), 0 != me && Jl == Dl || (0 == me ? (Yl = Jl, jl = Gl) : (De == Re ? (Fe = me, De = Ye, zl = Ql) : (Pl = c(Pl, da.length, Ol, 1), ql = c(ql, da.length, Ql, 1), da = b(da, Tt = new Int32Array(me)), s(De, 0, Tt, 0, me), Rl += me), Ol = Gl), De[0] = Jl, me = 1), De[me++] = Dl = Kl, Ql = Gl), 0 != Ne; Ne--) qt = Hl, Dn = Wn, Gn = On;
          Te = Pt, Gl = Wl, qn = Rn, xn = Yn
        }
        if (0 <= Yl) if (Yl != Dl ? (De == Re ? (Fe = me, zl = Ql) : (Pl = c(Pl, da.length, Ol, 1), ql = c(ql, da.length, Ql, 1), da = b(da, Tt = new Int32Array(me)), s(Ye, 0, Tt, 0, me), Rl += me), Pl = c(Pl, da.length, jl, 1), ql = c(ql, da.length, zl, 1), fn[ve] = da = b(da, Tt = new Int32Array(Fe)), s(Re, 0, Tt, 0, Fe), Rl += Fe) : 0 == Fe ? Rl = Ea.length : (Pl = c(Pl, da.length, Ol, 1), ql = c(ql, da.length, zl, 1), fn[ve] = da = b(da, Tt = new Int32Array(pe = --me + Fe)), s(Ye, 0, Tt, 0, me), s(Re, 0, Tt, me, Fe), Rl += pe), 0 == da.length) on[ve] = Array(0); else for (on[ve] = Zl = Array(da.length), Fe = -1, Ne = da.length - 1, _e = Ea.length - _e; ++Fe < da.length; Ne = Fe) {
          if (Gl = ql[Ne], Re[0] = Pt = (Tt = da[Ne])[Tt.length - (me = 1)], Wl = Pl[Fe], qt = da[Fe][0], Gl == Wl && Math.hypot((qn = Xl[Yl = Ea[Gl]]) - Xl[Pt], (xn = Vl[Yl]) - Vl[Pt]) < Math.hypot(qn - Xl[qt], xn - Vl[qt]) && (Re[me++] = qt), 1 == me) {
            for (Pt != (Te = Ea[Ol = (Gl + _e) % Ea.length]) && Math.hypot(Xl[Te] - Xl[Pt], Vl[Te] - Vl[Pt]) > Gr && (Re[me++] = Te); Ol != Wl;) Re[me++] = Te = Ea[Ol = (Ol + _e) % Ea.length];
            Te != qt && Math.hypot(Xl[qt] - Xl[Te], Vl[qt] - Vl[Te]) > Gr && (Re[me++] = qt)
          }
          s(Re, 0, Zl[Fe] = new Int32Array(me), 0, me)
        } else fn[ve] = da = Array(0);
        if (ke == Ea.length && Rl == Ea.length) Ul[ve] = Ea; else {
          if (s(Ea, 0, We, 0, me = Ea.length), 0 < ke) {
            for (; 0 < ke;) We[Ge[--ke]] = -1;
            for (pe = me = 0; pe < Ea.length;) 0 <= (We[me] = We[pe++]) && me++
          }
          for (s(We, 0, Ul[ve] = il = new Int32Array(Rl + me), 0, me), pe = 0; pe < da.length; me += Tt.length) s(Tt = da[pe++], 0, il, me, Tt.length)
        }
      }
    }
    for (Sl = mt = je = ze = Fn = Re = Ye = Ge = We = Pl = ql = Qe = jr = null, sn = Array(Me = 2), me = (Fe = ae < fe ? fe : ae) > oe ? Fe : oe; 0 <= --Me;) sn[Me] = new Int32Array(me);
    for (In = Array(Me = 2), me = (mn = new Int32Array($e)).length; 0 <= --Me;) In[Me] = new Int32Array(me);
    pn = new Int32Array((Mn = new Int8Array(Ie < nt ? nt : Ie)).length), cn = new Uint8Array(nt), En = new Int32Array(El), Sr = Ur = Xr = !1, n.addEventListener("contextmenu", T, !1), n.addEventListener("mousedown", L, !1), n.addEventListener("touchstart", B, !1), document.addEventListener("mouseup", S, !1), document.addEventListener("touchend", U, !1), document.addEventListener("mousemove", V, !1), document.addEventListener("touchmove", P, !1), document.addEventListener("mouseleave", q, !1), Lr = 0, x(), O()
  }())
}

window.addEventListener("load", _n, !1);
