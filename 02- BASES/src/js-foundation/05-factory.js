const { getAge, getUUID } = require("../plugins");

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, cumpleaños }) => {
    return {
      id: getUUID(),
      name: name,
      cumpleaños: cumpleaños,
      edad: getAge(cumpleaños),
    };
  };
};

module.exports = {
  buildMakePerson,
};
