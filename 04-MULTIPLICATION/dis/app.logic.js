"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_plugin_1 = require("./config/plugins/yargs.plugin");
const fs = require("fs");
const numTab = yargs_plugin_1.yarg.b;
const limite = yargs_plugin_1.yarg.l;
const headerMessage = `============================== \n       Tabla del ${numTab}      \n============================== \n`;
let outputMessage = "";
for (let i = 0; i <= limite; i++) {
    outputMessage += `${numTab} * ${i} = ${numTab * i} \n`;
}
outputMessage = headerMessage + outputMessage;
if (yargs_plugin_1.yarg.s) {
    console.log(outputMessage);
}
const directorio = `outputs`;
fs.mkdirSync(directorio, { recursive: true });
fs.writeFileSync(`${directorio}/tabla-${numTab}.txt`, outputMessage);
console.log("Archivo Creado!");
