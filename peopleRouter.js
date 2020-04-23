const router = require("express").Router();

const People = require("./data/people-model");

router.get("/", (req, res) => {
  People.getPeople()
    .then((people) => {
      res.status(200).json(people);
    })
    .catch((err) => {
      console.log("you messed up getting people", err);
      res.status(500).json({ errorMessage: "error getting people" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  People.getById({ id })
    .then((person) => {
      res.status(200).json(person);
    })
    .catch((err) => {
      console.log("you messed up getting by id", err);
      res.status(500).json({ errorMessage: "error getting id" });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  People.removePerson({ id })
    .then((person) => {
      res.status(200).json({ message: " person has been removed" });
    })
    .catch((err) => {
      console.log("you messed up removing a person", err);
      res.status(500).json({ errorMessage: "error removing a person" });
    });
});

router.post("/", (req, res) => {
  const newPerson = req.body;
  People.addPerson(newPerson)
    .then((person) => {
      res.status(201).json(req.body);
    })
    .catch((err) => {
      console.log("you messed up adding a person", err);
      res.status(500).json({ errorMessage: "error adding a person" });
    });
});

module.exports = router;
