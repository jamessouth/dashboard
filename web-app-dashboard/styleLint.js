const fsProm = require('fs').promises;

const dir = './src/components/';

// readdir(dir, (err, f) => {
//   readFile(dir + f[0], 'utf8', (err, d) => {
//     let mod = d.split(/<\/?script>/)[1];
//     writeFile('./kk.mjs', mod, err => console.log(err));
//   });
// });
// import scr from './kk';
//
// console.log(Object.keys(scr));

fsProm.mkdir('./temp').catch(err => {
  if(err.code === 'EEXIST'){
   console.log('directory already exists');
   // return;
 } else {
   console.log(err);
   throw err;
 }
})
.then(() => fsProm.readdir(dir))
.then(f => fsProm.readFile(dir + f[0], 'utf8'))
.then(k => k.split(/<\/?script>/)[1].trim())
.then(w => fsProm.writeFile('./temp/kk.mjs', w))
.then(() => import('./temp/kk.mjs'))


.then(x => console.log(Object.keys(x['default'])));










// klklk
