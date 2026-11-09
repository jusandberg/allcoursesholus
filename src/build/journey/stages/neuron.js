// A neuron and the synapse it makes with the next cell.
const o=(k,inner)=>`<g class="bj-o" data-o="${k}">${inner}</g>`;
const svg=[
  o('dendrites','<path d="M110 186 L60 140 L28 150 M60 140 L50 104 M104 214 L54 238 L30 274 M54 238 L18 228 M118 170 L96 112 L104 78 M96 112 L64 92 M124 232 L104 292 L74 312 M104 292 L120 328" style="fill:none;stroke:#e6bfb6;stroke-width:9;stroke-linecap:round;stroke-linejoin:round"></path>'),
  o('soma','<circle cx="150" cy="200" r="50" style="fill:#efd2cb"></circle><circle cx="146" cy="196" r="17" style="fill:#d9bfcb"></circle><circle cx="128" cy="222" r="4" style="fill:#c99486"></circle><circle cx="172" cy="214" r="4" style="fill:#c99486"></circle><circle cx="162" cy="176" r="4" style="fill:#c99486"></circle>'),
  o('pump','<rect x="176" y="148" width="16" height="22" rx="5" transform="rotate(35 184 159)" style="fill:#6f91a2"></rect>'),
  o('hillock','<path d="M196 184 C214 190 228 194 240 195 L240 205 C228 206 214 210 196 216 Z" style="fill:#ecc6bd"></path>'),
  o('axon','<line x1="236" y1="200" x2="712" y2="200" style="stroke:#ead0c9;stroke-width:12;stroke-linecap:round"></line>'),
  o('myelin',[262,350,438,526,614].map(x=>`<rect x="${x}" y="185" width="76" height="30" rx="14" style="fill:#f2e4c2"></rect>`).join('')),
  o('nodes',[344,432,520,608].map(x=>`<circle cx="${x}" cy="200" r="5" style="fill:#b07aa0"></circle>`).join('')),
  o('terminal','<path d="M708 200 L740 150 M708 200 L752 200 M708 200 L740 250" style="fill:none;stroke:#ead0c9;stroke-width:9;stroke-linecap:round"></path><circle cx="752" cy="146" r="20" style="fill:#e6bfb6"></circle><circle cx="766" cy="200" r="20" style="fill:#e6bfb6"></circle><circle cx="752" cy="254" r="20" style="fill:#e6bfb6"></circle>'),
  o('vesicles',[[756,140],[748,152],[770,194],[762,206],[756,248],[748,260]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" style="fill:#d3a84b"></circle>`).join('')),
  o('post','<path d="M806 90 C840 84 900 84 920 90 L920 310 C900 316 840 316 806 310 C800 240 800 160 806 90 Z" style="fill:#d6e0e6"></path>'),
  o('receptors',[150,200,254].map(y=>`<path d="M802 ${y-10} q-8 10 0 20" style="fill:none;stroke:#71836d;stroke-width:6;stroke-linecap:round"></path>`).join(''))
].join('');
module.exports={svg,home:'whole',cams:{whole:[0,40,930,330],soma:[0,60,330,280],axon:[220,90,520,220],synapse:[660,70,270,260]},tok:1.6,dim:0.5,shines:{soma:[136,172,12,6]}};
