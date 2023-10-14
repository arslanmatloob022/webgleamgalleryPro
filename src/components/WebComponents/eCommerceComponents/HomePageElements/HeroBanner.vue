<template>
  <section class="hero-banner">
    <div class="hero-content">
      <h1>Welcome to MyShop</h1>
      <p>Discover the latest trends in fashion and electronics.</p>
      <button class="btn btn-primary">Shop Now</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeroBanner",
};
</script>

<style scoped>
.hero-banner {
  background-image: url("../Images/e2.jpg");
  background-size: cover;
  background-position: center;
  color: rgb(22, 20, 20);
  text-align: center;
  width: 100%;
  padding: 150px 0;
  text-shadow: #e44d26;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 3px 3px 4px rgba(288, 121, 66, 0.4);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
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
