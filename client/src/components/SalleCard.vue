<template>
  <div
    id="card"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.575), rgba(0, 0, 0, 0.329)),url(${
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
        <div class="cercle"></div>
        <div class="text"><p>Libre</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import img1 from "../assets/Descartes.jpg";
import img2 from "../assets/Lavoisier.jpg";
export default {
  props: ["index", "name", "status", "img"],
  data() {
    return {
      imgTab: [img1, img2],
    };
  },
  computed: {
    ...mapState({
      info: "state",
    }),
  },
  mounted: function() {
    let name = this.name;
    console.log(name);
    console.log(this.info.name);
  },
};
</script>

<style scoped>
#card {
  margin: 10px;
  height: 320px;
  color: white;
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  transition: all ease 200ms;
  background-size: 200%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
#card:hover {
  box-shadow: 5px 5px 5px rgba(54, 54, 54, 0.623);
}
#card:hover #bouton {
  transform: translate(10px);
}
#card:hover #bouton i {
  transform: translate(2px);
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
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: none;
  background: green;
  margin-right: 5px;
}
.name {
  font-weight: bold;
  font-size: 25px;
}
</style>
