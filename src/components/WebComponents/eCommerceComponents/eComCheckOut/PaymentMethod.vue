<template>
  <div class="main">
    <div class="shippingForm">
      <h2>Step 3: Payment Methods</h2>

      <!-- Payment Methods List -->
      <ul>
        <li v-for="method in paymentMethods" :key="method.id">
          <label>
            <input type="radio" v-model="selectedMethod" :value="method.id" />
            {{ method.name }}
          </label>
        </li>
      </ul>

      <!-- Proceed button -->
      <button @click="selectPaymentMethod">
        Continue
        <span
          >fa <i class="fa fa-chevron-circle-right" aria-hidden="true"></i
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedMethod: {
      get() {
        return this.$store.getters["selectedPaymentMethod"];
      },
      set(methodId) {
        this.$store.commit("updateSelectedPaymentMethod", methodId);
      },
    },
    paymentMethods() {
      return this.$store.getters["paymentMethods"];
    },
  },
  methods: {
    selectPaymentMethod() {
      const methodId = this.selectedMethod;
      // Dispatch an action to select the payment method
      this.$store.dispatch("selectedPaymentMethod", methodId);

      // Navigate to the next step (Order Summary)
      this.$router.push("/summary");
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
