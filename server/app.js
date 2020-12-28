const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http").Server(app);
const cors = require("cors");

const salleRouter = require("./routes/Salle");
const Salle = require("./models/Salles");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ikoqc.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});
app.use(express.json());
app.use(bodyParser.json());

app.use("/info", salleRouter);

//route de base pour recup donnée base de donnée
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", function (socket) {
  socket.on("UPDATE", (data) => {
    let update = JSON.parse(data);
    //recherche la salle dans la base de donnée et on la modifie avec les nouvelles infos
    Salle.updateOne(
      { salle: update.salle },
      {
        available: update.available,
        nom: update.nom,
        prenom: update.prenom,
        date: update.date,
      },
      function (err, res) {
        if (err) {
          console.log("err : " + err);
        }
      }
    );
    let newSalle;
    //on recherche toutes les infos des deux salles et les envoient &a tous le monde
    Salle.find().exec(function (err, res) {
      if (err) {
        console.log("err : " + err);
      }
      newSalle = JSON.stringify(res);
      socket.broadcast.emit("NEW", newSalle);
    });
  });
});
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}
http.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
