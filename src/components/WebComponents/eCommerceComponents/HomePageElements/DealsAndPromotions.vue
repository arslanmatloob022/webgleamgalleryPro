<template>
  <section class="deals">
    <h2>Deals and Promotions</h2>
    <div class="deal-content">
      <p>Save up to 50% on selected products this month.</p>
      <button class="btn btn-primary">View Deals</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "DealsAndPromotions",
};
</script>

<style scoped>
.deals {
  text-align: center;
  padding: 80px 0;
}

.deal-content {
  max-width: 600px;
  margin: 0 auto;
}

.deal-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #e44d26;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #ff6542;
}
</style>
