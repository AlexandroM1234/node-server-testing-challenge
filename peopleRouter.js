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

module.exports = router;
