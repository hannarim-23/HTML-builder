const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');

//Создадим файл 
const fileName = path.join(__dirname, 'text.txt');


const writeableStream = fs.createWriteStream(fileName); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//приветственное сообщение
console.log('Hi, your text will be write in ' + 'text.txt' + '\nWhen you finish write "exit" or click "Ctrl+C" ');
console.log('-------------------------------');

//проверка на exit
rl.on('line', function (line) {
  if (line.toLowerCase().trim() === 'exit'){
    rl.close();
  }
  else {
    writeableStream.write(`${line}\n`);
    //rl.prompt();
  }
});
//rl.prompt();

rl.on('close', () => {
  rl.close();
  console.log('\r-------------------------------');
  console.log('Good bye!');
  process.exit();
});
