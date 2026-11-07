global.window={};require('../../dist/courses/anatomy-physiology/course-data.js');const n=+process.argv[2];
window.AP_COURSE.lessons.find(l=>l.number===n).questions.forEach(q=>console.log(q.number+'. '+q.prompt.replace(/\n+/g,' ')+' | '+q.options.join(' / ')))
