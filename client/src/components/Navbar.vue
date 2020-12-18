<template>
  <div class="nav">
    <div class="nav_title">
      <router-link class="nav_link" :to="{ name: 'home' }"
        ><p @click="scrollUp" :class="{ black: change_color }">
          Lets Jam
        </p></router-link
      >
    </div>
    <div class="nav_links">
      <ul>
        <li>
          <router-link
            v-show="connect"
            class="nav_link "
            :to="{ path: '/salle/lavoisier' }"
            ><p :class="{ black: change_color }" style="margin:0;">
              Lavoisier
            </p></router-link
          >
        </li>
        <li>
          <router-link
            class="nav_link "
            v-show="connect"
            :class="{ black: change_color }"
            :to="{ path: '/salle/descartes' }"
            ><p :class="{ black: change_color }" style="margin:0;">
              Descartes
            </p></router-link
          >
        </li>
        <li>
          <router-link
            class="nav_link "
            v-show="connect"
            :class="{ black: change_color }"
            :to="{ name: 'musiciens' }"
            ><p :class="{ black: change_color }" style="margin:0;">
              Musiciens
            </p></router-link
          >
        </li>
        <li id="button">
          <span v-show="connect" @click="connectFunction">Mon profil</span
          ><span v-show="!connect" @click="connectFunction">Se connecter</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["change_color"],
  computed: {
    ...mapState(["connect"]),
  },
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    connectFunction() {
      if (this.connect) {
        this.$router.push({ name: "profil" });
      } else {
        this.scrollUp();
        this.$emit("connectform");
      }
    },
  },
};
</script>

<style scoped>
#button:hover {
  transform: scale(1.05);
}
#button {
  color: white;
  margin-top: 10px;
  cursor: pointer;
  font-size: 2em;
  font-weight: bold;
}
span {
  border: 2px solid #ac1010;
  border-radius: 30px;
  padding: 10px;
  background: #ac1010;
}
.black {
  color: black;
}
.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  position: sticky;
  top: 20px;
}
.nav_title {
  margin: 0 100px;
}

.nav_title p {
  font-family: "Nerko One", cursive;
  font-size: 4em;
  margin: 0;
  transition: all ease 200ms;
}

ul {
  list-style-type: none;
  display: flex;
  margin-right: 20px;
}
li {
  margin: 0 10px;
  font-size: 1.8em;
  transition: all ease 200ms;
}
.nav_link {
  color: white;
  text-decoration: none;
}
li:hover,
.nav_title p:hover {
  transform: scale(1.1);
}
</style>
