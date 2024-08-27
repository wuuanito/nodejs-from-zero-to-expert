const fs = require("fs");

const content = fs.readFileSync('README.md','utf-8');

const palabras = content.split(' ');

console.log(palabras.length);

let reactCount = 0;

palabras.forEach((palabrasSueltas)=>{
    if(palabrasSueltas.toLowerCase().includes('react')){
        reactCount++;
    }
})
console.log(reactCount);