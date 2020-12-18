<template>
  <div class="containerMod">
    <h1>Modifie tes informations</h1>
    <div class="boxModify">
      <div class="nom">
        <p>Nom :</p>
        <input class="formInput" type="text" id="nomM" :value="user.nom" />
      </div>
      <div class="prenom">
        <p>Prenom :</p>
        <input
          class="formInput"
          type="text"
          id="prenomM"
          :value="user.prenom"
        />
      </div>
      <div class="promo">
        <p class="ptitle">Promo :</p>
        <div class="radioM">
          <input
            type="radio"
            id="L3"
            name="promo"
            value="L3"
            :checked="user.promo == 'L3'"
          />
          <label for="L3">L3</label>
        </div>

        <div class="radioM">
          <input
            type="radio"
            id="M1"
            name="promo"
            value="M1"
            :checked="user.promo == 'M1'"
          />
          <label for="M1">M1</label>
        </div>
        <div class="radioM">
          <input
            type="radio"
            id="M2"
            name="promo"
            value="M2"
            :checked="user.promo == 'M2'"
          />
          <label for="M2">M2</label>
        </div>
      </div>
      <div class="instruments">
        <p class="ptitle">Instruments :</p>

        <div class="checkbox">
          <div class="checkM">
            <input
              type="checkbox"
              id="Piano"
              name="Instruments"
              value="Piano"
              :checked="
                this.user.instruments.some((element) => element == 'Piano')
              "
            />
            <label for="Piano">Piano</label>
          </div>
          <div class="checkM">
            <input
              type="checkbox"
              id="Guitare"
              name="Instruments"
              value="Guitare"
              :checked="
                this.user.instruments.some((element) => element == 'Guitare')
              "
            />
            <label for="Guitare">Guitare</label>
          </div>
          <div class="checkM">
            <input
              type="checkbox"
              id="basse"
              name="Instruments"
              value="Basse"
              :checked="
                this.user.instruments.some((element) => element == 'Basse')
              "
            />
            <label for="basse">Basse</label>
          </div>
          <div class="checkM">
            <input
              type="checkbox"
              id="Batterie"
              name="Instruments"
              value="Batterie"
              :checked="
                this.user.instruments.some((element) => element == 'Batterie')
              "
            />
            <label for="Batterie">Batterie</label>
          </div>
          <div class="checkM">
            <input
              type="checkbox"
              id="Autre"
              name="Instruments"
              value="Autre"
              :checked="
                this.user.instruments.some((element) => element == 'Autre')
              "
            />
            <label for="Autre">Autre</label>
          </div>
        </div>
      </div>
    </div>
    <button @click="modifyInfo" class="buttonM">Modifier</button>
    <p v-show="error" class="formErrorBox">
      Tous les champs ne sont pas remplis
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        prenom: localStorage.getItem("prenom"),
        nom: localStorage.getItem("nom"),
        instruments: ["Batterie", "Piano", "Guitare"],
        promo: localStorage.getItem("promo"),
        favSalle: "Descartes",
        nbHeures: 15,
      },
      error: false,
    };
  },
  methods: {
    modifyInfo() {
      let nom = document.getElementById("nomM").value;
      let prenom = document.getElementById("prenomM").value;
      let l3 = document.getElementById("L3");
      let m1 = document.getElementById("M1");
      let m2 = document.getElementById("M2");
      let promo = [l3, m1, m2];
      let userPromo = "";
      if (nom != "" && prenom != "") {
        this.error = false;
        localStorage.setItem("nom", nom);
        localStorage.setItem("prenom", prenom);
        for (let year of promo) {
          if (year.checked) {
            userPromo = year.value;
          }
        }
        localStorage.setItem("promo", userPromo);
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.formErrorBox {
  color: red;
}
.buttonM {
  margin-bottom: 20px;
  color: white;
  background: #ac1010;
  border: none;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  font-size: 1.3em;
  cursor: pointer;
  transition: all ease 200ms;
}
.buttonM:hover {
  transform: scale(1.1);
}
.checkM {
  margin: 0 20px;
}
.checkM label {
  margin-left: 5px;
}
h1 {
  font-size: 3em;
}
.nom,
.prenom,
.promo,
.instruments {
  margin: 50px 0;
}
.promo {
  display: flex;
}
.containerMod {
  padding: 20px 0;
  height: auto;
  width: 100%;
  box-shadow: 0 0 20px rgba(214, 214, 214, 0.774);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nom p,
.prenom p,
.ptitle {
  font-size: 1.5em;
}
.nom,
.prenom {
  display: flex;
}
p,
label {
  font-size: 1.3em;
}
.formInput {
  height: 35px;
  font-size: 1.1em;
  width: 190px;
  border-radius: 8px;
  background: #dddddd44;
  border: 1px solid #dddddd9f;
  outline: none;
  padding: 0 10px;
}
.nom input,
.prenom input,
.promo input {
  margin-left: 20px;
}
.checkbox {
  display: flex;
}
.radioM {
  display: flex;
  align-items: center;
}
.radioM label {
  margin-left: 5px;
}
</style>
