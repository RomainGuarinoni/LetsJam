<template>
  <div id="box">
    <div class="dialog" v-show="dialog">
      <div class="dialog-head"><h2>Voulez-vous changez de compte ?</h2></div>
      <div class="dialog-txt">
        <p>
          Changez de compte va vous empêcher de libérer les salles que vous avez
          prises et, par conséquent, empécher le bon fonctionnement de cette
          platforme
        </p>
      </div>
      <div class="dialog-button">
        <p @click="changeProfil">Yes</p>
        <p @click="dialog = false">No</p>
      </div>
    </div>
    <div class="container">
      <div class="titre">
        <p><span class="underline">CHOISISSEZ</span> VOTRE SALLE</p>
      </div>
      <div class="salleCard">
        <SalleCard
          index="1"
          name="Descartes"
          status="libre"
          img="'../assets/Descartes.jpg'"
        />
        <SalleCard
          index="2"
          name="Lavoisier"
          status="Prise"
          img="'../assets/Lavoisier.jpg'"
        />
      </div>
    </div>
    <div class="bottom">
      <div class="info" @click="question"><p>Un problème?</p></div>
      <div class="my-2 profil" @click="dialog = !dialog">
        <v-btn color="warning" fab dark>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import SalleCard from "./SalleCard";
export default {
  components: {
    SalleCard,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    changeProfil() {
      this.$router.push({ name: "Connect" });
    },
    question() {
      this.$router.push({ name: "Question" });
    },
  },
};
</script>
<style>
.dialog {
  width: 500px;
  height: 250px;
  position: relative;
  z-index: 2;
  background: white;
  border: none;
  box-shadow: 0px 0px 50px rgba(199, 199, 199, 0.733);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dialog-head {
  height: 25%;
  margin: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0e0e0;
}
.dialog-txt {
  text-align: justify;
  padding: 30px;
  margin: 0;
  height: 50%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.788);
}
.dialog-button {
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-around;
}
.dialog-button p {
  font-size: 20px;
  color: #1567c5;
  transition: all ease 200ms;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.dialog-button p:hover {
  background: #d2e7ff83;
}
#box {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
@media all and (max-width: 618px) {
  #box {
    overflow: scroll;
  }
}
@media all and (max-width: 1208px) {
  .info {
    position: absolute;
    top: 100px;
    right: auto !important;
    left: 70px;
    bottom: auto !important;
  }
}
@media all and (max-width: 956px) {
  .info {
    position: static !important;
  }
  .profil {
    position: static !important;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    position: absolute;
    z-index: 1;
  }
}
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 900px;
  position: absolute;
  z-index: 1;
}
.info {
  border: 2px solid var(--orange);
  border-radius: 10px;
  padding: 10px;
  background: var(--orange);
  color: white;
  font-size: 1.1em;
  transition: all ease 200ms;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 50px;
}
.info:hover {
  transform: scale(1.1);
}
.titre {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin-bottom: 50px;
}
.titre p {
  font-weight: bold;
  font-size: 40px;
}
.underline {
  border-bottom: 5px solid black;
}
.salleCard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.profil {
  position: absolute;
  top: 100px;
  right: 100px;
  transition: all ease 200ms;
}
.profil:hover {
  transform: scale(1.1);
}
</style>
