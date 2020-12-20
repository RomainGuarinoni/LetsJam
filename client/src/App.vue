<template>
  <div id="app">
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
      <div class="info"><p>?</p></div>
    </div>
  </div>
</template>

<script>
import SalleCard from "./components/SalleCard";
export default {
  components: {
    SalleCard,
  },
};
</script>
<style>
#app {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 700px;
}
.info {
  width: 25px;
  height: 25px;
  background: rgba(212, 211, 211, 0.521);
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 200ms;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 50px;
}
.info:hover {
  transform: scale(1.2);
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
</style>
