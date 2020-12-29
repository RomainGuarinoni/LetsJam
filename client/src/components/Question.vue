<template>
  <div id="boxAll">
    <div class="questionBox">
      <div class="retour" @click="retour">
        <font-awesome-icon class="icon" :icon="['fas', 'chevron-left']" />
      </div>
      <p class="titre">Questions</p>
      <div class="question">
        <h2>• J'ai oublié de libérer la salle, que se passe-t-il ?</h2>
        <p>
          Les salles se libèrent automatiquement au bout de 2 heures. Si vous
          voulez jouer plus longtemps que deux heures, pensez à reprendre la
          salle sur l'appli.
        </p>
      </div>
      <div class="question">
        <h2>• Je n'arrive pas à rendre la salle</h2>
        <p>
          Vous avez sûrement dû changer de compte entre temps et vous n'êtes
          plus connecté avec le même compte qui a prit la salle. Cliquez sur le
          bouton
          <v-icon>mdi-account-circle</v-icon>, reconnectez-vous avec le bon
          compte, et normalement vous pourrez libérer la salle. Autrement,
          envoyez un mail à :
          <a href="mailto:romain.guar91@gmail.com">romain.guar91@gmail.com</a>
        </p>
      </div>
      <div class="question">
        <h2>• Qui contacter en cas de problème ?</h2>
        <p>
          Vous pouvez contacter Romain Guarinoni à cette adresse
          <a href="mailto:romain.guar91@gmail.com">romain.guar91@gmail.com</a>,
          ou sur les sites suivant :
        </p>
        <p>
          <a
            class=" social"
            href="https://www.linkedin.com/in/romain-guarinoni-535445189/"
            target="_blank"
            ><font-awesome-icon class="i" :icon="['fab', 'linkedin']"/></a
          ><a
            class=" social"
            href="https://www.instagram.com/romain.guar91/?hl=fr"
            target="_blank"
            ><font-awesome-icon class="i" :icon="['fab', 'instagram']"/></a
          ><a
            class=" social"
            href="https://www.facebook.com/romain.bat17/"
            target="_blank"
            ><font-awesome-icon class="i" :icon="['fab', 'facebook']"
          /></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    retour() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
@media all and (max-width: 969px) {
  .retour {
    position: relative !important;
    top: auto !important;
    left: auto !important;
  }
  .question p {
    margin-left: 0 !important;
  }
}
@media all and (max-width: 618px) {
  #boxAll {
    overflow: scroll !important;
  }
}
#boxAll {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100%;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.retour {
  padding-right: 2px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(209, 208, 208, 0.719);
  border: none;
  border-radius: 100%;
  position: absolute;
  top: 50px;
  left: 200px;
  transition: all ease 200ms;
}
.retour:hover {
  transform: scale(1.1);
}
.icon {
  font-size: 20px;
}
.social {
  margin: 0 20px;
}
.i {
  color: black;
  font-size: 40px;
}
.questionBox {
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
}
.titre {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  align-self: center;
  border-bottom: 5px solid black;
}
.question {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 50px 0;
}
.question p {
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.question h2 {
  align-self: flex-start;
}
</style>
