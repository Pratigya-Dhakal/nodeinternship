const fs = require('fs');

fs.writeFileSync('README.md',"Learning about file system in node js\n");
fs.appendFileSync('README.md', " If the file doesn't exist the writeFileSync create the file and stores the data \n if the file exist and we re write the data then it deletes the previous one and places the new one \n if we want to add data without overriding it  we can use appendFileSync as we are working for synchronous ADDING data using append function");
const readData = fs.readFileSync('README.md');
console.log(readData);
//RESULT
//<Buffer 4c 65 61 72 6e 69 6e 67 20 61 62 6f 75 74 20 66 69 6c 65 20 73 79 73 74 65 6d 20 69 6e 20 6e 6f 64 65 20 6a 73 0a 20 49 66 20 74 68 65 20 66 69 6c 65 ... 311 more bytes>


//converting buffer data type to string
const convert = readData.toString();
console.log(convert);
//After converting to string 
//RESULTS
/* Learning about file system in node js
If the file doesn't exist the writeFileSync create the file and stores the data
if the file exist and we re write the data then it deletes the previous one and places the new one
if we want to add data without overriding it  we can use appendFileSync as we are working for synchronous ADDING data using append function
*/ 

//node js consist of additional datatype called buffer which is not available in browser javascript.
//buffer is mainly used to store binary data
//while reading form a file or receiving packets over a network


// to rename fs.renameSync("oldpath","newpath") can be used