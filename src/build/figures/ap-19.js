const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');
const L = (x, y, s, c, a) => T(x, y, s, { s: 22, c, a: a || 'start' });
const PINK = '#e6a9b8';

// uterus, tubes and ovaries, front view
const UT = 'M300 120 C370 110 420 130 420 190 C420 260 380 310 350 340 L346 400 L254 400 L250 340 C220 310 180 260 180 190 C180 130 230 110 300 120 Z';
const tube = (s) => line(`M${300 + s * 110} 150 C${300 + s * 170} 120 ${300 + s * 210} 140 ${300 + s * 230} 180`, '#e6b7c2', 14) + Array.from({ length: 5 }, (_, i) => line(`M${300 + s * 230} 180 L${300 + s * (226 + i * 8)} ${200 + (i % 2) * 8}`, '#e6b7c2', 6)).join('');
const ovary = s => ell(300 + s * 200, 250, 36, 22, '#eab3c7') + shine(300 + s * 190, 242, 8, 4);

// follicle stages along a row
const fol = (x, r, antrum, egg) => circ(x, 200, r, '#f4d9c4') + (antrum ? circ(x + r * .15, 200, r * .55, '#fbf1e2') : '') + circ(x - (antrum ? r * .45 : 0), 200, egg || 12, '#eab3c7') + circ(x - (antrum ? r * .45 : 0), 200, (egg || 12) * .4, '#9c8aa2');

// menstrual cycle bands, 28 days
const DX = d => 60 + (d - 1) * 26;
const band = (d0, d1, c, y, h) => rect(DX(d0), y, DX(d1 + 1) - DX(d0) - 2, h, 10, c);

module.exports = {
  'ap19-4': fig('A sperm cell', '0 60 860 280',
    '',
    [
      { label: 'Head', c: C.plumD, detail: 'Holds the genetic material (23 chromosomes).', svg: ell(170, 200, 70, 46, '#d9c2d6') + ell(160, 200, 46, 30, '#9c8aa2') + L(170, 290, 'Head', C.plumD, 'middle') },
      { label: 'Acrosome', c: C.goldD, detail: 'A cap on the head with enzymes that help the sperm get through the egg’s covering.', svg: sh('M110 166 C140 146 170 146 186 156 C150 170 130 200 110 234 C92 218 92 184 110 166 Z', '#e6c98a') + L(90, 120, 'Acrosome', C.goldD) },
      { label: 'Middle piece', c: C.rose, detail: 'Packed with mitochondria that make the ATP for swimming.', svg: rect(236, 186, 120, 28, 14, '#e09c88') + Array.from({ length: 5 }, (_, i) => ell(252 + i * 22, 200, 9, 11, '#c86d56')).join('') + L(296, 260, 'Middle piece', C.rose, 'middle') },
      { label: 'Tail (flagellum)', c: C.blueD, detail: 'A flagellum that whips to move the sperm forward.', svg: line('M356 200 C420 160 460 240 520 200 C580 160 620 240 680 200 C720 176 760 210 820 196', '#8aa3b0', 10) + L(620, 150, 'Tail (flagellum)', C.blueD, 'middle') }
    ]),

  'ap19-5': fig('The path of sperm', '0 0 820 520',
    ell(220, 330, 96, 120, '#f2d6cc') + sh('M300 230 C350 220 360 300 330 360 C310 400 300 440 260 450 C300 410 300 300 300 230 Z', '#e3b8a8'),
    [
      { label: '1 Seminiferous tubules', c: C.rose, detail: 'Coiled tubes in each lobule of the testis, where sperm are made.', svg: Array.from({ length: 4 }, (_, i) => line(`M${150 + i * 10} ${250 + i * 50} C${180} ${230 + i * 50} ${200} ${290 + i * 50} ${230} ${260 + i * 50} C${250} ${240 + i * 50} ${260} ${280 + i * 50} ${276} ${270 + i * 50}`, '#c86d56', 5)).join('') + L(40, 220, '1 Tubules', C.rose) },
      { label: '2 Rete testis and efferent ducts', c: C.goldD, detail: 'Straight tubules lead to the rete testis, a network of ducts, then to the efferent ducts.', svg: line('M276 280 L300 260 M276 330 L302 300 M276 380 L304 340', '#a68a4c', 5) + L(130, 480, '2 Rete testis', C.goldD) },
      { label: '3 Epididymis', c: C.plumD, detail: 'A comma-shaped coil on the back of the testis. It stores sperm for about 20 days while they mature and learn to swim.', svg: sh('M300 230 C350 220 360 300 330 360 C310 400 300 440 260 450 C300 410 300 300 300 230 Z', '#b49ac0') + L(360, 300, '3 Epididymis', C.plumD) },
      { label: '4 Ductus (vas) deferens', c: C.blueD, detail: 'About 18 inches long, running up in the spermatic cord with nerves and vessels. It is cut in a vasectomy.', svg: line('M262 450 C340 470 380 420 400 340 C420 240 420 140 520 100', '#6f91a2', 9) + L(420, 210, '4 Ductus deferens', C.blueD) },
      { label: '5 Ejaculatory duct and urethra', c: C.deep, detail: 'Then the ejaculatory duct and the urethra (about 8 inches: prostatic, membranous and spongy parts).', svg: line('M520 100 C600 80 620 140 640 200 L700 480', '#8fa48a', 9) + ell(650, 230, 34, 26, '#c7d2c4') + L(690, 210, 'prostate', C.muted) + L(600, 510, '5 Urethra', C.deep) }
    ], { hint: 'Tap 1 to 5 to follow the path out.' }),

  'ap19-7': fig('From follicle to corpus albicans', '0 80 900 240',
    arrow(140, 200, 172, 200, C.light, { w: 4 }) + arrow(300, 200, 332, 200, C.light, { w: 4 }) + arrow(510, 200, 542, 200, C.light, { w: 4 }) + arrow(700, 200, 732, 200, C.light, { w: 4 }),
    [
      { label: 'Primary follicle', c: C.rose, detail: 'An immature egg (oocyte) with a layer of surrounding cells.', svg: fol(90, 36) + L(90, 290, 'Primary', C.rose, 'middle') },
      { label: 'Secondary follicle', c: C.goldD, detail: 'Grows larger and forms a fluid-filled space, the antrum.', svg: fol(236, 56, true) + L(236, 290, 'Secondary', C.goldD, 'middle') },
      { label: 'Graafian follicle', c: C.plumD, detail: 'Mature and ready for ovulation, when the egg bursts out of the ovary.', svg: fol(424, 76, true, 14) + L(424, 300, 'Graafian', C.plumD, 'middle') },
      { label: 'Corpus luteum', c: '#a68a4c', detail: 'The "yellow body" left behind. It makes estrogen and progesterone.', svg: circ(620, 200, 64, '#ebd08c') + shine(600, 180, 14, 8) + L(620, 300, 'Corpus luteum', '#8a6f35', 'middle') },
      { label: 'Corpus albicans', c: C.muted, detail: 'The "white body": a scar the corpus luteum becomes if there is no pregnancy.', svg: circ(810, 200, 46, '#f1efe9') + ring(810, 200, 46, 46, '#d9d5cc', 3) + L(810, 300, 'Corpus albicans', C.muted, 'middle') }
    ]),

  'ap19-9': fig('Uterus, uterine tubes and ovaries', '40 80 520 380',
    tube(-1) + tube(1) + ovary(-1) + ovary(1) + sh(UT, '#d98f80') + sh('M300 148 C350 146 380 170 376 210 C372 250 340 290 316 320 L284 320 C260 290 228 250 224 210 C220 170 250 146 300 148 Z', '#f2c9c2') + rect(276, 400, 48, 60, 12, '#e6b7c2'),
    [
      { label: 'Uterine (fallopian) tubes', c: '#b35d80', detail: 'Carry eggs from the ovaries to the uterus. The funnel-shaped end has finger-like fimbriae. Fertilization usually happens in the upper third.', svg: tube(-1).replace(/#e6b7c2/g, '#cb7a99') + tube(1).replace(/#e6b7c2/g, '#cb7a99') + L(60, 120, 'Uterine tube', '#b35d80') },
      { label: 'Ovaries', c: C.plumD, detail: 'The female gonads, about the size of unshelled almonds. They make eggs, estrogen and progesterone.', svg: ring(100, 250, 42, 28, C.plumD, 4) + ring(500, 250, 42, 28, C.plumD, 4) + L(500, 300, 'Ovary', C.plumD, 'middle') },
      { label: 'Fundus', c: C.goldD, detail: 'The dome of the uterus above where the tubes enter.', svg: line('M220 140 C260 110 340 110 380 140', '#a68a4c', 8) + L(300, 104, 'Fundus', C.goldD, 'middle') },
      { label: 'Body and isthmus', c: C.rose, detail: 'The main part of the uterus, narrowing at the isthmus.', svg: L(300, 250, 'Body', '#8a3f33', 'middle') + line('M256 330 L344 330', '#8a3f33', 4, 'stroke-dasharray="6 6"') + L(360, 336, 'Isthmus', '#8a3f33') },
      { label: 'Cervix', c: C.blueD, detail: 'The narrow lower part that opens into the vagina.', svg: rect(254, 340, 92, 60, 10, 'none').replace('style="fill:none"', `fill="none" stroke="${C.blueD}" stroke-width="4"`) + L(360, 386, 'Cervix', C.blueD) },
      { label: 'Endometrium', c: '#b9475a', detail: 'The inner lining, where a fertilized egg implants. It is shed during menstruation.', svg: outline('M300 148 C350 146 380 170 376 210 C372 250 340 290 316 320 L284 320 C260 290 228 250 224 210 C220 170 250 146 300 148 Z', '#b9475a', 5) + L(60, 200, 'Endometrium', '#b9475a') },
      { label: 'Myometrium and perimetrium', c: '#9a3f33', detail: 'The myometrium is the thick smooth muscle middle layer (contracts in delivery, and in cramps). The perimetrium is the thin outer layer.', svg: outline(UT, '#7a2f25', 6) + L(60, 380, 'Myometrium', '#9a3f33') }
    ], { tap: true }),

  'ap19-10': fig('The menstrual cycle (about 28 days)', '20 0 800 380',
    Array.from({ length: 28 }, (_, i) => i % 7 === 0 || i === 27 ? T(DX(i + 1) + 12, 370, String(i + 1), { s: 18, c: C.muted }) : '').join('') + T(40, 352, 'Day', { s: 18, c: C.muted, a: 'start' }),
    [
      { label: 'Menstrual phase: days 1 to 5', c: C.rose, detail: 'The endometrium is shed. In the ovary, 20 to 25 primary follicles start developing.', svg: band(1, 5, '#d98f80', 60, 60) + T((DX(1) + DX(6)) / 2, 98, 'Menstrual', { s: 20, c: '#fff', halo: false }) + sh(`M${DX(1)} 300 L${DX(6)} 300 L${DX(6)} 290 C${DX(4)} 280 ${DX(2)} 270 ${DX(1)} 260 Z`, '#e6a9b8') },
      { label: 'Proliferative phase: days 6 to 14', c: C.goldD, detail: 'One follicle becomes a graafian follicle, and its estrogen thickens the endometrium.', svg: band(6, 14, '#dcb25a', 60, 60) + T((DX(6) + DX(15)) / 2, 98, 'Proliferative', { s: 20, c: '#fff', halo: false }) + sh(`M${DX(6)} 300 L${DX(15)} 300 L${DX(15)} 220 C${DX(11)} 240 ${DX(8)} 280 ${DX(6)} 290 Z`, '#e6a9b8') + L(DX(6), 150, 'estrogen rises', '#8a6f35') },
      { label: 'Ovulation: day 14', c: C.plumD, detail: 'The graafian follicle releases its egg on about day 14.', svg: line(`M${DX(14) + 12} 40 L${DX(14) + 12} 310`, '#7a6681', 4, 'stroke-dasharray="6 6"') + circ(DX(14) + 12, 40, 12, '#eab3c7') + L(DX(14) + 30, 40, 'Ovulation', C.plumD) },
      { label: 'Secretory phase: days 15 to 28', c: C.deep, detail: 'LH builds the corpus luteum, whose progesterone readies the endometrium. With no pregnancy it becomes the corpus albicans and a new cycle starts.', svg: band(15, 28, '#8fa48a', 60, 60) + T((DX(15) + DX(29)) / 2, 98, 'Secretory', { s: 20, c: '#fff', halo: false }) + sh(`M${DX(15)} 300 L${DX(29)} 300 L${DX(29)} 270 C${DX(26)} 200 ${DX(20)} 200 ${DX(15)} 220 Z`, '#e6a9b8') + L(DX(18), 150, 'progesterone', C.deep) },
      { label: 'Endometrium thickness', c: '#b9475a', detail: 'The pink shape shows the uterine lining: shed, rebuilt, then kept thick and ready.', svg: L(DX(1), 330, 'Uterine lining', '#b9475a') }
    ], { hint: 'Top: the three phases. Bottom: how thick the uterine lining is.' })
};
