const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
const MY = '#c86d56', AC = '#8aa3b0';

// sarcomere: Z lines at zx0 and zx1, thick myosin in the middle, thin actin from each Z line
const sarc = (y, zx0, zx1, overlap) => { const mid = (zx0 + zx1) / 2, aw = 150; const ac = 230;
  let s = '';
  for (let r = 0; r < 4; r++) { const yy = y + r * 26; s += line(`M${zx0} ${yy} L${zx0 + ac} ${yy} M${zx1} ${yy} L${zx1 - ac} ${yy}`, AC, 5); }
  for (let r = 0; r < 3; r++) { const yy = y + 13 + r * 26; s += line(`M${mid - aw} ${yy} L${mid + aw} ${yy}`, MY, 11) + Array.from({ length: 10 }, (_, i) => { const x = mid - aw + 8 + i * 29; return x > mid - 16 && x < mid + 16 ? '' : line(`M${x} ${yy - 5} L${x + (x < mid ? -6 : 6)} ${yy - 12}`, MY, 3); }).join(''); }
  s += line(`M${zx0} ${y - 14} L${zx0} ${y + 92} M${zx1} ${y - 14} L${zx1} ${y + 92}`, C.ink, 6);
  return s; };

module.exports = {
  'ap9-2': fig('From whole muscle to filaments', '0 0 900 440',
    '',
    [
      { label: 'Muscle (epimysium)', c: C.rose, detail: 'The whole muscle, wrapped in epimysium. Fascia covers the outside.',
        svg: sh('M30 200 C30 120 120 100 200 110 C240 116 250 150 250 200 C250 250 240 284 200 290 C120 300 30 280 30 200 Z', '#d98f80') + Array.from({ length: 6 }, (_, i) => circ(90 + (i % 3) * 52, 170 + Math.floor(i / 3) * 62, 26, '#e7a9a0')).join('') + T(140, 340, 'Muscle', { s: 26, c: C.rose }) + T(140, 368, 'epimysium', { s: 18, c: C.muted }) },
      { label: 'Fascicle (perimysium)', c: C.goldD, detail: 'A bundle of muscle fibres, wrapped in perimysium.',
        svg: circ(390, 200, 76, '#e7a9a0') + ring(390, 200, 76, 76, '#c7b07a', 5) + Array.from({ length: 7 }, (_, i) => { const a = i / 6 * 2 * Math.PI; return circ(i === 6 ? 390 : 390 + 44 * Math.cos(a), i === 6 ? 200 : 200 + 44 * Math.sin(a), 20, '#f0c0b5'); }).join('') + T(390, 340, 'Fascicle', { s: 26, c: C.goldD }) + T(390, 368, 'perimysium', { s: 18, c: C.muted }) },
      { label: 'Muscle fibre (endomysium)', c: C.deep, detail: 'One long muscle cell with many nuclei and a sarcolemma membrane, wrapped in endomysium.',
        svg: rect(500, 160, 200, 80, 40, '#f0c0b5') + [540, 610, 670].map(x => ell(x, 170, 12, 5, '#9a5d50')).join('') + Array.from({ length: 4 }, (_, i) => line(`M516 ${180 + i * 14} L684 ${180 + i * 14}`, '#d98f80', 6)).join('') + T(600, 340, 'Fibre', { s: 26, c: C.deep }) + T(600, 368, 'one cell', { s: 18, c: C.muted }) },
      { label: 'Myofibril', c: C.plumD, detail: 'Thousands per fibre. Each is a chain of sarcomeres, giving the stripes.',
        svg: rect(730, 180, 150, 40, 20, '#f6d3c6') + Array.from({ length: 9 }, (_, i) => line(`M${744 + i * 16} 184 L${744 + i * 16} 216`, i % 2 ? '#c86d56' : '#8aa3b0', 6)).join('') + T(805, 150, 'Myofibril', { s: 26, c: C.plumD }) },
      { label: 'Actin and myosin', c: C.blueD, detail: 'Thin actin and thick myosin filaments make up each myofibril.',
        svg: line('M740 260 L870 260', AC, 5) + line('M760 280 L850 280', MY, 10) + line('M740 300 L870 300', AC, 5) + T(805, 340, 'Actin (thin)', { s: 20, c: C.blueD }) + T(805, 366, 'Myosin (thick)', { s: 20, c: C.rose }) }
    ], { hint: 'Each picture is a closer look inside the one before.' }),

  'ap9-3': fig('A sarcomere: bands and lines', '0 0 860 360',
    sarc(110, 120, 740),
    [
      { label: 'Z line', c: C.ink, detail: 'Runs through the middle of each I band. A sarcomere runs from one Z line to the next.', svg: T(120, 80, 'Z', { s: 28, c: C.ink }) + T(740, 80, 'Z', { s: 28, c: C.ink }) },
      { label: 'Sarcomere', c: C.deep, detail: 'The unit between two Z lines, where contraction happens.', svg: arrow(120, 40, 740, 40, C.deep, { w: 5, both: true }) + T(430, 30, 'Sarcomere', { s: 24, c: C.deep }) },
      { label: 'A band', c: C.rose, detail: 'The dark band: the length of the thick myosin filaments.', svg: rect(280, 90, 300, 130, 8, '#c86d56', 'opacity:.15') + arrow(280, 260, 580, 260, C.rose, { w: 4, both: true }) + T(430, 290, 'A band (dark): myosin', { s: 22, c: C.rose }) },
      { label: 'I band', c: C.blueD, detail: 'The light band: thin actin only, with no myosin overlap. Each I band is split by a Z line.', svg: rect(120, 90, 160, 130, 8, '#8aa3b0', 'opacity:.2') + rect(580, 90, 160, 130, 8, '#8aa3b0', 'opacity:.2') + T(200, 330, 'I band (light)', { s: 22, c: C.blueD }) + T(660, 330, 'I band (light)', { s: 22, c: C.blueD }) },
      { label: 'H zone', c: C.goldD, detail: 'The lighter middle of the A band, where there is myosin but no actin overlap.', svg: rect(350, 90, 160, 130, 8, '#d3a84b', 'opacity:.3') + T(430, 80, 'H zone', { s: 22, c: C.goldD }) }
    ], { hint: 'Blue lines are thin actin; red lines with heads are thick myosin.' }),

  'ap9-6': fig('Sliding filaments: relaxed and contracted', '0 0 860 420',
    sarc(50, 100, 760) + sarc(270, 190, 670) + T(430, 30, 'Relaxed', { s: 24, c: C.muted }) + T(430, 410, 'Contracted', { s: 24, c: C.muted }),
    [
      { label: 'Calcium unlocks actin', c: C.goldD, detail: 'Calcium binds to troponin and moves the troponin-tropomyosin block, so myosin can reach actin.',
        svg: [[150, 40], [700, 40], [260, 250], [600, 250]].map(([x, y]) => circ(x, y, 12, '#d3a84b') + T(x, y + 6, 'Ca', { s: 13, c: '#fff', halo: false })).join('') },
      { label: 'Cross-bridges pull', c: C.rose, detail: 'Myosin heads, powered by ATP, grab actin and pull it in among the myosin filaments.',
        svg: arrow(250, 236, 320, 236, C.rose, { w: 4 }) + arrow(610, 236, 540, 236, C.rose, { w: 4 }) + T(430, 236, 'pulls in', { s: 20, c: C.rose }) },
      { label: 'Z lines move closer', c: C.ink, detail: 'The sarcomere shortens: the Z lines move toward each other.',
        svg: line('M100 165 L190 255 M760 165 L670 255', C.ink, 3, 'stroke-dasharray="6 6"') + T(120, 230, 'Z lines closer', { s: 20, c: C.ink }) },
      { label: 'A band stays the same', c: C.blueD, detail: 'The filaments slide; they don’t shorten. The A band (myosin) stays the same width while the I bands and H zone narrow.',
        svg: line('M280 166 L280 254 M580 166 L580 254', C.blueD, 3, 'stroke-dasharray="6 6"') + T(430, 196, 'same A band width', { s: 20, c: C.blueD }) }
    ])
};
