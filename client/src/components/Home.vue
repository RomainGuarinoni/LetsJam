<template>
  <div class="container">
    <div id="connectForm" v-show="connectFormState">
      <p id="form_title">Se connecter</p>
      <i id="closeButton" @click="quit" class="fas fa-times"></i>
      <div class="form_container">
        <div class="form_box">
          <p class="form_text">Nom (*)</p>
          <input
            type="text"
            class="form_input"
            id="Nom"
            placeholder="Votre nom"
          />
        </div>
        <div class="form_box">
          <p class="form_text">Prenom (*)</p>
          <input
            type="text"
            class="form_input"
            id="Prenom"
            placeholder="Votre nom"
          />
        </div>
      </div>
      <div class="form_container">
        <div class="form_box">
          <p class="form_text">Genre (*)</p>
          <div class="radioBox">
            <div class="radio">
              <input type="radio" id="Homme" name="Genre" value="Homme" />
              <p>Homme</p>
            </div>
            <div class="radio">
              <input type="radio" id="Femme" name="Genre" value="Femme" />
              <p>Femme</p>
            </div>
          </div>
        </div>
      </div>
      <div class="form_container">
        <div class="form_box">
          <p class="form_text">Instruments</p>
          <div class="radioBox">
            <div class="radio">
              <input
                type="checkbox"
                id="Piano"
                name="Instruments"
                value="Piano"
              />
              <p>Piano</p>
            </div>
            <div class="radio">
              <input
                type="checkbox"
                id="Guitare"
                name="Instruments"
                value="Guitare"
              />
              <p>Guitare</p>
            </div>
            <div class="radio">
              <input
                type="checkbox"
                id="basse"
                name="Instruments"
                value="Basse"
              />
              <p>Basse</p>
            </div>
            <div class="radio">
              <input
                type="checkbox"
                id="Batterie"
                name="Instruments"
                value="Batterie"
              />
              <p>batterie</p>
            </div>
            <div class="radio">
              <input
                type="checkbox"
                id="Autre"
                name="Instruments"
                value="Autre"
              />
              <p>Autre</p>
            </div>
          </div>
        </div>
      </div>
      <div class="form_container">
        <button @click="checkForm" id="submitForm">Se connecter</button>
      </div>
      <div v-show="formError" class="formErrorBox">
        <p>Les champs requis ne sont pas bien remplis</p>
      </div>
    </div>
    <div class="home" :class="{ opacity: connectFormState }">
      <Navbar
        @connectform="connectForm"
        class="navbar"
        :change_color="change_color"
      />
      <div class="content">
        <div class="home_title">
          <h1>Bienvenue sur <span class="title_aux">Lets Jam</span></h1>
          <p>Le site qui révolutionne la gestion des salles de musiques</p>
          <div class="type-2">
            <div>
              <a @click="scrollToNextPage" class="btn btn-1">
                <span class="txt">Découvrir</span>
                <span class="round"><i class="fa fa-chevron-right"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="text">
          <div class="textBox">
            <div class="item_title">
              <p>Un site conçu pour les musiciens de l'IMT Lille Douai</p>
            </div>
            <div class="items">
              <div class="item">
                <h2>Lavoisier</h2>
                <img
                  class="home_img"
                  src="../assets/lavoisier.jpg"
                  alt="salle de musique lavoisier"
                />
                <p>Voir les disponibilités de la salle et la réserver</p>
                <div class="type-2">
                  <div>
                    <a @click="scrollToNextPage" class="btn btn-1">
                      <span class="txt">Réserver</span>
                      <span class="round"
                        ><i class="fa fa-chevron-right"></i
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <h2>Descartes</h2>
                <img
                  class="home_img"
                  src="../assets/descartes.jpg"
                  alt="salle de musique descartes"
                />
                <p>Voir les disponibilités de la salle et la réserver</p>
                <div class="type-2">
                  <div>
                    <a @click="scrollToNextPage" class="btn btn-1">
                      <span class="txt">Réserver</span>
                      <span class="round"
                        ><i class="fa fa-chevron-right"></i
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <h2>Musiciens</h2>
                <img
                  class="home_img"
                  src="../assets/musicien.jpg"
                  alt="salle de musique lavoisier"
                />
                <p>Voir les musiciens enregitrés sur cette plateforme</p>
                <div class="type-2">
                  <div>
                    <a @click="scrollToNextPage" class="btn btn-1">
                      <span class="txt">Découvrir</span>
                      <span class="round"
                        ><i class="fa fa-chevron-right"></i
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Développé par Romain Guarinoni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import { mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      change_color: false,
      display: false,
      connectFormState: false,
      formError: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.changeColor);
  },
  destroyed() {
    window.removeEventListener("scroll", this.changeColor);
  },
  computed: {
    ...mapState(["connect"]),
  },
  methods: {
    changeColor() {
      if (window.scrollY >= window.screen.height - 180) {
        this.change_color = true;
      } else {
        this.change_color = false;
      }
    },
    scrollToNextPage: function() {
      window.scrollTo({
        top: window.screen.height,
        behavior: "smooth",
      });
    },
    connectForm() {
      this.connectFormState = true;
    },
    checkForm() {
      let prenom = document.getElementById("Prenom").value;
      let nom = document.getElementById("Nom").value;
      let homme = document.getElementById("Homme").checked;
      let femme = document.getElementById("Femme").check;
      if (prenom != "" && nom != "" && (homme == true || femme == true)) {
        localStorage.clear();
        localStorage.setItem("nom", nom);
        localStorage.setItem("prenom", prenom);
        this.formError = false;
        this.connectFormState = false;
        this.$store.dispatch("connect");
      } else {
        this.formError = true;
      }
    },
    quit() {
      this.connectFormState = false;
      this.forError = false;
    },
  },
};
</script>

<style>
#closeButton {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.5em;
}
.formErrorBox p {
  color: #ac1010;
}
#submitForm {
  color: white;
  background: #ac1010;
  border: none;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  font-size: 1.3em;
  cursor: pointer;
}
.radio {
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-left: 10px;
}
.radio input {
  margin-right: 10px;
}
.radioBox {
  display: flex;
}
.form_text {
  margin-bottom: 10px;
}
.form_input {
  height: 35px;
  font-size: 1.1em;
  width: 190px;
  border-radius: 8px;
  background: #dddddd44;
  border: 1px solid #dddddd9f;
  outline: none;
}
#form_title {
  font-size: 2em;
}
.form_container {
  margin: 30px 0;
  justify-content: space-between;
  display: flex;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#connectForm {
  color: rgba(37, 37, 37, 0.884);
  top: 230px;
  position: absolute;
  z-index: 2;
  height: 356px;
  align-self: center;
  width: 450px;
  border-radius: 10px;
  background: rgb(247, 247, 247);
  box-shadow: 0px 0px 50px rgb(95, 95, 95);
  padding: 70px;
}
.opacity {
  filter: brightness(45%);
}
.type-2 {
  margin-top: 30px;
  cursor: pointer;
  transition: all ease 200ms;
}

.btn-1 {
  background-color: #ac1010;
}
.btn-1 .round {
  background-color: #ac1010;
}
a {
  text-decoration: none;
  border-radius: 30px;
  padding: 13px 53px 12px 23px;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: bold;
  position: relative;
  transition: all 0.3s;
  display: inline-block;
}
a span {
  position: relative;
  z-index: 1;
}
a .round {
  border-radius: 50%;
  width: 38px;
  height: 38px;
  position: absolute;
  right: 3px;
  top: 2px;
  transition: all 0.3s ease-out;
  z-index: 1;
}
a .round i {
  position: absolute;
  top: 50%;
  margin-top: -6px;
  left: 50%;
  margin-left: -4px;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.type-2 a:hover .round {
  background: none;
}
.type-2 a:hover .round i {
  left: 70%;
}

.navbar {
  margin: 0;
  z-index: 2;
}
.content {
  z-index: 1;
}
.title_aux {
  font-family: "Nerko One", cursive;
}
.home_title {
  height: 90vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home_title h1 {
  font-size: 5em;
  margin-bottom: 30px;
}
.home_title p {
  font-size: 2.5em;
}
.home_title button {
  margin-top: 30px;
  border-radius: 20px;
  background: red;
  width: 150px;
  height: 30px;
}
.home {
  width: 100%;
  margin-top: 0;
  padding: 0;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.801),
      rgba(61, 61, 61, 0.377)
    ),
    url("../assets/piano.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 120%;
}
.text {
  height: 100vh;
  background: white;
  display: flex;
  align-items: flex-end;
  font-size: 1.3em;
}
.textBox {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.item_title {
  font-weight: bold;
  font-size: 2em;
  margin-top: 30px;
}
.items {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease 200ms;
}
.item:hover {
  transform: scale(1.1);
}
.item h2 {
  margin-bottom: 20px;
}
.item p {
  margin-top: 20px;
  font-size: 1.2em;
}

.footer {
  font-size: 1.2em;
  display: flex;
  align-items: flex-end;
}
.home_img {
  width: 300px;
  height: 200px;
  transition: all ease 200ms;
  box-shadow: 0px 0px 30px rgba(37, 37, 37, 0.616);
}
</style>
