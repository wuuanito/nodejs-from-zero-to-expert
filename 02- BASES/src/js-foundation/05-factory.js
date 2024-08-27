const {v4:uuidv4} =require ('uuid');
const getAge = require('get-age');



const buildPerson = ({name,cumpleaños}) =>{




    return {
        id: uuidv4(),
        name:name,
        cumpleaños:cumpleaños,
        edad: getAge(cumpleaños),
    }

}

const objt={
    name:'juan',
    cumpleaños:'1997-08-29'
}

const juan = buildPerson(objt);

console.log(juan);