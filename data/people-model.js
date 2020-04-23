const db = require("./db-config");

module.exports = {
  getPeople,
};

function getPeople() {
  return db("people");
}
