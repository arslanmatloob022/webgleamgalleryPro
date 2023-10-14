<template>
  <section class="gallery-view row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12 galleryOne">
      <div class="gallery-content">
        <h2>
          Experience Elevated Web Design with Our Dynamic Header Components
        </h2>
        <h4>
          Elevate Your Web Projects with <i><b>Web-Gleam-Gallery</b></i> Headers
        </h4>
        <p>
          At <i>Web-Gleam-Gallery Headers</i>, we understand the critical role
          headers play in web design. Our meticulously crafted header components
          offer the perfect blend of aesthetics and functionality, elevating
          your website's appeal and user experience. From sleek and minimalistic
          to bold and interactive, our collection of headers provides a solution
          for every web project.
        </p>
      </div>
      <div class="row product-cards">
        <div class="content-div">
          <EcomSecondHeader class="second-header margin-btm"></EcomSecondHeader>
          <div class="code-display col-lg-12 col-md-12 col-sm-12 col-12">
            <h3>Component Code</h3>

            <div class="row textAreas">
              <textarea
                id="html"
                class="code-textarea html-text-area col-lg-4 col-md-4 col-sm-6 col-12"
                rows="10"
                readonly
              >
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyShop</title>
    <!-- Include your CSS and JavaScript dependencies here -->
    <link rel="stylesheet" href="your-styles.css">
</head>
<body>
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
            <div class="search-icon">
                <i class="uil uil-search"></i>
            </div>
            <div class="cart-icon">
                <i class="fa fa-shopping-cart fa-2x"></i>
                <span class="cart-items">0</span>
                <div class="cart-dropdown">
                    <div class="user-data">
                        <img src="../Images/e1.jpg" alt="" srcset="" />
                        <a href="">HeadPhone</a><span><p>$16</p></span>
                    </div>
                    <!-- Repeat the user-data section as needed -->
                </div>
            </div>
            <div class="user-icon">
                <i class="fa fa-user fa-2x fa-fade"></i>
                <div class="user-dropdown">
                    <div class="user-data">
                        <i class="fa fa-user"></i>
                        <a href="">My Account</a>
                    </div>
                    <!-- Repeat the user-data section as needed -->
                </div>
            </div>
        </header>

        <div class="search-overlay">
            <div class="search-container">
                <input type="text" placeholder="Search" />
                <i class="uil uil-search"></i>
            </div>
        </div>
    </div>

    <!-- Include your JavaScript scripts here -->
    <script src="your-scripts.js"></script>
</body>
</html>
</textarea
              >
              <textarea
                id="css"
                class="code-textarea css-text-area col-lg-4 col-md-4 col-sm-6 col-12"
                rows="10"
                readonly
              >
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
}</textarea
              >

              <textarea
                id="js"
                class="code-textarea col-lg-4 col-md-4 col-sm-6 col-12"
                rows="10"
                readonly
              >
// Define a function to handle the component's data and methods
function EcomSecondHeader() {
  // Initialize data properties
  this.cartItems = 3; // Example
  this.cartOpen = false;
  this.userMenuOpen = false;
  this.searchOverlayOpen = false;
  this.searchQuery = "";

  // Define methods
  this.toggleCart = function () {
    this.cartOpen = !this.cartOpen;
  };

  this.toggleUserMenu = function () {
    this.userMenuOpen = !this.userMenuOpen;
  };

  this.toggleSearchOverlay = function () {
    this.searchOverlayOpen = !this.searchOverlayOpen;
    console.log("Pressed");
  };
}

// Create an instance of the component
const ecomSecondHeader = new EcomSecondHeader();

// Example usage:
// To access data properties:
console.log(ecomSecondHeader.cartItems);
// To call methods:
ecomSecondHeader.toggleCart();
</textarea
              >
            </div>

            <div class="cc-code-buttons copy-code-btn">
              <button
                id="copy-html-btn"
                class="copy-code-btn"
                @click="copyHtmlCode()"
              >
                Copy HTML
              </button>
              <button
                id="copy-css-btn"
                class="copy-code-btn"
                @click="copyCssCode()"
              >
                Copy CSS
              </button>
              <button
                id="copy-js-btn"
                class="copy-code-btn"
                @click="copyJsCode()"
              >
                Copy .Js
              </button>
            </div>
          </div>
        </div>

        <!-- Second header -->
        <div class="content-div">
          <EcomHeader class="margin-btm"></EcomHeader>
          <div class="code-display col-lg-12 col-md-12 col-sm-12 col-12">
            <h2>Component Code</h2>

            <div class="row textAreas">
              <!-- HTML TExt Area -->
              <textarea
                id="html"
                class="code-textarea html-text-area col-lg-4 col-md-4 col-sm-6 col-12"
                rows="10"
                readonly
              >
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="your-styles.css"> <!-- Include your stylesheet here -->
    <title>DotShop</title>
</head>
<body>
    <div class="header">
        <div class="logo">
            <i class="fas fa-store"></i>
            DotShop
        </div>
        <div class="nav">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">Contact</a>
        </div>
        <div class="search">
            <input
                type="text"
                placeholder="Search"
                id="searchQuery" 
                onfocus="showSearchDropdown()"
            />
            <div class="search-dropdown" id="searchDropdown" style="display: none;"> <!-- Use id instead of v-if for plain HTML -->
                <!-- Search results go here -->
            </div>
        </div>
        <div class="cart" onmouseenter="openCart()" onmouseleave="closeCart()"> <!-- Use onmouseenter and onmouseleave instead of @mouseenter and @mouseleave -->
            <i class="fa fa-shopping-cart fa-fade"></i>
            Cart (<span id="cartItems">0</span>)
            <div class="cart-dropdown" id="cartDropdown" style="display: none;"> <!-- Use id instead of v-if for plain HTML -->
                <div class="user-data">
                    <img src="../Images/e1.jpg" alt="" srcset="" />
                    <a href="">HeadPhone</a><span><p>$16</p></span>
                </div>
                <div class="user-data">
                    <img src="../Images/e1.jpg" alt="" srcset="" />
                    <a href="">HeadPhone</a><span><p>$16</p></span>
                </div>
            </div>
        </div>
        <div class="user">
            <i class="uil uil-user"></i>
            <span id="userStatus">Login / Signup</span> <!-- Use span and id instead of Vue.js curly braces for plain HTML -->
        </div>
    </div>
    <script src="your-scripts.js"></script> <!-- Include your JavaScript file here -->
</body>
</html>
</textarea
              >

              <!-- CSS Text Area -->
              <textarea
                id="css"
                class="code-textarea css-text-area col-lg-4 col-md-4 col-sm-6 col-12"
                rows="10"
                readonly
              >
.arrow {
  font-size: 13px;
}

.header {
  z-index: 1000;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #2a9d8f;
  padding: 10px 20px;
  border-bottom: 1px solid #ec310f52;
}

.logo-div {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.logo {
  height: 45px;
  width: 45px;
}
.links {
  display: flex;
  gap: 25px;
}
.link {
  font-size: 20px;
  font-family: "DM Serif Display", serif;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
}
.linker {
  text-decoration: none;
}
.linker:hover {
  transition: all 0.1s ease-in-out;
  transform: scale(1.05);
}

.nav-buttons {
  display: flex;
  gap: 10px;
}
.nav-buttons button {
  cursor: pointer;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.nav-buttons button:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.05);
}
.login-btn {
  padding: 12px 16px;
  border-radius: 10px 0px 0px 10px;
  background-color: #f26419;
}
.subs-btn {
  background-color: #f6ae1d;
  border-radius: 0px 10px 10px 0px;
}
.menu-btn {
  display: none;
  cursor: pointer;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .links {
    display: none;
    flex-direction: column;
    background-color: #dde7dd;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    z-index: 1000;
  }

  .links.active {
    display: flex;
  }

  .menu-btn {
    display: block;
  }
}

/*  Drop down styling*/

.dropdown-menu {
  backdrop-filter: blur(5px);
  position: absolute;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  z-index: 1000;
}
.drop-heading {
  font-weight: bold;
  color: #f03b56;
  font-family: Arial, Helvetica, sans-serif;
}
.link-tab:hover {
  transform: scaleY(1.04);
  border-radius: 4px;
  background-color: #fcf1f2;
  transition: all 0.2s;
}

.single-link {
  margin-top: 16px;
}
.dropdown-link {
  font-size: calc(2px + 1vw);
  color: #f15766;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.dropdown-link:hover {
  color: #f15766;
  cursor: pointer;
}
.link-description-text {
  font-family: Arial, Helvetica, sans-serif;
  color: #f6ae1d;
}

.elements-dd {
  width: 60%;
  left: 20%;
}
.features-dd {
  width: 70%;
  left: 15%;
}

@media screen and (max-width: 768px) {
  .dropdown-menu {
    width: 90%;
    left: 5%;
  }
}

.dropdown-content {
  z-index: 1000;
  border-radius: 16px;
  gap: 10px;
  padding: 16px;
}
.dropdown-list {
  overflow: auto;
  word-wrap: break-word;
}
.single-tab {
  margin-bottom: 8px;
}
/* Features Column / MAster column*/
.master-column {
  border-radius: 4px;
  width: 100%;
  background-color: #f4ede4;
}
.master-content {
  width: 115%;
}
.master-heading {
  margin-top: 8px;
  font-weight: bold;
  color: #eb4758;
}
.feature-image {
  width: 100%;
}
.feature-image img {
  width: 100%;
  height: 40%;
}
.master-link-tab {
  margin-top: 12px;
}
.ai-feature-heading {
  margin-top: 10px;
}
.ai-feature-heading h5 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.ai-feature-heading a {
  text-decoration: none;
}
/* Dropdown Menu anmation*/
.dropdown-slide-enter-active {
  animation: slideDown 0.3s;
}

.dropdown-slide-leave-active {
  animation: slideUp 0.3s;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}</textarea
              >

              <textarea
                id="js"
                class="code-textarea col-lg-4 col-md-4 col-sm-6 col-12"
                rows="10"
                readonly
              >
// Define an object with properties and methods
const EcomHeader = {
  searchQuery: "",
  showDropdown: false,
  cartItems: 0,
  cartOpen: false,
  userLoggedIn: false,

  showSearchDropdown() {
    this.showDropdown = true;
  },

  openCart() {
    this.cartOpen = true;
  },

  closeCart() {
    this.cartOpen = false;
  },
};

// Usage:
document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners and initialize the component
  const searchInput = document.getElementById("searchQuery");
  const searchDropdown = document.getElementById("searchDropdown");
  const cartElement = document.querySelector(".cart");

  searchInput.addEventListener("focus", () => {
    EcomHeader.showSearchDropdown();
    // Update the view if needed
    updateView();
  });

  cartElement.addEventListener("mouseenter", () => {
    EcomHeader.openCart();
    // Update the view if needed
    updateView();
  });

  cartElement.addEventListener("mouseleave", () => {
    EcomHeader.closeCart();
    // Update the view if needed
    updateView();
  });

  // Function to update the view based on EcomHeader properties
  function updateView() {
    searchDropdown.style.display = EcomHeader.showDropdown ? "block" : "none";
    document.getElementById("cartItems").textContent = EcomHeader.cartItems;
    document.getElementById("userStatus").textContent = EcomHeader.userLoggedIn
      ? "My Account"
      : "Login / Signup";
  }

  // Initialize the view
  updateView();
});
</textarea
              >
            </div>

            <div class="cc-code-buttons copy-code-btn">
              <button
                id="copy-html-btn"
                class="copy-code-btn"
                @click="copyHtmlCode()"
              >
                Copy HTML
              </button>
              <button
                id="copy-css-btn"
                class="copy-code-btn"
                @click="copyCssCode()"
              >
                Copy CSS
              </button>
              <button
                id="copy-js-btn"
                class="copy-code-btn"
                @click="copyJsCode()"
              >
                Copy .Js
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- This is the First Gallery view of card -->
    <div
      class="col-lg-12 col-md-12 col-sm-12 col-12 galleryOne"
      data-aos="fade-up"
    >
      <div class="gallery-content">
        <h2>This Is The Gallery View Of Product Card</h2>
        <h4>
          Discover Unmatched Shopping: Introducing Our Innovative Product Cards
        </h4>
        <p>
          Dive into a world of possibilities with our collection of sample
          product cards, tailor-made for eCommerce website developers. Unveil
          the future of online shopping through our interactive designs,
          showcasing hover animations, responsive layouts, and integrated review
          sections
        </p>
      </div>

      <!-- First Cards gallery -->
      <div class="row product-cards content-div" data-aos="fade-up">
        <eComStoreGallery
          class="col-lg-3 col-md-4 col-sm-12 col-12"
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></eComStoreGallery>

        <div class="code-display col-lg-6 col-md-12 col-sm-12 col-12">
          <h2>Component Code</h2>
          <div class="code-buttons">
            <button class="btn btn-secondary" @click="loadVueCode">
              Vue.js
            </button>
            <button class="btn btn-secondary" @click="loadReactCode">
              React.js
            </button>
            <button class="btn btn-secondary" @click="loadVanillaCode">
              Vanilla JS
            </button>
          </div>
          <textarea
            class="code-textarea"
            rows="10"
            readonly
            v-model="codeText"
          ></textarea>
          <button id="copy-code-btn" class="btn btn-warning" @click="copyCode">
            Copy
          </button>
        </div>
      </div>

      <!-- Second cards gallery -->
      <div class="row product-cards content-div" data-aos="fade-up">
        <eComGalleryTwo
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          class="margin-btm col-lg-3 col-md-6 col-sm-6 col-12"
          v-for="eproduct in eproducts"
          :key="eproduct.id"
          :eproduct="eproduct"
          @custom-event="eventHandler"
        >
        </eComGalleryTwo>
        <div class="code-display col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="code-buttons">
            <button class="btn btn-secondary" @click="loadVue">Vue.js</button>
            <button class="btn btn-secondary" @click="loadReact">
              React.js
            </button>
            <button class="btn btn-secondary" @click="loadVanilla">
              Vanilla JS
            </button>
          </div>
          <textarea
            class="code-textarea"
            rows="10"
            readonly
            v-model="TextCodes"
          ></textarea>
          <button id="copy-code-btn" @click="copySrcCode">Copy</button>
        </div>
      </div>
    </div>

    <div class="col-lg-12 col-md-12 col-sm-12 col-12 galleryOne">
      <div class="gallery-content margin-btm">
        <h2>
          Experience Elevated Web Design with Dynamic Product Card Components
        </h2>
        <h4>Elevate Your Web Projects with <i>Web-Gleam-Gallery Headers</i></h4>
        <p>
          At <i>Web-Gleam-Gallery Headers</i>, we understand the critical role
          headers play in web design. Our meticulously crafted header components
          offer the perfect blend of aesthetics and functionality, elevating
          your website's appeal and user experience. From sleek and minimalistic
          to bold and interactive, our collection of headers provides a solution
          for every web project.
        </p>
      </div>
      <ecom-home-page-vue class="home-page"></ecom-home-page-vue>
    </div>
  </section>
</template>

<script>
import eComStoreGallery from "@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/eComGallery.vue";
import eComGalleryTwo from "@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/eComGalleryTwo.vue";
import EcomHeader from "@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/eComHeaders/EcomWebHeader.vue";
import EcomSecondHeader from "@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/eComHeaders/EcomWebHeaderTwo.vue";
import EcomHomePageVue from "@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/HomePageElements/EcomHomePage.vue";
export default {
  name: "EComWeb",

  components: {
    eComStoreGallery,
    eComGalleryTwo,
    EcomHeader,
    EcomSecondHeader,
    EcomHomePageVue,
  },

  data() {
    return {
      // First gallery view Codes
      reactCode: `import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const addToCart = () => {
    alert("Product Added to Your Cart !");
  };

  const toggleLike = () => {
    setLiked(!liked);
    if (liked) {
      product.totalLikes++;
    } else {
      product.totalLikes--;
    }
  };

  const openSlider = () => {
    setSliderOpen(true);
  };

  const closeSlider = () => {
    setSliderOpen(false);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + product.images.length) % product.images.length
    );
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % product.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + product.images.length) % product.images.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % product.images.length);
  };

  const openDetails = () => {
    setDetailsOpen(true);
  };

  const closeDetails = () => {
    setDetailsOpen(false);
  };

  return (
    <section className="main">
      <div className="product-card">
        <div className="image-container">
          <img
            className="image-size"
            src={product.images[currentImage]}
            alt="Product"
            onClick={openSlider}
          />
          <div className="image-nav" onMouseOver={nextImage}>
            <button className="prev-btn" onClick={prevImage}>
              &#10094;
            </button>
            <button className="next-btn" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>

        <div className="product-card-content">
          <h3>{product.name}</h3>
          <div className="product-data">
            <p className="price">$ {product.price}</p>
            <p className="total-likes">{product.totalLikes} Likes</p>
          </div>
          <div className="action-btn">
            <button className="cart-btn" onClick={addToCart}>
              Add to Cart
            </button>
            <button
              className={like-btn '$'{liked ? 'liked' : ''}}
              onClick={toggleLike}
            >
              <span className="heart-icon">&#10084;</span>Like
            </button>
          </div>
          <button className="detail-btn" onClick={openDetails}>
            Details
          </button>
        </div>

        {sliderOpen && (
          <div className="image-slider">
            <button onClick={prevSlide} className="prev-slide-btn slide-btn">
              &#10094;
            </button>
            <img
              className="slider-img"
              src={product.images[currentSlide]}
              alt="Product"
            />
            <button onClick={nextSlide} className="next-slide-btn slide-btn">
              &#10095;
            </button>
            <button className="close-slider" onClick={closeSlider}>
              &times;
            </button>
          </div>
        )}

        {detailsOpen && (
          <div className="details-popup">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {/* Other product details */}
            <button onClick={closeDetails}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCard;


<Style>
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
  <Style>

`,

      vanillaCode: `<section class="main">
  <div class="product-card">
    <div class="image-container">
      <img class="image-size" src="" alt="Product" />
      <div class="image-nav">
        <button class="prev-btn">&#10094;</button>
        <button class="next-btn">&#10095;</button>
      </div>
    </div>
    <div class="product-card-content">
      <h3></h3>
      <div class="product-data">
        <p class="price">$ </p>
        <p class="total-likes"> Likes</p>
      </div>
      <div class="action-btn">
        <button class="cart-btn">Add to Cart</button>
        <button class="like-btn">
          <span class="heart-icon">&#10084;</span>Like
        </button>
      </div>
      <button class="detail-btn">Details</button>
    </div>
    <div class="image-slider">
      <button class="prev-slide-btn slide-btn">&#10094;</button>
      <img class="slider-img" src="" alt="Product" />
      <button class="next-slide-btn slide-btn">&#10095;</button>
      <button class="close-slider">&times;</button>
    </div>
    <div class="details-popup">
      <h3></h3>
      <p><!-- Product description --></p>
      <button class="close-details">Close</button>
    </div>
  </div>
</section>

// Script
document.addEventListener('DOMContentLoaded', () => {
  const productImage = document.querySelector('.image-size');
  const prevImageButton = document.querySelector('.prev-btn');
  const nextImageButton = document.querySelector('.next-btn');
  const productName = document.querySelector('.product-card-content h3');
  const productPrice = document.querySelector('.price');
  const totalLikes = document.querySelector('.total-likes');
  const addToCartButton = document.querySelector('.cart-btn');
  const likeButton = document.querySelector('.like-btn');
  const sliderImage = document.querySelector('.slider-img');
  const prevSlideButton = document.querySelector('.prev-slide-btn');
  const nextSlideButton = document.querySelector('.next-slide-btn');
  const closeButton = document.querySelector('.close-slider');
  const detailsButton = document.querySelector('.detail-btn');
  const detailsPopup = document.querySelector('.details-popup');
  const closeDetailsButton = document.querySelector('.close-details');

  let liked = false;
  let sliderOpen = false;
  let detailsOpen = false;
  let currentImage = 0;
  let currentSlide = 0;

  addToCartButton.addEventListener('click', () => {
    alert('Product Added to Your Cart !');
  });

  likeButton.addEventListener('click', () => {
    liked = !liked;
    if (liked) {
      totalLikes.textContent = parseInt(totalLikes.textContent) + 1 + ' Likes';
    } else {
      totalLikes.textContent = parseInt(totalLikes.textContent) - 1 + ' Likes';
    }
    likeButton.classList.toggle('liked');
  });

  productImage.addEventListener('click', () => {
    sliderOpen = true;
    updateSlider();
  });

  closeButton.addEventListener('click', () => {
    sliderOpen = false;
    updateSlider();
  });

  prevSlideButton.addEventListener('click', () => {
    currentSlide =
      (currentSlide - 1 + product.images.length) % product.images.length;
    updateSlider();
  });

  nextSlideButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % product.images.length;
    updateSlider();
  });

  detailsButton.addEventListener('click', () => {
    detailsOpen = true;
    updateDetails();
  });

  closeDetailsButton.addEventListener('click', () => {
    detailsOpen = false;
    updateDetails();
  });

  prevImageButton.addEventListener('click', () => {
    currentImage =
      (currentImage - 1 + product.images.length) % product.images.length;
    updateProduct();
  });

  nextImageButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) % product.images.length;
    updateProduct();
  });

  function updateProduct() {
    productImage.src = product.images[currentImage];
    nextImageButton.addEventListener('mouseover', nextImage);
  }

  function nextImage() {
    currentImage = (currentImage + 1) % product.images.length;
    updateProduct();
  }

  function updateSlider() {
    sliderImage.src = product.images[currentSlide];
    if (sliderOpen) {
      document.querySelector('.image-slider').style.display = 'block';
    } else {
      document.querySelector('.image-slider').style.display = 'none';
    }
  }

  function updateDetails() {
    if (detailsOpen) {
      detailsPopup.style.display = 'block';
    } else {
      detailsPopup.style.display = 'none';
    }
  }
});


// Styling
<Style>
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
        </Style>
      `.trim(),

      vueCode: `<template>
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

<scrooooipt>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      liked: false,
      sliderOpen: false,
      detailsOpen: false,
      currentImage: 0,
      currentSlide: 0,
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
</scrooooipt>

<style>
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
`.replace("oooo", ""),

      codeText: `<template>
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

<scrooooipt>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      liked: false,
      sliderOpen: false,
      detailsOpen: false,
      currentImage: 0,
      currentSlide: 0,
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
</scrooooipt>

<styoooole>
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
</stooooyle>
      `,

      TextCodes: `<template>
        // this is texts code
  <section class="main">
    <!-- <button @click="emitEvent">Emit Event</button> -->
    <div class="product-card">
      <div class="image-container">
        <img
          class="image-size"
          :src="eproduct.images[currentImage]"
          alt="Product"
          @click="openSlider"
        />
        <div class="image-nav">
          <button class="prev-btn" @click="prevImage" @mouseover="prevImage">
            &#10094;
          </button>
          <button class="next-btn" @click="nextImage" @mouseover="nextImage">
            &#10095;
          </button>
        </div>
      </div>

      <div class="product-card-content">
        <h3>{{ eproduct.name }}</h3>
        <div class="product-data">
          <p class="price">$ {{ eproduct.price }}</p>
          <div class="product-reviews">
            <div class="product-total-rating">
              <span class="total-rating-label">Rating:</span>
              <div class="total-rating-stars">
                <i
                  v-for="rating in 5"
                  :key="rating"
                  class="star-icon fa fa-star"
                  :class="{ 'rated-star': rating <= averageRating }"
                >
                </i>
              </div>
            </div>
          </div>
        </div>

        <div class="action-btn">
          <button class="cart-btn" @click="addToCart">
            Add to <span><i class="uil uil-shopping-cart-alt"></i></span>
          </button>
          <button class="detail-btn" @click="openDetails">Details</button>
          <button class="review-button like-btn" @click="toggleRating">
            <i class="fa fa-star"></i> Rate
          </button>
          <div v-if="showRating" class="rating-stars">
            <i
              v-for="rating in 5"
              :key="rating"
              class="star-icon fa fa-star"
              :class="{ active: rating <= selectedRating }"
              @click="rateProduct(rating)"
            >
            </i>
          </div>
        </div>
      </div>

      <div v-if="sliderOpen" class="image-slider">
        <button @click="prevSlide" class="prev-slide-btn slide-btn">
          &#10094;
        </button>
        <img
          class="slider-img"
          :src="eproduct.images[currentSlide]"
          alt="Product"
        />

        <button @click="nextSlide" class="next-slide-btn slide-btn">
          &#10095;
        </button>
        <button class="close-slider" @click="closeSlider">&times;</button>
      </div>

      <div v-if="detailsOpen" class="details-popup">
        <h3>{{ eproduct.name }}</h3>
        <p>{{ eproduct.description }}</p>
        <!-- Other product details -->
        <button @click="closeDetails">Close</button>
      </div>
    </div>
  </section>
</template>

<scrooooipt>
export default {
  name: "eComgalleryTwo",
  props: {
    eproduct: Object,
  },
  data() {
    return {
      showRating: false,
      selectedRating: 0,
      userRatings: [],
      sliderOpen: false,
      detailsOpen: false,
      currentImage: 0,
      currentSlide: 0,
    };
  },
  computed: {
    averageRating() {
      const totalRatings = this.userRatings.length;
      if (totalRatings === 0) {
        return 0;
      }
      const sumRatings = this.userRatings.reduce(
        (total, rating) => total + rating,
        0
      );
      return Math.round(sumRatings / totalRatings);
    },
  },
  methods: {
    // emitEvent() {
    //   this.$emit("custom-event", "Data from the child Comp");
    // },
    addToCart() {
      alter("Product Added to Cart !");
    },
    toggleRating() {
      this.showRating = !this.showRating;
    },
    rateProduct(rating) {
      this.selectedRating = rating;
      this.showRating = false; // Hide the rating stars after selection
      this.userRatings.push(rating); // Store the user's rating
    },
    openSlider() {
      this.sliderOpen = true;
    },
    closeSlider() {
      this.sliderOpen = false;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.eproduct.images.length) %
        this.eproduct.images.length;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.eproduct.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.eproduct.images.length) %
        this.eproduct.images.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.eproduct.images.length;
    },
    openDetails() {
      this.detailsOpen = true;
    },
    closeDetails() {
      this.detailsOpen = false;
    },
  },
};
</scrooooipt>

<style scoped>
.blur-button {
  opacity: 0.6;
}
.review-button {
  position: relative;
}
.rating-stars {
  font-size: 20px;
  right: 14px;
  bottom: 20px;
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease;
  border-radius: 8px;
  transform: scale(1.02);
  backdrop-filter: blur(8px);
}
.product-reviews {
  display: flex;
}
.product-total-rating {
  display: flex;
  align-items: center;
  color: #e44d26;
}
.star-icon {
  color: #e44d26;
}
.star-icon.rated-star {
  color: gold; /* Change the color for rated stars */
}
.main {
  position: relative;
}
.product-card {
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(228, 77, 38, 0.4);
}

.product-card:hover {
  transform: scale(1.05);
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
  transform: scale(1.2);
}
.product-data {
  display: flex;
  justify-content: space-between;
}

.image-nav {
  position: absolute;
  bottom: 40%;
  gap: 240px;
  transform: translateX(0%);
  display: flex;
  align-items: flex-end;
}

.image-nav button {
  padding: 1px;
  border: none;
  color: #fff;
  cursor: pointer;
}

.prev-btn {
  border-radius: 0 100% 100% 0;
}
.next-btn {
  border-radius: 100% 0 0 100%;
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
  border: 1px solid #e44d26;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px;
  background-color: #fff5f2;
  color: #e44d26;
  transition: background-color 0.3s ease;
}
.product-card button:active {
  border: 1px solid #c5371e;
}
.action-btn {
  display: flex;
  gap: 3px;
}
.action-btn .like-btn {
  gap: 5px;
  display: flex;
  align-items: center;
}
.action-btn button {
  padding: 4px;
}
.cart-btn {
  width: 35%;
  border-radius: 20px 0 0 20px;
}
.like-btn {
  width: 35%;
  border-radius: 0 20px 20px 0;
}

.like-btn:focus {
  outline: #c5371e;
  border: 1px solid #c5371e;
}
.detail-btn {
  width: 30%;
}

.product-card button:hover {
  background-color: #ffffff;
}

/* Product Likes*/

.liked-heart path {
  fill: red; /* Change to the desired color */
}
.heart-icon {
  width: 24px;
  height: 24px;
  fill: #888;
  transition: color 0.3s ease;
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
  font-size: 1.1rem;
  margin: 10px 0;
  color: #e44d26;
}

/* Image pop up slider*/
.image-slider {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 6px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider-img {
  height: 100%;
  width: 100%;
}
.image-slider img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}
.close-slider {
  width: 10%;
  left: 45%;
  padding: 1px 1px;
  border-radius: 10px;
}
.slide-btn {
  position: absolute;
  padding: 8px;
  width: 20px;
}
.prev-slide-btn {
  left: 0;
  border-radius: 0px 6px 6px 0px;
}
.next-slide-btn {
  right: 0;
  border-radius: 6px 0px 0px 6px;
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
`.replace("oooo", ""),

      // Products data
      products: [
        {
          id: 1,
          name: "Women Shoe",
          price: 100,
          description:
            "Here we write the description of the product, description may contains anything",
          images: [
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/shoe.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/high-heels.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/womens-shoes-.jpg"),
          ], // List of image file names
          totalLikes: 17,
        },
        {
          id: 2,
          name: "High Heels",
          price: 100,
          description:
            "Here we write the description of the product, description may contains anything",
          images: [
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/high-heels.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/shoe.jpg"),

            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/womens-shoes-.jpg"),
          ], // List of image file names
          totalLikes: 34,
        },
        // {
        //   id: 3,
        //   name: "Flip Flop",
        //   price: 100,
        //   description:
        //     "Here we write the description of the product, description may contains anything",
        //   images: [
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/shoe4.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/womens-shoes-.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/shoe.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/high-heels.jpg"),
        //   ], // List of image file names
        //   totalLikes: 96,
        // },
        // {
        //   id: 4,
        //   name: "Flip Flop",
        //   price: 80,
        //   description:
        //     "Here we write the description of the product, description may contains anything",
        //   images: [
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/shoe5.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/womens-shoes-.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/shoe.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/high-heels.jpg"),
        //   ], // List of image file names
        //   totalLikes: 96,
        // },
      ],
      eproducts: [
        {
          //Electronics Products Cards
          id: 6,
          name: "Headphone",
          price: 100,
          description:
            "Here we write the description of the product, description may contains anything",
          images: [
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e1.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e2.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e3.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e4.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e5.jpg"),
          ], // List of image file names
          totalLikes: 65,
        },
        {
          id: 7,
          name: "Camera Sensor",
          price: 100,
          description:
            "Here we write the description of the product, description may contains anything",
          images: [
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e5.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e1.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e2.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e3.jpg"),
            require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e4.jpg"),
          ], // List of image file names
          totalLikes: 34,
        },
        // {
        //   id: 8,
        //   name: "Camera (CANAN)",
        //   price: 100,
        //   description:
        //     "Here we write the description of the product, description may contains anything",
        //   images: [
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e4.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e5.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e1.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e2.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e3.jpg"),
        //   ], // List of image file names
        //   totalLikes: 96,
        // },
        // {
        //   id: 9,
        //   name: "Ear Phones",
        //   price: 80,
        //   description:
        //     "Here we write the description of the product, description may contains anything",
        //   images: [
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e3.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e4.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e5.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e1.jpg"),
        //     require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e2.jpg"),
        //   ], // List of image file names
        //   totalLikes: 96,
        // },
      ],
    };
  },

  methods: {
    /*eventHandler(data) {
      this.eventData = data;
    },*/

    loadReactCode() {
      this.codeText = this.reactCode.replace("'$'", "$");
    },
    loadVanillaCode() {
      this.codeText = this.vanillaCode;
    },
    loadVueCode() {
      this.codeText = this.vueCode.replace("oooo", "");
    },
    copyCode() {
      const textarea = document.createElement("textarea");
      textarea.value = this.codeText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      document.getElementById("copy-code-btn").innerHTML = "Copied";
    },
    copyHtmlCode() {
      const textarea = document.getElementById("html");
      const htmlCode = textarea.value;
      textarea.select(htmlCode);
      document.execCommand("copy");
      document.getElementById("copy-html-btn").innerHTML = "Copied";
    },
    copyCssCode() {
      const textarea = document.getElementById("css");
      const htmlCode = textarea.value;
      textarea.select(htmlCode);
      document.execCommand("copy");
      document.getElementById("copy-css-btn").innerHTML = "Copied";
    },
    copyJsCode() {
      const textarea = document.getElementById("js");
      const htmlCode = textarea.value;
      textarea.select(htmlCode);
      document.execCommand("copy");
      document.getElementById("copy-js-btn").innerHTML = "Copied";
    },
  },
};
</script>

<style scoped>
.gallery-view {
  padding: 0;
  margin: 0;
  margin-top: 40px;
  row-gap: 40px;
}
@font-face {
  font-family: "CustomFont";
  src: url("https://www.freepik.com/font/casanova") format("woff2"),
    url("https://www.freepik.com/font/casanova") format("woff");
  /* You can also include other font formats here like .ttf, .svg */
  font-weight: normal;
  font-weight: bold;
  font-style: normal;
  font-style: italic;
}

/*Code displayer styling*/
.code-display {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #faf0f0;
}

.code-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.code-buttons button {
  background-color: #2a9d90d0;
  border: 1px solid #2a9d90d0;
}
.code-textarea {
  width: 100%;
  padding: 10px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}
.cc-code-buttons {
  margin-top: 10px;
  display: flex;
  gap: 20px;
}

.copy-code-btn button,
#copy-code-btn {
  border: 1px solid #41fde786;
  border-color: #2a9d90d0;
  border-radius: 6px;
  padding: 8px 10px;
  color: #ffffff;
  background-color: #31afa0d0;
}
.copy-code-btn:active {
  border-color: #35ffe7fb;
}
/*This is first gallery view styling*/
.galleryOne {
  padding: 25px 10px;
  background-color: #2a9d9071;
}
.content-div {
  margin-top: 30px;
  background-color: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}
.gallery-content {
  border-radius: 8px;
  margin-top: 14px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery-content h2,
h4 {
  padding-top: 10px;
  font-family: "DM Serif Display", serif;
  text-align: center;
}
.gallery-content p {
  font-size: 18px;
  width: 80%;
  padding: 10px 20px;
  text-align: center;
  font-family: "Merriweather", serif;
}
@media screen and (max-width: 768px) {
  .gallery-content h2 {
    font-size: 1.4em;
  }
  .gallery-content h4 {
    font-size: 1em;
  }
  .gallery-content p {
    width: 98%;
    font-size: 0.8em;
  }
}
.margin-btm {
  margin-bottom: 30px;
}
.card {
  margin-top: 16px;
}
.home-page {
  width: 100%;
}

.product-cards {
  margin: 20px 0px;
}
.product-cards h5 {
  text-align: left;
}

/*Slide animation*/
</style>
