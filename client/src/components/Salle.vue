<template>
  <div class="salle">
    <Navbar change_color="true" />
    <div class="salleBox">
      <div class="left">
        <img :src="imageUrl" :alt="id" />
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar,
  },
  props: ["salle"],
  computed: {
    imageUrl() {
      let url = require("../assets/" + this.salle + ".jpg");
      return url;
    },
  },
};
</script>

<style scoped></style>
