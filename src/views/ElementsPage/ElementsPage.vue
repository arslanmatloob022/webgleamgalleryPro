<template>
  <section class="page">
    <!-- headers content -->
    <div class="cont-container">
      <div class="textContent">
        <h2>
          Explore Header Excellence Elevate Your Website’s First Impression
        </h2>
        <h3>Elevate Your Website’s First Impression</h3>
        <p>
          Welcome to our Header Repository, where creativity meets
          functionality! Our curated selection of meticulously crafted website
          headers caters to every niche and style, ensuring that your website's
          first impression is nothing short of exceptional.
        </p>
        <h6>🚀 Why Choose Our Headers?</h6>
        <p>
          Versatility Redefined, Seamless Integration, Mobile-Friendly Magic,
          SEO-Friendly Brilliance, Customization Freedom and many more
          facilities!
        </p>
        <router-link class="a" to="/headers">
          <a
            >Watch choose and use the Headers.
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
            src="@/assets/elementsMedia/navbars.png"
            alt="UI Element Image"
          />
        </div>
      </div>
    </div>

    <!-- Cards content -->
    <div class="cont-container">
      <div class="mediaContent bg-color">
        <div class="image">
          <img
            style="height: 400px"
            src="@/assets/elementsMedia/cardsd.png"
            alt=""
          />
        </div>
      </div>
      <div class="textContent bg-color">
        <h2>Elevate Your Digital Presence</h2>
        <h3>Unveiling Our Card Collection!</h3>
        <p>
          Welcome to our versatile card collection, where stunning design meets
          seamless functionality, transforming ordinary websites into
          extraordinary digital experiences. Whether you're an e-commerce
          entrepreneur, a creative visionary, or a service provider, our diverse
          range of cards is crafted to suit your needs. From captivating product
          displays to engaging portfolios and authentic testimonials, our cards
          redefine online interactions.<br />
          We offers: 🛍️ Product Cards, 🎨 Portfolio Cards, 🌟 Testimonial Cards
          and many more!
        </p>
        <router-link class="a" to="/productcards">
          <a
            >Watch and explore the cards here.
            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span></a
        ></router-link>
      </div>
    </div>

    <!-- Searchbars content -->
    <div class="cont-container">
      <div class="textContent">
        <h2>Discover Seamless Search: Where Functionality Meets Style!</h2>
        <h3>🔍 Embrace the future of search with our visual search bars!</h3>
        <p>
          Introducing our diverse range of search bars designed to elevate user
          experience and add a touch of sophistication to your website. Whether
          you're running an e-commerce platform, a content-rich blog, or a
          corporate site, our stylish search bars are crafted to suit various
          needs and preferences.
        </p>
        <h6>🚀 Why Choose Our Search Bars?</h6>
        <p>
          Aesthetic Appeal, Effortless Integration, Enhanced User Engagement,
          and many more of types are ready to redefine your website's search
          functionality
        </p>
        <router-link class="a" to="/searchbars">
          <a
            >Visit and check UI Elements
            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span
          ></a>
        </router-link>
      </div>
      <div class="mediaContent">
        <div class="image">
          <img
            class="ui-img"
            src="@/assets/elementsMedia/searchbars.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- sidebars content -->
    <div class="cont-container">
      <div class="mediaContent bg-color">
        <div class="image">
          <img src="@/assets/elementsMedia/sidebars.png" alt="" />
        </div>
      </div>
      <div class="textContent bg-color">
        <h2>
          Navigate Seamlessly: Introducing Our Versatile Sidebar Collection!
        </h2>
        <h3>Tailor our sidebars to match your brand's identity!</h3>
        <p>
          Welcome to our Sidebar Sanctuary, where intuitive navigation meets
          stunning design. Whether you're managing a corporate website, a
          creative portfolio, or an e-commerce empire, our versatile sidebar
          collection is crafted to enhance user experience, ensuring smooth
          journeys and effortless exploration of your content.<br />
          🌟 Classic Sidebar, 🚀 Interactive Sidebar, 🎨 Customizable Sidebar,
          🌐 Multilevel Sidebar, 🔍 Filterable Sidebar and many more are
          available.!
        </p>
        <router-link class="a" to="/sidebars">
          <a
            >View Learninig gateway and Resources.

            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span
          ></a>
        </router-link>
      </div>
    </div>

    <!-- buttons content -->
    <div class="cont-container">
      <div class="textContent bg-color">
        <h2>
          Button Brilliance: Explore Our Diverse Collection for Every Web
          Experience!
        </h2>
        <h3>Ready to transform user interactions?</h3>
        <p>
          Welcome to our Button Emporium, where functionality meets flair! No
          matter the vibe of your website – corporate, creative, or commercial –
          our versatile button collection is tailored to elevate your user
          interactions. Crafted to perfection, each button style ensures
          intuitive navigation, encouraging clicks and conversions.<br />
          🌟 Creative Buttons, 🚀 Gaming buttons, 🎨 Customizable buttons,
          Transparent buttons that can be use in any types of website are
          available.!
        </p>
        <router-link class="a" to="/buttons">
          <a
            >View Learninig gateway and Resources.

            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span
          ></a>
        </router-link>
      </div>
      <div class="mediaContent bg-color">
        <div class="image">
          <img src="@/assets/elementsMedia/buttons.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #28b173;
}
.textContent h3 {
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
  width: 80%;
  height: 100%;
}
.mediaContent img {
  width: 100%;
  height: 90%;
}
/*Second section custom styling*/
/*Hero Banner styling*/
.main {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
}
.content h3 {
  color: #f1f1f1;
  text-align: left;
}
.caption {
  display: flex;
  align-items: center;
  margin-left: 20%;
}
.caption h2 {
  position: sticky;
}
.caption h1 {
  color: #2beb95;
}

@media screen and (max-width: 768px) {
  .content h3 {
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
  h3 {
    font-size: calc(1rem + 1vw);
  }
  .textContent h3 {
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
