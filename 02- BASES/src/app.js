const { emailTemplate } = require("./js-foundation/01-template");
require("./js-foundation/02-destructuring");

require("./js-foundation/05-factory");

console.log(emailTemplate);

const { buildMakePerson } = require("./js-foundation/05-factory");
const { getAge, getUUID } = require("./plugins");

const makePerson = buildMakePerson({ getUUID, getAge });

const obj = {
  name: "juan",
  cumpleaños: "1997-08-29",
};

const juan = makePerson(obj);

console.log(juan);
