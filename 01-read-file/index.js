const fs = require('fs');
const path= require('path');

/* 1 - variant
const filePath = path.join(__dirname, 'text.txt');
const readableStream=fs.createReadStream(filePath,'utf-8');

readableStream.on('data', chunk=>{
    console.log(chunk);
});

readableStream.on('error', error => console.log('Error', error.message));
*/

// 2 - variant
fs.readFile(
    path.join(__dirname, 'text.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);
