<template>
  <div class="connectBox">
    <div class="form">
      <div class="connectTitle">
        <h1><span class="underline">Qui e</span>s-tu?</h1>
      </div>
      <div class="formData">
        <div class="formInput">
          <p>Nom</p>
          <input type="text" id="nom" placeholder="Nom" v-model="nom" />
        </div>
        <div class="formInput">
          <p>Prénom</p>
          <input
            type="text"
            id="prenom"
            placeholder="Prénom"
            v-model="prenom"
          />
        </div>
      </div>
      <div class="buttonBox">
        <div class="button" @click="connect">
          <i class="far fa-check-circle"></i>
          <p>C'est parti</p>
        </div>
        <p class="error" v-if="error">
          <i class="fas fa-exclamation-triangle"></i>remplissez tous les champs
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      error: false,
    };
  },
  methods: {
    connect() {
      if (this.nom != "" && this.prenom != "") {
        localStorage.setItem("nom", this.nom);
        localStorage.setItem("prenom", this.prenom);
        this.$router.push({ name: "Home" });
        this.error = false;
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.connectBox {
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.form {
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.formData {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
}

.formInput p {
  font-weight: bold;
  font-size: 20px;
}
input {
  border: 1px solid #262626a9;
  padding: 0 10px;
  font-size: 15px;
  background: white;
  height: 37px;
  width: 300px;
  border-radius: 7px;
}
.connectTitle {
  font-size: 30px;
  text-align: center;
}
.underline {
  border-bottom: 5px solid black;
}
.buttonBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
}
.button {
  background: var(--green);
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: none;
  color: white;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  transition: all ease 200ms;
}
.button:hover {
  transform: scale(1.1);
}
.button i {
  position: absolute;
  top: 25;
  left: 20px;
}
.error {
  color: var(--orange);
}
.error i {
  margin: 0 10px;
}
.error {
  margin-top: 10px;
}
</style>
