<template>
  <div id="box" @click="update">
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
      <div class="my-2 profil" @click="changeProfil">
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

  methods: {
    changeProfil() {
      this.$router.push({ name: "Connect" });
    },
    question() {
      this.$router.push({ name: "Question" });
    },
    update() {
      this.$store.dispatch("update_info");
    },
  },
};
</script>
<style>
#box {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100%;
  position: fixed;

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
  }
}
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 900px;
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
