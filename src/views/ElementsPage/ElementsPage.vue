<template>
  <section class="main">
    <section class="submain">
      <h1>this is elements</h1>
      <h1>this is elements</h1>
      <h1>this is elements</h1>
      <h1>this is elements</h1>
    </section>
  </section>
</template>

<script>
export default {
  name: "ElementsPage",
  components: {},
};
</script>

<style scoped>
.h1 {
  color: blue;
}
.main {
  display: flex;
  background-color: rgb(143, 132, 153);
}

.submain {
  position: static;
}
</style>
