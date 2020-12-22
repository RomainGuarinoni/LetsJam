const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http").Server(app);
const cors = require("cors");
const PORT = 3000;
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
  console.log("connecte");
  socket.on("SEND_MESSAGE", function (data) {
    io.emit("MESSAGE", data);
  });
  socket.on("UPDATE", (data) => {
    let update = JSON.parse(data);
    console.log("update");
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
          console.log(err);
        }
      }
    );
    let newSalle;
    Salle.find().exec(function (err, res) {
      if (err) {
        console.log(err);
      }
      newSalle = JSON.stringify(res);
      console.log(newSalle);
      socket.broadcast.emit("NEW", newSalle);
    });
  });
});

http.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
