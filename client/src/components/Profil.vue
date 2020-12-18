<template>
  <div class="container">
    <Navbar change_color="true" />
    <div class="profil">
      <div class="profilBox">
        <div class="navBox">
          <button @click="stat" :class="{ selected: firstButton }">
            <i class="fas fa-chart-line"></i>
            <p>Statistiques</p>
          </button>
          <button @click="modify" :class="{ selected: secondButton }">
            <i class="fas fa-cog"></i>
            <p>Modifier le profil</p>
          </button>
        </div>
        <div class="contentBox">
          <router-view />
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
  data() {
    return {
      firstButton: true,
      secondButton: false,
    };
  },

  created: function() {
    this.$router.push({ name: "Stat" });
  },
  methods: {
    stat() {
      this.firstButton = true;
      this.secondButton = false;
      this.$router.push({ name: "Stat" });
    },
    modify() {
      this.firstButton = false;
      this.secondButton = true;
      this.$router.push({ name: "Modify" });
    },
  },
};
</script>

<style scoped>
.contentBox {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
button {
  height: 50px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  background: white;
  font-weight: bold;
  font-size: 1.7em;
  transition: all ease 200ms;
  border: none;
  margin: 10px;
  cursor: pointer;
  outline: none;
  text-align: center;
}
button i {
  margin: 10px;
}
button p {
  margin: 10px;
}
.container {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
}
.profil {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.profilBox {
  width: 70%;
  height: 90%;
}
.selected {
  border-bottom: 3px solid #ac1010;
  transform: scale(1.05);
}
</style>
