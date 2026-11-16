// More pictures for Nutritional Counselling, lessons 11 to 17
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, smooth, box, person } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });

module.exports = {
  'l11-b1': fig('Education vs counselling', '0 0 840 360',
    line('M420 40 L420 320', '#dfe4de', 3),
    [
      { label: 'Nutrition education', c: C.blueD, detail: 'Designed around the needs of a group or community.', svg: [[120, 230], [180, 240], [240, 230], [300, 240], [150, 300], [210, 310], [270, 300]].map(([x, y]) => person(x, y, .35, '#a3bcc8')).join('') + box(210, 90, 220, 50, '#e3edf1', 'One message, a group', C.blueD, 18) + L(210, 350, 'Education: the group', C.blueD, 'middle') },
      { label: 'Nutrition counselling', c: C.deep, detail: 'Shaped around one client, built on a working partnership between counsellor and client.', svg: person(560, 300, .7, '#a3b795') + person(700, 300, .7, '#e6c98a') + line('M600 170 C620 140 660 140 680 170', C.deep, 4) + L(630, 350, 'Counselling: one partnership', C.deep, 'middle') },
      { label: 'Same aim', c: C.goldD, detail: 'Both help people choose foods that support their health. In counselling you respond on purpose: to acknowledge, explore or gently challenge.', svg: L(420, 30, 'Same aim: food choices that support health', C.goldD, 'middle', 18) }
    ]),

  'l11-b3': fig('What makes an effective counsellor', '0 0 840 440',
    circ(420, 220, 70, '#4b5d49') + T(420, 214, 'The', { s: 18, c: '#fff', halo: false }) + T(420, 238, 'relationship', { s: 16, c: '#fff', halo: false }),
    ['Knowledge', 'Self-awareness', 'Ethical integrity', 'Congruence', 'Honesty', 'Communication', 'Gender and culture awareness'].map((n, i) => { const a = -Math.PI / 2 + i / 7 * 2 * Math.PI, x = 420 + 300 * Math.cos(a), y = 220 + 170 * Math.sin(a), c = [C.blueD, C.plumD, C.deep, C.goldD, C.rose, C.blueD, C.plumD][i];
      return { label: n, c, detail: i === 3 ? 'Congruence: what you say matches who you are and how you act, including body language.' : n + ' is one of Okun’s seven qualities that matter most. No one has them all perfectly; keep working on them.', svg: line(`M${f(420 + 74 * Math.cos(a))} ${f(220 + 74 * Math.sin(a))} L${f(x - 80 * Math.cos(a))} ${f(y - 24 * Math.sin(a))}`, '#c7d2c4', 3) + box(x, y, 210, 46, '#fff', n, c, i === 6 ? 15 : 18) }; }),
    { hint: 'Okun’s seven qualities. Writers add humour, flexibility, optimism, respect and empathy.' }),

  'l11-b4': fig('Know yourself first', '0 0 820 360',
    '',
    [
      { label: 'Needing control', c: C.rose, detail: 'Counsellors who need to feel in control tend to lecture and stop listening.', svg: rect(40, 60, 340, 200, 24, '#f6e6e2') + person(130, 230, .7, '#d9a092') + line('M170 120 L230 100 M170 130 L240 130 M170 140 L230 160', '#c86d56', 4) + person(300, 230, .55, '#e6c98a') + L(210, 300, 'Lectures, stops listening', C.rose, 'middle') },
      { label: 'Needing to be liked', c: C.blueD, detail: 'Counsellors who need to be liked may avoid hard topics and do too much for the client, so the client never learns new skills.', svg: rect(440, 60, 340, 200, 24, '#eef3f5') + person(530, 230, .7, '#a3bcc8') + person(690, 230, .55, '#e6c98a') + line('M570 150 C610 130 650 130 670 150', '#8aa3b0', 4) + L(610, 300, 'Avoids hard topics, does too much', C.blueD, 'middle') },
      { label: 'Your worldview', c: C.goldD, detail: 'Your culture and life shape how you see health, illness and food. Knowing your values and biases keeps them out of your sessions.', svg: L(410, 340, 'Know your values and biases', C.goldD, 'middle', 18) }
    ]),

  'l12-b5': fig('Cognitive-behavioural approach', '0 0 860 380',
    '',
    [
      { label: 'Unhelpful thought', c: C.rose, detail: 'The cognitive part helps clients notice and change unhelpful thinking.', svg: box(220, 90, 340, 70, '#f4ddd6', '“I ate one cookie, the day is ruined”', '#8a3f33', 17) },
      { label: 'Helpful thought', c: C.deep, detail: 'Replace it with a more balanced thought.', svg: box(640, 90, 340, 70, '#e4ecdf', '“One cookie, back on track at dinner”', C.deep, 17) + arrow(400, 90, 460, 90, C.light, { w: 5 }) },
      { label: 'Classical conditioning', c: C.blueD, detail: 'Pairs a cue with a response.', svg: box(220, 260, 300, 70, '#e3edf1', ['Classical:', 'cue → response'], C.blueD, 18) },
      { label: 'Operant conditioning', c: C.goldD, detail: 'The law of effect: behaviour changes with its positive or negative effect. In counselling, the positive side is used, such as a reward for reaching a goal, or a change that is its own reward.', svg: box(620, 260, 340, 70, '#f5ecd6', ['Operant:', 'behaviour → reward'], '#7a5f22', 18) }
    ], { hint: 'CBT works on thoughts and on actions.' }),

  'l12-b6': fig('Client-centred and solution-focused', '0 0 840 380',
    '',
    [
      { label: 'Client-centred (Rogers)', c: C.deep, detail: 'Carl Rogers’ basics for a good relationship: warmth, genuineness, acceptance and empathy.', svg: ['Warmth', 'Genuineness', 'Acceptance', 'Empathy'].map((n, i) => box(110 + (i % 2) * 200, 110 + Math.floor(i / 2) * 90, 180, 60, '#e4ecdf', n, C.deep, 20)).join('') + L(210, 330, 'Client-centred', C.deep, 'middle') },
      { label: 'Solution-focused', c: C.goldD, detail: 'Spends less time on the problem and more on what is already working. Looks for exceptions and builds on strengths and past successes.', svg: rect(480, 70, 320, 200, 24, '#f8f2e4') + line('M520 220 L580 180 L640 200 L700 130 L760 100', '#a68a4c', 5) + circ(700, 130, 10, '#d3a84b') + L(700, 116, 'exception', '#7a5f22', 'middle', 16) + L(640, 330, 'Solution-focused', C.goldD, 'middle') },
      { label: 'Look for exceptions', c: C.rose, detail: 'Exceptions are times the problem didn’t happen. Ask what was different then.', svg: L(640, 40, '“When was it easier?”', C.rose, 'middle', 18) }
    ]),

  'l13-b2': fig('Nonverbal communication', '0 0 860 520',
    person(300, 500, 2.2, '#c7d2c4'),
    [
      { label: 'Eye contact', c: C.blueD, detail: 'Eye contact sends a strong message of attention.', svg: line('M282 166 l10 0 M310 166 l10 0', C.ink, 4) + L(500, 160, 'Eye contact', C.blueD) + line('M490 154 L330 166', C.blueD, 2) },
      { label: 'Facial expression', c: C.rose, detail: 'Your face often shows feelings your words don’t, and so does your client’s.', svg: line('M286 196 C296 206 310 206 318 196', C.rose, 4) + L(500, 210, 'Facial expression', C.rose) + line('M490 204 L326 200', C.rose, 2) },
      { label: 'Posture and gestures', c: C.goldD, detail: 'How you sit or stand and use your hands.', svg: ring(300, 380, 110, 130, C.goldD, 4) + L(500, 380, 'Posture, gestures', C.goldD) },
      { label: 'Voice', c: C.plumD, detail: 'The volume, pace and tone of your voice, and your energy level.', svg: [0, 1, 2].map(i => line(`M${350 + i * 16} ${190 - i * 8} q10 12 0 24`, C.plumD, 3)).join('') + L(500, 260, 'Voice: volume, pace, tone', C.plumD) },
      { label: 'Synchrony', c: C.deep, detail: 'When two people’s body language naturally matches, it’s a sign of rapport.', svg: L(40, 40, 'Matching body language = rapport', C.deep) }
    ]),

  'l13-b3': fig('Responses that build the relationship', '0 0 840 300',
    '',
    ['Attending', 'Reflecting', 'Legitimation', 'Respect'].map((n, i) => ({ label: n, c: [C.blueD, C.rose, C.goldD, C.deep][i], detail: ['Giving the client your full attention.', 'Naming the emotion the client has shown in words or body language. When accurate, clients feel understood. Respond to the client’s own feelings.', 'Letting the client know their feelings make sense.', 'Showing regard for the client and their choices.'][i],
      svg: circ(120 + i * 200, 130, 70, ['#e3edf1', '#f4ddd6', '#f5ecd6', '#e4ecdf'][i]) + T(120 + i * 200, 146, n[0], { s: 44, c: [C.blueD, C.rose, C.goldD, C.deep][i], halo: false }) + T(120 + i * 200, 236, n, { s: 22, c: [C.blueD, C.rose, '#7a5f22', C.deep][i] }) + T(120 + i * 200, 264, ['full attention', 'name the feeling', '“that makes sense”', 'regard'][i], { s: 16, c: C.muted }) })),
    { hint: 'Reflecting: “It sounds like you’re frustrated.”' }),

  'l14-b2': fig('The “typical day” strategy', '0 0 880 320',
    line('M60 180 L820 180', '#e3dccd', 10),
    [
      { label: 'Walk through a day', c: C.goldD, detail: 'With six to eight minutes, ask the client to walk you through a typical day and where eating fits in.', svg: [['Wake', 100], ['Morning', 260], ['Midday', 420], ['Afternoon', 580], ['Evening', 740]].map(([n, x]) => circ(x, 180, 18, '#e6c98a') + T(x, 230, n, { s: 18, c: C.ink })).join('') },
      { label: 'Let them tell it', c: C.deep, detail: 'Sit back, let them tell their story with as few interruptions as possible, using simple open questions like “What happened then?”', svg: box(440, 80, 320, 50, '#e4ecdf', '“What happened then?”', C.deep, 20) },
      { label: 'Don’t jump in', c: C.rose, detail: 'The biggest mistake is jumping in with your own ideas. Don’t investigate problems during the story; save that for later.', svg: L(440, 290, 'No advice during the story', C.rose, 'middle') },
      { label: 'Summarize at the end', c: C.blueD, detail: 'At the end, review and summarize what you heard.', svg: arrow(760, 180, 840, 180, C.blueD, { w: 5 }) + L(830, 140, 'Summarize', C.blueD, 'end') }
    ]),

  'l14-b3': fig('Sharing assessment results', '0 0 820 320',
    '',
    [
      { label: 'Neutral comparison', c: C.blueD, detail: 'Go through results neutrally, against clear standards such as the Dietary Reference Intakes.', svg: rect(60, 80, 320, 160, 20, '#f7f4ee') + [['Iron', .7], ['Calcium', 1.05], ['Fibre', .55]].map(([n, v], i) => T(80, 124 + i * 44, n, { s: 18, c: C.ink, a: 'start' }) + rect(180, 110 + i * 44, 180 * Math.min(v, 1.1), 18, 9, '#a3bcc8') + line(`M${180 + 180} ${104 + i * 44} L${180 + 180} ${134 + i * 44}`, C.ink, 2)).join('') + L(220, 280, 'Compare with the DRIs', C.blueD, 'middle') },
      { label: 'Client speaks first', c: C.deep, detail: 'Give the facts and let the client make the first comments about what they mean. It keeps them in charge and avoids sounding like a judgement.', svg: person(560, 260, .7, '#e6c98a') + box(640, 110, 230, 60, '#e4ecdf', '“What do you notice?”', C.deep, 18) + L(620, 300, 'Their read first', C.deep, 'middle') }
    ], { hint: 'Example values for illustration only.' }),

  'l15-b2': fig('Dietary assessment tools', '0 0 860 360',
    '',
    [
      { label: '24-hour recall', c: C.blueD, detail: 'Quick, but people over- or under-report. Ask neutrally: “What were the first foods or drinks you had after waking up?”', svg: box(150, 110, 240, 120, '#e3edf1', ['24-hour recall', 'quick'], C.blueD, 20) },
      { label: 'Food frequency questionnaire', c: C.goldD, detail: 'Shows how often foods are eaten. Pairing it with a 24-hour recall gives a better picture.', svg: box(430, 110, 260, 120, '#f5ecd6', ['Food frequency', 'how often'], '#7a5f22', 20) },
      { label: 'Food diary', c: C.deep, detail: 'Filled in by the client; writing things down also builds awareness, so it works as an intervention too.', svg: box(710, 110, 240, 120, '#e4ecdf', ['Food diary', 'builds awareness'], C.deep, 20) },
      { label: 'History forms', c: C.plumD, detail: 'Detailed forms give clues to strengths and barriers, but some clients may find them invasive or culturally uncomfortable.', svg: L(430, 300, 'History forms: helpful, but can feel invasive', C.plumD, 'middle', 18) }
    ]),

  'l15-b4': fig('BMI cut-offs differ by population', '0 0 860 340',
    line('M80 200 L800 200', C.muted, 3) + [18.5, 23, 25, 26, 27.5, 30].map(v => T(80 + (v - 16) * 46, 230, String(v), { s: 15, c: C.muted })).join(''),
    [
      { label: 'Most adults', c: C.deep, detail: 'The usual cut-offs: overweight from 25, obesity from 30.', svg: rect(80 + 9 * 46, 150, 5 * 46, 40, 10, '#e6c98a') + rect(80 + 14 * 46, 150, 2 * 46, 40, 10, '#e6a99c') + L(80 + 9 * 46, 140, 'Usual: 25 / 30', C.deep) },
      { label: 'Most Asian populations', c: C.blueD, detail: 'WHO suggests 23 for overweight and 27.5 for obesity.', svg: rect(80 + 7 * 46, 260, 4.5 * 46, 30, 10, '#e6c98a') + rect(80 + 11.5 * 46, 260, 2 * 46, 30, 10, '#e6a99c') + L(80 + 7 * 46, 316, 'Asian: 23 / 27.5', C.blueD) },
      { label: 'Pacific Islanders', c: C.plumD, detail: 'The overweight cut-off is 26.', svg: line(`M${80 + 10 * 46} 100 L${80 + 10 * 46} 196`, C.plumD, 4) + L(80 + 10 * 46 + 8, 96, 'Pacific Islanders: 26', C.plumD) },
      { label: 'When BMI misleads', c: C.rose, detail: 'BMI isn’t a good guide in pregnancy and breastfeeding, very muscular people, growing children or adults over 65.', svg: L(80, 50, 'Not for: pregnancy, athletes, children, 65+', C.rose, 'start', 18) }
    ]),

  'l16-b1': fig('Ways to self-monitor', '0 0 860 360',
    '',
    [
      { label: 'Journal', c: C.deep, detail: 'Record what was eaten, portions, time, place, mood and hunger. Keep it simple: too much detail makes people give up.', svg: rect(60, 60, 220, 240, 14, '#ffffff') + rect(60, 60, 220, 240, 14, 'none').replace('style="fill:none"', 'fill="none" stroke="#c7d2c4" stroke-width="3"') + Array.from({ length: 6 }, (_, i) => line(`M80 ${100 + i * 30} L260 ${100 + i * 30}`, '#dfe4de', 2)).join('') + L(170, 330, 'Journal', C.deep, 'middle') },
      { label: 'Check boxes', c: C.blueD, detail: 'For clients who don’t want to write, checking off boxes works.', svg: [0, 1, 2, 3].map(i => rect(340, 90 + i * 50, 30, 30, 6, '#e3edf1') + (i < 3 ? line(`M346 ${105 + i * 50} L354 ${113 + i * 50} L366 ${97 + i * 50}`, C.blueD, 4) : '') + rect(386, 98 + i * 50, 120, 14, 7, '#cfdde4')).join('') + L(420, 330, 'Check boxes', C.blueD, 'middle') },
      { label: 'Tokens in a bowl', c: C.goldD, detail: 'Or watch a bowl of tokens slowly empty as goals are met. Drawings or art also work.', svg: sh('M590 180 L790 180 C790 280 590 280 590 180 Z', '#f0e2c0') + [[640, 170], [680, 160], [720, 172], [700, 150]].map(([x, y]) => circ(x, y, 14, '#d3a84b')).join('') + L(690, 330, 'Tokens, drawings', C.goldD, 'middle') }
    ], { hint: 'Recording gets quicker with practice.' }),

  'l16-b3': fig('Opportunity vs obstacle thinking', '0 0 840 360',
    '',
    [
      { label: 'Opportunity thinking', c: C.deep, detail: 'Sees challenges as chances to grow.', svg: line('M80 280 L160 230 L240 250 L320 170 L380 110', C.deep, 6) + arrow(360, 124, 384, 106, C.deep, { w: 6 }) + L(230, 330, 'Opportunity: a chance to grow', C.deep, 'middle') },
      { label: 'Obstacle thinking', c: C.rose, detail: 'Focuses on why things won’t work. All-or-nothing views make people hard on themselves.', svg: rect(500, 120, 40, 160, 6, '#d9a092') + line('M450 260 L500 260', C.rose, 6) + L(620, 330, 'Obstacle: why it won’t work', C.rose, 'middle') },
      { label: 'Common barriers', c: C.goldD, detail: 'Lack of knowledge, lack of skill, fear of taking risks and lack of social support. Many can be addressed by increasing knowledge.', svg: L(420, 50, 'Barriers: knowledge, skill, fear, support', C.goldD, 'middle', 18) },
      { label: 'Contracts and rewards', c: C.blueD, detail: 'A written contract between counsellor and client. Small rewards right after the behaviour suit short-term goals; bigger ones long-term goals.', svg: L(620, 100, 'Contract + small, quick reward', C.blueD, 'middle', 18) }
    ]),

  'l16-b4': fig('Teaching that sticks', '0 0 820 340',
    line('M80 280 L760 280 M80 280 L80 60', C.muted, 2) + T(760, 310, 'Minutes after the visit →', { s: 15, c: C.muted, a: 'end' }) + T(90, 56, 'Remembered', { s: 15, c: C.muted, a: 'start' }),
    [
      { label: 'Half forgotten in 5 minutes', c: C.rose, detail: 'Clients forget about half of what they hear within five minutes, especially when stressed.', svg: line(smooth([[80, 80], [160, 140], [240, 180], [400, 200], [740, 210]]), C.rose, 5) + line('M160 280 L160 140', C.rose, 2, 'stroke-dasharray="5 6"') + L(170, 130, 'Half gone by 5 min', C.rose) },
      { label: 'Keep it short', c: C.deep, detail: 'Keep instructions short and focused, and don’t bury clients in handouts.', svg: L(420, 90, 'Short, focused, few handouts', C.deep) },
      { label: 'Supportive language', c: C.blueD, detail: 'Steer away from “you”, give information neutrally, start with “I”, and ask permission.', svg: L(420, 130, '“I”, not “you”; ask permission', C.blueD) },
      { label: 'Adherence, not compliance', c: C.goldD, detail: 'In the Nutrition Care Process, adherence (how well a client follows the plan) replaces the older word compliance.', svg: L(420, 170, 'Say adherence, not compliance', C.goldD) }
    ]),

  'l17-b3': fig('Finding your niche', '0 0 820 360',
    sh('M100 60 L720 60 L520 260 L300 260 Z', '#eef2ed'),
    [
      { label: 'Look at the market', c: C.blueD, detail: 'Looking at the market helps you find a niche.', svg: box(410, 90, 400, 46, '#e3edf1', 'The whole market', C.blueD, 20) },
      { label: 'A well-defined focus', c: C.goldD, detail: 'Master one area rather than being a jack of all trades.', svg: box(410, 170, 300, 46, '#f5ecd6', 'One clear focus', '#7a5f22', 20) },
      { label: 'Your brand', c: C.deep, detail: 'Your brand image is how other people see you. A positive one brings more opportunities and career satisfaction.', svg: box(410, 240, 200, 46, '#a3b795', 'Your brand', '#fff', 20) },
      { label: 'Vision board', c: C.plumD, detail: 'A collage of what you want to keep and grow in your life can help you picture where you’re headed.', svg: L(410, 330, 'A vision board helps you picture it', C.plumD, 'middle', 18) }
    ])
};
