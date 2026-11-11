// Nutritional Counselling, lessons 11 to 17 (counselling skills)
const { C, sh, circ, ell, rect, line, shine, T, arrow, ring, outline, fig, f, body, smooth, box, person } = require('./lib.js');
const L = (x, y, s, c, a, sz) => T(x, y, s, { s: sz || 22, c, a: a || 'start' });

// food choice wheel
const INF = [['Taste', 'strongest', '#e6a99c', C.rose, 70], ['Habit', '', '#e4ecdf', C.deep, 32], ['Health and knowledge', '', '#e3edf1', C.blueD, 32], ['Convenience, time', '', '#f5ecd6', C.goldD, 32], ['Culture, religion', '', '#ece2ef', C.plumD, 32], ['People we eat with', '', '#e4ecdf', C.deep, 32], ['Ads and surroundings', '', '#f5ecd6', C.goldD, 32], ['Money and access', '', '#e3edf1', C.blueD, 32], ['Stress and mood', '', '#ece2ef', C.plumD, 32]];
const wedge = (cx, cy, r, a0, a1, c) => { const p = a => [cx + r * Math.cos(a), cy + r * Math.sin(a)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return sh(`M${cx} ${cy} L${f(x0)} ${f(y0)} A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${f(x1)} ${f(y1)} Z`, c, 'stroke:#fff;stroke-width:3'); };
const WTOT = INF.reduce((a, x) => a + x[4], 0);

// stages of change staircase
const STG = [['Precontemplation', 'not thinking', C.rose], ['Contemplation', 'weighing it', C.goldD], ['Preparation', 'getting ready', C.plumD], ['Action', 'doing it', C.blueD], ['Maintenance', 'keeping it up', C.deep]];

// seesaw
const seesaw = (tilt) => `<g transform="rotate(${tilt} 400 260)">${rect(120, 248, 560, 18, 9, '#d8c39a')}${ell(200, 222, 60, 26, '#e3b0a6')}${ell(600, 222, 60, 26, '#a3b795')}${T(200, 230, 'Reasons not to', { s: 18, c: '#6a2a20', halo: false })}${T(600, 230, 'Reasons to', { s: 18, c: '#2f4a2c', halo: false })}</g>`;

// portion objects
const fist = (x, y) => sh(`M${x - 50} ${y + 40} C${x - 64} ${y - 10} ${x - 50} ${y - 50} ${x - 10} ${y - 54} C${x + 30} ${y - 58} ${x + 56} ${y - 40} ${x + 54} ${y - 4} C${x + 54} ${y + 30} ${x + 40} ${y + 50} ${x} ${y + 52} C${x - 30} ${y + 54} ${x - 46} ${y + 50} ${x - 50} ${y + 40} Z`, '#f0d0bc') + line(`M${x - 40} ${y - 22} C${x - 10} ${y - 30} ${x + 20} ${y - 30} ${x + 50} ${y - 20} M${x - 44} ${y + 2} C${x - 10} ${y - 6} ${x + 20} ${y - 6} ${x + 52} ${y + 4}`, '#d9b29c', 3);

module.exports = {
  'l11-b2': fig('What shapes food choices', '0 0 840 440',
    (() => { let a = -Math.PI / 2, s = ''; INF.forEach(([, , c, , w]) => { const a1 = a + w / WTOT * 2 * Math.PI; s += wedge(220, 220, 190, a, a1, c); a = a1; }); return s + circ(220, 220, 60, '#fff') + T(220, 228, 'Food choice', { s: 20, c: C.ink, halo: false }); })(),
    (() => { let a = -Math.PI / 2; return INF.map(([n, sub, c, tc, w], i) => { const a1 = a + w / WTOT * 2 * Math.PI, m = (a + a1) / 2; a = a1; const x = 220 + 130 * Math.cos(m), y = 220 + 130 * Math.sin(m);
      return { label: n, c: tc, detail: i === 0 ? 'Taste is generally the strongest influence. Taste preferences can change with age, a move or illness, which helps when someone is trying to change.' : i === 2 ? 'Health concerns and nutrition knowledge. People who know more about nutrition tend to eat better, so teaching still matters.' : n + ' also pulls on food choices. Many forces act at once, and they often compete.',
        svg: circ(x, y, 14, tc) + L(450, 40 + i * 44, n + (sub ? ' (' + sub + ')' : ''), tc) + line(`M444 ${34 + i * 44} L${f(x + 14)} ${f(y)}`, tc, 1.5) }; }); })(),
    { hint: 'Many forces pull at once. Taste is usually the strongest.' }),

  'l11-b6': fig('Two phases of the helping relationship', '0 0 840 360',
    line('M60 300 L780 300', '#dfe4de', 6),
    [
      { label: 'Phase 1: build the relationship', c: C.deep, detail: 'Rapport, empathy and trust. Learn about the problem from the client’s point of view, find their strengths and help them explore.', svg: rect(60, 140, 330, 160, 24, '#e4ecdf') + person(160, 290, .7, '#a3b795') + person(290, 290, .7, '#e6c98a') + T(225, 120, 'Phase 1: relationship', { s: 24, c: C.deep }) + L(225, 340, 'rapport, empathy, trust', C.muted, 'middle', 18) },
      { label: 'Phase 2: plan the change', c: C.goldD, detail: 'Help the client pick specific behaviours to change and plan realistic ways to change them.', svg: rect(450, 60, 330, 240, 24, '#f5ecd6') + [0, 1, 2].map(i => rect(500, 120 + i * 50, 30, 30, 8, '#fff') + line(`M506 ${135 + i * 50} L514 ${143 + i * 50} L526 ${127 + i * 50}`, C.goldD, 4) + rect(546, 128 + i * 50, 180, 14, 7, '#e6c98a')).join('') + T(615, 40, 'Phase 2: plan', { s: 24, c: C.goldD }) + L(615, 340, 'specific, realistic steps', C.muted, 'middle', 18) },
      { label: 'Don’t skip phase 1', c: C.rose, detail: 'Skipping the first phase is a common mistake. You may solve the wrong problem, and the plan is unlikely to work.', svg: arrow(400, 220, 440, 220, C.rose, { w: 6 }) + L(420, 250, 'in order', C.rose, 'middle', 18) }
    ]),

  'l11-b8': fig('Expert or empathizer? Both.', '0 0 820 380',
    line('M410 120 L410 320', '#c7b07a', 8) + sh('M360 330 L460 330 L440 300 L380 300 Z', '#d8c39a') + line('M170 120 L650 120', '#c7b07a', 8),
    [
      { label: 'The expert', c: C.blueD, detail: 'Gives answers that clients follow for a while, without working out how to make change fit their life.', svg: line('M170 120 L170 180 M120 180 L220 180', '#c7b07a', 4) + box(170, 220, 180, 70, '#e3edf1', ['The expert', 'gives answers'], C.blueD, 20) },
      { label: 'The empathizer', c: C.rose, detail: 'Listens so much that the client gets little direction.', svg: line('M650 120 L650 180 M600 180 L700 180', '#c7b07a', 4) + box(650, 220, 180, 70, '#f4ddd6', ['The empathizer', 'only listens'], C.rose, 20) },
      { label: 'Combine the two', c: C.deep, detail: 'Effective counsellors learn to combine expertise and empathy. Confidence grows with experience.', svg: circ(410, 110, 18, '#7d9378') + L(410, 70, 'Balance both', C.deep, 'middle', 24) },
      { label: 'Not sure? Say so', c: C.goldD, detail: 'If you don’t know, say you will look into it. If evidence is mixed, share the pros and cons fairly rather than giving a vague answer.', svg: L(410, 370, '“I’ll look into that for you.”', C.goldD, 'middle') }
    ]),

  'l12-b2': fig('The Health Belief Model', '0 0 860 440',
    arrow(590, 220, 680, 220, C.light, { w: 6 }),
    [
      { label: 'Perceived susceptibility', c: C.rose, detail: 'Believing you are at risk.', svg: box(150, 70, 270, 60, '#f4ddd6', '“I’m at risk”', '#8a3f33', 22) + line('M285 70 L470 200', '#c7d2c4', 3) },
      { label: 'Perceived severity', c: C.plumD, detail: 'Believing the problem would be serious, including social effects such as work or money.', svg: box(150, 160, 270, 60, '#ece2ef', '“It would be serious”', C.plumD, 22) + line('M285 160 L470 210', '#c7d2c4', 3) },
      { label: 'Perceived benefits', c: C.deep, detail: 'Believing that acting will help.', svg: box(150, 250, 270, 60, '#e4ecdf', '“Acting will help”', C.deep, 22) + line('M285 250 L470 230', '#c7d2c4', 3) },
      { label: 'Perceived barriers', c: C.goldD, detail: 'Believing the obstacles are manageable.', svg: box(150, 340, 270, 60, '#f5ecd6', '“The obstacles are manageable”', '#7a5f22', 20) + line('M285 340 L470 240', '#c7d2c4', 3) },
      { label: 'Cues to action', c: C.blueD, detail: 'Nudges that get someone started: symptoms, someone else acting, a media report, a doctor’s advice, or a planned cue like a note on the fridge.', svg: box(530, 90, 180, 60, '#e3edf1', 'Cues to action', C.blueD, 20) + arrow(530, 120, 530, 190, C.blueD, { w: 4 }) },
      { label: 'Self-efficacy', c: '#a68a4c', detail: 'Added to the model later: confidence that you can make the change.', svg: box(530, 340, 180, 60, '#f5ecd6', 'Self-efficacy', '#7a5f22', 20) + arrow(530, 310, 530, 250, '#a68a4c', { w: 4 }) },
      { label: 'Action', c: C.ink, detail: 'Together, these make a person more likely to act.', svg: circ(530, 220, 46, '#4b5d49') + T(530, 228, 'Belief', { s: 18, c: '#fff', halo: false }) + box(760, 220, 140, 70, '#243341', 'Action', '#ffffff', 24) }
    ], { hint: 'Four beliefs, plus a cue and confidence, lead to action.' }),

  'l12-b3': fig('Stages of change', '0 0 860 430',
    '',
    STG.map(([n, d, c], i) => ({ label: n, c, detail: [
        'Precontemplation: not thinking about changing. The cons clearly win.',
        'Contemplation: thinking about it, usually within six months, but stuck weighing pros and cons, which are about even. People can stay here for years. Confidence often dips here.',
        'Preparation: getting ready to change.',
        'Action: making the change. Confidence rises.',
        'Maintenance: keeping the change going. Confidence keeps rising.'][i],
      svg: rect(40 + i * 160, 330 - i * 60, 150, 60 + i * 60, 14, c, 'opacity:.85') + T(115 + i * 160, 362 - i * 60, n, { s: i === 0 ? 16 : 19, c: '#fff', halo: false }) + T(115 + i * 160, 414, d, { s: 15, c }) })).concat([
      { label: 'Self-efficacy', c: C.ink, detail: 'Confidence tends to drop between precontemplation and contemplation, as people see how hard change will be, then rises through action and maintenance.', svg: line(smooth([[115, 236], [275, 250], [435, 160], [595, 96], [755, 40]]), C.ink, 4, 'stroke-dasharray="10 7"') + L(60, 200, 'Confidence', C.ink, 'start', 20) }
    ]), { hint: 'The Transtheoretical Model. People can move back and forth.' }),

  'l12-b4': fig('Reciprocal determinism', '0 0 760 420',
    line('M380 90 L170 340 L590 340 Z', '#dfe4de', 6),
    [
      { label: 'Person', c: C.rose, detail: 'Thoughts, knowledge and confidence. In the example, the wife decides to learn about food.', svg: box(380, 80, 200, 70, '#f4ddd6', 'Person', '#8a3f33', 26) + L(380, 30, 'wife learns about food', C.muted, 'middle', 18) },
      { label: 'Behaviour', c: C.deep, detail: 'What the person does. She starts eating more vegetables.', svg: box(590, 340, 200, 70, '#e4ecdf', 'Behaviour', C.deep, 26) + L(590, 400, 'eats more vegetables', C.muted, 'middle', 18) },
      { label: 'Environment', c: C.blueD, detail: 'Social groups and surroundings. Her husband’s high blood pressure motivated her.', svg: box(170, 340, 200, 70, '#e3edf1', 'Environment', C.blueD, 24) + L(170, 400, 'husband’s blood pressure', C.muted, 'middle', 18) },
      { label: 'Each affects the others', c: C.goldD, detail: 'In Social Cognitive Theory the person, their behaviour and their environment all affect each other. Self-efficacy grows through modelling, verbal persuasion and feeling better.', svg: arrow(300, 140, 220, 280, C.goldD, { both: true, w: 5 }) + arrow(460, 140, 540, 280, C.goldD, { both: true, w: 5 }) + arrow(290, 340, 470, 340, C.goldD, { both: true, w: 5 }) }
    ]),

  'l12-b7': fig('Motivational interviewing', '0 0 800 420',
    sh('M370 300 L430 300 L400 262 Z', '#c7b07a') + seesaw(8),
    [
      { label: 'Ambivalence', c: C.goldD, detail: 'Wanting to change and not wanting to, at the same time. MI helps people resolve it.', svg: L(220, 110, 'Wanting to and', C.goldD, 'middle') + L(220, 136, 'not wanting to', C.goldD, 'middle') },
      { label: 'Change talk tips it', c: C.deep, detail: 'The aim is for the client, not you, to make the case for change. As they voice their own reasons, the balance tips toward action.', svg: [[560, 150], [610, 130], [660, 150]].map(([x, y]) => box(x, y, 40, 30, '#a3b795', '+', '#fff', 20)).join('') + L(610, 90, 'Change talk', C.deep, 'middle') },
      { label: 'Collaboration, evocation, autonomy', c: C.plumD, detail: 'The spirit of MI: a partnership (collaboration), drawing out the client’s own reasons (evocation), and respecting that the choice is theirs (autonomy).', svg: L(40, 360, 'Spirit: collaboration · evocation · autonomy', C.plumD) },
      { label: 'OARS skills', c: C.blueD, detail: 'Open-ended questions, Affirmations, Reflections and Summaries.', svg: ['O', 'A', 'R', 'S'].map((c, i) => circ(80 + i * 60, 400, 22, '#a3bcc8') + T(80 + i * 60, 408, c, { s: 20, c: '#fff', halo: false })).join('') + L(330, 406, 'Open questions, Affirm, Reflect, Summarize', C.blueD, 'start', 18) }
    ]),

  'l13-b1': fig('Learning a new skill', '0 0 820 380',
    '',
    ['Awareness', 'Awkwardness', 'Conscious awareness', 'Automatic'].map((n, i) => ({ label: n, c: [C.blueD, C.rose, C.goldD, C.deep][i], detail: ['First you become aware of the skill.', 'Using it feels clumsy and forced. This is a normal step, not a sign you’re doing it wrong.', 'You’re more comfortable but still have to think about it.', 'It becomes an automatic response. Practice moves you here.'][i],
      svg: rect(40 + i * 190, 300 - i * 60, 180, 60 + i * 60, 14, ['#a3bcc8', '#e6a99c', '#e6c98a', '#a3b795'][i]) + T(130 + i * 190, 286 - i * 60, n, { s: 20, c: [C.blueD, C.rose, '#7a5f22', C.deep][i] }) })),
    { hint: 'Practice moves you up the steps.' }),

  'l13-b4': fig('Focus and intent', '0 0 820 420',
    rect(200, 60, 600, 340, 20, '#f7f4ee') + ['Acknowledge', 'Explore', 'Challenge'].map((n, i) => T(300 + i * 200, 46, n, { s: 22, c: C.ink })).join('') + ['Information', 'Feelings', 'Thoughts', 'Behaviours'].map((n, i) => T(190, 120 + i * 80, n, { s: 20, c: C.ink, a: 'end' })).join(''),
    [
      { label: 'Focus', c: C.blueD, detail: 'Where you put the emphasis: information, or the client’s experience (feelings, thoughts or behaviours).', svg: rect(20, 80, 180, 320, 14, '#a3bcc8', 'opacity:.35') + L(110, 420, 'Focus: where', C.blueD, 'middle') },
      { label: 'Intent', c: C.rose, detail: 'Your reason for the response: to acknowledge, to explore or to challenge.', svg: rect(200, 16, 600, 44, 14, '#e6a99c', 'opacity:.35') + L(500, 14, 'Intent: why', C.rose, 'middle', 18) },
      { label: 'Example', c: C.deep, detail: '“What do you think would work for you?” is an open question focused on the client’s thoughts, asked to explore.', svg: rect(410, 254, 180, 54, 12, '#7d9378') + T(500, 288, 'thoughts × explore', { s: 18, c: '#fff', halo: false }) },
      { label: 'Open vs closed', c: C.goldD, detail: 'Open questions (what, how, tell me) invite exploring. Closed questions get a short fact or a yes or no.', svg: L(230, 380, 'Open: what, how, tell me… Closed: yes or no', '#7a5f22') }
    ], { hint: 'Every response has a focus (where) and an intent (why).' }),

  'l13-b5': fig('Challenging gently: “and”, not “but”', '0 0 820 340',
    '',
    [
      { label: 'Avoid “but”', c: C.rose, detail: '“But” tends to cancel what came before it and can sound like an accusation.', svg: box(410, 90, 720, 80, '#f6e6e2', ['You want to eat better, BUT you had', 'pizza twice this week.'], '#8a3f33', 22) },
      { label: 'Use “and”', c: C.deep, detail: 'State the observation with “and”. It puts both facts side by side and lets the client think about them.', svg: box(410, 230, 720, 80, '#e9f0e6', ['You want to improve your eating habits, AND', 'you had delivery pizza twice this week.'], C.deep, 22) + line('M50 230 L64 244 L86 214', C.deep, 6) }
    ]),

  'l14-b1': fig('Phases of a counselling session', '0 0 860 300',
    line(smooth([[60, 160], [260, 120], [440, 190], [620, 120], [800, 160]]), '#e3dccd', 14),
    ['Involving', 'Exploration–education', 'Resolving', 'Closing'].map((n, i) => ({ label: n, c: [C.deep, C.blueD, C.goldD, C.plumD][i], detail: ['Greet the client, build rapport, ask how things have been going and agree on an agenda together.', 'Work together to understand the problem, look for strengths, assess readiness to change and offer education.', 'Tailor the plan to the client’s motivation level.', 'Wrap up the session.'][i],
      svg: circ([100, 320, 560, 780][i], [150, 140, 160, 150][i], 46, ['#a3b795', '#a3bcc8', '#e6c98a', '#c4b0cc'][i]) + T([100, 320, 560, 780][i], [158, 148, 168, 158][i], String(i + 1), { s: 30, c: '#fff', halo: false }) + T([100, 320, 560, 780][i], 240, n, { s: 20, c: [C.deep, C.blueD, '#7a5f22', C.plumD][i] }) })),
    { hint: 'Tap the phases in order.' }),

  'l14-b4': fig('Three levels of readiness', '0 0 840 360',
    rect(60, 150, 720, 30, 15, '#eceae4'),
    [
      { label: 'Level 1: not ready', c: C.rose, detail: 'Precontemplation. Raise doubt about current habits; the best open questions deal with the need to change. Don’t push an action plan.', svg: rect(60, 150, 240, 30, 15, '#e6a99c') + L(180, 120, 'Level 1: not ready', C.rose, 'middle') + L(180, 230, 'Raise doubt', C.muted, 'middle', 18) + L(180, 254, 'no action plan yet', C.muted, 'middle', 18) },
      { label: 'Level 2: unsure', c: C.goldD, detail: 'Focus on confidence. The best questions build confidence and address barriers.', svg: rect(300, 150, 240, 30, 0, '#e6c98a') + L(420, 120, 'Level 2: unsure', '#7a5f22', 'middle') + L(420, 230, 'Build confidence,', C.muted, 'middle', 18) + L(420, 254, 'address barriers', C.muted, 'middle', 18) },
      { label: 'Level 3: ready', c: C.deep, detail: 'Motivated, confident and ready. Help the client choose a goal and make a specific action plan.', svg: rect(540, 150, 240, 30, 15, '#a3b795') + L(660, 120, 'Level 3: ready', C.deep, 'middle') + L(660, 230, 'Choose a goal,', C.muted, 'middle', 18) + L(660, 254, 'make an action plan', C.muted, 'middle', 18) }
    ], { hint: 'In the resolving phase, match your approach to the client’s readiness.' }),

  'l15-b1': fig('From a broad goal to one small step', '0 0 820 380',
    sh('M100 60 L720 60 L520 300 L300 300 Z', '#eef2ed'),
    [
      { label: 'Broad goal', c: C.blueD, detail: 'Start broad, for example “eat more fruit”.', svg: box(410, 90, 400, 50, '#e3edf1', '“Eat more fruit”', C.blueD, 22) },
      { label: 'Narrow it down', c: C.goldD, detail: 'Narrow it to something specific, measurable and time-bound.', svg: box(410, 170, 320, 50, '#f5ecd6', 'Specific, measurable, timed', '#7a5f22', 20) },
      { label: 'Smallest worthwhile step', c: C.deep, detail: 'Many clients pick goals that are too ambitious. Help them find the smallest goal that is achievable and worthwhile. Each small success builds confidence.', svg: box(410, 250, 260, 54, '#a3b795', 'e.g. fruit at lunch, 5 days', '#fff', 18) + L(410, 350, 'Small success builds confidence', C.deep, 'middle') }
    ], { hint: 'Goal setting suits clients who are ready (Level 3, sometimes Level 2).' }),

  'l15-b3': fig('Estimating portions', '0 0 860 360',
    '',
    [
      { label: 'Half a cup: a small fist', c: C.rose, detail: 'Half a cup of fruit, vegetables, cooked cereal, pasta or rice is about a small fist.', svg: fist(140, 160) + L(140, 270, '½ cup', C.rose, 'middle', 26) + L(140, 300, 'a small fist', C.muted, 'middle', 18) },
      { label: '3 oz meat: a deck of cards', c: C.blueD, detail: 'Three ounces of cooked meat, poultry or fish is about a deck of cards.', svg: rect(370, 90, 100, 140, 12, '#ffffff') + rect(378, 98, 84, 124, 8, '#e3edf1') + T(420, 170, '♠', { s: 44, c: C.blueD, halo: false }) + L(420, 270, '3 oz meat', C.blueD, 'middle', 26) + L(420, 300, 'a deck of cards', C.muted, 'middle', 18) },
      { label: 'A potato: a computer mouse', c: C.goldD, detail: 'A potato is about the size of a computer mouse.', svg: sh('M640 90 C690 80 720 130 720 180 C720 230 690 250 660 250 C630 250 600 230 600 180 C600 130 610 96 640 90 Z', '#d9d2c6') + line('M660 92 L660 140', '#b5ac9c', 3) + line('M690 250 C720 270 740 290 760 320', '#b5ac9c', 3) + L(660, 290, 'a potato', C.goldD, 'middle', 26) + L(660, 318, 'a computer mouse', C.muted, 'middle', 18) }
    ], { hint: 'Everyday objects make recalls and food records more accurate.' }),

  'l16-b2': fig('The ABCs of behaviour', '0 0 840 340',
    arrow(290, 150, 330, 150, C.light, { w: 6 }) + arrow(530, 150, 570, 150, C.light, { w: 6 }),
    [
      { label: 'A: antecedent', c: C.goldD, detail: 'The cue that comes before. Cue management (stimulus control) changes the cue or reduces exposure: keep healthy foods in sight and tempting foods out of sight.', svg: circ(160, 150, 110, '#f5ecd6') + T(160, 140, 'A', { s: 50, c: '#a68a4c', halo: false }) + T(160, 180, 'cue before', { s: 18, c: C.muted, halo: false }) + L(160, 300, 'Fruit bowl in sight', C.goldD, 'middle', 18) },
      { label: 'B: behaviour', c: C.deep, detail: 'The behaviour itself. Strategies: eat more slowly, eat in one place, find a substitute activity like a walk.', svg: circ(430, 150, 110, '#e4ecdf') + T(430, 140, 'B', { s: 50, c: C.deep, halo: false }) + T(430, 180, 'the action', { s: 18, c: C.muted, halo: false }) + L(430, 300, 'Eat slowly, in one place', C.deep, 'middle', 18) },
      { label: 'C: consequence', c: C.rose, detail: 'What follows. Rewards, especially small ones right after the behaviour, help it happen again.', svg: circ(700, 150, 110, '#f4ddd6') + T(700, 140, 'C', { s: 50, c: C.rose, halo: false }) + T(700, 180, 'what follows', { s: 18, c: C.muted, halo: false }) + L(700, 300, 'A small reward', C.rose, 'middle', 18) }
    ], { hint: 'Strategies can target any link in the chain.' }),

  'l17-b1': fig('Four principles of ethics', '0 0 840 380',
    sh('M60 80 L420 20 L780 80 Z', '#e9e4da') + rect(60, 330, 720, 30, 8, '#e9e4da'),
    ['Autonomy', 'Nonmaleficence', 'Beneficence', 'Justice'].map((n, i) => ({ label: n, c: [C.blueD, C.rose, C.deep, C.goldD][i], detail: ['Respecting the client’s right to choose.', 'Do no harm.', 'Act for the client’s good.', 'Fairness.'][i],
      svg: rect(100 + i * 170, 90, 90, 240, 10, ['#cfdde4', '#efd0c9', '#d6e2d1', '#efe2c0'][i]) + T(145 + i * 170, 364, n, { s: i === 1 ? 17 : 20, c: [C.blueD, C.rose, C.deep, '#7a5f22'][i], halo: false }) + T(145 + i * 170, 210, ['choice', 'no harm', 'do good', 'fair'][i], { s: 18, c: C.ink, halo: false }) })),
    { hint: 'These guide ethical decisions. Know your scope of practice, and when to refer.' }),

  'l17-b2': fig('What clients have a right to know', '0 0 840 300',
    '',
    [
      { label: 'Confidentiality', c: C.blueD, detail: 'How confidentiality works.', svg: rect(70, 80, 200, 150, 24, '#e3edf1') + rect(140, 110, 60, 50, 10, '#6f91a2') + outline('M150 110 L150 92 C150 70 190 70 190 92 L190 110', '#6f91a2', 8) + L(170, 270, 'Confidentiality', C.blueD, 'middle') },
      { label: 'Procedures and goals', c: C.goldD, detail: 'The procedures and goals of counselling.', svg: rect(320, 80, 200, 150, 24, '#f5ecd6') + [0, 1, 2].map(i => rect(360, 104 + i * 36, 120, 14, 7, '#e6c98a')).join('') + L(420, 270, 'Procedures, goals', '#7a5f22', 'middle') },
      { label: 'Qualifications and scope', c: C.deep, detail: 'The counsellor’s qualifications and scope of practice. Sharing these up front builds trust and lets clients make an informed choice.', svg: rect(570, 80, 200, 150, 24, '#e4ecdf') + circ(670, 140, 34, '#a3b795') + sh('M650 168 L640 210 L670 196 L700 210 L690 168 Z', '#7d9378') + L(670, 270, 'Qualifications, scope', C.deep, 'middle') }
    ], { hint: 'Share these before counselling starts.' })
};
