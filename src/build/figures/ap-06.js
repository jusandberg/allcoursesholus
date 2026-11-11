const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');

// skin block, x from 0 to 800: epidermis on top with a wavy lower edge, dermis, then fatty hypodermis
const wave = (x0, x1, y, a, n) => { let d = ''; for (let i = 0; i <= n; i++) { const x = x0 + (x1 - x0) * i / n; d += ` L${f(x)} ${f(y + a * Math.sin(i / n * Math.PI * 2 * (n / 8)))}`; } return d; };
const EPI = `M0 60 L800 60 L800 128${wave(800, 0, 128, 14, 64)} Z`;
const DER = `M0 128${wave(0, 800, 128, 14, 64)} L800 340 L0 340 Z`;
const fat = Array.from({ length: 22 }, (_, i) => circ(30 + (i % 11) * 74 + (i > 10 ? 36 : 0), i > 10 ? 440 : 380, 34, '#f7e3b0')).join('');
const skin = sh(DER, '#f3d9cb') + rect(0, 340, 800, 150, 0, '#fbefd6') + fat + sh(EPI, '#eebfae') + rect(0, 60, 800, 14, 0, '#f6e1d6');

const hair = line('M250 -10 L254 70', '#5c4a3e', 9) + sh('M232 66 L276 66 L284 286 C292 310 278 330 256 330 C232 330 220 310 226 286 Z', '#e7c3b2') + line('M254 0 L256 300', '#5c4a3e', 8) + ell(256, 308, 18, 14, '#a07a62');
const sebaceous = ell(305, 190, 26, 18, '#ebd08c') + ell(296, 214, 18, 14, '#ebd08c') + line('M286 194 L276 186', '#dcb25a', 6);
const arrector = line('M282 246 L372 136', '#8fa48a', 9);
const sweat = line('M570 60 C566 120 580 180 566 240 C560 280 576 320 570 352', '#8fb0c0', 6) + Array.from({ length: 5 }, (_, i) => ring(560 + (i % 2) * 18, 362 + i * 9, 18, 10, '#6f91a2', 6)).join('');
const vessels = line('M0 300 C100 290 140 320 240 304 C400 280 560 316 800 296', '#c8524a', 7) + line('M0 318 C120 312 200 334 340 318 C500 300 640 330 800 314', '#5f7ba3', 7)
  + [440, 680].map(x => line(`M${x} 304 C${x - 10} 200 ${x + 20} 150 ${x + 10} 140 C${x + 30} 150 ${x + 40} 220 ${x + 30} 316`, '#c8524a', 4)).join('');

const LAYERS = [
  ['Stratum corneum', 'Up to 25 layers of dead, keratinized, scale-like cells, constantly shed. A barrier to microorganisms, most chemicals, light and heat. Friction thickens it into a callus.', '#f3e6d2', 70],
  ['Stratum lucidum', 'One or two layers of flat, clear cells. Hard to see in thin skin.', '#fbf6ee', 26],
  ['Stratum granulosum', 'Two or three layers of flattened cells, busy with keratinization. Cells lose their nuclei here.', '#ecd1b8', 48],
  ['Stratum spinosum', 'Several layers of many-sided cells with spiny-looking outlines, held by desmosomes.', '#efc7b6', 90],
  ['Stratum germinativum', 'The deepest layer, with the stratum basale at its base. The only epidermal cells that divide by mitosis, pushing older cells up.', '#e7aa98', 56]
];

const BURN = (x, depth) => rect(x, 60, 230, depth, 0, ['#d9897a', '#c46a5c', '#7a5a52'][[70, 170, 290].indexOf(depth)], 'opacity:.75');

module.exports = {
  'ap6-2': fig('The skin and what sits in it', '0 -20 800 520',
    skin + vessels + sweat + hair + sebaceous + arrector,
    [
      { label: 'Epidermis', c: C.rose, detail: 'Top layer: stratified squamous keratinized epithelium. No blood vessels. Cells at the bottom divide and push older cells up.',
        svg: outline(EPI, C.rose, 5) + T(700, 50, 'Epidermis', { s: 24, c: C.rose }) },
      { label: 'Dermis', c: '#a0645a', detail: 'The "true skin": dense connective tissue with collagen and elastin. Holds vessels, nerves, glands and hair follicles.',
        svg: outline(DER, '#a0645a', 5) + T(120, 230, 'Dermis', { s: 26, c: '#a0645a' }) },
      { label: 'Hypodermis', c: C.goldD, detail: 'The subcutaneous layer: areolar tissue and fat. It attaches skin to muscle or bone, and it’s where hypodermic injections go.',
        svg: rect(0, 340, 800, 150, 0, 'none').replace('style="fill:none"', 'fill="none" stroke="' + C.goldD + '" stroke-width="5"') + T(120, 515, 'Hypodermis (fat)', { s: 24, c: C.goldD }) },
      { label: 'Hair follicle', c: '#6b5345', detail: 'A tube of epidermis that holds the hair root. Growth starts in the hair bulb at the bottom.',
        svg: hair + T(180, 360, 'Hair follicle', { s: 22, c: '#6b5345' }) },
      { label: 'Sebaceous gland', c: C.goldD, detail: 'Oil gland that empties into the hair follicle.',
        svg: sebaceous + T(330, 240, 'Oil gland', { s: 22, c: C.goldD, a: 'start' }) },
      { label: 'Arrector pili', c: C.deep, detail: 'A small smooth muscle on the follicle. When it contracts (cold or fear) the hair stands up: goose flesh.',
        svg: arrector + T(380, 170, 'Arrector pili', { s: 22, c: C.deep, a: 'start' }) },
      { label: 'Sweat gland', c: C.blueD, detail: 'A coiled gland deep in the skin with a duct that opens at a pore on the surface.',
        svg: sweat + T(600, 400, 'Sweat gland', { s: 22, c: C.blueD, a: 'start' }) + T(570, 40, 'Pore', { s: 20, c: C.blueD }) },
      { label: 'Blood vessels', c: C.red, detail: 'In the dermis, not the epidermis. They feed the skin and help control body heat.',
        svg: vessels + T(700, 280, 'Blood vessels', { s: 22, c: C.red }) }
    ], { tap: true, hint: 'Tap a part to find it in the skin.' }),

  'ap6-3': fig('Five layers of the epidermis', '0 0 760 360',
    (() => { let y = 10, s = ''; LAYERS.forEach(([, , c, h], i) => { s += rect(20, y, 460, h, 0, c);
      if (i === 0) for (let k = 0; k < 5; k++) for (let j = 0; j < 7; j++) s += ell(50 + j * 64 + (k % 2) * 30, y + 8 + k * 13, 30, 5, '#e6d4b8');
      if (i === 2) for (let j = 0; j < 9; j++) s += ell(46 + j * 50, y + 24, 22, 12, '#e3bfa0') + circ(40 + j * 50, y + 22, 3, '#8a6157') + circ(52 + j * 50, y + 28, 3, '#8a6157');
      if (i === 3) for (let k = 0; k < 2; k++) for (let j = 0; j < 9; j++) s += circ(46 + j * 50 + k * 25, y + 24 + k * 42, 20, '#f4d6c9') + circ(46 + j * 50 + k * 25, y + 24 + k * 42, 6, '#9c8aa2');
      if (i === 4) for (let j = 0; j < 14; j++) s += rect(24 + j * 32, y + 6, 30, h - 12, 6, '#f2c6b6') + ell(39 + j * 32, y + h / 2, 7, 10, '#7a6681');
      y += h; }); return s + rect(20, y, 460, 8, 4, '#c7b07a') + rect(20, y + 8, 460, 40, 0, '#f3d9cb') + T(250, y + 36, 'Dermis', { s: 20, c: C.muted }); })(),
    (() => { let y = 10; return LAYERS.map(([n, d, c, h], i) => { const m = y + h / 2; y += h;
      return { label: n.replace('Stratum ', ''), c: ['#a68a4c', '#8aa3b0', '#b4877b', '#ad6459', '#7a6681'][i], detail: n + ': ' + d,
        svg: rect(20, m - h / 2, 460, h, 0, 'none').replace('style="fill:none"', 'fill="none" stroke="#243341" stroke-width="4"') + line(`M484 ${f(m)} L520 ${f(m)}`, C.ink, 3) + T(528, m + 8, n, { s: 22, c: C.ink, a: 'start' }) }; }); })(),
    { hint: 'From the surface down: corneum, lucidum, granulosum, spinosum, germinativum.' }),

  'ap6-12': fig('How deep a burn goes', '0 0 800 470',
    skin + line('M266 60 L266 490 M533 60 L533 490', '#ffffff', 4),
    [
      { label: 'First degree', c: '#d9897a', detail: 'Epidermis only: redness and pain, maybe slight swelling. Sunburn is an example. Heals in about a week, no scar.',
        svg: BURN(20, 70) + T(135, 30, '1st degree', { s: 26, c: '#b06a5c' }) },
      { label: 'Second degree', c: '#c46a5c', detail: 'Epidermis and dermis: redness, pain, swelling and blisters. First and second degree are partial-thickness burns.',
        svg: BURN(285, 170) + ell(400, 60, 60, 26, '#f6e7d8', 'opacity:.95') + T(400, 30, '2nd degree', { s: 26, c: '#a3463a' }) },
      { label: 'Third degree', c: '#7a5a52', detail: 'Full thickness: epidermis and dermis destroyed. Often painless (nerves destroyed). Heals only from the edges; usually needs grafts.',
        svg: BURN(552, 290) + T(667, 30, '3rd degree', { s: 26, c: '#5f4640' }) }
    ], { hint: 'Each column shows how far down the damage reaches.' })
};
