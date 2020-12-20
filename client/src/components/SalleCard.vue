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
      <div class="statustxt">
        <p>{{ status }}</p>
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
      imgTab: [img1, img2],
    };
  },
  mounted: function() {
    console.log(this.img);
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
.statustxt {
  margin: 10px;
}
.name {
  font-weight: bold;
  font-size: 25px;
}
</style>
