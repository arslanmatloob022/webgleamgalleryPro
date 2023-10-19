<template>
  <!-- CRM App-Header System -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3>App-Header for CRM System Application</h3>
      </div>

      <div class="headers-div">
        <app-top-nav class="header-view"></app-top-nav>
      </div>
    </div>
    <div class="text-content">
      <h3>App-Header for CRM System Application</h3>
      <p>
        Elevate your web development projects with our cutting-edge CRM system
        header component! Crafted with precision and designed for seamless
        integration, our header module simplifies the process for frontend web
        developers, ensuring an intuitive and responsive user experience.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- E-commerce App-Header -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3>App-Header for E-commeerce Websites</h3>
      </div>

      <div class="headers-div">
        <ecom-web-header class="header-view"></ecom-web-header>
      </div>
    </div>
    <div class="text-content">
      <h3>App-Header for E-commeerce Websites</h3>
      <p>
        Welcome to a world of seamless online shopping at your fingertips!
        Introducing our meticulously crafted e-commerce website header, where
        style meets functionality, and your shopping desires come to life.
        Explore a universe of possibilities with our feature-rich header
        component, designed to enhance your shopping journey in every way.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Entertainment App-Header -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3>App-Header for Entertainment Websites</h3>
      </div>

      <div class="headers-div">
        <second-top-nav class="header-view"></second-top-nav>
      </div>
    </div>
    <div class="text-content">
      <h3>App-Header for Entertainment Websites</h3>
      <p>
        Step into a world of excitement, laughter, and wonder with our vibrant
        entertainment website header. Get ready to embark on an exhilarating
        journey through the realms of movies, music, gaming, and more. Our
        header is your gateway to a universe of entertainment possibilities,
        designed to thrill, engage, and captivate every visitor. <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Entertainment App-Header -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3>App-Header for Entertainment Websites</h3>
      </div>

      <div class="headers-div">
        <third-top-nav class="header-view"></third-top-nav>
      </div>
    </div>
    <div class="text-content">
      <h3>App-Header for Entertainment Websites</h3>
      <p>
        Step into a world of excitement, laughter, and wonder with our vibrant
        entertainment website header. Get ready to embark on an exhilarating
        journey through the realms of movies, music, gaming, and more. Our
        header is your gateway to a universe of entertainment possibilities,
        designed to thrill, engage, and captivate every visitor. <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Entertainment App-Header -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3>App-Header for E-Commerce Websites</h3>
      </div>

      <div class="headers-div">
        <ecom-web-header-two class="header-view"></ecom-web-header-two>
      </div>
    </div>
    <div class="text-content">
      <h3>App-Header for E-Commerce Websites</h3>
      <p>
        Welcome to a world of seamless online shopping at your fingertips!
        Introducing our meticulously crafted e-commerce website header, where
        style meets functionality, and your shopping desires come to life.
        Explore a universe of possibilities with our feature-rich header
        component, designed to enhance your shopping journey in every way.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <button class="code-btn">Vanilla Js</button>
        <button class="code-btn">React.Js</button>
        <button class="code-btn">Vue.Js</button>
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppTopNav from "@/components/WebGleams/Headers/AppTopNav.vue";
import SecondTopNav from "@/components/WebGleams/Headers/SecondTopNav.vue";
import ThirdTopNav from "@/components/WebGleams/Headers/ThirdTopNav.vue";
import EcomWebHeader from "@/components/WebGleams/Headers/EcomWebHeader.vue";
import EcomWebHeaderTwo from "@/components/WebComponents/eCommerceComponents/eComHeaders/EcomWebHeaderTwo.vue";
export default {
  name: "HeadersView",
  data() {
    return {};
  },
  components: {
    AppTopNav,
    SecondTopNav,
    ThirdTopNav,
    EcomWebHeader,
    EcomWebHeaderTwo,
  },
};
</script>

<style scoped>
.container-box {
  background-color: #eeeeee;
  margin-top: 20pt;
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
  height: max-content;
}
.media {
  width: 100%;
  height: 50%;
  display: -webkit-flex;
  flex-direction: column;
  padding: 20pt 10pt;
  background-color: #eeeeee;
}

.header-view {
  width: 100%;
  border-radius: 10px;
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
.headers-div {
  width: 100%;
  padding: 10px 30px;
  background-color: #eeeeee;
  display: -webkit-flex;
  border-radius: 4px;
  gap: 26px;
}
.headers-div img {
  width: 50%;
  height: 260pt;
}
.media button {
  margin: 20px;
}
.text-content {
  padding: 10pt 40pt;
  width: 100%;
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

  .headers-div img {
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
