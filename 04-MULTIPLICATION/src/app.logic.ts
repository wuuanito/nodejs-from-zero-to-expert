import { yarg } from "./config/plugins/yargs.plugin";

const fs = require("fs");
const numTab = yarg.b;
const limite = yarg.l;

const headerMessage = `============================== \n       Tabla del ${numTab}      \n============================== \n`;
let outputMessage = "";

for (let i = 0; i <= limite; i++) {
  outputMessage += `${numTab} * ${i} = ${numTab * i} \n`;
}

outputMessage = headerMessage + outputMessage;

if (yarg.s) {
  console.log(outputMessage);
}
const directorio = `outputs`;
fs.mkdirSync(directorio, { recursive: true });
fs.writeFileSync(`${directorio}/tabla-${numTab}.txt`, outputMessage);

console.log("Archivo Creado!");
