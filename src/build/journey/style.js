// Gives the body map the same look as the fruit drawings on the hōlus. website:
// soft top-to-bottom shading instead of flat colour, no hard outlines, small white shines.
// Applied to the finished SVG by build.js, so new organs pick it up automatically.
const hex = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16));
const mix = (a, b, t) => '#' + hex(a).map((v, i) => Math.round(v + (hex(b)[i] - v) * t).toString(16).padStart(2, '0')).join('');
exports.mix = mix;

// Hand-tuned pairs (top → bottom) matching the website palette; any other colour gets a generic pair.
const PAIRS = {
  '#fbf7ef': ['#fdfbf6', '#f3ede1'], // body
  '#efe7e1': ['#f4eee9', '#ebe1da'], // lungs behind
  '#b5786a': ['#cc998c', '#a26a5e'], // kidneys
  '#d8b86a': ['#e8d197', '#c9a65a'], // bladder
  '#e3b9b0': ['#f0d4cd', '#d6a89e'], // brain
  '#e7a9a0': ['#f1c9c2', '#da9a90'], // lungs
  '#9a5d50': ['#b98274', '#8a5246'], // liver
  '#e09c88': ['#efbfae', '#d48a76'], // stomach
  '#7f9a6f': ['#a3b795', '#6c875e'], // gallbladder
  '#dcb25a': ['#ebd08c', '#cda04a'], // pancreas
  '#c86d56': ['#dd9886', '#b95d48'], // heart, mouth
  '#8fa48a': ['#b2c2ad', '#7d9378'], // muscle
  '#e0a83a': ['#eec57c', '#d1962b'], // adrenals
  '#d98aa8': ['#eab3c7', '#cb7a99'], // ovaries, uterus
  '#f0c75a': ['#f7de94', '#e6b748'], // sun
  '#6f91a2': ['#a3bcc8', '#6f91a2']  // lymph nodes
};
const KEEP = new Set(['#e7b3a3', '#f4efe1']); // cheeks, bone centres

exports.restyle = function (svg) {
  const used = new Map();
  const id = c => { if (!used.has(c)) used.set(c, 'bjg' + used.size); return used.get(c); };
  svg = svg.replace(/fill:(#[0-9a-f]{6})/gi, (m, c) => {
    c = c.toLowerCase();
    if (KEEP.has(c)) return m;
    return 'fill:url(#' + id(c) + ')';
  });
  // soft edge on the body instead of a grey outline
  svg = svg.split('stroke:#cdd6cb;stroke-width:2.5').join('stroke:#e6e9e2;stroke-width:2');
  // line-drawn organs: a touch lighter so they sit with the shaded shapes
  svg = svg.replace(/stroke:(#[0-9a-f]{6})(;stroke-width:(\d+(?:\.\d+)?))/gi, (m, c, rest, w) => {
    c = c.toLowerCase();
    if (c === '#ffffff' || c === '#fff' || c === '#e6e9e2' || c === '#8a958c' || c === '#71836d') return m;
    return 'stroke:' + mix(c, '#ffffff', .14) + rest;
  });
  // token: shaded with the lesson's own colour
  svg = svg.split('fill:var(--tok);stroke:#fff;stroke-width:2.5').join('fill:url(#bjgtok)')
           .split('fill:var(--tok);stroke:#fff;stroke-width:2').join('fill:url(#bjgtok)')
           .split('fill:var(--tok);stroke:#fff;stroke-width:1.5').join('fill:url(#bjgtok)')
           .split('fill:var(--tok);stroke:#fff').join('fill:url(#bjgtok);stroke:#fff');
  // small white shines on rounded organs
  const shine = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" style="fill:#fff;opacity:.35;pointer-events:none"></ellipse>`;
  const S = {
    stomach: shine(298, 300, 7, 4), liver: shine(206, 272, 8, 3.5), heart: shine(262, 214, 3, 2.4),
    bladder: shine(244, 510, 4.5, 3), kidneys: shine(183, 342, 2.6, 4) + shine(317, 342, 2.6, 4),
    gallbladder: shine(211, 309, 2.4, 3.4), spleen: shine(334, 294, 2.4, 4), thyroid: shine(239, 158, 2, 3) + shine(257, 158, 2, 3)
  };
  svg = svg.replace(/(<g class="bj-o" data-o="(\w+)">)([\s\S]*?)(<\/g>)(?=\s*(?:<g class="bj-o"|<path class="bj-route"|<g class="bj-tok"|$))/g,
    (m, open, k, inner, close) => S[k] ? open + inner + S[k] + close : m);
  let defs = '';
  for (const [c, n] of used) {
    const [a, b] = PAIRS[c] || [mix(c, '#ffffff', .3), mix(c, '#2b2420', .1)];
    defs += `<linearGradient id="${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"></stop><stop offset="1" stop-color="${b}"></stop></linearGradient>`;
  }
  defs += '<linearGradient id="bjgtok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:color-mix(in srgb,var(--tok) 60%,#fff)"></stop><stop offset="1" style="stop-color:var(--tok)"></stop></linearGradient>';
  return '<defs>' + defs + '</defs>' + svg;
};
