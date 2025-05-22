var Ud = Object.defineProperty;
var sl = (n) => {
  throw TypeError(n);
};
var Gd = (n, e, t) => e in n ? Ud(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var qe = (n, e, t) => Gd(n, typeof e != "symbol" ? e + "" : e, t), jd = (n, e, t) => e.has(n) || sl("Cannot " + t);
var ll = (n, e, t) => e.has(n) ? sl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var ea = (n, e, t) => (jd(n, e, "access private method"), t);
const {
  SvelteComponent: Vd,
  assign: Wd,
  children: Xd,
  claim_element: Yd,
  create_slot: $d,
  detach: ol,
  element: Zd,
  get_all_dirty_from_scope: Kd,
  get_slot_changes: Qd,
  get_spread_update: Jd,
  init: eh,
  insert_hydration: th,
  safe_not_equal: rh,
  set_dynamic_element_data: cl,
  set_style: ut,
  toggle_class: qt,
  transition_in: I1,
  transition_out: R1,
  update_slot_base: nh
} = window.__gradio__svelte__internal;
function ah(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[22].default
  ), i = $d(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    { "data-testid": (
      /*test_id*/
      n[9]
    ) },
    { id: (
      /*elem_id*/
      n[4]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[5].join(" ") + " svelte-1ezsyiy"
    }
  ], l = {};
  for (let s = 0; s < u.length; s += 1)
    l = Wd(l, u[s]);
  return {
    c() {
      e = Zd(
        /*tag*/
        n[18]
      ), i && i.c(), this.h();
    },
    l(s) {
      e = Yd(
        s,
        /*tag*/
        (n[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var o = Xd(e);
      i && i.l(o), o.forEach(ol), this.h();
    },
    h() {
      cl(
        /*tag*/
        n[18]
      )(e, l), qt(
        e,
        "hidden",
        /*visible*/
        n[12] === !1
      ), qt(
        e,
        "padded",
        /*padding*/
        n[8]
      ), qt(
        e,
        "flex",
        /*flex*/
        n[17]
      ), qt(
        e,
        "border_focus",
        /*border_mode*/
        n[7] === "focus"
      ), qt(
        e,
        "border_contrast",
        /*border_mode*/
        n[7] === "contrast"
      ), qt(e, "hide-container", !/*explicit_call*/
      n[10] && !/*container*/
      n[11]), ut(
        e,
        "height",
        /*get_dimension*/
        n[19](
          /*height*/
          n[0]
        )
      ), ut(
        e,
        "min-height",
        /*get_dimension*/
        n[19](
          /*min_height*/
          n[1]
        )
      ), ut(
        e,
        "max-height",
        /*get_dimension*/
        n[19](
          /*max_height*/
          n[2]
        )
      ), ut(e, "width", typeof /*width*/
      n[3] == "number" ? `calc(min(${/*width*/
      n[3]}px, 100%))` : (
        /*get_dimension*/
        n[19](
          /*width*/
          n[3]
        )
      )), ut(
        e,
        "border-style",
        /*variant*/
        n[6]
      ), ut(
        e,
        "overflow",
        /*allow_overflow*/
        n[13] ? (
          /*overflow_behavior*/
          n[14]
        ) : "hidden"
      ), ut(
        e,
        "flex-grow",
        /*scale*/
        n[15]
      ), ut(e, "min-width", `calc(min(${/*min_width*/
      n[16]}px, 100%))`), ut(e, "border-width", "var(--block-border-width)");
    },
    m(s, o) {
      th(s, e, o), i && i.m(e, null), r = !0;
    },
    p(s, o) {
      i && i.p && (!r || o & /*$$scope*/
      2097152) && nh(
        i,
        a,
        s,
        /*$$scope*/
        s[21],
        r ? Qd(
          a,
          /*$$scope*/
          s[21],
          o,
          null
        ) : Kd(
          /*$$scope*/
          s[21]
        ),
        null
      ), cl(
        /*tag*/
        s[18]
      )(e, l = Jd(u, [
        (!r || o & /*test_id*/
        512) && { "data-testid": (
          /*test_id*/
          s[9]
        ) },
        (!r || o & /*elem_id*/
        16) && { id: (
          /*elem_id*/
          s[4]
        ) },
        (!r || o & /*elem_classes*/
        32 && t !== (t = "block " + /*elem_classes*/
        s[5].join(" ") + " svelte-1ezsyiy")) && { class: t }
      ])), qt(
        e,
        "hidden",
        /*visible*/
        s[12] === !1
      ), qt(
        e,
        "padded",
        /*padding*/
        s[8]
      ), qt(
        e,
        "flex",
        /*flex*/
        s[17]
      ), qt(
        e,
        "border_focus",
        /*border_mode*/
        s[7] === "focus"
      ), qt(
        e,
        "border_contrast",
        /*border_mode*/
        s[7] === "contrast"
      ), qt(e, "hide-container", !/*explicit_call*/
      s[10] && !/*container*/
      s[11]), o & /*height*/
      1 && ut(
        e,
        "height",
        /*get_dimension*/
        s[19](
          /*height*/
          s[0]
        )
      ), o & /*min_height*/
      2 && ut(
        e,
        "min-height",
        /*get_dimension*/
        s[19](
          /*min_height*/
          s[1]
        )
      ), o & /*max_height*/
      4 && ut(
        e,
        "max-height",
        /*get_dimension*/
        s[19](
          /*max_height*/
          s[2]
        )
      ), o & /*width*/
      8 && ut(e, "width", typeof /*width*/
      s[3] == "number" ? `calc(min(${/*width*/
      s[3]}px, 100%))` : (
        /*get_dimension*/
        s[19](
          /*width*/
          s[3]
        )
      )), o & /*variant*/
      64 && ut(
        e,
        "border-style",
        /*variant*/
        s[6]
      ), o & /*allow_overflow, overflow_behavior*/
      24576 && ut(
        e,
        "overflow",
        /*allow_overflow*/
        s[13] ? (
          /*overflow_behavior*/
          s[14]
        ) : "hidden"
      ), o & /*scale*/
      32768 && ut(
        e,
        "flex-grow",
        /*scale*/
        s[15]
      ), o & /*min_width*/
      65536 && ut(e, "min-width", `calc(min(${/*min_width*/
      s[16]}px, 100%))`);
    },
    i(s) {
      r || (I1(i, s), r = !0);
    },
    o(s) {
      R1(i, s), r = !1;
    },
    d(s) {
      s && ol(e), i && i.d(s);
    }
  };
}
function ih(n) {
  let e, t = (
    /*tag*/
    n[18] && ah(n)
  );
  return {
    c() {
      t && t.c();
    },
    l(r) {
      t && t.l(r);
    },
    m(r, a) {
      t && t.m(r, a), e = !0;
    },
    p(r, [a]) {
      /*tag*/
      r[18] && t.p(r, a);
    },
    i(r) {
      e || (I1(t, r), e = !0);
    },
    o(r) {
      R1(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function uh(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: u = void 0 } = e, { max_height: l = void 0 } = e, { width: s = void 0 } = e, { elem_id: o = "" } = e, { elem_classes: h = [] } = e, { variant: p = "solid" } = e, { border_mode: f = "base" } = e, { padding: m = !0 } = e, { type: D = "normal" } = e, { test_id: _ = void 0 } = e, { explicit_call: w = !1 } = e, { container: T = !0 } = e, { visible: x = !0 } = e, { allow_overflow: y = !0 } = e, { overflow_behavior: S = "auto" } = e, { scale: F = null } = e, { min_width: L = 0 } = e, { flex: I = !1 } = e, U = D === "fieldset" ? "fieldset" : "div";
  const z = (B) => {
    if (B !== void 0) {
      if (typeof B == "number")
        return B + "px";
      if (typeof B == "string")
        return B;
    }
  };
  return n.$$set = (B) => {
    "height" in B && t(0, i = B.height), "min_height" in B && t(1, u = B.min_height), "max_height" in B && t(2, l = B.max_height), "width" in B && t(3, s = B.width), "elem_id" in B && t(4, o = B.elem_id), "elem_classes" in B && t(5, h = B.elem_classes), "variant" in B && t(6, p = B.variant), "border_mode" in B && t(7, f = B.border_mode), "padding" in B && t(8, m = B.padding), "type" in B && t(20, D = B.type), "test_id" in B && t(9, _ = B.test_id), "explicit_call" in B && t(10, w = B.explicit_call), "container" in B && t(11, T = B.container), "visible" in B && t(12, x = B.visible), "allow_overflow" in B && t(13, y = B.allow_overflow), "overflow_behavior" in B && t(14, S = B.overflow_behavior), "scale" in B && t(15, F = B.scale), "min_width" in B && t(16, L = B.min_width), "flex" in B && t(17, I = B.flex), "$$scope" in B && t(21, a = B.$$scope);
  }, [
    i,
    u,
    l,
    s,
    o,
    h,
    p,
    f,
    m,
    _,
    w,
    T,
    x,
    y,
    S,
    F,
    L,
    I,
    U,
    z,
    D,
    a,
    r
  ];
}
class sh extends Vd {
  constructor(e) {
    super(), eh(this, e, uh, ih, rh, {
      height: 0,
      min_height: 1,
      max_height: 2,
      width: 3,
      elem_id: 4,
      elem_classes: 5,
      variant: 6,
      border_mode: 7,
      padding: 8,
      type: 20,
      test_id: 9,
      explicit_call: 10,
      container: 11,
      visible: 12,
      allow_overflow: 13,
      overflow_behavior: 14,
      scale: 15,
      min_width: 16,
      flex: 17
    });
  }
}
const lh = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], fl = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
lh.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: fl[e][t],
      secondary: fl[e][r]
    }
  }),
  {}
);
class Ot {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, r) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Ot(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Xt {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Xt(t, Ot.range(this, e));
  }
}
class K {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var r = "KaTeX parse error: " + e, a, i, u = t && t.loc;
    if (u && u.start <= u.end) {
      var l = u.lexer.input;
      a = u.start, i = u.end, a === l.length ? r += " at end of input: " : r += " at position " + (a + 1) + ": ";
      var s = l.slice(a, i).replace(/[^]/g, "$&̲"), o;
      a > 15 ? o = "…" + l.slice(a - 15, a) : o = l.slice(0, a);
      var h;
      i + 15 < l.length ? h = l.slice(i, i + 15) + "…" : h = l.slice(i), r += o + s + h;
    }
    var p = new Error(r);
    return p.name = "ParseError", p.__proto__ = K.prototype, p.position = a, a != null && i != null && (p.length = i - a), p.rawMessage = e, p;
  }
}
K.prototype.__proto__ = Error.prototype;
var oh = function(e, t) {
  return e.indexOf(t) !== -1;
}, ch = function(e, t) {
  return e === void 0 ? t : e;
}, fh = /([A-Z])/g, dh = function(e) {
  return e.replace(fh, "-$1").toLowerCase();
}, hh = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, mh = /[&><"']/g;
function ph(n) {
  return String(n).replace(mh, (e) => hh[e]);
}
var L1 = function n(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? n(e.body[0]) : e : e.type === "font" ? n(e.body) : e;
}, gh = function(e) {
  var t = L1(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, bh = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, vh = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, le = {
  contains: oh,
  deflt: ch,
  escape: ph,
  hyphenate: dh,
  getBaseElem: L1,
  isCharacterBox: gh,
  protocolFromUrl: vh
}, Ra = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (n) => "#" + n
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (n, e) => (e.push(n), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (n) => Math.max(0, n),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (n) => Math.max(0, n),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (n) => Math.max(0, n),
    cli: "-e, --max-expand <n>",
    cliProcessor: (n) => n === "Infinity" ? 1 / 0 : parseInt(n)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function yh(n) {
  if (n.default)
    return n.default;
  var e = n.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class ps {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in Ra)
      if (Ra.hasOwnProperty(t)) {
        var r = Ra[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : yh(r);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, r) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(e, t, r)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new K("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, r) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, t, r);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = le.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var r = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!r;
  }
}
class X0 {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return y0[wh[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return y0[xh[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return y0[Ah[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return y0[Sh[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return y0[Dh[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return y0[Eh[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var gs = 0, $a = 1, Fr = 2, P0 = 3, In = 4, jt = 5, Nr = 6, ht = 7, y0 = [new X0(gs, 0, !1), new X0($a, 0, !0), new X0(Fr, 1, !1), new X0(P0, 1, !0), new X0(In, 2, !1), new X0(jt, 2, !0), new X0(Nr, 3, !1), new X0(ht, 3, !0)], wh = [In, jt, In, jt, Nr, ht, Nr, ht], xh = [jt, jt, jt, jt, ht, ht, ht, ht], Ah = [Fr, P0, In, jt, Nr, ht, Nr, ht], Sh = [P0, P0, jt, jt, ht, ht, ht, ht], Dh = [$a, $a, P0, P0, jt, jt, ht, ht], Eh = [gs, $a, Fr, P0, Fr, P0, Fr, P0], de = {
  DISPLAY: y0[gs],
  TEXT: y0[Fr],
  SCRIPT: y0[In],
  SCRIPTSCRIPT: y0[Nr]
}, wu = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function kh(n) {
  for (var e = 0; e < wu.length; e++)
    for (var t = wu[e], r = 0; r < t.blocks.length; r++) {
      var a = t.blocks[r];
      if (n >= a[0] && n <= a[1])
        return t.name;
    }
  return null;
}
var La = [];
wu.forEach((n) => n.blocks.forEach((e) => La.push(...e)));
function B1(n) {
  for (var e = 0; e < La.length; e += 2)
    if (n >= La[e] && n <= La[e + 1])
      return !0;
  return !1;
}
var Sr = 80, _h = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Th = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Ch = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Fh = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Mh = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Nh = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Oh = function(e, t, r) {
  var a = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Ih = function(e, t, r) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = _h(t, Sr);
      break;
    case "sqrtSize1":
      a = Th(t, Sr);
      break;
    case "sqrtSize2":
      a = Ch(t, Sr);
      break;
    case "sqrtSize3":
      a = Fh(t, Sr);
      break;
    case "sqrtSize4":
      a = Mh(t, Sr);
      break;
    case "sqrtTall":
      a = Oh(t, Sr, r);
  }
  return a;
}, Rh = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, dl = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, Lh = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class jn {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return le.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var w0 = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, ta = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, hl = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function Bh(n, e) {
  w0[n] = e;
}
function bs(n, e, t) {
  if (!w0[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = n.charCodeAt(0), a = w0[e][r];
  if (!a && n[0] in hl && (r = hl[n[0]].charCodeAt(0), a = w0[e][r]), !a && t === "text" && B1(r) && (a = w0[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var zi = {};
function zh(n) {
  var e;
  if (n >= 5 ? e = 0 : n >= 3 ? e = 1 : e = 2, !zi[e]) {
    var t = zi[e] = {
      cssEmPerMu: ta.quad[e] / 18
    };
    for (var r in ta)
      ta.hasOwnProperty(r) && (t[r] = ta[r][e]);
  }
  return zi[e];
}
var Ph = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], ml = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], pl = function(e, t) {
  return t.size < 2 ? e : Ph[e - 1][t.size - 1];
};
class z0 {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || z0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = ml[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
    return new z0(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: pl(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: ml[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = pl(z0.BASESIZE, e);
    return this.size === t && this.textSize === z0.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== z0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + z0.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = zh(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
z0.BASESIZE = 6;
var xu = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, qh = {
  ex: !0,
  em: !0,
  mu: !0
}, z1 = function(e) {
  return typeof e != "string" && (e = e.unit), e in xu || e in qh || e === "ex";
}, Ve = function(e, t) {
  var r;
  if (e.unit in xu)
    r = xu[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new K("Invalid unit: '" + e.unit + "'");
    a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, J = function(e) {
  return +e.toFixed(4) + "em";
}, er = function(e) {
  return e.filter((t) => t).join(" ");
}, P1 = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, q1 = function(e) {
  var t = document.createElement(e);
  t.className = er(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, H1 = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + le.escape(er(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += le.hyphenate(a) + ":" + this.style[a] + ";");
  r && (t += ' style="' + le.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + le.escape(this.attributes[i]) + '"');
  t += ">";
  for (var u = 0; u < this.children.length; u++)
    t += this.children[u].toMarkup();
  return t += "</" + e + ">", t;
};
class Vn {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, P1.call(this, e, r, a), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return le.contains(this.classes, e);
  }
  toNode() {
    return q1.call(this, "span");
  }
  toMarkup() {
    return H1.call(this, "span");
  }
}
class vs {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, P1.call(this, t, a), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return le.contains(this.classes, e);
  }
  toNode() {
    return q1.call(this, "a");
  }
  toMarkup() {
    return H1.call(this, "a");
  }
}
class Hh {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return le.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + le.escape(this.src) + '"' + (' alt="' + le.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += le.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + le.escape(t) + '"'), e += "'/>", e;
  }
}
var Uh = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Yt {
  constructor(e, t, r, a, i, u, l, s) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = u || 0, this.classes = l || [], this.style = s || {}, this.maxFontSize = 0;
    var o = kh(this.text.charCodeAt(0));
    o && this.classes.push(o + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Uh[this.text]);
  }
  hasClass(e) {
    return le.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = J(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = er(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += le.escape(er(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += le.hyphenate(a) + ":" + this.style[a] + ";");
    r && (e = !0, t += ' style="' + le.escape(r) + '"');
    var i = le.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class H0 {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + le.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class tr {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", dl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + le.escape(this.alternate) + '"/>' : '<path d="' + le.escape(dl[this.pathName]) + '"/>';
  }
}
class Au {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + le.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function gl(n) {
  if (n instanceof Yt)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function Gh(n) {
  if (n instanceof Vn)
    return n;
  throw new Error("Expected span<HtmlDomNode> but got " + String(n) + ".");
}
var jh = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, Vh = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, Pe = {
  math: {},
  text: {}
};
function c(n, e, t, r, a, i) {
  Pe[n][a] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (Pe[n][r] = Pe[n][a]);
}
var d = "math", X = "text", g = "main", A = "ams", Ue = "accent-token", ne = "bin", gt = "close", zr = "inner", fe = "mathord", Je = "op-token", Pt = "open", di = "punct", E = "rel", W0 = "spacing", C = "textord";
c(d, g, E, "≡", "\\equiv", !0);
c(d, g, E, "≺", "\\prec", !0);
c(d, g, E, "≻", "\\succ", !0);
c(d, g, E, "∼", "\\sim", !0);
c(d, g, E, "⊥", "\\perp");
c(d, g, E, "⪯", "\\preceq", !0);
c(d, g, E, "⪰", "\\succeq", !0);
c(d, g, E, "≃", "\\simeq", !0);
c(d, g, E, "∣", "\\mid", !0);
c(d, g, E, "≪", "\\ll", !0);
c(d, g, E, "≫", "\\gg", !0);
c(d, g, E, "≍", "\\asymp", !0);
c(d, g, E, "∥", "\\parallel");
c(d, g, E, "⋈", "\\bowtie", !0);
c(d, g, E, "⌣", "\\smile", !0);
c(d, g, E, "⊑", "\\sqsubseteq", !0);
c(d, g, E, "⊒", "\\sqsupseteq", !0);
c(d, g, E, "≐", "\\doteq", !0);
c(d, g, E, "⌢", "\\frown", !0);
c(d, g, E, "∋", "\\ni", !0);
c(d, g, E, "∝", "\\propto", !0);
c(d, g, E, "⊢", "\\vdash", !0);
c(d, g, E, "⊣", "\\dashv", !0);
c(d, g, E, "∋", "\\owns");
c(d, g, di, ".", "\\ldotp");
c(d, g, di, "⋅", "\\cdotp");
c(d, g, C, "#", "\\#");
c(X, g, C, "#", "\\#");
c(d, g, C, "&", "\\&");
c(X, g, C, "&", "\\&");
c(d, g, C, "ℵ", "\\aleph", !0);
c(d, g, C, "∀", "\\forall", !0);
c(d, g, C, "ℏ", "\\hbar", !0);
c(d, g, C, "∃", "\\exists", !0);
c(d, g, C, "∇", "\\nabla", !0);
c(d, g, C, "♭", "\\flat", !0);
c(d, g, C, "ℓ", "\\ell", !0);
c(d, g, C, "♮", "\\natural", !0);
c(d, g, C, "♣", "\\clubsuit", !0);
c(d, g, C, "℘", "\\wp", !0);
c(d, g, C, "♯", "\\sharp", !0);
c(d, g, C, "♢", "\\diamondsuit", !0);
c(d, g, C, "ℜ", "\\Re", !0);
c(d, g, C, "♡", "\\heartsuit", !0);
c(d, g, C, "ℑ", "\\Im", !0);
c(d, g, C, "♠", "\\spadesuit", !0);
c(d, g, C, "§", "\\S", !0);
c(X, g, C, "§", "\\S");
c(d, g, C, "¶", "\\P", !0);
c(X, g, C, "¶", "\\P");
c(d, g, C, "†", "\\dag");
c(X, g, C, "†", "\\dag");
c(X, g, C, "†", "\\textdagger");
c(d, g, C, "‡", "\\ddag");
c(X, g, C, "‡", "\\ddag");
c(X, g, C, "‡", "\\textdaggerdbl");
c(d, g, gt, "⎱", "\\rmoustache", !0);
c(d, g, Pt, "⎰", "\\lmoustache", !0);
c(d, g, gt, "⟯", "\\rgroup", !0);
c(d, g, Pt, "⟮", "\\lgroup", !0);
c(d, g, ne, "∓", "\\mp", !0);
c(d, g, ne, "⊖", "\\ominus", !0);
c(d, g, ne, "⊎", "\\uplus", !0);
c(d, g, ne, "⊓", "\\sqcap", !0);
c(d, g, ne, "∗", "\\ast");
c(d, g, ne, "⊔", "\\sqcup", !0);
c(d, g, ne, "◯", "\\bigcirc", !0);
c(d, g, ne, "∙", "\\bullet", !0);
c(d, g, ne, "‡", "\\ddagger");
c(d, g, ne, "≀", "\\wr", !0);
c(d, g, ne, "⨿", "\\amalg");
c(d, g, ne, "&", "\\And");
c(d, g, E, "⟵", "\\longleftarrow", !0);
c(d, g, E, "⇐", "\\Leftarrow", !0);
c(d, g, E, "⟸", "\\Longleftarrow", !0);
c(d, g, E, "⟶", "\\longrightarrow", !0);
c(d, g, E, "⇒", "\\Rightarrow", !0);
c(d, g, E, "⟹", "\\Longrightarrow", !0);
c(d, g, E, "↔", "\\leftrightarrow", !0);
c(d, g, E, "⟷", "\\longleftrightarrow", !0);
c(d, g, E, "⇔", "\\Leftrightarrow", !0);
c(d, g, E, "⟺", "\\Longleftrightarrow", !0);
c(d, g, E, "↦", "\\mapsto", !0);
c(d, g, E, "⟼", "\\longmapsto", !0);
c(d, g, E, "↗", "\\nearrow", !0);
c(d, g, E, "↩", "\\hookleftarrow", !0);
c(d, g, E, "↪", "\\hookrightarrow", !0);
c(d, g, E, "↘", "\\searrow", !0);
c(d, g, E, "↼", "\\leftharpoonup", !0);
c(d, g, E, "⇀", "\\rightharpoonup", !0);
c(d, g, E, "↙", "\\swarrow", !0);
c(d, g, E, "↽", "\\leftharpoondown", !0);
c(d, g, E, "⇁", "\\rightharpoondown", !0);
c(d, g, E, "↖", "\\nwarrow", !0);
c(d, g, E, "⇌", "\\rightleftharpoons", !0);
c(d, A, E, "≮", "\\nless", !0);
c(d, A, E, "", "\\@nleqslant");
c(d, A, E, "", "\\@nleqq");
c(d, A, E, "⪇", "\\lneq", !0);
c(d, A, E, "≨", "\\lneqq", !0);
c(d, A, E, "", "\\@lvertneqq");
c(d, A, E, "⋦", "\\lnsim", !0);
c(d, A, E, "⪉", "\\lnapprox", !0);
c(d, A, E, "⊀", "\\nprec", !0);
c(d, A, E, "⋠", "\\npreceq", !0);
c(d, A, E, "⋨", "\\precnsim", !0);
c(d, A, E, "⪹", "\\precnapprox", !0);
c(d, A, E, "≁", "\\nsim", !0);
c(d, A, E, "", "\\@nshortmid");
c(d, A, E, "∤", "\\nmid", !0);
c(d, A, E, "⊬", "\\nvdash", !0);
c(d, A, E, "⊭", "\\nvDash", !0);
c(d, A, E, "⋪", "\\ntriangleleft");
c(d, A, E, "⋬", "\\ntrianglelefteq", !0);
c(d, A, E, "⊊", "\\subsetneq", !0);
c(d, A, E, "", "\\@varsubsetneq");
c(d, A, E, "⫋", "\\subsetneqq", !0);
c(d, A, E, "", "\\@varsubsetneqq");
c(d, A, E, "≯", "\\ngtr", !0);
c(d, A, E, "", "\\@ngeqslant");
c(d, A, E, "", "\\@ngeqq");
c(d, A, E, "⪈", "\\gneq", !0);
c(d, A, E, "≩", "\\gneqq", !0);
c(d, A, E, "", "\\@gvertneqq");
c(d, A, E, "⋧", "\\gnsim", !0);
c(d, A, E, "⪊", "\\gnapprox", !0);
c(d, A, E, "⊁", "\\nsucc", !0);
c(d, A, E, "⋡", "\\nsucceq", !0);
c(d, A, E, "⋩", "\\succnsim", !0);
c(d, A, E, "⪺", "\\succnapprox", !0);
c(d, A, E, "≆", "\\ncong", !0);
c(d, A, E, "", "\\@nshortparallel");
c(d, A, E, "∦", "\\nparallel", !0);
c(d, A, E, "⊯", "\\nVDash", !0);
c(d, A, E, "⋫", "\\ntriangleright");
c(d, A, E, "⋭", "\\ntrianglerighteq", !0);
c(d, A, E, "", "\\@nsupseteqq");
c(d, A, E, "⊋", "\\supsetneq", !0);
c(d, A, E, "", "\\@varsupsetneq");
c(d, A, E, "⫌", "\\supsetneqq", !0);
c(d, A, E, "", "\\@varsupsetneqq");
c(d, A, E, "⊮", "\\nVdash", !0);
c(d, A, E, "⪵", "\\precneqq", !0);
c(d, A, E, "⪶", "\\succneqq", !0);
c(d, A, E, "", "\\@nsubseteqq");
c(d, A, ne, "⊴", "\\unlhd");
c(d, A, ne, "⊵", "\\unrhd");
c(d, A, E, "↚", "\\nleftarrow", !0);
c(d, A, E, "↛", "\\nrightarrow", !0);
c(d, A, E, "⇍", "\\nLeftarrow", !0);
c(d, A, E, "⇏", "\\nRightarrow", !0);
c(d, A, E, "↮", "\\nleftrightarrow", !0);
c(d, A, E, "⇎", "\\nLeftrightarrow", !0);
c(d, A, E, "△", "\\vartriangle");
c(d, A, C, "ℏ", "\\hslash");
c(d, A, C, "▽", "\\triangledown");
c(d, A, C, "◊", "\\lozenge");
c(d, A, C, "Ⓢ", "\\circledS");
c(d, A, C, "®", "\\circledR");
c(X, A, C, "®", "\\circledR");
c(d, A, C, "∡", "\\measuredangle", !0);
c(d, A, C, "∄", "\\nexists");
c(d, A, C, "℧", "\\mho");
c(d, A, C, "Ⅎ", "\\Finv", !0);
c(d, A, C, "⅁", "\\Game", !0);
c(d, A, C, "‵", "\\backprime");
c(d, A, C, "▲", "\\blacktriangle");
c(d, A, C, "▼", "\\blacktriangledown");
c(d, A, C, "■", "\\blacksquare");
c(d, A, C, "⧫", "\\blacklozenge");
c(d, A, C, "★", "\\bigstar");
c(d, A, C, "∢", "\\sphericalangle", !0);
c(d, A, C, "∁", "\\complement", !0);
c(d, A, C, "ð", "\\eth", !0);
c(X, g, C, "ð", "ð");
c(d, A, C, "╱", "\\diagup");
c(d, A, C, "╲", "\\diagdown");
c(d, A, C, "□", "\\square");
c(d, A, C, "□", "\\Box");
c(d, A, C, "◊", "\\Diamond");
c(d, A, C, "¥", "\\yen", !0);
c(X, A, C, "¥", "\\yen", !0);
c(d, A, C, "✓", "\\checkmark", !0);
c(X, A, C, "✓", "\\checkmark");
c(d, A, C, "ℶ", "\\beth", !0);
c(d, A, C, "ℸ", "\\daleth", !0);
c(d, A, C, "ℷ", "\\gimel", !0);
c(d, A, C, "ϝ", "\\digamma", !0);
c(d, A, C, "ϰ", "\\varkappa");
c(d, A, Pt, "┌", "\\@ulcorner", !0);
c(d, A, gt, "┐", "\\@urcorner", !0);
c(d, A, Pt, "└", "\\@llcorner", !0);
c(d, A, gt, "┘", "\\@lrcorner", !0);
c(d, A, E, "≦", "\\leqq", !0);
c(d, A, E, "⩽", "\\leqslant", !0);
c(d, A, E, "⪕", "\\eqslantless", !0);
c(d, A, E, "≲", "\\lesssim", !0);
c(d, A, E, "⪅", "\\lessapprox", !0);
c(d, A, E, "≊", "\\approxeq", !0);
c(d, A, ne, "⋖", "\\lessdot");
c(d, A, E, "⋘", "\\lll", !0);
c(d, A, E, "≶", "\\lessgtr", !0);
c(d, A, E, "⋚", "\\lesseqgtr", !0);
c(d, A, E, "⪋", "\\lesseqqgtr", !0);
c(d, A, E, "≑", "\\doteqdot");
c(d, A, E, "≓", "\\risingdotseq", !0);
c(d, A, E, "≒", "\\fallingdotseq", !0);
c(d, A, E, "∽", "\\backsim", !0);
c(d, A, E, "⋍", "\\backsimeq", !0);
c(d, A, E, "⫅", "\\subseteqq", !0);
c(d, A, E, "⋐", "\\Subset", !0);
c(d, A, E, "⊏", "\\sqsubset", !0);
c(d, A, E, "≼", "\\preccurlyeq", !0);
c(d, A, E, "⋞", "\\curlyeqprec", !0);
c(d, A, E, "≾", "\\precsim", !0);
c(d, A, E, "⪷", "\\precapprox", !0);
c(d, A, E, "⊲", "\\vartriangleleft");
c(d, A, E, "⊴", "\\trianglelefteq");
c(d, A, E, "⊨", "\\vDash", !0);
c(d, A, E, "⊪", "\\Vvdash", !0);
c(d, A, E, "⌣", "\\smallsmile");
c(d, A, E, "⌢", "\\smallfrown");
c(d, A, E, "≏", "\\bumpeq", !0);
c(d, A, E, "≎", "\\Bumpeq", !0);
c(d, A, E, "≧", "\\geqq", !0);
c(d, A, E, "⩾", "\\geqslant", !0);
c(d, A, E, "⪖", "\\eqslantgtr", !0);
c(d, A, E, "≳", "\\gtrsim", !0);
c(d, A, E, "⪆", "\\gtrapprox", !0);
c(d, A, ne, "⋗", "\\gtrdot");
c(d, A, E, "⋙", "\\ggg", !0);
c(d, A, E, "≷", "\\gtrless", !0);
c(d, A, E, "⋛", "\\gtreqless", !0);
c(d, A, E, "⪌", "\\gtreqqless", !0);
c(d, A, E, "≖", "\\eqcirc", !0);
c(d, A, E, "≗", "\\circeq", !0);
c(d, A, E, "≜", "\\triangleq", !0);
c(d, A, E, "∼", "\\thicksim");
c(d, A, E, "≈", "\\thickapprox");
c(d, A, E, "⫆", "\\supseteqq", !0);
c(d, A, E, "⋑", "\\Supset", !0);
c(d, A, E, "⊐", "\\sqsupset", !0);
c(d, A, E, "≽", "\\succcurlyeq", !0);
c(d, A, E, "⋟", "\\curlyeqsucc", !0);
c(d, A, E, "≿", "\\succsim", !0);
c(d, A, E, "⪸", "\\succapprox", !0);
c(d, A, E, "⊳", "\\vartriangleright");
c(d, A, E, "⊵", "\\trianglerighteq");
c(d, A, E, "⊩", "\\Vdash", !0);
c(d, A, E, "∣", "\\shortmid");
c(d, A, E, "∥", "\\shortparallel");
c(d, A, E, "≬", "\\between", !0);
c(d, A, E, "⋔", "\\pitchfork", !0);
c(d, A, E, "∝", "\\varpropto");
c(d, A, E, "◀", "\\blacktriangleleft");
c(d, A, E, "∴", "\\therefore", !0);
c(d, A, E, "∍", "\\backepsilon");
c(d, A, E, "▶", "\\blacktriangleright");
c(d, A, E, "∵", "\\because", !0);
c(d, A, E, "⋘", "\\llless");
c(d, A, E, "⋙", "\\gggtr");
c(d, A, ne, "⊲", "\\lhd");
c(d, A, ne, "⊳", "\\rhd");
c(d, A, E, "≂", "\\eqsim", !0);
c(d, g, E, "⋈", "\\Join");
c(d, A, E, "≑", "\\Doteq", !0);
c(d, A, ne, "∔", "\\dotplus", !0);
c(d, A, ne, "∖", "\\smallsetminus");
c(d, A, ne, "⋒", "\\Cap", !0);
c(d, A, ne, "⋓", "\\Cup", !0);
c(d, A, ne, "⩞", "\\doublebarwedge", !0);
c(d, A, ne, "⊟", "\\boxminus", !0);
c(d, A, ne, "⊞", "\\boxplus", !0);
c(d, A, ne, "⋇", "\\divideontimes", !0);
c(d, A, ne, "⋉", "\\ltimes", !0);
c(d, A, ne, "⋊", "\\rtimes", !0);
c(d, A, ne, "⋋", "\\leftthreetimes", !0);
c(d, A, ne, "⋌", "\\rightthreetimes", !0);
c(d, A, ne, "⋏", "\\curlywedge", !0);
c(d, A, ne, "⋎", "\\curlyvee", !0);
c(d, A, ne, "⊝", "\\circleddash", !0);
c(d, A, ne, "⊛", "\\circledast", !0);
c(d, A, ne, "⋅", "\\centerdot");
c(d, A, ne, "⊺", "\\intercal", !0);
c(d, A, ne, "⋒", "\\doublecap");
c(d, A, ne, "⋓", "\\doublecup");
c(d, A, ne, "⊠", "\\boxtimes", !0);
c(d, A, E, "⇢", "\\dashrightarrow", !0);
c(d, A, E, "⇠", "\\dashleftarrow", !0);
c(d, A, E, "⇇", "\\leftleftarrows", !0);
c(d, A, E, "⇆", "\\leftrightarrows", !0);
c(d, A, E, "⇚", "\\Lleftarrow", !0);
c(d, A, E, "↞", "\\twoheadleftarrow", !0);
c(d, A, E, "↢", "\\leftarrowtail", !0);
c(d, A, E, "↫", "\\looparrowleft", !0);
c(d, A, E, "⇋", "\\leftrightharpoons", !0);
c(d, A, E, "↶", "\\curvearrowleft", !0);
c(d, A, E, "↺", "\\circlearrowleft", !0);
c(d, A, E, "↰", "\\Lsh", !0);
c(d, A, E, "⇈", "\\upuparrows", !0);
c(d, A, E, "↿", "\\upharpoonleft", !0);
c(d, A, E, "⇃", "\\downharpoonleft", !0);
c(d, g, E, "⊶", "\\origof", !0);
c(d, g, E, "⊷", "\\imageof", !0);
c(d, A, E, "⊸", "\\multimap", !0);
c(d, A, E, "↭", "\\leftrightsquigarrow", !0);
c(d, A, E, "⇉", "\\rightrightarrows", !0);
c(d, A, E, "⇄", "\\rightleftarrows", !0);
c(d, A, E, "↠", "\\twoheadrightarrow", !0);
c(d, A, E, "↣", "\\rightarrowtail", !0);
c(d, A, E, "↬", "\\looparrowright", !0);
c(d, A, E, "↷", "\\curvearrowright", !0);
c(d, A, E, "↻", "\\circlearrowright", !0);
c(d, A, E, "↱", "\\Rsh", !0);
c(d, A, E, "⇊", "\\downdownarrows", !0);
c(d, A, E, "↾", "\\upharpoonright", !0);
c(d, A, E, "⇂", "\\downharpoonright", !0);
c(d, A, E, "⇝", "\\rightsquigarrow", !0);
c(d, A, E, "⇝", "\\leadsto");
c(d, A, E, "⇛", "\\Rrightarrow", !0);
c(d, A, E, "↾", "\\restriction");
c(d, g, C, "‘", "`");
c(d, g, C, "$", "\\$");
c(X, g, C, "$", "\\$");
c(X, g, C, "$", "\\textdollar");
c(d, g, C, "%", "\\%");
c(X, g, C, "%", "\\%");
c(d, g, C, "_", "\\_");
c(X, g, C, "_", "\\_");
c(X, g, C, "_", "\\textunderscore");
c(d, g, C, "∠", "\\angle", !0);
c(d, g, C, "∞", "\\infty", !0);
c(d, g, C, "′", "\\prime");
c(d, g, C, "△", "\\triangle");
c(d, g, C, "Γ", "\\Gamma", !0);
c(d, g, C, "Δ", "\\Delta", !0);
c(d, g, C, "Θ", "\\Theta", !0);
c(d, g, C, "Λ", "\\Lambda", !0);
c(d, g, C, "Ξ", "\\Xi", !0);
c(d, g, C, "Π", "\\Pi", !0);
c(d, g, C, "Σ", "\\Sigma", !0);
c(d, g, C, "Υ", "\\Upsilon", !0);
c(d, g, C, "Φ", "\\Phi", !0);
c(d, g, C, "Ψ", "\\Psi", !0);
c(d, g, C, "Ω", "\\Omega", !0);
c(d, g, C, "A", "Α");
c(d, g, C, "B", "Β");
c(d, g, C, "E", "Ε");
c(d, g, C, "Z", "Ζ");
c(d, g, C, "H", "Η");
c(d, g, C, "I", "Ι");
c(d, g, C, "K", "Κ");
c(d, g, C, "M", "Μ");
c(d, g, C, "N", "Ν");
c(d, g, C, "O", "Ο");
c(d, g, C, "P", "Ρ");
c(d, g, C, "T", "Τ");
c(d, g, C, "X", "Χ");
c(d, g, C, "¬", "\\neg", !0);
c(d, g, C, "¬", "\\lnot");
c(d, g, C, "⊤", "\\top");
c(d, g, C, "⊥", "\\bot");
c(d, g, C, "∅", "\\emptyset");
c(d, A, C, "∅", "\\varnothing");
c(d, g, fe, "α", "\\alpha", !0);
c(d, g, fe, "β", "\\beta", !0);
c(d, g, fe, "γ", "\\gamma", !0);
c(d, g, fe, "δ", "\\delta", !0);
c(d, g, fe, "ϵ", "\\epsilon", !0);
c(d, g, fe, "ζ", "\\zeta", !0);
c(d, g, fe, "η", "\\eta", !0);
c(d, g, fe, "θ", "\\theta", !0);
c(d, g, fe, "ι", "\\iota", !0);
c(d, g, fe, "κ", "\\kappa", !0);
c(d, g, fe, "λ", "\\lambda", !0);
c(d, g, fe, "μ", "\\mu", !0);
c(d, g, fe, "ν", "\\nu", !0);
c(d, g, fe, "ξ", "\\xi", !0);
c(d, g, fe, "ο", "\\omicron", !0);
c(d, g, fe, "π", "\\pi", !0);
c(d, g, fe, "ρ", "\\rho", !0);
c(d, g, fe, "σ", "\\sigma", !0);
c(d, g, fe, "τ", "\\tau", !0);
c(d, g, fe, "υ", "\\upsilon", !0);
c(d, g, fe, "ϕ", "\\phi", !0);
c(d, g, fe, "χ", "\\chi", !0);
c(d, g, fe, "ψ", "\\psi", !0);
c(d, g, fe, "ω", "\\omega", !0);
c(d, g, fe, "ε", "\\varepsilon", !0);
c(d, g, fe, "ϑ", "\\vartheta", !0);
c(d, g, fe, "ϖ", "\\varpi", !0);
c(d, g, fe, "ϱ", "\\varrho", !0);
c(d, g, fe, "ς", "\\varsigma", !0);
c(d, g, fe, "φ", "\\varphi", !0);
c(d, g, ne, "∗", "*", !0);
c(d, g, ne, "+", "+");
c(d, g, ne, "−", "-", !0);
c(d, g, ne, "⋅", "\\cdot", !0);
c(d, g, ne, "∘", "\\circ", !0);
c(d, g, ne, "÷", "\\div", !0);
c(d, g, ne, "±", "\\pm", !0);
c(d, g, ne, "×", "\\times", !0);
c(d, g, ne, "∩", "\\cap", !0);
c(d, g, ne, "∪", "\\cup", !0);
c(d, g, ne, "∖", "\\setminus", !0);
c(d, g, ne, "∧", "\\land");
c(d, g, ne, "∨", "\\lor");
c(d, g, ne, "∧", "\\wedge", !0);
c(d, g, ne, "∨", "\\vee", !0);
c(d, g, C, "√", "\\surd");
c(d, g, Pt, "⟨", "\\langle", !0);
c(d, g, Pt, "∣", "\\lvert");
c(d, g, Pt, "∥", "\\lVert");
c(d, g, gt, "?", "?");
c(d, g, gt, "!", "!");
c(d, g, gt, "⟩", "\\rangle", !0);
c(d, g, gt, "∣", "\\rvert");
c(d, g, gt, "∥", "\\rVert");
c(d, g, E, "=", "=");
c(d, g, E, ":", ":");
c(d, g, E, "≈", "\\approx", !0);
c(d, g, E, "≅", "\\cong", !0);
c(d, g, E, "≥", "\\ge");
c(d, g, E, "≥", "\\geq", !0);
c(d, g, E, "←", "\\gets");
c(d, g, E, ">", "\\gt", !0);
c(d, g, E, "∈", "\\in", !0);
c(d, g, E, "", "\\@not");
c(d, g, E, "⊂", "\\subset", !0);
c(d, g, E, "⊃", "\\supset", !0);
c(d, g, E, "⊆", "\\subseteq", !0);
c(d, g, E, "⊇", "\\supseteq", !0);
c(d, A, E, "⊈", "\\nsubseteq", !0);
c(d, A, E, "⊉", "\\nsupseteq", !0);
c(d, g, E, "⊨", "\\models");
c(d, g, E, "←", "\\leftarrow", !0);
c(d, g, E, "≤", "\\le");
c(d, g, E, "≤", "\\leq", !0);
c(d, g, E, "<", "\\lt", !0);
c(d, g, E, "→", "\\rightarrow", !0);
c(d, g, E, "→", "\\to");
c(d, A, E, "≱", "\\ngeq", !0);
c(d, A, E, "≰", "\\nleq", !0);
c(d, g, W0, " ", "\\ ");
c(d, g, W0, " ", "\\space");
c(d, g, W0, " ", "\\nobreakspace");
c(X, g, W0, " ", "\\ ");
c(X, g, W0, " ", " ");
c(X, g, W0, " ", "\\space");
c(X, g, W0, " ", "\\nobreakspace");
c(d, g, W0, null, "\\nobreak");
c(d, g, W0, null, "\\allowbreak");
c(d, g, di, ",", ",");
c(d, g, di, ";", ";");
c(d, A, ne, "⊼", "\\barwedge", !0);
c(d, A, ne, "⊻", "\\veebar", !0);
c(d, g, ne, "⊙", "\\odot", !0);
c(d, g, ne, "⊕", "\\oplus", !0);
c(d, g, ne, "⊗", "\\otimes", !0);
c(d, g, C, "∂", "\\partial", !0);
c(d, g, ne, "⊘", "\\oslash", !0);
c(d, A, ne, "⊚", "\\circledcirc", !0);
c(d, A, ne, "⊡", "\\boxdot", !0);
c(d, g, ne, "△", "\\bigtriangleup");
c(d, g, ne, "▽", "\\bigtriangledown");
c(d, g, ne, "†", "\\dagger");
c(d, g, ne, "⋄", "\\diamond");
c(d, g, ne, "⋆", "\\star");
c(d, g, ne, "◃", "\\triangleleft");
c(d, g, ne, "▹", "\\triangleright");
c(d, g, Pt, "{", "\\{");
c(X, g, C, "{", "\\{");
c(X, g, C, "{", "\\textbraceleft");
c(d, g, gt, "}", "\\}");
c(X, g, C, "}", "\\}");
c(X, g, C, "}", "\\textbraceright");
c(d, g, Pt, "{", "\\lbrace");
c(d, g, gt, "}", "\\rbrace");
c(d, g, Pt, "[", "\\lbrack", !0);
c(X, g, C, "[", "\\lbrack", !0);
c(d, g, gt, "]", "\\rbrack", !0);
c(X, g, C, "]", "\\rbrack", !0);
c(d, g, Pt, "(", "\\lparen", !0);
c(d, g, gt, ")", "\\rparen", !0);
c(X, g, C, "<", "\\textless", !0);
c(X, g, C, ">", "\\textgreater", !0);
c(d, g, Pt, "⌊", "\\lfloor", !0);
c(d, g, gt, "⌋", "\\rfloor", !0);
c(d, g, Pt, "⌈", "\\lceil", !0);
c(d, g, gt, "⌉", "\\rceil", !0);
c(d, g, C, "\\", "\\backslash");
c(d, g, C, "∣", "|");
c(d, g, C, "∣", "\\vert");
c(X, g, C, "|", "\\textbar", !0);
c(d, g, C, "∥", "\\|");
c(d, g, C, "∥", "\\Vert");
c(X, g, C, "∥", "\\textbardbl");
c(X, g, C, "~", "\\textasciitilde");
c(X, g, C, "\\", "\\textbackslash");
c(X, g, C, "^", "\\textasciicircum");
c(d, g, E, "↑", "\\uparrow", !0);
c(d, g, E, "⇑", "\\Uparrow", !0);
c(d, g, E, "↓", "\\downarrow", !0);
c(d, g, E, "⇓", "\\Downarrow", !0);
c(d, g, E, "↕", "\\updownarrow", !0);
c(d, g, E, "⇕", "\\Updownarrow", !0);
c(d, g, Je, "∐", "\\coprod");
c(d, g, Je, "⋁", "\\bigvee");
c(d, g, Je, "⋀", "\\bigwedge");
c(d, g, Je, "⨄", "\\biguplus");
c(d, g, Je, "⋂", "\\bigcap");
c(d, g, Je, "⋃", "\\bigcup");
c(d, g, Je, "∫", "\\int");
c(d, g, Je, "∫", "\\intop");
c(d, g, Je, "∬", "\\iint");
c(d, g, Je, "∭", "\\iiint");
c(d, g, Je, "∏", "\\prod");
c(d, g, Je, "∑", "\\sum");
c(d, g, Je, "⨂", "\\bigotimes");
c(d, g, Je, "⨁", "\\bigoplus");
c(d, g, Je, "⨀", "\\bigodot");
c(d, g, Je, "∮", "\\oint");
c(d, g, Je, "∯", "\\oiint");
c(d, g, Je, "∰", "\\oiiint");
c(d, g, Je, "⨆", "\\bigsqcup");
c(d, g, Je, "∫", "\\smallint");
c(X, g, zr, "…", "\\textellipsis");
c(d, g, zr, "…", "\\mathellipsis");
c(X, g, zr, "…", "\\ldots", !0);
c(d, g, zr, "…", "\\ldots", !0);
c(d, g, zr, "⋯", "\\@cdots", !0);
c(d, g, zr, "⋱", "\\ddots", !0);
c(d, g, C, "⋮", "\\varvdots");
c(d, g, Ue, "ˊ", "\\acute");
c(d, g, Ue, "ˋ", "\\grave");
c(d, g, Ue, "¨", "\\ddot");
c(d, g, Ue, "~", "\\tilde");
c(d, g, Ue, "ˉ", "\\bar");
c(d, g, Ue, "˘", "\\breve");
c(d, g, Ue, "ˇ", "\\check");
c(d, g, Ue, "^", "\\hat");
c(d, g, Ue, "⃗", "\\vec");
c(d, g, Ue, "˙", "\\dot");
c(d, g, Ue, "˚", "\\mathring");
c(d, g, fe, "", "\\@imath");
c(d, g, fe, "", "\\@jmath");
c(d, g, C, "ı", "ı");
c(d, g, C, "ȷ", "ȷ");
c(X, g, C, "ı", "\\i", !0);
c(X, g, C, "ȷ", "\\j", !0);
c(X, g, C, "ß", "\\ss", !0);
c(X, g, C, "æ", "\\ae", !0);
c(X, g, C, "œ", "\\oe", !0);
c(X, g, C, "ø", "\\o", !0);
c(X, g, C, "Æ", "\\AE", !0);
c(X, g, C, "Œ", "\\OE", !0);
c(X, g, C, "Ø", "\\O", !0);
c(X, g, Ue, "ˊ", "\\'");
c(X, g, Ue, "ˋ", "\\`");
c(X, g, Ue, "ˆ", "\\^");
c(X, g, Ue, "˜", "\\~");
c(X, g, Ue, "ˉ", "\\=");
c(X, g, Ue, "˘", "\\u");
c(X, g, Ue, "˙", "\\.");
c(X, g, Ue, "¸", "\\c");
c(X, g, Ue, "˚", "\\r");
c(X, g, Ue, "ˇ", "\\v");
c(X, g, Ue, "¨", '\\"');
c(X, g, Ue, "˝", "\\H");
c(X, g, Ue, "◯", "\\textcircled");
var U1 = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(X, g, C, "–", "--", !0);
c(X, g, C, "–", "\\textendash");
c(X, g, C, "—", "---", !0);
c(X, g, C, "—", "\\textemdash");
c(X, g, C, "‘", "`", !0);
c(X, g, C, "‘", "\\textquoteleft");
c(X, g, C, "’", "'", !0);
c(X, g, C, "’", "\\textquoteright");
c(X, g, C, "“", "``", !0);
c(X, g, C, "“", "\\textquotedblleft");
c(X, g, C, "”", "''", !0);
c(X, g, C, "”", "\\textquotedblright");
c(d, g, C, "°", "\\degree", !0);
c(X, g, C, "°", "\\degree");
c(X, g, C, "°", "\\textdegree", !0);
c(d, g, C, "£", "\\pounds");
c(d, g, C, "£", "\\mathsterling", !0);
c(X, g, C, "£", "\\pounds");
c(X, g, C, "£", "\\textsterling", !0);
c(d, A, C, "✠", "\\maltese");
c(X, A, C, "✠", "\\maltese");
var bl = '0123456789/@."';
for (var Pi = 0; Pi < bl.length; Pi++) {
  var vl = bl.charAt(Pi);
  c(d, g, C, vl, vl);
}
var yl = '0123456789!@*()-=+";:?/.,';
for (var qi = 0; qi < yl.length; qi++) {
  var wl = yl.charAt(qi);
  c(X, g, C, wl, wl);
}
var Za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Hi = 0; Hi < Za.length; Hi++) {
  var ra = Za.charAt(Hi);
  c(d, g, fe, ra, ra), c(X, g, C, ra, ra);
}
c(d, A, C, "C", "ℂ");
c(X, A, C, "C", "ℂ");
c(d, A, C, "H", "ℍ");
c(X, A, C, "H", "ℍ");
c(d, A, C, "N", "ℕ");
c(X, A, C, "N", "ℕ");
c(d, A, C, "P", "ℙ");
c(X, A, C, "P", "ℙ");
c(d, A, C, "Q", "ℚ");
c(X, A, C, "Q", "ℚ");
c(d, A, C, "R", "ℝ");
c(X, A, C, "R", "ℝ");
c(d, A, C, "Z", "ℤ");
c(X, A, C, "Z", "ℤ");
c(d, g, fe, "h", "ℎ");
c(X, g, fe, "h", "ℎ");
var me = "";
for (var st = 0; st < Za.length; st++) {
  var $e = Za.charAt(st);
  me = String.fromCharCode(55349, 56320 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56372 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56424 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56580 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56684 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56736 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56788 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56840 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56944 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), st < 26 && (me = String.fromCharCode(55349, 56632 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me), me = String.fromCharCode(55349, 56476 + st), c(d, g, fe, $e, me), c(X, g, C, $e, me));
}
me = "𝕜";
c(d, g, fe, "k", me);
c(X, g, C, "k", me);
for (var cr = 0; cr < 10; cr++) {
  var Y0 = cr.toString();
  me = String.fromCharCode(55349, 57294 + cr), c(d, g, fe, Y0, me), c(X, g, C, Y0, me), me = String.fromCharCode(55349, 57314 + cr), c(d, g, fe, Y0, me), c(X, g, C, Y0, me), me = String.fromCharCode(55349, 57324 + cr), c(d, g, fe, Y0, me), c(X, g, C, Y0, me), me = String.fromCharCode(55349, 57334 + cr), c(d, g, fe, Y0, me), c(X, g, C, Y0, me);
}
var Su = "ÐÞþ";
for (var Ui = 0; Ui < Su.length; Ui++) {
  var na = Su.charAt(Ui);
  c(d, g, fe, na, na), c(X, g, C, na, na);
}
var aa = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], xl = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], Wh = function(e, t) {
  var r = e.charCodeAt(0), a = e.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, u = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var l = Math.floor((i - 119808) / 26);
    return [aa[l][2], aa[l][u]];
  } else if (120782 <= i && i <= 120831) {
    var s = Math.floor((i - 120782) / 10);
    return [xl[s][2], xl[s][u]];
  } else {
    if (i === 120485 || i === 120486)
      return [aa[0][2], aa[0][u]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new K("Unsupported character: " + e);
  }
}, hi = function(e, t, r) {
  return Pe[r][e] && Pe[r][e].replace && (e = Pe[r][e].replace), {
    value: e,
    metrics: bs(e, t, r)
  };
}, o0 = function(e, t, r, a, i) {
  var u = hi(e, t, r), l = u.metrics;
  e = u.value;
  var s;
  if (l) {
    var o = l.italic;
    (r === "text" || a && a.font === "mathit") && (o = 0), s = new Yt(e, l.height, l.depth, o, l.skew, l.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), s = new Yt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    s.maxFontSize = a.sizeMultiplier, a.style.isTight() && s.classes.push("mtight");
    var h = a.getColor();
    h && (s.style.color = h);
  }
  return s;
}, Xh = function(e, t, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && hi(e, "Main-Bold", t).metrics ? o0(e, "Main-Bold", t, r, a.concat(["mathbf"])) : e === "\\" || Pe[t][e].font === "main" ? o0(e, "Main-Regular", t, r, a) : o0(e, "AMS-Regular", t, r, a.concat(["amsrm"]));
}, Yh = function(e, t, r, a, i) {
  return i !== "textord" && hi(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, $h = function(e, t, r) {
  var a = e.mode, i = e.text, u = ["mord"], l = a === "math" || a === "text" && t.font, s = l ? t.font : t.fontFamily, o = "", h = "";
  if (i.charCodeAt(0) === 55349 && ([o, h] = Wh(i, a)), o.length > 0)
    return o0(i, o, a, t, u.concat(h));
  if (s) {
    var p, f;
    if (s === "boldsymbol") {
      var m = Yh(i, a, t, u, r);
      p = m.fontName, f = [m.fontClass];
    } else l ? (p = V1[s].fontName, f = [s]) : (p = ia(s, t.fontWeight, t.fontShape), f = [s, t.fontWeight, t.fontShape]);
    if (hi(i, p, a).metrics)
      return o0(i, p, a, t, u.concat(f));
    if (U1.hasOwnProperty(i) && p.slice(0, 10) === "Typewriter") {
      for (var D = [], _ = 0; _ < i.length; _++)
        D.push(o0(i[_], p, a, t, u.concat(f)));
      return j1(D);
    }
  }
  if (r === "mathord")
    return o0(i, "Math-Italic", a, t, u.concat(["mathnormal"]));
  if (r === "textord") {
    var w = Pe[a][i] && Pe[a][i].font;
    if (w === "ams") {
      var T = ia("amsrm", t.fontWeight, t.fontShape);
      return o0(i, T, a, t, u.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (w === "main" || !w) {
      var x = ia("textrm", t.fontWeight, t.fontShape);
      return o0(i, x, a, t, u.concat(t.fontWeight, t.fontShape));
    } else {
      var y = ia(w, t.fontWeight, t.fontShape);
      return o0(i, y, a, t, u.concat(y, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, Zh = (n, e) => {
  if (er(n.classes) !== er(e.classes) || n.skew !== e.skew || n.maxFontSize !== e.maxFontSize)
    return !1;
  if (n.classes.length === 1) {
    var t = n.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var r in n.style)
    if (n.style.hasOwnProperty(r) && n.style[r] !== e.style[r])
      return !1;
  for (var a in e.style)
    if (e.style.hasOwnProperty(a) && n.style[a] !== e.style[a])
      return !1;
  return !0;
}, Kh = (n) => {
  for (var e = 0; e < n.length - 1; e++) {
    var t = n[e], r = n[e + 1];
    t instanceof Yt && r instanceof Yt && Zh(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, n.splice(e + 1, 1), e--);
  }
  return n;
}, ys = function(e) {
  for (var t = 0, r = 0, a = 0, i = 0; i < e.children.length; i++) {
    var u = e.children[i];
    u.height > t && (t = u.height), u.depth > r && (r = u.depth), u.maxFontSize > a && (a = u.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = a;
}, St = function(e, t, r, a) {
  var i = new Vn(e, t, r, a);
  return ys(i), i;
}, G1 = (n, e, t, r) => new Vn(n, e, t, r), Qh = function(e, t, r) {
  var a = St([e], [], t);
  return a.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = J(a.height), a.maxFontSize = 1, a;
}, Jh = function(e, t, r, a) {
  var i = new vs(e, t, r, a);
  return ys(i), i;
}, j1 = function(e) {
  var t = new jn(e);
  return ys(t), t;
}, e2 = function(e, t) {
  return e instanceof jn ? St([], [e], t) : e;
}, t2 = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, r = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, u = 1; u < t.length; u++) {
      var l = -t[u].shift - i - t[u].elem.depth, s = l - (t[u - 1].elem.height + t[u - 1].elem.depth);
      i = i + l, r.push({
        type: "kern",
        size: s
      }), r.push(t[u]);
    }
    return {
      children: r,
      depth: a
    };
  }
  var o;
  if (e.positionType === "top") {
    for (var h = e.positionData, p = 0; p < e.children.length; p++) {
      var f = e.children[p];
      h -= f.type === "kern" ? f.size : f.elem.height + f.elem.depth;
    }
    o = h;
  } else if (e.positionType === "bottom")
    o = -e.positionData;
  else {
    var m = e.children[0];
    if (m.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      o = -m.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      o = -m.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: o
  };
}, r2 = function(e, t) {
  for (var {
    children: r,
    depth: a
  } = t2(e), i = 0, u = 0; u < r.length; u++) {
    var l = r[u];
    if (l.type === "elem") {
      var s = l.elem;
      i = Math.max(i, s.maxFontSize, s.height);
    }
  }
  i += 2;
  var o = St(["pstrut"], []);
  o.style.height = J(i);
  for (var h = [], p = a, f = a, m = a, D = 0; D < r.length; D++) {
    var _ = r[D];
    if (_.type === "kern")
      m += _.size;
    else {
      var w = _.elem, T = _.wrapperClasses || [], x = _.wrapperStyle || {}, y = St(T, [o, w], void 0, x);
      y.style.top = J(-i - m - w.depth), _.marginLeft && (y.style.marginLeft = _.marginLeft), _.marginRight && (y.style.marginRight = _.marginRight), h.push(y), m += w.height + w.depth;
    }
    p = Math.min(p, m), f = Math.max(f, m);
  }
  var S = St(["vlist"], h);
  S.style.height = J(f);
  var F;
  if (p < 0) {
    var L = St([], []), I = St(["vlist"], [L]);
    I.style.height = J(-p);
    var U = St(["vlist-s"], [new Yt("​")]);
    F = [St(["vlist-r"], [S, U]), St(["vlist-r"], [I])];
  } else
    F = [St(["vlist-r"], [S])];
  var z = St(["vlist-t"], F);
  return F.length === 2 && z.classes.push("vlist-t2"), z.height = f, z.depth = -p, z;
}, n2 = (n, e) => {
  var t = St(["mspace"], [], e), r = Ve(n, e);
  return t.style.marginRight = J(r), t;
}, ia = function(e, t, r) {
  var a = "";
  switch (e) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = e;
  }
  var i;
  return t === "textbf" && r === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, V1 = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, W1 = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, a2 = function(e, t) {
  var [r, a, i] = W1[e], u = new tr(r), l = new H0([u], {
    width: J(a),
    height: J(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + J(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), s = G1(["overlay"], [l], t);
  return s.height = i, s.style.height = J(i), s.style.width = J(a), s;
}, O = {
  fontMap: V1,
  makeSymbol: o0,
  mathsym: Xh,
  makeSpan: St,
  makeSvgSpan: G1,
  makeLineSpan: Qh,
  makeAnchor: Jh,
  makeFragment: j1,
  wrapFragment: e2,
  makeVList: r2,
  makeOrd: $h,
  makeGlue: n2,
  staticSvg: a2,
  svgData: W1,
  tryCombineChars: Kh
}, je = {
  number: 3,
  unit: "mu"
}, fr = {
  number: 4,
  unit: "mu"
}, I0 = {
  number: 5,
  unit: "mu"
}, i2 = {
  mord: {
    mop: je,
    mbin: fr,
    mrel: I0,
    minner: je
  },
  mop: {
    mord: je,
    mop: je,
    mrel: I0,
    minner: je
  },
  mbin: {
    mord: fr,
    mop: fr,
    mopen: fr,
    minner: fr
  },
  mrel: {
    mord: I0,
    mop: I0,
    mopen: I0,
    minner: I0
  },
  mopen: {},
  mclose: {
    mop: je,
    mbin: fr,
    mrel: I0,
    minner: je
  },
  mpunct: {
    mord: je,
    mop: je,
    mrel: I0,
    mopen: je,
    mclose: je,
    mpunct: je,
    minner: je
  },
  minner: {
    mord: je,
    mop: je,
    mbin: fr,
    mrel: I0,
    mopen: je,
    mpunct: je,
    minner: je
  }
}, u2 = {
  mord: {
    mop: je
  },
  mop: {
    mord: je,
    mop: je
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: je
  },
  mpunct: {},
  minner: {
    mop: je
  }
}, X1 = {}, Ka = {}, Qa = {};
function te(n) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: u
  } = n, l = {
    type: e,
    numArgs: r.numArgs,
    argTypes: r.argTypes,
    allowedInArgument: !!r.allowedInArgument,
    allowedInText: !!r.allowedInText,
    allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
    numOptionalArgs: r.numOptionalArgs || 0,
    infix: !!r.infix,
    primitive: !!r.primitive,
    handler: a
  }, s = 0; s < t.length; ++s)
    X1[t[s]] = l;
  e && (i && (Ka[e] = i), u && (Qa[e] = u));
}
function wr(n) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = n;
  te({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: r
  });
}
var Ja = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, Qe = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, U0 = O.makeSpan, s2 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], l2 = ["rightmost", "mrel", "mclose", "mpunct"], o2 = {
  display: de.DISPLAY,
  text: de.TEXT,
  script: de.SCRIPT,
  scriptscript: de.SCRIPTSCRIPT
}, c2 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, rt = function(e, t, r, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], u = 0; u < e.length; u++) {
    var l = _e(e[u], t);
    if (l instanceof jn) {
      var s = l.children;
      i.push(...s);
    } else
      i.push(l);
  }
  if (O.tryCombineChars(i), !r)
    return i;
  var o = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? o = t.havingSize(h.size) : h.type === "styling" && (o = t.havingStyle(o2[h.style]));
  }
  var p = U0([a[0] || "leftmost"], [], t), f = U0([a[1] || "rightmost"], [], t), m = r === "root";
  return Al(i, (D, _) => {
    var w = _.classes[0], T = D.classes[0];
    w === "mbin" && le.contains(l2, T) ? _.classes[0] = "mord" : T === "mbin" && le.contains(s2, w) && (D.classes[0] = "mord");
  }, {
    node: p
  }, f, m), Al(i, (D, _) => {
    var w = Du(_), T = Du(D), x = w && T ? D.hasClass("mtight") ? u2[w][T] : i2[w][T] : null;
    if (x)
      return O.makeGlue(x, o);
  }, {
    node: p
  }, f, m), i;
}, Al = function n(e, t, r, a, i) {
  a && e.push(a);
  for (var u = 0; u < e.length; u++) {
    var l = e[u], s = Y1(l);
    if (s) {
      n(s.children, t, r, null, i);
      continue;
    }
    var o = !l.hasClass("mspace");
    if (o) {
      var h = t(l, r.node);
      h && (r.insertAfter ? r.insertAfter(h) : (e.unshift(h), u++));
    }
    o ? r.node = l : i && l.hasClass("newline") && (r.node = U0(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((p) => (f) => {
      e.splice(p + 1, 0, f), u++;
    })(u);
  }
  a && e.pop();
}, Y1 = function(e) {
  return e instanceof jn || e instanceof vs || e instanceof Vn && e.hasClass("enclosing") ? e : null;
}, f2 = function n(e, t) {
  var r = Y1(e);
  if (r) {
    var a = r.children;
    if (a.length) {
      if (t === "right")
        return n(a[a.length - 1], "right");
      if (t === "left")
        return n(a[0], "left");
    }
  }
  return e;
}, Du = function(e, t) {
  return e ? (t && (e = f2(e, t)), c2[e.classes[0]] || null) : null;
}, Rn = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return U0(t.concat(r));
}, _e = function(e, t, r) {
  if (!e)
    return U0();
  if (Ka[e.type]) {
    var a = Ka[e.type](e, t);
    if (r && t.size !== r.size) {
      a = U0(t.sizingClasses(r), [a], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new K("Got group of unknown type: '" + e.type + "'");
};
function ua(n, e) {
  var t = U0(["base"], n, e), r = U0(["strut"]);
  return r.style.height = J(t.height + t.depth), t.depth && (r.style.verticalAlign = J(-t.depth)), t.children.unshift(r), t;
}
function Eu(n, e) {
  var t = null;
  n.length === 1 && n[0].type === "tag" && (t = n[0].tag, n = n[0].body);
  var r = rt(n, e, "root"), a;
  r.length === 2 && r[1].hasClass("tag") && (a = r.pop());
  for (var i = [], u = [], l = 0; l < r.length; l++)
    if (u.push(r[l]), r[l].hasClass("mbin") || r[l].hasClass("mrel") || r[l].hasClass("allowbreak")) {
      for (var s = !1; l < r.length - 1 && r[l + 1].hasClass("mspace") && !r[l + 1].hasClass("newline"); )
        l++, u.push(r[l]), r[l].hasClass("nobreak") && (s = !0);
      s || (i.push(ua(u, e)), u = []);
    } else r[l].hasClass("newline") && (u.pop(), u.length > 0 && (i.push(ua(u, e)), u = []), i.push(r[l]));
  u.length > 0 && i.push(ua(u, e));
  var o;
  t ? (o = ua(rt(t, e, !0)), o.classes = ["tag"], i.push(o)) : a && i.push(a);
  var h = U0(["katex-html"], i);
  if (h.setAttribute("aria-hidden", "true"), o) {
    var p = o.children[0];
    p.style.height = J(h.height + h.depth), h.depth && (p.style.verticalAlign = J(-h.depth));
  }
  return h;
}
function $1(n) {
  return new jn(n);
}
class Gt {
  constructor(e, t, r) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = er(this.classes));
    for (var r = 0; r < this.children.length; r++)
      e.appendChild(this.children[r].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += le.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + le.escape(er(this.classes)) + '"'), e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Tn {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return le.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class d2 {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", J(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + J(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var Y = {
  MathNode: Gt,
  TextNode: Tn,
  SpaceNode: d2,
  newDocumentFragment: $1
}, $t = function(e, t, r) {
  return Pe[t][e] && Pe[t][e].replace && e.charCodeAt(0) !== 55349 && !(U1.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = Pe[t][e].replace), new Y.TextNode(e);
}, ws = function(e) {
  return e.length === 1 ? e[0] : new Y.MathNode("mrow", e);
}, xs = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var r = t.font;
  if (!r || r === "mathnormal")
    return null;
  var a = e.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var i = e.text;
  if (le.contains(["\\imath", "\\jmath"], i))
    return null;
  Pe[a][i] && Pe[a][i].replace && (i = Pe[a][i].replace);
  var u = O.fontMap[r].fontName;
  return bs(i, u, a) ? O.fontMap[r].variant : null;
}, _t = function(e, t, r) {
  if (e.length === 1) {
    var a = Re(e[0], t);
    return r && a instanceof Gt && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], u, l = 0; l < e.length; l++) {
    var s = Re(e[l], t);
    if (s instanceof Gt && u instanceof Gt) {
      if (s.type === "mtext" && u.type === "mtext" && s.getAttribute("mathvariant") === u.getAttribute("mathvariant")) {
        u.children.push(...s.children);
        continue;
      } else if (s.type === "mn" && u.type === "mn") {
        u.children.push(...s.children);
        continue;
      } else if (s.type === "mi" && s.children.length === 1 && u.type === "mn") {
        var o = s.children[0];
        if (o instanceof Tn && o.text === ".") {
          u.children.push(...s.children);
          continue;
        }
      } else if (u.type === "mi" && u.children.length === 1) {
        var h = u.children[0];
        if (h instanceof Tn && h.text === "̸" && (s.type === "mo" || s.type === "mi" || s.type === "mn")) {
          var p = s.children[0];
          p instanceof Tn && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1), i.pop());
        }
      }
    }
    i.push(s), u = s;
  }
  return i;
}, rr = function(e, t, r) {
  return ws(_t(e, t, r));
}, Re = function(e, t) {
  if (!e)
    return new Y.MathNode("mrow");
  if (Qa[e.type]) {
    var r = Qa[e.type](e, t);
    return r;
  } else
    throw new K("Got group of unknown type: '" + e.type + "'");
};
function Sl(n, e, t, r, a) {
  var i = _t(n, t), u;
  i.length === 1 && i[0] instanceof Gt && le.contains(["mrow", "mtable"], i[0].type) ? u = i[0] : u = new Y.MathNode("mrow", i);
  var l = new Y.MathNode("annotation", [new Y.TextNode(e)]);
  l.setAttribute("encoding", "application/x-tex");
  var s = new Y.MathNode("semantics", [u, l]), o = new Y.MathNode("math", [s]);
  o.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && o.setAttribute("display", "block");
  var h = a ? "katex" : "katex-mathml";
  return O.makeSpan([h], [o]);
}
var Z1 = function(e) {
  return new z0({
    style: e.displayMode ? de.DISPLAY : de.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, K1 = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = O.makeSpan(r, [e]);
  }
  return e;
}, h2 = function(e, t, r) {
  var a = Z1(r), i;
  if (r.output === "mathml")
    return Sl(e, t, a, r.displayMode, !0);
  if (r.output === "html") {
    var u = Eu(e, a);
    i = O.makeSpan(["katex"], [u]);
  } else {
    var l = Sl(e, t, a, r.displayMode, !1), s = Eu(e, a);
    i = O.makeSpan(["katex"], [l, s]);
  }
  return K1(i, r);
}, m2 = function(e, t, r) {
  var a = Z1(r), i = Eu(e, a), u = O.makeSpan(["katex"], [i]);
  return K1(u, r);
}, p2 = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, g2 = function(e) {
  var t = new Y.MathNode("mo", [new Y.TextNode(p2[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, b2 = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, v2 = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, y2 = function(e, t) {
  function r() {
    var l = 4e5, s = e.label.slice(1);
    if (le.contains(["widehat", "widecheck", "widetilde", "utilde"], s)) {
      var o = e, h = v2(o.base), p, f, m;
      if (h > 5)
        s === "widehat" || s === "widecheck" ? (p = 420, l = 2364, m = 0.42, f = s + "4") : (p = 312, l = 2340, m = 0.34, f = "tilde4");
      else {
        var D = [1, 1, 2, 2, 3, 3][h];
        s === "widehat" || s === "widecheck" ? (l = [0, 1062, 2364, 2364, 2364][D], p = [0, 239, 300, 360, 420][D], m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][D], f = s + D) : (l = [0, 600, 1033, 2339, 2340][D], p = [0, 260, 286, 306, 312][D], m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][D], f = "tilde" + D);
      }
      var _ = new tr(f), w = new H0([_], {
        width: "100%",
        height: J(m),
        viewBox: "0 0 " + l + " " + p,
        preserveAspectRatio: "none"
      });
      return {
        span: O.makeSvgSpan([], [w], t),
        minWidth: 0,
        height: m
      };
    } else {
      var T = [], x = b2[s], [y, S, F] = x, L = F / 1e3, I = y.length, U, z;
      if (I === 1) {
        var B = x[3];
        U = ["hide-tail"], z = [B];
      } else if (I === 2)
        U = ["halfarrow-left", "halfarrow-right"], z = ["xMinYMin", "xMaxYMin"];
      else if (I === 3)
        U = ["brace-left", "brace-center", "brace-right"], z = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + I + " children.");
      for (var k = 0; k < I; k++) {
        var P = new tr(y[k]), G = new H0([P], {
          width: "400em",
          height: J(L),
          viewBox: "0 0 " + l + " " + F,
          preserveAspectRatio: z[k] + " slice"
        }), Z = O.makeSvgSpan([U[k]], [G], t);
        if (I === 1)
          return {
            span: Z,
            minWidth: S,
            height: L
          };
        Z.style.height = J(L), T.push(Z);
      }
      return {
        span: O.makeSpan(["stretchy"], T, t),
        minWidth: S,
        height: L
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: u
  } = r();
  return a.height = u, a.style.height = J(u), i > 0 && (a.style.minWidth = J(i)), a;
}, w2 = function(e, t, r, a, i) {
  var u, l = e.height + e.depth + r + a;
  if (/fbox|color|angl/.test(t)) {
    if (u = O.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var s = i.color && i.getColor();
      s && (u.style.borderColor = s);
    }
  } else {
    var o = [];
    /^[bx]cancel$/.test(t) && o.push(new Au({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && o.push(new Au({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new H0(o, {
      width: "100%",
      height: J(l)
    });
    u = O.makeSvgSpan([], [h], i);
  }
  return u.height = l, u.style.height = J(l), u;
}, G0 = {
  encloseSpan: w2,
  mathMLnode: g2,
  svgSpan: y2
};
function ve(n, e) {
  if (!n || n.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function As(n) {
  var e = mi(n);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return e;
}
function mi(n) {
  return n && (n.type === "atom" || Vh.hasOwnProperty(n.type)) ? n : null;
}
var Ss = (n, e) => {
  var t, r, a;
  n && n.type === "supsub" ? (r = ve(n.base, "accent"), t = r.base, n.base = t, a = Gh(_e(n, e)), n.base = r) : (r = ve(n, "accent"), t = r.base);
  var i = _e(t, e.havingCrampedStyle()), u = r.isShifty && le.isCharacterBox(t), l = 0;
  if (u) {
    var s = le.getBaseElem(t), o = _e(s, e.havingCrampedStyle());
    l = gl(o).skew;
  }
  var h = r.label === "\\c", p = h ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), f;
  if (r.isStretchy)
    f = G0.svgSpan(r, e), f = O.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: f,
        wrapperClasses: ["svg-align"],
        wrapperStyle: l > 0 ? {
          width: "calc(100% - " + J(2 * l) + ")",
          marginLeft: J(2 * l)
        } : void 0
      }]
    }, e);
  else {
    var m, D;
    r.label === "\\vec" ? (m = O.staticSvg("vec", e), D = O.svgData.vec[1]) : (m = O.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), m = gl(m), m.italic = 0, D = m.width, h && (p += m.depth)), f = O.makeSpan(["accent-body"], [m]);
    var _ = r.label === "\\textcircled";
    _ && (f.classes.push("accent-full"), p = i.height);
    var w = l;
    _ || (w -= D / 2), f.style.left = J(w), r.label === "\\textcircled" && (f.style.top = ".2em"), f = O.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -p
      }, {
        type: "elem",
        elem: f
      }]
    }, e);
  }
  var T = O.makeSpan(["mord", "accent"], [f], e);
  return a ? (a.children[0] = T, a.height = Math.max(T.height, a.height), a.classes[0] = "mord", a) : T;
}, Q1 = (n, e) => {
  var t = n.isStretchy ? G0.mathMLnode(n.label) : new Y.MathNode("mo", [$t(n.label, n.mode)]), r = new Y.MathNode("mover", [Re(n.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, x2 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
te({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var t = Ja(e[0]), r = !x2.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Ss,
  mathmlBuilder: Q1
});
te({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = e[0], r = n.parser.mode;
    return r === "math" && (n.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + n.funcName + " works only in text mode"), r = "text"), {
      type: "accent",
      mode: r,
      label: n.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Ss,
  mathmlBuilder: Q1
});
te({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: r,
      base: a
    };
  },
  htmlBuilder: (n, e) => {
    var t = _e(n.base, e), r = G0.svgSpan(n, e), a = n.label === "\\utilde" ? 0.12 : 0, i = O.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return O.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = G0.mathMLnode(n.label), r = new Y.MathNode("munder", [Re(n.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var sa = (n) => {
  var e = new Y.MathNode("mpadded", n ? [n] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
te({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n;
    return {
      type: "xArrow",
      mode: r.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(n, e) {
    var t = e.style, r = e.havingStyle(t.sup()), a = O.wrapFragment(_e(n.body, r, e), e), i = n.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var u;
    n.below && (r = e.havingStyle(t.sub()), u = O.wrapFragment(_e(n.below, r, e), e), u.classes.push(i + "-arrow-pad"));
    var l = G0.svgSpan(n, e), s = -e.fontMetrics().axisHeight + 0.5 * l.height, o = -e.fontMetrics().axisHeight - 0.5 * l.height - 0.111;
    (a.depth > 0.25 || n.label === "\\xleftequilibrium") && (o -= a.depth);
    var h;
    if (u) {
      var p = -e.fontMetrics().axisHeight + u.height + 0.5 * l.height + 0.111;
      h = O.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: o
        }, {
          type: "elem",
          elem: l,
          shift: s
        }, {
          type: "elem",
          elem: u,
          shift: p
        }]
      }, e);
    } else
      h = O.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: o
        }, {
          type: "elem",
          elem: l,
          shift: s
        }]
      }, e);
    return h.children[0].children[0].children[1].classes.push("svg-align"), O.makeSpan(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(n, e) {
    var t = G0.mathMLnode(n.label);
    t.setAttribute("minsize", n.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (n.body) {
      var a = sa(Re(n.body, e));
      if (n.below) {
        var i = sa(Re(n.below, e));
        r = new Y.MathNode("munderover", [t, i, a]);
      } else
        r = new Y.MathNode("mover", [t, a]);
    } else if (n.below) {
      var u = sa(Re(n.below, e));
      r = new Y.MathNode("munder", [t, u]);
    } else
      r = sa(), r = new Y.MathNode("mover", [t, r]);
    return r;
  }
});
var A2 = O.makeSpan;
function J1(n, e) {
  var t = rt(n.body, e, !0);
  return A2([n.mclass], t, e);
}
function ec(n, e) {
  var t, r = _t(n.body, e);
  return n.mclass === "minner" ? t = new Y.MathNode("mpadded", r) : n.mclass === "mord" ? n.isCharacterBox ? (t = r[0], t.type = "mi") : t = new Y.MathNode("mi", r) : (n.isCharacterBox ? (t = r[0], t.type = "mo") : t = new Y.MathNode("mo", r), n.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : n.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : n.mclass === "mopen" || n.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : n.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
te({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + r.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: Qe(a),
      isCharacterBox: le.isCharacterBox(a)
    };
  },
  htmlBuilder: J1,
  mathmlBuilder: ec
});
var pi = (n) => {
  var e = n.type === "ordgroup" && n.body.length ? n.body[0] : n;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
te({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: pi(e[0]),
      body: Qe(e[1]),
      isCharacterBox: le.isCharacterBox(e[1])
    };
  }
});
te({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[1], i = e[0], u;
    r !== "\\stackrel" ? u = pi(a) : u = "mrel";
    var l = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: Qe(a)
    }, s = {
      type: "supsub",
      mode: i.mode,
      base: l,
      sup: r === "\\underset" ? null : i,
      sub: r === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: u,
      body: [s],
      isCharacterBox: le.isCharacterBox(s)
    };
  },
  htmlBuilder: J1,
  mathmlBuilder: ec
});
te({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: pi(e[0]),
      body: Qe(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = rt(n.body, e, !0), r = O.makeSpan([n.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, e) {
    var t = _t(n.body, e), r = new Y.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var S2 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Dl = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), El = (n) => n.type === "textord" && n.text === "@", D2 = (n, e) => (n.type === "mathord" || n.type === "atom") && n.text === e;
function E2(n, e, t) {
  var r = S2[n];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(r, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: r,
        mode: "math",
        family: "rel"
      }, u = t.callFunction("\\Big", [i], []), l = t.callFunction("\\\\cdright", [e[1]], []), s = {
        type: "ordgroup",
        mode: "math",
        body: [a, u, l]
      };
      return t.callFunction("\\\\cdparent", [s], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var o = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [o], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function k2(n) {
  var e = [];
  for (n.gullet.beginGroup(), n.gullet.macros.set("\\cr", "\\\\\\relax"), n.gullet.beginGroup(); ; ) {
    e.push(n.parseExpression(!1, "\\\\")), n.gullet.endGroup(), n.gullet.beginGroup();
    var t = n.fetch().text;
    if (t === "&" || t === "\\\\")
      n.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new K("Expected \\\\ or \\cr or \\end", n.nextToken);
  }
  for (var r = [], a = [r], i = 0; i < e.length; i++) {
    for (var u = e[i], l = Dl(), s = 0; s < u.length; s++)
      if (!El(u[s]))
        l.body.push(u[s]);
      else {
        r.push(l), s += 1;
        var o = As(u[s]).text, h = new Array(2);
        if (h[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, h[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(o) > -1)) if ("<>AV".indexOf(o) > -1)
          for (var p = 0; p < 2; p++) {
            for (var f = !0, m = s + 1; m < u.length; m++) {
              if (D2(u[m], o)) {
                f = !1, s = m;
                break;
              }
              if (El(u[m]))
                throw new K("Missing a " + o + " character to complete a CD arrow.", u[m]);
              h[p].body.push(u[m]);
            }
            if (f)
              throw new K("Missing a " + o + " character to complete a CD arrow.", u[s]);
          }
        else
          throw new K('Expected one of "<>AV=|." after @', u[s]);
        var D = E2(o, h, n), _ = {
          type: "styling",
          body: [D],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(_), l = Dl();
      }
    i % 2 === 0 ? r.push(l) : r.shift(), r = [], a.push(r);
  }
  n.gullet.endGroup(), n.gullet.endGroup();
  var w = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: w,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
te({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: r.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = e.havingStyle(e.style.sup()), r = O.wrapFragment(_e(n.label, t, e), e);
    return r.classes.push("cd-label-" + n.side), r.style.bottom = J(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mrow", [Re(n.label, e)]);
    return t = new Y.MathNode("mpadded", [t]), t.setAttribute("width", "0"), n.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new Y.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
te({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = O.wrapFragment(_e(n.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(n, e) {
    return new Y.MathNode("mrow", [Re(n.fragment, e)]);
  }
});
te({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    for (var {
      parser: t
    } = n, r = ve(e[0], "ordgroup"), a = r.body, i = "", u = 0; u < a.length; u++) {
      var l = ve(a[u], "textord");
      i += l.text;
    }
    var s = parseInt(i), o;
    if (isNaN(s))
      throw new K("\\@char has non-numeric argument " + i);
    if (s < 0 || s >= 1114111)
      throw new K("\\@char with invalid code point " + i);
    return s <= 65535 ? o = String.fromCharCode(s) : (s -= 65536, o = String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: o
    };
  }
});
var tc = (n, e) => {
  var t = rt(n.body, e.withColor(n.color), !1);
  return O.makeFragment(t);
}, rc = (n, e) => {
  var t = _t(n.body, e.withColor(n.color)), r = new Y.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", n.color), r;
};
te({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = ve(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: Qe(a)
    };
  },
  htmlBuilder: tc,
  mathmlBuilder: rc
});
te({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(n, e) {
    var {
      parser: t,
      breakOnTokenText: r
    } = n, a = ve(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: tc,
  mathmlBuilder: rc
});
te({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null, i = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: r.mode,
      newLine: i,
      size: a && ve(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(n, e) {
    var t = O.makeSpan(["mspace"], [], e);
    return n.newLine && (t.classes.push("newline"), n.size && (t.style.marginTop = J(Ve(n.size, e)))), t;
  },
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mspace");
    return n.newLine && (t.setAttribute("linebreak", "newline"), n.size && t.setAttribute("height", J(Ve(n.size, e)))), t;
  }
});
var ku = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, nc = (n) => {
  var e = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new K("Expected a control sequence", n);
  return e;
}, _2 = (n) => {
  var e = n.gullet.popToken();
  return e.text === "=" && (e = n.gullet.popToken(), e.text === " " && (e = n.gullet.popToken())), e;
}, ac = (n, e, t, r) => {
  var a = n.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !n.gullet.isExpandable(t.text)
  }), n.gullet.macros.set(e, a, r);
};
te({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    e.consumeSpaces();
    var r = e.fetch();
    if (ku[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = ku[r.text]), ve(e.parseFunction(), "internal");
    throw new K("Invalid token after macro prefix", r);
  }
});
te({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = e.gullet.popToken(), a = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new K("Expected a control sequence", r);
    for (var i = 0, u, l = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          u = e.gullet.future(), l[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new K('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new K('Argument number "' + r.text + '" out of order');
        i++, l.push([]);
      } else {
        if (r.text === "EOF")
          throw new K("Expected a macro definition");
        l[i].push(r.text);
      }
    var {
      tokens: s
    } = e.gullet.consumeArg();
    return u && s.unshift(u), (t === "\\edef" || t === "\\xdef") && (s = e.gullet.expandTokens(s), s.reverse()), e.gullet.macros.set(a, {
      tokens: s,
      numArgs: i,
      delimiters: l
    }, t === ku[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
te({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = nc(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = _2(e);
    return ac(e, r, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
te({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = nc(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return ac(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var Dn = function(e, t, r) {
  var a = Pe.math[e] && Pe.math[e].replace, i = bs(a || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Ds = function(e, t, r, a) {
  var i = r.havingBaseStyle(t), u = O.makeSpan(a.concat(i.sizingClasses(r)), [e], r), l = i.sizeMultiplier / r.sizeMultiplier;
  return u.height *= l, u.depth *= l, u.maxFontSize = i.sizeMultiplier, u;
}, ic = function(e, t, r) {
  var a = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = J(i), e.height -= i, e.depth += i;
}, T2 = function(e, t, r, a, i, u) {
  var l = O.makeSymbol(e, "Main-Regular", i, a), s = Ds(l, t, a, u);
  return r && ic(s, a, t), s;
}, C2 = function(e, t, r, a) {
  return O.makeSymbol(e, "Size" + t + "-Regular", r, a);
}, uc = function(e, t, r, a, i, u) {
  var l = C2(e, t, i, a), s = Ds(O.makeSpan(["delimsizing", "size" + t], [l], a), de.TEXT, a, u);
  return r && ic(s, a, de.TEXT), s;
}, Gi = function(e, t, r) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = O.makeSpan(["delimsizinginner", a], [O.makeSpan([], [O.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, ji = function(e, t, r) {
  var a = w0["Size4-Regular"][e.charCodeAt(0)] ? w0["Size4-Regular"][e.charCodeAt(0)][4] : w0["Size1-Regular"][e.charCodeAt(0)][4], i = new tr("inner", Rh(e, Math.round(1e3 * t))), u = new H0([i], {
    width: J(a),
    height: J(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + J(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), l = O.makeSvgSpan([], [u], r);
  return l.height = t, l.style.height = J(t), l.style.width = J(a), {
    type: "elem",
    elem: l
  };
}, _u = 8e-3, la = {
  type: "kern",
  size: -1 * _u
}, F2 = ["|", "\\lvert", "\\rvert", "\\vert"], M2 = ["\\|", "\\lVert", "\\rVert", "\\Vert"], sc = function(e, t, r, a, i, u) {
  var l, s, o, h, p = "", f = 0;
  l = o = h = e, s = null;
  var m = "Size1-Regular";
  e === "\\uparrow" ? o = h = "⏐" : e === "\\Uparrow" ? o = h = "‖" : e === "\\downarrow" ? l = o = "⏐" : e === "\\Downarrow" ? l = o = "‖" : e === "\\updownarrow" ? (l = "\\uparrow", o = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (l = "\\Uparrow", o = "‖", h = "\\Downarrow") : le.contains(F2, e) ? (o = "∣", p = "vert", f = 333) : le.contains(M2, e) ? (o = "∥", p = "doublevert", f = 556) : e === "[" || e === "\\lbrack" ? (l = "⎡", o = "⎢", h = "⎣", m = "Size4-Regular", p = "lbrack", f = 667) : e === "]" || e === "\\rbrack" ? (l = "⎤", o = "⎥", h = "⎦", m = "Size4-Regular", p = "rbrack", f = 667) : e === "\\lfloor" || e === "⌊" ? (o = l = "⎢", h = "⎣", m = "Size4-Regular", p = "lfloor", f = 667) : e === "\\lceil" || e === "⌈" ? (l = "⎡", o = h = "⎢", m = "Size4-Regular", p = "lceil", f = 667) : e === "\\rfloor" || e === "⌋" ? (o = l = "⎥", h = "⎦", m = "Size4-Regular", p = "rfloor", f = 667) : e === "\\rceil" || e === "⌉" ? (l = "⎤", o = h = "⎥", m = "Size4-Regular", p = "rceil", f = 667) : e === "(" || e === "\\lparen" ? (l = "⎛", o = "⎜", h = "⎝", m = "Size4-Regular", p = "lparen", f = 875) : e === ")" || e === "\\rparen" ? (l = "⎞", o = "⎟", h = "⎠", m = "Size4-Regular", p = "rparen", f = 875) : e === "\\{" || e === "\\lbrace" ? (l = "⎧", s = "⎨", h = "⎩", o = "⎪", m = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (l = "⎫", s = "⎬", h = "⎭", o = "⎪", m = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (l = "⎧", h = "⎩", o = "⎪", m = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (l = "⎫", h = "⎭", o = "⎪", m = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (l = "⎧", h = "⎭", o = "⎪", m = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (l = "⎫", h = "⎩", o = "⎪", m = "Size4-Regular");
  var D = Dn(l, m, i), _ = D.height + D.depth, w = Dn(o, m, i), T = w.height + w.depth, x = Dn(h, m, i), y = x.height + x.depth, S = 0, F = 1;
  if (s !== null) {
    var L = Dn(s, m, i);
    S = L.height + L.depth, F = 2;
  }
  var I = _ + y + S, U = Math.max(0, Math.ceil((t - I) / (F * T))), z = I + U * F * T, B = a.fontMetrics().axisHeight;
  r && (B *= a.sizeMultiplier);
  var k = z / 2 - B, P = [];
  if (p.length > 0) {
    var G = z - _ - y, Z = Math.round(z * 1e3), N = Lh(p, Math.round(G * 1e3)), H = new tr(p, N), j = (f / 1e3).toFixed(3) + "em", $ = (Z / 1e3).toFixed(3) + "em", ce = new H0([H], {
      width: j,
      height: $,
      viewBox: "0 0 " + f + " " + Z
    }), ae = O.makeSvgSpan([], [ce], a);
    ae.height = Z / 1e3, ae.style.width = j, ae.style.height = $, P.push({
      type: "elem",
      elem: ae
    });
  } else {
    if (P.push(Gi(h, m, i)), P.push(la), s === null) {
      var R = z - _ - y + 2 * _u;
      P.push(ji(o, R, a));
    } else {
      var re = (z - _ - y - S) / 2 + 2 * _u;
      P.push(ji(o, re, a)), P.push(la), P.push(Gi(s, m, i)), P.push(la), P.push(ji(o, re, a));
    }
    P.push(la), P.push(Gi(l, m, i));
  }
  var ie = a.havingBaseStyle(de.TEXT), ue = O.makeVList({
    positionType: "bottom",
    positionData: k,
    children: P
  }, ie);
  return Ds(O.makeSpan(["delimsizing", "mult"], [ue], ie), de.TEXT, a, u);
}, Vi = 80, Wi = 0.08, Xi = function(e, t, r, a, i) {
  var u = Ih(e, a, r), l = new tr(e, u), s = new H0([l], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: J(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return O.makeSvgSpan(["hide-tail"], [s], i);
}, N2 = function(e, t) {
  var r = t.havingBaseSizing(), a = fc("\\surd", e * r.sizeMultiplier, cc, r), i = r.sizeMultiplier, u = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), l, s = 0, o = 0, h = 0, p;
  return a.type === "small" ? (h = 1e3 + 1e3 * u + Vi, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), s = (1 + u + Wi) / i, o = (1 + u) / i, l = Xi("sqrtMain", s, h, u, t), l.style.minWidth = "0.853em", p = 0.833 / i) : a.type === "large" ? (h = (1e3 + Vi) * Cn[a.size], o = (Cn[a.size] + u) / i, s = (Cn[a.size] + u + Wi) / i, l = Xi("sqrtSize" + a.size, s, h, u, t), l.style.minWidth = "1.02em", p = 1 / i) : (s = e + u + Wi, o = e + u, h = Math.floor(1e3 * e + u) + Vi, l = Xi("sqrtTall", s, h, u, t), l.style.minWidth = "0.742em", p = 1.056), l.height = o, l.style.height = J(s), {
    span: l,
    advanceWidth: p,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + u) * i
  };
}, lc = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], O2 = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], oc = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Cn = [0, 1.2, 1.8, 2.4, 3], I2 = function(e, t, r, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), le.contains(lc, e) || le.contains(oc, e))
    return uc(e, t, !1, r, a, i);
  if (le.contains(O2, e))
    return sc(e, Cn[t], !1, r, a, i);
  throw new K("Illegal delimiter: '" + e + "'");
}, R2 = [{
  type: "small",
  style: de.SCRIPTSCRIPT
}, {
  type: "small",
  style: de.SCRIPT
}, {
  type: "small",
  style: de.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], L2 = [{
  type: "small",
  style: de.SCRIPTSCRIPT
}, {
  type: "small",
  style: de.SCRIPT
}, {
  type: "small",
  style: de.TEXT
}, {
  type: "stack"
}], cc = [{
  type: "small",
  style: de.SCRIPTSCRIPT
}, {
  type: "small",
  style: de.SCRIPT
}, {
  type: "small",
  style: de.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], B2 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, fc = function(e, t, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), u = i; u < r.length && r[u].type !== "stack"; u++) {
    var l = Dn(e, B2(r[u]), "math"), s = l.height + l.depth;
    if (r[u].type === "small") {
      var o = a.havingBaseStyle(r[u].style);
      s *= o.sizeMultiplier;
    }
    if (s > t)
      return r[u];
  }
  return r[r.length - 1];
}, dc = function(e, t, r, a, i, u) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var l;
  le.contains(oc, e) ? l = R2 : le.contains(lc, e) ? l = cc : l = L2;
  var s = fc(e, t, l, a);
  return s.type === "small" ? T2(e, s.style, r, a, i, u) : s.type === "large" ? uc(e, s.size, r, a, i, u) : sc(e, t, r, a, i, u);
}, z2 = function(e, t, r, a, i, u) {
  var l = a.fontMetrics().axisHeight * a.sizeMultiplier, s = 901, o = 5 / a.fontMetrics().ptPerEm, h = Math.max(t - l, r + l), p = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    h / 500 * s,
    2 * h - o
  );
  return dc(e, p, !0, a, i, u);
}, q0 = {
  sqrtImage: N2,
  sizedDelim: I2,
  sizeToMaxHeight: Cn,
  customSizedDelim: dc,
  leftRightDelim: z2
}, kl = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, P2 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function gi(n, e) {
  var t = mi(n);
  if (t && le.contains(P2, t.text))
    return t;
  throw t ? new K("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", n) : new K("Invalid delimiter type '" + n.type + "'", n);
}
te({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = gi(e[0], n);
    return {
      type: "delimsizing",
      mode: n.parser.mode,
      size: kl[n.funcName].size,
      mclass: kl[n.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => n.delim === "." ? O.makeSpan([n.mclass]) : q0.sizedDelim(n.delim, n.size, e, n.mode, [n.mclass]),
  mathmlBuilder: (n) => {
    var e = [];
    n.delim !== "." && e.push($t(n.delim, n.mode));
    var t = new Y.MathNode("mo", e);
    n.mclass === "mopen" || n.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = J(q0.sizeToMaxHeight[n.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function _l(n) {
  if (!n.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
te({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = n.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new K("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: n.parser.mode,
      delim: gi(e[0], n).text,
      color: t
      // undefined if not set via \color
    };
  }
});
te({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = gi(e[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = ve(r.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: r.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (n, e) => {
    _l(n);
    for (var t = rt(n.body, e, !0, ["mopen", "mclose"]), r = 0, a = 0, i = !1, u = 0; u < t.length; u++)
      t[u].isMiddle ? i = !0 : (r = Math.max(t[u].height, r), a = Math.max(t[u].depth, a));
    r *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var l;
    if (n.left === "." ? l = Rn(e, ["mopen"]) : l = q0.leftRightDelim(n.left, r, a, e, n.mode, ["mopen"]), t.unshift(l), i)
      for (var s = 1; s < t.length; s++) {
        var o = t[s], h = o.isMiddle;
        h && (t[s] = q0.leftRightDelim(h.delim, r, a, h.options, n.mode, []));
      }
    var p;
    if (n.right === ".")
      p = Rn(e, ["mclose"]);
    else {
      var f = n.rightColor ? e.withColor(n.rightColor) : e;
      p = q0.leftRightDelim(n.right, r, a, f, n.mode, ["mclose"]);
    }
    return t.push(p), O.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (n, e) => {
    _l(n);
    var t = _t(n.body, e);
    if (n.left !== ".") {
      var r = new Y.MathNode("mo", [$t(n.left, n.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (n.right !== ".") {
      var a = new Y.MathNode("mo", [$t(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), t.push(a);
    }
    return ws(t);
  }
});
te({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = gi(e[0], n);
    if (!n.parser.leftrightDepth)
      throw new K("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: n.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    if (n.delim === ".")
      t = Rn(e, []);
    else {
      t = q0.sizedDelim(n.delim, 1, e, n.mode, []);
      var r = {
        delim: n.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (n, e) => {
    var t = n.delim === "\\vert" || n.delim === "|" ? $t("|", "text") : $t(n.delim, n.mode), r = new Y.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var Es = (n, e) => {
  var t = O.wrapFragment(_e(n.body, e), e), r = n.label.slice(1), a = e.sizeMultiplier, i, u = 0, l = le.isCharacterBox(n.body);
  if (r === "sout")
    i = O.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, u = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var s = Ve({
      number: 0.6,
      unit: "pt"
    }, e), o = Ve({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    a = a / h.sizeMultiplier;
    var p = t.height + t.depth + s + o;
    t.style.paddingLeft = J(p / 2 + s);
    var f = Math.floor(1e3 * p * a), m = Nh(f), D = new H0([new tr("phase", m)], {
      width: "400em",
      height: J(f / 1e3),
      viewBox: "0 0 400000 " + f,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = O.makeSvgSpan(["hide-tail"], [D], e), i.style.height = J(p), u = t.depth + s + o;
  } else {
    /cancel/.test(r) ? l || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var _ = 0, w = 0, T = 0;
    /box/.test(r) ? (T = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), _ = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : T), w = _) : r === "angl" ? (T = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), _ = 4 * T, w = Math.max(0, 0.25 - t.depth)) : (_ = l ? 0.2 : 0, w = _), i = G0.encloseSpan(t, r, _, w, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = J(T)) : r === "angl" && T !== 0.049 && (i.style.borderTopWidth = J(T), i.style.borderRightWidth = J(T)), u = t.depth + w, n.backgroundColor && (i.style.backgroundColor = n.backgroundColor, n.borderColor && (i.style.borderColor = n.borderColor));
  }
  var x;
  if (n.backgroundColor)
    x = O.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: u
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var y = /cancel|phase/.test(r) ? ["svg-align"] : [];
    x = O.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: u,
          wrapperClasses: y
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (x.height = t.height, x.depth = t.depth), /cancel/.test(r) && !l ? O.makeSpan(["mord", "cancel-lap"], [x], e) : O.makeSpan(["mord"], [x], e);
}, ks = (n, e) => {
  var t = 0, r = new Y.MathNode(n.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Re(n.body, e)]);
  switch (n.label) {
    case "\\cancel":
      r.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      r.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      r.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      r.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      r.setAttribute("notation", "box");
      break;
    case "\\angl":
      r.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * t + "pt"), r.setAttribute("height", "+" + 2 * t + "pt"), r.setAttribute("lspace", t + "pt"), r.setAttribute("voffset", t + "pt"), n.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        r.setAttribute("style", "border: " + a + "em solid " + String(n.borderColor));
      }
      break;
    case "\\xcancel":
      r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return n.backgroundColor && r.setAttribute("mathbackground", n.backgroundColor), r;
};
te({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n, i = ve(e[0], "color-token").color, u = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: u
    };
  },
  htmlBuilder: Es,
  mathmlBuilder: ks
});
te({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n, i = ve(e[0], "color-token").color, u = ve(e[1], "color-token").color, l = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: u,
      borderColor: i,
      body: l
    };
  },
  htmlBuilder: Es,
  mathmlBuilder: ks
});
te({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
te({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: r,
      body: a
    };
  },
  htmlBuilder: Es,
  mathmlBuilder: ks
});
te({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var hc = {};
function T0(n) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: u
  } = n, l = {
    type: e,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, s = 0; s < t.length; ++s)
    hc[t[s]] = l;
  i && (Ka[e] = i), u && (Qa[e] = u);
}
var mc = {};
function v(n, e) {
  mc[n] = e;
}
function Tl(n) {
  var e = [];
  n.consumeSpaces();
  var t = n.fetch().text;
  for (t === "\\relax" && (n.consume(), n.consumeSpaces(), t = n.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    n.consume(), e.push(t === "\\hdashline"), n.consumeSpaces(), t = n.fetch().text;
  return e;
}
var bi = (n) => {
  var e = n.parser.settings;
  if (!e.displayMode)
    throw new K("{" + n.envName + "} can be used only in display mode.");
};
function _s(n) {
  if (n.indexOf("ed") === -1)
    return n.indexOf("*") === -1;
}
function nr(n, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: a,
    cols: i,
    arraystretch: u,
    colSeparationType: l,
    autoTag: s,
    singleRow: o,
    emptySingleRow: h,
    maxNumCols: p,
    leqno: f
  } = e;
  if (n.gullet.beginGroup(), o || n.gullet.macros.set("\\cr", "\\\\\\relax"), !u) {
    var m = n.gullet.expandMacroAsText("\\arraystretch");
    if (m == null)
      u = 1;
    else if (u = parseFloat(m), !u || u < 0)
      throw new K("Invalid \\arraystretch: " + m);
  }
  n.gullet.beginGroup();
  var D = [], _ = [D], w = [], T = [], x = s != null ? [] : void 0;
  function y() {
    s && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function S() {
    x && (n.gullet.macros.get("\\df@tag") ? (x.push(n.subparse([new Xt("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : x.push(!!s && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (y(), T.push(Tl(n)); ; ) {
    var F = n.parseExpression(!1, o ? "\\end" : "\\\\");
    n.gullet.endGroup(), n.gullet.beginGroup(), F = {
      type: "ordgroup",
      mode: n.mode,
      body: F
    }, t && (F = {
      type: "styling",
      mode: n.mode,
      style: t,
      body: [F]
    }), D.push(F);
    var L = n.fetch().text;
    if (L === "&") {
      if (p && D.length === p) {
        if (o || l)
          throw new K("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (L === "\\end") {
      S(), D.length === 1 && F.type === "styling" && F.body[0].body.length === 0 && (_.length > 1 || !h) && _.pop(), T.length < _.length + 1 && T.push([]);
      break;
    } else if (L === "\\\\") {
      n.consume();
      var I = void 0;
      n.gullet.future().text !== " " && (I = n.parseSizeGroup(!0)), w.push(I ? I.value : null), S(), T.push(Tl(n)), D = [], _.push(D), y();
    } else
      throw new K("Expected & or \\\\ or \\cr or \\end", n.nextToken);
  }
  return n.gullet.endGroup(), n.gullet.endGroup(), {
    type: "array",
    mode: n.mode,
    addJot: a,
    arraystretch: u,
    body: _,
    cols: i,
    rowGaps: w,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: T,
    colSeparationType: l,
    tags: x,
    leqno: f
  };
}
function Ts(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var C0 = function(e, t) {
  var r, a, i = e.body.length, u = e.hLinesBeforeRow, l = 0, s = new Array(i), o = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), p = 1 / t.fontMetrics().ptPerEm, f = 5 * p;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var m = t.havingStyle(de.SCRIPT).sizeMultiplier;
    f = 0.2778 * (m / t.sizeMultiplier);
  }
  var D = e.colSeparationType === "CD" ? Ve({
    number: 3,
    unit: "ex"
  }, t) : 12 * p, _ = 3 * p, w = e.arraystretch * D, T = 0.7 * w, x = 0.3 * w, y = 0;
  function S(vt) {
    for (var yt = 0; yt < vt.length; ++yt)
      yt > 0 && (y += 0.25), o.push({
        pos: y,
        isDashed: vt[yt]
      });
  }
  for (S(u[0]), r = 0; r < e.body.length; ++r) {
    var F = e.body[r], L = T, I = x;
    l < F.length && (l = F.length);
    var U = new Array(F.length);
    for (a = 0; a < F.length; ++a) {
      var z = _e(F[a], t);
      I < z.depth && (I = z.depth), L < z.height && (L = z.height), U[a] = z;
    }
    var B = e.rowGaps[r], k = 0;
    B && (k = Ve(B, t), k > 0 && (k += x, I < k && (I = k), k = 0)), e.addJot && (I += _), U.height = L, U.depth = I, y += L, U.pos = y, y += I + k, s[r] = U, S(u[r + 1]);
  }
  var P = y / 2 + t.fontMetrics().axisHeight, G = e.cols || [], Z = [], N, H, j = [];
  if (e.tags && e.tags.some((vt) => vt))
    for (r = 0; r < i; ++r) {
      var $ = s[r], ce = $.pos - P, ae = e.tags[r], R = void 0;
      ae === !0 ? R = O.makeSpan(["eqn-num"], [], t) : ae === !1 ? R = O.makeSpan([], [], t) : R = O.makeSpan([], rt(ae, t, !0), t), R.depth = $.depth, R.height = $.height, j.push({
        type: "elem",
        elem: R,
        shift: ce
      });
    }
  for (
    a = 0, H = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < l || H < G.length;
    ++a, ++H
  ) {
    for (var re = G[H] || {}, ie = !0; re.type === "separator"; ) {
      if (ie || (N = O.makeSpan(["arraycolsep"], []), N.style.width = J(t.fontMetrics().doubleRuleSep), Z.push(N)), re.separator === "|" || re.separator === ":") {
        var ue = re.separator === "|" ? "solid" : "dashed", q = O.makeSpan(["vertical-separator"], [], t);
        q.style.height = J(y), q.style.borderRightWidth = J(h), q.style.borderRightStyle = ue, q.style.margin = "0 " + J(-h / 2);
        var Q = y - P;
        Q && (q.style.verticalAlign = J(-Q)), Z.push(q);
      } else
        throw new K("Invalid separator type: " + re.separator);
      H++, re = G[H] || {}, ie = !1;
    }
    if (!(a >= l)) {
      var ee = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (ee = le.deflt(re.pregap, f), ee !== 0 && (N = O.makeSpan(["arraycolsep"], []), N.style.width = J(ee), Z.push(N)));
      var ye = [];
      for (r = 0; r < i; ++r) {
        var Te = s[r], Le = Te[a];
        if (Le) {
          var Be = Te.pos - P;
          Le.depth = Te.depth, Le.height = Te.height, ye.push({
            type: "elem",
            elem: Le,
            shift: Be
          });
        }
      }
      ye = O.makeVList({
        positionType: "individualShift",
        children: ye
      }, t), ye = O.makeSpan(["col-align-" + (re.align || "c")], [ye]), Z.push(ye), (a < l - 1 || e.hskipBeforeAndAfter) && (ee = le.deflt(re.postgap, f), ee !== 0 && (N = O.makeSpan(["arraycolsep"], []), N.style.width = J(ee), Z.push(N)));
    }
  }
  if (s = O.makeSpan(["mtable"], Z), o.length > 0) {
    for (var Ye = O.makeLineSpan("hline", t, h), He = O.makeLineSpan("hdashline", t, h), ze = [{
      type: "elem",
      elem: s,
      shift: 0
    }]; o.length > 0; ) {
      var nt = o.pop(), bt = nt.pos - P;
      nt.isDashed ? ze.push({
        type: "elem",
        elem: He,
        shift: bt
      }) : ze.push({
        type: "elem",
        elem: Ye,
        shift: bt
      });
    }
    s = O.makeVList({
      positionType: "individualShift",
      children: ze
    }, t);
  }
  if (j.length === 0)
    return O.makeSpan(["mord"], [s], t);
  var it = O.makeVList({
    positionType: "individualShift",
    children: j
  }, t);
  return it = O.makeSpan(["tag"], [it], t), O.makeFragment([s, it]);
}, q2 = {
  c: "center ",
  l: "left ",
  r: "right "
}, F0 = function(e, t) {
  for (var r = [], a = new Y.MathNode("mtd", [], ["mtr-glue"]), i = new Y.MathNode("mtd", [], ["mml-eqn-num"]), u = 0; u < e.body.length; u++) {
    for (var l = e.body[u], s = [], o = 0; o < l.length; o++)
      s.push(new Y.MathNode("mtd", [Re(l[o], t)]));
    e.tags && e.tags[u] && (s.unshift(a), s.push(a), e.leqno ? s.unshift(i) : s.push(i)), r.push(new Y.MathNode("mtr", s));
  }
  var h = new Y.MathNode("mtable", r), p = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", J(p));
  var f = "", m = "";
  if (e.cols && e.cols.length > 0) {
    var D = e.cols, _ = "", w = !1, T = 0, x = D.length;
    D[0].type === "separator" && (f += "top ", T = 1), D[D.length - 1].type === "separator" && (f += "bottom ", x -= 1);
    for (var y = T; y < x; y++)
      D[y].type === "align" ? (m += q2[D[y].align], w && (_ += "none "), w = !0) : D[y].type === "separator" && w && (_ += D[y].separator === "|" ? "solid " : "dashed ", w = !1);
    h.setAttribute("columnalign", m.trim()), /[sd]/.test(_) && h.setAttribute("columnlines", _.trim());
  }
  if (e.colSeparationType === "align") {
    for (var S = e.cols || [], F = "", L = 1; L < S.length; L++)
      F += L % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", F.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var I = "", U = e.hLinesBeforeRow;
  f += U[0].length > 0 ? "left " : "", f += U[U.length - 1].length > 0 ? "right " : "";
  for (var z = 1; z < U.length - 1; z++)
    I += U[z].length === 0 ? "none " : U[z][0] ? "dashed " : "solid ";
  return /[sd]/.test(I) && h.setAttribute("rowlines", I.trim()), f !== "" && (h = new Y.MathNode("menclose", [h]), h.setAttribute("notation", f.trim())), e.arraystretch && e.arraystretch < 1 && (h = new Y.MathNode("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, pc = function(e, t) {
  e.envName.indexOf("ed") === -1 && bi(e);
  var r = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", u = nr(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : _s(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), l, s = 0, o = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var h = "", p = 0; p < t[0].body.length; p++) {
      var f = ve(t[0].body[p], "textord");
      h += f.text;
    }
    l = Number(h), s = l * 2;
  }
  var m = !s;
  u.body.forEach(function(T) {
    for (var x = 1; x < T.length; x += 2) {
      var y = ve(T[x], "styling"), S = ve(y.body[0], "ordgroup");
      S.body.unshift(o);
    }
    if (m)
      s < T.length && (s = T.length);
    else {
      var F = T.length / 2;
      if (l < F)
        throw new K("Too many math in a row: " + ("expected " + l + ", but got " + F), T[0]);
    }
  });
  for (var D = 0; D < s; ++D) {
    var _ = "r", w = 0;
    D % 2 === 1 ? _ = "l" : D > 0 && m && (w = 1), r[D] = {
      type: "align",
      align: _,
      pregap: w,
      postgap: 0
    };
  }
  return u.colSeparationType = m ? "align" : "alignat", u;
};
T0({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = mi(e[0]), r = t ? [e[0]] : ve(e[0], "ordgroup").body, a = r.map(function(u) {
      var l = As(u), s = l.text;
      if ("lcr".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      if (s === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (s === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new K("Unknown column alignment: " + s, u);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return nr(n.parser, i, Ts(n.envName));
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[n.envName.replace("*", "")], t = "c", r = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (n.envName.charAt(n.envName.length - 1) === "*") {
      var a = n.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, "lcr".indexOf(t) === -1)
          throw new K("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = nr(n.parser, r, Ts(n.envName)), u = Math.max(0, ...i.body.map((l) => l.length));
    return i.cols = new Array(u).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: n.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 0.5
    }, t = nr(n.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = mi(e[0]), r = t ? [e[0]] : ve(e[0], "ordgroup").body, a = r.map(function(u) {
      var l = As(u), s = l.text;
      if ("lc".indexOf(s) !== -1)
        return {
          type: "align",
          align: s
        };
      throw new K("Unknown column alignment: " + s, u);
    });
    if (a.length > 1)
      throw new K("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = nr(n.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new K("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = nr(n.parser, e, Ts(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [t],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: pc,
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    le.contains(["gather", "gather*"], n.envName) && bi(n);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: _s(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return nr(n.parser, e, "display");
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: pc,
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    bi(n);
    var e = {
      autoTag: _s(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return nr(n.parser, e, "display");
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
T0({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return bi(n), k2(n.parser);
  },
  htmlBuilder: C0,
  mathmlBuilder: F0
});
v("\\nonumber", "\\gdef\\@eqnsw{0}");
v("\\notag", "\\nonumber");
te({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(n, e) {
    throw new K(n.funcName + " valid only within array environment");
  }
});
var Cl = hc;
te({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    if (a.type !== "ordgroup")
      throw new K("Invalid environment name", a);
    for (var i = "", u = 0; u < a.body.length; ++u)
      i += ve(a.body[u], "textord").text;
    if (r === "\\begin") {
      if (!Cl.hasOwnProperty(i))
        throw new K("No such environment: " + i, a);
      var l = Cl[i], {
        args: s,
        optArgs: o
      } = t.parseArguments("\\begin{" + i + "}", l), h = {
        mode: t.mode,
        envName: i,
        parser: t
      }, p = l.handler(h, s, o);
      t.expect("\\end", !1);
      var f = t.nextToken, m = ve(t.parseFunction(), "environment");
      if (m.name !== i)
        throw new K("Mismatch: \\begin{" + i + "} matched by \\end{" + m.name + "}", f);
      return p;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var gc = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return _e(n.body, r);
}, bc = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return Re(n.body, r);
}, Fl = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
te({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = Ja(e[0]), i = r;
    return i in Fl && (i = Fl[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: gc,
  mathmlBuilder: bc
});
te({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0], a = le.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: pi(r),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: r
      }],
      isCharacterBox: a
    };
  }
});
te({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r,
      breakOnTokenText: a
    } = n, {
      mode: i
    } = t, u = t.parseExpression(!0, a), l = "math" + r.slice(1);
    return {
      type: "font",
      mode: i,
      font: l,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: u
      }
    };
  },
  htmlBuilder: gc,
  mathmlBuilder: bc
});
var vc = (n, e) => {
  var t = e;
  return n === "display" ? t = t.id >= de.SCRIPT.id ? t.text() : de.DISPLAY : n === "text" && t.size === de.DISPLAY.size ? t = de.TEXT : n === "script" ? t = de.SCRIPT : n === "scriptscript" && (t = de.SCRIPTSCRIPT), t;
}, Cs = (n, e) => {
  var t = vc(n.size, e.style), r = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(r);
  var u = _e(n.numer, i, e);
  if (n.continued) {
    var l = 8.5 / e.fontMetrics().ptPerEm, s = 3.5 / e.fontMetrics().ptPerEm;
    u.height = u.height < l ? l : u.height, u.depth = u.depth < s ? s : u.depth;
  }
  i = e.havingStyle(a);
  var o = _e(n.denom, i, e), h, p, f;
  n.hasBarLine ? (n.barSize ? (p = Ve(n.barSize, e), h = O.makeLineSpan("frac-line", e, p)) : h = O.makeLineSpan("frac-line", e), p = h.height, f = h.height) : (h = null, p = 0, f = e.fontMetrics().defaultRuleThickness);
  var m, D, _;
  t.size === de.DISPLAY.size || n.size === "display" ? (m = e.fontMetrics().num1, p > 0 ? D = 3 * f : D = 7 * f, _ = e.fontMetrics().denom1) : (p > 0 ? (m = e.fontMetrics().num2, D = f) : (m = e.fontMetrics().num3, D = 3 * f), _ = e.fontMetrics().denom2);
  var w;
  if (h) {
    var x = e.fontMetrics().axisHeight;
    m - u.depth - (x + 0.5 * p) < D && (m += D - (m - u.depth - (x + 0.5 * p))), x - 0.5 * p - (o.height - _) < D && (_ += D - (x - 0.5 * p - (o.height - _)));
    var y = -(x - 0.5 * p);
    w = O.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: o,
        shift: _
      }, {
        type: "elem",
        elem: h,
        shift: y
      }, {
        type: "elem",
        elem: u,
        shift: -m
      }]
    }, e);
  } else {
    var T = m - u.depth - (o.height - _);
    T < D && (m += 0.5 * (D - T), _ += 0.5 * (D - T)), w = O.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: o,
        shift: _
      }, {
        type: "elem",
        elem: u,
        shift: -m
      }]
    }, e);
  }
  i = e.havingStyle(t), w.height *= i.sizeMultiplier / e.sizeMultiplier, w.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var S;
  t.size === de.DISPLAY.size ? S = e.fontMetrics().delim1 : t.size === de.SCRIPTSCRIPT.size ? S = e.havingStyle(de.SCRIPT).fontMetrics().delim2 : S = e.fontMetrics().delim2;
  var F, L;
  return n.leftDelim == null ? F = Rn(e, ["mopen"]) : F = q0.customSizedDelim(n.leftDelim, S, !0, e.havingStyle(t), n.mode, ["mopen"]), n.continued ? L = O.makeSpan([]) : n.rightDelim == null ? L = Rn(e, ["mclose"]) : L = q0.customSizedDelim(n.rightDelim, S, !0, e.havingStyle(t), n.mode, ["mclose"]), O.makeSpan(["mord"].concat(i.sizingClasses(e)), [F, O.makeSpan(["mfrac"], [w]), L], e);
}, Fs = (n, e) => {
  var t = new Y.MathNode("mfrac", [Re(n.numer, e), Re(n.denom, e)]);
  if (!n.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = Ve(n.barSize, e);
    t.setAttribute("linethickness", J(r));
  }
  var a = vc(n.size, e.style);
  if (a.size !== e.style.size) {
    t = new Y.MathNode("mstyle", [t]);
    var i = a.size === de.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (n.leftDelim != null || n.rightDelim != null) {
    var u = [];
    if (n.leftDelim != null) {
      var l = new Y.MathNode("mo", [new Y.TextNode(n.leftDelim.replace("\\", ""))]);
      l.setAttribute("fence", "true"), u.push(l);
    }
    if (u.push(t), n.rightDelim != null) {
      var s = new Y.MathNode("mo", [new Y.TextNode(n.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), u.push(s);
    }
    return ws(u);
  }
  return t;
};
te({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = e[1], u, l = null, s = null, o = "auto";
    switch (r) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        u = !0;
        break;
      case "\\\\atopfrac":
        u = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        u = !1, l = "(", s = ")";
        break;
      case "\\\\bracefrac":
        u = !1, l = "\\{", s = "\\}";
        break;
      case "\\\\brackfrac":
        u = !1, l = "[", s = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (r) {
      case "\\dfrac":
      case "\\dbinom":
        o = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        o = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: u,
      leftDelim: l,
      rightDelim: s,
      size: o,
      barSize: null
    };
  },
  htmlBuilder: Cs,
  mathmlBuilder: Fs
});
te({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
te({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t,
      token: r
    } = n, a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: r
    };
  }
});
var Ml = ["display", "text", "script", "scriptscript"], Nl = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
te({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = e[4], a = e[5], i = Ja(e[0]), u = i.type === "atom" && i.family === "open" ? Nl(i.text) : null, l = Ja(e[1]), s = l.type === "atom" && l.family === "close" ? Nl(l.text) : null, o = ve(e[2], "size"), h, p = null;
    o.isBlank ? h = !0 : (p = o.value, h = p.number > 0);
    var f = "auto", m = e[3];
    if (m.type === "ordgroup") {
      if (m.body.length > 0) {
        var D = ve(m.body[0], "textord");
        f = Ml[Number(D.text)];
      }
    } else
      m = ve(m, "textord"), f = Ml[Number(m.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: a,
      continued: !1,
      hasBarLine: h,
      barSize: p,
      leftDelim: u,
      rightDelim: s,
      size: f
    };
  },
  htmlBuilder: Cs,
  mathmlBuilder: Fs
});
te({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r,
      token: a
    } = n;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: ve(e[0], "size").value,
      token: a
    };
  }
});
te({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = bh(ve(e[1], "infix").size), u = e[2], l = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: u,
      continued: !1,
      hasBarLine: l,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: Cs,
  mathmlBuilder: Fs
});
var yc = (n, e) => {
  var t = e.style, r, a;
  n.type === "supsub" ? (r = n.sup ? _e(n.sup, e.havingStyle(t.sup()), e) : _e(n.sub, e.havingStyle(t.sub()), e), a = ve(n.base, "horizBrace")) : a = ve(n, "horizBrace");
  var i = _e(a.base, e.havingBaseStyle(de.DISPLAY)), u = G0.svgSpan(a, e), l;
  if (a.isOver ? (l = O.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: u
    }]
  }, e), l.children[0].children[0].children[1].classes.push("svg-align")) : (l = O.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + u.height,
    children: [{
      type: "elem",
      elem: u
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), l.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var s = O.makeSpan(["mord", a.isOver ? "mover" : "munder"], [l], e);
    a.isOver ? l = O.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: r
      }]
    }, e) : l = O.makeVList({
      positionType: "bottom",
      positionData: s.depth + 0.2 + r.height + r.depth,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: s
      }]
    }, e);
  }
  return O.makeSpan(["mord", a.isOver ? "mover" : "munder"], [l], e);
}, H2 = (n, e) => {
  var t = G0.mathMLnode(n.label);
  return new Y.MathNode(n.isOver ? "mover" : "munder", [Re(n.base, e), t]);
};
te({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: r,
      isOver: /^\\over/.test(r),
      base: e[0]
    };
  },
  htmlBuilder: yc,
  mathmlBuilder: H2
});
te({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[1], a = ve(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: Qe(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (n, e) => {
    var t = rt(n.body, e, !1);
    return O.makeAnchor(n.href, [], t, e);
  },
  mathmlBuilder: (n, e) => {
    var t = rr(n.body, e);
    return t instanceof Gt || (t = new Gt("mrow", [t])), t.setAttribute("href", n.href), t;
  }
});
te({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = ve(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: r
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < r.length; i++) {
      var u = r[i];
      u === "~" && (u = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: u
      });
    }
    var l = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: r,
      body: Qe(l)
    };
  }
});
te({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "hbox",
      mode: t.mode,
      body: Qe(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = rt(n.body, e, !1);
    return O.makeFragment(t);
  },
  mathmlBuilder(n, e) {
    return new Y.MathNode("mrow", _t(n.body, e));
  }
});
te({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r,
      token: a
    } = n, i = ve(e[0], "raw").string, u = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var l, s = {};
    switch (r) {
      case "\\htmlClass":
        s.class = i, l = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        s.id = i, l = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        s.style = i, l = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var o = i.split(","), h = 0; h < o.length; h++) {
          var p = o[h].split("=");
          if (p.length !== 2)
            throw new K("Error parsing key-value for \\htmlData");
          s["data-" + p[0].trim()] = p[1].trim();
        }
        l = {
          command: "\\htmlData",
          attributes: s
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(l) ? {
      type: "html",
      mode: t.mode,
      attributes: s,
      body: Qe(u)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (n, e) => {
    var t = rt(n.body, e, !1), r = ["enclosing"];
    n.attributes.class && r.push(...n.attributes.class.trim().split(/\s+/));
    var a = O.makeSpan(r, t, e);
    for (var i in n.attributes)
      i !== "class" && n.attributes.hasOwnProperty(i) && a.setAttribute(i, n.attributes[i]);
    return a;
  },
  mathmlBuilder: (n, e) => rr(n.body, e)
});
te({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: Qe(e[0]),
      mathml: Qe(e[1])
    };
  },
  htmlBuilder: (n, e) => {
    var t = rt(n.html, e, !1);
    return O.makeFragment(t);
  },
  mathmlBuilder: (n, e) => rr(n.mathml, e)
});
var Yi = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new K("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!z1(r))
    throw new K("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
te({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (n, e, t) => {
    var {
      parser: r
    } = n, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, u = {
      number: 0,
      unit: "em"
    }, l = "";
    if (t[0])
      for (var s = ve(t[0], "raw").string, o = s.split(","), h = 0; h < o.length; h++) {
        var p = o[h].split("=");
        if (p.length === 2) {
          var f = p[1].trim();
          switch (p[0].trim()) {
            case "alt":
              l = f;
              break;
            case "width":
              a = Yi(f);
              break;
            case "height":
              i = Yi(f);
              break;
            case "totalheight":
              u = Yi(f);
              break;
            default:
              throw new K("Invalid key: '" + p[0] + "' in \\includegraphics.");
          }
        }
      }
    var m = ve(e[0], "url").url;
    return l === "" && (l = m, l = l.replace(/^.*[\\/]/, ""), l = l.substring(0, l.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: m
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: l,
      width: a,
      height: i,
      totalheight: u,
      src: m
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (n, e) => {
    var t = Ve(n.height, e), r = 0;
    n.totalheight.number > 0 && (r = Ve(n.totalheight, e) - t);
    var a = 0;
    n.width.number > 0 && (a = Ve(n.width, e));
    var i = {
      height: J(t + r)
    };
    a > 0 && (i.width = J(a)), r > 0 && (i.verticalAlign = J(-r));
    var u = new Hh(n.src, n.alt, i);
    return u.height = t, u.depth = r, u;
  },
  mathmlBuilder: (n, e) => {
    var t = new Y.MathNode("mglyph", []);
    t.setAttribute("alt", n.alt);
    var r = Ve(n.height, e), a = 0;
    if (n.totalheight.number > 0 && (a = Ve(n.totalheight, e) - r, t.setAttribute("valign", J(-a))), t.setAttribute("height", J(r + a)), n.width.number > 0) {
      var i = Ve(n.width, e);
      t.setAttribute("width", J(i));
    }
    return t.setAttribute("src", n.src), t;
  }
});
te({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = ve(e[0], "size");
    if (t.settings.strict) {
      var i = r[1] === "m", u = a.value.unit === "mu";
      i ? (u || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : u && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(n, e) {
    return O.makeGlue(n.dimension, e);
  },
  mathmlBuilder(n, e) {
    var t = Ve(n.dimension, e);
    return new Y.SpaceNode(t);
  }
});
te({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: r.slice(5),
      body: a
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    n.alignment === "clap" ? (t = O.makeSpan([], [_e(n.body, e)]), t = O.makeSpan(["inner"], [t], e)) : t = O.makeSpan(["inner"], [_e(n.body, e)]);
    var r = O.makeSpan(["fix"], []), a = O.makeSpan([n.alignment], [t, r], e), i = O.makeSpan(["strut"]);
    return i.style.height = J(a.height + a.depth), a.depth && (i.style.verticalAlign = J(-a.depth)), a.children.unshift(i), a = O.makeSpan(["thinbox"], [a], e), O.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new Y.MathNode("mpadded", [Re(n.body, e)]);
    if (n.alignment !== "rlap") {
      var r = n.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
te({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    var {
      funcName: t,
      parser: r
    } = n, a = r.mode;
    r.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", u = r.parseExpression(!1, i);
    return r.expect(i), r.switchMode(a), {
      type: "styling",
      mode: r.mode,
      style: "text",
      body: u
    };
  }
});
te({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    throw new K("Mismatched " + n.funcName);
  }
});
var Ol = (n, e) => {
  switch (e.style.size) {
    case de.DISPLAY.size:
      return n.display;
    case de.TEXT.size:
      return n.text;
    case de.SCRIPT.size:
      return n.script;
    case de.SCRIPTSCRIPT.size:
      return n.scriptscript;
    default:
      return n.text;
  }
};
te({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: Qe(e[0]),
      text: Qe(e[1]),
      script: Qe(e[2]),
      scriptscript: Qe(e[3])
    };
  },
  htmlBuilder: (n, e) => {
    var t = Ol(n, e), r = rt(t, e, !1);
    return O.makeFragment(r);
  },
  mathmlBuilder: (n, e) => {
    var t = Ol(n, e);
    return rr(t, e);
  }
});
var wc = (n, e, t, r, a, i, u) => {
  n = O.makeSpan([], [n]);
  var l = t && le.isCharacterBox(t), s, o;
  if (e) {
    var h = _e(e, r.havingStyle(a.sup()), r);
    o = {
      elem: h,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var p = _e(t, r.havingStyle(a.sub()), r);
    s = {
      elem: p,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - p.height)
    };
  }
  var f;
  if (o && s) {
    var m = r.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + n.depth + u;
    f = O.makeVList({
      positionType: "bottom",
      positionData: m,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: J(-i)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: J(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (s) {
    var D = n.height - u;
    f = O.makeVList({
      positionType: "top",
      positionData: D,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: s.elem,
        marginLeft: J(-i)
      }, {
        type: "kern",
        size: s.kern
      }, {
        type: "elem",
        elem: n
      }]
    }, r);
  } else if (o) {
    var _ = n.depth + u;
    f = O.makeVList({
      positionType: "bottom",
      positionData: _,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: J(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return n;
  var w = [f];
  if (s && i !== 0 && !l) {
    var T = O.makeSpan(["mspace"], [], r);
    T.style.marginRight = J(i), w.unshift(T);
  }
  return O.makeSpan(["mop", "op-limits"], w, r);
}, xc = ["\\smallint"], Pr = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = ve(n.base, "op"), a = !0) : i = ve(n, "op");
  var u = e.style, l = !1;
  u.size === de.DISPLAY.size && i.symbol && !le.contains(xc, i.name) && (l = !0);
  var s;
  if (i.symbol) {
    var o = l ? "Size2-Regular" : "Size1-Regular", h = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (h = i.name.slice(1), i.name = h === "oiint" ? "\\iint" : "\\iiint"), s = O.makeSymbol(i.name, o, "math", e, ["mop", "op-symbol", l ? "large-op" : "small-op"]), h.length > 0) {
      var p = s.italic, f = O.staticSvg(h + "Size" + (l ? "2" : "1"), e);
      s = O.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: s,
          shift: 0
        }, {
          type: "elem",
          elem: f,
          shift: l ? 0.08 : 0
        }]
      }, e), i.name = "\\" + h, s.classes.unshift("mop"), s.italic = p;
    }
  } else if (i.body) {
    var m = rt(i.body, e, !0);
    m.length === 1 && m[0] instanceof Yt ? (s = m[0], s.classes[0] = "mop") : s = O.makeSpan(["mop"], m, e);
  } else {
    for (var D = [], _ = 1; _ < i.name.length; _++)
      D.push(O.mathsym(i.name[_], i.mode, e));
    s = O.makeSpan(["mop"], D, e);
  }
  var w = 0, T = 0;
  return (s instanceof Yt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (w = (s.height - s.depth) / 2 - e.fontMetrics().axisHeight, T = s.italic), a ? wc(s, t, r, e, u, T, w) : (w && (s.style.position = "relative", s.style.top = J(w)), s);
}, Wn = (n, e) => {
  var t;
  if (n.symbol)
    t = new Gt("mo", [$t(n.name, n.mode)]), le.contains(xc, n.name) && t.setAttribute("largeop", "false");
  else if (n.body)
    t = new Gt("mo", _t(n.body, e));
  else {
    t = new Gt("mi", [new Tn(n.name.slice(1))]);
    var r = new Gt("mo", [$t("⁡", "text")]);
    n.parentIsSupSub ? t = new Gt("mrow", [t, r]) : t = $1([t, r]);
  }
  return t;
}, U2 = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
te({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = r;
    return a.length === 1 && (a = U2[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: Pr,
  mathmlBuilder: Wn
});
te({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: Qe(r)
    };
  },
  htmlBuilder: Pr,
  mathmlBuilder: Wn
});
var G2 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
te({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Pr,
  mathmlBuilder: Wn
});
te({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Pr,
  mathmlBuilder: Wn
});
te({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = t;
    return r.length === 1 && (r = G2[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: Pr,
  mathmlBuilder: Wn
});
var Ac = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = ve(n.base, "operatorname"), a = !0) : i = ve(n, "operatorname");
  var u;
  if (i.body.length > 0) {
    for (var l = i.body.map((p) => {
      var f = p.text;
      return typeof f == "string" ? {
        type: "textord",
        mode: p.mode,
        text: f
      } : p;
    }), s = rt(l, e.withFont("mathrm"), !0), o = 0; o < s.length; o++) {
      var h = s[o];
      h instanceof Yt && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    u = O.makeSpan(["mop"], s, e);
  } else
    u = O.makeSpan(["mop"], [], e);
  return a ? wc(u, t, r, e, e.style, 0, 0) : u;
}, j2 = (n, e) => {
  for (var t = _t(n.body, e.withFont("mathrm")), r = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof Y.SpaceNode)) if (i instanceof Y.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var u = i.children[0];
          i.children.length === 1 && u instanceof Y.TextNode ? u.text = u.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
          break;
        }
        default:
          r = !1;
      }
    else
      r = !1;
  }
  if (r) {
    var l = t.map((h) => h.toText()).join("");
    t = [new Y.TextNode(l)];
  }
  var s = new Y.MathNode("mi", t);
  s.setAttribute("mathvariant", "normal");
  var o = new Y.MathNode("mo", [$t("⁡", "text")]);
  return n.parentIsSupSub ? new Y.MathNode("mrow", [s, o]) : Y.newDocumentFragment([s, o]);
};
te({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: Qe(a),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Ac,
  mathmlBuilder: j2
});
v("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
wr({
  type: "ordgroup",
  htmlBuilder(n, e) {
    return n.semisimple ? O.makeFragment(rt(n.body, e, !1)) : O.makeSpan(["mord"], rt(n.body, e, !0), e);
  },
  mathmlBuilder(n, e) {
    return rr(n.body, e, !0);
  }
});
te({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder(n, e) {
    var t = _e(n.body, e.havingCrampedStyle()), r = O.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = O.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: a
      }]
    }, e);
    return O.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mo", [new Y.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new Y.MathNode("mover", [Re(n.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
te({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: Qe(r)
    };
  },
  htmlBuilder: (n, e) => {
    var t = rt(n.body, e.withPhantom(), !1);
    return O.makeFragment(t);
  },
  mathmlBuilder: (n, e) => {
    var t = _t(n.body, e);
    return new Y.MathNode("mphantom", t);
  }
});
te({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (n, e) => {
    var t = O.makeSpan([], [_e(n.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = O.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), O.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (n, e) => {
    var t = _t(Qe(n.body), e), r = new Y.MathNode("mphantom", t), a = new Y.MathNode("mpadded", [r]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
te({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (n, e) => {
    var t = O.makeSpan(["inner"], [_e(n.body, e.withPhantom())]), r = O.makeSpan(["fix"], []);
    return O.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (n, e) => {
    var t = _t(Qe(n.body), e), r = new Y.MathNode("mphantom", t), a = new Y.MathNode("mpadded", [r]);
    return a.setAttribute("width", "0px"), a;
  }
});
te({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = ve(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: a
    };
  },
  htmlBuilder(n, e) {
    var t = _e(n.body, e), r = Ve(n.dy, e);
    return O.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mpadded", [Re(n.body, e)]), r = n.dy.number + n.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
te({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n) {
    var {
      parser: e
    } = n;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
te({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = t[0], i = ve(e[0], "size"), u = ve(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && ve(a, "size").value,
      width: i.value,
      height: u.value
    };
  },
  htmlBuilder(n, e) {
    var t = O.makeSpan(["mord", "rule"], [], e), r = Ve(n.width, e), a = Ve(n.height, e), i = n.shift ? Ve(n.shift, e) : 0;
    return t.style.borderRightWidth = J(r), t.style.borderTopWidth = J(a), t.style.bottom = J(i), t.width = r, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(n, e) {
    var t = Ve(n.width, e), r = Ve(n.height, e), a = n.shift ? Ve(n.shift, e) : 0, i = e.color && e.getColor() || "black", u = new Y.MathNode("mspace");
    u.setAttribute("mathbackground", i), u.setAttribute("width", J(t)), u.setAttribute("height", J(r));
    var l = new Y.MathNode("mpadded", [u]);
    return a >= 0 ? l.setAttribute("height", J(a)) : (l.setAttribute("height", J(a)), l.setAttribute("depth", J(-a))), l.setAttribute("voffset", J(a)), l;
  }
});
function Sc(n, e, t) {
  for (var r = rt(n, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var u = r[i].classes.indexOf("sizing");
    u < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[u + 1] === "reset-size" + e.size && (r[i].classes[u + 1] = "reset-size" + t.size), r[i].height *= a, r[i].depth *= a;
  }
  return O.makeFragment(r);
}
var Il = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], V2 = (n, e) => {
  var t = e.havingSize(n.size);
  return Sc(n.body, t, e);
};
te({
  type: "sizing",
  names: Il,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: Il.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: V2,
  mathmlBuilder: (n, e) => {
    var t = e.havingSize(n.size), r = _t(n.body, t), a = new Y.MathNode("mstyle", r);
    return a.setAttribute("mathsize", J(t.sizeMultiplier)), a;
  }
});
te({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (n, e, t) => {
    var {
      parser: r
    } = n, a = !1, i = !1, u = t[0] && ve(t[0], "ordgroup");
    if (u)
      for (var l = "", s = 0; s < u.body.length; ++s) {
        var o = u.body[s];
        if (l = o.text, l === "t")
          a = !0;
        else if (l === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var h = e[0];
    return {
      type: "smash",
      mode: r.mode,
      body: h,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (n, e) => {
    var t = O.makeSpan([], [_e(n.body, e)]);
    if (!n.smashHeight && !n.smashDepth)
      return t;
    if (n.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (n.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = O.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return O.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new Y.MathNode("mpadded", [Re(n.body, e)]);
    return n.smashHeight && t.setAttribute("height", "0px"), n.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
te({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: r.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(n, e) {
    var t = _e(n.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = O.wrapFragment(t, e);
    var r = e.fontMetrics(), a = r.defaultRuleThickness, i = a;
    e.style.id < de.TEXT.id && (i = e.fontMetrics().xHeight);
    var u = a + i / 4, l = t.height + t.depth + u + a, {
      span: s,
      ruleWidth: o,
      advanceWidth: h
    } = q0.sqrtImage(l, e), p = s.height - o;
    p > t.height + t.depth + u && (u = (u + p - t.height - t.depth) / 2);
    var f = s.height - t.height - u - o;
    t.style.paddingLeft = J(h);
    var m = O.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + f)
      }, {
        type: "elem",
        elem: s
      }, {
        type: "kern",
        size: o
      }]
    }, e);
    if (n.index) {
      var D = e.havingStyle(de.SCRIPTSCRIPT), _ = _e(n.index, D, e), w = 0.6 * (m.height - m.depth), T = O.makeVList({
        positionType: "shift",
        positionData: -w,
        children: [{
          type: "elem",
          elem: _
        }]
      }, e), x = O.makeSpan(["root"], [T]);
      return O.makeSpan(["mord", "sqrt"], [x, m], e);
    } else
      return O.makeSpan(["mord", "sqrt"], [m], e);
  },
  mathmlBuilder(n, e) {
    var {
      body: t,
      index: r
    } = n;
    return r ? new Y.MathNode("mroot", [Re(t, e), Re(r, e)]) : new Y.MathNode("msqrt", [Re(t, e)]);
  }
});
var Rl = {
  display: de.DISPLAY,
  text: de.TEXT,
  script: de.SCRIPT,
  scriptscript: de.SCRIPTSCRIPT
};
te({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n, e) {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!0, t), u = r.slice(1, r.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: u,
      body: i
    };
  },
  htmlBuilder(n, e) {
    var t = Rl[n.style], r = e.havingStyle(t).withFont("");
    return Sc(n.body, r, e);
  },
  mathmlBuilder(n, e) {
    var t = Rl[n.style], r = e.havingStyle(t), a = _t(n.body, r), i = new Y.MathNode("mstyle", a), u = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, l = u[n.style];
    return i.setAttribute("scriptlevel", l[0]), i.setAttribute("displaystyle", l[1]), i;
  }
});
var W2 = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (t.style.size === de.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? Pr : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === de.DISPLAY.size || r.limits);
      return i ? Ac : null;
    } else {
      if (r.type === "accent")
        return le.isCharacterBox(r.base) ? Ss : null;
      if (r.type === "horizBrace") {
        var u = !e.sub;
        return u === r.isOver ? yc : null;
      } else
        return null;
    }
  else return null;
};
wr({
  type: "supsub",
  htmlBuilder(n, e) {
    var t = W2(n, e);
    if (t)
      return t(n, e);
    var {
      base: r,
      sup: a,
      sub: i
    } = n, u = _e(r, e), l, s, o = e.fontMetrics(), h = 0, p = 0, f = r && le.isCharacterBox(r);
    if (a) {
      var m = e.havingStyle(e.style.sup());
      l = _e(a, m, e), f || (h = u.height - m.fontMetrics().supDrop * m.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var D = e.havingStyle(e.style.sub());
      s = _e(i, D, e), f || (p = u.depth + D.fontMetrics().subDrop * D.sizeMultiplier / e.sizeMultiplier);
    }
    var _;
    e.style === de.DISPLAY ? _ = o.sup1 : e.style.cramped ? _ = o.sup3 : _ = o.sup2;
    var w = e.sizeMultiplier, T = J(0.5 / o.ptPerEm / w), x = null;
    if (s) {
      var y = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (u instanceof Yt || y) && (x = J(-u.italic));
    }
    var S;
    if (l && s) {
      h = Math.max(h, _, l.depth + 0.25 * o.xHeight), p = Math.max(p, o.sub2);
      var F = o.defaultRuleThickness, L = 4 * F;
      if (h - l.depth - (s.height - p) < L) {
        p = L - (h - l.depth) + s.height;
        var I = 0.8 * o.xHeight - (h - l.depth);
        I > 0 && (h += I, p -= I);
      }
      var U = [{
        type: "elem",
        elem: s,
        shift: p,
        marginRight: T,
        marginLeft: x
      }, {
        type: "elem",
        elem: l,
        shift: -h,
        marginRight: T
      }];
      S = O.makeVList({
        positionType: "individualShift",
        children: U
      }, e);
    } else if (s) {
      p = Math.max(p, o.sub1, s.height - 0.8 * o.xHeight);
      var z = [{
        type: "elem",
        elem: s,
        marginLeft: x,
        marginRight: T
      }];
      S = O.makeVList({
        positionType: "shift",
        positionData: p,
        children: z
      }, e);
    } else if (l)
      h = Math.max(h, _, l.depth + 0.25 * o.xHeight), S = O.makeVList({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: l,
          marginRight: T
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var B = Du(u, "right") || "mord";
    return O.makeSpan([B], [u, O.makeSpan(["msupsub"], [S])], e);
  },
  mathmlBuilder(n, e) {
    var t = !1, r, a;
    n.base && n.base.type === "horizBrace" && (a = !!n.sup, a === n.base.isOver && (t = !0, r = n.base.isOver)), n.base && (n.base.type === "op" || n.base.type === "operatorname") && (n.base.parentIsSupSub = !0);
    var i = [Re(n.base, e)];
    n.sub && i.push(Re(n.sub, e)), n.sup && i.push(Re(n.sup, e));
    var u;
    if (t)
      u = r ? "mover" : "munder";
    else if (n.sub)
      if (n.sup) {
        var o = n.base;
        o && o.type === "op" && o.limits && e.style === de.DISPLAY || o && o.type === "operatorname" && o.alwaysHandleSupSub && (e.style === de.DISPLAY || o.limits) ? u = "munderover" : u = "msubsup";
      } else {
        var s = n.base;
        s && s.type === "op" && s.limits && (e.style === de.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === de.DISPLAY) ? u = "munder" : u = "msub";
      }
    else {
      var l = n.base;
      l && l.type === "op" && l.limits && (e.style === de.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === de.DISPLAY) ? u = "mover" : u = "msup";
    }
    return new Y.MathNode(u, i);
  }
});
wr({
  type: "atom",
  htmlBuilder(n, e) {
    return O.mathsym(n.text, n.mode, e, ["m" + n.family]);
  },
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mo", [$t(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = xs(n, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else n.family === "punct" ? t.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var Dc = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
wr({
  type: "mathord",
  htmlBuilder(n, e) {
    return O.makeOrd(n, e, "mathord");
  },
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mi", [$t(n.text, n.mode, e)]), r = xs(n, e) || "italic";
    return r !== Dc[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
wr({
  type: "textord",
  htmlBuilder(n, e) {
    return O.makeOrd(n, e, "textord");
  },
  mathmlBuilder(n, e) {
    var t = $t(n.text, n.mode, e), r = xs(n, e) || "normal", a;
    return n.mode === "text" ? a = new Y.MathNode("mtext", [t]) : /[0-9]/.test(n.text) ? a = new Y.MathNode("mn", [t]) : n.text === "\\prime" ? a = new Y.MathNode("mo", [t]) : a = new Y.MathNode("mi", [t]), r !== Dc[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var $i = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Zi = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
wr({
  type: "spacing",
  htmlBuilder(n, e) {
    if (Zi.hasOwnProperty(n.text)) {
      var t = Zi[n.text].className || "";
      if (n.mode === "text") {
        var r = O.makeOrd(n, e, "textord");
        return r.classes.push(t), r;
      } else
        return O.makeSpan(["mspace", t], [O.mathsym(n.text, n.mode, e)], e);
    } else {
      if ($i.hasOwnProperty(n.text))
        return O.makeSpan(["mspace", $i[n.text]], [], e);
      throw new K('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, e) {
    var t;
    if (Zi.hasOwnProperty(n.text))
      t = new Y.MathNode("mtext", [new Y.TextNode(" ")]);
    else {
      if ($i.hasOwnProperty(n.text))
        return new Y.MathNode("mspace");
      throw new K('Unknown type of space "' + n.text + '"');
    }
    return t;
  }
});
var Ll = () => {
  var n = new Y.MathNode("mtd", []);
  return n.setAttribute("width", "50%"), n;
};
wr({
  type: "tag",
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mtable", [new Y.MathNode("mtr", [Ll(), new Y.MathNode("mtd", [rr(n.body, e)]), Ll(), new Y.MathNode("mtd", [rr(n.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Bl = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, zl = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, X2 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Pl = (n, e) => {
  var t = n.font;
  if (t) {
    if (Bl[t])
      return e.withTextFontFamily(Bl[t]);
    if (zl[t])
      return e.withTextFontWeight(zl[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(X2[t]);
};
te({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: Qe(a),
      font: r
    };
  },
  htmlBuilder(n, e) {
    var t = Pl(n, e), r = rt(n.body, t, !0);
    return O.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(n, e) {
    var t = Pl(n, e);
    return rr(n.body, t);
  }
});
te({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = _e(n.body, e), r = O.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = O.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return O.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new Y.MathNode("mo", [new Y.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new Y.MathNode("munder", [Re(n.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
te({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = _e(n.body, e), r = e.fontMetrics().axisHeight, a = 0.5 * (t.height - r - (t.depth + r));
    return O.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    return new Y.MathNode("mpadded", [Re(n.body, e)], ["vcenter"]);
  }
});
te({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    throw new K("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(n, e) {
    for (var t = ql(n), r = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var u = t[i];
      u === "~" && (u = "\\textasciitilde"), r.push(O.makeSymbol(u, "Typewriter-Regular", n.mode, a, ["mord", "texttt"]));
    }
    return O.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), O.tryCombineChars(r), a);
  },
  mathmlBuilder(n, e) {
    var t = new Y.TextNode(ql(n)), r = new Y.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var ql = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), K0 = X1, Ec = `[ \r
	]`, Y2 = "\\\\[a-zA-Z@]+", $2 = "\\\\[^\uD800-\uDFFF]", Z2 = "(" + Y2 + ")" + Ec + "*", K2 = `\\\\(
|[ \r	]+
?)[ \r	]*`, Tu = "[̀-ͯ]", Q2 = new RegExp(Tu + "+$"), J2 = "(" + Ec + "+)|" + // whitespace
(K2 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Tu + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Tu + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Z2) + // \macroName + spaces
("|" + $2 + ")");
class Hl {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(J2, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new Xt("EOF", new Ot(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new K("Unexpected character: '" + e[t] + "'", new Xt(e[t], new Ot(this, t, t + 1)));
    var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Xt(a, new Ot(this, t, this.tokenRegex.lastIndex));
  }
}
class e4 {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new K("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, r) {
    if (r === void 0 && (r = !1), r) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var t4 = mc;
v("\\noexpand", function(n) {
  var e = n.popToken();
  return n.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
v("\\expandafter", function(n) {
  var e = n.popToken();
  return n.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
v("\\@firstoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
v("\\@secondoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
v("\\@ifnextchar", function(n) {
  var e = n.consumeArgs(3);
  n.consumeSpaces();
  var t = n.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
v("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
v("\\TextOrMath", function(n) {
  var e = n.consumeArgs(2);
  return n.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var Ul = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
v("\\char", function(n) {
  var e = n.popToken(), t, r = "";
  if (e.text === "'")
    t = 8, e = n.popToken();
  else if (e.text === '"')
    t = 16, e = n.popToken();
  else if (e.text === "`")
    if (e = n.popToken(), e.text[0] === "\\")
      r = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new K("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = Ul[e.text], r == null || r >= t)
      throw new K("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Ul[n.future().text]) != null && a < t; )
      r *= t, r += a, n.popToken();
  }
  return "\\@char{" + r + "}";
});
var Ms = (n, e, t) => {
  var r = n.consumeArg().tokens;
  if (r.length !== 1)
    throw new K("\\newcommand's first argument must be a macro name");
  var a = r[0].text, i = n.isDefined(a);
  if (i && !e)
    throw new K("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new K("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var u = 0;
  if (r = n.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var l = "", s = n.expandNextToken(); s.text !== "]" && s.text !== "EOF"; )
      l += s.text, s = n.expandNextToken();
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new K("Invalid number of arguments: " + l);
    u = parseInt(l), r = n.consumeArg().tokens;
  }
  return n.macros.set(a, {
    tokens: r,
    numArgs: u
  }), "";
};
v("\\newcommand", (n) => Ms(n, !1, !0));
v("\\renewcommand", (n) => Ms(n, !0, !1));
v("\\providecommand", (n) => Ms(n, !0, !0));
v("\\message", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
v("\\errmessage", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
v("\\show", (n) => {
  var e = n.popToken(), t = e.text;
  return console.log(e, n.macros.get(t), K0[t], Pe.math[t], Pe.text[t]), "";
});
v("\\bgroup", "{");
v("\\egroup", "}");
v("~", "\\nobreakspace");
v("\\lq", "`");
v("\\rq", "'");
v("\\aa", "\\r a");
v("\\AA", "\\r A");
v("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
v("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
v("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
v("ℬ", "\\mathscr{B}");
v("ℰ", "\\mathscr{E}");
v("ℱ", "\\mathscr{F}");
v("ℋ", "\\mathscr{H}");
v("ℐ", "\\mathscr{I}");
v("ℒ", "\\mathscr{L}");
v("ℳ", "\\mathscr{M}");
v("ℛ", "\\mathscr{R}");
v("ℭ", "\\mathfrak{C}");
v("ℌ", "\\mathfrak{H}");
v("ℨ", "\\mathfrak{Z}");
v("\\Bbbk", "\\Bbb{k}");
v("·", "\\cdotp");
v("\\llap", "\\mathllap{\\textrm{#1}}");
v("\\rlap", "\\mathrlap{\\textrm{#1}}");
v("\\clap", "\\mathclap{\\textrm{#1}}");
v("\\mathstrut", "\\vphantom{(}");
v("\\underbar", "\\underline{\\text{#1}}");
v("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
v("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
v("\\ne", "\\neq");
v("≠", "\\neq");
v("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
v("∉", "\\notin");
v("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
v("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
v("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
v("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
v("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
v("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
v("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
v("⟂", "\\perp");
v("‼", "\\mathclose{!\\mkern-0.8mu!}");
v("∌", "\\notni");
v("⌜", "\\ulcorner");
v("⌝", "\\urcorner");
v("⌞", "\\llcorner");
v("⌟", "\\lrcorner");
v("©", "\\copyright");
v("®", "\\textregistered");
v("️", "\\textregistered");
v("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
v("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
v("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
v("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
v("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
v("⋮", "\\vdots");
v("\\varGamma", "\\mathit{\\Gamma}");
v("\\varDelta", "\\mathit{\\Delta}");
v("\\varTheta", "\\mathit{\\Theta}");
v("\\varLambda", "\\mathit{\\Lambda}");
v("\\varXi", "\\mathit{\\Xi}");
v("\\varPi", "\\mathit{\\Pi}");
v("\\varSigma", "\\mathit{\\Sigma}");
v("\\varUpsilon", "\\mathit{\\Upsilon}");
v("\\varPhi", "\\mathit{\\Phi}");
v("\\varPsi", "\\mathit{\\Psi}");
v("\\varOmega", "\\mathit{\\Omega}");
v("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
v("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
v("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
v("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
v("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
v("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var Gl = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
v("\\dots", function(n) {
  var e = "\\dotso", t = n.expandAfterFuture().text;
  return t in Gl ? e = Gl[t] : (t.slice(0, 4) === "\\not" || t in Pe.math && le.contains(["bin", "rel"], Pe.math[t].group)) && (e = "\\dotsb"), e;
});
var Ns = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
v("\\dotso", function(n) {
  var e = n.future().text;
  return e in Ns ? "\\ldots\\," : "\\ldots";
});
v("\\dotsc", function(n) {
  var e = n.future().text;
  return e in Ns && e !== "," ? "\\ldots\\," : "\\ldots";
});
v("\\cdots", function(n) {
  var e = n.future().text;
  return e in Ns ? "\\@cdots\\," : "\\@cdots";
});
v("\\dotsb", "\\cdots");
v("\\dotsm", "\\cdots");
v("\\dotsi", "\\!\\cdots");
v("\\dotsx", "\\ldots\\,");
v("\\DOTSI", "\\relax");
v("\\DOTSB", "\\relax");
v("\\DOTSX", "\\relax");
v("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
v("\\,", "\\tmspace+{3mu}{.1667em}");
v("\\thinspace", "\\,");
v("\\>", "\\mskip{4mu}");
v("\\:", "\\tmspace+{4mu}{.2222em}");
v("\\medspace", "\\:");
v("\\;", "\\tmspace+{5mu}{.2777em}");
v("\\thickspace", "\\;");
v("\\!", "\\tmspace-{3mu}{.1667em}");
v("\\negthinspace", "\\!");
v("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
v("\\negthickspace", "\\tmspace-{5mu}{.277em}");
v("\\enspace", "\\kern.5em ");
v("\\enskip", "\\hskip.5em\\relax");
v("\\quad", "\\hskip1em\\relax");
v("\\qquad", "\\hskip2em\\relax");
v("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
v("\\tag@paren", "\\tag@literal{({#1})}");
v("\\tag@literal", (n) => {
  if (n.macros.get("\\df@tag"))
    throw new K("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
v("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
v("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
v("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
v("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
v("\\newline", "\\\\\\relax");
v("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var kc = J(w0["Main-Regular"][84][1] - 0.7 * w0["Main-Regular"][65][1]);
v("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + kc + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
v("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + kc + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
v("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
v("\\@hspace", "\\hskip #1\\relax");
v("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
v("\\ordinarycolon", ":");
v("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
v("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
v("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
v("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
v("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
v("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
v("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
v("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
v("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
v("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
v("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
v("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
v("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
v("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
v("∷", "\\dblcolon");
v("∹", "\\eqcolon");
v("≔", "\\coloneqq");
v("≕", "\\eqqcolon");
v("⩴", "\\Coloneqq");
v("\\ratio", "\\vcentcolon");
v("\\coloncolon", "\\dblcolon");
v("\\colonequals", "\\coloneqq");
v("\\coloncolonequals", "\\Coloneqq");
v("\\equalscolon", "\\eqqcolon");
v("\\equalscoloncolon", "\\Eqqcolon");
v("\\colonminus", "\\coloneq");
v("\\coloncolonminus", "\\Coloneq");
v("\\minuscolon", "\\eqcolon");
v("\\minuscoloncolon", "\\Eqcolon");
v("\\coloncolonapprox", "\\Colonapprox");
v("\\coloncolonsim", "\\Colonsim");
v("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
v("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
v("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
v("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
v("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
v("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
v("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
v("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
v("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
v("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
v("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
v("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
v("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
v("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
v("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
v("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
v("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
v("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
v("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
v("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
v("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
v("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
v("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
v("\\imath", "\\html@mathml{\\@imath}{ı}");
v("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
v("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
v("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
v("⟦", "\\llbracket");
v("⟧", "\\rrbracket");
v("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
v("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
v("⦃", "\\lBrace");
v("⦄", "\\rBrace");
v("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
v("⦵", "\\minuso");
v("\\darr", "\\downarrow");
v("\\dArr", "\\Downarrow");
v("\\Darr", "\\Downarrow");
v("\\lang", "\\langle");
v("\\rang", "\\rangle");
v("\\uarr", "\\uparrow");
v("\\uArr", "\\Uparrow");
v("\\Uarr", "\\Uparrow");
v("\\N", "\\mathbb{N}");
v("\\R", "\\mathbb{R}");
v("\\Z", "\\mathbb{Z}");
v("\\alef", "\\aleph");
v("\\alefsym", "\\aleph");
v("\\Alpha", "\\mathrm{A}");
v("\\Beta", "\\mathrm{B}");
v("\\bull", "\\bullet");
v("\\Chi", "\\mathrm{X}");
v("\\clubs", "\\clubsuit");
v("\\cnums", "\\mathbb{C}");
v("\\Complex", "\\mathbb{C}");
v("\\Dagger", "\\ddagger");
v("\\diamonds", "\\diamondsuit");
v("\\empty", "\\emptyset");
v("\\Epsilon", "\\mathrm{E}");
v("\\Eta", "\\mathrm{H}");
v("\\exist", "\\exists");
v("\\harr", "\\leftrightarrow");
v("\\hArr", "\\Leftrightarrow");
v("\\Harr", "\\Leftrightarrow");
v("\\hearts", "\\heartsuit");
v("\\image", "\\Im");
v("\\infin", "\\infty");
v("\\Iota", "\\mathrm{I}");
v("\\isin", "\\in");
v("\\Kappa", "\\mathrm{K}");
v("\\larr", "\\leftarrow");
v("\\lArr", "\\Leftarrow");
v("\\Larr", "\\Leftarrow");
v("\\lrarr", "\\leftrightarrow");
v("\\lrArr", "\\Leftrightarrow");
v("\\Lrarr", "\\Leftrightarrow");
v("\\Mu", "\\mathrm{M}");
v("\\natnums", "\\mathbb{N}");
v("\\Nu", "\\mathrm{N}");
v("\\Omicron", "\\mathrm{O}");
v("\\plusmn", "\\pm");
v("\\rarr", "\\rightarrow");
v("\\rArr", "\\Rightarrow");
v("\\Rarr", "\\Rightarrow");
v("\\real", "\\Re");
v("\\reals", "\\mathbb{R}");
v("\\Reals", "\\mathbb{R}");
v("\\Rho", "\\mathrm{P}");
v("\\sdot", "\\cdot");
v("\\sect", "\\S");
v("\\spades", "\\spadesuit");
v("\\sub", "\\subset");
v("\\sube", "\\subseteq");
v("\\supe", "\\supseteq");
v("\\Tau", "\\mathrm{T}");
v("\\thetasym", "\\vartheta");
v("\\weierp", "\\wp");
v("\\Zeta", "\\mathrm{Z}");
v("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
v("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
v("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
v("\\bra", "\\mathinner{\\langle{#1}|}");
v("\\ket", "\\mathinner{|{#1}\\rangle}");
v("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
v("\\Bra", "\\left\\langle#1\\right|");
v("\\Ket", "\\left|#1\\right\\rangle");
var _c = (n) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, u = e.macros.get("|"), l = e.macros.get("\\|");
  e.macros.beginGroup();
  var s = (p) => (f) => {
    n && (f.macros.set("|", u), a.length && f.macros.set("\\|", l));
    var m = p;
    if (!p && a.length) {
      var D = f.future();
      D.text === "|" && (f.popToken(), m = !0);
    }
    return {
      tokens: m ? a : r,
      numArgs: 0
    };
  };
  e.macros.set("|", s(!1)), a.length && e.macros.set("\\|", s(!0));
  var o = e.consumeArg().tokens, h = e.expandTokens([
    ...i,
    ...o,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: h.reverse(),
    numArgs: 0
  };
};
v("\\bra@ket", _c(!1));
v("\\bra@set", _c(!0));
v("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
v("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
v("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
v("\\angln", "{\\angl n}");
v("\\blue", "\\textcolor{##6495ed}{#1}");
v("\\orange", "\\textcolor{##ffa500}{#1}");
v("\\pink", "\\textcolor{##ff00af}{#1}");
v("\\red", "\\textcolor{##df0030}{#1}");
v("\\green", "\\textcolor{##28ae7b}{#1}");
v("\\gray", "\\textcolor{gray}{#1}");
v("\\purple", "\\textcolor{##9d38bd}{#1}");
v("\\blueA", "\\textcolor{##ccfaff}{#1}");
v("\\blueB", "\\textcolor{##80f6ff}{#1}");
v("\\blueC", "\\textcolor{##63d9ea}{#1}");
v("\\blueD", "\\textcolor{##11accd}{#1}");
v("\\blueE", "\\textcolor{##0c7f99}{#1}");
v("\\tealA", "\\textcolor{##94fff5}{#1}");
v("\\tealB", "\\textcolor{##26edd5}{#1}");
v("\\tealC", "\\textcolor{##01d1c1}{#1}");
v("\\tealD", "\\textcolor{##01a995}{#1}");
v("\\tealE", "\\textcolor{##208170}{#1}");
v("\\greenA", "\\textcolor{##b6ffb0}{#1}");
v("\\greenB", "\\textcolor{##8af281}{#1}");
v("\\greenC", "\\textcolor{##74cf70}{#1}");
v("\\greenD", "\\textcolor{##1fab54}{#1}");
v("\\greenE", "\\textcolor{##0d923f}{#1}");
v("\\goldA", "\\textcolor{##ffd0a9}{#1}");
v("\\goldB", "\\textcolor{##ffbb71}{#1}");
v("\\goldC", "\\textcolor{##ff9c39}{#1}");
v("\\goldD", "\\textcolor{##e07d10}{#1}");
v("\\goldE", "\\textcolor{##a75a05}{#1}");
v("\\redA", "\\textcolor{##fca9a9}{#1}");
v("\\redB", "\\textcolor{##ff8482}{#1}");
v("\\redC", "\\textcolor{##f9685d}{#1}");
v("\\redD", "\\textcolor{##e84d39}{#1}");
v("\\redE", "\\textcolor{##bc2612}{#1}");
v("\\maroonA", "\\textcolor{##ffbde0}{#1}");
v("\\maroonB", "\\textcolor{##ff92c6}{#1}");
v("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
v("\\maroonD", "\\textcolor{##ca337c}{#1}");
v("\\maroonE", "\\textcolor{##9e034e}{#1}");
v("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
v("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
v("\\purpleC", "\\textcolor{##aa87ff}{#1}");
v("\\purpleD", "\\textcolor{##7854ab}{#1}");
v("\\purpleE", "\\textcolor{##543b78}{#1}");
v("\\mintA", "\\textcolor{##f5f9e8}{#1}");
v("\\mintB", "\\textcolor{##edf2df}{#1}");
v("\\mintC", "\\textcolor{##e0e5cc}{#1}");
v("\\grayA", "\\textcolor{##f6f7f7}{#1}");
v("\\grayB", "\\textcolor{##f0f1f2}{#1}");
v("\\grayC", "\\textcolor{##e3e5e6}{#1}");
v("\\grayD", "\\textcolor{##d6d8da}{#1}");
v("\\grayE", "\\textcolor{##babec2}{#1}");
v("\\grayF", "\\textcolor{##888d93}{#1}");
v("\\grayG", "\\textcolor{##626569}{#1}");
v("\\grayH", "\\textcolor{##3b3e40}{#1}");
v("\\grayI", "\\textcolor{##21242c}{#1}");
v("\\kaBlue", "\\textcolor{##314453}{#1}");
v("\\kaGreen", "\\textcolor{##71B307}{#1}");
var Tc = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class r4 {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new e4(t4, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new Hl(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, r, a;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: a,
        end: r
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: t,
        end: r
      } = this.consumeArg());
    return this.pushToken(new Xt("EOF", r.loc)), this.pushTokens(a), t.range(r, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], r = e && e.length > 0;
    r || this.consumeSpaces();
    var a = this.future(), i, u = 0, l = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++u;
      else if (i.text === "}") {
        if (--u, u === -1)
          throw new K("Extra }", i);
      } else if (i.text === "EOF")
        throw new K("Unexpected end of input in a macro argument, expected '" + (e && r ? e[l] : "}") + "'", i);
      if (e && r)
        if ((u === 0 || u === 1 && e[l] === "{") && i.text === e[l]) {
          if (++l, l === e.length) {
            t.splice(-l, l);
            break;
          }
        } else
          l = 0;
    } while (u !== 0 || r);
    return a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new K("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], a = 0; a < r.length; a++) {
        var i = this.popToken();
        if (r[a] !== i.text)
          throw new K("Use of the macro doesn't match its definition", i);
      }
    }
    for (var u = [], l = 0; l < e; l++)
      u.push(this.consumeArg(t && t[l + 1]).tokens);
    return u;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new K("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), r = t.text, a = t.noexpand ? null : this._getExpansion(r);
    if (a == null || e && a.unexpandable) {
      if (e && a == null && r[0] === "\\" && !this.isDefined(r))
        throw new K("Undefined control sequence: " + r);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, u = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var l = i.length - 1; l >= 0; --l) {
        var s = i[l];
        if (s.text === "#") {
          if (l === 0)
            throw new K("Incomplete placeholder at end of macro body", s);
          if (s = i[--l], s.text === "#")
            i.splice(l + 1, 1);
          else if (/^[1-9]$/.test(s.text))
            i.splice(l, 2, ...u[+s.text - 1]);
          else
            throw new K("Not a valid argument number", s);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new Xt(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], r = this.stack.length;
    for (this.pushTokens(e); this.stack.length > r; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), t.push(a);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((r) => r.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var r = this.lexer.catcodes[e];
      if (r != null && r !== 13)
        return;
    }
    var a = typeof t == "function" ? t(this) : t;
    if (typeof a == "string") {
      var i = 0;
      if (a.indexOf("#") !== -1)
        for (var u = a.replace(/##/g, ""); u.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var l = new Hl(a, this.settings), s = [], o = l.lex(); o.text !== "EOF"; )
        s.push(o), o = l.lex();
      s.reverse();
      var h = {
        tokens: s,
        numArgs: i
      };
      return h;
    }
    return a;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || K0.hasOwnProperty(e) || Pe.math.hasOwnProperty(e) || Pe.text.hasOwnProperty(e) || Tc.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : K0.hasOwnProperty(e) && !K0[e].primitive;
  }
}
var jl = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, oa = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), Ki = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, Vl = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
let Cc = class Fc {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new r4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new K("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new Xt("}")), this.gullet.pushTokens(e);
    var r = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, r;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var r = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (Fc.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && K0[a.text] && K0[a.text].infix)
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      r.push(i);
    }
    return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, r, a = 0; a < e.length; a++)
      if (e[a].type === "infix") {
        if (t !== -1)
          throw new K("only one infix operator per group", e[a].token);
        t = a, r = e[a].replaceWith;
      }
    if (t !== -1 && r) {
      var i, u, l = e.slice(0, t), s = e.slice(t + 1);
      l.length === 1 && l[0].type === "ordgroup" ? i = l[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: l
      }, s.length === 1 && s[0].type === "ordgroup" ? u = s[0] : u = {
        type: "ordgroup",
        mode: this.mode,
        body: s
      };
      var o;
      return r === "\\\\abovefrac" ? o = this.callFunction(r, [i, e[t], u], []) : o = this.callFunction(r, [i, u], []), [o];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), r = t.text;
    this.consume(), this.consumeSpaces();
    var a = this.parseGroup(e);
    if (!a)
      throw new K("Expected group after '" + r + "'", t);
    return a;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], r = 0; r < e.length; r++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[r]
      });
    var a = {
      type: "text",
      mode: this.mode,
      body: t
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [a]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text")
      return t;
    for (var r, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var u = i.text === "\\limits";
          t.limits = u, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new K("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (r)
          throw new K("Double superscript", i);
        r = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new K("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (r)
          throw new K("Double superscript", i);
        var l = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, s = [l];
        for (this.consume(); this.fetch().text === "'"; )
          s.push(l), this.consume();
        this.fetch().text === "^" && s.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: s
        };
      } else if (oa[i.text]) {
        var o = jl.test(i.text), h = [];
        for (h.push(new Xt(oa[i.text])), this.consume(); ; ) {
          var p = this.fetch().text;
          if (!oa[p] || jl.test(p) !== o)
            break;
          h.unshift(new Xt(oa[p])), this.consume();
        }
        var f = this.subparse(h);
        o ? a = {
          type: "ordgroup",
          mode: "math",
          body: f
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: f
        };
      } else
        break;
    }
    return r || a ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: r,
      sub: a
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var r = this.fetch(), a = r.text, i = K0[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new K("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !i.allowedInText)
      throw new K("Can't use function '" + a + "' in text mode", r);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new K("Can't use function '" + a + "' in math mode", r);
    var {
      args: u,
      optArgs: l
    } = this.parseArguments(a, i);
    return this.callFunction(a, u, l, r, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, r, a, i) {
    var u = {
      funcName: e,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, l = K0[e];
    if (l && l.handler)
      return l.handler(u, t, r);
    throw new K("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var r = t.numArgs + t.numOptionalArgs;
    if (r === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var a = [], i = [], u = 0; u < r; u++) {
      var l = t.argTypes && t.argTypes[u], s = u < t.numOptionalArgs;
      (t.primitive && l == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && u === 1 && i[0] == null) && (l = "primitive");
      var o = this.parseGroupOfType("argument to '" + e + "'", l, s);
      if (s)
        i.push(o);
      else if (o != null)
        a.push(o);
      else
        throw new K("Null argument, please report this as a bug");
    }
    return {
      args: a,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, r) {
    switch (t) {
      case "color":
        return this.parseColorGroup(r);
      case "size":
        return this.parseSizeGroup(r);
      case "url":
        return this.parseUrlGroup(r);
      case "math":
      case "text":
        return this.parseArgumentGroup(r, t);
      case "hbox": {
        var a = this.parseArgumentGroup(r, "text");
        return a != null ? {
          type: "styling",
          mode: a.mode,
          body: [a],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", r);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (r)
          throw new K("A primitive argument cannot be optional");
        var u = this.parseGroup(e);
        if (u == null)
          throw new K("Expected group as " + e, this.fetch());
        return u;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new K("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var r = this.gullet.scanArgument(t);
    if (r == null)
      return null;
    for (var a = "", i; (i = this.fetch()).text !== "EOF"; )
      a += i.text, this.consume();
    return this.consume(), r.text = a, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var r = this.fetch(), a = r, i = "", u; (u = this.fetch()).text !== "EOF" && e.test(i + u.text); )
      a = u, i += a.text, this.consume();
    if (i === "")
      throw new K("Invalid " + t + ": '" + r.text + "'", r);
    return r.range(a, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!r)
      throw new K("Invalid color: '" + t.text + "'", t);
    var a = r[0];
    return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
      type: "color-token",
      mode: this.mode,
      color: a
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, r = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", r = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!a)
      throw new K("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!z1(i))
      throw new K("Invalid unit: '" + i.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: r
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: r
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    var a = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var u = {
      type: "ordgroup",
      mode: this.mode,
      loc: r.loc,
      body: i
    };
    return t && this.switchMode(a), u;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var r = this.fetch(), a = r.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var u = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var l = this.parseExpression(!1, u), s = this.fetch();
      this.expect(u), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: Ot.range(r, s),
        body: l,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !Tc.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new K("Undefined control sequence: " + a, r);
      i = this.formatUnsupportedCmd(a), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, r = 0; r < t; ++r) {
      var a = e[r], i = a.text;
      i === "-" && e[r + 1].text === "-" && (r + 1 < t && e[r + 2].text === "-" ? (e.splice(r, 3, {
        type: "textord",
        mode: "text",
        loc: Ot.range(a, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Ot.range(a, e[r + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[r + 1].text === i && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Ot.range(a, e[r + 1]),
        text: i + i
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var r = t.slice(5), a = r.charAt(0) === "*";
      if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1))
        throw new K(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: a
      };
    }
    Vl.hasOwnProperty(t[0]) && !Pe[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Vl[t[0]] + t.slice(1));
    var i = Q2.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var u;
    if (Pe[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Su.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var l = Pe[this.mode][t].group, s = Ot.range(e), o;
      if (jh.hasOwnProperty(l)) {
        var h = l;
        o = {
          type: "atom",
          mode: this.mode,
          family: h,
          loc: s,
          text: t
        };
      } else
        o = {
          type: l,
          mode: this.mode,
          loc: s,
          text: t
        };
      u = o;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (B1(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), u = {
        type: "textord",
        mode: "text",
        loc: Ot.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var p = 0; p < i[0].length; p++) {
        var f = i[0][p];
        if (!Ki[f])
          throw new K("Unknown accent ' " + f + "'", e);
        var m = Ki[f][this.mode] || Ki[f].text;
        if (!m)
          throw new K("Accent " + f + " unsupported in " + this.mode + " mode", e);
        u = {
          type: "accent",
          mode: this.mode,
          loc: Ot.range(e),
          label: m,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: u
        };
      }
    return u;
  }
};
Cc.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Os = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new Cc(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var a = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new K("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: r.subparse([new Xt("\\df@tag")])
    }];
  }
  return a;
}, Mc = function(e, t, r) {
  t.textContent = "";
  var a = Is(e, r).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Mc = function() {
  throw new K("KaTeX doesn't work in quirks mode.");
});
var n4 = function(e, t) {
  var r = Is(e, t).toMarkup();
  return r;
}, a4 = function(e, t) {
  var r = new ps(t);
  return Os(e, r);
}, Nc = function(e, t, r) {
  if (r.throwOnError || !(e instanceof K))
    throw e;
  var a = O.makeSpan(["katex-error"], [new Yt(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + r.errorColor), a;
}, Is = function(e, t) {
  var r = new ps(t);
  try {
    var a = Os(e, r);
    return h2(a, e, r);
  } catch (i) {
    return Nc(i, e, r);
  }
}, i4 = function(e, t) {
  var r = new ps(t);
  try {
    var a = Os(e, r);
    return m2(a, e, r);
  } catch (i) {
    return Nc(i, e, r);
  }
}, Wl = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Mc,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: n4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: K,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: Ra,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: a4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Is,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: i4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Bh,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: c,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: te,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: v,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: Vn,
    Anchor: vs,
    SymbolNode: Yt,
    SvgNode: H0,
    PathNode: tr,
    LineNode: Au
  }
}, u4 = function(e, t, r) {
  for (var a = r, i = 0, u = e.length; a < t.length; ) {
    var l = t[a];
    if (i <= 0 && t.slice(a, a + u) === e)
      return a;
    l === "\\" ? a++ : l === "{" ? i++ : l === "}" && i--, a++;
  }
  return -1;
}, s4 = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, l4 = /^\\begin{/, o4 = function(e, t) {
  for (var r, a = [], i = new RegExp("(" + t.map((o) => s4(o.left)).join("|") + ")"); r = e.search(i), r !== -1; ) {
    r > 0 && (a.push({
      type: "text",
      data: e.slice(0, r)
    }), e = e.slice(r));
    var u = t.findIndex((o) => e.startsWith(o.left));
    if (r = u4(t[u].right, e, t[u].left.length), r === -1)
      break;
    var l = e.slice(0, r + t[u].right.length), s = l4.test(l) ? l : e.slice(t[u].left.length, r);
    a.push({
      type: "math",
      data: s,
      rawData: l,
      display: t[u].display
    }), e = e.slice(r + t[u].right.length);
  }
  return e !== "" && a.push({
    type: "text",
    data: e
  }), a;
}, c4 = function(e, t) {
  var r = o4(e, t.delimiters);
  if (r.length === 1 && r[0].type === "text")
    return null;
  for (var a = document.createDocumentFragment(), i = 0; i < r.length; i++)
    if (r[i].type === "text")
      a.appendChild(document.createTextNode(r[i].data));
    else {
      var u = document.createElement("span"), l = r[i].data;
      t.displayMode = r[i].display;
      try {
        t.preProcess && (l = t.preProcess(l)), Wl.render(l, u, t);
      } catch (s) {
        if (!(s instanceof Wl.ParseError))
          throw s;
        t.errorCallback("KaTeX auto-render: Failed to parse `" + r[i].data + "` with ", s), a.appendChild(document.createTextNode(r[i].rawData));
        continue;
      }
      a.appendChild(u);
    }
  return a;
}, f4 = function n(e, t) {
  for (var r = 0; r < e.childNodes.length; r++) {
    var a = e.childNodes[r];
    if (a.nodeType === 3) {
      for (var i = a.textContent, u = a.nextSibling, l = 0; u && u.nodeType === Node.TEXT_NODE; )
        i += u.textContent, u = u.nextSibling, l++;
      var s = c4(i, t);
      if (s) {
        for (var o = 0; o < l; o++)
          a.nextSibling.remove();
        r += s.childNodes.length - 1, e.replaceChild(s, a);
      } else
        r += l;
    } else a.nodeType === 1 && function() {
      var h = " " + a.className + " ", p = t.ignoredTags.indexOf(a.nodeName.toLowerCase()) === -1 && t.ignoredClasses.every((f) => h.indexOf(" " + f + " ") === -1);
      p && n(a, t);
    }();
  }
}, d4 = function(e, t) {
  if (!e)
    throw new Error("No element provided to render");
  var r = {};
  for (var a in t)
    t.hasOwnProperty(a) && (r[a] = t[a]);
  r.delimiters = r.delimiters || [
    {
      left: "$$",
      right: "$$",
      display: !0
    },
    {
      left: "\\(",
      right: "\\)",
      display: !1
    },
    // LaTeX uses $…$, but it ruins the display of normal `$` in text:
    // {left: "$", right: "$", display: false},
    // $ must come after $$
    // Render AMS environments even if outside $$…$$ delimiters.
    {
      left: "\\begin{equation}",
      right: "\\end{equation}",
      display: !0
    },
    {
      left: "\\begin{align}",
      right: "\\end{align}",
      display: !0
    },
    {
      left: "\\begin{alignat}",
      right: "\\end{alignat}",
      display: !0
    },
    {
      left: "\\begin{gather}",
      right: "\\end{gather}",
      display: !0
    },
    {
      left: "\\begin{CD}",
      right: "\\end{CD}",
      display: !0
    },
    {
      left: "\\[",
      right: "\\]",
      display: !0
    }
  ], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, f4(e, r);
};
function Rs() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let xr = Rs();
function Oc(n) {
  xr = n;
}
const Ic = /[&<>"']/, h4 = new RegExp(Ic.source, "g"), Rc = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, m4 = new RegExp(Rc.source, "g"), p4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Xl = (n) => p4[n];
function It(n, e) {
  if (e) {
    if (Ic.test(n))
      return n.replace(h4, Xl);
  } else if (Rc.test(n))
    return n.replace(m4, Xl);
  return n;
}
const g4 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function b4(n) {
  return n.replace(g4, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const v4 = /(^|[^\[])\^/g;
function Ie(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = {
    replace: (a, i) => {
      let u = typeof i == "string" ? i : i.source;
      return u = u.replace(v4, "$1"), t = t.replace(a, u), r;
    },
    getRegex: () => new RegExp(t, e)
  };
  return r;
}
function Yl(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Fn = { exec: () => null };
function $l(n, e) {
  const t = n.replace(/\|/g, (i, u, l) => {
    let s = !1, o = u;
    for (; --o >= 0 && l[o] === "\\"; )
      s = !s;
    return s ? "|" : " |";
  }), r = t.split(/ \|/);
  let a = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; a < r.length; a++)
    r[a] = r[a].trim().replace(/\\\|/g, "|");
  return r;
}
function ca(n, e, t) {
  const r = n.length;
  if (r === 0)
    return "";
  let a = 0;
  for (; a < r; ) {
    const i = n.charAt(r - a - 1);
    if (i === e && !t)
      a++;
    else if (i !== e && t)
      a++;
    else
      break;
  }
  return n.slice(0, r - a);
}
function y4(n, e) {
  if (n.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < n.length; r++)
    if (n[r] === "\\")
      r++;
    else if (n[r] === e[0])
      t++;
    else if (n[r] === e[1] && (t--, t < 0))
      return r;
  return -1;
}
function Zl(n, e, t, r) {
  const a = e.href, i = e.title ? It(e.title) : null, u = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const l = {
      type: "link",
      raw: t,
      href: a,
      title: i,
      text: u,
      tokens: r.inlineTokens(u)
    };
    return r.state.inLink = !1, l;
  }
  return {
    type: "image",
    raw: t,
    href: a,
    title: i,
    text: It(u)
  };
}
function w4(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const r = t[1];
  return e.split(`
`).map((a) => {
    const i = a.match(/^\s+/);
    if (i === null)
      return a;
    const [u] = i;
    return u.length >= r.length ? a.slice(r.length) : a;
  }).join(`
`);
}
class ei {
  // set by the lexer
  constructor(e) {
    qe(this, "options");
    qe(this, "rules");
    // set by the lexer
    qe(this, "lexer");
    this.options = e || xr;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : ca(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], a = w4(r, t[3] || "");
      return {
        type: "code",
        raw: r,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: a
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const a = ca(r, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (r = a.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = ca(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const a = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(r);
      return this.lexer.state.top = a, {
        type: "blockquote",
        raw: t[0],
        tokens: i,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const a = r.length > 1, i = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = a ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = a ? r : "[*+-]");
      const u = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let l = "", s = "", o = !1;
      for (; e; ) {
        let h = !1;
        if (!(t = u.exec(e)) || this.rules.block.hr.test(e))
          break;
        l = t[0], e = e.substring(l.length);
        let p = t[2].split(`
`, 1)[0].replace(/^\t+/, (T) => " ".repeat(3 * T.length)), f = e.split(`
`, 1)[0], m = 0;
        this.options.pedantic ? (m = 2, s = p.trimStart()) : (m = t[2].search(/[^ ]/), m = m > 4 ? 1 : m, s = p.slice(m), m += t[1].length);
        let D = !1;
        if (!p && /^ *$/.test(f) && (l += f + `
`, e = e.substring(f.length + 1), h = !0), !h) {
          const T = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), x = new RegExp(`^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`), S = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; e; ) {
            const F = e.split(`
`, 1)[0];
            if (f = F, this.options.pedantic && (f = f.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(f) || S.test(f) || T.test(f) || x.test(e))
              break;
            if (f.search(/[^ ]/) >= m || !f.trim())
              s += `
` + f.slice(m);
            else {
              if (D || p.search(/[^ ]/) >= 4 || y.test(p) || S.test(p) || x.test(p))
                break;
              s += `
` + f;
            }
            !D && !f.trim() && (D = !0), l += F + `
`, e = e.substring(F.length + 1), p = f.slice(m);
          }
        }
        i.loose || (o ? i.loose = !0 : /\n *\n *$/.test(l) && (o = !0));
        let _ = null, w;
        this.options.gfm && (_ = /^\[[ xX]\] /.exec(s), _ && (w = _[0] !== "[ ] ", s = s.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: l,
          task: !!_,
          checked: w,
          loose: !1,
          text: s,
          tokens: []
        }), i.raw += l;
      }
      i.items[i.items.length - 1].raw = l.trimEnd(), i.items[i.items.length - 1].text = s.trimEnd(), i.raw = i.raw.trimEnd();
      for (let h = 0; h < i.items.length; h++)
        if (this.lexer.state.top = !1, i.items[h].tokens = this.lexer.blockTokens(i.items[h].text, []), !i.loose) {
          const p = i.items[h].tokens.filter((m) => m.type === "space"), f = p.length > 0 && p.some((m) => /\n.*\n/.test(m.raw));
          i.loose = f;
        }
      if (i.loose)
        for (let h = 0; h < i.items.length; h++)
          i.items[h].loose = !0;
      return i;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), a = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: r,
        raw: t[0],
        href: a,
        title: i
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const r = $l(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], u = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === a.length) {
      for (const l of a)
        /^ *-+: *$/.test(l) ? u.align.push("right") : /^ *:-+: *$/.test(l) ? u.align.push("center") : /^ *:-+ *$/.test(l) ? u.align.push("left") : u.align.push(null);
      for (const l of r)
        u.header.push({
          text: l,
          tokens: this.lexer.inline(l)
        });
      for (const l of i)
        u.rows.push($l(l, u.header.length).map((s) => ({
          text: s,
          tokens: this.lexer.inline(s)
        })));
      return u;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: It(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const u = ca(r.slice(0, -1), "\\");
        if ((r.length - u.length) % 2 === 0)
          return;
      } else {
        const u = y4(t[2], "()");
        if (u > -1) {
          const s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + u;
          t[2] = t[2].substring(0, u), t[0] = t[0].substring(0, s).trim(), t[3] = "";
        }
      }
      let a = t[2], i = "";
      if (this.options.pedantic) {
        const u = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        u && (a = u[1], i = u[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(r) ? a = a.slice(1) : a = a.slice(1, -1)), Zl(t, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const a = (r[2] || r[1]).replace(/\s+/g, " "), i = t[a.toLowerCase()];
      if (!i) {
        const u = r[0].charAt(0);
        return {
          type: "text",
          raw: u,
          text: u
        };
      }
      return Zl(r, i, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const u = [...a[0]].length - 1;
      let l, s, o = u, h = 0;
      const p = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, t = t.slice(-1 * e.length + u); (a = p.exec(t)) != null; ) {
        if (l = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !l)
          continue;
        if (s = [...l].length, a[3] || a[4]) {
          o += s;
          continue;
        } else if ((a[5] || a[6]) && u % 3 && !((u + s) % 3)) {
          h += s;
          continue;
        }
        if (o -= s, o > 0)
          continue;
        s = Math.min(s, s + o + h);
        const f = [...a[0]][0].length, m = e.slice(0, u + a.index + f + s);
        if (Math.min(u, s) % 2) {
          const _ = m.slice(1, -1);
          return {
            type: "em",
            raw: m,
            text: _,
            tokens: this.lexer.inlineTokens(_)
          };
        }
        const D = m.slice(2, -2);
        return {
          type: "strong",
          raw: m,
          text: D,
          tokens: this.lexer.inlineTokens(D)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return a && i && (r = r.substring(1, r.length - 1)), r = It(r, !0), {
        type: "codespan",
        raw: t[0],
        text: r
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, a;
      return t[2] === "@" ? (r = It(t[1]), a = "mailto:" + r) : (r = It(t[1]), a = r), {
        type: "link",
        raw: t[0],
        text: r,
        href: a,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(e) {
    var r;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let a, i;
      if (t[2] === "@")
        a = It(t[0]), i = "mailto:" + a;
      else {
        let u;
        do
          u = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (u !== t[0]);
        a = It(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: a,
        href: i,
        tokens: [
          {
            type: "text",
            raw: a,
            text: a
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let r;
      return this.lexer.state.inRawBlock ? r = t[0] : r = It(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const x4 = /^(?: *(?:\n|$))+/, A4 = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, S4 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Xn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, D4 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Lc = /(?:[*+-]|\d{1,9}[.)])/, Bc = Ie(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Lc).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Ls = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, E4 = /^[^\n]+/, Bs = /(?!\s*\])(?:\\.|[^\[\]\\])+/, k4 = Ie(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Bs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), _4 = Ie(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Lc).getRegex(), vi = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", zs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, T4 = Ie("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", zs).replace("tag", vi).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), zc = Ie(Ls).replace("hr", Xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", vi).getRegex(), C4 = Ie(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", zc).getRegex(), Ps = {
  blockquote: C4,
  code: A4,
  def: k4,
  fences: S4,
  heading: D4,
  hr: Xn,
  html: T4,
  lheading: Bc,
  list: _4,
  newline: x4,
  paragraph: zc,
  table: Fn,
  text: E4
}, Kl = Ie("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", vi).getRegex(), F4 = {
  ...Ps,
  table: Kl,
  paragraph: Ie(Ls).replace("hr", Xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Kl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", vi).getRegex()
}, M4 = {
  ...Ps,
  html: Ie(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", zs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Fn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Ie(Ls).replace("hr", Xn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Bc).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Pc = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, N4 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, qc = /^( {2,}|\\)\n(?!\s*$)/, O4 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Yn = "\\p{P}\\p{S}", I4 = Ie(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Yn).getRegex(), R4 = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, L4 = Ie(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Yn).getRegex(), B4 = Ie("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Yn).getRegex(), z4 = Ie("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Yn).getRegex(), P4 = Ie(/\\([punct])/, "gu").replace(/punct/g, Yn).getRegex(), q4 = Ie(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), H4 = Ie(zs).replace("(?:-->|$)", "-->").getRegex(), U4 = Ie("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", H4).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ti = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, G4 = Ie(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ti).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Hc = Ie(/^!?\[(label)\]\[(ref)\]/).replace("label", ti).replace("ref", Bs).getRegex(), Uc = Ie(/^!?\[(ref)\](?:\[\])?/).replace("ref", Bs).getRegex(), j4 = Ie("reflink|nolink(?!\\()", "g").replace("reflink", Hc).replace("nolink", Uc).getRegex(), qs = {
  _backpedal: Fn,
  // only used for GFM url
  anyPunctuation: P4,
  autolink: q4,
  blockSkip: R4,
  br: qc,
  code: N4,
  del: Fn,
  emStrongLDelim: L4,
  emStrongRDelimAst: B4,
  emStrongRDelimUnd: z4,
  escape: Pc,
  link: G4,
  nolink: Uc,
  punctuation: I4,
  reflink: Hc,
  reflinkSearch: j4,
  tag: U4,
  text: O4,
  url: Fn
}, V4 = {
  ...qs,
  link: Ie(/^!?\[(label)\]\((.*?)\)/).replace("label", ti).getRegex(),
  reflink: Ie(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ti).getRegex()
}, Cu = {
  ...qs,
  escape: Ie(Pc).replace("])", "~|])").getRegex(),
  url: Ie(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, W4 = {
  ...Cu,
  br: Ie(qc).replace("{2,}", "*").getRegex(),
  text: Ie(Cu.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, fa = {
  normal: Ps,
  gfm: F4,
  pedantic: M4
}, on = {
  normal: qs,
  gfm: Cu,
  breaks: W4,
  pedantic: V4
};
class x0 {
  constructor(e) {
    qe(this, "tokens");
    qe(this, "options");
    qe(this, "state");
    qe(this, "tokenizer");
    qe(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || xr, this.options.tokenizer = this.options.tokenizer || new ei(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: fa.normal,
      inline: on.normal
    };
    this.options.pedantic ? (t.block = fa.pedantic, t.inline = on.pedantic) : this.options.gfm && (t.block = fa.gfm, this.options.breaks ? t.inline = on.breaks : t.inline = on.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: fa,
      inline: on
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new x0(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new x0(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (l, s, o) => s + "    ".repeat(o.length));
    let r, a, i, u;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((l) => (r = l.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let l = 1 / 0;
          const s = e.slice(1);
          let o;
          this.options.extensions.startBlock.forEach((h) => {
            o = h.call({ lexer: this }, s), typeof o == "number" && o >= 0 && (l = Math.min(l, o));
          }), l < 1 / 0 && l >= 0 && (i = e.substring(0, l + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(i))) {
          a = t[t.length - 1], u && a.type === "paragraph" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r), u = i.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && a.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r);
          continue;
        }
        if (e) {
          const l = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          } else
            throw new Error(l);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let r, a, i, u = e, l, s, o;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(u)) != null; )
          h.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (u = u.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = this.tokenizer.rules.inline.blockSkip.exec(u)) != null; )
      u = u.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(u)) != null; )
      u = u.slice(0, l.index) + "++" + u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (s || (o = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((h) => (r = h.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, u, o)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let h = 1 / 0;
          const p = e.slice(1);
          let f;
          this.options.extensions.startInline.forEach((m) => {
            f = m.call({ lexer: this }, p), typeof f == "number" && f >= 0 && (h = Math.min(h, f));
          }), h < 1 / 0 && h >= 0 && (i = e.substring(0, h + 1));
        }
        if (r = this.tokenizer.inlineText(i)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), s = !0, a = t[t.length - 1], a && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          const h = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else
            throw new Error(h);
        }
      }
    return t;
  }
}
class ri {
  constructor(e) {
    qe(this, "options");
    this.options = e || xr;
  }
  code(e, t, r) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + It(a) + '">' + (r ? e : It(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : It(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, r) {
    const a = t ? "ol" : "ul", i = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + a + i + `>
` + e + "</" + a + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    const a = Yl(e);
    if (a === null)
      return r;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + r + "</a>", i;
  }
  image(e, t, r) {
    const a = Yl(e);
    if (a === null)
      return r;
    e = a;
    let i = `<img src="${e}" alt="${r}"`;
    return t && (i += ` title="${t}"`), i += ">", i;
  }
  text(e) {
    return e;
  }
}
class Hs {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class A0 {
  constructor(e) {
    qe(this, "options");
    qe(this, "renderer");
    qe(this, "textRenderer");
    this.options = e || xr, this.options.renderer = this.options.renderer || new ri(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Hs();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new A0(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new A0(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let r = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const u = i, l = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          r += l || "";
          continue;
        }
      }
      switch (i.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          const u = i;
          r += this.renderer.heading(this.parseInline(u.tokens), u.depth, b4(this.parseInline(u.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const u = i;
          r += this.renderer.code(u.text, u.lang, !!u.escaped);
          continue;
        }
        case "table": {
          const u = i;
          let l = "", s = "";
          for (let h = 0; h < u.header.length; h++)
            s += this.renderer.tablecell(this.parseInline(u.header[h].tokens), { header: !0, align: u.align[h] });
          l += this.renderer.tablerow(s);
          let o = "";
          for (let h = 0; h < u.rows.length; h++) {
            const p = u.rows[h];
            s = "";
            for (let f = 0; f < p.length; f++)
              s += this.renderer.tablecell(this.parseInline(p[f].tokens), { header: !1, align: u.align[f] });
            o += this.renderer.tablerow(s);
          }
          r += this.renderer.table(l, o);
          continue;
        }
        case "blockquote": {
          const u = i, l = this.parse(u.tokens);
          r += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          const u = i, l = u.ordered, s = u.start, o = u.loose;
          let h = "";
          for (let p = 0; p < u.items.length; p++) {
            const f = u.items[p], m = f.checked, D = f.task;
            let _ = "";
            if (f.task) {
              const w = this.renderer.checkbox(!!m);
              o ? f.tokens.length > 0 && f.tokens[0].type === "paragraph" ? (f.tokens[0].text = w + " " + f.tokens[0].text, f.tokens[0].tokens && f.tokens[0].tokens.length > 0 && f.tokens[0].tokens[0].type === "text" && (f.tokens[0].tokens[0].text = w + " " + f.tokens[0].tokens[0].text)) : f.tokens.unshift({
                type: "text",
                text: w + " "
              }) : _ += w + " ";
            }
            _ += this.parse(f.tokens, o), h += this.renderer.listitem(_, D, !!m);
          }
          r += this.renderer.list(h, l, s);
          continue;
        }
        case "html": {
          const u = i;
          r += this.renderer.html(u.text, u.block);
          continue;
        }
        case "paragraph": {
          const u = i;
          r += this.renderer.paragraph(this.parseInline(u.tokens));
          continue;
        }
        case "text": {
          let u = i, l = u.tokens ? this.parseInline(u.tokens) : u.text;
          for (; a + 1 < e.length && e[a + 1].type === "text"; )
            u = e[++a], l += `
` + (u.tokens ? this.parseInline(u.tokens) : u.text);
          r += t ? this.renderer.paragraph(l) : l;
          continue;
        }
        default: {
          const u = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const u = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          r += u || "";
          continue;
        }
      }
      switch (i.type) {
        case "escape": {
          const u = i;
          r += t.text(u.text);
          break;
        }
        case "html": {
          const u = i;
          r += t.html(u.text);
          break;
        }
        case "link": {
          const u = i;
          r += t.link(u.href, u.title, this.parseInline(u.tokens, t));
          break;
        }
        case "image": {
          const u = i;
          r += t.image(u.href, u.title, u.text);
          break;
        }
        case "strong": {
          const u = i;
          r += t.strong(this.parseInline(u.tokens, t));
          break;
        }
        case "em": {
          const u = i;
          r += t.em(this.parseInline(u.tokens, t));
          break;
        }
        case "codespan": {
          const u = i;
          r += t.codespan(u.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          const u = i;
          r += t.del(this.parseInline(u.tokens, t));
          break;
        }
        case "text": {
          const u = i;
          r += t.text(u.text);
          break;
        }
        default: {
          const u = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return r;
  }
}
class Mn {
  constructor(e) {
    qe(this, "options");
    this.options = e || xr;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
qe(Mn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var yr, Fu, jc;
class Gc {
  constructor(...e) {
    ll(this, yr);
    qe(this, "defaults", Rs());
    qe(this, "options", this.setOptions);
    qe(this, "parse", ea(this, yr, Fu).call(this, x0.lex, A0.parse));
    qe(this, "parseInline", ea(this, yr, Fu).call(this, x0.lexInline, A0.parseInline));
    qe(this, "Parser", A0);
    qe(this, "Renderer", ri);
    qe(this, "TextRenderer", Hs);
    qe(this, "Lexer", x0);
    qe(this, "Tokenizer", ei);
    qe(this, "Hooks", Mn);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var a, i;
    let r = [];
    for (const u of e)
      switch (r = r.concat(t.call(this, u)), u.type) {
        case "table": {
          const l = u;
          for (const s of l.header)
            r = r.concat(this.walkTokens(s.tokens, t));
          for (const s of l.rows)
            for (const o of s)
              r = r.concat(this.walkTokens(o.tokens, t));
          break;
        }
        case "list": {
          const l = u;
          r = r.concat(this.walkTokens(l.items, t));
          break;
        }
        default: {
          const l = u;
          (i = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && i[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((s) => {
            const o = l[s].flat(1 / 0);
            r = r.concat(this.walkTokens(o, t));
          }) : l.tokens && (r = r.concat(this.walkTokens(l.tokens, t)));
        }
      }
    return r;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      const a = { ...r };
      if (a.async = this.defaults.async || a.async || !1, r.extensions && (r.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const u = t.renderers[i.name];
          u ? t.renderers[i.name] = function(...l) {
            let s = i.renderer.apply(this, l);
            return s === !1 && (s = u.apply(this, l)), s;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const u = t[i.level];
          u ? u.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), a.extensions = t), r.renderer) {
        const i = this.defaults.renderer || new ri(this.defaults);
        for (const u in r.renderer) {
          if (!(u in i))
            throw new Error(`renderer '${u}' does not exist`);
          if (u === "options")
            continue;
          const l = u, s = r.renderer[l], o = i[l];
          i[l] = (...h) => {
            let p = s.apply(i, h);
            return p === !1 && (p = o.apply(i, h)), p || "";
          };
        }
        a.renderer = i;
      }
      if (r.tokenizer) {
        const i = this.defaults.tokenizer || new ei(this.defaults);
        for (const u in r.tokenizer) {
          if (!(u in i))
            throw new Error(`tokenizer '${u}' does not exist`);
          if (["options", "rules", "lexer"].includes(u))
            continue;
          const l = u, s = r.tokenizer[l], o = i[l];
          i[l] = (...h) => {
            let p = s.apply(i, h);
            return p === !1 && (p = o.apply(i, h)), p;
          };
        }
        a.tokenizer = i;
      }
      if (r.hooks) {
        const i = this.defaults.hooks || new Mn();
        for (const u in r.hooks) {
          if (!(u in i))
            throw new Error(`hook '${u}' does not exist`);
          if (u === "options")
            continue;
          const l = u, s = r.hooks[l], o = i[l];
          Mn.passThroughHooks.has(u) ? i[l] = (h) => {
            if (this.defaults.async)
              return Promise.resolve(s.call(i, h)).then((f) => o.call(i, f));
            const p = s.call(i, h);
            return o.call(i, p);
          } : i[l] = (...h) => {
            let p = s.apply(i, h);
            return p === !1 && (p = o.apply(i, h)), p;
          };
        }
        a.hooks = i;
      }
      if (r.walkTokens) {
        const i = this.defaults.walkTokens, u = r.walkTokens;
        a.walkTokens = function(l) {
          let s = [];
          return s.push(u.call(this, l)), i && (s = s.concat(i.call(this, l))), s;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return x0.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return A0.parse(e, t ?? this.defaults);
  }
}
yr = new WeakSet(), Fu = function(e, t) {
  return (r, a) => {
    const i = { ...a }, u = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (u.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), u.async = !0);
    const l = ea(this, yr, jc).call(this, !!u.silent, !!u.async);
    if (typeof r > "u" || r === null)
      return l(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string")
      return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (u.hooks && (u.hooks.options = u), u.async)
      return Promise.resolve(u.hooks ? u.hooks.preprocess(r) : r).then((s) => e(s, u)).then((s) => u.hooks ? u.hooks.processAllTokens(s) : s).then((s) => u.walkTokens ? Promise.all(this.walkTokens(s, u.walkTokens)).then(() => s) : s).then((s) => t(s, u)).then((s) => u.hooks ? u.hooks.postprocess(s) : s).catch(l);
    try {
      u.hooks && (r = u.hooks.preprocess(r));
      let s = e(r, u);
      u.hooks && (s = u.hooks.processAllTokens(s)), u.walkTokens && this.walkTokens(s, u.walkTokens);
      let o = t(s, u);
      return u.hooks && (o = u.hooks.postprocess(o)), o;
    } catch (s) {
      return l(s);
    }
  };
}, jc = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + It(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const br = new Gc();
function Oe(n, e) {
  return br.parse(n, e);
}
Oe.options = Oe.setOptions = function(n) {
  return br.setOptions(n), Oe.defaults = br.defaults, Oc(Oe.defaults), Oe;
};
Oe.getDefaults = Rs;
Oe.defaults = xr;
Oe.use = function(...n) {
  return br.use(...n), Oe.defaults = br.defaults, Oc(Oe.defaults), Oe;
};
Oe.walkTokens = function(n, e) {
  return br.walkTokens(n, e);
};
Oe.parseInline = br.parseInline;
Oe.Parser = A0;
Oe.parser = A0.parse;
Oe.Renderer = ri;
Oe.TextRenderer = Hs;
Oe.Lexer = x0;
Oe.lexer = x0.lex;
Oe.Tokenizer = ei;
Oe.Hooks = Mn;
Oe.parse = Oe;
Oe.options;
Oe.setOptions;
Oe.use;
Oe.walkTokens;
Oe.parseInline;
A0.parse;
x0.lex;
function X4(n) {
  if (typeof n == "function" && (n = {
    highlight: n
  }), !n || typeof n.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof n.langPrefix != "string" && (n.langPrefix = "language-"), {
    async: !!n.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = Ql(e.lang);
      if (n.async)
        return Promise.resolve(n.highlight(e.text, t, e.lang || "")).then(Jl(e));
      const r = n.highlight(e.text, t, e.lang || "");
      if (r instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      Jl(e)(r);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, r) {
        typeof e == "object" && (r = e.escaped, t = e.lang, e = e.text);
        const a = Ql(t), i = a ? ` class="${n.langPrefix}${to(a)}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${i}>${r ? e : to(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Ql(n) {
  return (n || "").match(/\S*/)[0];
}
function Jl(n) {
  return (e) => {
    typeof e == "string" && e !== n.text && (n.escaped = !0, n.text = e);
  };
}
const Vc = /[&<>"']/, Y4 = new RegExp(Vc.source, "g"), Wc = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, $4 = new RegExp(Wc.source, "g"), Z4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, eo = (n) => Z4[n];
function to(n, e) {
  if (e) {
    if (Vc.test(n))
      return n.replace(Y4, eo);
  } else if (Wc.test(n))
    return n.replace($4, eo);
  return n;
}
const K4 = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Q4 = Object.hasOwnProperty;
class Us {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(e, t) {
    const r = this;
    let a = J4(e, t === !0);
    const i = a;
    for (; Q4.call(r.occurrences, a); )
      r.occurrences[i]++, a = i + "-" + r.occurrences[i];
    return r.occurrences[a] = 0, a;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function J4(n, e) {
  return typeof n != "string" ? "" : (e || (n = n.toLowerCase()), n.replace(K4, "").replace(/ /g, "-"));
}
let Xc = new Us(), Yc = [];
function em({ prefix: n = "", globalSlugs: e = !1 } = {}) {
  return {
    headerIds: !1,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(t) {
        return e || tm(), t;
      }
    },
    renderer: {
      heading(t, r, a) {
        a = a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const i = `${n}${Xc.slug(a)}`, u = { level: r, text: t, id: i };
        return Yc.push(u), `<h${r} id="${i}">${t}</h${r}>
`;
      }
    }
  };
}
function tm() {
  Yc = [], Xc = new Us();
}
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rm(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function nm(n) {
  if (n.__esModule) return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var $c = { exports: {} };
(function(n) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, u = {}, l = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function x(y) {
          return y instanceof s ? new s(y.type, x(y.content), y.alias) : Array.isArray(y) ? y.map(x) : y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(x) {
          return Object.prototype.toString.call(x).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(x) {
          return x.__id || Object.defineProperty(x, "__id", { value: ++i }), x.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function x(y, S) {
          S = S || {};
          var F, L;
          switch (l.util.type(y)) {
            case "Object":
              if (L = l.util.objId(y), S[L])
                return S[L];
              F = /** @type {Record<string, any>} */
              {}, S[L] = F;
              for (var I in y)
                y.hasOwnProperty(I) && (F[I] = x(y[I], S));
              return (
                /** @type {any} */
                F
              );
            case "Array":
              return L = l.util.objId(y), S[L] ? S[L] : (F = [], S[L] = F, /** @type {Array} */
              /** @type {any} */
              y.forEach(function(U, z) {
                F[z] = x(U, S);
              }), /** @type {any} */
              F);
            default:
              return y;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(x) {
          for (; x; ) {
            var y = a.exec(x.className);
            if (y)
              return y[1].toLowerCase();
            x = x.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(x, y) {
          x.className = x.className.replace(RegExp(a, "gi"), ""), x.classList.add("language-" + y);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (F) {
            var x = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(F.stack) || [])[1];
            if (x) {
              var y = document.getElementsByTagName("script");
              for (var S in y)
                if (y[S].src == x)
                  return y[S];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(x, y, S) {
          for (var F = "no-" + y; x; ) {
            var L = x.classList;
            if (L.contains(y))
              return !0;
            if (L.contains(F))
              return !1;
            x = x.parentElement;
          }
          return !!S;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: u,
        plaintext: u,
        text: u,
        txt: u,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(x, y) {
          var S = l.util.clone(l.languages[x]);
          for (var F in y)
            S[F] = y[F];
          return S;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(x, y, S, F) {
          F = F || /** @type {any} */
          l.languages;
          var L = F[x], I = {};
          for (var U in L)
            if (L.hasOwnProperty(U)) {
              if (U == y)
                for (var z in S)
                  S.hasOwnProperty(z) && (I[z] = S[z]);
              S.hasOwnProperty(U) || (I[U] = L[U]);
            }
          var B = F[x];
          return F[x] = I, l.languages.DFS(l.languages, function(k, P) {
            P === B && k != x && (this[k] = I);
          }), I;
        },
        // Traverse a language definition with Depth First Search
        DFS: function x(y, S, F, L) {
          L = L || {};
          var I = l.util.objId;
          for (var U in y)
            if (y.hasOwnProperty(U)) {
              S.call(y, U, y[U], F || U);
              var z = y[U], B = l.util.type(z);
              B === "Object" && !L[I(z)] ? (L[I(z)] = !0, x(z, S, null, L)) : B === "Array" && !L[I(z)] && (L[I(z)] = !0, x(z, S, U, L));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(x, y) {
        l.highlightAllUnder(document, x, y);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(x, y, S) {
        var F = {
          callback: S,
          container: x,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        l.hooks.run("before-highlightall", F), F.elements = Array.prototype.slice.apply(F.container.querySelectorAll(F.selector)), l.hooks.run("before-all-elements-highlight", F);
        for (var L = 0, I; I = F.elements[L++]; )
          l.highlightElement(I, y === !0, F.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(x, y, S) {
        var F = l.util.getLanguage(x), L = l.languages[F];
        l.util.setLanguage(x, F);
        var I = x.parentElement;
        I && I.nodeName.toLowerCase() === "pre" && l.util.setLanguage(I, F);
        var U = x.textContent, z = {
          element: x,
          language: F,
          grammar: L,
          code: U
        };
        function B(P) {
          z.highlightedCode = P, l.hooks.run("before-insert", z), z.element.innerHTML = z.highlightedCode, l.hooks.run("after-highlight", z), l.hooks.run("complete", z), S && S.call(z.element);
        }
        if (l.hooks.run("before-sanity-check", z), I = z.element.parentElement, I && I.nodeName.toLowerCase() === "pre" && !I.hasAttribute("tabindex") && I.setAttribute("tabindex", "0"), !z.code) {
          l.hooks.run("complete", z), S && S.call(z.element);
          return;
        }
        if (l.hooks.run("before-highlight", z), !z.grammar) {
          B(l.util.encode(z.code));
          return;
        }
        if (y && r.Worker) {
          var k = new Worker(l.filename);
          k.onmessage = function(P) {
            B(P.data);
          }, k.postMessage(JSON.stringify({
            language: z.language,
            code: z.code,
            immediateClose: !0
          }));
        } else
          B(l.highlight(z.code, z.grammar, z.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(x, y, S) {
        var F = {
          code: x,
          grammar: y,
          language: S
        };
        if (l.hooks.run("before-tokenize", F), !F.grammar)
          throw new Error('The language "' + F.language + '" has no grammar.');
        return F.tokens = l.tokenize(F.code, F.grammar), l.hooks.run("after-tokenize", F), s.stringify(l.util.encode(F.tokens), F.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(x, y) {
        var S = y.rest;
        if (S) {
          for (var F in S)
            y[F] = S[F];
          delete y.rest;
        }
        var L = new p();
        return f(L, L.head, x), h(x, L, y, L.head, 0), D(L);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(x, y) {
          var S = l.hooks.all;
          S[x] = S[x] || [], S[x].push(y);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(x, y) {
          var S = l.hooks.all[x];
          if (!(!S || !S.length))
            for (var F = 0, L; L = S[F++]; )
              L(y);
        }
      },
      Token: s
    };
    r.Prism = l;
    function s(x, y, S, F) {
      this.type = x, this.content = y, this.alias = S, this.length = (F || "").length | 0;
    }
    s.stringify = function x(y, S) {
      if (typeof y == "string")
        return y;
      if (Array.isArray(y)) {
        var F = "";
        return y.forEach(function(B) {
          F += x(B, S);
        }), F;
      }
      var L = {
        type: y.type,
        content: x(y.content, S),
        tag: "span",
        classes: ["token", y.type],
        attributes: {},
        language: S
      }, I = y.alias;
      I && (Array.isArray(I) ? Array.prototype.push.apply(L.classes, I) : L.classes.push(I)), l.hooks.run("wrap", L);
      var U = "";
      for (var z in L.attributes)
        U += " " + z + '="' + (L.attributes[z] || "").replace(/"/g, "&quot;") + '"';
      return "<" + L.tag + ' class="' + L.classes.join(" ") + '"' + U + ">" + L.content + "</" + L.tag + ">";
    };
    function o(x, y, S, F) {
      x.lastIndex = y;
      var L = x.exec(S);
      if (L && F && L[1]) {
        var I = L[1].length;
        L.index += I, L[0] = L[0].slice(I);
      }
      return L;
    }
    function h(x, y, S, F, L, I) {
      for (var U in S)
        if (!(!S.hasOwnProperty(U) || !S[U])) {
          var z = S[U];
          z = Array.isArray(z) ? z : [z];
          for (var B = 0; B < z.length; ++B) {
            if (I && I.cause == U + "," + B)
              return;
            var k = z[B], P = k.inside, G = !!k.lookbehind, Z = !!k.greedy, N = k.alias;
            if (Z && !k.pattern.global) {
              var H = k.pattern.toString().match(/[imsuy]*$/)[0];
              k.pattern = RegExp(k.pattern.source, H + "g");
            }
            for (var j = k.pattern || k, $ = F.next, ce = L; $ !== y.tail && !(I && ce >= I.reach); ce += $.value.length, $ = $.next) {
              var ae = $.value;
              if (y.length > x.length)
                return;
              if (!(ae instanceof s)) {
                var R = 1, re;
                if (Z) {
                  if (re = o(j, ce, x, G), !re || re.index >= x.length)
                    break;
                  var Q = re.index, ie = re.index + re[0].length, ue = ce;
                  for (ue += $.value.length; Q >= ue; )
                    $ = $.next, ue += $.value.length;
                  if (ue -= $.value.length, ce = ue, $.value instanceof s)
                    continue;
                  for (var q = $; q !== y.tail && (ue < ie || typeof q.value == "string"); q = q.next)
                    R++, ue += q.value.length;
                  R--, ae = x.slice(ce, ue), re.index -= ce;
                } else if (re = o(j, 0, ae, G), !re)
                  continue;
                var Q = re.index, ee = re[0], ye = ae.slice(0, Q), Te = ae.slice(Q + ee.length), Le = ce + ae.length;
                I && Le > I.reach && (I.reach = Le);
                var Be = $.prev;
                ye && (Be = f(y, Be, ye), ce += ye.length), m(y, Be, R);
                var Ye = new s(U, P ? l.tokenize(ee, P) : ee, N, ee);
                if ($ = f(y, Be, Ye), Te && f(y, $, Te), R > 1) {
                  var He = {
                    cause: U + "," + B,
                    reach: Le
                  };
                  h(x, y, S, $.prev, ce, He), I && He.reach > I.reach && (I.reach = He.reach);
                }
              }
            }
          }
        }
    }
    function p() {
      var x = { value: null, prev: null, next: null }, y = { value: null, prev: x, next: null };
      x.next = y, this.head = x, this.tail = y, this.length = 0;
    }
    function f(x, y, S) {
      var F = y.next, L = { value: S, prev: y, next: F };
      return y.next = L, F.prev = L, x.length++, L;
    }
    function m(x, y, S) {
      for (var F = y.next, L = 0; L < S && F !== x.tail; L++)
        F = F.next;
      y.next = F, F.prev = y, x.length -= L;
    }
    function D(x) {
      for (var y = [], S = x.head.next; S !== x.tail; )
        y.push(S.value), S = S.next;
      return y;
    }
    if (!r.document)
      return r.addEventListener && (l.disableWorkerMessageHandler || r.addEventListener("message", function(x) {
        var y = JSON.parse(x.data), S = y.language, F = y.code, L = y.immediateClose;
        r.postMessage(l.highlight(F, l.languages[S], S)), L && r.close();
      }, !1)), l;
    var _ = l.util.currentScript();
    _ && (l.filename = _.src, _.hasAttribute("data-manual") && (l.manual = !0));
    function w() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var T = document.readyState;
      T === "loading" || T === "interactive" && _ && _.defer ? document.addEventListener("DOMContentLoaded", w) : window.requestAnimationFrame ? window.requestAnimationFrame(w) : window.setTimeout(w, 16);
    }
    return l;
  }(e);
  n.exports && (n.exports = t), typeof he < "u" && (he.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(a, i) {
      var u = {};
      u["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[i]
      }, u.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var l = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: u
        }
      };
      l["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: t.languages[i]
      };
      var s = {};
      s[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: l
      }, t.languages.insertBefore("markup", "cdata", s);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, a) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [a, "language-" + a],
                inside: t.languages[a]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(r) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var i = r.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", a = function(_, w) {
      return "✖ Error " + _ + " while fetching file: " + w;
    }, i = "✖ Error: File does not exist or is empty", u = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, l = "data-src-status", s = "loading", o = "loaded", h = "failed", p = "pre[data-src]:not([" + l + '="' + o + '"]):not([' + l + '="' + s + '"])';
    function f(_, w, T) {
      var x = new XMLHttpRequest();
      x.open("GET", _, !0), x.onreadystatechange = function() {
        x.readyState == 4 && (x.status < 400 && x.responseText ? w(x.responseText) : x.status >= 400 ? T(a(x.status, x.statusText)) : T(i));
      }, x.send(null);
    }
    function m(_) {
      var w = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_ || "");
      if (w) {
        var T = Number(w[1]), x = w[2], y = w[3];
        return x ? y ? [T, Number(y)] : [T, void 0] : [T, T];
      }
    }
    t.hooks.add("before-highlightall", function(_) {
      _.selector += ", " + p;
    }), t.hooks.add("before-sanity-check", function(_) {
      var w = (
        /** @type {HTMLPreElement} */
        _.element
      );
      if (w.matches(p)) {
        _.code = "", w.setAttribute(l, s);
        var T = w.appendChild(document.createElement("CODE"));
        T.textContent = r;
        var x = w.getAttribute("data-src"), y = _.language;
        if (y === "none") {
          var S = (/\.(\w+)$/.exec(x) || [, "none"])[1];
          y = u[S] || S;
        }
        t.util.setLanguage(T, y), t.util.setLanguage(w, y);
        var F = t.plugins.autoloader;
        F && F.loadLanguages(y), f(
          x,
          function(L) {
            w.setAttribute(l, o);
            var I = m(w.getAttribute("data-range"));
            if (I) {
              var U = L.split(/\r\n?|\n/g), z = I[0], B = I[1] == null ? U.length : I[1];
              z < 0 && (z += U.length), z = Math.max(0, Math.min(z - 1, U.length)), B < 0 && (B += U.length), B = Math.max(0, Math.min(B, U.length)), L = U.slice(z, B).join(`
`), w.hasAttribute("data-start") || w.setAttribute("data-start", String(z + 1));
            }
            T.textContent = L, t.highlightElement(T);
          },
          function(L) {
            w.setAttribute(l, h), T.textContent = L;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(w) {
        for (var T = (w || document).querySelectorAll(p), x = 0, y; y = T[x++]; )
          t.highlightElement(y);
      }
    };
    var D = !1;
    t.fileHighlight = function() {
      D || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), D = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})($c);
var Qi = $c.exports;
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(n) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, t = {
    "equation-command": {
      pattern: e,
      alias: "regex"
    }
  };
  n.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: t,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: t,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, n.languages.tex = n.languages.latex, n.languages.context = n.languages.latex;
})(Prism);
(function(n) {
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, r = {
    bash: t,
    environment: {
      pattern: RegExp("\\$" + e),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + e),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  n.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: t
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: r.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: r.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, t.inside = n.languages.bash;
  for (var a = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], i = r.variable[1].inside, u = 0; u < a.length; u++)
    i[a[u]] = n.languages.bash[a[u]];
  n.languages.sh = n.languages.bash, n.languages.shell = n.languages.bash;
})(Prism);
const am = '<svg class="md-link-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>', im = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" color="currentColor" aria-hidden="true" aria-label="Copy" stroke-width="1.3" width="15" height="15">
  <path fill="currentColor" d="M12.728 4.545v8.182H4.545V4.545zm0 -0.909H4.545a0.909 0.909 0 0 0 -0.909 0.909v8.182a0.909 0.909 0 0 0 0.909 0.909h8.182a0.909 0.909 0 0 0 0.909 -0.909V4.545a0.909 0.909 0 0 0 -0.909 -0.909"/>
  <path fill="currentColor" d="M1.818 8.182H0.909V1.818a0.909 0.909 0 0 1 0.909 -0.909h6.364v0.909H1.818Z"/>
</svg>

`, um = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" aria-label="Copied" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="m13.813 4.781 -7.438 7.438 -3.188 -3.188"/>
</svg>
`, ro = `<button title="copy" class="copy_code_button">
  <span class="copy-text">${im}</span>
  <span class="check">${um}</span>
</button>`, Zc = /[&<>"']/, sm = new RegExp(Zc.source, "g"), Kc = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, lm = new RegExp(Kc.source, "g"), om = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, no = (n) => om[n] || "";
function Ji(n, e) {
  if (e) {
    if (Zc.test(n))
      return n.replace(sm, no);
  } else if (Kc.test(n))
    return n.replace(lm, no);
  return n;
}
function cm(n) {
  const e = n.map((t) => ({
    start: new RegExp(t.left.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
    end: new RegExp(t.right.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
  }));
  return {
    name: "latex",
    level: "block",
    start(t) {
      for (const r of e) {
        const a = t.match(r.start);
        if (a)
          return a.index;
      }
      return -1;
    },
    tokenizer(t, r) {
      for (const a of e) {
        const i = new RegExp(
          `${a.start.source}([\\s\\S]+?)${a.end.source}`
        ).exec(t);
        if (i)
          return {
            type: "latex",
            raw: i[0],
            text: i[1].trim()
          };
      }
    },
    renderer(t) {
      return `<div class="latex-block">${t.text}</div>`;
    }
  };
}
const fm = {
  code(n, e, t) {
    var a;
    const r = ((a = (e ?? "").match(/\S*/)) == null ? void 0 : a[0]) ?? "";
    return n = n.replace(/\n$/, "") + `
`, r ? '<div class="code_wrap">' + ro + '<pre><code class="language-' + Ji(r) + '">' + (t ? n : Ji(n, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + ro + "<pre><code>" + (t ? n : Ji(n, !0)) + `</code></pre></div>
`;
  }
}, dm = new Us();
function hm({
  header_links: n,
  line_breaks: e,
  latex_delimiters: t
}) {
  const r = new Gc();
  r.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: e
    },
    X4({
      highlight: (i, u) => Qi.languages[u] ? Qi.highlight(i, Qi.languages[u], u) : i
    }),
    { renderer: fm }
  ), n && (r.use(em()), r.use({
    extensions: [
      {
        name: "heading",
        level: "block",
        renderer(i) {
          const u = i.raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, ""), l = "h" + dm.slug(u), s = i.depth, o = this.parser.parseInline(i.tokens);
          return `<h${s} id="${l}"><a class="md-header-anchor" href="#${l}">${am}</a>${o}</h${s}>
`;
        }
      }
    ]
  }));
  const a = cm(t);
  return r.use({
    extensions: [a]
  }), r;
}
var Qc = {}, Ln = {}, Gs = {}, Bn = {}, js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(n) {
    return n.charCodeAt(0);
  })
);
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(n) {
    return n.charCodeAt(0);
  })
);
var Mu = {};
(function(n) {
  var e;
  Object.defineProperty(n, "__esModule", { value: !0 }), n.replaceCodePoint = n.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  n.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (e = String.fromCodePoint) !== null && e !== void 0 ? e : function(i) {
    var u = "";
    return i > 65535 && (i -= 65536, u += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), u += String.fromCharCode(i), u;
  };
  function r(i) {
    var u;
    return i >= 55296 && i <= 57343 || i > 1114111 ? 65533 : (u = t.get(i)) !== null && u !== void 0 ? u : i;
  }
  n.replaceCodePoint = r;
  function a(i) {
    return (0, n.fromCodePoint)(r(i));
  }
  n.default = a;
})(Mu);
(function(n) {
  var e = he && he.__createBinding || (Object.create ? function(k, P, G, Z) {
    Z === void 0 && (Z = G);
    var N = Object.getOwnPropertyDescriptor(P, G);
    (!N || ("get" in N ? !P.__esModule : N.writable || N.configurable)) && (N = { enumerable: !0, get: function() {
      return P[G];
    } }), Object.defineProperty(k, Z, N);
  } : function(k, P, G, Z) {
    Z === void 0 && (Z = G), k[Z] = P[G];
  }), t = he && he.__setModuleDefault || (Object.create ? function(k, P) {
    Object.defineProperty(k, "default", { enumerable: !0, value: P });
  } : function(k, P) {
    k.default = P;
  }), r = he && he.__importStar || function(k) {
    if (k && k.__esModule) return k;
    var P = {};
    if (k != null) for (var G in k) G !== "default" && Object.prototype.hasOwnProperty.call(k, G) && e(P, k, G);
    return t(P, k), P;
  }, a = he && he.__importDefault || function(k) {
    return k && k.__esModule ? k : { default: k };
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.decodeXML = n.decodeHTMLStrict = n.decodeHTMLAttribute = n.decodeHTML = n.determineBranch = n.EntityDecoder = n.DecodingMode = n.BinTrieFlags = n.fromCodePoint = n.replaceCodePoint = n.decodeCodePoint = n.xmlDecodeTree = n.htmlDecodeTree = void 0;
  var i = a(js);
  n.htmlDecodeTree = i.default;
  var u = a(Vs);
  n.xmlDecodeTree = u.default;
  var l = r(Mu);
  n.decodeCodePoint = l.default;
  var s = Mu;
  Object.defineProperty(n, "replaceCodePoint", { enumerable: !0, get: function() {
    return s.replaceCodePoint;
  } }), Object.defineProperty(n, "fromCodePoint", { enumerable: !0, get: function() {
    return s.fromCodePoint;
  } });
  var o;
  (function(k) {
    k[k.NUM = 35] = "NUM", k[k.SEMI = 59] = "SEMI", k[k.EQUALS = 61] = "EQUALS", k[k.ZERO = 48] = "ZERO", k[k.NINE = 57] = "NINE", k[k.LOWER_A = 97] = "LOWER_A", k[k.LOWER_F = 102] = "LOWER_F", k[k.LOWER_X = 120] = "LOWER_X", k[k.LOWER_Z = 122] = "LOWER_Z", k[k.UPPER_A = 65] = "UPPER_A", k[k.UPPER_F = 70] = "UPPER_F", k[k.UPPER_Z = 90] = "UPPER_Z";
  })(o || (o = {}));
  var h = 32, p;
  (function(k) {
    k[k.VALUE_LENGTH = 49152] = "VALUE_LENGTH", k[k.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", k[k.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(p = n.BinTrieFlags || (n.BinTrieFlags = {}));
  function f(k) {
    return k >= o.ZERO && k <= o.NINE;
  }
  function m(k) {
    return k >= o.UPPER_A && k <= o.UPPER_F || k >= o.LOWER_A && k <= o.LOWER_F;
  }
  function D(k) {
    return k >= o.UPPER_A && k <= o.UPPER_Z || k >= o.LOWER_A && k <= o.LOWER_Z || f(k);
  }
  function _(k) {
    return k === o.EQUALS || D(k);
  }
  var w;
  (function(k) {
    k[k.EntityStart = 0] = "EntityStart", k[k.NumericStart = 1] = "NumericStart", k[k.NumericDecimal = 2] = "NumericDecimal", k[k.NumericHex = 3] = "NumericHex", k[k.NamedEntity = 4] = "NamedEntity";
  })(w || (w = {}));
  var T;
  (function(k) {
    k[k.Legacy = 0] = "Legacy", k[k.Strict = 1] = "Strict", k[k.Attribute = 2] = "Attribute";
  })(T = n.DecodingMode || (n.DecodingMode = {}));
  var x = (
    /** @class */
    function() {
      function k(P, G, Z) {
        this.decodeTree = P, this.emitCodePoint = G, this.errors = Z, this.state = w.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = T.Strict;
      }
      return k.prototype.startEntity = function(P) {
        this.decodeMode = P, this.state = w.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, k.prototype.write = function(P, G) {
        switch (this.state) {
          case w.EntityStart:
            return P.charCodeAt(G) === o.NUM ? (this.state = w.NumericStart, this.consumed += 1, this.stateNumericStart(P, G + 1)) : (this.state = w.NamedEntity, this.stateNamedEntity(P, G));
          case w.NumericStart:
            return this.stateNumericStart(P, G);
          case w.NumericDecimal:
            return this.stateNumericDecimal(P, G);
          case w.NumericHex:
            return this.stateNumericHex(P, G);
          case w.NamedEntity:
            return this.stateNamedEntity(P, G);
        }
      }, k.prototype.stateNumericStart = function(P, G) {
        return G >= P.length ? -1 : (P.charCodeAt(G) | h) === o.LOWER_X ? (this.state = w.NumericHex, this.consumed += 1, this.stateNumericHex(P, G + 1)) : (this.state = w.NumericDecimal, this.stateNumericDecimal(P, G));
      }, k.prototype.addToNumericResult = function(P, G, Z, N) {
        if (G !== Z) {
          var H = Z - G;
          this.result = this.result * Math.pow(N, H) + parseInt(P.substr(G, H), N), this.consumed += H;
        }
      }, k.prototype.stateNumericHex = function(P, G) {
        for (var Z = G; G < P.length; ) {
          var N = P.charCodeAt(G);
          if (f(N) || m(N))
            G += 1;
          else
            return this.addToNumericResult(P, Z, G, 16), this.emitNumericEntity(N, 3);
        }
        return this.addToNumericResult(P, Z, G, 16), -1;
      }, k.prototype.stateNumericDecimal = function(P, G) {
        for (var Z = G; G < P.length; ) {
          var N = P.charCodeAt(G);
          if (f(N))
            G += 1;
          else
            return this.addToNumericResult(P, Z, G, 10), this.emitNumericEntity(N, 2);
        }
        return this.addToNumericResult(P, Z, G, 10), -1;
      }, k.prototype.emitNumericEntity = function(P, G) {
        var Z;
        if (this.consumed <= G)
          return (Z = this.errors) === null || Z === void 0 || Z.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (P === o.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === T.Strict)
          return 0;
        return this.emitCodePoint((0, l.replaceCodePoint)(this.result), this.consumed), this.errors && (P !== o.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, k.prototype.stateNamedEntity = function(P, G) {
        for (var Z = this.decodeTree, N = Z[this.treeIndex], H = (N & p.VALUE_LENGTH) >> 14; G < P.length; G++, this.excess++) {
          var j = P.charCodeAt(G);
          if (this.treeIndex = S(Z, N, this.treeIndex + Math.max(1, H), j), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === T.Attribute && // We shouldn't have consumed any characters after the entity,
            (H === 0 || // And there should be no invalid characters.
            _(j)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (N = Z[this.treeIndex], H = (N & p.VALUE_LENGTH) >> 14, H !== 0) {
            if (j === o.SEMI)
              return this.emitNamedEntityData(this.treeIndex, H, this.consumed + this.excess);
            this.decodeMode !== T.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, k.prototype.emitNotTerminatedNamedEntity = function() {
        var P, G = this, Z = G.result, N = G.decodeTree, H = (N[Z] & p.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(Z, H, this.consumed), (P = this.errors) === null || P === void 0 || P.missingSemicolonAfterCharacterReference(), this.consumed;
      }, k.prototype.emitNamedEntityData = function(P, G, Z) {
        var N = this.decodeTree;
        return this.emitCodePoint(G === 1 ? N[P] & ~p.VALUE_LENGTH : N[P + 1], Z), G === 3 && this.emitCodePoint(N[P + 2], Z), Z;
      }, k.prototype.end = function() {
        var P;
        switch (this.state) {
          case w.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== T.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case w.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case w.NumericHex:
            return this.emitNumericEntity(0, 3);
          case w.NumericStart:
            return (P = this.errors) === null || P === void 0 || P.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case w.EntityStart:
            return 0;
        }
      }, k;
    }()
  );
  n.EntityDecoder = x;
  function y(k) {
    var P = "", G = new x(k, function(Z) {
      return P += (0, l.fromCodePoint)(Z);
    });
    return function(N, H) {
      for (var j = 0, $ = 0; ($ = N.indexOf("&", $)) >= 0; ) {
        P += N.slice(j, $), G.startEntity(H);
        var ce = G.write(
          N,
          // Skip the "&"
          $ + 1
        );
        if (ce < 0) {
          j = $ + G.end();
          break;
        }
        j = $ + ce, $ = ce === 0 ? j + 1 : j;
      }
      var ae = P + N.slice(j);
      return P = "", ae;
    };
  }
  function S(k, P, G, Z) {
    var N = (P & p.BRANCH_LENGTH) >> 7, H = P & p.JUMP_TABLE;
    if (N === 0)
      return H !== 0 && Z === H ? G : -1;
    if (H) {
      var j = Z - H;
      return j < 0 || j >= N ? -1 : k[G + j] - 1;
    }
    for (var $ = G, ce = $ + N - 1; $ <= ce; ) {
      var ae = $ + ce >>> 1, R = k[ae];
      if (R < Z)
        $ = ae + 1;
      else if (R > Z)
        ce = ae - 1;
      else
        return k[ae + N];
    }
    return -1;
  }
  n.determineBranch = S;
  var F = y(i.default), L = y(u.default);
  function I(k, P) {
    return P === void 0 && (P = T.Legacy), F(k, P);
  }
  n.decodeHTML = I;
  function U(k) {
    return F(k, T.Attribute);
  }
  n.decodeHTMLAttribute = U;
  function z(k) {
    return F(k, T.Strict);
  }
  n.decodeHTMLStrict = z;
  function B(k) {
    return L(k, T.Strict);
  }
  n.decodeXML = B;
})(Bn);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.QuoteType = void 0;
  var e = Bn, t;
  (function(f) {
    f[f.Tab = 9] = "Tab", f[f.NewLine = 10] = "NewLine", f[f.FormFeed = 12] = "FormFeed", f[f.CarriageReturn = 13] = "CarriageReturn", f[f.Space = 32] = "Space", f[f.ExclamationMark = 33] = "ExclamationMark", f[f.Number = 35] = "Number", f[f.Amp = 38] = "Amp", f[f.SingleQuote = 39] = "SingleQuote", f[f.DoubleQuote = 34] = "DoubleQuote", f[f.Dash = 45] = "Dash", f[f.Slash = 47] = "Slash", f[f.Zero = 48] = "Zero", f[f.Nine = 57] = "Nine", f[f.Semi = 59] = "Semi", f[f.Lt = 60] = "Lt", f[f.Eq = 61] = "Eq", f[f.Gt = 62] = "Gt", f[f.Questionmark = 63] = "Questionmark", f[f.UpperA = 65] = "UpperA", f[f.LowerA = 97] = "LowerA", f[f.UpperF = 70] = "UpperF", f[f.LowerF = 102] = "LowerF", f[f.UpperZ = 90] = "UpperZ", f[f.LowerZ = 122] = "LowerZ", f[f.LowerX = 120] = "LowerX", f[f.OpeningSquareBracket = 91] = "OpeningSquareBracket";
  })(t || (t = {}));
  var r;
  (function(f) {
    f[f.Text = 1] = "Text", f[f.BeforeTagName = 2] = "BeforeTagName", f[f.InTagName = 3] = "InTagName", f[f.InSelfClosingTag = 4] = "InSelfClosingTag", f[f.BeforeClosingTagName = 5] = "BeforeClosingTagName", f[f.InClosingTagName = 6] = "InClosingTagName", f[f.AfterClosingTagName = 7] = "AfterClosingTagName", f[f.BeforeAttributeName = 8] = "BeforeAttributeName", f[f.InAttributeName = 9] = "InAttributeName", f[f.AfterAttributeName = 10] = "AfterAttributeName", f[f.BeforeAttributeValue = 11] = "BeforeAttributeValue", f[f.InAttributeValueDq = 12] = "InAttributeValueDq", f[f.InAttributeValueSq = 13] = "InAttributeValueSq", f[f.InAttributeValueNq = 14] = "InAttributeValueNq", f[f.BeforeDeclaration = 15] = "BeforeDeclaration", f[f.InDeclaration = 16] = "InDeclaration", f[f.InProcessingInstruction = 17] = "InProcessingInstruction", f[f.BeforeComment = 18] = "BeforeComment", f[f.CDATASequence = 19] = "CDATASequence", f[f.InSpecialComment = 20] = "InSpecialComment", f[f.InCommentLike = 21] = "InCommentLike", f[f.BeforeSpecialS = 22] = "BeforeSpecialS", f[f.SpecialStartSequence = 23] = "SpecialStartSequence", f[f.InSpecialTag = 24] = "InSpecialTag", f[f.BeforeEntity = 25] = "BeforeEntity", f[f.BeforeNumericEntity = 26] = "BeforeNumericEntity", f[f.InNamedEntity = 27] = "InNamedEntity", f[f.InNumericEntity = 28] = "InNumericEntity", f[f.InHexEntity = 29] = "InHexEntity";
  })(r || (r = {}));
  function a(f) {
    return f === t.Space || f === t.NewLine || f === t.Tab || f === t.FormFeed || f === t.CarriageReturn;
  }
  function i(f) {
    return f === t.Slash || f === t.Gt || a(f);
  }
  function u(f) {
    return f >= t.Zero && f <= t.Nine;
  }
  function l(f) {
    return f >= t.LowerA && f <= t.LowerZ || f >= t.UpperA && f <= t.UpperZ;
  }
  function s(f) {
    return f >= t.UpperA && f <= t.UpperF || f >= t.LowerA && f <= t.LowerF;
  }
  var o;
  (function(f) {
    f[f.NoValue = 0] = "NoValue", f[f.Unquoted = 1] = "Unquoted", f[f.Single = 2] = "Single", f[f.Double = 3] = "Double";
  })(o = n.QuoteType || (n.QuoteType = {}));
  var h = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
    // `</title`
  }, p = (
    /** @class */
    function() {
      function f(m, D) {
        var _ = m.xmlMode, w = _ === void 0 ? !1 : _, T = m.decodeEntities, x = T === void 0 ? !0 : T;
        this.cbs = D, this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = w, this.decodeEntities = x, this.entityTrie = w ? e.xmlDecodeTree : e.htmlDecodeTree;
      }
      return f.prototype.reset = function() {
        this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
      }, f.prototype.write = function(m) {
        this.offset += this.buffer.length, this.buffer = m, this.parse();
      }, f.prototype.end = function() {
        this.running && this.finish();
      }, f.prototype.pause = function() {
        this.running = !1;
      }, f.prototype.resume = function() {
        this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
      }, f.prototype.getIndex = function() {
        return this.index;
      }, f.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, f.prototype.stateText = function(m) {
        m === t.Lt || !this.decodeEntities && this.fastForwardTo(t.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = r.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && m === t.Amp && (this.state = r.BeforeEntity);
      }, f.prototype.stateSpecialStartSequence = function(m) {
        var D = this.sequenceIndex === this.currentSequence.length, _ = D ? (
          // If we are at the end of the sequence, make sure the tag name has ended
          i(m)
        ) : (
          // Otherwise, do a case-insensitive comparison
          (m | 32) === this.currentSequence[this.sequenceIndex]
        );
        if (!_)
          this.isSpecial = !1;
        else if (!D) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = r.InTagName, this.stateInTagName(m);
      }, f.prototype.stateInSpecialTag = function(m) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (m === t.Gt || a(m)) {
            var D = this.index - this.currentSequence.length;
            if (this.sectionStart < D) {
              var _ = this.index;
              this.index = D, this.cbs.ontext(this.sectionStart, D), this.index = _;
            }
            this.isSpecial = !1, this.sectionStart = D + 2, this.stateInClosingTagName(m);
            return;
          }
          this.sequenceIndex = 0;
        }
        (m | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === h.TitleEnd ? this.decodeEntities && m === t.Amp && (this.state = r.BeforeEntity) : this.fastForwardTo(t.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(m === t.Lt);
      }, f.prototype.stateCDATASequence = function(m) {
        m === h.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === h.Cdata.length && (this.state = r.InCommentLike, this.currentSequence = h.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = r.InDeclaration, this.stateInDeclaration(m));
      }, f.prototype.fastForwardTo = function(m) {
        for (; ++this.index < this.buffer.length + this.offset; )
          if (this.buffer.charCodeAt(this.index - this.offset) === m)
            return !0;
        return this.index = this.buffer.length + this.offset - 1, !1;
      }, f.prototype.stateInCommentLike = function(m) {
        m === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === h.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = r.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : m !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, f.prototype.isTagStartChar = function(m) {
        return this.xmlMode ? !i(m) : l(m);
      }, f.prototype.startSpecial = function(m, D) {
        this.isSpecial = !0, this.currentSequence = m, this.sequenceIndex = D, this.state = r.SpecialStartSequence;
      }, f.prototype.stateBeforeTagName = function(m) {
        if (m === t.ExclamationMark)
          this.state = r.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (m === t.Questionmark)
          this.state = r.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(m)) {
          var D = m | 32;
          this.sectionStart = this.index, !this.xmlMode && D === h.TitleEnd[2] ? this.startSpecial(h.TitleEnd, 3) : this.state = !this.xmlMode && D === h.ScriptEnd[2] ? r.BeforeSpecialS : r.InTagName;
        } else m === t.Slash ? this.state = r.BeforeClosingTagName : (this.state = r.Text, this.stateText(m));
      }, f.prototype.stateInTagName = function(m) {
        i(m) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m));
      }, f.prototype.stateBeforeClosingTagName = function(m) {
        a(m) || (m === t.Gt ? this.state = r.Text : (this.state = this.isTagStartChar(m) ? r.InClosingTagName : r.InSpecialComment, this.sectionStart = this.index));
      }, f.prototype.stateInClosingTagName = function(m) {
        (m === t.Gt || a(m)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterClosingTagName, this.stateAfterClosingTagName(m));
      }, f.prototype.stateAfterClosingTagName = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1);
      }, f.prototype.stateBeforeAttributeName = function(m) {
        m === t.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = r.InSpecialTag, this.sequenceIndex = 0) : this.state = r.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : m === t.Slash ? this.state = r.InSelfClosingTag : a(m) || (this.state = r.InAttributeName, this.sectionStart = this.index);
      }, f.prototype.stateInSelfClosingTag = function(m) {
        m === t.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : a(m) || (this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m));
      }, f.prototype.stateInAttributeName = function(m) {
        (m === t.Eq || i(m)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterAttributeName, this.stateAfterAttributeName(m));
      }, f.prototype.stateAfterAttributeName = function(m) {
        m === t.Eq ? this.state = r.BeforeAttributeValue : m === t.Slash || m === t.Gt ? (this.cbs.onattribend(o.NoValue, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m)) : a(m) || (this.cbs.onattribend(o.NoValue, this.index), this.state = r.InAttributeName, this.sectionStart = this.index);
      }, f.prototype.stateBeforeAttributeValue = function(m) {
        m === t.DoubleQuote ? (this.state = r.InAttributeValueDq, this.sectionStart = this.index + 1) : m === t.SingleQuote ? (this.state = r.InAttributeValueSq, this.sectionStart = this.index + 1) : a(m) || (this.sectionStart = this.index, this.state = r.InAttributeValueNq, this.stateInAttributeValueNoQuotes(m));
      }, f.prototype.handleInAttributeValue = function(m, D) {
        m === D || !this.decodeEntities && this.fastForwardTo(D) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(D === t.DoubleQuote ? o.Double : o.Single, this.index), this.state = r.BeforeAttributeName) : this.decodeEntities && m === t.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, f.prototype.stateInAttributeValueDoubleQuotes = function(m) {
        this.handleInAttributeValue(m, t.DoubleQuote);
      }, f.prototype.stateInAttributeValueSingleQuotes = function(m) {
        this.handleInAttributeValue(m, t.SingleQuote);
      }, f.prototype.stateInAttributeValueNoQuotes = function(m) {
        a(m) || m === t.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(o.Unquoted, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m)) : this.decodeEntities && m === t.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, f.prototype.stateBeforeDeclaration = function(m) {
        m === t.OpeningSquareBracket ? (this.state = r.CDATASequence, this.sequenceIndex = 0) : this.state = m === t.Dash ? r.BeforeComment : r.InDeclaration;
      }, f.prototype.stateInDeclaration = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, f.prototype.stateInProcessingInstruction = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, f.prototype.stateBeforeComment = function(m) {
        m === t.Dash ? (this.state = r.InCommentLike, this.currentSequence = h.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = r.InDeclaration;
      }, f.prototype.stateInSpecialComment = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = r.Text, this.sectionStart = this.index + 1);
      }, f.prototype.stateBeforeSpecialS = function(m) {
        var D = m | 32;
        D === h.ScriptEnd[3] ? this.startSpecial(h.ScriptEnd, 4) : D === h.StyleEnd[3] ? this.startSpecial(h.StyleEnd, 4) : (this.state = r.InTagName, this.stateInTagName(m));
      }, f.prototype.stateBeforeEntity = function(m) {
        this.entityExcess = 1, this.entityResult = 0, m === t.Number ? this.state = r.BeforeNumericEntity : m === t.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = r.InNamedEntity, this.stateInNamedEntity(m));
      }, f.prototype.stateInNamedEntity = function(m) {
        if (this.entityExcess += 1, this.trieIndex = (0, e.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, m), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var D = this.trieCurrent & e.BinTrieFlags.VALUE_LENGTH;
        if (D) {
          var _ = (D >> 14) - 1;
          if (!this.allowLegacyEntity() && m !== t.Semi)
            this.trieIndex += _;
          else {
            var w = this.index - this.entityExcess + 1;
            w > this.sectionStart && this.emitPartial(this.sectionStart, w), this.entityResult = this.trieIndex, this.trieIndex += _, this.entityExcess = 0, this.sectionStart = this.index + 1, _ === 0 && this.emitNamedEntity();
          }
        }
      }, f.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var m = (this.entityTrie[this.entityResult] & e.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (m) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~e.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, f.prototype.stateBeforeNumericEntity = function(m) {
        (m | 32) === t.LowerX ? (this.entityExcess++, this.state = r.InHexEntity) : (this.state = r.InNumericEntity, this.stateInNumericEntity(m));
      }, f.prototype.emitNumericEntity = function(m) {
        var D = this.index - this.entityExcess - 1, _ = D + 2 + +(this.state === r.InHexEntity);
        _ !== this.index && (D > this.sectionStart && this.emitPartial(this.sectionStart, D), this.sectionStart = this.index + Number(m), this.emitCodePoint((0, e.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, f.prototype.stateInNumericEntity = function(m) {
        m === t.Semi ? this.emitNumericEntity(!0) : u(m) ? (this.entityResult = this.entityResult * 10 + (m - t.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, f.prototype.stateInHexEntity = function(m) {
        m === t.Semi ? this.emitNumericEntity(!0) : u(m) ? (this.entityResult = this.entityResult * 16 + (m - t.Zero), this.entityExcess++) : s(m) ? (this.entityResult = this.entityResult * 16 + ((m | 32) - t.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, f.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === r.Text || this.baseState === r.InSpecialTag);
      }, f.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === r.Text || this.state === r.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === r.InAttributeValueDq || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, f.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, f.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var m = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case r.Text: {
              this.stateText(m);
              break;
            }
            case r.SpecialStartSequence: {
              this.stateSpecialStartSequence(m);
              break;
            }
            case r.InSpecialTag: {
              this.stateInSpecialTag(m);
              break;
            }
            case r.CDATASequence: {
              this.stateCDATASequence(m);
              break;
            }
            case r.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(m);
              break;
            }
            case r.InAttributeName: {
              this.stateInAttributeName(m);
              break;
            }
            case r.InCommentLike: {
              this.stateInCommentLike(m);
              break;
            }
            case r.InSpecialComment: {
              this.stateInSpecialComment(m);
              break;
            }
            case r.BeforeAttributeName: {
              this.stateBeforeAttributeName(m);
              break;
            }
            case r.InTagName: {
              this.stateInTagName(m);
              break;
            }
            case r.InClosingTagName: {
              this.stateInClosingTagName(m);
              break;
            }
            case r.BeforeTagName: {
              this.stateBeforeTagName(m);
              break;
            }
            case r.AfterAttributeName: {
              this.stateAfterAttributeName(m);
              break;
            }
            case r.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(m);
              break;
            }
            case r.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(m);
              break;
            }
            case r.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(m);
              break;
            }
            case r.AfterClosingTagName: {
              this.stateAfterClosingTagName(m);
              break;
            }
            case r.BeforeSpecialS: {
              this.stateBeforeSpecialS(m);
              break;
            }
            case r.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(m);
              break;
            }
            case r.InSelfClosingTag: {
              this.stateInSelfClosingTag(m);
              break;
            }
            case r.InDeclaration: {
              this.stateInDeclaration(m);
              break;
            }
            case r.BeforeDeclaration: {
              this.stateBeforeDeclaration(m);
              break;
            }
            case r.BeforeComment: {
              this.stateBeforeComment(m);
              break;
            }
            case r.InProcessingInstruction: {
              this.stateInProcessingInstruction(m);
              break;
            }
            case r.InNamedEntity: {
              this.stateInNamedEntity(m);
              break;
            }
            case r.BeforeEntity: {
              this.stateBeforeEntity(m);
              break;
            }
            case r.InHexEntity: {
              this.stateInHexEntity(m);
              break;
            }
            case r.InNumericEntity: {
              this.stateInNumericEntity(m);
              break;
            }
            default:
              this.stateBeforeNumericEntity(m);
          }
          this.index++;
        }
        this.cleanup();
      }, f.prototype.finish = function() {
        this.state === r.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, f.prototype.handleTrailingData = function() {
        var m = this.buffer.length + this.offset;
        this.state === r.InCommentLike ? this.currentSequence === h.CdataEnd ? this.cbs.oncdata(this.sectionStart, m, 0) : this.cbs.oncomment(this.sectionStart, m, 0) : this.state === r.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InTagName || this.state === r.BeforeAttributeName || this.state === r.BeforeAttributeValue || this.state === r.AfterAttributeName || this.state === r.InAttributeName || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueDq || this.state === r.InAttributeValueNq || this.state === r.InClosingTagName || this.cbs.ontext(this.sectionStart, m);
      }, f.prototype.emitPartial = function(m, D) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribdata(m, D) : this.cbs.ontext(m, D);
      }, f.prototype.emitCodePoint = function(m) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribentity(m) : this.cbs.ontextentity(m);
      }, f;
    }()
  );
  n.default = p;
})(Gs);
var mm = he && he.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(e, t);
  (!a || ("get" in a ? !e.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(n, r, a);
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), pm = he && he.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), gm = he && he.__importStar || function(n) {
  if (n && n.__esModule) return n;
  var e = {};
  if (n != null) for (var t in n) t !== "default" && Object.prototype.hasOwnProperty.call(n, t) && mm(e, n, t);
  return pm(e, n), e;
};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.Parser = void 0;
var da = gm(Gs), ao = Bn, Dr = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), Ne = /* @__PURE__ */ new Set(["p"]), io = /* @__PURE__ */ new Set(["thead", "tbody"]), uo = /* @__PURE__ */ new Set(["dd", "dt"]), so = /* @__PURE__ */ new Set(["rt", "rp"]), bm = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", Ne],
  ["h1", Ne],
  ["h2", Ne],
  ["h3", Ne],
  ["h4", Ne],
  ["h5", Ne],
  ["h6", Ne],
  ["select", Dr],
  ["input", Dr],
  ["output", Dr],
  ["button", Dr],
  ["datalist", Dr],
  ["textarea", Dr],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", uo],
  ["dt", uo],
  ["address", Ne],
  ["article", Ne],
  ["aside", Ne],
  ["blockquote", Ne],
  ["details", Ne],
  ["div", Ne],
  ["dl", Ne],
  ["fieldset", Ne],
  ["figcaption", Ne],
  ["figure", Ne],
  ["footer", Ne],
  ["form", Ne],
  ["header", Ne],
  ["hr", Ne],
  ["main", Ne],
  ["nav", Ne],
  ["ol", Ne],
  ["pre", Ne],
  ["section", Ne],
  ["table", Ne],
  ["ul", Ne],
  ["rt", so],
  ["rp", so],
  ["tbody", io],
  ["tfoot", io]
]), vm = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), lo = /* @__PURE__ */ new Set(["math", "svg"]), oo = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), ym = /\s|\//, wm = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = {});
      var r, a, i, u, l;
      this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e ?? {}, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : !t.xmlMode, this.lowerCaseAttributeNames = (a = t.lowerCaseAttributeNames) !== null && a !== void 0 ? a : !t.xmlMode, this.tokenizer = new ((i = t.Tokenizer) !== null && i !== void 0 ? i : da.default)(this.options, this), (l = (u = this.cbs).onparserinit) === null || l === void 0 || l.call(u, this);
    }
    return n.prototype.ontext = function(e, t) {
      var r, a, i = this.getSlice(e, t);
      this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, i), this.startIndex = t;
    }, n.prototype.ontextentity = function(e) {
      var t, r, a = this.tokenizer.getSectionStart();
      this.endIndex = a - 1, (r = (t = this.cbs).ontext) === null || r === void 0 || r.call(t, (0, ao.fromCodePoint)(e)), this.startIndex = a;
    }, n.prototype.isVoidElement = function(e) {
      return !this.options.xmlMode && vm.has(e);
    }, n.prototype.onopentagname = function(e, t) {
      this.endIndex = t;
      var r = this.getSlice(e, t);
      this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r);
    }, n.prototype.emitOpenTag = function(e) {
      var t, r, a, i;
      this.openTagStart = this.startIndex, this.tagname = e;
      var u = !this.options.xmlMode && bm.get(e);
      if (u)
        for (; this.stack.length > 0 && u.has(this.stack[this.stack.length - 1]); ) {
          var l = this.stack.pop();
          (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, l, !0);
        }
      this.isVoidElement(e) || (this.stack.push(e), lo.has(e) ? this.foreignContext.push(!0) : oo.has(e) && this.foreignContext.push(!1)), (i = (a = this.cbs).onopentagname) === null || i === void 0 || i.call(a, e), this.cbs.onopentag && (this.attribs = {});
    }, n.prototype.endOpenTag = function(e) {
      var t, r;
      this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
    }, n.prototype.onopentagend = function(e) {
      this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1;
    }, n.prototype.onclosetag = function(e, t) {
      var r, a, i, u, l, s;
      this.endIndex = t;
      var o = this.getSlice(e, t);
      if (this.lowerCaseTagNames && (o = o.toLowerCase()), (lo.has(o) || oo.has(o)) && this.foreignContext.pop(), this.isVoidElement(o))
        !this.options.xmlMode && o === "br" && ((a = (r = this.cbs).onopentagname) === null || a === void 0 || a.call(r, "br"), (u = (i = this.cbs).onopentag) === null || u === void 0 || u.call(i, "br", {}, !0), (s = (l = this.cbs).onclosetag) === null || s === void 0 || s.call(l, "br", !1));
      else {
        var h = this.stack.lastIndexOf(o);
        if (h !== -1)
          if (this.cbs.onclosetag)
            for (var p = this.stack.length - h; p--; )
              this.cbs.onclosetag(this.stack.pop(), p !== 0);
          else
            this.stack.length = h;
        else !this.options.xmlMode && o === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
      }
      this.startIndex = t + 1;
    }, n.prototype.onselfclosingtag = function(e) {
      this.endIndex = e, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e);
    }, n.prototype.closeCurrentTag = function(e) {
      var t, r, a = this.tagname;
      this.endOpenTag(e), this.stack[this.stack.length - 1] === a && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, a, !e), this.stack.pop());
    }, n.prototype.onattribname = function(e, t) {
      this.startIndex = e;
      var r = this.getSlice(e, t);
      this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r;
    }, n.prototype.onattribdata = function(e, t) {
      this.attribvalue += this.getSlice(e, t);
    }, n.prototype.onattribentity = function(e) {
      this.attribvalue += (0, ao.fromCodePoint)(e);
    }, n.prototype.onattribend = function(e, t) {
      var r, a;
      this.endIndex = t, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, e === da.QuoteType.Double ? '"' : e === da.QuoteType.Single ? "'" : e === da.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, n.prototype.getInstructionName = function(e) {
      var t = e.search(ym), r = t < 0 ? e : e.substr(0, t);
      return this.lowerCaseTagNames && (r = r.toLowerCase()), r;
    }, n.prototype.ondeclaration = function(e, t) {
      this.endIndex = t;
      var r = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
      }
      this.startIndex = t + 1;
    }, n.prototype.onprocessinginstruction = function(e, t) {
      this.endIndex = t;
      var r = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
      }
      this.startIndex = t + 1;
    }, n.prototype.oncomment = function(e, t, r) {
      var a, i, u, l;
      this.endIndex = t, (i = (a = this.cbs).oncomment) === null || i === void 0 || i.call(a, this.getSlice(e, t - r)), (l = (u = this.cbs).oncommentend) === null || l === void 0 || l.call(u), this.startIndex = t + 1;
    }, n.prototype.oncdata = function(e, t, r) {
      var a, i, u, l, s, o, h, p, f, m;
      this.endIndex = t;
      var D = this.getSlice(e, t - r);
      this.options.xmlMode || this.options.recognizeCDATA ? ((i = (a = this.cbs).oncdatastart) === null || i === void 0 || i.call(a), (l = (u = this.cbs).ontext) === null || l === void 0 || l.call(u, D), (o = (s = this.cbs).oncdataend) === null || o === void 0 || o.call(s)) : ((p = (h = this.cbs).oncomment) === null || p === void 0 || p.call(h, "[CDATA[".concat(D, "]]")), (m = (f = this.cbs).oncommentend) === null || m === void 0 || m.call(f)), this.startIndex = t + 1;
    }, n.prototype.onend = function() {
      var e, t;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = this.stack.length; r > 0; this.cbs.onclosetag(this.stack[--r], !0))
          ;
      }
      (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e);
    }, n.prototype.reset = function() {
      var e, t, r, a;
      (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
    }, n.prototype.parseComplete = function(e) {
      this.reset(), this.end(e);
    }, n.prototype.getSlice = function(e, t) {
      for (; e - this.bufferOffset >= this.buffers[0].length; )
        this.shiftBuffer();
      for (var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); t - this.bufferOffset > this.buffers[0].length; )
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset);
      return r;
    }, n.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, n.prototype.write = function(e) {
      var t, r;
      if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++);
    }, n.prototype.end = function(e) {
      var t, r;
      if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
      }
      e && this.write(e), this.ended = !0, this.tokenizer.end();
    }, n.prototype.pause = function() {
      this.tokenizer.pause();
    }, n.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, n.prototype.parseChunk = function(e) {
      this.write(e);
    }, n.prototype.done = function(e) {
      this.end(e);
    }, n;
  }()
);
Ln.Parser = wm;
var j0 = {}, qr = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Doctype = n.CDATA = n.Tag = n.Style = n.Script = n.Comment = n.Directive = n.Text = n.Root = n.isTag = n.ElementType = void 0;
  var e;
  (function(r) {
    r.Root = "root", r.Text = "text", r.Directive = "directive", r.Comment = "comment", r.Script = "script", r.Style = "style", r.Tag = "tag", r.CDATA = "cdata", r.Doctype = "doctype";
  })(e = n.ElementType || (n.ElementType = {}));
  function t(r) {
    return r.type === e.Tag || r.type === e.Script || r.type === e.Style;
  }
  n.isTag = t, n.Root = e.Root, n.Text = e.Text, n.Directive = e.Directive, n.Comment = e.Comment, n.Script = e.Script, n.Style = e.Style, n.Tag = e.Tag, n.CDATA = e.CDATA, n.Doctype = e.Doctype;
})(qr);
var Se = {}, ar = he && he.__extends || /* @__PURE__ */ function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), Nn = he && he.__assign || function() {
  return Nn = Object.assign || function(n) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, Nn.apply(this, arguments);
};
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.cloneNode = Se.hasChildren = Se.isDocument = Se.isDirective = Se.isComment = Se.isText = Se.isCDATA = Se.isTag = Se.Element = Se.Document = Se.CDATA = Se.NodeWithChildren = Se.ProcessingInstruction = Se.Comment = Se.Text = Se.DataNode = Se.Node = void 0;
var kt = qr, Ws = (
  /** @class */
  function() {
    function n() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(n.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(e) {
        this.parent = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(e) {
        this.prev = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(e) {
        this.next = e;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.cloneNode = function(e) {
      return e === void 0 && (e = !1), Xs(this, e);
    }, n;
  }()
);
Se.Node = Ws;
var yi = (
  /** @class */
  function(n) {
    ar(e, n);
    function e(t) {
      var r = n.call(this) || this;
      return r.data = t, r;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ws)
);
Se.DataNode = yi;
var Jc = (
  /** @class */
  function(n) {
    ar(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = kt.ElementType.Text, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(yi)
);
Se.Text = Jc;
var ef = (
  /** @class */
  function(n) {
    ar(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = kt.ElementType.Comment, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(yi)
);
Se.Comment = ef;
var tf = (
  /** @class */
  function(n) {
    ar(e, n);
    function e(t, r) {
      var a = n.call(this, r) || this;
      return a.name = t, a.type = kt.ElementType.Directive, a;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(yi)
);
Se.ProcessingInstruction = tf;
var wi = (
  /** @class */
  function(n) {
    ar(e, n);
    function e(t) {
      var r = n.call(this) || this;
      return r.children = t, r;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ws)
);
Se.NodeWithChildren = wi;
var rf = (
  /** @class */
  function(n) {
    ar(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = kt.ElementType.CDATA, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(wi)
);
Se.CDATA = rf;
var nf = (
  /** @class */
  function(n) {
    ar(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = kt.ElementType.Root, t;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(wi)
);
Se.Document = nf;
var af = (
  /** @class */
  function(n) {
    ar(e, n);
    function e(t, r, a, i) {
      a === void 0 && (a = []), i === void 0 && (i = t === "script" ? kt.ElementType.Script : t === "style" ? kt.ElementType.Style : kt.ElementType.Tag);
      var u = n.call(this, a) || this;
      return u.name = t, u.attribs = r, u.type = i, u;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var a, i;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (a = t["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[r],
            prefix: (i = t["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(wi)
);
Se.Element = af;
function uf(n) {
  return (0, kt.isTag)(n);
}
Se.isTag = uf;
function sf(n) {
  return n.type === kt.ElementType.CDATA;
}
Se.isCDATA = sf;
function lf(n) {
  return n.type === kt.ElementType.Text;
}
Se.isText = lf;
function of(n) {
  return n.type === kt.ElementType.Comment;
}
Se.isComment = of;
function cf(n) {
  return n.type === kt.ElementType.Directive;
}
Se.isDirective = cf;
function ff(n) {
  return n.type === kt.ElementType.Root;
}
Se.isDocument = ff;
function xm(n) {
  return Object.prototype.hasOwnProperty.call(n, "children");
}
Se.hasChildren = xm;
function Xs(n, e) {
  e === void 0 && (e = !1);
  var t;
  if (lf(n))
    t = new Jc(n.data);
  else if (of(n))
    t = new ef(n.data);
  else if (uf(n)) {
    var r = e ? eu(n.children) : [], a = new af(n.name, Nn({}, n.attribs), r);
    r.forEach(function(s) {
      return s.parent = a;
    }), n.namespace != null && (a.namespace = n.namespace), n["x-attribsNamespace"] && (a["x-attribsNamespace"] = Nn({}, n["x-attribsNamespace"])), n["x-attribsPrefix"] && (a["x-attribsPrefix"] = Nn({}, n["x-attribsPrefix"])), t = a;
  } else if (sf(n)) {
    var r = e ? eu(n.children) : [], i = new rf(r);
    r.forEach(function(o) {
      return o.parent = i;
    }), t = i;
  } else if (ff(n)) {
    var r = e ? eu(n.children) : [], u = new nf(r);
    r.forEach(function(o) {
      return o.parent = u;
    }), n["x-mode"] && (u["x-mode"] = n["x-mode"]), t = u;
  } else if (cf(n)) {
    var l = new tf(n.name, n.data);
    n["x-name"] != null && (l["x-name"] = n["x-name"], l["x-publicId"] = n["x-publicId"], l["x-systemId"] = n["x-systemId"]), t = l;
  } else
    throw new Error("Not implemented yet: ".concat(n.type));
  return t.startIndex = n.startIndex, t.endIndex = n.endIndex, n.sourceCodeLocation != null && (t.sourceCodeLocation = n.sourceCodeLocation), t;
}
Se.cloneNode = Xs;
function eu(n) {
  for (var e = n.map(function(r) {
    return Xs(r, !0);
  }), t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t];
  return e;
}
(function(n) {
  var e = he && he.__createBinding || (Object.create ? function(l, s, o, h) {
    h === void 0 && (h = o);
    var p = Object.getOwnPropertyDescriptor(s, o);
    (!p || ("get" in p ? !s.__esModule : p.writable || p.configurable)) && (p = { enumerable: !0, get: function() {
      return s[o];
    } }), Object.defineProperty(l, h, p);
  } : function(l, s, o, h) {
    h === void 0 && (h = o), l[h] = s[o];
  }), t = he && he.__exportStar || function(l, s) {
    for (var o in l) o !== "default" && !Object.prototype.hasOwnProperty.call(s, o) && e(s, l, o);
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.DomHandler = void 0;
  var r = qr, a = Se;
  t(Se, n);
  var i = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, u = (
    /** @class */
    function() {
      function l(s, o, h) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof o == "function" && (h = o, o = i), typeof s == "object" && (o = s, s = void 0), this.callback = s ?? null, this.options = o ?? i, this.elementCB = h ?? null;
      }
      return l.prototype.onparserinit = function(s) {
        this.parser = s;
      }, l.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, l.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, l.prototype.onerror = function(s) {
        this.handleCallback(s);
      }, l.prototype.onclosetag = function() {
        this.lastNode = null;
        var s = this.tagStack.pop();
        this.options.withEndIndices && (s.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(s);
      }, l.prototype.onopentag = function(s, o) {
        var h = this.options.xmlMode ? r.ElementType.Tag : void 0, p = new a.Element(s, o, void 0, h);
        this.addNode(p), this.tagStack.push(p);
      }, l.prototype.ontext = function(s) {
        var o = this.lastNode;
        if (o && o.type === r.ElementType.Text)
          o.data += s, this.options.withEndIndices && (o.endIndex = this.parser.endIndex);
        else {
          var h = new a.Text(s);
          this.addNode(h), this.lastNode = h;
        }
      }, l.prototype.oncomment = function(s) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += s;
          return;
        }
        var o = new a.Comment(s);
        this.addNode(o), this.lastNode = o;
      }, l.prototype.oncommentend = function() {
        this.lastNode = null;
      }, l.prototype.oncdatastart = function() {
        var s = new a.Text(""), o = new a.CDATA([s]);
        this.addNode(o), s.parent = o, this.lastNode = s;
      }, l.prototype.oncdataend = function() {
        this.lastNode = null;
      }, l.prototype.onprocessinginstruction = function(s, o) {
        var h = new a.ProcessingInstruction(s, o);
        this.addNode(h);
      }, l.prototype.handleCallback = function(s) {
        if (typeof this.callback == "function")
          this.callback(s, this.dom);
        else if (s)
          throw s;
      }, l.prototype.addNode = function(s) {
        var o = this.tagStack[this.tagStack.length - 1], h = o.children[o.children.length - 1];
        this.options.withStartIndices && (s.startIndex = this.parser.startIndex), this.options.withEndIndices && (s.endIndex = this.parser.endIndex), o.children.push(s), h && (s.prev = h, h.next = s), s.parent = o, this.lastNode = null;
      }, l;
    }()
  );
  n.DomHandler = u, n.default = u;
})(j0);
var Ba = {}, Rt = {}, $n = {}, df = {}, vr = {}, Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
function ha(n) {
  for (var e = 1; e < n.length; e++)
    n[e][0] += n[e - 1][0] + 1;
  return n;
}
Ys.default = new Map(/* @__PURE__ */ ha([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ ha([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ ha([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ ha([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var ni = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.escapeText = n.escapeAttribute = n.escapeUTF8 = n.escape = n.encodeXML = n.getCodePoint = n.xmlReplacer = void 0, n.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var e = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  n.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, i) {
    return a.codePointAt(i);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, i) {
      return (a.charCodeAt(i) & 64512) === 55296 ? (a.charCodeAt(i) - 55296) * 1024 + a.charCodeAt(i + 1) - 56320 + 65536 : a.charCodeAt(i);
    }
  );
  function t(a) {
    for (var i = "", u = 0, l; (l = n.xmlReplacer.exec(a)) !== null; ) {
      var s = l.index, o = a.charCodeAt(s), h = e.get(o);
      h !== void 0 ? (i += a.substring(u, s) + h, u = s + 1) : (i += "".concat(a.substring(u, s), "&#x").concat((0, n.getCodePoint)(a, s).toString(16), ";"), u = n.xmlReplacer.lastIndex += +((o & 64512) === 55296));
    }
    return i + a.substr(u);
  }
  n.encodeXML = t, n.escape = t;
  function r(a, i) {
    return function(l) {
      for (var s, o = 0, h = ""; s = a.exec(l); )
        o !== s.index && (h += l.substring(o, s.index)), h += i.get(s[0].charCodeAt(0)), o = s.index + 1;
      return h + l.substring(o);
    };
  }
  n.escapeUTF8 = r(/[&<>'"]/g, e), n.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), n.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(ni);
var Am = he && he.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.encodeNonAsciiHTML = vr.encodeHTML = void 0;
var Sm = Am(Ys), hf = ni, Dm = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function Em(n) {
  return mf(Dm, n);
}
vr.encodeHTML = Em;
function km(n) {
  return mf(hf.xmlReplacer, n);
}
vr.encodeNonAsciiHTML = km;
function mf(n, e) {
  for (var t = "", r = 0, a; (a = n.exec(e)) !== null; ) {
    var i = a.index;
    t += e.substring(r, i);
    var u = e.charCodeAt(i), l = Sm.default.get(u);
    if (typeof l == "object") {
      if (i + 1 < e.length) {
        var s = e.charCodeAt(i + 1), o = typeof l.n == "number" ? l.n === s ? l.o : void 0 : l.n.get(s);
        if (o !== void 0) {
          t += o, r = n.lastIndex += 1;
          continue;
        }
      }
      l = l.v;
    }
    if (l !== void 0)
      t += l, r = i + 1;
    else {
      var h = (0, hf.getCodePoint)(e, i);
      t += "&#x".concat(h.toString(16), ";"), r = n.lastIndex += +(h !== u);
    }
  }
  return t + e.substr(r);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.decodeXMLStrict = n.decodeHTML5Strict = n.decodeHTML4Strict = n.decodeHTML5 = n.decodeHTML4 = n.decodeHTMLAttribute = n.decodeHTMLStrict = n.decodeHTML = n.decodeXML = n.DecodingMode = n.EntityDecoder = n.encodeHTML5 = n.encodeHTML4 = n.encodeNonAsciiHTML = n.encodeHTML = n.escapeText = n.escapeAttribute = n.escapeUTF8 = n.escape = n.encodeXML = n.encode = n.decodeStrict = n.decode = n.EncodingMode = n.EntityLevel = void 0;
  var e = Bn, t = vr, r = ni, a;
  (function(f) {
    f[f.XML = 0] = "XML", f[f.HTML = 1] = "HTML";
  })(a = n.EntityLevel || (n.EntityLevel = {}));
  var i;
  (function(f) {
    f[f.UTF8 = 0] = "UTF8", f[f.ASCII = 1] = "ASCII", f[f.Extensive = 2] = "Extensive", f[f.Attribute = 3] = "Attribute", f[f.Text = 4] = "Text";
  })(i = n.EncodingMode || (n.EncodingMode = {}));
  function u(f, m) {
    m === void 0 && (m = a.XML);
    var D = typeof m == "number" ? m : m.level;
    if (D === a.HTML) {
      var _ = typeof m == "object" ? m.mode : void 0;
      return (0, e.decodeHTML)(f, _);
    }
    return (0, e.decodeXML)(f);
  }
  n.decode = u;
  function l(f, m) {
    var D;
    m === void 0 && (m = a.XML);
    var _ = typeof m == "number" ? { level: m } : m;
    return (D = _.mode) !== null && D !== void 0 || (_.mode = e.DecodingMode.Strict), u(f, _);
  }
  n.decodeStrict = l;
  function s(f, m) {
    m === void 0 && (m = a.XML);
    var D = typeof m == "number" ? { level: m } : m;
    return D.mode === i.UTF8 ? (0, r.escapeUTF8)(f) : D.mode === i.Attribute ? (0, r.escapeAttribute)(f) : D.mode === i.Text ? (0, r.escapeText)(f) : D.level === a.HTML ? D.mode === i.ASCII ? (0, t.encodeNonAsciiHTML)(f) : (0, t.encodeHTML)(f) : (0, r.encodeXML)(f);
  }
  n.encode = s;
  var o = ni;
  Object.defineProperty(n, "encodeXML", { enumerable: !0, get: function() {
    return o.encodeXML;
  } }), Object.defineProperty(n, "escape", { enumerable: !0, get: function() {
    return o.escape;
  } }), Object.defineProperty(n, "escapeUTF8", { enumerable: !0, get: function() {
    return o.escapeUTF8;
  } }), Object.defineProperty(n, "escapeAttribute", { enumerable: !0, get: function() {
    return o.escapeAttribute;
  } }), Object.defineProperty(n, "escapeText", { enumerable: !0, get: function() {
    return o.escapeText;
  } });
  var h = vr;
  Object.defineProperty(n, "encodeHTML", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } }), Object.defineProperty(n, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return h.encodeNonAsciiHTML;
  } }), Object.defineProperty(n, "encodeHTML4", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } }), Object.defineProperty(n, "encodeHTML5", { enumerable: !0, get: function() {
    return h.encodeHTML;
  } });
  var p = Bn;
  Object.defineProperty(n, "EntityDecoder", { enumerable: !0, get: function() {
    return p.EntityDecoder;
  } }), Object.defineProperty(n, "DecodingMode", { enumerable: !0, get: function() {
    return p.DecodingMode;
  } }), Object.defineProperty(n, "decodeXML", { enumerable: !0, get: function() {
    return p.decodeXML;
  } }), Object.defineProperty(n, "decodeHTML", { enumerable: !0, get: function() {
    return p.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return p.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return p.decodeHTMLAttribute;
  } }), Object.defineProperty(n, "decodeHTML4", { enumerable: !0, get: function() {
    return p.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTML5", { enumerable: !0, get: function() {
    return p.decodeHTML;
  } }), Object.defineProperty(n, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return p.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return p.decodeHTMLStrict;
  } }), Object.defineProperty(n, "decodeXMLStrict", { enumerable: !0, get: function() {
    return p.decodeXML;
  } });
})(df);
var Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.attributeNames = Or.elementNames = void 0;
Or.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(n) {
  return [n.toLowerCase(), n];
}));
Or.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(n) {
  return [n.toLowerCase(), n];
}));
var _r = he && he.__assign || function() {
  return _r = Object.assign || function(n) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, _r.apply(this, arguments);
}, _m = he && he.__createBinding || (Object.create ? function(n, e, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(e, t);
  (!a || ("get" in a ? !e.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(n, r, a);
} : function(n, e, t, r) {
  r === void 0 && (r = t), n[r] = e[t];
}), Tm = he && he.__setModuleDefault || (Object.create ? function(n, e) {
  Object.defineProperty(n, "default", { enumerable: !0, value: e });
} : function(n, e) {
  n.default = e;
}), Cm = he && he.__importStar || function(n) {
  if (n && n.__esModule) return n;
  var e = {};
  if (n != null) for (var t in n) t !== "default" && Object.prototype.hasOwnProperty.call(n, t) && _m(e, n, t);
  return Tm(e, n), e;
};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.render = void 0;
var R0 = Cm(qr), ai = df, pf = Or, Fm = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function Mm(n) {
  return n.replace(/"/g, "&quot;");
}
function Nm(n, e) {
  var t;
  if (n) {
    var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? Mm : e.xmlMode || e.encodeEntities !== "utf8" ? ai.encodeXML : ai.escapeAttribute;
    return Object.keys(n).map(function(a) {
      var i, u, l = (i = n[a]) !== null && i !== void 0 ? i : "";
      return e.xmlMode === "foreign" && (a = (u = pf.attributeNames.get(a)) !== null && u !== void 0 ? u : a), !e.emptyAttrs && !e.xmlMode && l === "" ? a : "".concat(a, '="').concat(r(l), '"');
    }).join(" ");
  }
}
var co = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function xi(n, e) {
  e === void 0 && (e = {});
  for (var t = ("length" in n) ? n : [n], r = "", a = 0; a < t.length; a++)
    r += Om(t[a], e);
  return r;
}
$n.render = xi;
$n.default = xi;
function Om(n, e) {
  switch (n.type) {
    case R0.Root:
      return xi(n.children, e);
    case R0.Doctype:
    case R0.Directive:
      return Bm(n);
    case R0.Comment:
      return qm(n);
    case R0.CDATA:
      return Pm(n);
    case R0.Script:
    case R0.Style:
    case R0.Tag:
      return Lm(n, e);
    case R0.Text:
      return zm(n, e);
  }
}
var Im = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), Rm = /* @__PURE__ */ new Set(["svg", "math"]);
function Lm(n, e) {
  var t;
  e.xmlMode === "foreign" && (n.name = (t = pf.elementNames.get(n.name)) !== null && t !== void 0 ? t : n.name, n.parent && Im.has(n.parent.name) && (e = _r(_r({}, e), { xmlMode: !1 }))), !e.xmlMode && Rm.has(n.name) && (e = _r(_r({}, e), { xmlMode: "foreign" }));
  var r = "<".concat(n.name), a = Nm(n.attribs, e);
  return a && (r += " ".concat(a)), n.children.length === 0 && (e.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    e.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    e.selfClosingTags && co.has(n.name)
  )) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", n.children.length > 0 && (r += xi(n.children, e)), (e.xmlMode || !co.has(n.name)) && (r += "</".concat(n.name, ">"))), r;
}
function Bm(n) {
  return "<".concat(n.data, ">");
}
function zm(n, e) {
  var t, r = n.data || "";
  return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && n.parent && Fm.has(n.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? (0, ai.encodeXML)(r) : (0, ai.escapeText)(r)), r;
}
function Pm(n) {
  return "<![CDATA[".concat(n.children[0].data, "]]>");
}
function qm(n) {
  return "<!--".concat(n.data, "-->");
}
var Hm = he && he.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.innerText = Rt.textContent = Rt.getText = Rt.getInnerHTML = Rt.getOuterHTML = void 0;
var _0 = j0, Um = Hm($n), Gm = qr;
function gf(n, e) {
  return (0, Um.default)(n, e);
}
Rt.getOuterHTML = gf;
function jm(n, e) {
  return (0, _0.hasChildren)(n) ? n.children.map(function(t) {
    return gf(t, e);
  }).join("") : "";
}
Rt.getInnerHTML = jm;
function za(n) {
  return Array.isArray(n) ? n.map(za).join("") : (0, _0.isTag)(n) ? n.name === "br" ? `
` : za(n.children) : (0, _0.isCDATA)(n) ? za(n.children) : (0, _0.isText)(n) ? n.data : "";
}
Rt.getText = za;
function Nu(n) {
  return Array.isArray(n) ? n.map(Nu).join("") : (0, _0.hasChildren)(n) && !(0, _0.isComment)(n) ? Nu(n.children) : (0, _0.isText)(n) ? n.data : "";
}
Rt.textContent = Nu;
function Ou(n) {
  return Array.isArray(n) ? n.map(Ou).join("") : (0, _0.hasChildren)(n) && (n.type === Gm.ElementType.Tag || (0, _0.isCDATA)(n)) ? Ou(n.children) : (0, _0.isText)(n) ? n.data : "";
}
Rt.innerText = Ou;
var at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
at.prevElementSibling = at.nextElementSibling = at.getName = at.hasAttrib = at.getAttributeValue = at.getSiblings = at.getParent = at.getChildren = void 0;
var $s = j0;
function bf(n) {
  return (0, $s.hasChildren)(n) ? n.children : [];
}
at.getChildren = bf;
function vf(n) {
  return n.parent || null;
}
at.getParent = vf;
function Vm(n) {
  var e, t, r = vf(n);
  if (r != null)
    return bf(r);
  for (var a = [n], i = n.prev, u = n.next; i != null; )
    a.unshift(i), e = i, i = e.prev;
  for (; u != null; )
    a.push(u), t = u, u = t.next;
  return a;
}
at.getSiblings = Vm;
function Wm(n, e) {
  var t;
  return (t = n.attribs) === null || t === void 0 ? void 0 : t[e];
}
at.getAttributeValue = Wm;
function Xm(n, e) {
  return n.attribs != null && Object.prototype.hasOwnProperty.call(n.attribs, e) && n.attribs[e] != null;
}
at.hasAttrib = Xm;
function Ym(n) {
  return n.name;
}
at.getName = Ym;
function $m(n) {
  for (var e, t = n.next; t !== null && !(0, $s.isTag)(t); )
    e = t, t = e.next;
  return t;
}
at.nextElementSibling = $m;
function Zm(n) {
  for (var e, t = n.prev; t !== null && !(0, $s.isTag)(t); )
    e = t, t = e.prev;
  return t;
}
at.prevElementSibling = Zm;
var Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.prepend = Et.prependChild = Et.append = Et.appendChild = Et.replaceElement = Et.removeElement = void 0;
function Zn(n) {
  if (n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), n.parent) {
    var e = n.parent.children, t = e.lastIndexOf(n);
    t >= 0 && e.splice(t, 1);
  }
  n.next = null, n.prev = null, n.parent = null;
}
Et.removeElement = Zn;
function Km(n, e) {
  var t = e.prev = n.prev;
  t && (t.next = e);
  var r = e.next = n.next;
  r && (r.prev = e);
  var a = e.parent = n.parent;
  if (a) {
    var i = a.children;
    i[i.lastIndexOf(n)] = e, n.parent = null;
  }
}
Et.replaceElement = Km;
function Qm(n, e) {
  if (Zn(e), e.next = null, e.parent = n, n.children.push(e) > 1) {
    var t = n.children[n.children.length - 2];
    t.next = e, e.prev = t;
  } else
    e.prev = null;
}
Et.appendChild = Qm;
function Jm(n, e) {
  Zn(e);
  var t = n.parent, r = n.next;
  if (e.next = r, e.prev = n, n.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
      var a = t.children;
      a.splice(a.lastIndexOf(r), 0, e);
    }
  } else t && t.children.push(e);
}
Et.append = Jm;
function e3(n, e) {
  if (Zn(e), e.parent = n, e.prev = null, n.children.unshift(e) !== 1) {
    var t = n.children[1];
    t.prev = e, e.next = t;
  } else
    e.next = null;
}
Et.prependChild = e3;
function t3(n, e) {
  Zn(e);
  var t = n.parent;
  if (t) {
    var r = t.children;
    r.splice(r.indexOf(n), 0, e);
  }
  n.prev && (n.prev.next = e), e.parent = t, e.prev = n.prev, e.next = n, n.prev = e;
}
Et.prepend = t3;
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.findAll = dt.existsOne = dt.findOne = dt.findOneChild = dt.find = dt.filter = void 0;
var Ai = j0;
function r3(n, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), yf(n, Array.isArray(e) ? e : [e], t, r);
}
dt.filter = r3;
function yf(n, e, t, r) {
  for (var a = [], i = [e], u = [0]; ; ) {
    if (u[0] >= i[0].length) {
      if (u.length === 1)
        return a;
      i.shift(), u.shift();
      continue;
    }
    var l = i[0][u[0]++];
    if (n(l) && (a.push(l), --r <= 0))
      return a;
    t && (0, Ai.hasChildren)(l) && l.children.length > 0 && (u.unshift(0), i.unshift(l.children));
  }
}
dt.find = yf;
function n3(n, e) {
  return e.find(n);
}
dt.findOneChild = n3;
function wf(n, e, t) {
  t === void 0 && (t = !0);
  for (var r = null, a = 0; a < e.length && !r; a++) {
    var i = e[a];
    if ((0, Ai.isTag)(i))
      n(i) ? r = i : t && i.children.length > 0 && (r = wf(n, i.children, !0));
    else continue;
  }
  return r;
}
dt.findOne = wf;
function xf(n, e) {
  return e.some(function(t) {
    return (0, Ai.isTag)(t) && (n(t) || xf(n, t.children));
  });
}
dt.existsOne = xf;
function a3(n, e) {
  for (var t = [], r = [e], a = [0]; ; ) {
    if (a[0] >= r[0].length) {
      if (r.length === 1)
        return t;
      r.shift(), a.shift();
      continue;
    }
    var i = r[0][a[0]++];
    (0, Ai.isTag)(i) && (n(i) && t.push(i), i.children.length > 0 && (a.unshift(0), r.unshift(i.children)));
  }
}
dt.findAll = a3;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.getElementsByTagType = Lt.getElementsByTagName = Lt.getElementById = Lt.getElements = Lt.testElement = void 0;
var pr = j0, Si = dt, ii = {
  tag_name: function(n) {
    return typeof n == "function" ? function(e) {
      return (0, pr.isTag)(e) && n(e.name);
    } : n === "*" ? pr.isTag : function(e) {
      return (0, pr.isTag)(e) && e.name === n;
    };
  },
  tag_type: function(n) {
    return typeof n == "function" ? function(e) {
      return n(e.type);
    } : function(e) {
      return e.type === n;
    };
  },
  tag_contains: function(n) {
    return typeof n == "function" ? function(e) {
      return (0, pr.isText)(e) && n(e.data);
    } : function(e) {
      return (0, pr.isText)(e) && e.data === n;
    };
  }
};
function Af(n, e) {
  return typeof e == "function" ? function(t) {
    return (0, pr.isTag)(t) && e(t.attribs[n]);
  } : function(t) {
    return (0, pr.isTag)(t) && t.attribs[n] === e;
  };
}
function i3(n, e) {
  return function(t) {
    return n(t) || e(t);
  };
}
function Sf(n) {
  var e = Object.keys(n).map(function(t) {
    var r = n[t];
    return Object.prototype.hasOwnProperty.call(ii, t) ? ii[t](r) : Af(t, r);
  });
  return e.length === 0 ? null : e.reduce(i3);
}
function u3(n, e) {
  var t = Sf(n);
  return t ? t(e) : !0;
}
Lt.testElement = u3;
function s3(n, e, t, r) {
  r === void 0 && (r = 1 / 0);
  var a = Sf(n);
  return a ? (0, Si.filter)(a, e, t, r) : [];
}
Lt.getElements = s3;
function l3(n, e, t) {
  return t === void 0 && (t = !0), Array.isArray(e) || (e = [e]), (0, Si.findOne)(Af("id", n), e, t);
}
Lt.getElementById = l3;
function o3(n, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Si.filter)(ii.tag_name(n), e, t, r);
}
Lt.getElementsByTagName = o3;
function c3(n, e, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Si.filter)(ii.tag_type(n), e, t, r);
}
Lt.getElementsByTagType = c3;
var Df = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.uniqueSort = n.compareDocumentPosition = n.DocumentPosition = n.removeSubsets = void 0;
  var e = j0;
  function t(u) {
    for (var l = u.length; --l >= 0; ) {
      var s = u[l];
      if (l > 0 && u.lastIndexOf(s, l - 1) >= 0) {
        u.splice(l, 1);
        continue;
      }
      for (var o = s.parent; o; o = o.parent)
        if (u.includes(o)) {
          u.splice(l, 1);
          break;
        }
    }
    return u;
  }
  n.removeSubsets = t;
  var r;
  (function(u) {
    u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(r = n.DocumentPosition || (n.DocumentPosition = {}));
  function a(u, l) {
    var s = [], o = [];
    if (u === l)
      return 0;
    for (var h = (0, e.hasChildren)(u) ? u : u.parent; h; )
      s.unshift(h), h = h.parent;
    for (h = (0, e.hasChildren)(l) ? l : l.parent; h; )
      o.unshift(h), h = h.parent;
    for (var p = Math.min(s.length, o.length), f = 0; f < p && s[f] === o[f]; )
      f++;
    if (f === 0)
      return r.DISCONNECTED;
    var m = s[f - 1], D = m.children, _ = s[f], w = o[f];
    return D.indexOf(_) > D.indexOf(w) ? m === l ? r.FOLLOWING | r.CONTAINED_BY : r.FOLLOWING : m === u ? r.PRECEDING | r.CONTAINS : r.PRECEDING;
  }
  n.compareDocumentPosition = a;
  function i(u) {
    return u = u.filter(function(l, s, o) {
      return !o.includes(l, s + 1);
    }), u.sort(function(l, s) {
      var o = a(l, s);
      return o & r.PRECEDING ? -1 : o & r.FOLLOWING ? 1 : 0;
    }), u;
  }
  n.uniqueSort = i;
})(Df);
var Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.getFeed = void 0;
var f3 = Rt, Kn = Lt;
function d3(n) {
  var e = ui(b3, n);
  return e ? e.name === "feed" ? h3(e) : m3(e) : null;
}
Di.getFeed = d3;
function h3(n) {
  var e, t = n.children, r = {
    type: "atom",
    items: (0, Kn.getElementsByTagName)("entry", t).map(function(u) {
      var l, s = u.children, o = { media: Ef(s) };
      Dt(o, "id", "id", s), Dt(o, "title", "title", s);
      var h = (l = ui("link", s)) === null || l === void 0 ? void 0 : l.attribs.href;
      h && (o.link = h);
      var p = Q0("summary", s) || Q0("content", s);
      p && (o.description = p);
      var f = Q0("updated", s);
      return f && (o.pubDate = new Date(f)), o;
    })
  };
  Dt(r, "id", "id", t), Dt(r, "title", "title", t);
  var a = (e = ui("link", t)) === null || e === void 0 ? void 0 : e.attribs.href;
  a && (r.link = a), Dt(r, "description", "subtitle", t);
  var i = Q0("updated", t);
  return i && (r.updated = new Date(i)), Dt(r, "author", "email", t, !0), r;
}
function m3(n) {
  var e, t, r = (t = (e = ui("channel", n.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], a = {
    type: n.name.substr(0, 3),
    id: "",
    items: (0, Kn.getElementsByTagName)("item", n.children).map(function(u) {
      var l = u.children, s = { media: Ef(l) };
      Dt(s, "id", "guid", l), Dt(s, "title", "title", l), Dt(s, "link", "link", l), Dt(s, "description", "description", l);
      var o = Q0("pubDate", l) || Q0("dc:date", l);
      return o && (s.pubDate = new Date(o)), s;
    })
  };
  Dt(a, "title", "title", r), Dt(a, "link", "link", r), Dt(a, "description", "description", r);
  var i = Q0("lastBuildDate", r);
  return i && (a.updated = new Date(i)), Dt(a, "author", "managingEditor", r, !0), a;
}
var p3 = ["url", "type", "lang"], g3 = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function Ef(n) {
  return (0, Kn.getElementsByTagName)("media:content", n).map(function(e) {
    for (var t = e.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, a = 0, i = p3; a < i.length; a++) {
      var u = i[a];
      t[u] && (r[u] = t[u]);
    }
    for (var l = 0, s = g3; l < s.length; l++) {
      var u = s[l];
      t[u] && (r[u] = parseInt(t[u], 10));
    }
    return t.expression && (r.expression = t.expression), r;
  });
}
function ui(n, e) {
  return (0, Kn.getElementsByTagName)(n, e, !0, 1)[0];
}
function Q0(n, e, t) {
  return t === void 0 && (t = !1), (0, f3.textContent)((0, Kn.getElementsByTagName)(n, e, t, 1)).trim();
}
function Dt(n, e, t, r, a) {
  a === void 0 && (a = !1);
  var i = Q0(t, r, a);
  i && (n[e] = i);
}
function b3(n) {
  return n === "rss" || n === "feed" || n === "rdf:RDF";
}
(function(n) {
  var e = he && he.__createBinding || (Object.create ? function(a, i, u, l) {
    l === void 0 && (l = u);
    var s = Object.getOwnPropertyDescriptor(i, u);
    (!s || ("get" in s ? !i.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
      return i[u];
    } }), Object.defineProperty(a, l, s);
  } : function(a, i, u, l) {
    l === void 0 && (l = u), a[l] = i[u];
  }), t = he && he.__exportStar || function(a, i) {
    for (var u in a) u !== "default" && !Object.prototype.hasOwnProperty.call(i, u) && e(i, a, u);
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.hasChildren = n.isDocument = n.isComment = n.isText = n.isCDATA = n.isTag = void 0, t(Rt, n), t(at, n), t(Et, n), t(dt, n), t(Lt, n), t(Df, n), t(Di, n);
  var r = j0;
  Object.defineProperty(n, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(n, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(n, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(n, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(n, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(n, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(Ba);
(function(n) {
  var e = he && he.__createBinding || (Object.create ? function(T, x, y, S) {
    S === void 0 && (S = y);
    var F = Object.getOwnPropertyDescriptor(x, y);
    (!F || ("get" in F ? !x.__esModule : F.writable || F.configurable)) && (F = { enumerable: !0, get: function() {
      return x[y];
    } }), Object.defineProperty(T, S, F);
  } : function(T, x, y, S) {
    S === void 0 && (S = y), T[S] = x[y];
  }), t = he && he.__setModuleDefault || (Object.create ? function(T, x) {
    Object.defineProperty(T, "default", { enumerable: !0, value: x });
  } : function(T, x) {
    T.default = x;
  }), r = he && he.__importStar || function(T) {
    if (T && T.__esModule) return T;
    var x = {};
    if (T != null) for (var y in T) y !== "default" && Object.prototype.hasOwnProperty.call(T, y) && e(x, T, y);
    return t(x, T), x;
  }, a = he && he.__importDefault || function(T) {
    return T && T.__esModule ? T : { default: T };
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), n.DomUtils = n.parseFeed = n.getFeed = n.ElementType = n.Tokenizer = n.createDomStream = n.parseDOM = n.parseDocument = n.DefaultHandler = n.DomHandler = n.Parser = void 0;
  var i = Ln, u = Ln;
  Object.defineProperty(n, "Parser", { enumerable: !0, get: function() {
    return u.Parser;
  } });
  var l = j0, s = j0;
  Object.defineProperty(n, "DomHandler", { enumerable: !0, get: function() {
    return s.DomHandler;
  } }), Object.defineProperty(n, "DefaultHandler", { enumerable: !0, get: function() {
    return s.DomHandler;
  } });
  function o(T, x) {
    var y = new l.DomHandler(void 0, x);
    return new i.Parser(y, x).end(T), y.root;
  }
  n.parseDocument = o;
  function h(T, x) {
    return o(T, x).children;
  }
  n.parseDOM = h;
  function p(T, x, y) {
    var S = new l.DomHandler(T, x, y);
    return new i.Parser(S, x);
  }
  n.createDomStream = p;
  var f = Gs;
  Object.defineProperty(n, "Tokenizer", { enumerable: !0, get: function() {
    return a(f).default;
  } }), n.ElementType = r(qr);
  var m = Ba, D = Ba;
  Object.defineProperty(n, "getFeed", { enumerable: !0, get: function() {
    return D.getFeed;
  } });
  var _ = { xmlMode: !0 };
  function w(T, x) {
    return x === void 0 && (x = _), (0, m.getFeed)(h(T, x));
  }
  n.parseFeed = w, n.DomUtils = r(Ba);
})(Qc);
var v3 = (n) => {
  if (typeof n != "string")
    throw new TypeError("Expected a string");
  return n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}, Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function fo(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function y3(n) {
  var e, t;
  return fo(n) === !1 ? !1 : (e = n.constructor, e === void 0 ? !0 : (t = e.prototype, !(fo(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
Zs.isPlainObject = y3;
var w3 = function(e) {
  return x3(e) && !A3(e);
};
function x3(n) {
  return !!n && typeof n == "object";
}
function A3(n) {
  var e = Object.prototype.toString.call(n);
  return e === "[object RegExp]" || e === "[object Date]" || E3(n);
}
var S3 = typeof Symbol == "function" && Symbol.for, D3 = S3 ? Symbol.for("react.element") : 60103;
function E3(n) {
  return n.$$typeof === D3;
}
function k3(n) {
  return Array.isArray(n) ? [] : {};
}
function zn(n, e) {
  return e.clone !== !1 && e.isMergeableObject(n) ? Ir(k3(n), n, e) : n;
}
function _3(n, e, t) {
  return n.concat(e).map(function(r) {
    return zn(r, t);
  });
}
function T3(n, e) {
  if (!e.customMerge)
    return Ir;
  var t = e.customMerge(n);
  return typeof t == "function" ? t : Ir;
}
function C3(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(e) {
    return Object.propertyIsEnumerable.call(n, e);
  }) : [];
}
function ho(n) {
  return Object.keys(n).concat(C3(n));
}
function kf(n, e) {
  try {
    return e in n;
  } catch {
    return !1;
  }
}
function F3(n, e) {
  return kf(n, e) && !(Object.hasOwnProperty.call(n, e) && Object.propertyIsEnumerable.call(n, e));
}
function M3(n, e, t) {
  var r = {};
  return t.isMergeableObject(n) && ho(n).forEach(function(a) {
    r[a] = zn(n[a], t);
  }), ho(e).forEach(function(a) {
    F3(n, a) || (kf(n, a) && t.isMergeableObject(e[a]) ? r[a] = T3(a, t)(n[a], e[a], t) : r[a] = zn(e[a], t));
  }), r;
}
function Ir(n, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || _3, t.isMergeableObject = t.isMergeableObject || w3, t.cloneUnlessOtherwiseSpecified = zn;
  var r = Array.isArray(e), a = Array.isArray(n), i = r === a;
  return i ? r ? t.arrayMerge(n, e, t) : M3(n, e, t) : zn(e, t);
}
Ir.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, a) {
    return Ir(r, a, t);
  }, {});
};
var N3 = Ir, O3 = N3, _f = { exports: {} };
(function(n) {
  (function(e, t) {
    n.exports ? n.exports = t() : e.parseSrcset = t();
  })(he, function() {
    return function(e) {
      function t(S) {
        return S === " " || // space
        S === "	" || // horizontal tab
        S === `
` || // new line
        S === "\f" || // form feed
        S === "\r";
      }
      function r(S) {
        var F, L = S.exec(e.substring(w));
        if (L)
          return F = L[0], w += F.length, F;
      }
      for (var a = e.length, i = /^[ \t\n\r\u000c]+/, u = /^[, \t\n\r\u000c]+/, l = /^[^ \t\n\r\u000c]+/, s = /[,]+$/, o = /^\d+$/, h = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, p, f, m, D, _, w = 0, T = []; ; ) {
        if (r(u), w >= a)
          return T;
        p = r(l), f = [], p.slice(-1) === "," ? (p = p.replace(s, ""), y()) : x();
      }
      function x() {
        for (r(i), m = "", D = "in descriptor"; ; ) {
          if (_ = e.charAt(w), D === "in descriptor")
            if (t(_))
              m && (f.push(m), m = "", D = "after descriptor");
            else if (_ === ",") {
              w += 1, m && f.push(m), y();
              return;
            } else if (_ === "(")
              m = m + _, D = "in parens";
            else if (_ === "") {
              m && f.push(m), y();
              return;
            } else
              m = m + _;
          else if (D === "in parens")
            if (_ === ")")
              m = m + _, D = "in descriptor";
            else if (_ === "") {
              f.push(m), y();
              return;
            } else
              m = m + _;
          else if (D === "after descriptor" && !t(_))
            if (_ === "") {
              y();
              return;
            } else
              D = "in descriptor", w -= 1;
          w += 1;
        }
      }
      function y() {
        var S = !1, F, L, I, U, z = {}, B, k, P, G, Z;
        for (U = 0; U < f.length; U++)
          B = f[U], k = B[B.length - 1], P = B.substring(0, B.length - 1), G = parseInt(P, 10), Z = parseFloat(P), o.test(P) && k === "w" ? ((F || L) && (S = !0), G === 0 ? S = !0 : F = G) : h.test(P) && k === "x" ? ((F || L || I) && (S = !0), Z < 0 ? S = !0 : L = Z) : o.test(P) && k === "h" ? ((I || L) && (S = !0), G === 0 ? S = !0 : I = G) : S = !0;
        S ? console && console.log && console.log("Invalid srcset descriptor found in '" + e + "' at '" + B + "'.") : (z.url = p, F && (z.w = F), L && (z.d = L), I && (z.h = I), T.push(z));
      }
    };
  });
})(_f);
var I3 = _f.exports, Ks = { exports: {} }, be = String, Tf = function() {
  return { isColorSupported: !1, reset: be, bold: be, dim: be, italic: be, underline: be, inverse: be, hidden: be, strikethrough: be, black: be, red: be, green: be, yellow: be, blue: be, magenta: be, cyan: be, white: be, gray: be, bgBlack: be, bgRed: be, bgGreen: be, bgYellow: be, bgBlue: be, bgMagenta: be, bgCyan: be, bgWhite: be, blackBright: be, redBright: be, greenBright: be, yellowBright: be, blueBright: be, magentaBright: be, cyanBright: be, whiteBright: be, bgBlackBright: be, bgRedBright: be, bgGreenBright: be, bgYellowBright: be, bgBlueBright: be, bgMagentaBright: be, bgCyanBright: be, bgWhiteBright: be };
};
Ks.exports = Tf();
Ks.exports.createColors = Tf;
var R3 = Ks.exports;
const L3 = {}, B3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L3
}, Symbol.toStringTag, { value: "Module" })), h0 = /* @__PURE__ */ nm(B3);
let mo = R3, po = h0, Iu = class Cf extends Error {
  constructor(e, t, r, a, i, u) {
    super(e), this.name = "CssSyntaxError", this.reason = e, i && (this.file = i), a && (this.source = a), u && (this.plugin = u), typeof t < "u" && typeof r < "u" && (typeof t == "number" ? (this.line = t, this.column = r) : (this.line = t.line, this.column = t.column, this.endLine = r.line, this.endColumn = r.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Cf);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = mo.isColorSupported);
    let r = (h) => h, a = (h) => h, i = (h) => h;
    if (e) {
      let { bold: h, gray: p, red: f } = mo.createColors(!0);
      a = (m) => h(f(m)), r = (m) => p(m), po && (i = (m) => po(m));
    }
    let u = t.split(/\r?\n/), l = Math.max(this.line - 3, 0), s = Math.min(this.line + 2, u.length), o = String(s).length;
    return u.slice(l, s).map((h, p) => {
      let f = l + 1 + p, m = " " + (" " + f).slice(-o) + " | ";
      if (f === this.line) {
        if (h.length > 160) {
          let _ = 20, w = Math.max(0, this.column - _), T = Math.max(
            this.column + _,
            this.endColumn + _
          ), x = h.slice(w, T), y = r(m.replace(/\d/g, " ")) + h.slice(0, Math.min(this.column - 1, _ - 1)).replace(/[^\t]/g, " ");
          return a(">") + r(m) + i(x) + `
 ` + y + a("^");
        }
        let D = r(m.replace(/\d/g, " ")) + h.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return a(">") + r(m) + i(h) + `
 ` + D + a("^");
      }
      return " " + r(m) + i(h);
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var Qs = Iu;
Iu.default = Iu;
const go = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function z3(n) {
  return n[0].toUpperCase() + n.slice(1);
}
let Ru = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let r = "@" + e.name, a = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? r += e.raws.afterName : a && (r += " "), e.nodes)
      this.block(e, r + a);
    else {
      let i = (e.raws.between || "") + (t ? ";" : "");
      this.builder(r + a + i, e);
    }
  }
  beforeAfter(e, t) {
    let r;
    e.type === "decl" ? r = this.raw(e, null, "beforeDecl") : e.type === "comment" ? r = this.raw(e, null, "beforeComment") : t === "before" ? r = this.raw(e, null, "beforeRule") : r = this.raw(e, null, "beforeClose");
    let a = e.parent, i = 0;
    for (; a && a.type !== "root"; )
      i += 1, a = a.parent;
    if (r.includes(`
`)) {
      let u = this.raw(e, null, "indent");
      if (u.length)
        for (let l = 0; l < i; l++) r += u;
    }
    return r;
  }
  block(e, t) {
    let r = this.raw(e, "between", "beforeOpen");
    this.builder(t + r + "{", e, "start");
    let a;
    e.nodes && e.nodes.length ? (this.body(e), a = this.raw(e, "after")) : a = this.raw(e, "after", "emptyBody"), a && this.builder(a), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes.length - 1;
    for (; t > 0 && e.nodes[t].type === "comment"; )
      t -= 1;
    let r = this.raw(e, "semicolon");
    for (let a = 0; a < e.nodes.length; a++) {
      let i = e.nodes[a], u = this.raw(i, "before");
      u && this.builder(u), this.stringify(i, t !== a || r);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), r = this.raw(e, "right", "commentRight");
    this.builder("/*" + t + e.text + r + "*/", e);
  }
  decl(e, t) {
    let r = this.raw(e, "between", "colon"), a = e.prop + r + this.rawValue(e, "value");
    e.important && (a += e.raws.important || " !important"), t && (a += ";"), this.builder(a, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, r) {
    let a;
    if (r || (r = t), t && (a = e.raws[t], typeof a < "u"))
      return a;
    let i = e.parent;
    if (r === "before" && (!i || i.type === "root" && i.first === e || i && i.type === "document"))
      return "";
    if (!i) return go[r];
    let u = e.root();
    if (u.rawCache || (u.rawCache = {}), typeof u.rawCache[r] < "u")
      return u.rawCache[r];
    if (r === "before" || r === "after")
      return this.beforeAfter(e, r);
    {
      let l = "raw" + z3(r);
      this[l] ? a = this[l](u, e) : u.walk((s) => {
        if (a = s.raws[t], typeof a < "u") return !1;
      });
    }
    return typeof a > "u" && (a = go[r]), u.rawCache[r] = a, a;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
        return t = r.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let r;
    return e.walkComments((a) => {
      if (typeof a.raws.before < "u")
        return r = a.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeDecl(e, t) {
    let r;
    return e.walkDecls((a) => {
      if (typeof a.raws.before < "u")
        return r = a.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((r) => {
      if (r.type !== "decl" && (t = r.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < "u")
        return t = r.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((r) => {
      if (typeof r.raws.between < "u")
        return t = r.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length === 0 && (t = r.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return e.walk((r) => {
      let a = r.parent;
      if (a && a !== e && a.parent && a.parent === e && typeof r.raws.before < "u") {
        let i = r.raws.before.split(`
`);
        return t = i[i.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length && r.last.type === "decl" && (t = r.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let r = e[t], a = e.raws[t];
    return a && a.value === r ? a.raw : r;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var Ff = Ru;
Ru.default = Ru;
let P3 = Ff;
function Lu(n, e) {
  new P3(e).stringify(n);
}
var Ei = Lu;
Lu.default = Lu;
var Qn = {};
Qn.isClean = Symbol("isClean");
Qn.my = Symbol("my");
let q3 = Qs, H3 = Ff, U3 = Ei, { isClean: cn, my: G3 } = Qn;
function Bu(n, e) {
  let t = new n.constructor();
  for (let r in n) {
    if (!Object.prototype.hasOwnProperty.call(n, r) || r === "proxyCache") continue;
    let a = n[r], i = typeof a;
    r === "parent" && i === "object" ? e && (t[r] = e) : r === "source" ? t[r] = a : Array.isArray(a) ? t[r] = a.map((u) => Bu(u, t)) : (i === "object" && a !== null && (a = Bu(a)), t[r] = a);
  }
  return t;
}
let zu = class {
  constructor(e = {}) {
    this.raws = {}, this[cn] = !1, this[G3] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let r of e[t])
          typeof r.clone == "function" ? this.append(r.clone()) : this.append(r);
      } else
        this[t] = e[t];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e)
      this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = Bu(this);
    for (let r in e)
      t[r] = e[r];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: r, start: a } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: a.column, line: a.line },
        { column: r.column, line: r.line },
        t
      );
    }
    return new q3(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  /* c8 ignore next 3 */
  markClean() {
    this[cn] = !0;
  }
  markDirty() {
    if (this[cn]) {
      this[cn] = !1;
      let e = this;
      for (; e = e.parent; )
        e[cn] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, t) {
    let r = this.source.start;
    if (e.index)
      r = this.positionInside(e.index, t);
    else if (e.word) {
      t = this.toString();
      let a = t.indexOf(e.word);
      a !== -1 && (r = this.positionInside(a, t));
    }
    return r;
  }
  positionInside(e, t) {
    let r = t || this.toString(), a = this.source.start.column, i = this.source.start.line;
    for (let u = 0; u < e; u++)
      r[u] === `
` ? (a = 1, i += 1) : a += 1;
    return { column: a, line: i };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let t = {
      column: this.source.start.column,
      line: this.source.start.line
    }, r = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: t.column + 1,
      line: t.line
    };
    if (e.word) {
      let a = this.toString(), i = a.indexOf(e.word);
      i !== -1 && (t = this.positionInside(i, a), r = this.positionInside(
        i + e.word.length,
        a
      ));
    } else
      e.start ? t = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (t = this.positionInside(e.index)), e.end ? r = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
    return (r.line < t.line || r.line === t.line && r.column <= t.column) && (r = { column: t.column + 1, line: t.line }), { end: r, start: t };
  }
  raw(e, t) {
    return new H3().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, r = !1;
      for (let a of e)
        a === this ? r = !0 : r ? (this.parent.insertAfter(t, a), t = a) : this.parent.insertBefore(t, a);
      r || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let r = {}, a = t == null;
    t = t || /* @__PURE__ */ new Map();
    let i = 0;
    for (let u in this) {
      if (!Object.prototype.hasOwnProperty.call(this, u) || u === "parent" || u === "proxyCache") continue;
      let l = this[u];
      if (Array.isArray(l))
        r[u] = l.map((s) => typeof s == "object" && s.toJSON ? s.toJSON(null, t) : s);
      else if (typeof l == "object" && l.toJSON)
        r[u] = l.toJSON(null, t);
      else if (u === "source") {
        let s = t.get(l.input);
        s == null && (s = i, t.set(l.input, i), i++), r[u] = {
          end: l.end,
          inputId: s,
          start: l.start
        };
      } else
        r[u] = l;
    }
    return a && (r.inputs = [...t.keys()].map((u) => u.toJSON())), r;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = U3) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (r) => {
      t += r;
    }), t;
  }
  warn(e, t, r) {
    let a = { node: this };
    for (let i in r) a[i] = r[i];
    return e.warn(t, a);
  }
  get proxyOf() {
    return this;
  }
};
var ki = zu;
zu.default = zu;
let j3 = ki, Pu = class extends j3 {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var _i = Pu;
Pu.default = Pu;
let V3 = ki, qu = class extends V3 {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Ti = qu;
qu.default = qu;
let Mf = _i, Nf = Ti, W3 = ki, { isClean: Of, my: If } = Qn, Js, Rf, Lf, el;
function Bf(n) {
  return n.map((e) => (e.nodes && (e.nodes = Bf(e.nodes)), delete e.source, e));
}
function zf(n) {
  if (n[Of] = !1, n.proxyOf.nodes)
    for (let e of n.proxyOf.nodes)
      zf(e);
}
let V0 = class Pf extends W3 {
  append(...e) {
    for (let t of e) {
      let r = this.normalize(t, this.last);
      for (let a of r) this.proxyOf.nodes.push(a);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(), r, a;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (r = this.indexes[t], a = e(this.proxyOf.nodes[r], r), a !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], a;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...r) => e[t](
          ...r.map((a) => typeof a == "function" ? (i, u) => a(i.toProxy(), u) : a)
        ) : t === "every" || t === "some" ? (r) => e[t](
          (a, ...i) => r(a.toProxy(), ...i)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((r) => r.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let r = this.index(e), a = this.normalize(t, this.proxyOf.nodes[r]).reverse();
    r = this.index(e);
    for (let u of a) this.proxyOf.nodes.splice(r + 1, 0, u);
    let i;
    for (let u in this.indexes)
      i = this.indexes[u], r < i && (this.indexes[u] = i + a.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let r = this.index(e), a = r === 0 ? "prepend" : !1, i = this.normalize(
      t,
      this.proxyOf.nodes[r],
      a
    ).reverse();
    r = this.index(e);
    for (let l of i) this.proxyOf.nodes.splice(r, 0, l);
    let u;
    for (let l in this.indexes)
      u = this.indexes[l], r <= u && (this.indexes[l] = u + i.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = Bf(Rf(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let a of e)
        a.parent && a.parent.removeChild(a, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let a of e)
        a.parent && a.parent.removeChild(a, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Nf(e)];
    } else if (e.selector || e.selectors)
      e = [new el(e)];
    else if (e.name)
      e = [new Js(e)];
    else if (e.text)
      e = [new Mf(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((a) => (a[If] || Pf.rebuild(a), a = a.proxyOf, a.parent && a.parent.removeChild(a), a[Of] && zf(a), a.raws || (a.raws = {}), typeof a.raws.before > "u" && t && typeof t.raws.before < "u" && (a.raws.before = t.raws.before.replace(/\S/g, "")), a.parent = this.proxyOf, a));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let r = this.normalize(t, this.first, "prepend").reverse();
      for (let a of r) this.proxyOf.nodes.unshift(a);
      for (let a in this.indexes)
        this.indexes[a] = this.indexes[a] + r.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let r in this.indexes)
      t = this.indexes[r], t >= e && (this.indexes[r] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, r) {
    return r || (r = t, t = {}), this.walkDecls((a) => {
      t.props && !t.props.includes(a.prop) || t.fast && !a.value.includes(t.fast) || (a.value = a.value.replace(e, r));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, r) => {
      let a;
      try {
        a = e(t, r);
      } catch (i) {
        throw t.addToError(i);
      }
      return a !== !1 && t.walk && (a = t.walk(e)), a;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, a) => {
      if (r.type === "atrule" && e.test(r.name))
        return t(r, a);
    }) : this.walk((r, a) => {
      if (r.type === "atrule" && r.name === e)
        return t(r, a);
    }) : (t = e, this.walk((r, a) => {
      if (r.type === "atrule")
        return t(r, a);
    }));
  }
  walkComments(e) {
    return this.walk((t, r) => {
      if (t.type === "comment")
        return e(t, r);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, a) => {
      if (r.type === "decl" && e.test(r.prop))
        return t(r, a);
    }) : this.walk((r, a) => {
      if (r.type === "decl" && r.prop === e)
        return t(r, a);
    }) : (t = e, this.walk((r, a) => {
      if (r.type === "decl")
        return t(r, a);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, a) => {
      if (r.type === "rule" && e.test(r.selector))
        return t(r, a);
    }) : this.walk((r, a) => {
      if (r.type === "rule" && r.selector === e)
        return t(r, a);
    }) : (t = e, this.walk((r, a) => {
      if (r.type === "rule")
        return t(r, a);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
V0.registerParse = (n) => {
  Rf = n;
};
V0.registerRule = (n) => {
  el = n;
};
V0.registerAtRule = (n) => {
  Js = n;
};
V0.registerRoot = (n) => {
  Lf = n;
};
var Ar = V0;
V0.default = V0;
V0.rebuild = (n) => {
  n.type === "atrule" ? Object.setPrototypeOf(n, Js.prototype) : n.type === "rule" ? Object.setPrototypeOf(n, el.prototype) : n.type === "decl" ? Object.setPrototypeOf(n, Nf.prototype) : n.type === "comment" ? Object.setPrototypeOf(n, Mf.prototype) : n.type === "root" && Object.setPrototypeOf(n, Lf.prototype), n[If] = !0, n.nodes && n.nodes.forEach((e) => {
    V0.rebuild(e);
  });
};
let qf = Ar, si = class extends qf {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var tl = si;
si.default = si;
qf.registerAtRule(si);
let X3 = Ar, Hf, Uf, Pn = class extends X3 {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Hf(new Uf(), this, e).stringify();
  }
};
Pn.registerLazyResult = (n) => {
  Hf = n;
};
Pn.registerProcessor = (n) => {
  Uf = n;
};
var rl = Pn;
Pn.default = Pn;
let Y3 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", $3 = (n, e = 21) => (t = e) => {
  let r = "", a = t;
  for (; a--; )
    r += n[Math.random() * n.length | 0];
  return r;
}, Z3 = (n = 21) => {
  let e = "", t = n;
  for (; t--; )
    e += Y3[Math.random() * 64 | 0];
  return e;
};
var K3 = { nanoid: Z3, customAlphabet: $3 };
let { existsSync: Q3, readFileSync: J3 } = h0, { dirname: tu, join: ep } = h0, { SourceMapConsumer: bo, SourceMapGenerator: vo } = h0;
function tp(n) {
  return Buffer ? Buffer.from(n, "base64").toString() : window.atob(n);
}
let Hu = class {
  constructor(e, t) {
    if (t.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let r = t.map ? t.map.prev : void 0, a = this.loadMap(t.from, r);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = tu(this.mapFile)), a && (this.text = a);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new bo(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, r = /^data:application\/json;base64,/, a = /^data:application\/json;charset=utf-?8,/, i = /^data:application\/json,/, u = e.match(a) || e.match(i);
    if (u)
      return decodeURIComponent(e.substr(u[0].length));
    let l = e.match(t) || e.match(r);
    if (l)
      return tp(e.substr(l[0].length));
    let s = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + s);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/g);
    if (!t) return;
    let r = e.lastIndexOf(t.pop()), a = e.indexOf("*/", r);
    r > -1 && a > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, a)));
  }
  loadFile(e) {
    if (this.root = tu(e), Q3(e))
      return this.mapFile = e, J3(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let r = t(e);
        if (r) {
          let a = this.loadFile(r);
          if (!a)
            throw new Error(
              "Unable to load previous source map: " + r.toString()
            );
          return a;
        }
      } else {
        if (t instanceof bo)
          return vo.fromSourceMap(t).toString();
        if (t instanceof vo)
          return t.toString();
        if (this.isMap(t))
          return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let r = this.annotation;
        return e && (r = ep(tu(e), r)), this.loadFile(r);
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var Gf = Hu;
Hu.default = Hu;
let { nanoid: rp } = K3, { isAbsolute: Uu, resolve: Gu } = h0, { SourceMapConsumer: np, SourceMapGenerator: ap } = h0, { fileURLToPath: yo, pathToFileURL: ma } = h0, wo = Qs, ip = Gf, ru = h0, nu = Symbol("fromOffsetCache"), up = !!(np && ap), xo = !!(Gu && Uu), li = class {
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!xo || /^\w+:\/\//.test(t.from) || Uu(t.from) ? this.file = t.from : this.file = Gu(t.from)), xo && up) {
      let r = new ip(this.css, t);
      if (r.text) {
        this.map = r;
        let a = r.consumer().file;
        !this.file && a && (this.file = this.mapResolve(a));
      }
    }
    this.file || (this.id = "<input css " + rp(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, r, a = {}) {
    let i, u, l;
    if (t && typeof t == "object") {
      let o = t, h = r;
      if (typeof o.offset == "number") {
        let p = this.fromOffset(o.offset);
        t = p.line, r = p.col;
      } else
        t = o.line, r = o.column;
      if (typeof h.offset == "number") {
        let p = this.fromOffset(h.offset);
        u = p.line, i = p.col;
      } else
        u = h.line, i = h.column;
    } else if (!r) {
      let o = this.fromOffset(t);
      t = o.line, r = o.col;
    }
    let s = this.origin(t, r, u, i);
    return s ? l = new wo(
      e,
      s.endLine === void 0 ? s.line : { column: s.column, line: s.line },
      s.endLine === void 0 ? s.column : { column: s.endColumn, line: s.endLine },
      s.source,
      s.file,
      a.plugin
    ) : l = new wo(
      e,
      u === void 0 ? t : { column: r, line: t },
      u === void 0 ? r : { column: i, line: u },
      this.css,
      this.file,
      a.plugin
    ), l.input = { column: r, endColumn: i, endLine: u, line: t, source: this.css }, this.file && (ma && (l.input.url = ma(this.file).toString()), l.input.file = this.file), l;
  }
  fromOffset(e) {
    let t, r;
    if (this[nu])
      r = this[nu];
    else {
      let i = this.css.split(`
`);
      r = new Array(i.length);
      let u = 0;
      for (let l = 0, s = i.length; l < s; l++)
        r[l] = u, u += i[l].length + 1;
      this[nu] = r;
    }
    t = r[r.length - 1];
    let a = 0;
    if (e >= t)
      a = r.length - 1;
    else {
      let i = r.length - 2, u;
      for (; a < i; )
        if (u = a + (i - a >> 1), e < r[u])
          i = u - 1;
        else if (e >= r[u + 1])
          a = u + 1;
        else {
          a = u;
          break;
        }
    }
    return {
      col: e - r[a] + 1,
      line: a + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : Gu(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, r, a) {
    if (!this.map) return !1;
    let i = this.map.consumer(), u = i.originalPositionFor({ column: t, line: e });
    if (!u.source) return !1;
    let l;
    typeof r == "number" && (l = i.originalPositionFor({ column: a, line: r }));
    let s;
    Uu(u.source) ? s = ma(u.source) : s = new URL(
      u.source,
      this.map.consumer().sourceRoot || ma(this.map.mapFile)
    );
    let o = {
      column: u.column,
      endColumn: l && l.column,
      endLine: l && l.line,
      line: u.line,
      url: s.toString()
    };
    if (s.protocol === "file:")
      if (yo)
        o.file = yo(s);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let h = i.sourceContentFor(u.source);
    return h && (o.source = h), o;
  }
  toJSON() {
    let e = {};
    for (let t of ["hasBOM", "css", "file", "id"])
      this[t] != null && (e[t] = this[t]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var Ci = li;
li.default = li;
ru && ru.registerInput && ru.registerInput(li);
let jf = Ar, Vf, Wf, Rr = class extends jf {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, r) {
    let a = super.normalize(e);
    if (t) {
      if (r === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let i of a)
          i.raws.before = t.raws.before;
    }
    return a;
  }
  removeChild(e, t) {
    let r = this.index(e);
    return !t && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Vf(new Wf(), this, e).stringify();
  }
};
Rr.registerLazyResult = (n) => {
  Vf = n;
};
Rr.registerProcessor = (n) => {
  Wf = n;
};
var Jn = Rr;
Rr.default = Rr;
jf.registerRoot(Rr);
let qn = {
  comma(n) {
    return qn.split(n, [","], !0);
  },
  space(n) {
    let e = [" ", `
`, "	"];
    return qn.split(n, e);
  },
  split(n, e, t) {
    let r = [], a = "", i = !1, u = 0, l = !1, s = "", o = !1;
    for (let h of n)
      o ? o = !1 : h === "\\" ? o = !0 : l ? h === s && (l = !1) : h === '"' || h === "'" ? (l = !0, s = h) : h === "(" ? u += 1 : h === ")" ? u > 0 && (u -= 1) : u === 0 && e.includes(h) && (i = !0), i ? (a !== "" && r.push(a.trim()), a = "", i = !1) : a += h;
    return (t || a !== "") && r.push(a.trim()), r;
  }
};
var Xf = qn;
qn.default = qn;
let Yf = Ar, sp = Xf, oi = class extends Yf {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return sp.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, r = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(r);
  }
};
var nl = oi;
oi.default = oi;
Yf.registerRule(oi);
let lp = tl, op = _i, cp = Ti, fp = Ci, dp = Gf, hp = Jn, mp = nl;
function Hn(n, e) {
  if (Array.isArray(n)) return n.map((a) => Hn(a));
  let { inputs: t, ...r } = n;
  if (t) {
    e = [];
    for (let a of t) {
      let i = { ...a, __proto__: fp.prototype };
      i.map && (i.map = {
        ...i.map,
        __proto__: dp.prototype
      }), e.push(i);
    }
  }
  if (r.nodes && (r.nodes = n.nodes.map((a) => Hn(a, e))), r.source) {
    let { inputId: a, ...i } = r.source;
    r.source = i, a != null && (r.source.input = e[a]);
  }
  if (r.type === "root")
    return new hp(r);
  if (r.type === "decl")
    return new cp(r);
  if (r.type === "rule")
    return new mp(r);
  if (r.type === "comment")
    return new op(r);
  if (r.type === "atrule")
    return new lp(r);
  throw new Error("Unknown node type: " + n.type);
}
var pp = Hn;
Hn.default = Hn;
let { dirname: Pa, relative: $f, resolve: Zf, sep: Kf } = h0, { SourceMapConsumer: Qf, SourceMapGenerator: qa } = h0, { pathToFileURL: Ao } = h0, gp = Ci, bp = !!(Qf && qa), vp = !!(Pa && Zf && $f && Kf), yp = class {
  constructor(e, t, r, a) {
    this.stringify = e, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = a, this.originalCSS = a, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let t = `
`;
    this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let t = this.toUrl(this.path(e.file)), r = e.root || Pa(e.file), a;
      this.mapOpts.sourcesContent === !1 ? (a = new Qf(e.text), a.sourcesContent && (a.sourcesContent = null)) : a = e.consumer(), this.map.applySourceMap(a, t, this.toUrl(this.path(r)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          e = this.root.nodes[t], e.type === "comment" && e.text.startsWith("# sourceMappingURL=") && this.root.removeChild(t);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), vp && bp && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (t) => {
        e += t;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = qa.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new qa({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new qa({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, r = "<no source>", a = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, i, u;
    this.stringify(this.root, (l, s, o) => {
      if (this.css += l, s && o !== "end" && (a.generated.line = e, a.generated.column = t - 1, s.source && s.source.start ? (a.source = this.sourcePath(s), a.original.line = s.source.start.line, a.original.column = s.source.start.column - 1, this.map.addMapping(a)) : (a.source = r, a.original.line = 1, a.original.column = 0, this.map.addMapping(a))), u = l.match(/\n/g), u ? (e += u.length, i = l.lastIndexOf(`
`), t = l.length - i) : t += l.length, s && o !== "start") {
        let h = s.parent || { raws: {} };
        (!(s.type === "decl" || s.type === "atrule" && !s.nodes) || s !== h.last || h.raws.semicolon) && (s.source && s.source.end ? (a.source = this.sourcePath(s), a.original.line = s.source.end.line, a.original.column = s.source.end.column - 1, a.generated.line = e, a.generated.column = t - 2, this.map.addMapping(a)) : (a.source = r, a.original.line = 1, a.original.column = 0, a.generated.line = e, a.generated.column = t - 1, this.map.addMapping(a)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t) => t.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
    let t = this.memoizedPaths.get(e);
    if (t) return t;
    let r = this.opts.to ? Pa(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (r = Pa(Zf(r, this.mapOpts.annotation)));
    let a = $f(r, e);
    return this.memoizedPaths.set(e, a), a;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let t = e.source.input.map;
            this.previousMaps.includes(t) || this.previousMaps.push(t);
          }
        });
      else {
        let e = new gp(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let r = t.source.input.from;
          if (r && !e[r]) {
            e[r] = !0;
            let a = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
            this.map.setSourceContent(a, t.source.input.css);
          }
        }
      });
    else if (this.css) {
      let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(t, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let t = this.memoizedFileURLs.get(e);
    if (t) return t;
    if (Ao) {
      let r = Ao(e).toString();
      return this.memoizedFileURLs.set(e, r), r;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t) return t;
    Kf === "\\" && (e = e.replace(/\\/g, "/"));
    let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, r), r;
  }
};
var Jf = yp;
const au = 39, So = 34, pa = 92, Do = 47, ga = 10, fn = 32, ba = 12, va = 9, ya = 13, wp = 91, xp = 93, Ap = 40, Sp = 41, Dp = 123, Ep = 125, kp = 59, _p = 42, Tp = 58, Cp = 64, wa = /[\t\n\f\r "#'()/;[\\\]{}]/g, xa = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Fp = /.[\r\n"'(/\\]/, Eo = /[\da-f]/i;
var Mp = function(e, t = {}) {
  let r = e.css.valueOf(), a = t.ignoreErrors, i, u, l, s, o, h, p, f, m, D, _ = r.length, w = 0, T = [], x = [];
  function y() {
    return w;
  }
  function S(U) {
    throw e.error("Unclosed " + U, w);
  }
  function F() {
    return x.length === 0 && w >= _;
  }
  function L(U) {
    if (x.length) return x.pop();
    if (w >= _) return;
    let z = U ? U.ignoreUnclosed : !1;
    switch (i = r.charCodeAt(w), i) {
      case ga:
      case fn:
      case va:
      case ya:
      case ba: {
        s = w;
        do
          s += 1, i = r.charCodeAt(s);
        while (i === fn || i === ga || i === va || i === ya || i === ba);
        h = ["space", r.slice(w, s)], w = s - 1;
        break;
      }
      case wp:
      case xp:
      case Dp:
      case Ep:
      case Tp:
      case kp:
      case Sp: {
        let B = String.fromCharCode(i);
        h = [B, B, w];
        break;
      }
      case Ap: {
        if (D = T.length ? T.pop()[1] : "", m = r.charCodeAt(w + 1), D === "url" && m !== au && m !== So && m !== fn && m !== ga && m !== va && m !== ba && m !== ya) {
          s = w;
          do {
            if (p = !1, s = r.indexOf(")", s + 1), s === -1)
              if (a || z) {
                s = w;
                break;
              } else
                S("bracket");
            for (f = s; r.charCodeAt(f - 1) === pa; )
              f -= 1, p = !p;
          } while (p);
          h = ["brackets", r.slice(w, s + 1), w, s], w = s;
        } else
          s = r.indexOf(")", w + 1), u = r.slice(w, s + 1), s === -1 || Fp.test(u) ? h = ["(", "(", w] : (h = ["brackets", u, w, s], w = s);
        break;
      }
      case au:
      case So: {
        o = i === au ? "'" : '"', s = w;
        do {
          if (p = !1, s = r.indexOf(o, s + 1), s === -1)
            if (a || z) {
              s = w + 1;
              break;
            } else
              S("string");
          for (f = s; r.charCodeAt(f - 1) === pa; )
            f -= 1, p = !p;
        } while (p);
        h = ["string", r.slice(w, s + 1), w, s], w = s;
        break;
      }
      case Cp: {
        wa.lastIndex = w + 1, wa.test(r), wa.lastIndex === 0 ? s = r.length - 1 : s = wa.lastIndex - 2, h = ["at-word", r.slice(w, s + 1), w, s], w = s;
        break;
      }
      case pa: {
        for (s = w, l = !0; r.charCodeAt(s + 1) === pa; )
          s += 1, l = !l;
        if (i = r.charCodeAt(s + 1), l && i !== Do && i !== fn && i !== ga && i !== va && i !== ya && i !== ba && (s += 1, Eo.test(r.charAt(s)))) {
          for (; Eo.test(r.charAt(s + 1)); )
            s += 1;
          r.charCodeAt(s + 1) === fn && (s += 1);
        }
        h = ["word", r.slice(w, s + 1), w, s], w = s;
        break;
      }
      default: {
        i === Do && r.charCodeAt(w + 1) === _p ? (s = r.indexOf("*/", w + 2) + 1, s === 0 && (a || z ? s = r.length : S("comment")), h = ["comment", r.slice(w, s + 1), w, s], w = s) : (xa.lastIndex = w + 1, xa.test(r), xa.lastIndex === 0 ? s = r.length - 1 : s = xa.lastIndex - 2, h = ["word", r.slice(w, s + 1), w, s], T.push(h), w = s);
        break;
      }
    }
    return w++, h;
  }
  function I(U) {
    x.push(U);
  }
  return {
    back: I,
    endOfFile: F,
    nextToken: L,
    position: y
  };
};
let Np = tl, Op = _i, Ip = Ti, Rp = Jn, ko = nl, Lp = Mp;
const _o = {
  empty: !0,
  space: !0
};
function Bp(n) {
  for (let e = n.length - 1; e >= 0; e--) {
    let t = n[e], r = t[3] || t[2];
    if (r) return r;
  }
}
let zp = class {
  constructor(e) {
    this.input = e, this.root = new Rp(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new Np();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let r, a, i, u = !1, l = !1, s = [], o = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), r = e[0], r === "(" || r === "[" ? o.push(r === "(" ? ")" : "]") : r === "{" && o.length > 0 ? o.push("}") : r === o[o.length - 1] && o.pop(), o.length === 0)
        if (r === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (r === "{") {
          l = !0;
          break;
        } else if (r === "}") {
          if (s.length > 0) {
            for (i = s.length - 1, a = s[i]; a && a[0] === "space"; )
              a = s[--i];
            a && (t.source.end = this.getPosition(a[3] || a[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          s.push(e);
      else
        s.push(e);
      if (this.tokenizer.endOfFile()) {
        u = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(s), s.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(s), this.raw(t, "params", s), u && (e = s[s.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), l && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let r = 0, a;
    for (let i = t - 1; i >= 0 && (a = e[i], !(a[0] !== "space" && (r += 1, r === 2))); i--)
      ;
    throw this.input.error(
      "Missed semicolon",
      a[0] === "word" ? a[3] + 1 : a[2]
    );
  }
  colon(e) {
    let t = 0, r, a, i;
    for (let [u, l] of e.entries()) {
      if (a = l, i = a[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!r)
          this.doubleColon(a);
        else {
          if (r[0] === "word" && r[1] === "progid")
            continue;
          return u;
        }
      r = a;
    }
    return !1;
  }
  comment(e) {
    let t = new Op();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let r = e[1].slice(2, -2);
    if (/^\s*$/.test(r))
      t.text = "", t.raws.left = r, t.raws.right = "";
    else {
      let a = r.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = a[2], t.raws.left = a[1], t.raws.right = a[3];
    }
  }
  createTokenizer() {
    this.tokenizer = Lp(this.input);
  }
  decl(e, t) {
    let r = new Ip();
    this.init(r, e[0][2]);
    let a = e[e.length - 1];
    for (a[0] === ";" && (this.semicolon = !0, e.pop()), r.source.end = this.getPosition(
      a[3] || a[2] || Bp(e)
    ), r.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), r.raws.before += e.shift()[1];
    for (r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length; ) {
      let o = e[0][0];
      if (o === ":" || o === "space" || o === "comment")
        break;
      r.prop += e.shift()[1];
    }
    r.raws.between = "";
    let i;
    for (; e.length; )
      if (i = e.shift(), i[0] === ":") {
        r.raws.between += i[1];
        break;
      } else
        i[0] === "word" && /\w/.test(i[1]) && this.unknownWord([i]), r.raws.between += i[1];
    (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
    let u = [], l;
    for (; e.length && (l = e[0][0], !(l !== "space" && l !== "comment")); )
      u.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let o = e.length - 1; o >= 0; o--) {
      if (i = e[o], i[1].toLowerCase() === "!important") {
        r.important = !0;
        let h = this.stringFrom(e, o);
        h = this.spacesFromEnd(e) + h, h !== " !important" && (r.raws.important = h);
        break;
      } else if (i[1].toLowerCase() === "important") {
        let h = e.slice(0), p = "";
        for (let f = o; f > 0; f--) {
          let m = h[f][0];
          if (p.trim().startsWith("!") && m !== "space")
            break;
          p = h.pop()[1] + p;
        }
        p.trim().startsWith("!") && (r.important = !0, r.raws.important = p, e = h);
      }
      if (i[0] !== "space" && i[0] !== "comment")
        break;
    }
    e.some((o) => o[0] !== "space" && o[0] !== "comment") && (r.raws.between += u.map((o) => o[1]).join(""), u = []), this.raw(r, "value", u.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new ko();
    this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return {
      column: t.col,
      line: t.line,
      offset: e
    };
  }
  init(e, t) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(t)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1, r = null, a = !1, i = null, u = [], l = e[1].startsWith("--"), s = [], o = e;
    for (; o; ) {
      if (r = o[0], s.push(o), r === "(" || r === "[")
        i || (i = o), u.push(r === "(" ? ")" : "]");
      else if (l && a && r === "{")
        i || (i = o), u.push("}");
      else if (u.length === 0)
        if (r === ";")
          if (a) {
            this.decl(s, l);
            return;
          } else
            break;
        else if (r === "{") {
          this.rule(s);
          return;
        } else if (r === "}") {
          this.tokenizer.back(s.pop()), t = !0;
          break;
        } else r === ":" && (a = !0);
      else r === u[u.length - 1] && (u.pop(), u.length === 0 && (i = null));
      o = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), u.length > 0 && this.unclosedBracket(i), t && a) {
      if (!l)
        for (; s.length && (o = s[s.length - 1][0], !(o !== "space" && o !== "comment")); )
          this.tokenizer.back(s.pop());
      this.decl(s, l);
    } else
      this.unknownWord(s);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, t, r, a) {
    let i, u, l = r.length, s = "", o = !0, h, p;
    for (let f = 0; f < l; f += 1)
      i = r[f], u = i[0], u === "space" && f === l - 1 && !a ? o = !1 : u === "comment" ? (p = r[f - 1] ? r[f - 1][0] : "empty", h = r[f + 1] ? r[f + 1][0] : "empty", !_o[p] && !_o[h] ? s.slice(-1) === "," ? o = !1 : s += i[1] : o = !1) : s += i[1];
    if (!o) {
      let f = r.reduce((m, D) => m + D[1], "");
      e.raws[t] = { raw: f, value: s };
    }
    e[t] = s;
  }
  rule(e) {
    e.pop();
    let t = new ko();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      r = e.pop()[1] + r;
    return r;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, r = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      r += e.shift()[1];
    return r;
  }
  spacesFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      r = e.pop()[1] + r;
    return r;
  }
  stringFrom(e, t) {
    let r = "";
    for (let a = t; a < e.length; a++)
      r += e[a][1];
    return e.splice(t, e.length - t), r;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var Pp = zp;
let qp = Ar, Hp = Ci, Up = Pp;
function ci(n, e) {
  let t = new Hp(n, e), r = new Up(t);
  try {
    r.parse();
  } catch (a) {
    throw process.env.NODE_ENV !== "production" && a.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? a.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? a.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (a.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), a;
  }
  return r.root;
}
var al = ci;
ci.default = ci;
qp.registerParse(ci);
let ju = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let r = t.node.rangeBy(t);
      this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
    }
    for (let r in t) this[r] = t[r];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var ed = ju;
ju.default = ju;
let Gp = ed, Vu = class {
  constructor(e, t, r) {
    this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let r = new Gp(e, t);
    return this.messages.push(r), r;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var il = Vu;
Vu.default = Vu;
let To = {};
var td = function(e) {
  To[e] || (To[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let jp = Ar, Vp = rl, Wp = Jf, Xp = al, Co = il, Yp = Jn, $p = Ei, { isClean: v0, my: Zp } = Qn, Kp = td;
const Qp = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Jp = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, e6 = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Lr = 0;
function dn(n) {
  return typeof n == "object" && typeof n.then == "function";
}
function rd(n) {
  let e = !1, t = Qp[n.type];
  return n.type === "decl" ? e = n.prop.toLowerCase() : n.type === "atrule" && (e = n.name.toLowerCase()), e && n.append ? [
    t,
    t + "-" + e,
    Lr,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : n.append ? [t, Lr, t + "Exit"] : [t, t + "Exit"];
}
function Fo(n) {
  let e;
  return n.type === "document" ? e = ["Document", Lr, "DocumentExit"] : n.type === "root" ? e = ["Root", Lr, "RootExit"] : e = rd(n), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: n,
    visitorIndex: 0,
    visitors: []
  };
}
function Wu(n) {
  return n[v0] = !1, n.nodes && n.nodes.forEach((e) => Wu(e)), n;
}
let Xu = {}, Br = class nd {
  constructor(e, t, r) {
    this.stringified = !1, this.processed = !1;
    let a;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      a = Wu(t);
    else if (t instanceof nd || t instanceof Co)
      a = Wu(t.root), t.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = !1), r.map.prev = t.map);
    else {
      let i = Xp;
      r.syntax && (i = r.syntax.parse), r.parser && (i = r.parser), i.parse && (i = i.parse);
      try {
        a = i(t, r);
      } catch (u) {
        this.processed = !0, this.error = u;
      }
      a && !a[Zp] && jp.rebuild(a);
    }
    this.result = new Co(e, a, r), this.helpers = { ...Xu, postcss: Xu, result: this.result }, this.plugins = this.processor.plugins.map((i) => typeof i == "object" && i.prepare ? { ...i, ...i.prepare(this.result) } : i);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, t) {
    let r = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = r.postcssPlugin, e.setMessage();
      else if (r.postcssVersion && process.env.NODE_ENV !== "production") {
        let a = r.postcssPlugin, i = r.postcssVersion, u = this.result.processor.version, l = i.split("."), s = u.split(".");
        (l[0] !== s[0] || parseInt(l[1]) > parseInt(s[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + u + ", but " + a + " uses " + i + ". Perhaps this is the source of the error below."
        );
      }
    } catch (a) {
      console && console.error && console.error(a);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, r, a) => {
      this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([t, a]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let r in t) {
          if (!Jp[r] && /^[A-Z]/.test(r))
            throw new Error(
              `Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!e6[r])
            if (typeof t[r] == "object")
              for (let a in t[r])
                a === "*" ? e(t, r, t[r][a]) : e(
                  t,
                  r + "-" + a.toLowerCase(),
                  t[r][a]
                );
            else typeof t[r] == "function" && e(t, r, t[r]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], r = this.runOnRoot(t);
      if (dn(r))
        try {
          await r;
        } catch (a) {
          throw this.handleError(a);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[v0]; ) {
        e[v0] = !0;
        let t = [Fo(e)];
        for (; t.length > 0; ) {
          let r = this.visitTick(t);
          if (dn(r))
            try {
              await r;
            } catch (a) {
              let i = t[t.length - 1].node;
              throw this.handleError(a, i);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, r] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let a = e.nodes.map(
                (i) => r(i, this.helpers)
              );
              await Promise.all(a);
            } else
              await r(e, this.helpers);
          } catch (a) {
            throw this.handleError(a);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let t = this.result.root.nodes.map(
            (r) => e.Once(r, this.helpers)
          );
          return dn(t[0]) ? Promise.all(t) : t;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (t) {
      throw this.handleError(t);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, t = $p;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let a = new Wp(t, this.result.root, this.result.opts).generate();
    return this.result.css = a[0], this.result.map = a[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (dn(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[v0]; )
        e[v0] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let t of e.nodes)
            this.visitSync(this.listeners.OnceExit, t);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Kp(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [r, a] of e) {
      this.result.lastPlugin = r;
      let i;
      try {
        i = a(t, this.helpers);
      } catch (u) {
        throw this.handleError(u, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (dn(i))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: r, visitors: a } = t;
    if (r.type !== "root" && r.type !== "document" && !r.parent) {
      e.pop();
      return;
    }
    if (a.length > 0 && t.visitorIndex < a.length) {
      let [u, l] = a[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === a.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = u;
      try {
        return l(r.toProxy(), this.helpers);
      } catch (s) {
        throw this.handleError(s, r);
      }
    }
    if (t.iterator !== 0) {
      let u = t.iterator, l;
      for (; l = r.nodes[r.indexes[u]]; )
        if (r.indexes[u] += 1, !l[v0]) {
          l[v0] = !0, e.push(Fo(l));
          return;
        }
      t.iterator = 0, delete r.indexes[u];
    }
    let i = t.events;
    for (; t.eventIndex < i.length; ) {
      let u = i[t.eventIndex];
      if (t.eventIndex += 1, u === Lr) {
        r.nodes && r.nodes.length && (r[v0] = !0, t.iterator = r.getIterator());
        return;
      } else if (this.listeners[u]) {
        t.visitors = this.listeners[u];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[v0] = !0;
    let t = rd(e);
    for (let r of t)
      if (r === Lr)
        e.nodes && e.each((a) => {
          a[v0] || this.walkSync(a);
        });
      else {
        let a = this.listeners[r];
        if (a && this.visitSync(a, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
Br.registerPostcss = (n) => {
  Xu = n;
};
var ad = Br;
Br.default = Br;
Yp.registerLazyResult(Br);
Vp.registerLazyResult(Br);
let t6 = Jf, r6 = al;
const n6 = il;
let a6 = Ei, i6 = td, Yu = class {
  constructor(e, t, r) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
    let a, i = a6;
    this.result = new n6(this._processor, a, this._opts), this.result.css = t;
    let u = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return u.root;
      }
    });
    let l = new t6(i, a, this._opts, t);
    if (l.isMap()) {
      let [s, o] = l.generate();
      s && (this.result.css = s), o && (this.result.map = o);
    } else
      l.clearAnnotation(), this.result.css = l.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || i6(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, t = r6;
    try {
      e = t(this._css, this._opts);
    } catch (r) {
      this.error = r;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var u6 = Yu;
Yu.default = Yu;
let s6 = rl, l6 = ad, o6 = u6, c6 = Jn, Un = class {
  constructor(e = []) {
    this.version = "8.4.47", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let r of e)
      if (r.postcss === !0 ? r = r() : r.postcss && (r = r.postcss), typeof r == "object" && Array.isArray(r.plugins))
        t = t.concat(r.plugins);
      else if (typeof r == "object" && r.postcssPlugin)
        t.push(r);
      else if (typeof r == "function")
        t.push(r);
      else if (typeof r == "object" && (r.parse || r.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(r + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new o6(this, e, t) : new l6(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var f6 = Un;
Un.default = Un;
c6.registerProcessor(Un);
s6.registerProcessor(Un);
let id = tl, ud = _i, d6 = Ar, h6 = Qs, sd = Ti, ld = rl, m6 = pp, p6 = Ci, g6 = ad, b6 = Xf, v6 = ki, y6 = al, ul = f6, w6 = il, od = Jn, cd = nl, x6 = Ei, A6 = ed;
function Me(...n) {
  return n.length === 1 && Array.isArray(n[0]) && (n = n[0]), new ul(n);
}
Me.plugin = function(e, t) {
  let r = !1;
  function a(...u) {
    console && console.warn && !r && (r = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let l = t(...u);
    return l.postcssPlugin = e, l.postcssVersion = new ul().version, l;
  }
  let i;
  return Object.defineProperty(a, "postcss", {
    get() {
      return i || (i = a()), i;
    }
  }), a.process = function(u, l, s) {
    return Me([a(s)]).process(u, l);
  }, a;
};
Me.stringify = x6;
Me.parse = y6;
Me.fromJSON = m6;
Me.list = b6;
Me.comment = (n) => new ud(n);
Me.atRule = (n) => new id(n);
Me.decl = (n) => new sd(n);
Me.rule = (n) => new cd(n);
Me.root = (n) => new od(n);
Me.document = (n) => new ld(n);
Me.CssSyntaxError = h6;
Me.Declaration = sd;
Me.Container = d6;
Me.Processor = ul;
Me.Document = ld;
Me.Comment = ud;
Me.Warning = A6;
Me.AtRule = id;
Me.Result = w6;
Me.Input = p6;
Me.Rule = cd;
Me.Root = od;
Me.Node = v6;
g6.registerPostcss(Me);
var S6 = Me;
Me.default = Me;
const D6 = Qc, Mo = v3, { isPlainObject: E6 } = Zs, No = O3, k6 = I3, { parse: _6 } = S6, T6 = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], C6 = ["script", "style"];
function En(n, e) {
  n && Object.keys(n).forEach(function(t) {
    e(n[t], t);
  });
}
function L0(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function Oo(n, e) {
  const t = [];
  return En(n, function(r) {
    e(r) && t.push(r);
  }), t;
}
function F6(n) {
  for (const e in n)
    if (L0(n, e))
      return !1;
  return !0;
}
function M6(n) {
  return n.map(function(e) {
    if (!e.url)
      throw new Error("URL missing");
    return e.url + (e.w ? ` ${e.w}w` : "") + (e.h ? ` ${e.h}h` : "") + (e.d ? ` ${e.d}x` : "");
  }).join(", ");
}
var N6 = Gn;
const O6 = /^[^\0\t\n\f\r /<=>]+$/;
function Gn(n, e, t) {
  if (n == null)
    return "";
  typeof n == "number" && (n = n.toString());
  let r = "", a = "";
  function i(N, H) {
    const j = this;
    this.tag = N, this.attribs = H || {}, this.tagPosition = r.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
      if (w.length) {
        const $ = w[w.length - 1];
        $.text += j.text;
      }
    }, this.updateParentNodeMediaChildren = function() {
      w.length && T6.includes(this.tag) && w[w.length - 1].mediaChildren.push(this.tag);
    };
  }
  e = Object.assign({}, Gn.defaults, e), e.parser = Object.assign({}, I6, e.parser);
  const u = function(N) {
    return e.allowedTags === !1 || (e.allowedTags || []).indexOf(N) > -1;
  };
  C6.forEach(function(N) {
    u(N) && !e.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${N}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const l = e.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let s, o;
  e.allowedAttributes && (s = {}, o = {}, En(e.allowedAttributes, function(N, H) {
    s[H] = [];
    const j = [];
    N.forEach(function($) {
      typeof $ == "string" && $.indexOf("*") >= 0 ? j.push(Mo($).replace(/\\\*/g, ".*")) : s[H].push($);
    }), j.length && (o[H] = new RegExp("^(" + j.join("|") + ")$"));
  }));
  const h = {}, p = {}, f = {};
  En(e.allowedClasses, function(N, H) {
    if (s && (L0(s, H) || (s[H] = []), s[H].push("class")), h[H] = N, Array.isArray(N)) {
      const j = [];
      h[H] = [], f[H] = [], N.forEach(function($) {
        typeof $ == "string" && $.indexOf("*") >= 0 ? j.push(Mo($).replace(/\\\*/g, ".*")) : $ instanceof RegExp ? f[H].push($) : h[H].push($);
      }), j.length && (p[H] = new RegExp("^(" + j.join("|") + ")$"));
    }
  });
  const m = {};
  let D;
  En(e.transformTags, function(N, H) {
    let j;
    typeof N == "function" ? j = N : typeof N == "string" && (j = Gn.simpleTransform(N)), H === "*" ? D = j : m[H] = j;
  });
  let _, w, T, x, y, S, F = !1;
  I();
  const L = new D6.Parser({
    onopentag: function(N, H) {
      if (e.enforceHtmlBoundary && N === "html" && I(), y) {
        S++;
        return;
      }
      const j = new i(N, H);
      w.push(j);
      let $ = !1;
      const ce = !!j.text;
      let ae;
      if (L0(m, N) && (ae = m[N](N, H), j.attribs = H = ae.attribs, ae.text !== void 0 && (j.innerText = ae.text), N !== ae.tagName && (j.name = N = ae.tagName, x[_] = ae.tagName)), D && (ae = D(N, H), j.attribs = H = ae.attribs, N !== ae.tagName && (j.name = N = ae.tagName, x[_] = ae.tagName)), (!u(N) || e.disallowedTagsMode === "recursiveEscape" && !F6(T) || e.nestingLimit != null && _ >= e.nestingLimit) && ($ = !0, T[_] = !0, (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && l.indexOf(N) !== -1 && (y = !0, S = 1), T[_] = !0), _++, $) {
        if (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard")
          return;
        a = r, r = "";
      }
      r += "<" + N, N === "script" && (e.allowedScriptHostnames || e.allowedScriptDomains) && (j.innerText = ""), (!s || L0(s, N) || s["*"]) && En(H, function(R, re) {
        if (!O6.test(re)) {
          delete j.attribs[re];
          return;
        }
        if (R === "" && !e.allowedEmptyAttributes.includes(re) && (e.nonBooleanAttributes.includes(re) || e.nonBooleanAttributes.includes("*"))) {
          delete j.attribs[re];
          return;
        }
        let ie = !1;
        if (!s || L0(s, N) && s[N].indexOf(re) !== -1 || s["*"] && s["*"].indexOf(re) !== -1 || L0(o, N) && o[N].test(re) || o["*"] && o["*"].test(re))
          ie = !0;
        else if (s && s[N]) {
          for (const ue of s[N])
            if (E6(ue) && ue.name && ue.name === re) {
              ie = !0;
              let q = "";
              if (ue.multiple === !0) {
                const Q = R.split(" ");
                for (const ee of Q)
                  ue.values.indexOf(ee) !== -1 && (q === "" ? q = ee : q += " " + ee);
              } else ue.values.indexOf(R) >= 0 && (q = R);
              R = q;
            }
        }
        if (ie) {
          if (e.allowedSchemesAppliedToAttributes.indexOf(re) !== -1 && z(N, R)) {
            delete j.attribs[re];
            return;
          }
          if (N === "script" && re === "src") {
            let ue = !0;
            try {
              const q = B(R);
              if (e.allowedScriptHostnames || e.allowedScriptDomains) {
                const Q = (e.allowedScriptHostnames || []).find(function(ye) {
                  return ye === q.url.hostname;
                }), ee = (e.allowedScriptDomains || []).find(function(ye) {
                  return q.url.hostname === ye || q.url.hostname.endsWith(`.${ye}`);
                });
                ue = Q || ee;
              }
            } catch {
              ue = !1;
            }
            if (!ue) {
              delete j.attribs[re];
              return;
            }
          }
          if (N === "iframe" && re === "src") {
            let ue = !0;
            try {
              const q = B(R);
              if (q.isRelativeUrl)
                ue = L0(e, "allowIframeRelativeUrls") ? e.allowIframeRelativeUrls : !e.allowedIframeHostnames && !e.allowedIframeDomains;
              else if (e.allowedIframeHostnames || e.allowedIframeDomains) {
                const Q = (e.allowedIframeHostnames || []).find(function(ye) {
                  return ye === q.url.hostname;
                }), ee = (e.allowedIframeDomains || []).find(function(ye) {
                  return q.url.hostname === ye || q.url.hostname.endsWith(`.${ye}`);
                });
                ue = Q || ee;
              }
            } catch {
              ue = !1;
            }
            if (!ue) {
              delete j.attribs[re];
              return;
            }
          }
          if (re === "srcset")
            try {
              let ue = k6(R);
              if (ue.forEach(function(q) {
                z("srcset", q.url) && (q.evil = !0);
              }), ue = Oo(ue, function(q) {
                return !q.evil;
              }), ue.length)
                R = M6(Oo(ue, function(q) {
                  return !q.evil;
                })), j.attribs[re] = R;
              else {
                delete j.attribs[re];
                return;
              }
            } catch {
              delete j.attribs[re];
              return;
            }
          if (re === "class") {
            const ue = h[N], q = h["*"], Q = p[N], ee = f[N], ye = f["*"], Te = p["*"], Le = [
              Q,
              Te
            ].concat(ee, ye).filter(function(Be) {
              return Be;
            });
            if (ue && q ? R = Z(R, No(ue, q), Le) : R = Z(R, ue || q, Le), !R.length) {
              delete j.attribs[re];
              return;
            }
          }
          if (re === "style") {
            if (e.parseStyleAttributes)
              try {
                const ue = _6(N + " {" + R + "}", { map: !1 }), q = k(ue, e.allowedStyles);
                if (R = P(q), R.length === 0) {
                  delete j.attribs[re];
                  return;
                }
              } catch {
                typeof window < "u" && console.warn('Failed to parse "' + N + " {" + R + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete j.attribs[re];
                return;
              }
            else if (e.allowedStyles)
              throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
          }
          r += " " + re, R && R.length ? r += '="' + U(R, !0) + '"' : e.allowedEmptyAttributes.includes(re) && (r += '=""');
        } else
          delete j.attribs[re];
      }), e.selfClosing.indexOf(N) !== -1 ? r += " />" : (r += ">", j.innerText && !ce && !e.textFilter && (r += U(j.innerText), F = !0)), $ && (r = a + U(r), a = "");
    },
    ontext: function(N) {
      if (y)
        return;
      const H = w[w.length - 1];
      let j;
      if (H && (j = H.tag, N = H.innerText !== void 0 ? H.innerText : N), e.disallowedTagsMode === "completelyDiscard" && !u(j))
        N = "";
      else if ((e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && (j === "script" || j === "style"))
        r += N;
      else {
        const $ = U(N, !1);
        e.textFilter && !F ? r += e.textFilter($, j) : F || (r += $);
      }
      if (w.length) {
        const $ = w[w.length - 1];
        $.text += N;
      }
    },
    onclosetag: function(N, H) {
      if (y)
        if (S--, !S)
          y = !1;
        else
          return;
      const j = w.pop();
      if (!j)
        return;
      if (j.tag !== N) {
        w.push(j);
        return;
      }
      y = e.enforceHtmlBoundary ? N === "html" : !1, _--;
      const $ = T[_];
      if ($) {
        if (delete T[_], e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") {
          j.updateParentNodeText();
          return;
        }
        a = r, r = "";
      }
      if (x[_] && (N = x[_], delete x[_]), e.exclusiveFilter && e.exclusiveFilter(j)) {
        r = r.substr(0, j.tagPosition);
        return;
      }
      if (j.updateParentNodeMediaChildren(), j.updateParentNodeText(), // Already output />
      e.selfClosing.indexOf(N) !== -1 || // Escaped tag, closing tag is implied
      H && !u(N) && ["escape", "recursiveEscape"].indexOf(e.disallowedTagsMode) >= 0) {
        $ && (r = a, a = "");
        return;
      }
      r += "</" + N + ">", $ && (r = a + U(r), a = ""), F = !1;
    }
  }, e.parser);
  return L.write(n), L.end(), r;
  function I() {
    r = "", _ = 0, w = [], T = {}, x = {}, y = !1, S = 0;
  }
  function U(N, H) {
    return typeof N != "string" && (N = N + ""), e.parser.decodeEntities && (N = N.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), H && (N = N.replace(/"/g, "&quot;"))), N = N.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), H && (N = N.replace(/"/g, "&quot;")), N;
  }
  function z(N, H) {
    for (H = H.replace(/[\x00-\x20]+/g, ""); ; ) {
      const ce = H.indexOf("<!--");
      if (ce === -1)
        break;
      const ae = H.indexOf("-->", ce + 4);
      if (ae === -1)
        break;
      H = H.substring(0, ce) + H.substring(ae + 3);
    }
    const j = H.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!j)
      return H.match(/^[/\\]{2}/) ? !e.allowProtocolRelative : !1;
    const $ = j[1].toLowerCase();
    return L0(e.allowedSchemesByTag, N) ? e.allowedSchemesByTag[N].indexOf($) === -1 : !e.allowedSchemes || e.allowedSchemes.indexOf($) === -1;
  }
  function B(N) {
    if (N = N.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), N.startsWith("relative:"))
      throw new Error("relative: exploit attempt");
    let H = "relative://relative-site";
    for (let ce = 0; ce < 100; ce++)
      H += `/${ce}`;
    const j = new URL(N, H);
    return {
      isRelativeUrl: j && j.hostname === "relative-site" && j.protocol === "relative:",
      url: j
    };
  }
  function k(N, H) {
    if (!H)
      return N;
    const j = N.nodes[0];
    let $;
    return H[j.selector] && H["*"] ? $ = No(
      H[j.selector],
      H["*"]
    ) : $ = H[j.selector] || H["*"], $ && (N.nodes[0].nodes = j.nodes.reduce(G($), [])), N;
  }
  function P(N) {
    return N.nodes[0].nodes.reduce(function(H, j) {
      return H.push(
        `${j.prop}:${j.value}${j.important ? " !important" : ""}`
      ), H;
    }, []).join(";");
  }
  function G(N) {
    return function(H, j) {
      return L0(N, j.prop) && N[j.prop].some(function(ce) {
        return ce.test(j.value);
      }) && H.push(j), H;
    };
  }
  function Z(N, H, j) {
    return H ? (N = N.split(/\s+/), N.filter(function($) {
      return H.indexOf($) !== -1 || j.some(function(ce) {
        return ce.test($);
      });
    }).join(" ")) : N;
  }
}
const I6 = {
  decodeEntities: !0
};
Gn.defaults = {
  allowedTags: [
    // Sections derived from MDN element categories and limited to the more
    // benign categories.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    // Content sectioning
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    // Text content
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    // Inline text semantics
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    // Table content
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  // Tags that cannot be boolean
  nonBooleanAttributes: [
    "abbr",
    "accept",
    "accept-charset",
    "accesskey",
    "action",
    "allow",
    "alt",
    "as",
    "autocapitalize",
    "autocomplete",
    "blocking",
    "charset",
    "cite",
    "class",
    "color",
    "cols",
    "colspan",
    "content",
    "contenteditable",
    "coords",
    "crossorigin",
    "data",
    "datetime",
    "decoding",
    "dir",
    "dirname",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "fetchpriority",
    "for",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formtarget",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "http-equiv",
    "id",
    "imagesizes",
    "imagesrcset",
    "inputmode",
    "integrity",
    "is",
    "itemid",
    "itemprop",
    "itemref",
    "itemtype",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "name",
    "nonce",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "referrerpolicy",
    "rel",
    "rows",
    "rowspan",
    "sandbox",
    "scope",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "spellcheck",
    "src",
    "srcdoc",
    "srclang",
    "srcset",
    "start",
    "step",
    "style",
    "tabindex",
    "target",
    "title",
    "translate",
    "type",
    "usemap",
    "value",
    "width",
    "wrap",
    // Event handlers
    "onauxclick",
    "onafterprint",
    "onbeforematch",
    "onbeforeprint",
    "onbeforeunload",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onlanguagechange",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmessage",
    "onmessageerror",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onrejectionhandled",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onstorage",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onunhandledrejection",
    "onunload",
    "onvolumechange",
    "onwaiting",
    "onwheel"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    // We don't currently allow img itself by default, but
    // these attributes would make sense if we did.
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  allowedEmptyAttributes: [
    "alt"
  ],
  // Lots of these won't come up by default because we don't allow them
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  // URL schemes we permit
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1,
  parseStyleAttributes: !0
};
Gn.simpleTransform = function(n, e, t) {
  return t = t === void 0 ? !0 : t, e = e || {}, function(r, a) {
    let i;
    if (t)
      for (i in e)
        a[i] = e[i];
    else
      a = e;
    return {
      tagName: n,
      attribs: a
    };
  };
};
const R6 = /* @__PURE__ */ rm(N6), $u = (n) => JSON.parse(JSON.stringify(n)), L6 = (n) => n.nodeType === 1, B6 = (n) => a5.has(n.tagName), z6 = (n) => "action" in n, P6 = (n) => n.tagName === "IFRAME", q6 = (n) => "formAction" in n, H6 = (n) => "protocol" in n, Aa = /* @__PURE__ */ (() => {
  const n = /^(?:\w+script|data):/i;
  return (e) => n.test(e);
})(), U6 = /* @__PURE__ */ (() => {
  const n = /(?:script|data):/i;
  return (e) => n.test(e);
})(), G6 = (n) => {
  const e = {};
  for (let t = 0, r = n.length; t < r; t++) {
    const a = n[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, fd = (n, e) => {
  let t = n.firstChild;
  for (; t; ) {
    const r = t.nextSibling;
    L6(t) && (e(t, n), t.parentNode && fd(t, e)), t = r;
  }
}, j6 = (n, e) => {
  const t = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = t.nextNode(); ) {
    const a = r.parentNode;
    a && e(r, a);
  }
}, V6 = (n, e) => !!globalThis.document && !!globalThis.document.createNodeIterator ? j6(n, e) : fd(n, e), dd = [
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "popup",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "selectmenu",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], W6 = [
  "basefont",
  "command",
  "data",
  "iframe",
  "image",
  "plaintext",
  "portal",
  "slot",
  // 'template', //TODO: Not exactly correct to never allow this, too strict
  "textarea",
  "title",
  "xmp"
], X6 = /* @__PURE__ */ new Set([
  ...dd,
  ...W6
]), hd = [
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
  /* FILTERS */
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
], Y6 = [
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "fedropshadow",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
], $6 = /* @__PURE__ */ new Set([
  ...hd,
  ...Y6
]), md = [
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover"
], Z6 = [
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
], K6 = /* @__PURE__ */ new Set([
  ...md,
  ...Z6
]), Q6 = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], J6 = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], e5 = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
], d0 = {
  HTML: "http://www.w3.org/1999/xhtml",
  SVG: "http://www.w3.org/2000/svg",
  MATH: "http://www.w3.org/1998/Math/MathML"
}, t5 = {
  [d0.HTML]: X6,
  [d0.SVG]: $6,
  [d0.MATH]: K6
}, r5 = {
  [d0.HTML]: "html",
  [d0.SVG]: "svg",
  [d0.MATH]: "math"
}, n5 = {
  [d0.HTML]: "",
  [d0.SVG]: "svg:",
  [d0.MATH]: "math:"
}, a5 = /* @__PURE__ */ new Set([
  "A",
  "AREA",
  "BUTTON",
  "FORM",
  "IFRAME",
  "INPUT"
]), pd = {
  allowComments: !0,
  allowCustomElements: !1,
  allowUnknownMarkup: !1,
  allowElements: [
    ...dd,
    ...hd.map((n) => `svg:${n}`),
    ...md.map((n) => `math:${n}`)
  ],
  allowAttributes: G6([
    Object.fromEntries(Q6.map((n) => [n, ["*"]])),
    Object.fromEntries(J6.map((n) => [n, ["svg:*"]])),
    Object.fromEntries(e5.map((n) => [n, ["math:*"]]))
  ])
};
var iu = function(n, e, t, r, a) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? n !== e || !a : !e.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? a.call(n, t) : a ? a.value = t : e.set(n, t), t;
}, dr = function(n, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? n !== e || !r : !e.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(n) : r ? r.value : e.get(n);
}, Z0, Ha, Ua;
class gd {
  /* CONSTRUCTOR */
  constructor(e = {}) {
    Z0.set(this, void 0), Ha.set(this, void 0), Ua.set(this, void 0), this.getConfiguration = () => $u(dr(this, Z0, "f")), this.sanitize = (h) => {
      const p = dr(this, Ha, "f"), f = dr(this, Ua, "f");
      return V6(h, (m, D) => {
        const _ = m.namespaceURI || d0.HTML, w = D.namespaceURI || d0.HTML, T = t5[_], x = r5[_], y = n5[_], S = m.tagName.toLowerCase(), F = `${y}${S}`, I = `${y}*`;
        if (!T.has(S) || !p.has(F) || _ !== w && S !== x)
          D.removeChild(m);
        else {
          const U = m.getAttributeNames(), z = U.length;
          if (z) {
            for (let B = 0; B < z; B++) {
              const k = U[B], P = f[k];
              (!P || !P.has(I) && !P.has(F)) && m.removeAttribute(k);
            }
            if (B6(m))
              if (H6(m)) {
                const B = m.getAttribute("href");
                B && U6(B) && Aa(m.protocol) && m.removeAttribute("href");
              } else z6(m) ? Aa(m.action) && m.removeAttribute("action") : q6(m) ? Aa(m.formAction) && m.removeAttribute("formaction") : P6(m) && (Aa(m.src) && m.removeAttribute("formaction"), m.setAttribute("sandbox", "allow-scripts"));
          }
        }
      }), h;
    }, this.sanitizeFor = (h, p) => {
      throw new Error('"sanitizeFor" is not implemented yet');
    };
    const { allowComments: t, allowCustomElements: r, allowUnknownMarkup: a, blockElements: i, dropElements: u, dropAttributes: l } = e;
    if (t === !1)
      throw new Error('A false "allowComments" is not supported yet');
    if (r)
      throw new Error('A true "allowCustomElements" is not supported yet');
    if (a)
      throw new Error('A true "allowUnknownMarkup" is not supported yet');
    if (i)
      throw new Error('"blockElements" is not supported yet, use "allowElements" instead');
    if (u)
      throw new Error('"dropElements" is not supported yet, use "allowElements" instead');
    if (l)
      throw new Error('"dropAttributes" is not supported yet, use "allowAttributes" instead');
    iu(this, Z0, $u(pd), "f");
    const { allowElements: s, allowAttributes: o } = e;
    s && (dr(this, Z0, "f").allowElements = e.allowElements), o && (dr(this, Z0, "f").allowAttributes = e.allowAttributes), iu(this, Ha, new Set(dr(this, Z0, "f").allowElements), "f"), iu(this, Ua, Object.fromEntries(Object.entries(dr(this, Z0, "f").allowAttributes || {}).map(([h, p]) => [h, new Set(p)])), "f");
  }
}
Z0 = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap();
gd.getDefaultConfiguration = () => $u(pd);
const {
  HtmlTagHydration: i5,
  SvelteComponent: u5,
  attr: s5,
  binding_callbacks: l5,
  children: o5,
  claim_element: c5,
  claim_html_tag: f5,
  detach: Io,
  element: d5,
  init: h5,
  insert_hydration: m5,
  noop: Ro,
  safe_not_equal: p5,
  toggle_class: Sa
} = window.__gradio__svelte__internal, { afterUpdate: g5 } = window.__gradio__svelte__internal;
function b5(n) {
  let e, t;
  return {
    c() {
      e = d5("span"), t = new i5(!1), this.h();
    },
    l(r) {
      e = c5(r, "SPAN", { class: !0 });
      var a = o5(e);
      t = f5(a, !1), a.forEach(Io), this.h();
    },
    h() {
      t.a = null, s5(e, "class", "md svelte-1m32c2s"), Sa(
        e,
        "chatbot",
        /*chatbot*/
        n[0]
      ), Sa(
        e,
        "prose",
        /*render_markdown*/
        n[1]
      );
    },
    m(r, a) {
      m5(r, e, a), t.m(
        /*html*/
        n[3],
        e
      ), n[10](e);
    },
    p(r, [a]) {
      a & /*html*/
      8 && t.p(
        /*html*/
        r[3]
      ), a & /*chatbot*/
      1 && Sa(
        e,
        "chatbot",
        /*chatbot*/
        r[0]
      ), a & /*render_markdown*/
      2 && Sa(
        e,
        "prose",
        /*render_markdown*/
        r[1]
      );
    },
    i: Ro,
    o: Ro,
    d(r) {
      r && Io(e), n[10](null);
    }
  };
}
function bd(n, e, t) {
  n && (n.nodeName === e || typeof e == "function") && t(n);
  const r = (n == null ? void 0 : n.childNodes) || [];
  for (let a = 0; a < r.length; a++)
    bd(r[a], e, t);
}
function Lo(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function v5(n, e, t) {
  var r = this && this.__awaiter || function(I, U, z, B) {
    function k(P) {
      return P instanceof z ? P : new z(function(G) {
        G(P);
      });
    }
    return new (z || (z = Promise))(function(P, G) {
      function Z(j) {
        try {
          H(B.next(j));
        } catch ($) {
          G($);
        }
      }
      function N(j) {
        try {
          H(B.throw(j));
        } catch ($) {
          G($);
        }
      }
      function H(j) {
        j.done ? P(j.value) : k(j.value).then(Z, N);
      }
      H((B = B.apply(I, U || [])).next());
    });
  };
  let { chatbot: a = !0 } = e, { message: i } = e, { sanitize_html: u = !0 } = e, { latex_delimiters: l = [] } = e, { render_markdown: s = !0 } = e, { line_breaks: o = !0 } = e, { header_links: h = !1 } = e, { root: p } = e, f, m;
  const D = hm({
    header_links: h,
    line_breaks: o,
    latex_delimiters: l
  }), _ = new gd();
  let T = typeof window < "u" ? x : R6;
  function x(I) {
    const U = new DOMParser().parseFromString(I, "text/html");
    return bd(U.body, "A", (z) => {
      z instanceof HTMLElement && "target" in z && y(z.getAttribute("href")) && (z.setAttribute("target", "_blank"), z.setAttribute("rel", "noopener noreferrer"));
    }), _.sanitize(U).body.innerHTML;
  }
  const y = (I) => {
    try {
      return !!I && new URL(I).origin !== new URL(p).origin;
    } catch {
      return !1;
    }
  };
  function S(I) {
    let U = I;
    if (s) {
      const z = [];
      l.forEach((B, k) => {
        const P = Lo(B.left), G = Lo(B.right), Z = new RegExp(`${P}([\\s\\S]+?)${G}`, "g");
        U = U.replace(Z, (N, H) => (z.push(N), `%%%LATEX_BLOCK_${z.length - 1}%%%`));
      }), U = D.parse(U), U = U.replace(/%%%LATEX_BLOCK_(\d+)%%%/g, (B, k) => z[parseInt(k, 10)]);
    }
    return u && T && (U = T(U)), U;
  }
  function F(I) {
    return r(this, void 0, void 0, function* () {
      l.length > 0 && I && l.some((z) => I.includes(z.left) && I.includes(z.right)) && d4(f, {
        delimiters: l,
        throwOnError: !1
      });
    });
  }
  g5(() => r(void 0, void 0, void 0, function* () {
    f && document.body.contains(f) ? yield F(i) : console.error("Element is not in the DOM");
  }));
  function L(I) {
    l5[I ? "unshift" : "push"](() => {
      f = I, t(2, f);
    });
  }
  return n.$$set = (I) => {
    "chatbot" in I && t(0, a = I.chatbot), "message" in I && t(4, i = I.message), "sanitize_html" in I && t(5, u = I.sanitize_html), "latex_delimiters" in I && t(6, l = I.latex_delimiters), "render_markdown" in I && t(1, s = I.render_markdown), "line_breaks" in I && t(7, o = I.line_breaks), "header_links" in I && t(8, h = I.header_links), "root" in I && t(9, p = I.root);
  }, n.$$.update = () => {
    n.$$.dirty & /*message*/
    16 && (i && i.trim() ? t(3, m = S(i)) : t(3, m = ""));
  }, [
    a,
    s,
    f,
    m,
    i,
    u,
    l,
    o,
    h,
    p,
    L
  ];
}
class y5 extends u5 {
  constructor(e) {
    super(), h5(this, e, v5, b5, p5, {
      chatbot: 0,
      message: 4,
      sanitize_html: 5,
      latex_delimiters: 6,
      render_markdown: 1,
      line_breaks: 7,
      header_links: 8,
      root: 9
    });
  }
}
function Ga() {
}
function w5(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const vd = typeof window < "u";
let Bo = vd ? () => window.performance.now() : () => Date.now(), yd = vd ? (n) => requestAnimationFrame(n) : Ga;
const Mr = /* @__PURE__ */ new Set();
function wd(n) {
  Mr.forEach((e) => {
    e.c(n) || (Mr.delete(e), e.f());
  }), Mr.size !== 0 && yd(wd);
}
function x5(n) {
  let e;
  return Mr.size === 0 && yd(wd), {
    promise: new Promise((t) => {
      Mr.add(e = { c: n, f: t });
    }),
    abort() {
      Mr.delete(e);
    }
  };
}
const Er = [];
function A5(n, e = Ga) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(l) {
    if (w5(n, l) && (n = l, t)) {
      const s = !Er.length;
      for (const o of r)
        o[1](), Er.push(o, n);
      if (s) {
        for (let o = 0; o < Er.length; o += 2)
          Er[o][0](Er[o + 1]);
        Er.length = 0;
      }
    }
  }
  function i(l) {
    a(l(n));
  }
  function u(l, s = Ga) {
    const o = [l, s];
    return r.add(o), r.size === 1 && (t = e(a, i) || Ga), l(n), () => {
      r.delete(o), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: u };
}
function zo(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function Zu(n, e, t, r) {
  if (typeof t == "number" || zo(t)) {
    const a = r - t, i = (t - e) / (n.dt || 1 / 60), u = n.opts.stiffness * a, l = n.opts.damping * i, s = (u - l) * n.inv_mass, o = (i + s) * n.dt;
    return Math.abs(o) < n.opts.precision && Math.abs(a) < n.opts.precision ? r : (n.settled = !1, zo(t) ? new Date(t.getTime() + o) : t + o);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => Zu(n, e[i], t[i], r[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = Zu(n, e[i], t[i], r[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Po(n, e = {}) {
  const t = A5(n), { stiffness: r = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let u, l, s, o = n, h = n, p = 1, f = 0, m = !1;
  function D(w, T = {}) {
    h = w;
    const x = s = {};
    return n == null || T.hard || _.stiffness >= 1 && _.damping >= 1 ? (m = !0, u = Bo(), o = w, t.set(n = h), Promise.resolve()) : (T.soft && (f = 1 / ((T.soft === !0 ? 0.5 : +T.soft) * 60), p = 0), l || (u = Bo(), m = !1, l = x5((y) => {
      if (m)
        return m = !1, l = null, !1;
      p = Math.min(p + f, 1);
      const S = {
        inv_mass: p,
        opts: _,
        settled: !0,
        dt: (y - u) * 60 / 1e3
      }, F = Zu(S, o, n, h);
      return u = y, o = n, t.set(n = F), S.settled && (l = null), !S.settled;
    })), new Promise((y) => {
      l.promise.then(() => {
        x === s && y();
      });
    }));
  }
  const _ = {
    set: D,
    update: (w, T) => D(w(h, n), T),
    subscribe: t.subscribe,
    stiffness: r,
    damping: a,
    precision: i
  };
  return _;
}
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: xd,
  setPrototypeOf: qo,
  isFrozen: S5,
  getPrototypeOf: D5,
  getOwnPropertyDescriptor: E5
} = Object;
let {
  freeze: mt,
  seal: Zt,
  create: Ad
} = Object, {
  apply: Ku,
  construct: Qu
} = typeof Reflect < "u" && Reflect;
mt || (mt = function(e) {
  return e;
});
Zt || (Zt = function(e) {
  return e;
});
Ku || (Ku = function(e, t, r) {
  return e.apply(t, r);
});
Qu || (Qu = function(e, t) {
  return new e(...t);
});
const Da = Bt(Array.prototype.forEach), Ho = Bt(Array.prototype.pop), hn = Bt(Array.prototype.push), ja = Bt(String.prototype.toLowerCase), uu = Bt(String.prototype.toString), Uo = Bt(String.prototype.match), mn = Bt(String.prototype.replace), k5 = Bt(String.prototype.indexOf), _5 = Bt(String.prototype.trim), s0 = Bt(Object.prototype.hasOwnProperty), lt = Bt(RegExp.prototype.test), pn = T5(TypeError);
function Bt(n) {
  return function(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return Ku(n, e, r);
  };
}
function T5(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return Qu(n, t);
  };
}
function xe(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ja;
  qo && qo(n, null);
  let r = e.length;
  for (; r--; ) {
    let a = e[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (S5(e) || (e[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function C5(n) {
  for (let e = 0; e < n.length; e++)
    s0(n, e) || (n[e] = null);
  return n;
}
function hr(n) {
  const e = Ad(null);
  for (const [t, r] of xd(n))
    s0(n, t) && (Array.isArray(r) ? e[t] = C5(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = hr(r) : e[t] = r);
  return e;
}
function gn(n, e) {
  for (; n !== null; ) {
    const r = E5(n, e);
    if (r) {
      if (r.get)
        return Bt(r.get);
      if (typeof r.value == "function")
        return Bt(r.value);
    }
    n = D5(n);
  }
  function t() {
    return null;
  }
  return t;
}
const Go = mt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), su = mt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), lu = mt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), F5 = mt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ou = mt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), M5 = mt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jo = mt(["#text"]), Vo = mt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), cu = mt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Wo = mt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ea = mt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), N5 = Zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), O5 = Zt(/<%[\w\W]*|[\w\W]*%>/gm), I5 = Zt(/\${[\w\W]*}/gm), R5 = Zt(/^data-[\-\w.\u00B7-\uFFFF]/), L5 = Zt(/^aria-[\-\w]+$/), Sd = Zt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), B5 = Zt(/^(?:\w+script|data):/i), z5 = Zt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dd = Zt(/^html$/i), P5 = Zt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Xo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: N5,
  ERB_EXPR: O5,
  TMPLIT_EXPR: I5,
  DATA_ATTR: R5,
  ARIA_ATTR: L5,
  IS_ALLOWED_URI: Sd,
  IS_SCRIPT_OR_DATA: B5,
  ATTR_WHITESPACE: z5,
  DOCTYPE_NAME: Dd,
  CUSTOM_ELEMENT: P5
});
const bn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, q5 = function() {
  return typeof window > "u" ? null : window;
}, H5 = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (r = t.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(u) {
        return u;
      },
      createScriptURL(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Ed() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q5();
  const e = (W) => Ed(W);
  if (e.version = "3.1.7", e.removed = [], !n || !n.document || n.document.nodeType !== bn.document)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const r = t, a = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: u,
    Node: l,
    Element: s,
    NodeFilter: o,
    NamedNodeMap: h = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: f,
    trustedTypes: m
  } = n, D = s.prototype, _ = gn(D, "cloneNode"), w = gn(D, "remove"), T = gn(D, "nextSibling"), x = gn(D, "childNodes"), y = gn(D, "parentNode");
  if (typeof u == "function") {
    const W = t.createElement("template");
    W.content && W.content.ownerDocument && (t = W.content.ownerDocument);
  }
  let S, F = "";
  const {
    implementation: L,
    createNodeIterator: I,
    createDocumentFragment: U,
    getElementsByTagName: z
  } = t, {
    importNode: B
  } = r;
  let k = {};
  e.isSupported = typeof xd == "function" && typeof y == "function" && L && L.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: P,
    ERB_EXPR: G,
    TMPLIT_EXPR: Z,
    DATA_ATTR: N,
    ARIA_ATTR: H,
    IS_SCRIPT_OR_DATA: j,
    ATTR_WHITESPACE: $,
    CUSTOM_ELEMENT: ce
  } = Xo;
  let {
    IS_ALLOWED_URI: ae
  } = Xo, R = null;
  const re = xe({}, [...Go, ...su, ...lu, ...ou, ...jo]);
  let ie = null;
  const ue = xe({}, [...Vo, ...cu, ...Wo, ...Ea]);
  let q = Object.seal(Ad(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Q = null, ee = null, ye = !0, Te = !0, Le = !1, Be = !0, Ye = !1, He = !0, ze = !1, nt = !1, bt = !1, it = !1, vt = !1, yt = !1, Hr = !0, Ur = !1;
  const Fi = "user-content-";
  let ir = !0, e0 = !1, Tt = {}, Ct = null;
  const Gr = xe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let jr = null;
  const Vr = xe({}, ["audio", "video", "img", "source", "image", "track"]);
  let ur = null;
  const Wr = xe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), M0 = "http://www.w3.org/1998/Math/MathML", N0 = "http://www.w3.org/2000/svg", et = "http://www.w3.org/1999/xhtml";
  let Ft = et, sr = !1, lr = null;
  const Mi = xe({}, [M0, N0, et], uu);
  let t0 = null;
  const Ni = ["application/xhtml+xml", "text/html"], Oi = "text/html";
  let we = null, Mt = null;
  const Ii = t.createElement("form"), Xr = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, or = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Mt && Mt === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = hr(b), t0 = // eslint-disable-next-line unicorn/prefer-includes
      Ni.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Oi : b.PARSER_MEDIA_TYPE, we = t0 === "application/xhtml+xml" ? uu : ja, R = s0(b, "ALLOWED_TAGS") ? xe({}, b.ALLOWED_TAGS, we) : re, ie = s0(b, "ALLOWED_ATTR") ? xe({}, b.ALLOWED_ATTR, we) : ue, lr = s0(b, "ALLOWED_NAMESPACES") ? xe({}, b.ALLOWED_NAMESPACES, uu) : Mi, ur = s0(b, "ADD_URI_SAFE_ATTR") ? xe(
        hr(Wr),
        // eslint-disable-line indent
        b.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        we
        // eslint-disable-line indent
      ) : Wr, jr = s0(b, "ADD_DATA_URI_TAGS") ? xe(
        hr(Vr),
        // eslint-disable-line indent
        b.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        we
        // eslint-disable-line indent
      ) : Vr, Ct = s0(b, "FORBID_CONTENTS") ? xe({}, b.FORBID_CONTENTS, we) : Gr, Q = s0(b, "FORBID_TAGS") ? xe({}, b.FORBID_TAGS, we) : {}, ee = s0(b, "FORBID_ATTR") ? xe({}, b.FORBID_ATTR, we) : {}, Tt = s0(b, "USE_PROFILES") ? b.USE_PROFILES : !1, ye = b.ALLOW_ARIA_ATTR !== !1, Te = b.ALLOW_DATA_ATTR !== !1, Le = b.ALLOW_UNKNOWN_PROTOCOLS || !1, Be = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ye = b.SAFE_FOR_TEMPLATES || !1, He = b.SAFE_FOR_XML !== !1, ze = b.WHOLE_DOCUMENT || !1, it = b.RETURN_DOM || !1, vt = b.RETURN_DOM_FRAGMENT || !1, yt = b.RETURN_TRUSTED_TYPE || !1, bt = b.FORCE_BODY || !1, Hr = b.SANITIZE_DOM !== !1, Ur = b.SANITIZE_NAMED_PROPS || !1, ir = b.KEEP_CONTENT !== !1, e0 = b.IN_PLACE || !1, ae = b.ALLOWED_URI_REGEXP || Sd, Ft = b.NAMESPACE || et, q = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && Xr(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && Xr(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ye && (Te = !1), vt && (it = !0), Tt && (R = xe({}, jo), ie = [], Tt.html === !0 && (xe(R, Go), xe(ie, Vo)), Tt.svg === !0 && (xe(R, su), xe(ie, cu), xe(ie, Ea)), Tt.svgFilters === !0 && (xe(R, lu), xe(ie, cu), xe(ie, Ea)), Tt.mathMl === !0 && (xe(R, ou), xe(ie, Wo), xe(ie, Ea))), b.ADD_TAGS && (R === re && (R = hr(R)), xe(R, b.ADD_TAGS, we)), b.ADD_ATTR && (ie === ue && (ie = hr(ie)), xe(ie, b.ADD_ATTR, we)), b.ADD_URI_SAFE_ATTR && xe(ur, b.ADD_URI_SAFE_ATTR, we), b.FORBID_CONTENTS && (Ct === Gr && (Ct = hr(Ct)), xe(Ct, b.FORBID_CONTENTS, we)), ir && (R["#text"] = !0), ze && xe(R, ["html", "head", "body"]), R.table && (xe(R, ["tbody"]), delete Q.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = b.TRUSTED_TYPES_POLICY, F = S.createHTML("");
      } else
        S === void 0 && (S = H5(m, a)), S !== null && typeof F == "string" && (F = S.createHTML(""));
      mt && mt(b), Mt = b;
    }
  }, Yr = xe({}, ["mi", "mo", "mn", "ms", "mtext"]), $r = xe({}, ["annotation-xml"]), Ri = xe({}, ["title", "style", "font", "a", "script"]), Zr = xe({}, [...su, ...lu, ...F5]), Kr = xe({}, [...ou, ...M5]), Li = function(b) {
    let M = y(b);
    (!M || !M.tagName) && (M = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const V = ja(b.tagName), oe = ja(M.tagName);
    return lr[b.namespaceURI] ? b.namespaceURI === N0 ? M.namespaceURI === et ? V === "svg" : M.namespaceURI === M0 ? V === "svg" && (oe === "annotation-xml" || Yr[oe]) : !!Zr[V] : b.namespaceURI === M0 ? M.namespaceURI === et ? V === "math" : M.namespaceURI === N0 ? V === "math" && $r[oe] : !!Kr[V] : b.namespaceURI === et ? M.namespaceURI === N0 && !$r[oe] || M.namespaceURI === M0 && !Yr[oe] ? !1 : !Kr[V] && (Ri[V] || !Zr[V]) : !!(t0 === "application/xhtml+xml" && lr[b.namespaceURI]) : !1;
  }, Ze = function(b) {
    hn(e.removed, {
      element: b
    });
    try {
      y(b).removeChild(b);
    } catch {
      w(b);
    }
  }, O0 = function(b, M) {
    try {
      hn(e.removed, {
        attribute: M.getAttributeNode(b),
        from: M
      });
    } catch {
      hn(e.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(b), b === "is" && !ie[b])
      if (it || vt)
        try {
          Ze(M);
        } catch {
        }
      else
        try {
          M.setAttribute(b, "");
        } catch {
        }
  }, Qr = function(b) {
    let M = null, V = null;
    if (bt)
      b = "<remove></remove>" + b;
    else {
      const De = Uo(b, /^[\r\n\t ]+/);
      V = De && De[0];
    }
    t0 === "application/xhtml+xml" && Ft === et && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const oe = S ? S.createHTML(b) : b;
    if (Ft === et)
      try {
        M = new f().parseFromString(oe, t0);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = L.createDocument(Ft, "template", null);
      try {
        M.documentElement.innerHTML = sr ? F : oe;
      } catch {
      }
    }
    const Ee = M.body || M.documentElement;
    return b && V && Ee.insertBefore(t.createTextNode(V), Ee.childNodes[0] || null), Ft === et ? z.call(M, ze ? "html" : "body")[0] : ze ? M.documentElement : Ee;
  }, Jr = function(b) {
    return I.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION | o.SHOW_CDATA_SECTION,
      null
    );
  }, en = function(b) {
    return b instanceof p && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof h) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, tn = function(b) {
    return typeof l == "function" && b instanceof l;
  }, tt = function(b, M, V) {
    k[b] && Da(k[b], (oe) => {
      oe.call(e, M, V, Mt);
    });
  }, rn = function(b) {
    let M = null;
    if (tt("beforeSanitizeElements", b, null), en(b))
      return Ze(b), !0;
    const V = we(b.nodeName);
    if (tt("uponSanitizeElement", b, {
      tagName: V,
      allowedTags: R
    }), b.hasChildNodes() && !tn(b.firstElementChild) && lt(/<[/\w]/g, b.innerHTML) && lt(/<[/\w]/g, b.textContent) || b.nodeType === bn.progressingInstruction || He && b.nodeType === bn.comment && lt(/<[/\w]/g, b.data))
      return Ze(b), !0;
    if (!R[V] || Q[V]) {
      if (!Q[V] && an(V) && (q.tagNameCheck instanceof RegExp && lt(q.tagNameCheck, V) || q.tagNameCheck instanceof Function && q.tagNameCheck(V)))
        return !1;
      if (ir && !Ct[V]) {
        const oe = y(b) || b.parentNode, Ee = x(b) || b.childNodes;
        if (Ee && oe) {
          const De = Ee.length;
          for (let Fe = De - 1; Fe >= 0; --Fe) {
            const Ke = _(Ee[Fe], !0);
            Ke.__removalCount = (b.__removalCount || 0) + 1, oe.insertBefore(Ke, T(b));
          }
        }
      }
      return Ze(b), !0;
    }
    return b instanceof s && !Li(b) || (V === "noscript" || V === "noembed" || V === "noframes") && lt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Ze(b), !0) : (Ye && b.nodeType === bn.text && (M = b.textContent, Da([P, G, Z], (oe) => {
      M = mn(M, oe, " ");
    }), b.textContent !== M && (hn(e.removed, {
      element: b.cloneNode()
    }), b.textContent = M)), tt("afterSanitizeElements", b, null), !1);
  }, nn = function(b, M, V) {
    if (Hr && (M === "id" || M === "name") && (V in t || V in Ii))
      return !1;
    if (!(Te && !ee[M] && lt(N, M))) {
      if (!(ye && lt(H, M))) {
        if (!ie[M] || ee[M]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(an(b) && (q.tagNameCheck instanceof RegExp && lt(q.tagNameCheck, b) || q.tagNameCheck instanceof Function && q.tagNameCheck(b)) && (q.attributeNameCheck instanceof RegExp && lt(q.attributeNameCheck, M) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(M)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            M === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && lt(q.tagNameCheck, V) || q.tagNameCheck instanceof Function && q.tagNameCheck(V)))
          ) return !1;
        } else if (!ur[M]) {
          if (!lt(ae, mn(V, $, ""))) {
            if (!((M === "src" || M === "xlink:href" || M === "href") && b !== "script" && k5(V, "data:") === 0 && jr[b])) {
              if (!(Le && !lt(j, mn(V, $, "")))) {
                if (V)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, an = function(b) {
    return b !== "annotation-xml" && Uo(b, ce);
  }, un = function(b) {
    tt("beforeSanitizeAttributes", b, null);
    const {
      attributes: M
    } = b;
    if (!M)
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ie
    };
    let oe = M.length;
    for (; oe--; ) {
      const Ee = M[oe], {
        name: De,
        namespaceURI: Fe,
        value: Ke
      } = Ee, r0 = we(De);
      let Ce = De === "value" ? Ke : _5(Ke);
      if (V.attrName = r0, V.attrValue = Ce, V.keepAttr = !0, V.forceKeepAttr = void 0, tt("uponSanitizeAttribute", b, V), Ce = V.attrValue, V.forceKeepAttr || (O0(De, b), !V.keepAttr))
        continue;
      if (!Be && lt(/\/>/i, Ce)) {
        O0(De, b);
        continue;
      }
      Ye && Da([P, G, Z], (ln) => {
        Ce = mn(Ce, ln, " ");
      });
      const sn = we(b.nodeName);
      if (nn(sn, r0, Ce)) {
        if (Ur && (r0 === "id" || r0 === "name") && (O0(De, b), Ce = Fi + Ce), He && lt(/((--!?|])>)|<\/(style|title)/i, Ce)) {
          O0(De, b);
          continue;
        }
        if (S && typeof m == "object" && typeof m.getAttributeType == "function" && !Fe)
          switch (m.getAttributeType(sn, r0)) {
            case "TrustedHTML": {
              Ce = S.createHTML(Ce);
              break;
            }
            case "TrustedScriptURL": {
              Ce = S.createScriptURL(Ce);
              break;
            }
          }
        try {
          Fe ? b.setAttributeNS(Fe, De, Ce) : b.setAttribute(De, Ce), en(b) ? Ze(b) : Ho(e.removed);
        } catch {
        }
      }
    }
    tt("afterSanitizeAttributes", b, null);
  }, Bi = function W(b) {
    let M = null;
    const V = Jr(b);
    for (tt("beforeSanitizeShadowDOM", b, null); M = V.nextNode(); )
      tt("uponSanitizeShadowNode", M, null), !rn(M) && (M.content instanceof i && W(M.content), un(M));
    tt("afterSanitizeShadowDOM", b, null);
  };
  return e.sanitize = function(W) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, V = null, oe = null, Ee = null;
    if (sr = !W, sr && (W = "<!-->"), typeof W != "string" && !tn(W))
      if (typeof W.toString == "function") {
        if (W = W.toString(), typeof W != "string")
          throw pn("dirty is not a string, aborting");
      } else
        throw pn("toString is not a function");
    if (!e.isSupported)
      return W;
    if (nt || or(b), e.removed = [], typeof W == "string" && (e0 = !1), e0) {
      if (W.nodeName) {
        const Ke = we(W.nodeName);
        if (!R[Ke] || Q[Ke])
          throw pn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (W instanceof l)
      M = Qr("<!---->"), V = M.ownerDocument.importNode(W, !0), V.nodeType === bn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? M = V : M.appendChild(V);
    else {
      if (!it && !Ye && !ze && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return S && yt ? S.createHTML(W) : W;
      if (M = Qr(W), !M)
        return it ? null : yt ? F : "";
    }
    M && bt && Ze(M.firstChild);
    const De = Jr(e0 ? W : M);
    for (; oe = De.nextNode(); )
      rn(oe) || (oe.content instanceof i && Bi(oe.content), un(oe));
    if (e0)
      return W;
    if (it) {
      if (vt)
        for (Ee = U.call(M.ownerDocument); M.firstChild; )
          Ee.appendChild(M.firstChild);
      else
        Ee = M;
      return (ie.shadowroot || ie.shadowrootmode) && (Ee = B.call(r, Ee, !0)), Ee;
    }
    let Fe = ze ? M.outerHTML : M.innerHTML;
    return ze && R["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && lt(Dd, M.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + Fe), Ye && Da([P, G, Z], (Ke) => {
      Fe = mn(Fe, Ke, " ");
    }), S && yt ? S.createHTML(Fe) : Fe;
  }, e.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    or(W), nt = !0;
  }, e.clearConfig = function() {
    Mt = null, nt = !1;
  }, e.isValidAttribute = function(W, b, M) {
    Mt || or({});
    const V = we(W), oe = we(b);
    return nn(V, oe, M);
  }, e.addHook = function(W, b) {
    typeof b == "function" && (k[W] = k[W] || [], hn(k[W], b));
  }, e.removeHook = function(W) {
    if (k[W])
      return Ho(k[W]);
  }, e.removeHooks = function(W) {
    k[W] && (k[W] = []);
  }, e.removeAllHooks = function() {
    k = {};
  }, e;
}
Ed();
const {
  SvelteComponent: U5,
  attr: G5,
  children: j5,
  claim_component: V5,
  claim_element: W5,
  create_component: X5,
  destroy_component: Y5,
  detach: Yo,
  element: $5,
  init: Z5,
  insert_hydration: K5,
  mount_component: Q5,
  safe_not_equal: J5,
  transition_in: e8,
  transition_out: t8
} = window.__gradio__svelte__internal;
function r8(n) {
  let e, t, r;
  return t = new y5({
    props: {
      root: (
        /*root*/
        n[1]
      ),
      message: (
        /*info*/
        n[0]
      ),
      sanitize_html: !0
    }
  }), {
    c() {
      e = $5("div"), X5(t.$$.fragment), this.h();
    },
    l(a) {
      e = W5(a, "DIV", { class: !0 });
      var i = j5(e);
      V5(t.$$.fragment, i), i.forEach(Yo), this.h();
    },
    h() {
      G5(e, "class", "svelte-1hnfib2");
    },
    m(a, i) {
      K5(a, e, i), Q5(t, e, null), r = !0;
    },
    p(a, [i]) {
      const u = {};
      i & /*root*/
      2 && (u.root = /*root*/
      a[1]), i & /*info*/
      1 && (u.message = /*info*/
      a[0]), t.$set(u);
    },
    i(a) {
      r || (e8(t.$$.fragment, a), r = !0);
    },
    o(a) {
      t8(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Yo(e), Y5(t);
    }
  };
}
function n8(n, e, t) {
  let { info: r } = e, { root: a } = e;
  return n.$$set = (i) => {
    "info" in i && t(0, r = i.info), "root" in i && t(1, a = i.root);
  }, [r, a];
}
class a8 extends U5 {
  constructor(e) {
    super(), Z5(this, e, n8, r8, J5, { info: 0, root: 1 });
  }
}
const {
  SvelteComponent: i8,
  attr: $o,
  check_outros: u8,
  children: s8,
  claim_component: l8,
  claim_element: o8,
  claim_space: c8,
  create_component: f8,
  create_slot: d8,
  destroy_component: h8,
  detach: ka,
  element: m8,
  empty: Zo,
  get_all_dirty_from_scope: p8,
  get_slot_changes: g8,
  group_outros: b8,
  init: v8,
  insert_hydration: fu,
  mount_component: y8,
  safe_not_equal: w8,
  space: x8,
  toggle_class: kr,
  transition_in: kn,
  transition_out: Va,
  update_slot_base: A8
} = window.__gradio__svelte__internal;
function Ko(n) {
  let e, t;
  return e = new a8({
    props: {
      root: (
        /*root*/
        n[2]
      ),
      info: (
        /*info*/
        n[1]
      )
    }
  }), {
    c() {
      f8(e.$$.fragment);
    },
    l(r) {
      l8(e.$$.fragment, r);
    },
    m(r, a) {
      y8(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a & /*root*/
      4 && (i.root = /*root*/
      r[2]), a & /*info*/
      2 && (i.info = /*info*/
      r[1]), e.$set(i);
    },
    i(r) {
      t || (kn(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Va(e.$$.fragment, r), t = !1;
    },
    d(r) {
      h8(e, r);
    }
  };
}
function S8(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[4].default
  ), u = d8(
    i,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let l = (
    /*info*/
    n[1] && Ko(n)
  );
  return {
    c() {
      e = m8("span"), u && u.c(), t = x8(), l && l.c(), r = Zo(), this.h();
    },
    l(s) {
      e = o8(s, "SPAN", { "data-testid": !0, class: !0 });
      var o = s8(e);
      u && u.l(o), o.forEach(ka), t = c8(s), l && l.l(s), r = Zo(), this.h();
    },
    h() {
      $o(e, "data-testid", "block-info"), $o(e, "class", "svelte-22c38v"), kr(e, "sr-only", !/*show_label*/
      n[0]), kr(e, "hide", !/*show_label*/
      n[0]), kr(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(s, o) {
      fu(s, e, o), u && u.m(e, null), fu(s, t, o), l && l.m(s, o), fu(s, r, o), a = !0;
    },
    p(s, [o]) {
      u && u.p && (!a || o & /*$$scope*/
      8) && A8(
        u,
        i,
        s,
        /*$$scope*/
        s[3],
        a ? g8(
          i,
          /*$$scope*/
          s[3],
          o,
          null
        ) : p8(
          /*$$scope*/
          s[3]
        ),
        null
      ), (!a || o & /*show_label*/
      1) && kr(e, "sr-only", !/*show_label*/
      s[0]), (!a || o & /*show_label*/
      1) && kr(e, "hide", !/*show_label*/
      s[0]), (!a || o & /*info*/
      2) && kr(
        e,
        "has-info",
        /*info*/
        s[1] != null
      ), /*info*/
      s[1] ? l ? (l.p(s, o), o & /*info*/
      2 && kn(l, 1)) : (l = Ko(s), l.c(), kn(l, 1), l.m(r.parentNode, r)) : l && (b8(), Va(l, 1, 1, () => {
        l = null;
      }), u8());
    },
    i(s) {
      a || (kn(u, s), kn(l), a = !0);
    },
    o(s) {
      Va(u, s), Va(l), a = !1;
    },
    d(s) {
      s && (ka(e), ka(t), ka(r)), u && u.d(s), l && l.d(s);
    }
  };
}
function D8(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { show_label: i = !0 } = e, { info: u = void 0 } = e, { root: l } = e;
  return n.$$set = (s) => {
    "show_label" in s && t(0, i = s.show_label), "info" in s && t(1, u = s.info), "root" in s && t(2, l = s.root), "$$scope" in s && t(3, a = s.$$scope);
  }, [i, u, l, a, r];
}
class E8 extends i8 {
  constructor(e) {
    super(), v8(this, e, D8, S8, w8, { show_label: 0, info: 1, root: 2 });
  }
}
const {
  SvelteComponent: k8,
  append_hydration: Ju,
  attr: B0,
  bubble: _8,
  check_outros: T8,
  children: es,
  claim_component: C8,
  claim_element: ts,
  claim_space: F8,
  claim_text: M8,
  construct_svelte_component: Qo,
  create_component: Jo,
  destroy_component: e1,
  detach: On,
  element: rs,
  group_outros: N8,
  init: O8,
  insert_hydration: kd,
  listen: I8,
  mount_component: t1,
  safe_not_equal: R8,
  set_data: L8,
  set_style: _a,
  space: B8,
  text: z8,
  toggle_class: wt,
  transition_in: r1,
  transition_out: n1
} = window.__gradio__svelte__internal;
function a1(n) {
  let e, t;
  return {
    c() {
      e = rs("span"), t = z8(
        /*label*/
        n[1]
      ), this.h();
    },
    l(r) {
      e = ts(r, "SPAN", { class: !0 });
      var a = es(e);
      t = M8(
        a,
        /*label*/
        n[1]
      ), a.forEach(On), this.h();
    },
    h() {
      B0(e, "class", "svelte-vk34kx");
    },
    m(r, a) {
      kd(r, e, a), Ju(e, t);
    },
    p(r, a) {
      a & /*label*/
      2 && L8(
        t,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && On(e);
    }
  };
}
function P8(n) {
  let e, t, r, a, i, u, l, s = (
    /*show_label*/
    n[2] && a1(n)
  );
  var o = (
    /*Icon*/
    n[0]
  );
  function h(p, f) {
    return {};
  }
  return o && (a = Qo(o, h())), {
    c() {
      e = rs("button"), s && s.c(), t = B8(), r = rs("div"), a && Jo(a.$$.fragment), this.h();
    },
    l(p) {
      e = ts(p, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var f = es(e);
      s && s.l(f), t = F8(f), r = ts(f, "DIV", { class: !0 });
      var m = es(r);
      a && C8(a.$$.fragment, m), m.forEach(On), f.forEach(On), this.h();
    },
    h() {
      B0(r, "class", "svelte-vk34kx"), wt(
        r,
        "small",
        /*size*/
        n[4] === "small"
      ), wt(
        r,
        "large",
        /*size*/
        n[4] === "large"
      ), wt(
        r,
        "medium",
        /*size*/
        n[4] === "medium"
      ), e.disabled = /*disabled*/
      n[7], B0(
        e,
        "aria-label",
        /*label*/
        n[1]
      ), B0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        n[8]
      ), B0(
        e,
        "title",
        /*label*/
        n[1]
      ), B0(e, "class", "svelte-vk34kx"), wt(
        e,
        "pending",
        /*pending*/
        n[3]
      ), wt(
        e,
        "padded",
        /*padded*/
        n[5]
      ), wt(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), wt(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), _a(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), _a(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(p, f) {
      kd(p, e, f), s && s.m(e, null), Ju(e, t), Ju(e, r), a && t1(a, r, null), i = !0, u || (l = I8(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), u = !0);
    },
    p(p, [f]) {
      if (/*show_label*/
      p[2] ? s ? s.p(p, f) : (s = a1(p), s.c(), s.m(e, t)) : s && (s.d(1), s = null), f & /*Icon*/
      1 && o !== (o = /*Icon*/
      p[0])) {
        if (a) {
          N8();
          const m = a;
          n1(m.$$.fragment, 1, 0, () => {
            e1(m, 1);
          }), T8();
        }
        o ? (a = Qo(o, h()), Jo(a.$$.fragment), r1(a.$$.fragment, 1), t1(a, r, null)) : a = null;
      }
      (!i || f & /*size*/
      16) && wt(
        r,
        "small",
        /*size*/
        p[4] === "small"
      ), (!i || f & /*size*/
      16) && wt(
        r,
        "large",
        /*size*/
        p[4] === "large"
      ), (!i || f & /*size*/
      16) && wt(
        r,
        "medium",
        /*size*/
        p[4] === "medium"
      ), (!i || f & /*disabled*/
      128) && (e.disabled = /*disabled*/
      p[7]), (!i || f & /*label*/
      2) && B0(
        e,
        "aria-label",
        /*label*/
        p[1]
      ), (!i || f & /*hasPopup*/
      256) && B0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        p[8]
      ), (!i || f & /*label*/
      2) && B0(
        e,
        "title",
        /*label*/
        p[1]
      ), (!i || f & /*pending*/
      8) && wt(
        e,
        "pending",
        /*pending*/
        p[3]
      ), (!i || f & /*padded*/
      32) && wt(
        e,
        "padded",
        /*padded*/
        p[5]
      ), (!i || f & /*highlight*/
      64) && wt(
        e,
        "highlight",
        /*highlight*/
        p[6]
      ), (!i || f & /*transparent*/
      512) && wt(
        e,
        "transparent",
        /*transparent*/
        p[9]
      ), f & /*disabled, _color*/
      2176 && _a(e, "color", !/*disabled*/
      p[7] && /*_color*/
      p[11] ? (
        /*_color*/
        p[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && _a(e, "--bg-color", /*disabled*/
      p[7] ? "auto" : (
        /*background*/
        p[10]
      ));
    },
    i(p) {
      i || (a && r1(a.$$.fragment, p), i = !0);
    },
    o(p) {
      a && n1(a.$$.fragment, p), i = !1;
    },
    d(p) {
      p && On(e), s && s.d(), a && e1(a), u = !1, l();
    }
  };
}
function q8(n, e, t) {
  let r, { Icon: a } = e, { label: i = "" } = e, { show_label: u = !1 } = e, { pending: l = !1 } = e, { size: s = "small" } = e, { padded: o = !0 } = e, { highlight: h = !1 } = e, { disabled: p = !1 } = e, { hasPopup: f = !1 } = e, { color: m = "var(--block-label-text-color)" } = e, { transparent: D = !1 } = e, { background: _ = "var(--block-background-fill)" } = e;
  function w(T) {
    _8.call(this, n, T);
  }
  return n.$$set = (T) => {
    "Icon" in T && t(0, a = T.Icon), "label" in T && t(1, i = T.label), "show_label" in T && t(2, u = T.show_label), "pending" in T && t(3, l = T.pending), "size" in T && t(4, s = T.size), "padded" in T && t(5, o = T.padded), "highlight" in T && t(6, h = T.highlight), "disabled" in T && t(7, p = T.disabled), "hasPopup" in T && t(8, f = T.hasPopup), "color" in T && t(12, m = T.color), "transparent" in T && t(9, D = T.transparent), "background" in T && t(10, _ = T.background);
  }, n.$$.update = () => {
    n.$$.dirty & /*highlight, color*/
    4160 && t(11, r = h ? "var(--color-accent)" : m);
  }, [
    a,
    i,
    u,
    l,
    s,
    o,
    h,
    p,
    f,
    D,
    _,
    r,
    m,
    w
  ];
}
class H8 extends k8 {
  constructor(e) {
    super(), O8(this, e, q8, P8, R8, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: U8,
  append_hydration: du,
  attr: n0,
  children: Ta,
  claim_svg_element: Ca,
  detach: vn,
  init: G8,
  insert_hydration: j8,
  noop: hu,
  safe_not_equal: V8,
  set_style: m0,
  svg_element: Fa
} = window.__gradio__svelte__internal;
function W8(n) {
  let e, t, r, a;
  return {
    c() {
      e = Fa("svg"), t = Fa("g"), r = Fa("path"), a = Fa("path"), this.h();
    },
    l(i) {
      e = Ca(i, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        version: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "xml:space": !0,
        stroke: !0,
        style: !0
      });
      var u = Ta(e);
      t = Ca(u, "g", { transform: !0 });
      var l = Ta(t);
      r = Ca(l, "path", { d: !0, style: !0 }), Ta(r).forEach(vn), l.forEach(vn), a = Ca(u, "path", { d: !0, style: !0 }), Ta(a).forEach(vn), u.forEach(vn), this.h();
    },
    h() {
      n0(r, "d", "M18,6L6.087,17.913"), m0(r, "fill", "none"), m0(r, "fill-rule", "nonzero"), m0(r, "stroke-width", "2px"), n0(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), n0(a, "d", "M4.364,4.364L19.636,19.636"), m0(a, "fill", "none"), m0(a, "fill-rule", "nonzero"), m0(a, "stroke-width", "2px"), n0(e, "width", "100%"), n0(e, "height", "100%"), n0(e, "viewBox", "0 0 24 24"), n0(e, "version", "1.1"), n0(e, "xmlns", "http://www.w3.org/2000/svg"), n0(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), n0(e, "xml:space", "preserve"), n0(e, "stroke", "currentColor"), m0(e, "fill-rule", "evenodd"), m0(e, "clip-rule", "evenodd"), m0(e, "stroke-linecap", "round"), m0(e, "stroke-linejoin", "round");
    },
    m(i, u) {
      j8(i, e, u), du(e, t), du(t, r), du(e, a);
    },
    p: hu,
    i: hu,
    o: hu,
    d(i) {
      i && vn(e);
    }
  };
}
class X8 extends U8 {
  constructor(e) {
    super(), G8(this, e, null, W8, V8, {});
  }
}
const Y8 = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], i1 = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Y8.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: i1[e][t],
      secondary: i1[e][r]
    }
  }),
  {}
);
function Tr(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let r = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + r;
}
const {
  SvelteComponent: $8,
  append_hydration: a0,
  attr: ke,
  children: Ht,
  claim_element: Z8,
  claim_svg_element: i0,
  component_subscribe: u1,
  detach: Nt,
  element: K8,
  init: Q8,
  insert_hydration: J8,
  noop: s1,
  safe_not_equal: e7,
  set_style: Ma,
  svg_element: u0,
  toggle_class: l1
} = window.__gradio__svelte__internal, { onMount: t7 } = window.__gradio__svelte__internal;
function r7(n) {
  let e, t, r, a, i, u, l, s, o, h, p, f;
  return {
    c() {
      e = K8("div"), t = u0("svg"), r = u0("g"), a = u0("path"), i = u0("path"), u = u0("path"), l = u0("path"), s = u0("g"), o = u0("path"), h = u0("path"), p = u0("path"), f = u0("path"), this.h();
    },
    l(m) {
      e = Z8(m, "DIV", { class: !0 });
      var D = Ht(e);
      t = i0(D, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var _ = Ht(t);
      r = i0(_, "g", { style: !0 });
      var w = Ht(r);
      a = i0(w, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Ht(a).forEach(Nt), i = i0(w, "path", { d: !0, fill: !0, class: !0 }), Ht(i).forEach(Nt), u = i0(w, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Ht(u).forEach(Nt), l = i0(w, "path", { d: !0, fill: !0, class: !0 }), Ht(l).forEach(Nt), w.forEach(Nt), s = i0(_, "g", { style: !0 });
      var T = Ht(s);
      o = i0(T, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Ht(o).forEach(Nt), h = i0(T, "path", { d: !0, fill: !0, class: !0 }), Ht(h).forEach(Nt), p = i0(T, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), Ht(p).forEach(Nt), f = i0(T, "path", { d: !0, fill: !0, class: !0 }), Ht(f).forEach(Nt), T.forEach(Nt), _.forEach(Nt), D.forEach(Nt), this.h();
    },
    h() {
      ke(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ke(a, "fill", "#FF7C00"), ke(a, "fill-opacity", "0.4"), ke(a, "class", "svelte-43sxxs"), ke(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ke(i, "fill", "#FF7C00"), ke(i, "class", "svelte-43sxxs"), ke(u, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ke(u, "fill", "#FF7C00"), ke(u, "fill-opacity", "0.4"), ke(u, "class", "svelte-43sxxs"), ke(l, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ke(l, "fill", "#FF7C00"), ke(l, "class", "svelte-43sxxs"), Ma(r, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), ke(o, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ke(o, "fill", "#FF7C00"), ke(o, "fill-opacity", "0.4"), ke(o, "class", "svelte-43sxxs"), ke(h, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ke(h, "fill", "#FF7C00"), ke(h, "class", "svelte-43sxxs"), ke(p, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ke(p, "fill", "#FF7C00"), ke(p, "fill-opacity", "0.4"), ke(p, "class", "svelte-43sxxs"), ke(f, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ke(f, "fill", "#FF7C00"), ke(f, "class", "svelte-43sxxs"), Ma(s, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), ke(t, "viewBox", "-1200 -1200 3000 3000"), ke(t, "fill", "none"), ke(t, "xmlns", "http://www.w3.org/2000/svg"), ke(t, "class", "svelte-43sxxs"), ke(e, "class", "svelte-43sxxs"), l1(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(m, D) {
      J8(m, e, D), a0(e, t), a0(t, r), a0(r, a), a0(r, i), a0(r, u), a0(r, l), a0(t, s), a0(s, o), a0(s, h), a0(s, p), a0(s, f);
    },
    p(m, [D]) {
      D & /*$top*/
      2 && Ma(r, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), D & /*$bottom*/
      4 && Ma(s, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), D & /*margin*/
      1 && l1(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: s1,
    o: s1,
    d(m) {
      m && Nt(e);
    }
  };
}
function n7(n, e, t) {
  let r, a;
  var i = this && this.__awaiter || function(m, D, _, w) {
    function T(x) {
      return x instanceof _ ? x : new _(function(y) {
        y(x);
      });
    }
    return new (_ || (_ = Promise))(function(x, y) {
      function S(I) {
        try {
          L(w.next(I));
        } catch (U) {
          y(U);
        }
      }
      function F(I) {
        try {
          L(w.throw(I));
        } catch (U) {
          y(U);
        }
      }
      function L(I) {
        I.done ? x(I.value) : T(I.value).then(S, F);
      }
      L((w = w.apply(m, D || [])).next());
    });
  };
  let { margin: u = !0 } = e;
  const l = Po([0, 0]);
  u1(n, l, (m) => t(1, r = m));
  const s = Po([0, 0]);
  u1(n, s, (m) => t(2, a = m));
  let o;
  function h() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([l.set([125, 140]), s.set([-125, -140])]), yield Promise.all([l.set([-125, 140]), s.set([125, -140])]), yield Promise.all([l.set([-125, 0]), s.set([125, -0])]), yield Promise.all([l.set([125, 0]), s.set([-125, 0])]);
    });
  }
  function p() {
    return i(this, void 0, void 0, function* () {
      yield h(), o || p();
    });
  }
  function f() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([l.set([125, 0]), s.set([-125, 0])]), p();
    });
  }
  return t7(() => (f(), () => o = !0)), n.$$set = (m) => {
    "margin" in m && t(0, u = m.margin);
  }, [u, r, a, l, s];
}
class a7 extends $8 {
  constructor(e) {
    super(), Q8(this, e, n7, r7, e7, { margin: 0 });
  }
}
const {
  SvelteComponent: i7,
  append_hydration: gr,
  attr: f0,
  binding_callbacks: o1,
  check_outros: ns,
  children: S0,
  claim_component: _d,
  claim_element: D0,
  claim_space: Vt,
  claim_text: We,
  create_component: Td,
  create_slot: Cd,
  destroy_component: Fd,
  destroy_each: Md,
  detach: se,
  element: E0,
  empty: Kt,
  ensure_array_like: fi,
  get_all_dirty_from_scope: Nd,
  get_slot_changes: Od,
  group_outros: as,
  init: u7,
  insert_hydration: ge,
  mount_component: Id,
  noop: is,
  safe_not_equal: s7,
  set_data: Qt,
  set_style: J0,
  space: Wt,
  text: Xe,
  toggle_class: Ut,
  transition_in: c0,
  transition_out: k0,
  update_slot_base: Rd
} = window.__gradio__svelte__internal, { tick: l7 } = window.__gradio__svelte__internal, { onDestroy: o7 } = window.__gradio__svelte__internal, { createEventDispatcher: c7 } = window.__gradio__svelte__internal, f7 = (n) => ({}), c1 = (n) => ({}), d7 = (n) => ({}), f1 = (n) => ({});
function d1(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r[43] = t, r;
}
function h1(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r;
}
function h7(n) {
  let e, t, r, a, i = (
    /*i18n*/
    n[1]("common.error") + ""
  ), u, l, s;
  t = new H8({
    props: {
      Icon: X8,
      label: (
        /*i18n*/
        n[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    n[32]
  );
  const o = (
    /*#slots*/
    n[30].error
  ), h = Cd(
    o,
    n,
    /*$$scope*/
    n[29],
    c1
  );
  return {
    c() {
      e = E0("div"), Td(t.$$.fragment), r = Wt(), a = E0("span"), u = Xe(i), l = Wt(), h && h.c(), this.h();
    },
    l(p) {
      e = D0(p, "DIV", { class: !0 });
      var f = S0(e);
      _d(t.$$.fragment, f), f.forEach(se), r = Vt(p), a = D0(p, "SPAN", { class: !0 });
      var m = S0(a);
      u = We(m, i), m.forEach(se), l = Vt(p), h && h.l(p), this.h();
    },
    h() {
      f0(e, "class", "clear-status svelte-17v219f"), f0(a, "class", "error svelte-17v219f");
    },
    m(p, f) {
      ge(p, e, f), Id(t, e, null), ge(p, r, f), ge(p, a, f), gr(a, u), ge(p, l, f), h && h.m(p, f), s = !0;
    },
    p(p, f) {
      const m = {};
      f[0] & /*i18n*/
      2 && (m.label = /*i18n*/
      p[1]("common.clear")), t.$set(m), (!s || f[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      p[1]("common.error") + "") && Qt(u, i), h && h.p && (!s || f[0] & /*$$scope*/
      536870912) && Rd(
        h,
        o,
        p,
        /*$$scope*/
        p[29],
        s ? Od(
          o,
          /*$$scope*/
          p[29],
          f,
          f7
        ) : Nd(
          /*$$scope*/
          p[29]
        ),
        c1
      );
    },
    i(p) {
      s || (c0(t.$$.fragment, p), c0(h, p), s = !0);
    },
    o(p) {
      k0(t.$$.fragment, p), k0(h, p), s = !1;
    },
    d(p) {
      p && (se(e), se(r), se(a), se(l)), Fd(t), h && h.d(p);
    }
  };
}
function m7(n) {
  let e, t, r, a, i, u, l, s, o, h = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && m1(n)
  );
  function p(y, S) {
    if (
      /*progress*/
      y[7]
    ) return b7;
    if (
      /*queue_position*/
      y[2] !== null && /*queue_size*/
      y[3] !== void 0 && /*queue_position*/
      y[2] >= 0
    ) return g7;
    if (
      /*queue_position*/
      y[2] === 0
    ) return p7;
  }
  let f = p(n), m = f && f(n), D = (
    /*timer*/
    n[5] && b1(n)
  );
  const _ = [x7, w7], w = [];
  function T(y, S) {
    return (
      /*last_progress_level*/
      y[15] != null ? 0 : (
        /*show_progress*/
        y[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = T(n)) && (u = w[i] = _[i](n));
  let x = !/*timer*/
  n[5] && D1(n);
  return {
    c() {
      h && h.c(), e = Wt(), t = E0("div"), m && m.c(), r = Wt(), D && D.c(), a = Wt(), u && u.c(), l = Wt(), x && x.c(), s = Kt(), this.h();
    },
    l(y) {
      h && h.l(y), e = Vt(y), t = D0(y, "DIV", { class: !0 });
      var S = S0(t);
      m && m.l(S), r = Vt(S), D && D.l(S), S.forEach(se), a = Vt(y), u && u.l(y), l = Vt(y), x && x.l(y), s = Kt(), this.h();
    },
    h() {
      f0(t, "class", "progress-text svelte-17v219f"), Ut(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), Ut(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(y, S) {
      h && h.m(y, S), ge(y, e, S), ge(y, t, S), m && m.m(t, null), gr(t, r), D && D.m(t, null), ge(y, a, S), ~i && w[i].m(y, S), ge(y, l, S), x && x.m(y, S), ge(y, s, S), o = !0;
    },
    p(y, S) {
      /*variant*/
      y[8] === "default" && /*show_eta_bar*/
      y[18] && /*show_progress*/
      y[6] === "full" ? h ? h.p(y, S) : (h = m1(y), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), f === (f = p(y)) && m ? m.p(y, S) : (m && m.d(1), m = f && f(y), m && (m.c(), m.m(t, r))), /*timer*/
      y[5] ? D ? D.p(y, S) : (D = b1(y), D.c(), D.m(t, null)) : D && (D.d(1), D = null), (!o || S[0] & /*variant*/
      256) && Ut(
        t,
        "meta-text-center",
        /*variant*/
        y[8] === "center"
      ), (!o || S[0] & /*variant*/
      256) && Ut(
        t,
        "meta-text",
        /*variant*/
        y[8] === "default"
      );
      let F = i;
      i = T(y), i === F ? ~i && w[i].p(y, S) : (u && (as(), k0(w[F], 1, 1, () => {
        w[F] = null;
      }), ns()), ~i ? (u = w[i], u ? u.p(y, S) : (u = w[i] = _[i](y), u.c()), c0(u, 1), u.m(l.parentNode, l)) : u = null), /*timer*/
      y[5] ? x && (as(), k0(x, 1, 1, () => {
        x = null;
      }), ns()) : x ? (x.p(y, S), S[0] & /*timer*/
      32 && c0(x, 1)) : (x = D1(y), x.c(), c0(x, 1), x.m(s.parentNode, s));
    },
    i(y) {
      o || (c0(u), c0(x), o = !0);
    },
    o(y) {
      k0(u), k0(x), o = !1;
    },
    d(y) {
      y && (se(e), se(t), se(a), se(l), se(s)), h && h.d(y), m && m.d(), D && D.d(), ~i && w[i].d(y), x && x.d(y);
    }
  };
}
function m1(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = E0("div"), this.h();
    },
    l(r) {
      e = D0(r, "DIV", { class: !0 }), S0(e).forEach(se), this.h();
    },
    h() {
      f0(e, "class", "eta-bar svelte-17v219f"), J0(e, "transform", t);
    },
    m(r, a) {
      ge(r, e, a);
    },
    p(r, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && J0(e, "transform", t);
    },
    d(r) {
      r && se(e);
    }
  };
}
function p7(n) {
  let e;
  return {
    c() {
      e = Xe("processing |");
    },
    l(t) {
      e = We(t, "processing |");
    },
    m(t, r) {
      ge(t, e, r);
    },
    p: is,
    d(t) {
      t && se(e);
    }
  };
}
function g7(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), r, a, i, u;
  return {
    c() {
      e = Xe("queue: "), r = Xe(t), a = Xe("/"), i = Xe(
        /*queue_size*/
        n[3]
      ), u = Xe(" |");
    },
    l(l) {
      e = We(l, "queue: "), r = We(l, t), a = We(l, "/"), i = We(
        l,
        /*queue_size*/
        n[3]
      ), u = We(l, " |");
    },
    m(l, s) {
      ge(l, e, s), ge(l, r, s), ge(l, a, s), ge(l, i, s), ge(l, u, s);
    },
    p(l, s) {
      s[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      l[2] + 1 + "") && Qt(r, t), s[0] & /*queue_size*/
      8 && Qt(
        i,
        /*queue_size*/
        l[3]
      );
    },
    d(l) {
      l && (se(e), se(r), se(a), se(i), se(u));
    }
  };
}
function b7(n) {
  let e, t = fi(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = g1(h1(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Kt();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Kt();
    },
    m(a, i) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, i);
      ge(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = fi(
          /*progress*/
          a[7]
        );
        let u;
        for (u = 0; u < t.length; u += 1) {
          const l = h1(a, t, u);
          r[u] ? r[u].p(l, i) : (r[u] = g1(l), r[u].c(), r[u].m(e.parentNode, e));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && se(e), Md(r, a);
    }
  };
}
function p1(n) {
  let e, t = (
    /*p*/
    n[41].unit + ""
  ), r, a, i = " ", u;
  function l(h, p) {
    return (
      /*p*/
      h[41].length != null ? y7 : v7
    );
  }
  let s = l(n), o = s(n);
  return {
    c() {
      o.c(), e = Wt(), r = Xe(t), a = Xe(" | "), u = Xe(i);
    },
    l(h) {
      o.l(h), e = Vt(h), r = We(h, t), a = We(h, " | "), u = We(h, i);
    },
    m(h, p) {
      o.m(h, p), ge(h, e, p), ge(h, r, p), ge(h, a, p), ge(h, u, p);
    },
    p(h, p) {
      s === (s = l(h)) && o ? o.p(h, p) : (o.d(1), o = s(h), o && (o.c(), o.m(e.parentNode, e))), p[0] & /*progress*/
      128 && t !== (t = /*p*/
      h[41].unit + "") && Qt(r, t);
    },
    d(h) {
      h && (se(e), se(r), se(a), se(u)), o.d(h);
    }
  };
}
function v7(n) {
  let e = Tr(
    /*p*/
    n[41].index || 0
  ) + "", t;
  return {
    c() {
      t = Xe(e);
    },
    l(r) {
      t = We(r, e);
    },
    m(r, a) {
      ge(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = Tr(
        /*p*/
        r[41].index || 0
      ) + "") && Qt(t, e);
    },
    d(r) {
      r && se(t);
    }
  };
}
function y7(n) {
  let e = Tr(
    /*p*/
    n[41].index || 0
  ) + "", t, r, a = Tr(
    /*p*/
    n[41].length
  ) + "", i;
  return {
    c() {
      t = Xe(e), r = Xe("/"), i = Xe(a);
    },
    l(u) {
      t = We(u, e), r = We(u, "/"), i = We(u, a);
    },
    m(u, l) {
      ge(u, t, l), ge(u, r, l), ge(u, i, l);
    },
    p(u, l) {
      l[0] & /*progress*/
      128 && e !== (e = Tr(
        /*p*/
        u[41].index || 0
      ) + "") && Qt(t, e), l[0] & /*progress*/
      128 && a !== (a = Tr(
        /*p*/
        u[41].length
      ) + "") && Qt(i, a);
    },
    d(u) {
      u && (se(t), se(r), se(i));
    }
  };
}
function g1(n) {
  let e, t = (
    /*p*/
    n[41].index != null && p1(n)
  );
  return {
    c() {
      t && t.c(), e = Kt();
    },
    l(r) {
      t && t.l(r), e = Kt();
    },
    m(r, a) {
      t && t.m(r, a), ge(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].index != null ? t ? t.p(r, a) : (t = p1(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && se(e), t && t.d(r);
    }
  };
}
function b1(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), r, a;
  return {
    c() {
      e = Xe(
        /*formatted_timer*/
        n[20]
      ), r = Xe(t), a = Xe("s");
    },
    l(i) {
      e = We(
        i,
        /*formatted_timer*/
        n[20]
      ), r = We(i, t), a = We(i, "s");
    },
    m(i, u) {
      ge(i, e, u), ge(i, r, u), ge(i, a, u);
    },
    p(i, u) {
      u[0] & /*formatted_timer*/
      1048576 && Qt(
        e,
        /*formatted_timer*/
        i[20]
      ), u[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && Qt(r, t);
    },
    d(i) {
      i && (se(e), se(r), se(a));
    }
  };
}
function w7(n) {
  let e, t;
  return e = new a7({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Td(e.$$.fragment);
    },
    l(r) {
      _d(e.$$.fragment, r);
    },
    m(r, a) {
      Id(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      r[8] === "default"), e.$set(i);
    },
    i(r) {
      t || (c0(e.$$.fragment, r), t = !0);
    },
    o(r) {
      k0(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Fd(e, r);
    }
  };
}
function x7(n) {
  let e, t, r, a, i, u = `${/*last_progress_level*/
  n[15] * 100}%`, l = (
    /*progress*/
    n[7] != null && v1(n)
  );
  return {
    c() {
      e = E0("div"), t = E0("div"), l && l.c(), r = Wt(), a = E0("div"), i = E0("div"), this.h();
    },
    l(s) {
      e = D0(s, "DIV", { class: !0 });
      var o = S0(e);
      t = D0(o, "DIV", { class: !0 });
      var h = S0(t);
      l && l.l(h), h.forEach(se), r = Vt(o), a = D0(o, "DIV", { class: !0 });
      var p = S0(a);
      i = D0(p, "DIV", { class: !0 }), S0(i).forEach(se), p.forEach(se), o.forEach(se), this.h();
    },
    h() {
      f0(t, "class", "progress-level-inner svelte-17v219f"), f0(i, "class", "progress-bar svelte-17v219f"), J0(i, "width", u), f0(a, "class", "progress-bar-wrap svelte-17v219f"), f0(e, "class", "progress-level svelte-17v219f");
    },
    m(s, o) {
      ge(s, e, o), gr(e, t), l && l.m(t, null), gr(e, r), gr(e, a), gr(a, i), n[31](i);
    },
    p(s, o) {
      /*progress*/
      s[7] != null ? l ? l.p(s, o) : (l = v1(s), l.c(), l.m(t, null)) : l && (l.d(1), l = null), o[0] & /*last_progress_level*/
      32768 && u !== (u = `${/*last_progress_level*/
      s[15] * 100}%`) && J0(i, "width", u);
    },
    i: is,
    o: is,
    d(s) {
      s && se(e), l && l.d(), n[31](null);
    }
  };
}
function v1(n) {
  let e, t = fi(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = S1(d1(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Kt();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Kt();
    },
    m(a, i) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, i);
      ge(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = fi(
          /*progress*/
          a[7]
        );
        let u;
        for (u = 0; u < t.length; u += 1) {
          const l = d1(a, t, u);
          r[u] ? r[u].p(l, i) : (r[u] = S1(l), r[u].c(), r[u].m(e.parentNode, e));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && se(e), Md(r, a);
    }
  };
}
function y1(n) {
  let e, t, r, a, i = (
    /*i*/
    n[43] !== 0 && A7()
  ), u = (
    /*p*/
    n[41].desc != null && w1(n)
  ), l = (
    /*p*/
    n[41].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null && x1()
  ), s = (
    /*progress_level*/
    n[14] != null && A1(n)
  );
  return {
    c() {
      i && i.c(), e = Wt(), u && u.c(), t = Wt(), l && l.c(), r = Wt(), s && s.c(), a = Kt();
    },
    l(o) {
      i && i.l(o), e = Vt(o), u && u.l(o), t = Vt(o), l && l.l(o), r = Vt(o), s && s.l(o), a = Kt();
    },
    m(o, h) {
      i && i.m(o, h), ge(o, e, h), u && u.m(o, h), ge(o, t, h), l && l.m(o, h), ge(o, r, h), s && s.m(o, h), ge(o, a, h);
    },
    p(o, h) {
      /*p*/
      o[41].desc != null ? u ? u.p(o, h) : (u = w1(o), u.c(), u.m(t.parentNode, t)) : u && (u.d(1), u = null), /*p*/
      o[41].desc != null && /*progress_level*/
      o[14] && /*progress_level*/
      o[14][
        /*i*/
        o[43]
      ] != null ? l || (l = x1(), l.c(), l.m(r.parentNode, r)) : l && (l.d(1), l = null), /*progress_level*/
      o[14] != null ? s ? s.p(o, h) : (s = A1(o), s.c(), s.m(a.parentNode, a)) : s && (s.d(1), s = null);
    },
    d(o) {
      o && (se(e), se(t), se(r), se(a)), i && i.d(o), u && u.d(o), l && l.d(o), s && s.d(o);
    }
  };
}
function A7(n) {
  let e;
  return {
    c() {
      e = Xe(" /");
    },
    l(t) {
      e = We(t, " /");
    },
    m(t, r) {
      ge(t, e, r);
    },
    d(t) {
      t && se(e);
    }
  };
}
function w1(n) {
  let e = (
    /*p*/
    n[41].desc + ""
  ), t;
  return {
    c() {
      t = Xe(e);
    },
    l(r) {
      t = We(r, e);
    },
    m(r, a) {
      ge(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[41].desc + "") && Qt(t, e);
    },
    d(r) {
      r && se(t);
    }
  };
}
function x1(n) {
  let e;
  return {
    c() {
      e = Xe("-");
    },
    l(t) {
      e = We(t, "-");
    },
    m(t, r) {
      ge(t, e, r);
    },
    d(t) {
      t && se(e);
    }
  };
}
function A1(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[43]
  ] || 0)).toFixed(1) + "", t, r;
  return {
    c() {
      t = Xe(e), r = Xe("%");
    },
    l(a) {
      t = We(a, e), r = We(a, "%");
    },
    m(a, i) {
      ge(a, t, i), ge(a, r, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && Qt(t, e);
    },
    d(a) {
      a && (se(t), se(r));
    }
  };
}
function S1(n) {
  let e, t = (
    /*p*/
    (n[41].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null) && y1(n)
  );
  return {
    c() {
      t && t.c(), e = Kt();
    },
    l(r) {
      t && t.l(r), e = Kt();
    },
    m(r, a) {
      t && t.m(r, a), ge(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[43]
      ] != null ? t ? t.p(r, a) : (t = y1(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && se(e), t && t.d(r);
    }
  };
}
function D1(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[30]["additional-loading-text"]
  ), u = Cd(
    i,
    n,
    /*$$scope*/
    n[29],
    f1
  );
  return {
    c() {
      e = E0("p"), t = Xe(
        /*loading_text*/
        n[9]
      ), r = Wt(), u && u.c(), this.h();
    },
    l(l) {
      e = D0(l, "P", { class: !0 });
      var s = S0(e);
      t = We(
        s,
        /*loading_text*/
        n[9]
      ), s.forEach(se), r = Vt(l), u && u.l(l), this.h();
    },
    h() {
      f0(e, "class", "loading svelte-17v219f");
    },
    m(l, s) {
      ge(l, e, s), gr(e, t), ge(l, r, s), u && u.m(l, s), a = !0;
    },
    p(l, s) {
      (!a || s[0] & /*loading_text*/
      512) && Qt(
        t,
        /*loading_text*/
        l[9]
      ), u && u.p && (!a || s[0] & /*$$scope*/
      536870912) && Rd(
        u,
        i,
        l,
        /*$$scope*/
        l[29],
        a ? Od(
          i,
          /*$$scope*/
          l[29],
          s,
          d7
        ) : Nd(
          /*$$scope*/
          l[29]
        ),
        f1
      );
    },
    i(l) {
      a || (c0(u, l), a = !0);
    },
    o(l) {
      k0(u, l), a = !1;
    },
    d(l) {
      l && (se(e), se(r)), u && u.d(l);
    }
  };
}
function S7(n) {
  let e, t, r, a, i;
  const u = [m7, h7], l = [];
  function s(o, h) {
    return (
      /*status*/
      o[4] === "pending" ? 0 : (
        /*status*/
        o[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = s(n)) && (r = l[t] = u[t](n)), {
    c() {
      e = E0("div"), r && r.c(), this.h();
    },
    l(o) {
      e = D0(o, "DIV", { class: !0 });
      var h = S0(e);
      r && r.l(h), h.forEach(se), this.h();
    },
    h() {
      f0(e, "class", a = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-17v219f"), Ut(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden" || /*status*/
      n[4] == "streaming"), Ut(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), Ut(
        e,
        "generating",
        /*status*/
        n[4] === "generating" && /*show_progress*/
        n[6] === "full"
      ), Ut(
        e,
        "border",
        /*border*/
        n[12]
      ), J0(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), J0(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(o, h) {
      ge(o, e, h), ~t && l[t].m(e, null), n[33](e), i = !0;
    },
    p(o, h) {
      let p = t;
      t = s(o), t === p ? ~t && l[t].p(o, h) : (r && (as(), k0(l[p], 1, 1, () => {
        l[p] = null;
      }), ns()), ~t ? (r = l[t], r ? r.p(o, h) : (r = l[t] = u[t](o), r.c()), c0(r, 1), r.m(e, null)) : r = null), (!i || h[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      o[8] + " " + /*show_progress*/
      o[6] + " svelte-17v219f")) && f0(e, "class", a), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && Ut(e, "hide", !/*status*/
      o[4] || /*status*/
      o[4] === "complete" || /*show_progress*/
      o[6] === "hidden" || /*status*/
      o[4] == "streaming"), (!i || h[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Ut(
        e,
        "translucent",
        /*variant*/
        o[8] === "center" && /*status*/
        (o[4] === "pending" || /*status*/
        o[4] === "error") || /*translucent*/
        o[11] || /*show_progress*/
        o[6] === "minimal"
      ), (!i || h[0] & /*variant, show_progress, status, show_progress*/
      336) && Ut(
        e,
        "generating",
        /*status*/
        o[4] === "generating" && /*show_progress*/
        o[6] === "full"
      ), (!i || h[0] & /*variant, show_progress, border*/
      4416) && Ut(
        e,
        "border",
        /*border*/
        o[12]
      ), h[0] & /*absolute*/
      1024 && J0(
        e,
        "position",
        /*absolute*/
        o[10] ? "absolute" : "static"
      ), h[0] & /*absolute*/
      1024 && J0(
        e,
        "padding",
        /*absolute*/
        o[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(o) {
      i || (c0(r), i = !0);
    },
    o(o) {
      k0(r), i = !1;
    },
    d(o) {
      o && se(e), ~t && l[t].d(), n[33](null);
    }
  };
}
var D7 = function(n, e, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(u) {
      u(i);
    });
  }
  return new (t || (t = Promise))(function(i, u) {
    function l(h) {
      try {
        o(r.next(h));
      } catch (p) {
        u(p);
      }
    }
    function s(h) {
      try {
        o(r.throw(h));
      } catch (p) {
        u(p);
      }
    }
    function o(h) {
      h.done ? i(h.value) : a(h.value).then(l, s);
    }
    o((r = r.apply(n, e || [])).next());
  });
};
let Na = [], mu = !1;
const E7 = typeof window < "u", Ld = E7 ? window.requestAnimationFrame : (n) => {
};
function k7(n) {
  return D7(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Na.push(e), !mu) mu = !0;
      else return;
      yield l7(), Ld(() => {
        let r = [0, 0];
        for (let a = 0; a < Na.length; a++) {
          const u = Na[a].getBoundingClientRect();
          (a === 0 || u.top + window.scrollY <= r[0]) && (r[0] = u.top + window.scrollY, r[1] = a);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), mu = !1, Na = [];
      });
    }
  });
}
function _7(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const u = c7();
  let { i18n: l } = e, { eta: s = null } = e, { queue_position: o } = e, { queue_size: h } = e, { status: p } = e, { scroll_to_output: f = !1 } = e, { timer: m = !0 } = e, { show_progress: D = "full" } = e, { message: _ = null } = e, { progress: w = null } = e, { variant: T = "default" } = e, { loading_text: x = "Loading..." } = e, { absolute: y = !0 } = e, { translucent: S = !1 } = e, { border: F = !1 } = e, { autoscroll: L } = e, I, U = !1, z = 0, B = 0, k = null, P = null, G = 0, Z = null, N, H = null, j = !0;
  const $ = () => {
    t(0, s = t(27, k = t(19, R = null))), t(25, z = performance.now()), t(26, B = 0), U = !0, ce();
  };
  function ce() {
    Ld(() => {
      t(26, B = (performance.now() - z) / 1e3), U && ce();
    });
  }
  function ae() {
    t(26, B = 0), t(0, s = t(27, k = t(19, R = null))), U && (U = !1);
  }
  o7(() => {
    U && ae();
  });
  let R = null;
  function re(q) {
    o1[q ? "unshift" : "push"](() => {
      H = q, t(16, H), t(7, w), t(14, Z), t(15, N);
    });
  }
  const ie = () => {
    u("clear_status");
  };
  function ue(q) {
    o1[q ? "unshift" : "push"](() => {
      I = q, t(13, I);
    });
  }
  return n.$$set = (q) => {
    "i18n" in q && t(1, l = q.i18n), "eta" in q && t(0, s = q.eta), "queue_position" in q && t(2, o = q.queue_position), "queue_size" in q && t(3, h = q.queue_size), "status" in q && t(4, p = q.status), "scroll_to_output" in q && t(22, f = q.scroll_to_output), "timer" in q && t(5, m = q.timer), "show_progress" in q && t(6, D = q.show_progress), "message" in q && t(23, _ = q.message), "progress" in q && t(7, w = q.progress), "variant" in q && t(8, T = q.variant), "loading_text" in q && t(9, x = q.loading_text), "absolute" in q && t(10, y = q.absolute), "translucent" in q && t(11, S = q.translucent), "border" in q && t(12, F = q.border), "autoscroll" in q && t(24, L = q.autoscroll), "$$scope" in q && t(29, i = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (s === null && t(0, s = k), s != null && k !== s && (t(28, P = (performance.now() - z) / 1e3 + s), t(19, R = P.toFixed(1)), t(27, k = s))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, G = P === null || P <= 0 || !B ? null : Math.min(B / P, 1)), n.$$.dirty[0] & /*progress*/
    128 && w != null && t(18, j = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (w != null ? t(14, Z = w.map((q) => {
      if (q.index != null && q.length != null)
        return q.index / q.length;
      if (q.progress != null)
        return q.progress;
    })) : t(14, Z = null), Z ? (t(15, N = Z[Z.length - 1]), H && (N === 0 ? t(16, H.style.transition = "0", H) : t(16, H.style.transition = "150ms", H))) : t(15, N = void 0)), n.$$.dirty[0] & /*status*/
    16 && (p === "pending" ? $() : ae()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && I && f && (p === "pending" || p === "complete") && k7(I, L), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, r = B.toFixed(1));
  }, [
    s,
    l,
    o,
    h,
    p,
    m,
    D,
    w,
    T,
    x,
    y,
    S,
    F,
    I,
    Z,
    N,
    H,
    G,
    j,
    R,
    r,
    u,
    f,
    _,
    L,
    z,
    B,
    k,
    P,
    i,
    a,
    re,
    ie,
    ue
  ];
}
class T7 extends i7 {
  constructor(e) {
    super(), u7(
      this,
      e,
      _7,
      S7,
      s7,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries: Bd,
  setPrototypeOf: E1,
  isFrozen: C7,
  getPrototypeOf: F7,
  getOwnPropertyDescriptor: M7
} = Object;
let {
  freeze: pt,
  seal: Jt,
  create: zd
} = Object, {
  apply: us,
  construct: ss
} = typeof Reflect < "u" && Reflect;
pt || (pt = function(e) {
  return e;
});
Jt || (Jt = function(e) {
  return e;
});
us || (us = function(e, t, r) {
  return e.apply(t, r);
});
ss || (ss = function(e, t) {
  return new e(...t);
});
const Oa = zt(Array.prototype.forEach), k1 = zt(Array.prototype.pop), yn = zt(Array.prototype.push), Wa = zt(String.prototype.toLowerCase), pu = zt(String.prototype.toString), _1 = zt(String.prototype.match), wn = zt(String.prototype.replace), N7 = zt(String.prototype.indexOf), O7 = zt(String.prototype.trim), l0 = zt(Object.prototype.hasOwnProperty), ot = zt(RegExp.prototype.test), xn = I7(TypeError);
function zt(n) {
  return function(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return us(n, e, r);
  };
}
function I7(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return ss(n, t);
  };
}
function Ae(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wa;
  E1 && E1(n, null);
  let r = e.length;
  for (; r--; ) {
    let a = e[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (C7(e) || (e[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function R7(n) {
  for (let e = 0; e < n.length; e++)
    l0(n, e) || (n[e] = null);
  return n;
}
function mr(n) {
  const e = zd(null);
  for (const [t, r] of Bd(n))
    l0(n, t) && (Array.isArray(r) ? e[t] = R7(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = mr(r) : e[t] = r);
  return e;
}
function An(n, e) {
  for (; n !== null; ) {
    const r = M7(n, e);
    if (r) {
      if (r.get)
        return zt(r.get);
      if (typeof r.value == "function")
        return zt(r.value);
    }
    n = F7(n);
  }
  function t() {
    return null;
  }
  return t;
}
const T1 = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gu = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bu = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), L7 = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), vu = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), B7 = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), C1 = pt(["#text"]), F1 = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), yu = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), M1 = pt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ia = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), z7 = Jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), P7 = Jt(/<%[\w\W]*|[\w\W]*%>/gm), q7 = Jt(/\${[\w\W]*}/gm), H7 = Jt(/^data-[\-\w.\u00B7-\uFFFF]/), U7 = Jt(/^aria-[\-\w]+$/), Pd = Jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), G7 = Jt(/^(?:\w+script|data):/i), j7 = Jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), qd = Jt(/^html$/i), V7 = Jt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var N1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: z7,
  ERB_EXPR: P7,
  TMPLIT_EXPR: q7,
  DATA_ATTR: H7,
  ARIA_ATTR: U7,
  IS_ALLOWED_URI: Pd,
  IS_SCRIPT_OR_DATA: G7,
  ATTR_WHITESPACE: j7,
  DOCTYPE_NAME: qd,
  CUSTOM_ELEMENT: V7
});
const Sn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, W7 = function() {
  return typeof window > "u" ? null : window;
}, X7 = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (r = t.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(u) {
        return u;
      },
      createScriptURL(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Hd() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W7();
  const e = (W) => Hd(W);
  if (e.version = "3.1.7", e.removed = [], !n || !n.document || n.document.nodeType !== Sn.document)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const r = t, a = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: u,
    Node: l,
    Element: s,
    NodeFilter: o,
    NamedNodeMap: h = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: f,
    trustedTypes: m
  } = n, D = s.prototype, _ = An(D, "cloneNode"), w = An(D, "remove"), T = An(D, "nextSibling"), x = An(D, "childNodes"), y = An(D, "parentNode");
  if (typeof u == "function") {
    const W = t.createElement("template");
    W.content && W.content.ownerDocument && (t = W.content.ownerDocument);
  }
  let S, F = "";
  const {
    implementation: L,
    createNodeIterator: I,
    createDocumentFragment: U,
    getElementsByTagName: z
  } = t, {
    importNode: B
  } = r;
  let k = {};
  e.isSupported = typeof Bd == "function" && typeof y == "function" && L && L.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: P,
    ERB_EXPR: G,
    TMPLIT_EXPR: Z,
    DATA_ATTR: N,
    ARIA_ATTR: H,
    IS_SCRIPT_OR_DATA: j,
    ATTR_WHITESPACE: $,
    CUSTOM_ELEMENT: ce
  } = N1;
  let {
    IS_ALLOWED_URI: ae
  } = N1, R = null;
  const re = Ae({}, [...T1, ...gu, ...bu, ...vu, ...C1]);
  let ie = null;
  const ue = Ae({}, [...F1, ...yu, ...M1, ...Ia]);
  let q = Object.seal(zd(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Q = null, ee = null, ye = !0, Te = !0, Le = !1, Be = !0, Ye = !1, He = !0, ze = !1, nt = !1, bt = !1, it = !1, vt = !1, yt = !1, Hr = !0, Ur = !1;
  const Fi = "user-content-";
  let ir = !0, e0 = !1, Tt = {}, Ct = null;
  const Gr = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let jr = null;
  const Vr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let ur = null;
  const Wr = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), M0 = "http://www.w3.org/1998/Math/MathML", N0 = "http://www.w3.org/2000/svg", et = "http://www.w3.org/1999/xhtml";
  let Ft = et, sr = !1, lr = null;
  const Mi = Ae({}, [M0, N0, et], pu);
  let t0 = null;
  const Ni = ["application/xhtml+xml", "text/html"], Oi = "text/html";
  let we = null, Mt = null;
  const Ii = t.createElement("form"), Xr = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, or = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Mt && Mt === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = mr(b), t0 = // eslint-disable-next-line unicorn/prefer-includes
      Ni.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Oi : b.PARSER_MEDIA_TYPE, we = t0 === "application/xhtml+xml" ? pu : Wa, R = l0(b, "ALLOWED_TAGS") ? Ae({}, b.ALLOWED_TAGS, we) : re, ie = l0(b, "ALLOWED_ATTR") ? Ae({}, b.ALLOWED_ATTR, we) : ue, lr = l0(b, "ALLOWED_NAMESPACES") ? Ae({}, b.ALLOWED_NAMESPACES, pu) : Mi, ur = l0(b, "ADD_URI_SAFE_ATTR") ? Ae(
        mr(Wr),
        // eslint-disable-line indent
        b.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        we
        // eslint-disable-line indent
      ) : Wr, jr = l0(b, "ADD_DATA_URI_TAGS") ? Ae(
        mr(Vr),
        // eslint-disable-line indent
        b.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        we
        // eslint-disable-line indent
      ) : Vr, Ct = l0(b, "FORBID_CONTENTS") ? Ae({}, b.FORBID_CONTENTS, we) : Gr, Q = l0(b, "FORBID_TAGS") ? Ae({}, b.FORBID_TAGS, we) : {}, ee = l0(b, "FORBID_ATTR") ? Ae({}, b.FORBID_ATTR, we) : {}, Tt = l0(b, "USE_PROFILES") ? b.USE_PROFILES : !1, ye = b.ALLOW_ARIA_ATTR !== !1, Te = b.ALLOW_DATA_ATTR !== !1, Le = b.ALLOW_UNKNOWN_PROTOCOLS || !1, Be = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ye = b.SAFE_FOR_TEMPLATES || !1, He = b.SAFE_FOR_XML !== !1, ze = b.WHOLE_DOCUMENT || !1, it = b.RETURN_DOM || !1, vt = b.RETURN_DOM_FRAGMENT || !1, yt = b.RETURN_TRUSTED_TYPE || !1, bt = b.FORCE_BODY || !1, Hr = b.SANITIZE_DOM !== !1, Ur = b.SANITIZE_NAMED_PROPS || !1, ir = b.KEEP_CONTENT !== !1, e0 = b.IN_PLACE || !1, ae = b.ALLOWED_URI_REGEXP || Pd, Ft = b.NAMESPACE || et, q = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && Xr(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && Xr(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ye && (Te = !1), vt && (it = !0), Tt && (R = Ae({}, C1), ie = [], Tt.html === !0 && (Ae(R, T1), Ae(ie, F1)), Tt.svg === !0 && (Ae(R, gu), Ae(ie, yu), Ae(ie, Ia)), Tt.svgFilters === !0 && (Ae(R, bu), Ae(ie, yu), Ae(ie, Ia)), Tt.mathMl === !0 && (Ae(R, vu), Ae(ie, M1), Ae(ie, Ia))), b.ADD_TAGS && (R === re && (R = mr(R)), Ae(R, b.ADD_TAGS, we)), b.ADD_ATTR && (ie === ue && (ie = mr(ie)), Ae(ie, b.ADD_ATTR, we)), b.ADD_URI_SAFE_ATTR && Ae(ur, b.ADD_URI_SAFE_ATTR, we), b.FORBID_CONTENTS && (Ct === Gr && (Ct = mr(Ct)), Ae(Ct, b.FORBID_CONTENTS, we)), ir && (R["#text"] = !0), ze && Ae(R, ["html", "head", "body"]), R.table && (Ae(R, ["tbody"]), delete Q.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = b.TRUSTED_TYPES_POLICY, F = S.createHTML("");
      } else
        S === void 0 && (S = X7(m, a)), S !== null && typeof F == "string" && (F = S.createHTML(""));
      pt && pt(b), Mt = b;
    }
  }, Yr = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), $r = Ae({}, ["annotation-xml"]), Ri = Ae({}, ["title", "style", "font", "a", "script"]), Zr = Ae({}, [...gu, ...bu, ...L7]), Kr = Ae({}, [...vu, ...B7]), Li = function(b) {
    let M = y(b);
    (!M || !M.tagName) && (M = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const V = Wa(b.tagName), oe = Wa(M.tagName);
    return lr[b.namespaceURI] ? b.namespaceURI === N0 ? M.namespaceURI === et ? V === "svg" : M.namespaceURI === M0 ? V === "svg" && (oe === "annotation-xml" || Yr[oe]) : !!Zr[V] : b.namespaceURI === M0 ? M.namespaceURI === et ? V === "math" : M.namespaceURI === N0 ? V === "math" && $r[oe] : !!Kr[V] : b.namespaceURI === et ? M.namespaceURI === N0 && !$r[oe] || M.namespaceURI === M0 && !Yr[oe] ? !1 : !Kr[V] && (Ri[V] || !Zr[V]) : !!(t0 === "application/xhtml+xml" && lr[b.namespaceURI]) : !1;
  }, Ze = function(b) {
    yn(e.removed, {
      element: b
    });
    try {
      y(b).removeChild(b);
    } catch {
      w(b);
    }
  }, O0 = function(b, M) {
    try {
      yn(e.removed, {
        attribute: M.getAttributeNode(b),
        from: M
      });
    } catch {
      yn(e.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(b), b === "is" && !ie[b])
      if (it || vt)
        try {
          Ze(M);
        } catch {
        }
      else
        try {
          M.setAttribute(b, "");
        } catch {
        }
  }, Qr = function(b) {
    let M = null, V = null;
    if (bt)
      b = "<remove></remove>" + b;
    else {
      const De = _1(b, /^[\r\n\t ]+/);
      V = De && De[0];
    }
    t0 === "application/xhtml+xml" && Ft === et && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const oe = S ? S.createHTML(b) : b;
    if (Ft === et)
      try {
        M = new f().parseFromString(oe, t0);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = L.createDocument(Ft, "template", null);
      try {
        M.documentElement.innerHTML = sr ? F : oe;
      } catch {
      }
    }
    const Ee = M.body || M.documentElement;
    return b && V && Ee.insertBefore(t.createTextNode(V), Ee.childNodes[0] || null), Ft === et ? z.call(M, ze ? "html" : "body")[0] : ze ? M.documentElement : Ee;
  }, Jr = function(b) {
    return I.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION | o.SHOW_CDATA_SECTION,
      null
    );
  }, en = function(b) {
    return b instanceof p && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof h) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, tn = function(b) {
    return typeof l == "function" && b instanceof l;
  }, tt = function(b, M, V) {
    k[b] && Oa(k[b], (oe) => {
      oe.call(e, M, V, Mt);
    });
  }, rn = function(b) {
    let M = null;
    if (tt("beforeSanitizeElements", b, null), en(b))
      return Ze(b), !0;
    const V = we(b.nodeName);
    if (tt("uponSanitizeElement", b, {
      tagName: V,
      allowedTags: R
    }), b.hasChildNodes() && !tn(b.firstElementChild) && ot(/<[/\w]/g, b.innerHTML) && ot(/<[/\w]/g, b.textContent) || b.nodeType === Sn.progressingInstruction || He && b.nodeType === Sn.comment && ot(/<[/\w]/g, b.data))
      return Ze(b), !0;
    if (!R[V] || Q[V]) {
      if (!Q[V] && an(V) && (q.tagNameCheck instanceof RegExp && ot(q.tagNameCheck, V) || q.tagNameCheck instanceof Function && q.tagNameCheck(V)))
        return !1;
      if (ir && !Ct[V]) {
        const oe = y(b) || b.parentNode, Ee = x(b) || b.childNodes;
        if (Ee && oe) {
          const De = Ee.length;
          for (let Fe = De - 1; Fe >= 0; --Fe) {
            const Ke = _(Ee[Fe], !0);
            Ke.__removalCount = (b.__removalCount || 0) + 1, oe.insertBefore(Ke, T(b));
          }
        }
      }
      return Ze(b), !0;
    }
    return b instanceof s && !Li(b) || (V === "noscript" || V === "noembed" || V === "noframes") && ot(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Ze(b), !0) : (Ye && b.nodeType === Sn.text && (M = b.textContent, Oa([P, G, Z], (oe) => {
      M = wn(M, oe, " ");
    }), b.textContent !== M && (yn(e.removed, {
      element: b.cloneNode()
    }), b.textContent = M)), tt("afterSanitizeElements", b, null), !1);
  }, nn = function(b, M, V) {
    if (Hr && (M === "id" || M === "name") && (V in t || V in Ii))
      return !1;
    if (!(Te && !ee[M] && ot(N, M))) {
      if (!(ye && ot(H, M))) {
        if (!ie[M] || ee[M]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(an(b) && (q.tagNameCheck instanceof RegExp && ot(q.tagNameCheck, b) || q.tagNameCheck instanceof Function && q.tagNameCheck(b)) && (q.attributeNameCheck instanceof RegExp && ot(q.attributeNameCheck, M) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(M)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            M === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && ot(q.tagNameCheck, V) || q.tagNameCheck instanceof Function && q.tagNameCheck(V)))
          ) return !1;
        } else if (!ur[M]) {
          if (!ot(ae, wn(V, $, ""))) {
            if (!((M === "src" || M === "xlink:href" || M === "href") && b !== "script" && N7(V, "data:") === 0 && jr[b])) {
              if (!(Le && !ot(j, wn(V, $, "")))) {
                if (V)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, an = function(b) {
    return b !== "annotation-xml" && _1(b, ce);
  }, un = function(b) {
    tt("beforeSanitizeAttributes", b, null);
    const {
      attributes: M
    } = b;
    if (!M)
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ie
    };
    let oe = M.length;
    for (; oe--; ) {
      const Ee = M[oe], {
        name: De,
        namespaceURI: Fe,
        value: Ke
      } = Ee, r0 = we(De);
      let Ce = De === "value" ? Ke : O7(Ke);
      if (V.attrName = r0, V.attrValue = Ce, V.keepAttr = !0, V.forceKeepAttr = void 0, tt("uponSanitizeAttribute", b, V), Ce = V.attrValue, V.forceKeepAttr || (O0(De, b), !V.keepAttr))
        continue;
      if (!Be && ot(/\/>/i, Ce)) {
        O0(De, b);
        continue;
      }
      Ye && Oa([P, G, Z], (ln) => {
        Ce = wn(Ce, ln, " ");
      });
      const sn = we(b.nodeName);
      if (nn(sn, r0, Ce)) {
        if (Ur && (r0 === "id" || r0 === "name") && (O0(De, b), Ce = Fi + Ce), He && ot(/((--!?|])>)|<\/(style|title)/i, Ce)) {
          O0(De, b);
          continue;
        }
        if (S && typeof m == "object" && typeof m.getAttributeType == "function" && !Fe)
          switch (m.getAttributeType(sn, r0)) {
            case "TrustedHTML": {
              Ce = S.createHTML(Ce);
              break;
            }
            case "TrustedScriptURL": {
              Ce = S.createScriptURL(Ce);
              break;
            }
          }
        try {
          Fe ? b.setAttributeNS(Fe, De, Ce) : b.setAttribute(De, Ce), en(b) ? Ze(b) : k1(e.removed);
        } catch {
        }
      }
    }
    tt("afterSanitizeAttributes", b, null);
  }, Bi = function W(b) {
    let M = null;
    const V = Jr(b);
    for (tt("beforeSanitizeShadowDOM", b, null); M = V.nextNode(); )
      tt("uponSanitizeShadowNode", M, null), !rn(M) && (M.content instanceof i && W(M.content), un(M));
    tt("afterSanitizeShadowDOM", b, null);
  };
  return e.sanitize = function(W) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, V = null, oe = null, Ee = null;
    if (sr = !W, sr && (W = "<!-->"), typeof W != "string" && !tn(W))
      if (typeof W.toString == "function") {
        if (W = W.toString(), typeof W != "string")
          throw xn("dirty is not a string, aborting");
      } else
        throw xn("toString is not a function");
    if (!e.isSupported)
      return W;
    if (nt || or(b), e.removed = [], typeof W == "string" && (e0 = !1), e0) {
      if (W.nodeName) {
        const Ke = we(W.nodeName);
        if (!R[Ke] || Q[Ke])
          throw xn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (W instanceof l)
      M = Qr("<!---->"), V = M.ownerDocument.importNode(W, !0), V.nodeType === Sn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? M = V : M.appendChild(V);
    else {
      if (!it && !Ye && !ze && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return S && yt ? S.createHTML(W) : W;
      if (M = Qr(W), !M)
        return it ? null : yt ? F : "";
    }
    M && bt && Ze(M.firstChild);
    const De = Jr(e0 ? W : M);
    for (; oe = De.nextNode(); )
      rn(oe) || (oe.content instanceof i && Bi(oe.content), un(oe));
    if (e0)
      return W;
    if (it) {
      if (vt)
        for (Ee = U.call(M.ownerDocument); M.firstChild; )
          Ee.appendChild(M.firstChild);
      else
        Ee = M;
      return (ie.shadowroot || ie.shadowrootmode) && (Ee = B.call(r, Ee, !0)), Ee;
    }
    let Fe = ze ? M.outerHTML : M.innerHTML;
    return ze && R["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && ot(qd, M.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + Fe), Ye && Oa([P, G, Z], (Ke) => {
      Fe = wn(Fe, Ke, " ");
    }), S && yt ? S.createHTML(Fe) : Fe;
  }, e.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    or(W), nt = !0;
  }, e.clearConfig = function() {
    Mt = null, nt = !1;
  }, e.isValidAttribute = function(W, b, M) {
    Mt || or({});
    const V = we(W), oe = we(b);
    return nn(V, oe, M);
  }, e.addHook = function(W, b) {
    typeof b == "function" && (k[W] = k[W] || [], yn(k[W], b));
  }, e.removeHook = function(W) {
    if (k[W])
      return k1(k[W]);
  }, e.removeHooks = function(W) {
    k[W] && (k[W] = []);
  }, e.removeAllHooks = function() {
    k = {};
  }, e;
}
Hd();
const {
  SvelteComponent: Y7,
  append_hydration: Ge,
  assign: $7,
  attr: pe,
  binding_callbacks: Z7,
  children: p0,
  claim_component: ls,
  claim_element: xt,
  claim_space: g0,
  claim_text: Xa,
  create_component: os,
  destroy_component: cs,
  detach: ft,
  element: At,
  get_spread_object: K7,
  get_spread_update: Q7,
  init: J7,
  insert_hydration: _n,
  listen: ct,
  mount_component: fs,
  run_all: eg,
  safe_not_equal: tg,
  set_data: ds,
  set_input_value: $0,
  space: b0,
  text: Ya,
  to_number: Cr,
  toggle_class: O1,
  transition_in: hs,
  transition_out: ms
} = window.__gradio__svelte__internal;
function rg(n) {
  let e;
  return {
    c() {
      e = Ya(
        /*label*/
        n[4]
      );
    },
    l(t) {
      e = Xa(
        t,
        /*label*/
        n[4]
      );
    },
    m(t, r) {
      _n(t, e, r);
    },
    p(t, r) {
      r[0] & /*label*/
      16 && ds(
        e,
        /*label*/
        t[4]
      );
    },
    d(t) {
      t && ft(e);
    }
  };
}
function ng(n) {
  let e, t, r, a, i, u, l, s, o, h, p, f, m, D, _, w, T, x, y, S, F, L, I, U, z, B, k, P, G, Z, N, H, j, $, ce, ae, R, re, ie;
  const ue = [
    { autoscroll: (
      /*gradio*/
      n[0].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[0].i18n
    ) },
    /*loading_status*/
    n[14]
  ];
  let q = {};
  for (let Q = 0; Q < ue.length; Q += 1)
    q = $7(q, ue[Q]);
  return e = new T7({ props: q }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[26]
  ), i = new E8({
    props: {
      show_label: (
        /*show_label*/
        n[12]
      ),
      info: (
        /*info*/
        n[5]
      ),
      $$slots: { default: [rg] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      os(e.$$.fragment), t = b0(), r = At("div"), a = At("div"), os(i.$$.fragment), u = b0(), l = At("div"), s = At("input"), p = b0(), f = At("input"), _ = b0(), w = At("button"), T = Ya("↺"), y = b0(), S = At("div"), F = At("span"), L = Ya(
        /*minimum*/
        n[9]
      ), I = b0(), U = At("div"), z = At("div"), B = b0(), k = At("div"), P = b0(), G = At("input"), N = b0(), H = At("input"), $ = b0(), ce = At("span"), ae = Ya(
        /*maximum*/
        n[10]
      ), this.h();
    },
    l(Q) {
      ls(e.$$.fragment, Q), t = g0(Q), r = xt(Q, "DIV", { class: !0 });
      var ee = p0(r);
      a = xt(ee, "DIV", { class: !0 });
      var ye = p0(a);
      ls(i.$$.fragment, ye), u = g0(ye), l = xt(ye, "DIV", { class: !0 });
      var Te = p0(l);
      s = xt(Te, "INPUT", {
        "aria-label": !0,
        "data-testid": !0,
        type: !0,
        min: !0,
        max: !0,
        class: !0
      }), p = g0(Te), f = xt(Te, "INPUT", {
        "aria-label": !0,
        "data-testid": !0,
        type: !0,
        min: !0,
        max: !0,
        class: !0
      }), _ = g0(Te), w = xt(Te, "BUTTON", { class: !0, "aria-label": !0 });
      var Le = p0(w);
      T = Xa(Le, "↺"), Le.forEach(ft), Te.forEach(ft), ye.forEach(ft), ee.forEach(ft), y = g0(Q), S = xt(Q, "DIV", { class: !0 });
      var Be = p0(S);
      F = xt(Be, "SPAN", { class: !0 });
      var Ye = p0(F);
      L = Xa(
        Ye,
        /*minimum*/
        n[9]
      ), Ye.forEach(ft), I = g0(Be), U = xt(Be, "DIV", { class: !0 });
      var He = p0(U);
      z = xt(He, "DIV", { class: !0 }), p0(z).forEach(ft), B = g0(He), k = xt(He, "DIV", { class: !0, style: !0 }), p0(k).forEach(ft), P = g0(He), G = xt(He, "INPUT", {
        type: !0,
        min: !0,
        max: !0,
        step: !0,
        class: !0
      }), N = g0(He), H = xt(He, "INPUT", {
        type: !0,
        min: !0,
        max: !0,
        step: !0,
        class: !0
      }), He.forEach(ft), $ = g0(Be), ce = xt(Be, "SPAN", { class: !0 });
      var ze = p0(ce);
      ae = Xa(
        ze,
        /*maximum*/
        n[10]
      ), ze.forEach(ft), Be.forEach(ft), this.h();
    },
    h() {
      pe(s, "aria-label", o = `min input for ${/*label*/
      n[4]}`), pe(s, "data-testid", "min-input"), pe(s, "type", "number"), pe(
        s,
        "min",
        /*minimum*/
        n[9]
      ), pe(
        s,
        "max",
        /*maximum*/
        n[10]
      ), s.disabled = h = !/*interactive*/
      n[13], pe(s, "class", "svelte-17pocne"), pe(f, "aria-label", m = `max input for ${/*label*/
      n[4]}`), pe(f, "data-testid", "max-input"), pe(f, "type", "number"), pe(
        f,
        "min",
        /*minimum*/
        n[9]
      ), pe(
        f,
        "max",
        /*maximum*/
        n[10]
      ), f.disabled = D = !/*interactive*/
      n[13], pe(f, "class", "svelte-17pocne"), pe(w, "class", "reset-button svelte-17pocne"), w.disabled = x = !/*interactive*/
      n[13], pe(w, "aria-label", "Reset to default value"), pe(l, "class", "tab-like-container svelte-17pocne"), pe(a, "class", "head svelte-17pocne"), pe(r, "class", "wrap svelte-17pocne"), pe(F, "class", "min_value svelte-17pocne"), pe(z, "class", "range-bg svelte-17pocne"), pe(k, "class", "range-line svelte-17pocne"), pe(
        k,
        "style",
        /*rangeLine*/
        n[18]
      ), O1(k, "disabled", !/*interactive*/
      n[13]), pe(G, "type", "range"), G.disabled = Z = !/*interactive*/
      n[13], pe(
        G,
        "min",
        /*minimum*/
        n[9]
      ), pe(
        G,
        "max",
        /*maximum*/
        n[10]
      ), pe(
        G,
        "step",
        /*step*/
        n[11]
      ), pe(G, "class", "svelte-17pocne"), pe(H, "type", "range"), H.disabled = j = !/*interactive*/
      n[13], pe(
        H,
        "min",
        /*minimum*/
        n[9]
      ), pe(
        H,
        "max",
        /*maximum*/
        n[10]
      ), pe(
        H,
        "step",
        /*step*/
        n[11]
      ), pe(H, "class", "svelte-17pocne"), pe(U, "class", "range-slider svelte-17pocne"), pe(ce, "class", "max_value svelte-17pocne"), pe(S, "class", "slider_input_container svelte-17pocne");
    },
    m(Q, ee) {
      fs(e, Q, ee), _n(Q, t, ee), _n(Q, r, ee), Ge(r, a), fs(i, a, null), Ge(a, u), Ge(a, l), Ge(l, s), $0(
        s,
        /*selected_min*/
        n[15]
      ), Ge(l, p), Ge(l, f), $0(
        f,
        /*selected_max*/
        n[16]
      ), Ge(l, _), Ge(l, w), Ge(w, T), _n(Q, y, ee), _n(Q, S, ee), Ge(S, F), Ge(F, L), Ge(S, I), Ge(S, U), Ge(U, z), Ge(U, B), Ge(U, k), n[29](k), Ge(U, P), Ge(U, G), $0(
        G,
        /*selected_min*/
        n[15]
      ), Ge(U, N), Ge(U, H), $0(
        H,
        /*selected_max*/
        n[16]
      ), Ge(S, $), Ge(S, ce), Ge(ce, ae), R = !0, re || (ie = [
        ct(
          s,
          "input",
          /*input0_input_handler*/
          n[27]
        ),
        ct(
          s,
          "pointerup",
          /*handle_release*/
          n[21]
        ),
        ct(
          s,
          "blur",
          /*handle_release*/
          n[21]
        ),
        ct(
          f,
          "input",
          /*input1_input_handler*/
          n[28]
        ),
        ct(
          f,
          "pointerup",
          /*handle_release*/
          n[21]
        ),
        ct(
          f,
          "blur",
          /*handle_release*/
          n[21]
        ),
        ct(
          w,
          "click",
          /*reset_value*/
          n[22]
        ),
        ct(
          G,
          "change",
          /*input2_change_input_handler*/
          n[30]
        ),
        ct(
          G,
          "input",
          /*input2_change_input_handler*/
          n[30]
        ),
        ct(
          G,
          "input",
          /*handle_min_change*/
          n[19]
        ),
        ct(
          G,
          "pointerup",
          /*handle_release*/
          n[21]
        ),
        ct(
          H,
          "change",
          /*input3_change_input_handler*/
          n[31]
        ),
        ct(
          H,
          "input",
          /*input3_change_input_handler*/
          n[31]
        ),
        ct(
          H,
          "input",
          /*handle_max_change*/
          n[20]
        ),
        ct(
          H,
          "pointerup",
          /*handle_release*/
          n[21]
        )
      ], re = !0);
    },
    p(Q, ee) {
      const ye = ee[0] & /*gradio, loading_status*/
      16385 ? Q7(ue, [
        ee[0] & /*gradio*/
        1 && { autoscroll: (
          /*gradio*/
          Q[0].autoscroll
        ) },
        ee[0] & /*gradio*/
        1 && { i18n: (
          /*gradio*/
          Q[0].i18n
        ) },
        ee[0] & /*loading_status*/
        16384 && K7(
          /*loading_status*/
          Q[14]
        )
      ]) : {};
      e.$set(ye);
      const Te = {};
      ee[0] & /*show_label*/
      4096 && (Te.show_label = /*show_label*/
      Q[12]), ee[0] & /*info*/
      32 && (Te.info = /*info*/
      Q[5]), ee[0] & /*label*/
      16 | ee[1] & /*$$scope*/
      8 && (Te.$$scope = { dirty: ee, ctx: Q }), i.$set(Te), (!R || ee[0] & /*label*/
      16 && o !== (o = `min input for ${/*label*/
      Q[4]}`)) && pe(s, "aria-label", o), (!R || ee[0] & /*minimum*/
      512) && pe(
        s,
        "min",
        /*minimum*/
        Q[9]
      ), (!R || ee[0] & /*maximum*/
      1024) && pe(
        s,
        "max",
        /*maximum*/
        Q[10]
      ), (!R || ee[0] & /*interactive*/
      8192 && h !== (h = !/*interactive*/
      Q[13])) && (s.disabled = h), ee[0] & /*selected_min*/
      32768 && Cr(s.value) !== /*selected_min*/
      Q[15] && $0(
        s,
        /*selected_min*/
        Q[15]
      ), (!R || ee[0] & /*label*/
      16 && m !== (m = `max input for ${/*label*/
      Q[4]}`)) && pe(f, "aria-label", m), (!R || ee[0] & /*minimum*/
      512) && pe(
        f,
        "min",
        /*minimum*/
        Q[9]
      ), (!R || ee[0] & /*maximum*/
      1024) && pe(
        f,
        "max",
        /*maximum*/
        Q[10]
      ), (!R || ee[0] & /*interactive*/
      8192 && D !== (D = !/*interactive*/
      Q[13])) && (f.disabled = D), ee[0] & /*selected_max*/
      65536 && Cr(f.value) !== /*selected_max*/
      Q[16] && $0(
        f,
        /*selected_max*/
        Q[16]
      ), (!R || ee[0] & /*interactive*/
      8192 && x !== (x = !/*interactive*/
      Q[13])) && (w.disabled = x), (!R || ee[0] & /*minimum*/
      512) && ds(
        L,
        /*minimum*/
        Q[9]
      ), (!R || ee[0] & /*rangeLine*/
      262144) && pe(
        k,
        "style",
        /*rangeLine*/
        Q[18]
      ), (!R || ee[0] & /*interactive*/
      8192) && O1(k, "disabled", !/*interactive*/
      Q[13]), (!R || ee[0] & /*interactive*/
      8192 && Z !== (Z = !/*interactive*/
      Q[13])) && (G.disabled = Z), (!R || ee[0] & /*minimum*/
      512) && pe(
        G,
        "min",
        /*minimum*/
        Q[9]
      ), (!R || ee[0] & /*maximum*/
      1024) && pe(
        G,
        "max",
        /*maximum*/
        Q[10]
      ), (!R || ee[0] & /*step*/
      2048) && pe(
        G,
        "step",
        /*step*/
        Q[11]
      ), ee[0] & /*selected_min*/
      32768 && $0(
        G,
        /*selected_min*/
        Q[15]
      ), (!R || ee[0] & /*interactive*/
      8192 && j !== (j = !/*interactive*/
      Q[13])) && (H.disabled = j), (!R || ee[0] & /*minimum*/
      512) && pe(
        H,
        "min",
        /*minimum*/
        Q[9]
      ), (!R || ee[0] & /*maximum*/
      1024) && pe(
        H,
        "max",
        /*maximum*/
        Q[10]
      ), (!R || ee[0] & /*step*/
      2048) && pe(
        H,
        "step",
        /*step*/
        Q[11]
      ), ee[0] & /*selected_max*/
      65536 && $0(
        H,
        /*selected_max*/
        Q[16]
      ), (!R || ee[0] & /*maximum*/
      1024) && ds(
        ae,
        /*maximum*/
        Q[10]
      );
    },
    i(Q) {
      R || (hs(e.$$.fragment, Q), hs(i.$$.fragment, Q), R = !0);
    },
    o(Q) {
      ms(e.$$.fragment, Q), ms(i.$$.fragment, Q), R = !1;
    },
    d(Q) {
      Q && (ft(t), ft(r), ft(y), ft(S)), cs(e, Q), cs(i), n[29](null), re = !1, eg(ie);
    }
  };
}
function ag(n) {
  let e, t;
  return e = new sh({
    props: {
      visible: (
        /*visible*/
        n[3]
      ),
      elem_id: (
        /*elem_id*/
        n[1]
      ),
      elem_classes: (
        /*elem_classes*/
        n[2]
      ),
      container: (
        /*container*/
        n[6]
      ),
      scale: (
        /*scale*/
        n[7]
      ),
      min_width: (
        /*min_width*/
        n[8]
      ),
      $$slots: { default: [ng] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      os(e.$$.fragment);
    },
    l(r) {
      ls(e.$$.fragment, r);
    },
    m(r, a) {
      fs(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*visible*/
      8 && (i.visible = /*visible*/
      r[3]), a[0] & /*elem_id*/
      2 && (i.elem_id = /*elem_id*/
      r[1]), a[0] & /*elem_classes*/
      4 && (i.elem_classes = /*elem_classes*/
      r[2]), a[0] & /*container*/
      64 && (i.container = /*container*/
      r[6]), a[0] & /*scale*/
      128 && (i.scale = /*scale*/
      r[7]), a[0] & /*min_width*/
      256 && (i.min_width = /*min_width*/
      r[8]), a[0] & /*maximum, interactive, minimum, step, selected_max, selected_min, rangeLine, range_input, label, show_label, info, gradio, loading_status*/
      523825 | a[1] & /*$$scope*/
      8 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (hs(e.$$.fragment, r), t = !0);
    },
    o(r) {
      ms(e.$$.fragment, r), t = !1;
    },
    d(r) {
      cs(e, r);
    }
  };
}
function ig(n, e, t) {
  let r, { gradio: a } = e, { elem_id: i = "" } = e, { elem_classes: u = [] } = e, { visible: l = !0 } = e, { value: s } = e, { label: o = a.i18n("slider.slider") } = e, { info: h = void 0 } = e, { container: p = !0 } = e, { scale: f = null } = e, { min_width: m = void 0 } = e, { minimum: D = 0 } = e, { maximum: _ = 100 } = e, { step: w } = e, { show_label: T } = e, { interactive: x } = e, { loading_status: y } = e, { value_is_output: S = !1 } = e;
  function F(R, re) {
    t(23, s = [R, re]), a.dispatch("change", [R, re]), S || a.dispatch("input", [R, re]);
  }
  function L(R) {
    t(15, B = parseFloat(R.target.value)), B > k && t(16, k = B);
  }
  function I(R) {
    t(16, k = parseFloat(R.target.value)), k < B && t(15, B = k);
  }
  function U(R) {
    a.dispatch("release", s);
  }
  let z = s, [B, k] = s, P = s, G;
  function Z() {
    t(15, [B, k] = P, B, (t(16, k), t(25, z), t(23, s))), a.dispatch("change"), a.dispatch("release", s);
  }
  const N = () => a.dispatch("clear_status", y);
  function H() {
    B = Cr(this.value), t(15, B), t(25, z), t(23, s);
  }
  function j() {
    k = Cr(this.value), t(16, k), t(25, z), t(23, s);
  }
  function $(R) {
    Z7[R ? "unshift" : "push"](() => {
      G = R, t(17, G);
    });
  }
  function ce() {
    B = Cr(this.value), t(15, B), t(25, z), t(23, s);
  }
  function ae() {
    k = Cr(this.value), t(16, k), t(25, z), t(23, s);
  }
  return n.$$set = (R) => {
    "gradio" in R && t(0, a = R.gradio), "elem_id" in R && t(1, i = R.elem_id), "elem_classes" in R && t(2, u = R.elem_classes), "visible" in R && t(3, l = R.visible), "value" in R && t(23, s = R.value), "label" in R && t(4, o = R.label), "info" in R && t(5, h = R.info), "container" in R && t(6, p = R.container), "scale" in R && t(7, f = R.scale), "min_width" in R && t(8, m = R.min_width), "minimum" in R && t(9, D = R.minimum), "maximum" in R && t(10, _ = R.maximum), "step" in R && t(11, w = R.step), "show_label" in R && t(12, T = R.show_label), "interactive" in R && t(13, x = R.interactive), "loading_status" in R && t(14, y = R.loading_status), "value_is_output" in R && t(24, S = R.value_is_output);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*old_value, value*/
    41943040 && JSON.stringify(z) !== JSON.stringify(s) && (t(15, [B, k] = s, B, (t(16, k), t(25, z), t(23, s))), t(25, z = s)), n.$$.dirty[0] & /*selected_min, selected_max*/
    98304 && F(B, k), n.$$.dirty[0] & /*selected_min, minimum, maximum, selected_max*/
    99840 && t(18, r = `
      left: ${(B - D) / (_ - D) * 100}%;
      width: ${(k - B) / (_ - D) * 100}%;
    `);
  }, [
    a,
    i,
    u,
    l,
    o,
    h,
    p,
    f,
    m,
    D,
    _,
    w,
    T,
    x,
    y,
    B,
    k,
    G,
    r,
    L,
    I,
    U,
    Z,
    s,
    S,
    z,
    N,
    H,
    j,
    $,
    ce,
    ae
  ];
}
class Sg extends Y7 {
  constructor(e) {
    super(), J7(
      this,
      e,
      ig,
      ag,
      tg,
      {
        gradio: 0,
        elem_id: 1,
        elem_classes: 2,
        visible: 3,
        value: 23,
        label: 4,
        info: 5,
        container: 6,
        scale: 7,
        min_width: 8,
        minimum: 9,
        maximum: 10,
        step: 11,
        show_label: 12,
        interactive: 13,
        loading_status: 14,
        value_is_output: 24
      },
      null,
      [-1, -1]
    );
  }
}
export {
  Sg as default
};
