

const buildPerson = ({name,cumpleaños}) =>{




    return {
        id: new Date().getTime(),
        name:name,
        cumpleaños:cumpleaños,
        edad: new Date().getFullYear()- new Date(cumpleaños).getFullYear(),
    }

}

const objt={
    name:'juan',
    cumpleaños:'1997-08-29'
}

const juan = buildPerson(objt);

console.log(juan);