const {getAge,getUUID} = require('../plugins')



const buildPerson = ({name,cumpleaños}) =>{




    return {
        id: getUUID(),
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