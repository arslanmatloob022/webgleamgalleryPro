<template>
  <section class="featured-products">
    <div class="product-grid">
      <div class="product-card">
        <div class="card-img">
          <img :src="fproduct.image" :alt="fproduct.name" />
        </div>

        <h3>{{ fproduct.name }}</h3>
        <p class="product-price">{{ fproduct.price }}</p>
        <button class="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedProduct",
  props: {
    fproduct: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.featured-products {
  text-align: center;
  padding: 10px;
}

.product-card {
  margin: 5px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;
}
.card-img {
  height: 160px;
  width: 100%;
}
.product-card img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}

.product-card h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-price {
  font-size: 1.2rem;
  color: #e44d26;
}

.btn-secondary {
  background-color: #333;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #444;
}
</style>
