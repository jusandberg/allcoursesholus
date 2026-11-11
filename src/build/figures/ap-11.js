const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f } = require('./lib.js');

// brain, side view, front of the head to the left
const CB = 'M110 250 C90 160 160 70 280 56 C400 44 520 90 550 180 C570 240 548 296 500 306 C470 312 440 300 420 290 C380 300 330 310 300 300 C250 320 200 330 160 310 C130 296 116 276 110 250 Z';
const cerebellum = ell(474, 330, 76, 44, '#d9a89a') + line('M410 318 C450 304 500 304 540 318 M406 334 C450 322 500 322 546 334 M414 350 C450 340 500 340 538 350', '#c08e80', 3);
const stem = sh('M336 292 C360 304 400 304 414 292 L408 360 C402 400 398 430 394 456 L360 456 C362 420 356 380 350 350 Z', '#cfa7a0') + ell(382, 330, 32, 24, '#d9b2aa');
const dien = ell(352, 246, 52, 28, '#b49ac0') + ell(336, 282, 22, 12, '#9c8aa2');
const gyri = line('M170 140 C200 120 230 150 260 128 M200 220 C240 200 270 230 300 206 M360 100 C390 86 420 110 450 96 M420 180 C450 170 480 190 520 176 M240 90 C260 110 290 100 300 120', '#d4a59b', 3);
const LOBES = {
  frontal: 'M0 0 L305 0 L330 245 L200 262 L0 262 Z',
  parietal: 'M305 0 L478 0 L478 216 L410 238 L330 245 Z',
  occipital: 'M478 0 L700 0 L700 420 L462 320 L410 238 L478 216 Z',
  temporal: 'M0 262 L200 262 L330 245 L410 238 L462 320 L300 420 L0 420 Z'
};
const lobe = (k, c) => `<g clip-path="url(#lobeclip)">${sh(LOBES[k], c)}</g>`;
const clip = `<clipPath id="lobeclip"><path d="${CB}"></path></clipPath>`;
const fissures = line('M305 54 C312 120 322 190 330 245', '#9a6d64', 4) + line('M170 268 C230 250 290 250 410 238', '#9a6d64', 4);

// eye, cross-section, light comes in from the left
const E = [400, 240];
const eyeBase = circ(400, 240, 172, '#f4efe1') + circ(400, 240, 160, '#7a5a52') + circ(400, 240, 150, '#e7a9a0') + circ(400, 240, 140, '#eef3f5');
const corneaD = 'M262 150 C214 180 206 300 262 330 L272 318 C232 290 232 190 272 162 Z';

// ear: outer, middle, inner, left to right
const spiral = (() => { let d = ''; for (let i = 0; i <= 80; i++) { const a = i / 80 * Math.PI * 5, r = 44 - i * .48; d += (i ? 'L' : 'M') + f(600 + r * Math.cos(a)) + ' ' + f(290 + r * Math.sin(a)); } return d; })();

module.exports = {
  'ap11-1': fig('The four parts of the brain', '80 30 500 440',
    sh(CB, '#efc9bf') + gyri + cerebellum + stem,
    [
      { label: 'Cerebrum', c: C.rose, detail: 'The largest part: intellect, emotions, voluntary movement and the senses.', svg: outline(CB, C.rose, 6) + T(250, 160, 'Cerebrum', { s: 28, c: C.rose }) },
      { label: 'Diencephalon', c: C.plumD, detail: 'Deep inside: the thalamus (a relay station) and the hypothalamus (much of homeostasis).', svg: dien + T(352, 214, 'Diencephalon', { s: 22, c: C.plumD }) },
      { label: 'Brainstem', c: '#9a5d50', detail: 'Midbrain, pons and medulla oblongata: breathing, heart rate and reflexes to sights and sounds.', svg: stem + outline('M336 292 C360 304 400 304 414 292 L408 360 C402 400 398 430 394 456 L360 456 C362 420 356 380 350 350 Z', '#9a5d50', 4) + T(300, 420, 'Brainstem', { s: 24, c: '#9a5d50', a: 'end' }) },
      { label: 'Cerebellum', c: C.goldD, detail: 'At the back, below the cerebrum: coordination, posture and balance.', svg: ring(474, 330, 82, 50, C.goldD, 5) + T(474, 410, 'Cerebellum', { s: 24, c: C.goldD }) }
    ], { hint: 'Front of the head is on the left.' }),

  'ap11-6': fig('Lobes of the cerebrum', '80 30 500 400',
    clip + sh(CB, '#efc9bf') + cerebellum + stem,
    [
      { label: 'Frontal', c: C.rose, detail: 'Voluntary movement, mood, aggression, smell and motivation.', svg: lobe('frontal', '#e2a493') + T(200, 170, 'Frontal', { s: 28, c: '#8a3f33' }) },
      { label: 'Parietal', c: C.goldD, detail: 'Behind the central sulcus: touch, pain, balance, taste and temperature.', svg: lobe('parietal', '#e6c98a') + T(395, 140, 'Parietal', { s: 26, c: '#7a5f22' }) },
      { label: 'Temporal', c: C.blueD, detail: 'Below the lateral fissure: hearing, smell, memory, abstract thought and judgment.', svg: lobe('temporal', '#a9c0cb') + T(290, 288, 'Temporal', { s: 24, c: '#2c4652' }) },
      { label: 'Occipital', c: C.plumD, detail: 'At the back: receives and interprets vision.', svg: lobe('occipital', '#c4b0cc') + T(512, 224, 'Occipital', { s: 22, c: '#5e4e66' }) },
      { label: 'Insula', c: C.deep, detail: 'A fifth lobe, hidden deep inside the lateral fissure.', svg: ell(300, 252, 40, 14, '#a3b795') + T(300, 360, 'Insula (hidden deep)', { s: 20, c: C.deep }) }
    ], { top: fissures, hint: 'The central sulcus and lateral fissure divide the lobes.' }),

  'ap11-11': fig('Parts of the eye', '170 50 640 380',
    eyeBase + sh(corneaD, '#e3eef2') + sh('M272 162 C236 200 236 280 272 318 L290 300 L290 180 Z', '#d7e8ee')
      + rect(560, 226, 200, 30, 14, '#ebd08c') + ell(300, 240, 24, 60, '#f3e4b8') + rect(262, 162, 14, 50, 6, '#6f91a2') + rect(262, 268, 14, 50, 6, '#6f91a2')
      + ell(292, 172, 14, 10, '#9a5d50') + ell(292, 308, 14, 10, '#9a5d50'),
    [
      { label: 'Sclera', c: C.ink, detail: 'The tough white outer layer.', svg: ring(400, 240, 166, 166, C.ink, 5, 'stroke-dasharray="0"') + T(460, 70, 'Sclera', { s: 22, c: C.ink }) },
      { label: 'Cornea', c: C.blueD, detail: 'The clear front part of the sclera that lets light in.', svg: outline(corneaD, C.blueD, 5) + T(200, 130, 'Cornea', { s: 22, c: C.blueD }) },
      { label: 'Choroid', c: '#7a5a52', detail: 'The middle layer: full of blood vessels and dark pigment that absorbs stray light.', svg: ring(400, 240, 155, 155, '#5a3a32', 8) + T(640, 120, 'Choroid', { s: 22, c: '#7a5a52' }) },
      { label: 'Retina', c: C.rose, detail: 'The inner layer with the light-sensitive rods and cones.', svg: ring(400, 240, 145, 145, C.rose, 8) + T(640, 380, 'Retina', { s: 22, c: C.rose }) },
      { label: 'Iris and pupil', c: '#3b5562', detail: 'The coloured muscle around the pupil. It controls how much light gets in.', svg: rect(262, 162, 14, 50, 6, '#3b5562') + rect(262, 268, 14, 50, 6, '#3b5562') + T(230, 360, 'Iris', { s: 22, c: C.blueD }) + T(214, 248, 'Pupil', { s: 18, c: C.blueD, a: 'end' }) },
      { label: 'Lens and ciliary body', c: C.goldD, detail: 'The ciliary body holds the lens, which focuses light on the retina.', svg: ring(300, 240, 28, 64, C.goldD, 5) + T(330, 330, 'Lens', { s: 22, c: C.goldD }) },
      { label: 'Aqueous humour', c: '#6f91a2', detail: 'Watery fluid filling the front compartment, between the cornea and the lens.', svg: sh('M272 162 C236 200 236 280 272 318 L290 300 L290 180 Z', '#a3c3d0') + T(250, 100, 'Aqueous', { s: 20, c: '#4f7282' }) },
      { label: 'Vitreous humour', c: C.sage, detail: 'Jelly-like fluid filling the large back compartment.', svg: circ(420, 240, 100, '#dbe7e0') + T(430, 248, 'Vitreous', { s: 24, c: C.deep }) },
      { label: 'Optic nerve', c: '#a68a4c', detail: 'Carries signals from the retina to the brain.', svg: rect(560, 226, 200, 30, 14, '#dcb25a') + T(700, 210, 'Optic nerve', { s: 20, c: '#8a6f35' }) }
    ], { tap: true, hint: 'Light comes in from the left.' }),

  'ap11-13': fig('The ear: hearing and balance', '0 60 780 400',
    sh('M60 120 C20 160 20 300 70 340 C100 360 120 330 110 300 C100 270 130 250 140 230 C150 200 120 110 60 120 Z', '#f0c9b8') + rect(120, 210, 214, 40, 16, '#f6e3da') + rect(340, 150, 130, 160, 24, '#eef3f5')
      + line('M440 310 C460 360 500 400 540 440', '#e7a9a0', 16) + ell(500, 220, 30, 26, '#c9b9c4') + [[520, 140, 34], [566, 116, 30], [566, 172, 28]].map(([x, y, r]) => ring(x, y, r, r, '#b49ac0', 10)).join('') + line(spiral, '#9c8aa2', 12) + line('M640 270 L760 250', '#ebd08c', 10),
    [
      { label: 'External ear', c: C.rose, detail: 'The auricle (elastic cartilage) funnels sound into the external auditory canal. Ceruminous glands make earwax.', svg: outline('M60 120 C20 160 20 300 70 340 C100 360 120 330 110 300 C100 270 130 250 140 230 C150 200 120 110 60 120 Z', C.rose, 5) + rect(120, 210, 214, 40, 16, 'none').replace('style="fill:none"', `fill="none" stroke="${C.rose}" stroke-width="4"`) + T(200, 190, 'External canal', { s: 22, c: C.rose }) },
      { label: 'Eardrum', c: '#9a5d50', detail: 'The tympanic membrane vibrates when sound hits it.', svg: ell(336, 230, 7, 40, '#9a5d50') + T(336, 300, 'Eardrum', { s: 20, c: '#9a5d50' }) },
      { label: 'Ossicles', c: C.goldD, detail: 'The malleus, incus and stapes pass the vibrations on and amplify them to the oval window.', svg: line('M346 196 L380 186', '#d9c79c', 12) + line('M384 188 L414 214', '#d9c79c', 10) + line('M416 216 L466 226 M430 210 L430 234', '#d9c79c', 7) + T(405, 140, 'Ossicles', { s: 22, c: C.goldD }) },
      { label: 'Eustachian tube', c: '#b4877b', detail: 'Connects the middle ear to the throat (pharynx) and equalizes air pressure.', svg: line('M440 310 C460 360 500 400 540 440', '#d48a76', 16) + T(410, 420, 'Eustachian tube', { s: 20, c: '#8a5246' }) },
      { label: 'Cochlea', c: C.plumD, detail: 'The snail-shaped part of the inner ear that handles hearing.', svg: line(spiral, '#7a6681', 12) + T(680, 340, 'Cochlea: hearing', { s: 22, c: C.plumD }) },
      { label: 'Vestibule and semicircular canals', c: C.deep, detail: 'Balance: the vestibule senses head position (static) and the semicircular canals sense rotation (kinetic).', svg: ell(500, 220, 30, 26, '#8fa48a') + [[520, 140, 34], [566, 116, 30], [566, 172, 28]].map(([x, y, r]) => ring(x, y, r, r, '#7d9378', 10)).join('') + T(660, 100, 'Balance', { s: 22, c: C.deep }) }
    ], { hint: 'Sound travels left to right: outer, middle, inner ear.' })
};
