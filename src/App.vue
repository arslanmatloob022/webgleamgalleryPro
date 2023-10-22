<template>
  <app-header></app-header>
  <header-space></header-space>
  <router-view />
  <app-footer-nav></app-footer-nav>
  <ribbon-view-vue></ribbon-view-vue>
</template>

<script>
import AppHeader from "./components/AppComponents/AppHeader.vue";
import AppFooterNav from "./components/AppComponents/AppFooterNav.vue";
import HeaderSpace from "./components/AppComponents/HeaderSpace.vue";
import CategoriesHeader from "./views/CategoriesPage/CategoriesHeader.vue";
import RibbonViewVue from "./components/AppComponents/RibbonView.vue";

export default {
  name: "App",

  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooterNav,
    HeaderSpace,
    CategoriesHeader,
    RibbonViewVue,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
<!-- color: #42b983; -->
