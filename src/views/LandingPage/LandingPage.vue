<template>
  <section>
    <h1 class="h1">this is landing Page</h1>

    <!-- <animatory-screen-vue></animatory-screen-vue> -->
  </section>
</template>
<script>
import AnimatoryScreenVue from "@/components/AppComponents/AnimatoryScreen.vue";
export default {
  name: "LandingPage",
  components: {
    AnimatoryScreenVue,
  },
};
</script>
<style scoped>
.h1 {
  color: orange;
}
</style>
