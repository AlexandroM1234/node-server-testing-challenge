const db = require("./db-config");

module.exports = {
  getPeople,
  getById,
  addPerson,
  removePerson,
};

function getPeople() {
  return db("people");
}
function getById(id) {
  return db("people").where(id);
}

function addPerson(newPerson) {
  return db("people").insert(newPerson);
}

function removePerson(id) {
  return db("people").where(id).delete();
}
