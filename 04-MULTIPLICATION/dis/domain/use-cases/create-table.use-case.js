"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() { }
    execute({ base, limite = 10 }) {
        let outputMessage = "";
        for (let i = 0; i <= limite; i++) {
            outputMessage += `${base} * ${i} = ${base * i} \n`;
        }
        return outputMessage;
    }
}
exports.CreateTable = CreateTable;
