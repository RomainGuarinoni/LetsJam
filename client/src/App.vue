<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  mounted: function() {
    if (this.$store.state.connect) {
      this.$router.push({ name: "Home" });
    } else {
      this.$router.push({ name: "Connect" });
    }
  },
};
</script>
<style scoped>
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
@media all and (max-width: 542px) {
  #app {
    overflow: scroll;
  }
}
* {
  margin: 0;
  padding: 0;
  --green: #0cc863;
  --orange: #ffc53d;
}
</style>
