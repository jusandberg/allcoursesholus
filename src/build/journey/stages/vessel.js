// A small blood vessel with a cut in its wall, for clotting.
const o=(k,inner)=>`<g class="bj-o" data-o="${k}">${inner}</g>`;
const svg=[
  o('tissue','<path d="M330 0 C380 -10 520 -10 570 0 L560 46 C520 30 380 30 340 46 Z" style="fill:#e7c3b4"></path>'),
  o('plasma','<rect x="0" y="80" width="900" height="240" style="fill:#f9e6df"></rect>'),
  o('wall','<path d="M0 44 L420 44 L432 82 L0 82 Z" style="fill:#e3a99a"></path><path d="M480 44 L900 44 L900 82 L470 82 Z" style="fill:#e3a99a"></path><rect x="0" y="318" width="900" height="38" style="fill:#e3a99a"></rect>'),
  o('rbcs',[[90,160],[200,250],[300,150],[620,240],[720,150],[820,260],[150,280],[540,170]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="24" ry="20" style="fill:#d9786a"></ellipse><ellipse cx="${x}" cy="${y}" rx="10" ry="8" style="fill:#e79a8e"></ellipse>`).join('')),
  o('platelets',[[430,92],[452,100],[474,92],[440,112],[464,116],[420,124],[486,118]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="6" style="fill:#d8b86a"></ellipse>`).join('')),
  o('fibrin','<path d="M400 70 L520 140 M410 140 L510 64 M380 100 L540 100 M420 60 L470 150 M460 56 L440 150" style="fill:none;stroke:#e8d197;stroke-width:4;stroke-linecap:round"></path>'),
  o('trapped','<ellipse cx="440" cy="132" rx="16" ry="13" style="fill:#d9786a"></ellipse><ellipse cx="488" cy="96" rx="16" ry="13" style="fill:#d9786a"></ellipse>')
].join('');
module.exports={svg,home:'whole',cams:{whole:[0,-20,900,400],cut:[280,-20,340,240]},tok:2.1,dim:0.45,shines:{}};
