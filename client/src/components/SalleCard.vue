<template>
  <div class="all" v-if="api">
    <div
      class="button"
      @click="update"
      :class="{ green: info.available, red: !info.available }"
    >
      <i class="far fa-check-circle"></i>
      <p v-if="info.available">Réserver</p>
      <p
        v-else-if="!info.available && info.nom == nom && info.prenom == prenom"
      >
        Libérer
      </p>
      <p v-else>
        Attendre...
      </p>
    </div>
    <div
      id="card"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.400), rgba(0, 0, 0, 0.300)),url(${
          imgTab[index - 1]
        })`,
      }"
    >
      <div class="header">
        <div class="salleInfo">
          <p class="salleNumber">Salle {{ index }}</p>
          <p class="name">{{ name }}</p>
        </div>
        <div
          class="cercle"
          :class="{ green: this.info.available, red: !this.info.available }"
        ></div>
      </div>
      <div class="status">
        <div class="statusContent">
          <div class="text">
            <p class="greenFont" v-if="info.available">Libre</p>
            <p
              v-else-if="
                !info.available && info.nom == nom && info.prenom == prenom
              "
              class="redFont"
            >
              Libérer la salle
            </p>
            <p class="redFont" v-else>occupée par {{ fullName }} {{ time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/Descartes.jpg";
import img2 from "../assets/Lavoisier.jpg";
import axios from "axios";
import io from "socket.io-client";
export default {
  props: ["index", "name", "status", "img"],
  data() {
    return {
      nom: localStorage.getItem("nom"),
      prenom: localStorage.getItem("prenom"),
      imgTab: [img1, img2],
      time: "",
      api: false,
      info: null,
      socket: io.connect("http://localhost:3000"),
    };
  },
  computed: {
    fullName() {
      let name = this.info.prenom + " " + this.info.nom;
      return name;
    },
  },
  methods: {
    update() {
      //this.socket.emit("TEST", JSON.stringify(this.info));
      if (this.info.available == true) {
        let update = {
          salle: this.name,
          available: false,
          nom: this.nom,
          prenom: this.prenom,
          date: new Date(),
        };
        this.socket.emit("UPDATE", JSON.stringify(update));
        this.info = update;
      } else if (this.info.nom == this.nom && this.info.prenom == this.prenom) {
        let update = {
          salle: this.name,
          available: true,
          nom: "",
          prenom: "",
          date: new Date(),
        };
        this.socket.emit("UPDATE", JSON.stringify(update));
        this.info = update;
      }
    },
    timeCalc() {
      let time = "depuis environ ";
      let date_actuelle = new Date();
      let date_salle = new Date(this.info.date);
      if (date_actuelle.getHours() - date_salle.getHours() == 0) {
        if (date_actuelle.getMinutes() - date_salle.getMinutes() < 5) {
          time += "5 minutes";
        } else if (date_actuelle.getMinutes() - date_salle.getMinutes() < 10) {
          time += "10 minutes";
        } else if (date_actuelle.getMinutes() - date_salle.getMinutes() < 15) {
          time += "15 minutes";
        } else if (date_actuelle.getMinutes() - date_salle.getMinutes() < 30) {
          time += "30 minutes";
        } else {
          time += "1 heure";
        }
      } else if (
        date_actuelle.getHours() - date_salle.getHours() == 1 &&
        date_actuelle.getMinutes() - date_salle.getMinutes() < 0
      ) {
        if (date_actuelle.getMinutes() + date_salle.getMinutes() - 60 < 5) {
          time += "5 minutes";
        } else if (
          date_actuelle.getMinutes() + date_salle.getMinutes() - 60 <
          10
        ) {
          time += "10 minutes";
        } else if (
          date_actuelle.getMinutes() + date_salle.getMinutes() - 60 <
          15
        ) {
          time += "15 minutes";
        } else if (
          date_actuelle.getMinutes() + date_salle.getMinutes() - 60 <
          30
        ) {
          time += "30 minutes";
        } else {
          time += "1 heure";
        }
      } else {
        if (date_actuelle.getMinutes() - date_salle.getMinutes() < 30) {
          time += "1 heure et 30min";
        } else {
          time += "2 heures";
        }
      }

      this.time = time;
    },
  },
  mounted: function() {
    axios
      .get("http://localhost:3000/info")
      .then((res) => {
        if (this.name == "Lavoisier") {
          this.info = res.data[0];
        } else {
          this.info = res.data[1];
        }
      })
      .catch((err) => console.log(err))
      //fonctions qui libere la salle si cette derniere est prise depuis plus de 2 heures
      .then(() => {
        let date_salle = new Date(this.info.date);
        let date_act = new Date();
        if (
          date_salle.getDay() != date_act.getDay() ||
          date_act.getHours() - date_salle.getHours() >= 2
        ) {
          let update = {
            salle: this.name,
            available: true,
            nom: "",
            prenom: "",
            date: new Date(),
          };
          this.socket.emit("UPDATE", JSON.stringify(update));
        }
        //verifie toutes les 5 minutes pour libérer la salle si besoin
        setInterval(() => {
          let date_salle = new Date(this.info.date);
          let date_act = new Date();
          if (
            date_salle.getDay() != date_act.getDay() ||
            date_act.getHours() - date_salle.getHours() >= 2
          ) {
            let update = {
              salle: this.name,
              available: true,
              nom: "",
              prenom: "",
              date: new Date(),
            };
            this.socket.emit("UPDATE", JSON.stringify(update));
          }
        }, 300000);
      })
      .finally(() => {
        this.timeCalc();
        this.api = true;
        setInterval(() => {
          this.timeCalc();
          console.log("calcul time");
        }, 300000);
      });

    this.socket.on("NEW", (data) => {
      let salle = JSON.parse(data);
      if (this.name == "Lavoisier") {
        this.info = salle[0];
      } else {
        this.info = salle[1];
      }
    });
  },
};
</script>

<style scoped>
.all {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  height: 360px;
  width: 290px;
  margin: 10px;
}
#card {
  margin: 10px;
  height: 360px;
  color: white;
  width: 290px;
  display: flex;
  position: absolute;
  z-index: 1;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  transition: all ease 200ms;
  background-size: 200%;
  background-position: center;
  background-repeat: no-repeat;
}
.all:hover > #card {
  filter: grayscale(100%);
}
.all:hover > .button {
  display: flex;
}
i {
  transition: all ease 200ms;
}
.header {
  display: flex;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.cercle {
  width: 28px;
  height: 28px;
  border-radius: 100%;
  border: none;
}
.status {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.statusContent {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 100%;
}

.green {
  background: var(--green);
}
.red {
  background: var(--orange);
}
.greenFont {
  color: var(--green);
}
.redFont {
  color: var(--orange);
}
.name {
  font-weight: bold;
  font-size: 25px;
}
.text {
  font-size: 17px;
  text-align: center;
}
.button {
  width: 180px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  display: flow;
  border-radius: 7px;
  border: none;
  z-index: 2;
  color: white;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  transition: all ease 200ms;
}
.button:hover {
  transform: scale(1.1);
}
.button i {
  position: absolute;
  top: 25;
  left: 20px;
}
</style>
