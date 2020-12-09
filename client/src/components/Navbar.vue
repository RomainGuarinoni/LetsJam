<template>
  <div class="nav">
    <div class="nav_title">
      <router-link @click="scrollUp" class="nav_link" :to="{ name: 'home' }"
        ><p :class="{ black: change_color }">Lets Jam</p></router-link
      >
    </div>
    <div class="nav_links">
      <ul>
        <li>
          <router-link class="nav_link" :to="{ name: 'lavoisier' }"
            ><p :class="{ black: change_color }" style="margin:0;">
              Lavoisier
            </p></router-link
          >
        </li>
        <li>
          <router-link
            class="nav_link"
            :class="{ black: change_color }"
            :to="{ name: 'descartes' }"
            ><p :class="{ black: change_color }" style="margin:0;">
              Descartes
            </p></router-link
          >
        </li>
        <li>
          <router-link
            class="nav_link"
            :class="{ black: change_color }"
            :to="{ name: 'musiciens' }"
            ><p :class="{ black: change_color }" style="margin:0;">
              Musiciens
            </p></router-link
          >
        </li>
        <li>
          <router-link :to="{}"><span>Se connecter</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    change_color: Boolean,
  },
  methods: {
    scrollUp() {
      console.log(window.height);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
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
