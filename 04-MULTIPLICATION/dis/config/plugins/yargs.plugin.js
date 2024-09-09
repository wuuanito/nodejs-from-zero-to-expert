"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
exports.yarg = (0, yargs_1.default)(process.argv)
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
    .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
})
    .option('s', {
    alias: 'show',
    type: 'boolean',
    demandOption: false,
    describe: 'Show Multiplication table '
})
    .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File Name'
})
    .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File Destination'
})
    .check((argv, options) => {
    return true;
})
    .parseSync();
