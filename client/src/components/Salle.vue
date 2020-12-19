<template>
  <div class="salle">
    <Navbar change_color="true" />
    <div class="salleBox">
      <div class="contour">
        <div class="left">
          <img class="salleImg" :src="imageUrl" :alt="id" />
        </div>
        <div class="right">
          <h1>{{ title }}</h1>
          <div class="status">
            <p>Statut :</p>
            <div class="statut">
              <!-- inserer le code du statut -->
            </div>
          </div>
          <div class="moreInfo">
            <p>
              <i v-show="!info" class="fas fa-plus" @click="info = true"></i
              ><i v-show="info" class="fas fa-minus" @click="info = false"></i>
            </p>
            <div v-show="info" class="info">
              <p>bliblibli</p>
              <p>blablabkla</p>
              <p>lolollol</p>
            </div>
          </div>
          <div class="button"><!-- inserer code des boutons --></div>
        </div>
      </div>
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
  data() {
    return {
      info: false,
    };
  },
  computed: {
    imageUrl() {
      let url = require("../assets/" + this.salle + ".jpg");
      return url;
    },
    title() {
      return this.salle.charAt(0).toUpperCase() + this.salle.slice(1);
    },
  },
};
</script>

<style scoped>
.contour {
  padding: 50px 150px;
  height: auto;
  box-shadow: 0 0 20px rgba(214, 214, 214, 0.774);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.salleImg {
  width: 500px;
  height: auto;
  box-shadow: 0px 0px 50px rgba(128, 128, 128, 0.685);
}
.salle {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.salleBox {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  height: 350px;
  width: 400px;
}
.left {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
h1 {
  text-align: center;
  font-size: 3em;
}
.status {
  font-size: 1.2em;
  margin: 20px 0;
  display: flex;
  align-items: center;
}

i {
  font-size: 1em;
  border: 2px solid rgb(19, 19, 19);
  color: rgb(19, 19, 19);
  border-radius: 100%;
  cursor: pointer;
  padding: 4px;
}
.moreInfo {
  font-weight: bold;
  border: 2px solid black;
}
.info {
  transition: all ease 200ms;
}
</style>
