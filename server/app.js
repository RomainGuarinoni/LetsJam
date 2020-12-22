const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http").Server(app);
const io = require("socket.io");
const cors = require("cors");
const PORT = 3000;
const salleRouter = require("./routes/Salle");

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ikoqc.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.json());
app.use(bodyParser.json());

app.use("/info", salleRouter);

//route de base pour recup donnée base de donnée
socket = io(http);

http.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
