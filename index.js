console.log('This is test git hub repo');

const moment = require('moment'); // require

const a = moment('2022-01-01');
const b = a.add(3, 'year');
a.format();

console.log(b.format());
