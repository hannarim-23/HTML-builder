/*
const fs = require('fs');
const Path = require('path');

const filePath = Path.join(__dirname, '/secret-folder');

async function printFileNames(){
    const files = await fs.promises.readdir(filePath, {withFileTypes:true});
    for(let file of files){
        if(file.isFile()){
            const name = file.name.split('.')[0];
            const extension = Path.extname(file.name).slice(1);
            const size = (await fs.promises.stat(Path.join(filePath, file.name))).size;
            console.log(`${name} - ${extension} - ${size/1000}kb`);
        }
    }
}
printFileNames();
*/


const fs = require('fs');
const path = require('path');

//fs.readdir используется для асинхронного чтения содержимого данного каталога.
//fs.readdir(путь, параметры, обратный вызов)
fs.readdir(path.join(__dirname, 'secret-folder'), function(err, items) {
  for (let i = 0; i < items.length; i++) {
    //fs.stat() для возврата информации о данном файле или каталоге
    //fs.stat (путь, параметры, обратный вызов)
    fs.stat(path.join(__dirname, 'secret-folder', items[i]), function(err, stats) {
      //stats.isFile() используется для проверки, описывает ли объект fs.Stats файл или нет.
      if (stats.isFile()) {
        console.log(`${path.parse(items[i]).name} - ${path.parse(items[i]).ext.slice(1)} - ${stats.size/1000}kb`);
      }
    });
  }
});
