const getAgePlugin = require('get-age');


const getAge = (cumpleaños)=>{

    if(!cumpleaños) return new Error ('Cumpleaños es requerido');
    return getAgePlugin(cumpleaños);
}

module.exports={
    getAge
}