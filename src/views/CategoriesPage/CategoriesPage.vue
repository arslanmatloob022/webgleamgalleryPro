<template>
  <section>
    <h1>this categories</h1>
    <transition name="slide">
      <categories-header v-if="showNavbar"></categories-header>
    </transition>
    <button @click="toggleNavbar">Toggle Navbar</button>
  </section>
</template>

<script>
import CategoriesHeader from "./CategoriesHeader.vue";

export default {
  name: "CategoriesPage",
  components: {
    CategoriesHeader,
  },
  data() {
    return {
      showNavbar: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>

<style scoped>
.h1 {
  color: red;
}

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
