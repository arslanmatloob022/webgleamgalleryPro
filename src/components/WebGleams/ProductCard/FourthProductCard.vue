<template>
  <section class="main">
    <div class="product-card">
      <div class="image-container">
        <img
          class="image-size"
          :src="product.images[currentImage]"
          alt="Product"
          @click="openSlider"
        />
        <div class="image-nav" @mouseover="nextImage">
          <button class="prev-btn" @click="prevImage">&#10094;</button>
          <button class="next-btn" @click="nextImage">&#10095;</button>
        </div>
      </div>

      <div class="product-card-content">
        <h3>{{ product.name }}</h3>
        <div class="product-data">
          <p class="price">$ {{ product.price }}</p>
          <p class="total-likes">{{ product.totalLikes }} Likes</p>
        </div>
        <div class="action-btn">
          <button class="cart-btn" @click="addToCart">Add to Cart</button>
          <button
            class="like-btn"
            @click="toggleLike"
            :class="{ liked: liked }"
          >
            <span class="heart-icon">&#10084;</span>Like
          </button>
        </div>
        <button class="detail-btn" @click="openDetails">Details</button>
      </div>

      <div v-if="sliderOpen" class="image-slider">
        <button @click="prevSlide" class="prev-slide-btn slide-btn">
          &#10094;
        </button>
        <img
          class="slider-img"
          :src="product.images[currentSlide]"
          alt="Product"
        />

        <button @click="nextSlide" class="next-slide-btn slide-btn">
          &#10095;
        </button>
        <button class="close-slider" @click="closeSlider">&times;</button>
      </div>

      <div v-if="detailsOpen" class="details-popup">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <!-- Other product details -->
        <button @click="closeDetails">Close</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FourthProductCard",
  props: {},
  data() {
    return {
      liked: false,
      sliderOpen: false,
      detailsOpen: false,
      currentImage: 0,
      currentSlide: 0,
      product: {
        totalLikes: 18,
        name: "Mobile Phone",
        price: 100,
        description:
          "Here we will write the description of our product that help to define our product",
        images: [
          require("@/assets/Images/e1.jpg"),
          require("@/assets/Images/e2.jpg"),
          require("@/assets/Images/e3.jpg"),
        ],
      },
    };
  },
  methods: {
    addToCart() {
      alert("Product Added to Your Cart !");
    },
    toggleLike() {
      this.liked = !this.liked;
      if (this.liked) {
        this.product.totalLikes++;
      } else {
        this.product.totalLikes--;
      }
    },
    openSlider() {
      this.sliderOpen = true;
    },
    closeSlider() {
      this.sliderOpen = false;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.product.images.length) %
        this.product.images.length;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.product.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.product.images.length) %
        this.product.images.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.product.images.length;
    },
    openDetails() {
      this.detailsOpen = true;
    },
    closeDetails() {
      this.detailsOpen = false;
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
}
.product-card {
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-container {
  position: relative;
}

.image-container img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.image-size {
  width: 100%;
  height: 200px;
}

.image-container:hover img {
  transform: scale(1.1);
}
.product-data {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.image-nav {
  position: absolute;
  bottom: 10px;
  left: 50%;
  gap: 10px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}

.image-nav button {
  padding: 1px;
  border: none;
  color: #fff;
  cursor: pointer;
}

.prev-btn {
  border-radius: 10px 0 0 10px;
}
.next-btn {
  border-radius: 0 10px 10px 0;
}
.slide-btn {
  padding: 5px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.close-slider {
  position: absolute;
  width: 80px;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
}
.product-card button {
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px;
  background-color: #e44d26;
  color: white;
  transition: background-color 0.3s ease;
}

.action-btn {
  display: flex;
  gap: 3px;
}

.cart-btn button {
  border: none;
  margin-top: 3px;
  display: block;
  width: 50%;
  font-size: 1.2rem;
}

.cart-btn {
  width: 50%;
  border: none;
  border-radius: 20px 0 0 0;
  border-bottom: 1px solid #fff;
}
.like-btn {
  width: 50%;
  border: none;
  border-radius: 0 20px 0px 0;
  border-bottom: 1px solid #fff;
}
.detail-btn {
  border: none;
  width: 100%;
  border-radius: 0 0 5px 5px;
}

.product-card button:hover {
  background-color: #c5371e;
}

/* Product Likes*/
.liked {
  background-color: #e44d26;
  color: white;
}

.heart-icon {
  margin-right: 5px;
}

.total-likes {
  font-size: 1rem;
  color: #888;
}

.product-card-content {
  padding: 15px;
}

.product-card h3 {
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  transition: color 0.3s ease;
}

.product-card:hover h3 {
  color: #e44d26;
}

.product-card p.price {
  font-size: 1.3rem;
  margin: 10px 0;
  color: #e44d26;
}
.product-card p.total-likes {
  font-size: 1.3rem;
  margin: 10px 0;
  color: #e44d26;
}

/* Image pop up slider*/
.image-slider {
  height: 98%;
  width: 98%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-img {
  height: 600px;
  width: 240px;
}
.close-slider {
  width: 60px;
  left: 40%;
  padding: 6px;
  border-radius: 10px;
}
.slide-btn {
  position: absolute;
  padding: 5px;
  width: 20px;
}
.prev-slide-btn {
  left: 0;
}
.next-slide-btn {
  right: 0;
}

/* Product Detail Pop up*/
.details-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-slider img {
  max-height: 340px;
  max-width: 400px;
  border-radius: 10px;
}

.details-popup {
  width: 96%;
  height: 96%;
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  text-align: left;
}

.details-popup h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.details-popup p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.details-popup button {
  display: block;
  margin-top: 10px;
  background-color: #e44d26;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-popup button:hover {
  background-color: #c5371e;
}
</style>
