var express = require("express");
const { removeAllListeners } = require("../app");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("message recu");
});
/*router.get("/:salle", function (req, res) {
  console.log("params : " + req.params.salle);
  console.log("passé");
  if (req.params.salle == "lavoisier") {
    console.log("ok");
    let info = {
      available: false,
      user: {
        nom: "Salopee",
        prenom: "Romain",
        time: "15:02",
      },
    };
    res.status(200).json(info);
  } else if (req.params.salle == "descartes") {
    let info = {
      available: true,
    };
    res.status(200).json(info);
  }

  console.log("data : " + res);
});*/
router.get("info/musiciens", function (req, res, next) {
  let musiciens = [
    {
      prenom: "Romain",
      nom: "Guarinoni",
      promo: "L3",
      instruments: ["Batterie", "Guitare", "Piano"],
    },
    {
      prenom: "Marie",
      nom: "Nothisen",
      promo: "L3",
      instruments: ["Piano"],
    },
    {
      prenom: "Alexandre",
      nom: "Lam",
    },
  ];
  res.status(200).json(musiciens);
  console.log("pass");
});
module.exports = router;
