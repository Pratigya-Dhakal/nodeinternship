const { isUtf8 } = require('buffer');
const fs = require('fs');
fs.writeFile("writeRead.txt","hii this ia a asynchronously file system",()=>{});
// in synchronous file system we don't need a call back function but incase of a asynchronous function we must also include a call abck function in teh writeFile function
fs.writeFile("writeRead.txt","hii this ia a asynchronously file system",()=>{});
fs.appendFile('', " If the file doesn't exist the writeFileSync create the file and stores the data \n if the file exist and we re write the data then it deletes the previous one and places the new one \n if we want to add data without overriding it  we can use appendFileSync as we are working for synchronous ADDING data using append function", ()=>{});
const readData = fs.readFile('writeRead.txt', "Utf-8", (err,data)=>{console.log(data)});
console.log(readData);