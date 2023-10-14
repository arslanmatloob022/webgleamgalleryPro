<template>
  <div class="main">
    <div class="shippingForm">
      <h2>Step 2: Shipping Options</h2>

      <!-- Shipping Options List -->
      <ul>
        <li v-for="option in shippingOptions" :key="option.id">
          <label>
            <input type="radio" v-model="selectedOption" :value="option.id" />
            {{ option.name }} - ${{ option.price }}
          </label>
        </li>
      </ul>

      <!-- Proceed button -->
      <button @click="selectShippingOption">
        Make Payment
        <span>
          <i class="fa fa-chevron-circle-right" aria-hidden="true"></i
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedOption: {
      get() {
        return this.$store.getters["selectedShippingOption"];
      },
      set(option) {
        this.$store.commit("updateSelectedShippingOption", option);
      },
    },
    shippingOptions() {
      return this.$store.getters["shippingOptions"];
    },
  },
  methods: {
    selectShippingOption() {
      const option = this.selectedOption;
      // Dispatch an action to select the shipping option
      this.$store.dispatch("selectShippingOption", option);

      // Navigate to the next step (Payment Methods)
      this.$router.push("/payment-methods");
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.main {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.shippingForm {
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  background-color: rgba(71, 185, 147, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.common {
  border: 2px solid #f3ba1d;
  margin-bottom: 20px;
  width: 50%;
  padding: 6px;
}
.shippingForm ul {
  list-style: none;
  border-radius: 5px;
  width: 60%;
  margin-bottom: 20px;
}
.shippingForm ul li {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(223, 252, 242);
}
.shippingForm label {
  color: #181716;
  font-size: 18px;
}
.shippingForm h2 {
  text-decoration: underline;
  margin-bottom: 10px;
}

.shippingForm button {
  padding: 5px 10px;
  color: white;
  background-color: orangered;
  border-radius: 4px;
  border: 1px solid #f3ba1d;
  transition: all 0.2s ease-in-out;
}

.shippingForm button:hover {
  transform: scale(1.05);
}
</style>
