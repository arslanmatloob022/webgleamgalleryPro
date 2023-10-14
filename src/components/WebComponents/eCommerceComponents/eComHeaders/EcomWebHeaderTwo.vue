<template>
  <div class="main">
    <header class="main-header">
      <div class="logo"><i class="fas fa-store"></i> MyShop</div>
      <nav class="main-nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">Deals</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <div class="search-icon" @click="toggleSearchOverlay">
        <i class="uil uil-search"></i>
      </div>
      <div class="cart-icon" @click="toggleCart">
        <i class="fa fa-shopping-cart fa-2x"></i>
        <span class="cart-count">{{ cartItemCount }} </span>

        <!-- <div class="cart-dropdown" v-if="cartOpen">
          <div class="user-data">
            <img src="../Images/e1.jpg" alt="" srcset="" />
            <a href="">HeadPhone</a><span><p>$16</p></span>
          </div>
          <div class="user-data">
            <img src="../Images/e1.jpg" alt="" srcset="" />
            <a href="">HeadPhone</a><span><p>$16</p></span>
          </div>

          <div class="user-data">
            <img src="../Images/e1.jpg" alt="" srcset="" />
            <a href="">HeadPhone</a><span><p>$16</p></span>
          </div>
          <div class="user-data">
            <img src="../Images/e1.jpg" alt="" srcset="" />
            <a href="">HeadPhone</a><span><p>$16</p></span>
          </div>
        </div> -->
      </div>
      <!-- <e-com-cart-one v-if="isCartOpen" class="cart"></e-com-cart-one> -->

      <div class="shopping-cart" v-if="isCartOpen">
        <h2>Your Shopping Cart</h2>
        <div v-if="cart.length === 0"><p>Your cart is empty.</p></div>
        <div v-else>
          <div v-for="(item, index) in cart" :key="index" class="cart-item">
            <div class="item-details">
              <img :src="item.product.image" alt="Product Image" />
              <div class="price-div">
                <h5>{{ item.product.name }}</h5>
                <p>Price: ${{ item.product.price }}</p>
                <p>
                  Subtotal: ${{
                    (item.product.price * item.quantity).toFixed(2)
                  }}
                </p>
              </div>
            </div>

            <div class="product-btn">
              <div class="quantity">
                Quantity:
                <button
                  @click="decrementQuantity(index)"
                  class="quantity-button"
                >
                  -
                </button>
                {{ item.quantity }}
                <button
                  @click="incrementQuantity(index)"
                  class="quantity-button"
                >
                  +
                </button>
              </div>
              <button @click="removeFromCart(index)" class="remove-button">
                Remove
              </button>
            </div>
          </div>

          <p class="cart-total">Total: ${{ cartTotal }}</p>
          <button @click="checkout" class="checkout-button">
            Proceed to Checkout
            <span
              ><i class="fa fa-chevron-circle-right" aria-hidden="true"></i
            ></span>
          </button>
        </div>
      </div>

      <div class="user-icon" @click="toggleUserMenu">
        <i class="fa fa-user fa-2x fa-fade"></i>
        <div class="user-dropdown" v-if="userMenuOpen">
          <div class="user-data">
            <i class="fa fa-user"></i>
            <a href="">My Account</a>
          </div>
          <div class="user-data">
            <i class="fa fa-history" aria-hidden="true"></i>
            <a href="">Order History</a>
          </div>

          <div class="user-data">
            <i class="fa fa-map-marker"></i>
            <a href="">Trace Order</a>
          </div>
          <div class="user-data">
            <i class="fa fa-money"></i>
            <a href="">Total Purchase</a>
          </div>

          <div class="user-data">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <a href="">Logout</a>
          </div>
        </div>
      </div>
    </header>

    <div class="search-overlay" v-if="searchOverlayOpen">
      <div class="search-container">
        <input v-model="searchQuery" type="text" placeholder="Search" />
        <i class="uil uil-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EcomSecondHeader",
  data() {
    return {
      isCartOpen: false,
      userMenuOpen: false,
      searchOverlayOpen: false,
      searchQuery: "",
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cart.length;
    },
    isCartOpen() {
      // Get the cart's visibility from the Vuex store
      return this.$store.state.isCartOpen;
    },

    // CartJs
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.cart
        .reduce((total, item) => total + item.product.price * item.quantity, 0)
        .toFixed(3);
    },
  },
  methods: {
    toggleCart() {
      // Commit a mutation to toggle the cart state
      this.$store.commit("toggleCartVisibility");
    },
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen;
    },
    toggleSearchOverlay() {
      this.searchOverlayOpen = !this.searchOverlayOpen;
      console.log("Pressed");
    },

    // cart methods
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
.cart {
  position: absolute;
  z-index: 1;
}
/* Header styles */

.main {
  width: 100%;
}
.main-header {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  top: 0;
  position: relative;
  z-index: 100;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo i {
  font-size: 30px;
}

.main-nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.main-nav ul li a {
  text-decoration: none;
  color: white;
  transition: transform 0.5s ease-in-out;
  font-weight: bold;
}
.main-nav ul li {
  transition: transform 0.5s ease-in-out;
}
.main-nav ul li:hover {
  color: #e44d26;
  animation: rollUp 0.65s;
}

@keyframes rollUp {
  0% {
    transform: scaleX(-1);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

.search-icon {
  width: auto;
  height: 100%;
  cursor: pointer;
}
.search-icon i {
  color: #ccc;
  font-size: 24px;
}
.cart-icon {
  position: relative;
  cursor: pointer;
}
.user-icon {
  position: relative;
  cursor: pointer;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: 0;
  background-color: #e44d26;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

.cart-dropdown,
.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  display: none;
  animation: fadeIn 0.5s;
  display: flex;
  width: max-content;

  flex-direction: column;
}
.user-data {
  padding: 10px;
  gap: 10px;
  align-items: center;
  display: flex;
  margin-top: 10px;
}
.user-data img {
  width: 35px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid rgba(255, 101, 66, 0.5);
}
.user-data p {
  background-color: #ff6542;
  border-radius: 45%;
  color: #333;
}
.user-data:hover {
  border-radius: 6px;
  background-color: #ccc;
  transform: scale(1.03);
  transition: all ease-in-out 0.1s;
}
.user-data i {
  font-size: 22px;
  color: #e44d26;
}
.user-data a {
  color: #333;
  text-align: left;
  text-decoration: none;
}

.cart-icon:hover .cart-dropdown,
.user-icon:hover .user-dropdown {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Search overlay styles */
.search-overlay {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.6s, visibility 0.6s;
}
.search-overlay.open {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.4s, visibility 0.3s;
}
.search-container {
  background-color: rgb(146, 138, 138);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.search-container input[type="text"] {
  border: none;
  padding: 8px;
  width: 200px;
  outline: none;
  border-radius: 5px 0 0 5px;
}

.search-container i {
  padding: 8px;
  background-color: #e44d26;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-container i:hover {
  background-color: #ff6542;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .main-header {
    padding: 15px;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    animation: fadeIn 0.3s;
  }

  .main-nav.active {
    display: block;
  }

  .main-nav ul {
    flex-direction: column;
    gap: 10px;
  }

  .asis {
    display: block;
    padding: 8px 0;
  }

  .search-icon,
  .cart-icon,
  .user-icon {
    display: none;
  }
}

/*Cart Stylimg*/
/* Your shopping cart styling */
.shopping-cart {
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: 8px;
  color: #333;
  width: 300px;
  padding: 6px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.cart-item {
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.cart-item img {
  width: 90px;
  height: 90px;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 10px;
}
.price-div {
  display: flex;
  flex-direction: column;
  gap: -3px;
}
.item-details {
  display: flex;
  color: black;
  right: 5px;
  margin: 0;
}

.product-btn {
  display: flex;
  justify-content: space-between;
}
.quantity {
  color: #333;
}
.quantity-button {
  background-color: #f77032;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
}
.remove-button {
  border: #f77032;
  border-radius: 6px;
  color: #fff;
  background-color: #f77032;
}

.cart-total {
  text-align: right;
  margin: 10px;
  color: #333;
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
