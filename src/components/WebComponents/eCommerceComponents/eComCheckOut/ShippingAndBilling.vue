<template>
  <div class="main">
    <form @submit.prevent="saveShippingInfo" class="shippingForm">
      <h2>Step 1: Shipping And Billing</h2>
      <label for="name">Full Name</label>
      <input
        type="text"
        id="name"
        class="common"
        v-model="shippingInfo.fullName"
        required
      />

      <label for="address">Enter Address </label>
      <textarea
        type="text"
        id="address"
        class="common"
        v-model="shippingInfo.address"
        required
      />

      <label for="billingAddress">Billing Address</label>

      <textarea
        type="text"
        id="billingAddress"
        class="common"
        v-model="shippingInfo.billingAddress"
        required
      />

      <button type="submit">
        Save and Continue
        <span>
          <i class="fa fa-chevron-circle-right" aria-hidden="true"></i
        ></span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    shippingInfo: {
      get() {
        return this.$store.state.shippingInfo;
      },
      Set(shippingInfo) {
        this.$store.commit("updateFullName", shippingInfo.fullName);
        this.$store.commit("updateAddress", shippingInfo.address);
        this.$store.commit("updateBilligAddress", shippingInfo.billingAddress);
      },
    },
  },
  methods: {
    saveShippingInfo() {
      this.$store.dispatch("saveShippingInfo");

      this.$router.push("/shipping-options");
    },
  },
};
</script>

<style scoped>
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
.shippingForm input {
  border-radius: 5px;
  width: 50%;
  margin-bottom: 20px;
}
.shippingForm textarea {
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
