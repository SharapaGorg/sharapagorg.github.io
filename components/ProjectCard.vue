<template>
  <div>
    <div class='project-card' ref='card' :style="ThemeStyle">
      <div class='project-preview' v-show='showPreview' ref='projectPreview' @click="showProjectLinks">
      </div>
      <div class='project-part-1' v-show="!showPreview && !showLinks" :style="ThemeStyleInset">
        <img alt="" :src='resolve_img_url(projectImg)'/>
      </div>

      <div class="project-part-1 project-links" v-show="showLinks">
        <div style="min-height : 100px" class="inline-block">{{ projectDescription }}</div>

        <div class="line" style="min-width : 100%; margin-top : 10px; margin-bottom : 10px"></div>

        <div style="min-height : 45px">
          <span v-for="link in Object.keys(links)">
            {{ link }} : <a :href="links[link]"> click </a><br>
          </span>
        </div>
        <img alt="" src="../static/cross.svg" class="cross" @click="closeLinks"/>
      </div>


      <div class='project-part-2' v-show="!showPreview && !showLinks">
        <span class='project-title'>{{ projectTitle }}</span>
        <span class='tools-inscription' :style="ThemeStyleInset">{{ Tools }}:</span>
        <img alt="" :src='resolve_img_url(tool)' class='project-lang' v-for="tool in projectLang" :key="tool"/>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      showPreview: false,
      showLinks: false
    }
  },
  props: {
    projectTitle: String,
    projectImg: String,
    projectLang: Array,
    projectPreview: String,
    projectDescription: String,
    links: Object
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../static/', false, /\.png$|\.jpg$|\.svg$|\.gif$/)
      return images("./" + path)
    },
    showProjectLinks() {
      this.showLinks = true;
      this.showPreview = false;
    },
    closeLinks() {
      this.showLinks = false;
      this.showPreview = true;
    }
  },
  computed: {
    // why I should do it???
    // I can not use arguments in computed functions, so
    // I had to duplicate functions....
    ThemeStyleInset: function() {
      if (this.$store.state.turner.themeIsLight) {
        return {
          backgroundColor: this.$store.state.lightBackground,
          borderColor : this.$store.state.lightBackground,
          boxShadow: this.$store.state.lightInsetShadow
        }
      } else {
        return {
          backgroundColor: this.$store.state.darkBackground,
          borderColor : this.$store.state.darkBackground,
          boxShadow:  this.$store.state.darkInsetShadow
        }
      }
    },
    ThemeStyle: function() {
      if (this.$store.state.turner.themeIsLight) {
        return {
          backgroundColor: this.$store.state.lightBackground,
          borderColor : this.$store.state.lightBackground,
          boxShadow: this.$store.state.lightShadow
        }
      } else {
        return {
          backgroundColor: this.$store.state.darkBackground,
          borderColor : this.$store.state.darkBackground,
          boxShadow: this.$store.state.darkShadow
        }
      }
    },
    Tools() {
      const headers = ['Tools', 'Средства']
      return headers[Number(this.$store.state.turner.langIsRussian)]
    }
  },
  mounted() {
    this.$refs.projectPreview.style.backgroundImage = 'url(' + this.resolve_img_url(this.projectPreview) + ')'

    this.$refs.card.addEventListener('mouseover', () => {
      if (!this.showLinks) {
        this.showPreview = true;
      }
    })

    this.$refs.card.addEventListener('mouseout', () => {
      this.showPreview = false;
    })
  }
}

</script>

<style scoped>

a {
  text-decoration: underline;
}

a:hover {
  color: #1240da;
}

.cross {
  height: 35px !important;
  width: 15px;
  margin-top: -15px;
  @apply mx-auto cursor-pointer;
}

.project-card {
  width: 300px;
  min-height: 230px;
  background-color: rgb(238, 240, 244);
  border-radius: 20px;
  /*box-shadow: 9.91px 9.91px 15px #CDCED2, -9.91px -9.91px 15px #FFFFFF;*/
  border: 10px solid rgb(238, 240, 244);
}

.project-links {
  width: 275px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 10px;
  font-family: "Ubuntu", sans-serif;
  text-align: justify;
  box-shadow: none !important;
}

.project-preview {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 270px;
  height: 170px;
  border-radius: 20px;
  background-position: center;
  cursor: pointer;
}


.project-title {
  font-family: "Ubuntu", sans-serif;
  display: block;
  text-align: left;
  font-size: 22px;
  color: #3A424B;
  margin-left: 15px;
}

.project-part-1 {
  border-radius: 20px;
  box-shadow: inset 16.82px 16.82px 28px #D9DADE, inset -16.82px -16.82px 28px #FFFFFF;
  @apply h-[120px];
}

.project-part-2 {
  height: 70px;
}

.project-part-1 img {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 18px;
  height: 80px;
}

.project-lang {
  float: right;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-top: 20px;
}

.tools-inscription {
  box-shadow: inset 9.91px 9.91px 15px #D9DADE, inset -9.91px -9.91px 15px #FFFFFF;
  font-family: "Ubuntu", sans-serif;
  border-radius: 10px;
  position: relative;
  top: 20px;
  margin-left: 15px;
  color: #3A424B;
  @apply px-3 py-1;
}

</style>
