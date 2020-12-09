<template>
  <div class="home">
    <Navbar class="navbar" :change_color="change_color" />
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
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      change_color: false,
      display: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.changeColor);
  },
  destroyed() {
    window.removeEventListener("scroll", this.changeColor);
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
  },
};
</script>

<style>
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
  z-index: 3;
}
a .round {
  border-radius: 50%;
  width: 38px;
  height: 38px;
  position: absolute;
  right: 3px;
  top: 2px;
  transition: all 0.3s ease-out;
  z-index: 2;
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
