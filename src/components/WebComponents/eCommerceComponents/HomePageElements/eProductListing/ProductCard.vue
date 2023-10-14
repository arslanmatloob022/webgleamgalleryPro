<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">${{ product.price }}</p>
    <button class="btn btn-primary btn-add-to-cart" @click="addToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
      alert(this.product.name + " " + " Added to You Cart");
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: #ffffffda;
  margin: 20px;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 670px) {
  .product-card {
    margin: 0;
    margin-top: 10px;
  }
}
.product-card:hover {
  cursor: pointer;
  transform: scale(1.026);
}
.product-image {
  width: 100%;
  height: 55%;
  border-radius: 3px;
}

.product-name {
  font-size: 1.2rem;
  margin: 6px 0;
}

.product-price {
  font-size: 1.2rem;
  color: #e44d26;
}

.btn-add-to-cart {
  background-color: #e44d26;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-add-to-cart:hover {
  background-color: #ff6542;
}
</style>
