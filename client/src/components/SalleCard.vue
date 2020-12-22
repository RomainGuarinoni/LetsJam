<template>
  <div class="all">
    <div
      class="button"
      @click="test"
      :class="{ green: info.available, red: !info.available }"
    >
      <i class="far fa-check-circle"></i>
      <p v-if="info.available">Réserver</p>
      <p
        v-else-if="
          !info.available && info.user.nom == nom && info.user.prenom == prenom
        "
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
        <div id="bouton">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      <div class="status">
        <div class="statusContent">
          <div
            class="cercle"
            :class="{ green: this.info.available, red: !this.info.available }"
          ></div>
          <div class="text">
            <p class="greenFont" v-if="info.available">Libre</p>
            <p class="redFont" v-else>
              occupée par {{ fullName }} depuis 30 min
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/Descartes.jpg";
import img2 from "../assets/Lavoisier.jpg";
export default {
  props: ["index", "name", "status", "img"],
  data() {
    return {
      nom: localStorage.getItem("nom"),
      prenom: localStorage.getItem("prenom"),
      imgTab: [img1, img2],
    };
  },
  computed: {
    fullName() {
      let name = this.info.user.prenom + " " + this.info.user.nom;
      return name;
    },
    info() {
      if (this.name == "Lavoisier") {
        let info = this.$store.state.info[0];
        return info;
      } else {
        let info = this.$store.state.info[1];
        return info;
      }
    },
  },
  methods: {
    test() {
      // recupérer une date !
      let date = new Date();
      date.setTime = Date.now();

      console.log(date.getHours());
      console.log(date.getMinutes());
    },
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
#bouton {
  width: 28px;
  height: 28px;
  color: black;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 200ms;
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
  margin: 10px;
}
.cercle {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: none;
  margin-right: 5px;
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
  font-size: 15px;
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
