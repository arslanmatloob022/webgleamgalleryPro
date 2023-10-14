<template>
  <section class="categories">
    <div class="category-list">
      <div class="category">
        <i :class="categories.icon"></i>
        <p>{{ categories.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsCategories",
  props: {
    categories: Object,
  },
};
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
}
.category-list {
  display: flex;
  border-bottom: 4px solid rgba(224, 73, 13, 0.45);
  border-top: 1px solid rgba(224, 73, 13, 0.55);
  border-radius: 4%;
  padding: 40px 30px;
}
.category-list:hover {
  transition: all 0.3s ease;
  transform: scale(1.06);
  cursor: pointer;
  border-bottom: 4px solid rgba(3, 158, 49, 0.55);
  border-left: 1px solid rgba(3, 158, 49, 0.55);
  border-right: 1px solid rgba(3, 158, 49, 0.55);
}
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
}

.category i {
  font-size: 2rem;
  margin-bottom: 16px;
}
</style>
