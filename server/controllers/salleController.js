let Salles = require("../models/Salles");
exports.info = function (req, res, next) {
  Salles.find().exec(function (err, result) {
    if (err) {
      console.log(err);
    }
    res.status(201).json(result);
  });
};
