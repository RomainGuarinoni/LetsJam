<template>
  <div class="container">
    <Navbar change_color="true" />
    <h1>profil</h1>
    <p>Vous êtes {{ fullName }}</p>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      nom: "",
      prenom: "",
    };
  },
  computed: {
    fullName() {
      let fullName = this.prenom + " " + this.nom;
      return fullName;
    },
  },
  created: function() {
    this.nom = localStorage.getItem("nom");
    this.prenom = localStorage.getItem("prenom");
  },
};
</script>

<style></style>
