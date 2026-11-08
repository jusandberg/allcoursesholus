// Extra organs for Anatomy & Physiology, drawn in the Body Explorer style (soft fills, no outlines).
// BACK sits behind the original organs, FRONT sits on top of them.
const o = (k, inner) => `<g class="bj-o" data-o="${k}">${inner}</g>`;
const line = (d, c, w, extra = '') => `<path d="${d}" style="fill:none;stroke:${c};stroke-width:${w};stroke-linecap:round;stroke-linejoin:round;${extra}"></path>`;
const BONE = '#cfc4a6', BONEIN = '#f4efe1';
const bone = d => line(d, BONE, 11) + line(d, BONEIN, 6);
exports.BACK = [
  o('skeleton',
    // spine column
    line('M250 150 L250 486', BONE, 12, 'stroke-dasharray:9 3') + line('M250 150 L250 486', BONEIN, 6, 'stroke-dasharray:9 3') +
    // ribs
    [214, 232, 250, 268, 286].map((y, j) => line(`M250 ${y} C${226 - j * 2} ${y - 4} ${176 - j} ${y + 6} ${168 + j * 2} ${y + 34}`, BONE, 5) + line(`M250 ${y} C${274 + j * 2} ${y - 4} ${324 + j} ${y + 6} ${332 - j * 2} ${y + 34}`, BONE, 5)).join('') +
    // sternum
    line('M250 206 L250 268', BONE, 9) +
    // pelvis
    line('M186 462 C192 500 222 514 250 506 C278 514 308 500 314 462', BONE, 10) + line('M186 462 C192 500 222 514 250 506 C278 514 308 500 314 462', BONEIN, 5) +
    // arms
    bone('M152 236 L126 368') + bone('M122 382 L100 512') + bone('M348 236 L374 368') + bone('M378 382 L400 512') +
    // collarbones
    line('M198 202 L162 214', BONE, 7) + line('M302 202 L338 214', BONE, 7)),
  o('spine', line('M250 84 L250 470', '#d9bfd2', 9) + line('M250 84 L250 470', '#b07aa0', 3)),
  o('nerves',
    line('M250 222 C220 228 170 244 146 296 C130 330 120 370 104 440 C98 470 96 496 98 528', '#b07aa0', 2.5) +
    line('M250 222 C280 228 330 244 354 296 C370 330 380 370 396 440 C402 470 404 496 402 528', '#b07aa0', 2.5) +
    line('M250 470 C232 520 214 566 206 630 C200 700 198 800 198 920', '#b07aa0', 2.5) +
    line('M250 470 C268 520 286 566 294 630 C300 700 302 800 302 920', '#b07aa0', 2.5) +
    '<circle cx="104" cy="440" r="4" style="fill:#b07aa0"></circle><circle cx="198" cy="760" r="4" style="fill:#b07aa0"></circle>'),
  o('vessels',
    line('M262 244 C266 280 262 330 258 380 L256 470 C240 530 218 600 206 700 C200 780 200 860 202 930', '#c86d56', 4) +
    line('M256 470 C272 530 290 600 296 700 C300 780 300 860 298 930', '#c86d56', 4) +
    line('M262 230 C300 222 340 240 362 300 C372 340 384 400 396 470', '#c86d56', 3.5) +
    line('M246 240 C240 280 242 330 244 380 L244 470 C230 530 210 600 198 700 C192 780 192 860 194 930', '#6f91a2', 4) +
    line('M244 470 C262 530 282 600 288 700 C292 780 292 860 290 930', '#6f91a2', 4) +
    line('M246 230 C200 222 160 240 138 300 C128 340 116 400 104 470', '#6f91a2', 3.5) +
    line('M262 228 C262 190 256 170 256 150', '#c86d56', 3.5) + line('M244 228 C244 190 244 170 244 150', '#6f91a2', 3.5)),
  o('ureters', line('M190 372 C200 420 226 470 242 506', '#d8b86a', 4) + line('M310 372 C300 420 274 470 258 506', '#d8b86a', 4))
].join('');
exports.FRONT = [
  o('diaphragm', line('M156 294 C196 256 304 256 344 294', '#b98a74', 6)),
  o('nose', line('M250 96 C247 102 244 107 246 110 C248 112 252 112 254 110', '#d9a08f', 3)),
  o('salivary', '<ellipse cx="226" cy="128" rx="7" ry="5" style="fill:#e0b46a"></ellipse><ellipse cx="274" cy="128" rx="7" ry="5" style="fill:#e0b46a"></ellipse><ellipse cx="230" cy="112" rx="6" ry="7" style="fill:#e0b46a"></ellipse><ellipse cx="270" cy="112" rx="6" ry="7" style="fill:#e0b46a"></ellipse>'),
  o('pituitary', line('M250 70 L250 80', '#b07aa0', 3) + '<circle cx="250" cy="70" r="6" style="fill:#c99ab8"></circle><circle cx="250" cy="84" r="5.5" style="fill:#b07aa0"></circle>'),
  o('trachea', '<rect x="242" y="134" width="16" height="12" rx="5" style="fill:#d7c2b0"></rect>' + line('M250 146 L250 202', '#c9a99a', 10) + line('M250 148 L250 200', '#f4ece2', 6, 'stroke-dasharray:3 4') + line('M250 202 C246 208 240 212 232 218', '#c9a99a', 7) + line('M250 202 C254 208 258 212 266 216', '#c9a99a', 7)),
  o('thyroid', '<ellipse cx="241" cy="164" rx="7" ry="11" style="fill:#c98fa0"></ellipse><ellipse cx="259" cy="164" rx="7" ry="11" style="fill:#c98fa0"></ellipse><rect x="240" y="164" width="20" height="6" rx="3" style="fill:#c98fa0"></rect>'),
  o('thymus', '<path d="M244 186 C238 192 238 204 246 206 C250 202 250 194 250 188 C250 194 250 202 254 206 C262 204 262 192 256 186 Z" style="fill:#d9b8a0"></path>'),
  o('spleen', '<ellipse cx="337" cy="302" rx="9" ry="18" transform="rotate(18 337 302)" style="fill:#8e5a6a"></ellipse>'),
  o('lymphnodes', line('M236 162 C232 190 226 214 236 250 M264 162 C268 190 270 214 262 250 M174 236 C200 236 220 240 236 250 M326 236 C300 236 280 240 262 250 M212 520 C222 490 232 470 240 440 M288 520 C278 490 268 470 262 440', '#9fb6c2', 2.5, 'stroke-dasharray:6 4') +
    [[236, 162], [264, 162], [174, 236], [326, 236], [212, 520], [288, 520], [226, 214], [270, 214]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" style="fill:#6f91a2"></circle>`).join('')),
  o('marrow', line('M207 618 L211 722', '#c86d56', 4) + line('M293 618 L289 722', '#c86d56', 4) + line('M212 770 L208 900', '#e7a99a', 3) + line('M288 770 L292 900', '#e7a99a', 3) + '<circle cx="250" cy="236" r="4" style="fill:#c86d56"></circle><circle cx="226" cy="490" r="4" style="fill:#c86d56"></circle><circle cx="274" cy="490" r="4" style="fill:#c86d56"></circle>'),
  o('uterus', '<path d="M239 486 C233 486 232 494 234 504 C236 516 243 524 247 532 L253 532 C257 524 264 516 266 504 C268 494 267 486 261 486 C256 486 254 490 250 490 C246 490 244 486 239 486 Z" style="fill:#d98aa8"></path>' + line('M247 532 L247 552 M253 532 L253 552', '#d98aa8', 3)),
  o('prostate', '<ellipse cx="250" cy="540" rx="9" ry="6" style="fill:#b98a74"></ellipse>'),
  o('testes', '<ellipse cx="242" cy="590" rx="7" ry="9" style="fill:#c98fa0"></ellipse><ellipse cx="258" cy="590" rx="7" ry="9" style="fill:#c98fa0"></ellipse>' + line('M240 582 C232 560 226 530 236 510 C242 500 250 502 250 516', '#c98fa0', 2.5) + line('M260 582 C268 560 274 530 264 510 C258 500 250 502 250 516', '#c98fa0', 2.5)),
  o('urethra', line('M250 529 L250 572', '#d8b86a', 4))
].join('');
exports.KEYS = ['skeleton', 'spine', 'nerves', 'vessels', 'ureters', 'diaphragm', 'nose', 'salivary', 'pituitary', 'trachea', 'thyroid', 'thymus', 'spleen', 'lymphnodes', 'marrow', 'uterus', 'prostate', 'testes', 'urethra'];
