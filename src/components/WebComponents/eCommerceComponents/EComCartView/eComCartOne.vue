<template>
  <div class="shopping-cart" v-if="isCartOpen">
    <h2>Your Shopping Cart</h2>
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.product.image" alt="Product Image" />
        <div class="item-details">
          <h3>{{ item.product.name }}</h3>
          <p>Price: ${{ item.product.price }}</p>
          <div class="quantity">
            Quantity:
            <button @click="decrementQuantity(index)" class="quantity-button">
              -
            </button>
            {{ item.quantity }}
            <button @click="incrementQuantity(index)" class="quantity-button">
              +
            </button>
          </div>
          <p>Subtotal: ${{ item.product.price * item.quantity }}</p>
        </div>
        <button @click="removeFromCart(index)" class="remove-button">
          Remove
        </button>
      </div>
      <p class="cart-total">Total: ${{ cartTotal }}</p>
      <button @click="checkout" class="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isCartOpen() {
      return this.$store.state.isCartOpen;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.commit("removeFromCart", index);
    },
    decrementQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      }
    },
    incrementQuantity(index) {
      this.cart[index].quantity++;
    },
    checkout() {
      // Implement your checkout logic here
      // For example, navigate to the checkout page
      this.$router.push("/checkout");
    },
  },
};
</script>

<style scoped>
/* Your shopping cart styling */
.shopping-cart {
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.cart-item {
  display: flex;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}
.item-details {
  display: flex;
  color: black;
  left: 5px;
}
.quantity-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
}

.cart-total {
  text-align: right;
  margin: 10px;
}

.checkout-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  float: right;
}
</style>
