<template>
  <section class="page">
    <!-- headers content -->
    <div class="cont-container">
      <div class="textContent">
        <h2>Embark on Your Vue.js Journey!</h2>
        <h4>Master the Basics of Vue.js!</h4>
        <p>
          Welcome to our Vue.js learning hub, designed especially for beginners
          like you. Vue.js is a powerful and intuitive JavaScript framework that
          simplifies building dynamic user interfaces. Whether you're a budding
          developer or a curious enthusiast, our beginner-friendly Vue.js
          tutorials will guide you through the basics, helping you master the
          art of web development.<br />
          Understanding the core concepts of Vue.js is your key to unlocking the
          full potential of this versatile framework. Our Vue.js Fundamentals
          section covers everything you need to know, from Vue instance creation
          to component development.
        </p>
        <router-link class="a" to="/learnings">
          <a
            >Learn and become the master in vue.Js
            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span></a
        ></router-link>
      </div>
      <div class="mediaContent">
        <div class="image">
          <img
            class="ui-img"
            src="@/assets/LearningsMedia/VueLearn.png"
            alt="Learn Vue.js"
          />
        </div>
      </div>
    </div>
    <amp-ad
      width="100vw"
      height="320"
      type="adsense"
      data-ad-client="ca-pub-8669892053343108"
      data-ad-slot="7266400903"
      data-auto-format="rspv"
      data-full-width=""
    >
      <div overflow=""></div>
    </amp-ad>

    <div class="cont-container">
      <div class="textContent">
        <h2>Chart Your Path to Full Stack Mastery!</h2>
        <h4>Learn and know the basics of Full-Stack Development</h4>
        <p>
          Becoming a full stack developer is a transformative journey, and at
          Web-Gleams-Gallery, we're here to guide you every step of the way. Our
          comprehensive Full Stack Developer Roadmaps are meticulously crafted
          blueprints designed to help you navigate the complex world of web
          development. Whether you're aspiring to master MERN, MEAN, or any
          other stack, our roadmaps provide clear milestones, recommended
          resources, and hands-on projects to accelerate your learning.
        </p>
        <router-link class="a" to="/fullstack">
          <a
            >Learn and know the Roadmaps.
            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span></a
        ></router-link>
      </div>
      <div class="mediaContent">
        <div class="image">
          <img
            class="ui-img"
            src="@/assets/LearningsMedia/fullstack.png"
            alt="Lear Vue.js"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "learningsPage",
};
</script>
<style scoped>
.page {
  width: 100%;
  background-color: #ffffff;
}

.cont-container {
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
}
.textContent {
  overflow: visible;
  width: 50%;
  padding: 20px 30px;
  background-color: #f1f1f1;
}
.textContent h2,
h4 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #28b173;
}
.textContent h4 {
  color: #202020;
  padding: 6pt 0pt;
}
.textContent p {
  color: #202020;
  font-size: 1rem;
  padding: 0pt 10pt;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.textContent .a {
  font-weight: 600;
  margin-left: 20%;
  text-align: center;
  text-decoration: none;
  color: #28b173;
}
.textContent .a a {
  text-decoration: none;
}

.mediaContent {
  width: 50%;
  padding: 10px 10px;
  background-color: #f1f1f1;
}
.mediaContent .image {
  left: 0;
  width: 80%;
  height: 80%;
}
.mediaContent .image img {
  left: 0;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .content h4 {
    text-align: left;
    font-size: 1rem;
  }
  .caption {
    display: flex;
    align-items: center;
    margin-left: 5%;
  }
  .caption h2 {
    font-size: 0.8rem;
    position: sticky;
  }
  .caption h1 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .cont-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .textContent {
    overflow: hidden;
    width: 100%;
    padding: 10px 16px;
  }
  .textContent h2,
  h4 {
    font-size: calc(1rem + 1vw);
  }
  .textContent h4 {
    padding: 10pt 0pt;
  }
  .textContent p {
    font-size: 0.7rem;
  }
  .textContent a {
    font-size: 0.8rem;
  }

  .mediaContent {
    width: 100%;
    padding: 10px 16px;
  }
  .ui-img {
    width: 90%;
    height: 200px;
  }
}
</style>
