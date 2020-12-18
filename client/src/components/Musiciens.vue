<template>
  <div class="musiciens">
    <Navbar change_color="true" />
    <h1>
      <i class="fas fa-music"></i>Tous ces musiciens utilisent déjà la
      plateforme<i class="fas fa-music"></i>
    </h1>
    <div class="userBox">
      <Musiciencard
        v-for="(user, index) in musiciens"
        :key="index"
        :prenom="user.prenom"
        :nom="user.nom"
        :promo="user.promo"
        :instruments="user.instruments"
      />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Musiciencard from "./Musiciencard";
export default {
  components: {
    Navbar,
    Musiciencard,
  },
  data() {
    return {
      musiciens: [
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
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
        {
          prenom: "Romain",
          nom: "Guarinoni",
          promo: "L3",
          instruments: ["Batterie", "Guitare", "Piano"],
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
}
.userBox {
  width: 95%;
  height: 700px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
}
.musiciens {
  margin: 0;
  padding: 0;
}
.fa-music {
  margin: 0 10px;
  font-size: 1.4em;
  background: linear-gradient(#e66465, #9198e5);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
