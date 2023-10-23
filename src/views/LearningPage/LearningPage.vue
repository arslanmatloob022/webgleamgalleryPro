<template>
  <section id="introduction"><h1>Intro</h1></section>
  <section id="introduction"><h1>Intro</h1></section>
  <section id="introduction"><h1>Intro</h1></section>
  <section id="introduction"><h1>Intro</h1></section>
</template>
<script>
export default {
  name: "FeaturesPage",
  data() {
    return {
      showNavbar: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
  components: {},
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>
