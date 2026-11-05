(function(){
  'use strict';
  const build=window.NHF_BUILD;
  const titleMap=['Natural Health Fundamentals','The Human Body','Nutrition Building Blocks','A Healthy Diet','Supplementation and Functional Foods','Phytotherapy, Homeopathy and Aromatherapy','A Healthy Lifestyle','Physical, Mental, Emotional and Spiritual Health','Traditional Holistic Healing Practices'];
  build.lessons.sort((a,b)=>a.number-b.number).forEach((lesson,index)=>{
    lesson.title=lesson.title||titleMap[index];
    lesson.id=`lesson-${lesson.number}`;
    lesson.sources=build.sources[lesson.number];
    lesson.quiz=build.tests[lesson.number]||[];
    const moments=lesson.modules.flatMap(module=>module.moments);
    lesson.flashcards=moments.map(moment=>({prompt:moment.title,answer:moment.highYield,note:moment.keyPoints[0]}));
    lesson.practice=moments.map((moment,index)=>({tag:index%3===0?'Explain':index%3===1?'Connect':'Apply',prompt:`Without notes, explain ${moment.title.toLowerCase()}.`,answer:[moment.highYield,...moment.keyPoints].join(' '),rationale:moment.inPractice}));
  });
  window.NHF_COURSE={title:'Natural Health Fundamentals',subtitle:'A source-faithful, evidence-aware course',description:'Nine interactive lessons built from the complete supplied PDF collection.',sourceCount:Object.values(build.sources).flat().length,lessons:build.lessons};
})();
