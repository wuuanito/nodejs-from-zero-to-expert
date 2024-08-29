const fs = require("fs");
const numTab = 5;

const headerMessage = `============================== \n       Tabla del ${numTab}      \n============================== \n`;
let outputMessage = "";

for (let i = 0; i <= 10; i++) {
  outputMessage += `${numTab} * ${i} = ${numTab * i} \n`;
}
outputMessage = headerMessage + outputMessage;
const directorio = `outputs`;
fs.mkdirSync(directorio, { recursive: true });
fs.writeFileSync(`${directorio}/tabla-${numTab}.txt`, outputMessage);

console.log("Archivo Creado!");
