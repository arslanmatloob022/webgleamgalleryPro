<template>
  <section class="testimonials">
    <div class="testimonial-list">
      <div class="testimonial">
        <img :src="testimony.image" :alt="testimony.name" />
        <p class="testimonial-text">{{ testimony.text }}</p>
        <p class="testimonial-name">{{ testimony.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialView",
  props: {
    testimony: Object,
  },
};
</script>

<style scoped>
.testimonials {
  text-align: center;
  padding: 80px 0;
}

.testimonial-list {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.testimonial {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
}

.testimonial img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 10px;
}

.testimonial-text {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.testimonial-name {
  font-weight: bold;
}
</style>
