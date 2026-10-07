/* @ds-bundle: {"format":4,"namespace":"MagicLookDesignSystem_1440af","components":[{"name":"FeatureLine","sourcePath":"components/brand/FeatureLine.jsx"},{"name":"LogoMark","sourcePath":"components/brand/Logo.jsx"},{"name":"ArabicWordmark","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Pattern","sourcePath":"components/brand/Pattern.jsx"},{"name":"SocialIcon","sourcePath":"components/brand/SocialLinks.jsx"},{"name":"SocialLinks","sourcePath":"components/brand/SocialLinks.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/FeatureLine.jsx":"87cd66ed8b90","components/brand/Logo.jsx":"2ce1445a6189","components/brand/Pattern.jsx":"7295559ddaa7","components/brand/SocialLinks.jsx":"c402698651f2","components/core/Badge.jsx":"a603e6914b5a","components/core/Button.jsx":"03937e32b8de","components/core/Card.jsx":"7f808d0f8d07","components/core/Divider.jsx":"237a5c8d2bd2","components/core/IconButton.jsx":"2282b48bbeea","components/core/ProductCard.jsx":"9087fe23655a","components/feedback/Dialog.jsx":"691a20f34793","components/forms/Checkbox.jsx":"96d804294c4b","components/forms/Input.jsx":"2fd8a49132f8","components/forms/Select.jsx":"2bf9750404a4","components/navigation/Tabs.jsx":"7771b4e95175","ui_kits/social/Editor.jsx":"ee19ab12bf39","ui_kits/social/PostTemplate.jsx":"c61e015b73a7","ui_kits/social/StoryTemplate.jsx":"70434db7f8c9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MagicLookDesignSystem_1440af = window.MagicLookDesignSystem_1440af || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/FeatureLine.jsx
try { (() => {
/** Ochre rule + dot-separated product features (poster sub-headline). */
function FeatureLine({
  items = [],
  size = 20,
  rule = true,
  color = 'var(--ml-ink)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: size * 0.7
    }
  }, rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ml-ochre)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: size * 0.8,
      fontFamily: 'var(--font-arabic)',
      fontSize: size,
      color,
      lineHeight: 1.4
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size * 0.4,
      height: size * 0.4,
      borderRadius: '50%',
      background: 'var(--ml-ochre)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, t)))));
}
Object.assign(__ds_scope, { FeatureLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FeatureLine.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const MARK = ["M177.32,107.86h5.29a1.68,1.68,0,0,1,1.64,1.82V137a4.45,4.45,0,0,0,4.74,4.74h13.5c3.65,0,6.2,2.56,6.2,6.39a.48.48,0,0,1-.55.54H184.07c-4.65,0-8.39-3.1-8.39-7.66V109.68A1.74,1.74,0,0,1,177.32,107.86Z", "M188.36,112.15l17.32,16.59c.73.7,1.37,1,2.1.37l19.88-16.05c1.28-1,3.1-1.64,3.1.27V148a.67.67,0,0,1-.73.73h-7a.74.74,0,0,1-.73-.82V128.1c0-.72-.55-1-1.1-.54L208.6,137.68c-1.55,1.25-3.37,1.59-4.92.09l-14.32-13.86a3.29,3.29,0,0,1-1.1-2.55v-8.94C188.26,112.24,188.26,112.15,188.36,112.15Z"];
const NAME_AR = 'النظرة الساحرة';
const C = {
  ochre: 'var(--ml-ochre)',
  ink: 'var(--ml-ink)',
  ivory: 'var(--ml-ivory)',
  white: '#fff'
};
function LogoMark({
  size = 48,
  color = 'ochre',
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "175.2 107.4 55.9 41.8",
    height: size,
    style: {
      display: 'block',
      fill: C[color] || color,
      ...style
    },
    "aria-label": "Magic Look"
  }, MARK.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}
function ArabicWordmark({
  size = 24,
  color = 'ink',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    lang: "ar",
    style: {
      display: 'block',
      fontFamily: 'var(--font-arabic)',
      fontWeight: 500,
      fontSize: size,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: C[color] || color,
      ...style
    }
  }, NAME_AR);
}
/** Bilingual signature. layout: horizontal | stacked | mark */
function Logo({
  layout = 'horizontal',
  size = 56,
  tone = 'light',
  markPosition = 'end',
  style
}) {
  const text = tone === 'dark' ? 'ivory' : 'ink';
  const markC = tone === 'dark' ? 'ivory' : tone === 'mono' ? 'ink' : 'ochre';
  const latin = {
    fontFamily: 'var(--font-latin)',
    fontWeight: 700,
    color: C[text],
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  if (layout === 'mark') return /*#__PURE__*/React.createElement(LogoMark, {
    size: size,
    color: markC,
    style: style
  });
  if (layout === 'stacked') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.16,
      ...style
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: size,
    color: markC
  }), /*#__PURE__*/React.createElement(ArabicWordmark, {
    size: size * 0.34,
    color: text
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...latin,
      fontSize: size * 0.24,
      letterSpacing: '.42em',
      marginInlineEnd: '-.42em'
    }
  }, "MAGIC LOOK"));
  const words = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: size * 0.12
    }
  }, /*#__PURE__*/React.createElement(ArabicWordmark, {
    size: size * 0.38,
    color: text
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...latin,
      fontSize: size * 0.3,
      letterSpacing: '.04em'
    }
  }, "MAGIC LOOK"));
  return /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28,
      flexDirection: markPosition === 'end' ? 'row' : 'row-reverse',
      ...style
    }
  }, words, /*#__PURE__*/React.createElement(LogoMark, {
    size: size,
    color: markC
  }));
}
Object.assign(__ds_scope, { LogoMark, ArabicWordmark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Pattern.jsx
try { (() => {
const L = "M51.6,1.72h3V22.79A10.75,10.75,0,0,0,65.36,33.54H81.27a3,3,0,0,1,3,3H65.36A13.76,13.76,0,0,1,51.6,22.79Z";
const M = "M90.73,0l17.68,17.68a2.37,2.37,0,0,0,3.34,0L129.43,0V4.26L113.88,19.81a5.37,5.37,0,0,1-7.6,0L90.73,4.26Z";
function tile(color) {
  const W = 103.2;
  let p = '';
  for (let i = -2; i <= 2; i++) for (let k = -1; k <= 1; k++) for (const [x, y] of [[i * W, k * W], [i * W - 51.6, k * W + 51.6]]) p += '<path transform="translate(' + x.toFixed(2) + ' ' + y.toFixed(2) + ')" d="' + L + '"/><path transform="translate(' + x.toFixed(2) + ' ' + y.toFixed(2) + ')" d="' + M + '"/>';
  return 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.2 103.2"><g fill="' + color + '">' + p + '</g></svg>') + '")';
}
const GROUND = {
  ivory: ['#F4F0E8', '#17191B', .13],
  ink: ['#17191B', '#F4F0E8', .10],
  ochre: ['#7B5D08', '#F4F0E8', .12],
  white: ['#FFFFFF', '#17191B', .10]
};
/** Surface with the bespoke L-bend / M-valley repeat. */
function Pattern({
  ground = 'ivory',
  scale = 120,
  opacity,
  children,
  style,
  radius = 0
}) {
  const [bg, fg, op] = GROUND[ground] || GROUND.ivory;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: bg,
      borderRadius: radius,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: tile(fg),
      backgroundSize: scale + 'px ' + scale + 'px',
      opacity: opacity ?? op,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, children));
}
Object.assign(__ds_scope, { Pattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Pattern.jsx", error: String((e && e.message) || e) }); }

// components/brand/SocialLinks.jsx
try { (() => {
const ICONS = {
  "facebook": ["M16 4C9.3844276 4 4 9.3844276 4 16C4 22.615572 9.3844276 28 16 28C22.615572 28 28 22.615572 28 16C28 9.3844276 22.615572 4 16 4 z M 16 6C21.534692 6 26 10.465308 26 16C26 21.027386 22.311682 25.161277 17.488281 25.878906L17.488281 18.916016L20.335938 18.916016L20.783203 16.023438L17.488281 16.023438L17.488281 14.443359C17.488281 13.242359 17.882859 12.175781 19.005859 12.175781L20.810547 12.175781L20.810547 9.6523438C20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625C15.906688 9.515625 14.355469 10.913609 14.355469 14.099609L14.355469 16.023438L11.632812 16.023438L11.632812 18.916016L14.355469 18.916016L14.355469 25.853516C9.6088556 25.070647 6 20.973047 6 16C6 10.465308 10.465308 6 16 6 z"],
  "instagram": ["M11.46875 5C7.917969 5 5 7.914063 5 11.46875L5 20.53125C5 24.082031 7.914063 27 11.46875 27L20.53125 27C24.082031 27 27 24.085938 27 20.53125L27 11.46875C27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7L20.53125 7C23.003906 7 25 8.996094 25 11.46875L25 20.53125C25 23.003906 23.003906 25 20.53125 25L11.46875 25C8.996094 25 7 23.003906 7 20.53125L7 11.46875C7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875C21.402344 9.1875 21 9.589844 21 10.09375C21 10.597656 21.402344 11 21.90625 11C22.410156 11 22.8125 10.597656 22.8125 10.09375C22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10C12.699219 10 10 12.699219 10 16C10 19.300781 12.699219 22 16 22C19.300781 22 22 19.300781 22 16C22 12.699219 19.300781 10 16 10 Z M 16 12C18.222656 12 20 13.777344 20 16C20 18.222656 18.222656 20 16 20C13.777344 20 12 18.222656 12 16C12 13.777344 13.777344 12 16 12Z"],
  "telegram": ["M26.070313 3.996094C25.734375 4.011719 25.417969 4.109375 25.136719 4.21875L25.132813 4.21875C24.847656 4.332031 23.492188 4.902344 21.433594 5.765625C19.375 6.632813 16.703125 7.757813 14.050781 8.875C8.753906 11.105469 3.546875 13.300781 3.546875 13.300781L3.609375 13.277344C3.609375 13.277344 3.25 13.394531 2.875 13.652344C2.683594 13.777344 2.472656 13.949219 2.289063 14.21875C2.105469 14.488281 1.957031 14.902344 2.011719 15.328125C2.101563 16.050781 2.570313 16.484375 2.90625 16.722656C3.246094 16.964844 3.570313 17.078125 3.570313 17.078125L3.578125 17.078125L8.460938 18.722656C8.679688 19.425781 9.949219 23.597656 10.253906 24.558594C10.433594 25.132813 10.609375 25.492188 10.828125 25.765625C10.933594 25.90625 11.058594 26.023438 11.207031 26.117188C11.265625 26.152344 11.328125 26.179688 11.390625 26.203125C11.410156 26.214844 11.429688 26.21875 11.453125 26.222656L11.402344 26.210938C11.417969 26.214844 11.429688 26.226563 11.441406 26.230469C11.480469 26.242188 11.507813 26.246094 11.558594 26.253906C12.332031 26.488281 12.953125 26.007813 12.953125 26.007813L12.988281 25.980469L15.871094 23.355469L20.703125 27.0625L20.8125 27.109375C21.820313 27.550781 22.839844 27.304688 23.378906 26.871094C23.921875 26.433594 24.132813 25.875 24.132813 25.875L24.167969 25.785156L27.902344 6.65625C28.007813 6.183594 28.035156 5.742188 27.917969 5.3125C27.800781 4.882813 27.5 4.480469 27.136719 4.265625C26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875C25.964844 6.109375 25.976563 6.101563 25.949219 6.222656L25.949219 6.234375L22.25 25.164063C22.234375 25.191406 22.207031 25.25 22.132813 25.308594C22.054688 25.371094 21.992188 25.410156 21.667969 25.28125L15.757813 20.75L12.1875 24.003906L12.9375 19.214844C12.9375 19.214844 22.195313 10.585938 22.59375 10.214844C22.992188 9.84375 22.859375 9.765625 22.859375 9.765625C22.886719 9.3125 22.257813 9.632813 22.257813 9.632813L10.082031 17.175781L10.078125 17.15625L4.242188 15.191406L4.242188 15.1875C4.238281 15.1875 4.230469 15.183594 4.226563 15.183594C4.230469 15.183594 4.257813 15.171875 4.257813 15.171875L4.289063 15.15625L4.320313 15.144531C4.320313 15.144531 9.53125 12.949219 14.828125 10.71875C17.480469 9.601563 20.152344 8.476563 22.207031 7.609375C24.261719 6.746094 25.78125 6.113281 25.867188 6.078125C25.949219 6.046875 25.910156 6.046875 25.96875 6.046875Z"],
  "twitter": ["M28 8.558594C27.117188 8.949219 26.167969 9.214844 25.171875 9.332031C26.1875 8.722656 26.96875 7.757813 27.335938 6.609375C26.386719 7.171875 25.332031 7.582031 24.210938 7.804688C23.3125 6.847656 22.03125 6.246094 20.617188 6.246094C17.898438 6.246094 15.691406 8.453125 15.691406 11.171875C15.691406 11.558594 15.734375 11.933594 15.820313 12.292969C11.726563 12.089844 8.097656 10.128906 5.671875 7.148438C5.246094 7.875 5.003906 8.722656 5.003906 9.625C5.003906 11.332031 5.871094 12.839844 7.195313 13.722656C6.386719 13.695313 5.628906 13.476563 4.964844 13.105469C4.964844 13.128906 4.964844 13.148438 4.964844 13.167969C4.964844 15.554688 6.660156 17.546875 8.914063 17.996094C8.5 18.109375 8.066406 18.171875 7.617188 18.171875C7.300781 18.171875 6.988281 18.140625 6.691406 18.082031C7.316406 20.039063 9.136719 21.460938 11.289063 21.503906C9.605469 22.824219 7.480469 23.609375 5.175781 23.609375C4.777344 23.609375 4.386719 23.585938 4 23.539063C6.179688 24.9375 8.765625 25.753906 11.546875 25.753906C20.605469 25.753906 25.558594 18.25 25.558594 11.742188C25.558594 11.53125 25.550781 11.316406 25.542969 11.105469C26.503906 10.410156 27.339844 9.542969 28 8.558594Z"],
  "whatsapp": ["M24.503906 7.503906C22.246094 5.246094 19.246094 4 16.050781 4C9.464844 4 4.101563 9.359375 4.101563 15.945313C4.097656 18.050781 4.648438 20.105469 5.695313 21.917969L4 28.109375L10.335938 26.445313C12.078125 27.398438 14.046875 27.898438 16.046875 27.902344L16.050781 27.902344C22.636719 27.902344 27.996094 22.542969 28 15.953125C28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813L16.046875 25.882813C14.265625 25.882813 12.515625 25.402344 10.992188 24.5L10.628906 24.285156L6.867188 25.269531L7.871094 21.605469L7.636719 21.230469C6.640625 19.648438 6.117188 17.820313 6.117188 15.945313C6.117188 10.472656 10.574219 6.019531 16.054688 6.019531C18.707031 6.019531 21.199219 7.054688 23.074219 8.929688C24.949219 10.808594 25.980469 13.300781 25.980469 15.953125C25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313C21.199219 18.296875 19.730469 17.574219 19.457031 17.476563C19.183594 17.375 18.984375 17.328125 18.785156 17.625C18.585938 17.925781 18.015625 18.597656 17.839844 18.796875C17.667969 18.992188 17.492188 19.019531 17.195313 18.871094C16.894531 18.722656 15.933594 18.40625 14.792969 17.386719C13.90625 16.597656 13.304688 15.617188 13.132813 15.320313C12.957031 15.019531 13.113281 14.859375 13.261719 14.710938C13.398438 14.578125 13.5625 14.363281 13.710938 14.1875C13.859375 14.015625 13.910156 13.890625 14.011719 13.691406C14.109375 13.492188 14.058594 13.316406 13.984375 13.167969C13.910156 13.019531 13.3125 11.546875 13.0625 10.949219C12.820313 10.367188 12.574219 10.449219 12.390625 10.4375C12.21875 10.429688 12.019531 10.429688 11.820313 10.429688C11.621094 10.429688 11.296875 10.503906 11.023438 10.804688C10.75 11.101563 9.980469 11.824219 9.980469 13.292969C9.980469 14.761719 11.050781 16.183594 11.199219 16.382813C11.347656 16.578125 13.304688 19.59375 16.300781 20.886719C17.011719 21.195313 17.566406 21.378906 18 21.515625C18.714844 21.742188 19.367188 21.710938 19.882813 21.636719C20.457031 21.550781 21.648438 20.914063 21.898438 20.214844C22.144531 19.519531 22.144531 18.921875 22.070313 18.796875C21.996094 18.671875 21.796875 18.597656 21.496094 18.445313Z"]
};
const ORDER = ['facebook', 'twitter', 'instagram', 'whatsapp', 'telegram'];
function SocialIcon({
  name,
  size = 24,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: size,
    height: size,
    fill: color,
    "aria-label": name,
    style: {
      display: 'block'
    }
  }, (ICONS[name] || []).map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fillRule: name === 'whatsapp' ? 'evenodd' : undefined
  })));
}
/** Handle + icon row, as used in poster footers. */
function SocialLinks({
  handle = '@MAGICLOOK',
  size = 28,
  color = 'var(--ml-ink)',
  layout = 'stacked',
  networks = ORDER
}) {
  const row = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: size * 0.18
    }
  }, networks.map(n => /*#__PURE__*/React.createElement(SocialIcon, {
    key: n,
    name: n,
    size: size,
    color: color
  })));
  const h = handle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontWeight: 700,
      fontSize: size * 0.95,
      color,
      lineHeight: 1,
      letterSpacing: '.01em'
    }
  }, handle);
  return /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: 'inline-flex',
      flexDirection: layout === 'stacked' ? 'column' : 'row',
      alignItems: layout === 'stacked' ? 'flex-start' : 'center',
      gap: size * 0.3
    }
  }, layout === 'stacked' ? /*#__PURE__*/React.createElement(React.Fragment, null, h, row) : /*#__PURE__*/React.createElement(React.Fragment, null, row, h));
}
Object.assign(__ds_scope, { SocialIcon, SocialLinks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SocialLinks.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  ochre: {
    background: 'var(--ml-ochre)',
    color: '#fff'
  },
  soft: {
    background: 'var(--ml-ochre-100)',
    color: 'var(--ml-ochre-700)'
  },
  ink: {
    background: 'var(--ml-ink)',
    color: 'var(--ml-ivory)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ml-ink)',
    boxShadow: 'inset 0 0 0 1px var(--ml-ink-20)'
  }
};
function Badge({
  tone = 'soft',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-arabic)',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1,
      ...T[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    background: 'var(--ml-ochre)',
    color: '#fff',
    border: '1px solid var(--ml-ochre)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ml-ink)',
    border: '1px solid var(--ml-ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ml-ochre)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--ml-ivory)',
    color: 'var(--ml-ink)',
    border: '1px solid var(--ml-ivory)'
  }
};
const HOV = {
  primary: {
    background: 'var(--ml-ochre-700)',
    borderColor: 'var(--ml-ochre-700)'
  },
  secondary: {
    background: 'var(--ml-ink)',
    color: 'var(--ml-ivory)'
  },
  ghost: {
    background: 'var(--ml-ochre-100)'
  },
  inverse: {
    background: '#fff'
  }
};
const S = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 14
  },
  md: {
    height: 44,
    padding: '0 24px',
    fontSize: 16
  },
  lg: {
    height: 56,
    padding: '0 32px',
    fontSize: 18
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  icon,
  children,
  onClick,
  type = 'button',
  fullWidth,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-arabic)',
      fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-fast) var(--ease-calm),color var(--dur-fast),transform var(--dur-fast)',
      transform: p && !disabled ? 'scale(.98)' : 'none',
      width: fullWidth ? '100%' : undefined,
      ...S[size],
      ...V[variant],
      ...(h && !disabled ? HOV[variant] : {}),
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'ivory',
  radius = 'xl',
  padding = 40,
  children,
  style
}) {
  const bg = {
    ivory: 'var(--ml-ivory-deep)',
    white: '#fff',
    ink: 'var(--ml-ink)',
    ochre: 'var(--ml-ochre)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: tone === 'ink' || tone === 'ochre' ? 'var(--ml-ivory)' : 'var(--ml-ink)',
      borderRadius: 'var(--radius-' + radius + ')',
      padding,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  tone = 'hairline',
  spacing = 16
}) {
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      height: tone === 'accent' ? 2 : 1,
      background: tone === 'accent' ? 'var(--ml-ochre)' : 'var(--ml-ink-20)',
      margin: spacing + 'px 0'
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  children,
  label,
  variant = 'outline',
  size = 44,
  onClick,
  disabled
}) {
  const [h, setH] = React.useState(false);
  const base = variant === 'solid' ? {
    background: h ? 'var(--ml-ochre-700)' : 'var(--ml-ochre)',
    color: '#fff',
    border: 'none'
  } : variant === 'ghost' ? {
    background: h ? 'var(--ml-ochre-100)' : 'transparent',
    color: 'var(--ml-ink)',
    border: 'none'
  } : {
    background: h ? 'var(--ml-ink)' : 'transparent',
    color: h ? 'var(--ml-ivory)' : 'var(--ml-ink)',
    border: '1px solid var(--ml-ink)'
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      opacity: disabled ? .4 : 1,
      transition: 'all var(--dur-fast) var(--ease-calm)',
      ...base
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  subtitle,
  badge,
  price,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-arabic)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: '#fff'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-calm)'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      insetInlineStart: 14,
      height: 26,
      padding: '0 12px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 999,
      background: 'var(--ml-ochre)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 500
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: 'var(--ml-ink)'
    }
  }, name), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ml-ink-70)'
    }
  }, subtitle)), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ml-ochre)',
      whiteSpace: 'nowrap'
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  inline
}) {
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    role: "dialog",
    style: {
      width: 'min(440px,100%)',
      background: 'var(--ml-ivory)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxSizing: 'border-box',
      boxShadow: 'var(--shadow-soft)',
      fontFamily: 'var(--font-arabic)',
      color: 'var(--ml-ink)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--ml-ink-70)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, actions));
  if (inline) return box;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(23,25,27,.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, box));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  const [c, setC] = React.useState(!!checked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    dir: "rtl",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontFamily: 'var(--font-arabic)',
      fontSize: 15,
      color: 'var(--ml-ink)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: '1.5px solid ' + (on ? 'var(--ml-ochre)' : 'var(--ml-ink-50)'),
      background: on ? 'var(--ml-ochre)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    dir: "rtl",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-arabic)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ml-ink)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--ml-ink-70)'
    }
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled,
  dir = 'rtl'
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error
  }, /*#__PURE__*/React.createElement("input", {
    dir: dir,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      height: 48,
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (error ? 'var(--danger)' : f ? 'var(--ml-ochre)' : 'var(--ml-ink-20)'),
      boxShadow: f ? '0 0 0 3px var(--ml-ochre-100)' : 'none',
      background: disabled ? 'var(--ml-ivory-shade)' : '#fff',
      fontFamily: 'var(--font-arabic)',
      fontSize: 16,
      color: 'var(--ml-ink)',
      outline: 'none',
      transition: 'border-color var(--dur-fast),box-shadow var(--dur-fast)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    dir: "rtl",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-arabic)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ml-ink)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--ml-ink-70)'
    }
  }, error || hint));
}
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: '100%',
      height: 48,
      padding: '0 16px 0 40px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--ml-ink-20)',
      background: '#fff',
      fontFamily: 'var(--font-arabic)',
      fontSize: 16,
      color: 'var(--ml-ink)',
      appearance: 'none',
      outline: 'none'
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 16,
      top: '50%',
      width: 8,
      height: 8,
      borderLeft: '2px solid var(--ml-ochre)',
      borderBottom: '2px solid var(--ml-ochre)',
      transform: 'translateY(-70%) rotate(-45deg)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  const [v, setV] = React.useState(value ?? (tabs[0] && (tabs[0].value || tabs[0])));
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--ml-ink-20)'
    }
  }, tabs.map(t => {
    const id = t.value || t,
      lab = t.label || t,
      on = id === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setV(id);
        onChange && onChange(id);
      },
      style: {
        background: 'none',
        border: 'none',
        padding: '12px 0',
        marginBottom: -1,
        borderBottom: '2px solid ' + (on ? 'var(--ml-ochre)' : 'transparent'),
        fontFamily: 'var(--font-arabic)',
        fontSize: 16,
        fontWeight: on ? 500 : 400,
        color: on ? 'var(--ml-ink)' : 'var(--ml-ink-70)',
        cursor: 'pointer',
        transition: 'color var(--dur-fast)'
      }
    }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Editor.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Frame({
  w,
  h,
  scale,
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-product)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      transform: 'scale(' + scale + ')',
      transformOrigin: '0 0'
    }
  }, children)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontSize: 12,
      letterSpacing: '.08em',
      color: 'var(--ml-ink-70)'
    }
  }, label));
}
const PRODUCTS = [{
  id: 'chair',
  name: 'كرسي مخملي أزرق',
  image: '../../assets/products/blue-chair-view-000.png',
  features: ['ملمس مخملي', 'ظهر بتصميم منحني', 'خشب زان متين'],
  headline: 'جماله في تفاصيله'
}];
function Editor() {
  const {
    Tabs,
    Input,
    Checkbox,
    Button,
    Dialog,
    Logo,
    Divider
  } = window.MagicLookDesignSystem_1440af;
  const [fmt, setFmt] = React.useState(localStorage.getItem('ml-kit-fmt') || 'both');
  const [headline, setHeadline] = React.useState(PRODUCTS[0].headline);
  const [cal, setCal] = React.useState(true);
  const [f, setF] = React.useState(PRODUCTS[0].features);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => localStorage.setItem('ml-kit-fmt', fmt), [fmt]);
  const p = PRODUCTS[0];
  const shared = {
    headline,
    useCalligraphy: cal,
    image: p.image,
    handle: '@MAGICLOOK'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      minHeight: '100vh',
      background: 'var(--ml-ivory)'
    }
  }, /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'both',
      label: 'الكل'
    }, {
      value: 'story',
      label: 'ستوري ١٠٨٠×١٩٢٠'
    }, {
      value: 'post',
      label: 'منشور ١٠٨٠×١٣٥٠'
    }],
    value: fmt,
    onChange: setFmt
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, fmt !== 'post' && /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: fmt === 'both' ? 0.28 : 0.36,
    label: "STORY \xB7 1080 \xD7 1920"
  }, /*#__PURE__*/React.createElement(StoryTemplate, _extends({}, shared, {
    features: f
  }))), fmt !== 'story' && /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1350,
    scale: fmt === 'both' ? 0.4 : 0.5,
    label: "POST \xB7 1080 \xD7 1350"
  }, /*#__PURE__*/React.createElement(PostTemplate, _extends({}, shared, {
    background: "../../assets/backgrounds/background.png",
    phones: "05 10 65 73 89 - 05 35 34 65 55",
    address: "\u0627\u0644\u062F\u0645\u0627\u0645 - \u062D\u064A \u0627\u0644\u0645\u0646\u0627\u0631 - \u0634\u0627\u0631\u0639 \u0627\u0628\u0648\u0628\u0643\u0631 \u0627\u0644\u0635\u062F\u064A\u0642 - \u0627\u0645\u0627\u0645 \u0628\u0646\u0643 \u0627\u0644\u0631\u0627\u062C\u062D\u064A"
  }))))), /*#__PURE__*/React.createElement("aside", {
    dir: "rtl",
    style: {
      background: '#fff',
      borderInlineEnd: '1px solid var(--ml-ink-20)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 44
  }), /*#__PURE__*/React.createElement(Divider, {
    tone: "accent",
    spacing: 4
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
    value: headline,
    onChange: setHeadline
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0627\u0644\u062E\u0637 \u0627\u0644\u0630\u0647\u0628\u064A (\u0635\u0648\u0631\u0629 \u0627\u0644\u0639\u0646\u0648\u0627\u0646)",
    checked: cal,
    onChange: setCal
  }), f.map((v, i) => /*#__PURE__*/React.createElement(Input, {
    key: i,
    label: 'ميزة ' + (i + 1),
    value: v,
    onChange: nv => setF(f.map((x, j) => j === i ? nv : x))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setOpen(true)
  }, "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062A\u0635\u0645\u064A\u0645"))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "\u062C\u0627\u0647\u0632 \u0644\u0644\u062A\u0635\u062F\u064A\u0631",
    onClose: () => setOpen(false),
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setOpen(false)
    }, "\u062D\u0633\u0646\u0627\u064B")
  }, "\u0647\u0630\u0647 \u0646\u0633\u062E\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u2014 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062C."));
}
window.Editor = Editor;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Editor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PostTemplate.jsx
try { (() => {
// Feed post 1080×1350 — recreated from posters-templates/poster.png
function PostTemplate({
  headline,
  useCalligraphy,
  image,
  background,
  handle,
  phones,
  address
}) {
  const {
    Logo,
    SocialLinks
  } = window.MagicLookDesignSystem_1440af;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1350,
      overflow: 'hidden',
      background: 'var(--ml-ivory)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: background,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: 1270,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 58,
      right: 42
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 78
  })), /*#__PURE__*/React.createElement("img", {
    src: image,
    style: {
      position: 'absolute',
      left: 170,
      top: 330,
      width: 740,
      height: 740,
      objectFit: 'contain',
      filter: 'drop-shadow(0 30px 30px rgba(60,40,10,.25))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 1030,
      height: 170,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, useCalligraphy ? /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/title.png",
    style: {
      height: 230
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-arabic)',
      fontWeight: 700,
      fontSize: 92,
      color: 'var(--ml-ink)'
    }
  }, headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 80,
      background: 'var(--ml-ochre)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      boxSizing: 'border-box',
      color: 'var(--ml-ivory)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(SocialLinks, {
    layout: "inline",
    handle: handle,
    size: 22,
    color: "var(--ml-ivory)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '.02em'
    }
  }, phones)), /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontFamily: 'var(--font-arabic)',
      fontWeight: 500,
      fontSize: 22
    }
  }, address)));
}
window.PostTemplate = PostTemplate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PostTemplate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/StoryTemplate.jsx
try { (() => {
// Story 1080×1920 — recreated from 0001-blue-chair-poster-01.jpg
function StoryTemplate({
  headline,
  useCalligraphy,
  features,
  image,
  handle
}) {
  const {
    Pattern,
    Logo,
    FeatureLine,
    SocialLinks
  } = window.MagicLookDesignSystem_1440af;
  return /*#__PURE__*/React.createElement(Pattern, {
    ground: "ivory",
    scale: 300,
    opacity: 0.09,
    style: {
      width: 1080,
      height: 1920
    }
  }, /*#__PURE__*/React.createElement("div", {
    dir: "rtl",
    style: {
      position: 'absolute',
      left: 90,
      right: 90,
      top: 121,
      bottom: 138,
      background: 'var(--ml-ivory-deep)',
      borderRadius: 44,
      padding: '70px 74px 0',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 124
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  }, useCalligraphy ? /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/title.png",
    style: {
      height: 270,
      marginInlineEnd: -70
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-arabic)',
      fontWeight: 700,
      fontSize: 104,
      lineHeight: 1.1,
      color: 'var(--ml-ink)'
    }
  }, headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      marginInline: -50
    }
  }, /*#__PURE__*/React.createElement(FeatureLine, {
    size: 31,
    items: features
  })), /*#__PURE__*/React.createElement("img", {
    src: image,
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      top: 690,
      width: 'calc(100% - 120px)',
      height: 900,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 76,
      bottom: 72
    }
  }, /*#__PURE__*/React.createElement(SocialLinks, {
    handle: handle,
    size: 42
  }))));
}
window.StoryTemplate = StoryTemplate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/StoryTemplate.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FeatureLine = __ds_scope.FeatureLine;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.ArabicWordmark = __ds_scope.ArabicWordmark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pattern = __ds_scope.Pattern;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.SocialLinks = __ds_scope.SocialLinks;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
