// One sarcomere of a skeletal muscle fibre, with the nerve ending, T tubule and sarcoplasmic reticulum.
const o=(k,inner)=>`<g class="bj-o" data-o="${k}">${inner}</g>`;
const ROWS=[150,200,250,300];
const svg=[
  o('fibre','<rect x="40" y="84" width="860" height="300" rx="20" style="fill:#f3ece6"></rect>'),
  o('nmj','<path d="M60 -10 C80 10 100 20 118 30" style="fill:none;stroke:#e6bfb6;stroke-width:10;stroke-linecap:round"></path><ellipse cx="128" cy="46" rx="30" ry="18" style="fill:#e6bfb6"></ellipse>'),
  o('sarcolemma','<rect x="40" y="70" width="860" height="16" rx="8" style="fill:#e3c9b5"></rect>'),
  o('ttubule','<rect x="140" y="84" width="20" height="300" rx="8" style="fill:#e8d6c8"></rect>'),
  o('sr','<rect x="170" y="96" width="700" height="16" rx="8" style="fill:#d6e0e6"></rect><rect x="170" y="356" width="700" height="16" rx="8" style="fill:#d6e0e6"></rect>'),
  o('actin',ROWS.map(y=>`<line x1="200" y1="${y}" x2="455" y2="${y}" style="stroke:#e6bfb6;stroke-width:7;stroke-linecap:round"></line><line x1="545" y1="${y}" x2="800" y2="${y}" style="stroke:#e6bfb6;stroke-width:7;stroke-linecap:round"></line>`).join('')),
  o('troponin',ROWS.map(y=>[250,330,410,590,670,750].map(x=>`<circle cx="${x}" cy="${y}" r="5" style="fill:#d3a84b"></circle>`).join('')).join('')),
  o('myosin',[175,225,275].map(y=>`<rect x="330" y="${y-8}" width="340" height="16" rx="8" style="fill:#c9a6c2"></rect>`+[350,380,410,440,560,590,620,650].map(x=>`<ellipse cx="${x}" cy="${y-12}" rx="6" ry="4" style="fill:#b48aaa"></ellipse><ellipse cx="${x}" cy="${y+12}" rx="6" ry="4" style="fill:#b48aaa"></ellipse>`).join('')).join('')),
  o('zline','<rect x="194" y="120" width="12" height="216" rx="5" style="fill:#9a7a6e"></rect><rect x="794" y="120" width="12" height="216" rx="5" style="fill:#9a7a6e"></rect>')
].join('');
module.exports={svg,home:'whole',cams:{whole:[20,-20,900,420],nerve:[20,-20,380,300],middle:[260,100,480,240],zoom:[300,120,400,200]},tok:2.2,dim:0.5,shines:{}};
