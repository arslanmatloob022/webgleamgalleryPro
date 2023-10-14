import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    isCartOpen: false,

    // payment and billing
    fullName: "",
    address: "",
    billingAddress: "",
    shippingInfo: {},

    // shiiping Options
    selectedShippingOption: null,
    shippingOptions: [
      { id: 1, name: "Standard Shipping", price: 5.99 },
      { id: 2, name: "Express Shipping", price: 12.99 },
      { id: 3, name: "Overnight Shipping", price: 18.99 },
    ],

    // payment methods
    selectedPaymentMethod: null,
    paymentMethods: [
      { id: 1, name: "Credit Card" },
      { id: 2, name: "PayPal" },
      { id: 3, name: "Pay Fair" },
    ],

    // order Summary
    // cartItems: [],
  },

  mutations: {
    addToCart(state, product) {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ product, quantity: 1 });
      }
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    toggleCartVisibility(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    // Biiling & paymnet mutations
    updateFullName(state, fullName) {
      state.fullName = fullName;
    },
    updateAddress(state, address) {
      state.address = address;
    },
    updateBillingAddress(state, billingAddress) {
      state.billingAddress = billingAddress;
    },

    // shipping options
    updateSelectedShippingOption(state, option) {
      state.selectedShippingOption = option;
    },

    // payment methods
    updateSelectedPaymentMethod(state, methodId) {
      state.selectedPaymentMethod = methodId;
    },

    // summary
    updateCartItems(state, items) {
      state.cart = items;
    },
    clearCart(state) {
      state.cart = [];
    },
  },

  getters: {
    cartItemCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },

    // Shipping Info getters
    getShippingInfo(state) {
      return state.shippingInfo;
    },

    // shipping options
    selectedShippingOption(state) {
      return state.selectedShippingOption;
    },

    shippingFee(state) {
      const selectedOption = state.selectedShippingOption;
      if (selectedOption) {
        const shippingOption = state.shippingOptions.find(
          (option) => option.id === selectedOption
        );
        if (shippingOption) {
          return shippingOption.price;
        }
      }
      return 0;
    },

    shippingOptions(state) {
      return state.shippingOptions;
    },

    // payment methods
    selectedPaymentMethod(state) {
      return state.selectedPaymentMethod;
    },
    paymentMethods(state) {
      return state.paymentMethods;
    },

    // summary
    cart(state) {
      return state.cart;
    },
    orderTotal(state) {
      // Calculate the order total from cart items
      return state.cart.reduce((total, item) => total + item.product.price, 0);
    },
  },

  actions: {
    saveShippingInfo({ commit, state }) {
      commit("updateFullName", state.fullName);
      commit("updateAddress", state.address);
      commit("updateBillingAddress", state.billingAddress);
    },

    // shipping options
    selectShippingOption({ commit }, optionId) {
      // You can perform additional actions here, such as API calls
      commit("updateSelectedShippingOption", optionId);
    },

    // payment methods
    selectPaymentMethod({ commit }, methodId) {
      // You can perform additional actions here, such as API calls
      commit("updateSelectedPaymentMethod", methodId);
    },

    // summary
    updateCartItems({ commit }, items) {
      commit("updateCartItems", items);
    },
  },
});
