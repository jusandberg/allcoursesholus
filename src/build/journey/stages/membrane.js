// A close-up of the plasma membrane: outside above, inside below.
const o=(k,inner)=>`<g class="bj-o" data-o="${k}">${inner}</g>`;
const heads=y=>Array.from({length:37},(_,k)=>`<circle cx="${12+k*22}" cy="${y}" r="9.5" style="fill:#e8d3a0"></circle>`).join('');
const svg=[
  o('outside','<rect x="0" y="0" width="800" height="186" style="fill:#f1f5f0"></rect>'),
  o('inside','<rect x="0" y="304" width="800" height="196" style="fill:#fbf4ea"></rect>'),
  o('bilayer','<rect x="0" y="206" width="800" height="78" style="fill:#f4e8c8"></rect>'+heads(198)+heads(292)),
  o('channel','<rect x="176" y="182" width="20" height="128" rx="9" style="fill:#a3bcc8"></rect><rect x="214" y="182" width="20" height="128" rx="9" style="fill:#a3bcc8"></rect>'),
  o('pump','<rect x="404" y="176" width="72" height="140" rx="26" style="fill:#7d9fb0"></rect><rect x="432" y="190" width="16" height="112" rx="8" style="fill:#c9d8e0"></rect>'),
  o('solutes',[[60,60],[90,90],[46,120],[110,40],[130,130],[80,150],[150,80],[34,30],[70,110]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" style="fill:#d3a84b"></circle>`).join('')+[[90,380],[640,420]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" style="fill:#d3a84b"></circle>`).join('')),
  o('water',[[600,60],[640,100],[700,70],[580,130],[680,140],[740,110],[620,370],[700,420]].map(([x,y])=>`<path d="M${x} ${y-9} C${x+7} ${y} ${x+7} ${y+8} ${x} ${y+8} C${x-7} ${y+8} ${x-7} ${y} ${x} ${y-9} Z" style="fill:#9fbccb"></path>`).join('')),
  o('cargo',[[560,400],[520,440],[600,450],[480,410],[540,470],[420,90]].map(([x,y])=>`<rect x="${x-9}" y="${y-9}" width="18" height="18" rx="5" style="fill:#c86d56"></rect>`).join(''))
].join('');
module.exports={svg,home:'whole',cams:{whole:[0,0,800,500],left:[0,0,420,500],pump:[250,40,420,420],right:[400,0,400,500]},tok:2,dim:0.5,shines:{}};
