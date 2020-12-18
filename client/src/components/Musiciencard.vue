<template>
  <div class="box">
    <div class="color">
      <h1>{{ prenom }}</h1>
      <h3>{{ nom }}</h3>
    </div>
    <p class="promo">
      promo : <span id="prom">{{ promo }}</span>
    </p>
    <p class="instruments">Instruments :</p>
    <div>
      <ul>
        <li v-for="instrument in instruments" :key="instrument">
          {{ instrument }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prenom: String,
    nom: String,
    promo: { type: String, default: "non renseigné" },
    instruments: {
      type: Array,
      default: function() {
        return ["non renseigné"];
      },
    },
  },
};
</script>

<style scoped>
.color {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
#prom {
  font-weight: 100;
}
.box {
  width: 280px;
  height: 300px;
  border: 1px solid rgba(240, 240, 240, 0.39);
  box-shadow: 0 0 20px rgba(214, 214, 214, 0.425);
  border-radius: 20px;
  margin: 30px 30px;
}
h1,
h3 {
  text-align: center;
  padding-top: 10px;
}
p {
  font-size: 1.2em;
  margin-top: 30px;
}
ul,
p {
  margin-left: 20px;
}
p {
  font-weight: bold;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}
li {
  margin: 010px 20px;
  padding: 5px;
  border-radius: 5px;
  background: rgba(196, 195, 195, 0.356);
  text-align: center;
}
</style>
