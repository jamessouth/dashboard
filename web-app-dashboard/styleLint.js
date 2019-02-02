const fsProm = require('fs').promises;

const dir = './src/components/';

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
