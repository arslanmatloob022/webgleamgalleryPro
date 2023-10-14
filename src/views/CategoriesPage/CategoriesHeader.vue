<template>
  <nav class="navbar">
    <ul class="nav">
      <li class="nav-link" @click="gotocrm">e-Commerce</li>
      <li class="nav-link">Gaming</li>
      <li class="nav-link">C R M</li>
      <li class="nav-link">Media</li>
      <li class="nav-link">Landing Pages</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "CategoriesHeader",
  components: {},
  methods: {
    gotocrm() {
      this.$router.push("/crmweb");
    },
  },
};
</script>

<style scoped>
.navbar {
  transition: top 3.5s ease-in-out;
  background-color: #af4bbf;
}
.nav {
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
}

.nav-link {
  cursor: pointer;
  color: #ffffff;
  font-size: calc(6px + 1vw);
  font-family: "DM Serif Display", serif;
  font: bold;
}

.nav-link:hover {
  transition: all 0.1s ease-in-out;
  transform: scale(1.05);
}

.navbar-slide-enter-active,
.navbar-slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.navbar-slide-enter,
.navbar-slide-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
</style>
