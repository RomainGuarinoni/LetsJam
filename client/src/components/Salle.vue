<template>
  <div class="salle" id="salle">
    <Navbar change_color="true" />
    <div class="salleBox">
      <div class="contour">
        <div class="left">
          <img class="salleImg" :src="imageUrl" />
        </div>
        <div class="right">
          <div class="content">
            <h1>Salle {{ title }}</h1>
            <div class="status">
              <p>Statut :</p>
              <div class="statut">
                <div
                  class="round"
                  :class="{
                    green: salleInfo.available,
                    red: !salleInfo.available,
                  }"
                ></div>
                <p v-if="salleInfo.available">Libre</p>
                <p v-else>Prise</p>
              </div>
            </div>
            <div v-if="salleInfo.available == false">
              <div class="moreinfo">
                <p>Plus d'info</p>
                <div class="bar">
                  <p>
                    <i
                      id="plus"
                      v-show="!info"
                      class="fas fa-plus"
                      @click="info = true"
                    ></i>
                  </p>
                  <p>
                    <i
                      id="minus"
                      v-show="info"
                      class="fas fa-minus"
                      @click="info = false"
                    ></i>
                  </p>
                </div>
              </div>
              <div
                v-if="info"
                class="info"
                :class="{ enter: info, exit: !info }"
              >
                <h3>Ce musicien est actuellement dans la salle :</h3>
                <p>{{ fullName }}</p>
              </div>
            </div>

            <div class="button">
              <!-- inserer code des boutons -->
              <button>bouton</button>
            </div>
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
  props: ["salle"],
  data() {
    return {
      info: false,
      salleInfo: {
        available: true,
        user: {
          nom: "Guarinoni",
          prenom: "Romain",
        },
      },
    };
  },
  computed: {
    title() {
      return this.salle.charAt(0).toUpperCase() + this.salle.slice(1);
    },
    imageUrl() {
      let url = require("../assets/" + this.salle + ".jpg");
      return url;
    },
    fullName() {
      let name = this.salleInfo.user.prenom + " " + this.salleInfo.user.nom;
      return name;
    },
  },
};
</script>

<style scoped>
.content {
  flex: 1;
  padding: 0 40px;
}
.contour {
  padding: 110px 250px;
  height: auto;
  width: auto;
  box-shadow: 0 0 50px rgba(207, 207, 207, 0.685);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgb(255, 255, 255);
}
.salleImg {
  width: 500px;
  height: auto;
  box-shadow: 0px 0px 50px rgba(53, 53, 53, 0.925);
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
  width: 700px;

  display: flex;
  flex-direction: column;
}
.left {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
h1 {
  text-align: center;
  font-size: 4em;
}
.status {
  font-size: 1.2em;
  margin: 20px 0;
  font-size: 2em;
  display: flex;
  width: 43%;
  align-items: center;
  justify-content: space-between;
}
.moreinfo {
  display: flex;
  align-items: center;
}
.moreinfo p {
  font-size: 1.2em;
  margin: 0 2px;
  font-weight: bold;
}
.statut {
  display: flex;
  align-items: center;
}
.round {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin: 0 5px;
}
.red {
  border: 1px solid red;
  background: red;
}
.green {
  border: 1px solid green;
  background: green;
}
i {
  font-size: 1em;
  border: 2px solid rgb(19, 19, 19);
  color: rgb(19, 19, 19);
  border-radius: 100%;
  cursor: pointer;
  padding: 4px;
}

.info {
  transition: all ease 300ms;
  user-select: none;
  text-align: center;

  padding: 10px;
}

.enter {
  animation: enter 300ms;
}
@keyframes enter {
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    height: auto;
    opacity: 0.5;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

.bar {
  position: relative;
}
#plus,
#minus {
  position: relative;
  top: 0;
  left: 0;
}
</style>
