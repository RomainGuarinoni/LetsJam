const mongoose = require("mongoose");

const salleShema = mongoose.Schema({
  salle: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Salles", salleShema);
