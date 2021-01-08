const path=require('path');
const fileName=path.join(__filename);
const baseName=path.basename(fileName);
const ext=path.extname(baseName);
const dir=path.dirname(fileName);
console.log(dir);



