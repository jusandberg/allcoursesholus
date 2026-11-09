// One nephron with its blood supply.
const o=(k,inner)=>`<g class="bj-o" data-o="${k}">${inner}</g>`;
const T='fill:none;stroke-linecap:round;stroke-linejoin:round';
const svg=[
  o('vessels',`<path d="M0 120 C60 120 100 126 132 134" style="${T};stroke:#d9786a;stroke-width:10"></path><path d="M186 170 C240 200 300 190 360 180 C420 210 430 400 420 520 C440 540 470 520 470 480 C480 300 500 200 560 170" style="${T};stroke:#ecb3a6;stroke-width:5;stroke-dasharray:2 9"></path>`),
  o('glomerulus','<circle cx="150" cy="140" r="15" style="fill:#d9786a"></circle><circle cx="166" cy="128" r="13" style="fill:#d9786a"></circle><circle cx="168" cy="152" r="13" style="fill:#d9786a"></circle><circle cx="150" cy="158" r="12" style="fill:#d9786a"></circle>'),
  o('capsule','<path d="M190 104 C150 76 104 96 104 140 C104 186 150 204 190 176" style="fill:none;stroke:#e8d6c4;stroke-width:16;stroke-linecap:round"></path>'),
  o('pct',`<path d="M196 112 C226 96 250 140 280 120 C306 102 330 142 352 124 C362 116 368 124 370 140" style="${T};stroke:#e9c6b6;stroke-width:16"></path>`),
  o('loop',`<path d="M370 140 L380 500 C384 540 430 540 432 500 L440 150" style="${T};stroke:#f0d6c8;stroke-width:16"></path>`),
  o('dct',`<path d="M440 150 C462 120 486 160 510 134 C532 112 556 150 576 128 C590 114 600 110 612 112" style="${T};stroke:#e9c6b6;stroke-width:16"></path>`),
  o('duct',`<path d="M620 60 L630 590" style="${T};stroke:#e8d197;stroke-width:24"></path>`)
].join('');
module.exports={svg,home:'whole',cams:{whole:[-10,40,700,580],corpuscle:[60,60,260,180],pct:[150,60,260,180],loop:[300,100,220,470],dct:[400,60,280,220],duct:[480,40,240,560]},tok:2,dim:0.45,shines:{}};
