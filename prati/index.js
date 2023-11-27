const fs = require('fs');
fs.writeFileSync('readwrite.txt',"Hello i am creating a read write file using filesystem");
fs.appendFileSync('readwrite.txt',"\n Using appendFileSync for ading data wihtout deleting");
 const readData = fs.readFileSync('readwrite.txt');
 const bufferData = readData.toString();
 console.log(bufferData);
 fs.renameSync("readwrite.txt","read.txt");
// fs.unlinkSync("bio.txt");
fs.rmdirSync("../repl");