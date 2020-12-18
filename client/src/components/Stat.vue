<template>
  <div class="containerStat">
    <div class="name">
      <h1>{{ fullName }} ( {{ user.promo }} )</h1>
      <div class="instruments">
        <ul>
          <li v-for="instrument in user.instruments" :key="instrument">
            {{ instrument }}
          </li>
        </ul>
      </div>
    </div>

    <div class="info">
      <p><span class="bold">Salle préférées :</span> {{ user.favSalle }}</p>
      <p>
        <span class="bold">Nombre d'heures à jouer de la musique :</span>
        {{ user.nbHeures }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        prenom: localStorage.getItem("prenom"),
        nom: localStorage.getItem("nom"),
        instruments: ["batterie", "piano", "guitare"],
        promo: localStorage.getItem("promo"),
        favSalle: "Descartes",
        nbHeures: 15,
      },
    };
  },
  computed: {
    fullName() {
      let fulName = this.user.prenom + " " + this.user.nom;
      return fulName;
    },
  },
};
</script>

<style scoped>
.name {
  font-size: 2em;
  margin-bottom: 80px;
}
li {
  padding: 5px;
  border-radius: 5px;
  background: rgba(196, 195, 195, 0.356);
  text-align: center;
}
.instruments {
  width: 100%;
  font-size: 20px;
  margin-top: 20px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.containerStat {
  box-shadow: 0 0 20px rgba(214, 214, 214, 0.774);
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 300px;
  border-radius: 30px;
}
.info p {
  font-size: 1.8em;
  margin-bottom: 30px;
}
.info {
  text-align: left;
}
.bold {
  font-weight: bold;
}
</style>
