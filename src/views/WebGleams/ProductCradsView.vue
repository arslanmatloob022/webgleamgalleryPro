<template>
  <section>
    <!-- Colors gradient animations -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Product Card For E-Commerce Website</h3>
        </div>

        <div class="form-imgs">
          <first-product-card-vue class=""></first-product-card-vue>
        </div>
      </div>
      <div class="text-content">
        <h3>Product Card For E-Commerce Website</h3>
        <p>
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms. So here we offers all types of
          Login/Signup forms for all types of Applications. <br />Here we
          present you a simple, responsive and attractive Login/Signup forms.
          And you can text them clicking on <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Colors gradient animations -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Product Card For E-Commerce Website</h3>
        </div>

        <div class="form-imgs">
          <second-product-card-vue class=""></second-product-card-vue>
        </div>
      </div>
      <div class="text-content">
        <h3>Product Card For E-Commerce Website</h3>
        <p>
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms. So here we offers all types of
          Login/Signup forms for all types of Applications. <br />Here we
          present you a simple, responsive and attractive Login/Signup forms.
          And you can text them clicking on <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Colors gradient animations -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Product Card For E-Commerce Website</h3>
        </div>

        <div class="form-imgs">
          <third-product-card-vue class=""></third-product-card-vue>
        </div>
      </div>
      <div class="text-content">
        <h3>Product Card For E-Commerce Website</h3>
        <p>
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms. So here we offers all types of
          Login/Signup forms for all types of Applications. <br />Here we
          present you a simple, responsive and attractive Login/Signup forms.
          And you can text them clicking on <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Colors gradient animations -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Product Card For E-Commerce Website</h3>
        </div>

        <div class="form-imgs">
          <fourth-product-card-vue class=""></fourth-product-card-vue>
        </div>
      </div>
      <div class="text-content">
        <h3>Product Card For E-Commerce Website</h3>
        <p>
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms. So here we offers all types of
          Login/Signup forms for all types of Applications. <br />Here we
          present you a simple, responsive and attractive Login/Signup forms.
          And you can text them clicking on <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Colors gradient animations -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Product Card For E-Commerce Website</h3>
        </div>

        <div class="form-imgs">
          <fifth-product-card-vue class=""></fifth-product-card-vue>
        </div>
      </div>
      <div class="text-content">
        <h3>Product Card For E-Commerce Website</h3>
        <p>
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms. So here we offers all types of
          Login/Signup forms for all types of Applications. <br />Here we
          present you a simple, responsive and attractive Login/Signup forms.
          And you can text them clicking on <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import FirstProductCardVue from "@/components/WebGleams/ProductCard/FirstProductCard.vue";
import SecondProductCardVue from "@/components/WebGleams/ProductCard/SecondProductCard.vue";
import ThirdProductCardVue from "@/components/WebGleams/ProductCard/ThirdProductCard.vue";
import FourthProductCardVue from "@/components/WebGleams/ProductCard/FourthProductCard.vue";
import FifthProductCardVue from "@/components/WebGleams/ProductCard/FifthProductCard.vue";
export default {
  name: "ProductCardsView",

  data() {
    return {};
  },
  components: {
    FirstProductCardVue,
    SecondProductCardVue,
    ThirdProductCardVue,
    FourthProductCardVue,
    FifthProductCardVue,
  },
};
</script>

<style scoped>
.container-box {
  background-color: #eeeeee;
  margin-top: 20pt;
  width: 100%;
  display: -webkit-flex;
  height: max-content;
}
.media {
  width: 50%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  padding: 20pt 10pt;
  background-color: #eeeeee;
}

.media-header {
  padding: 2px 8px;
  width: 100%;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
}
.showBtn {
  padding: 4pt 6pt;
  border-radius: 4px;
  font-size: 0.8rem;
  background-color: #f26419;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.showBtn:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 1px 1px #f26419;
}
.media-header h3 {
  font-family: "Playfair Display", "AR One Sans", sans-serif;
  color: #000000;
}
.form-imgs {
  width: 100%;
  padding: 10px 30px;
  background-color: #eeeeee;
  display: -webkit-flex;
  border-radius: 8px;
  gap: 26px;
}
.form-imgs img {
  width: 50%;
  height: 260pt;
}
.media button {
  margin: 20px;
}
.text-content {
  padding: 40pt;
  width: 50%;
}
.text-content h3 {
  margin-top: 20pt;
}
.text-content p {
  font-family: "Onest", "AR One Sans", sans-serif;
  font-size: 1.2rem;
}
.links {
  display: -webkit-flex;
  gap: 12pt;
}
.links button {
  border-radius: 6px;
  padding: 4pt 6pt;

  color: #ffffff;
  transition: all 0.2s ease-in-out;
}
.code-btn {
  border: #1370eb;
  background-color: #267ff3;
}
.tutorial-btn {
  border: #b2071d;
  background-color: #b2071d;
}

.links button:hover {
  transform: scale(1.02);
}

@media screen and (max-width: 868px) {
  .container-box {
    flex-direction: column;
  }
  .media {
    width: 100%;
    height: 50%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8pt 6pt;
  }
  .showBtn {
    padding: 2pt 4pt;
  }
  .media-header h3 {
    font-family: "Playfair Display", "AR One Sans", sans-serif;
    color: #0055c5;
    font-size: 1.2rem;
  }

  .form-imgs img {
    width: 140pt;
    height: 160pt;
  }
  .text-content {
    padding: 10pt;
    width: 100%;
  }
  .text-content p {
    font-family: "Onest", "AR One Sans", sans-serif;
    font-size: 0.7rem;
  }
  .links {
    display: -webkit-flex;
    gap: 8pt;
  }
  .links button {
    border-radius: 4px;
    padding: 2pt 4pt;
    font-size: 0.8rem;
  }
}
</style>
