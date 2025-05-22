const {
  SvelteComponent: m,
  append_hydration: _,
  attr: g,
  children: v,
  claim_element: y,
  claim_text: f,
  detach: o,
  element: b,
  init: w,
  insert_hydration: E,
  noop: h,
  safe_not_equal: q,
  text: u,
  toggle_class: d
} = window.__gradio__svelte__internal;
function C(a) {
  let e, n, i, s, c, r;
  return {
    c() {
      e = b("div"), n = u("["), i = u(
        /*min*/
        a[2]
      ), s = u(", "), c = u(
        /*max*/
        a[3]
      ), r = u("]"), this.h();
    },
    l(l) {
      e = y(l, "DIV", { class: !0 });
      var t = v(e);
      n = f(t, "["), i = f(
        t,
        /*min*/
        a[2]
      ), s = f(t, ", "), c = f(
        t,
        /*max*/
        a[3]
      ), r = f(t, "]"), t.forEach(o), this.h();
    },
    h() {
      g(e, "class", "svelte-1gecy8w"), d(
        e,
        "table",
        /*type*/
        a[0] === "table"
      ), d(
        e,
        "gallery",
        /*type*/
        a[0] === "gallery"
      ), d(
        e,
        "selected",
        /*selected*/
        a[1]
      );
    },
    m(l, t) {
      E(l, e, t), _(e, n), _(e, i), _(e, s), _(e, c), _(e, r);
    },
    p(l, [t]) {
      t & /*type*/
      1 && d(
        e,
        "table",
        /*type*/
        l[0] === "table"
      ), t & /*type*/
      1 && d(
        e,
        "gallery",
        /*type*/
        l[0] === "gallery"
      ), t & /*selected*/
      2 && d(
        e,
        "selected",
        /*selected*/
        l[1]
      );
    },
    i: h,
    o: h,
    d(l) {
      l && o(e);
    }
  };
}
function D(a, e, n) {
  let { value: i } = e, { type: s } = e, { selected: c = !1 } = e, [r, l] = i;
  return a.$$set = (t) => {
    "value" in t && n(4, i = t.value), "type" in t && n(0, s = t.type), "selected" in t && n(1, c = t.selected);
  }, [s, c, r, l, i];
}
class I extends m {
  constructor(e) {
    super(), w(this, e, D, C, q, { value: 4, type: 0, selected: 1 });
  }
}
export {
  I as default
};
