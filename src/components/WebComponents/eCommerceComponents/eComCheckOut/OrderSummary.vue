<template>
  <div class="main" id="DivToPrint">
    <div class="shippingForm">
      <h2><b>Order Summary</b></h2>
      <pre>{{ selectedShippingOption }}</pre>
      <div class="orderdata">
        <div class="shipping-infos">
          <h5><b></b> Shipping To</h5>
          <h6><b>Name:</b> Mr.{{ getShippingInfos.fullName }}</h6>
          <h6><b>Address :</b> {{ getShippingInfos.address }}</h6>
          <h6>
            <b>Billing Address :</b> {{ getShippingInfos.billingAddress }}
          </h6>
        </div>
        <hr style="width: 100%; text-align: left; margin-left: 0" />

        <div class="product">
          <h5>Order Items</h5>
          <!-- Display cart items -->
          <div v-for="(item, index) in cart" :key="index" class="product-dtl">
            <!-- Display item details here -->
            <div class="product-img">
              <img :src="item.product.image" alt="product Image" />
            </div>
            <div class="product-info">
              <p>{{ item.product.name }}</p>
              <p>Price:${{ item.product.price }}</p>
              <!-- Add more item details as needed -->
            </div>
          </div>
        </div>

        <hr style="width: 100%; text-align: left; margin-left: 0" />

        <div class="paymentSection">
          <h5>Payment</h5>
          <div>Products' Total: ${{ orderTotal.toFixed(2) }}</div>
          <div>Shipping Fee: ${{ shippingFee }}</div>
          <hr style="width: 50%; text-align: left; margin-left: 0" />
          <!-- Calculate and display total payment -->
          <div>Total Payment: ${{ calculateTotalPayment.toFixed(2) }}</div>
        </div>
        <!-- Display shipping fee -->

        <!-- Proceed button to complete the order -->
      </div>

      <div class="action-btn">
        <button @click="printDiv">
          Print Receipt
          <span><i class="fa fa-print" aria-hidden="true"></i></span>
        </button>

        <button @click="completeOrder">
          Confirm Order
          <span><i class="fa fa-check-circle" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      // Retrieve cart items from the Vuex store
      return this.$store.state.cart;
    },

    // retrive the shipping info
    getShippingInfos() {
      return this.$store.getters.getShippingInfo;
    },

    shippingFee() {
      return this.$store.getters.shippingFee;
    },
    orderTotal() {
      return this.$store.getters.orderTotal;
    },
    calculateTotalPayment() {
      // Calculate the total payment (including cart items and shipping fee)
      const subtotal = this.cart.reduce(
        (total, item) => total + item.product.price,
        0
      );
      return subtotal + this.shippingFee;
    },
  },
  methods: {
    completeOrder() {
      // After a successful order, you can clear the cart in the store
      this.$store.commit("clearCart");
      // Redirect to a thank-you page or another appropriate location
      this.$router.push("/ecomweb");
    },
    printDiv() {
      const divToPrint = document.getElementById("DivToPrint");

      // Check if the div is found
      if (divToPrint) {
        // Open the print dialog
        window.print();
      } else {
        alert("Div not found or unable to print.");
      }
    },
  },
};
</script>

<style scoped>
.orderdata {
  width: 90%;
  border-radius: 4px;
  background-color: #fff;
}
.main {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
h5 {
  text-align: center;
}
.product-dtl {
  gap: 6px;
  border-radius: 4px;
  display: flex;
}
.product-img {
  width: 60px;
  height: 60px;
}
.product-img img {
  border-radius: 4px;
  height: 100%;
  width: 100%;
}
.shipping-infos,
.product,
.paymentSection {
  padding: 16px;
}

.shipping-infos h4 {
  margin-bottom: 10px;
  text-decoration: underline;
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
.action-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.shippingForm button {
  margin-top: 10px;
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
