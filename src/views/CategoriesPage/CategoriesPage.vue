<template>
  <section class="page">
    <h2>
      Welcome to Our Digital Universe: Tailored UI Elements for Every Web Realm!
    </h2>
    <!-- ecoomerce content -->
    <div
      class="cont-container"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div class="textContent">
        <h2>Revolutionize Your Online Store with E-Commerce Components!</h2>
        <h4>
          E-Commerce Components: Building Seamless Online Shopping Experiences
        </h4>
        <p>
          In the dynamic world of online retail, providing exceptional shopping
          experiences is paramount. Our E-Commerce Components are meticulously
          crafted to empower your online store with innovative features, sleek
          designs, and robust functionalities. Step into the Future of Online
          Retail! Our curated UI elements redefine the e-commerce experience.
          From sleek product cards to intuitive checkout forms, our designs
          ensure your online store stands out. Elevate customer engagement,
          enhance shopping journeys, and boost conversions. Explore Now!
        </p>
        <router-link class="a" to="/ecomweb">
          <a
            >Explore E-Commerce Website gleams.
            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span></a
        ></router-link>
      </div>
      <div class="mediaContent">
        <img
          class="ui-img"
          src="@/assets/categoriesMedia/ecom.png"
          alt="UI Element Image"
        />
      </div>
    </div>

    <!-- CRM content -->
    <div
      class="cont-container"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div class="mediaContent bg-color">
        <img src="@/assets/categoriesMedia/worktech.png" alt="" />
      </div>
      <div class="textContent bg-color">
        <h2>Empower Your Business with CRM Components!</h2>
        <h4>CRM Components: Elevating Customer Relationships to New Heights</h4>
        <p>
          In the age of customer-centricity, managing relationships effectively
          is pivotal to success. Our CRM Components offer a comprehensive suite
          of tools designed to transform your customer interactions. Transform
          Connections into Relationships! Our CRM-focused UI elements streamline
          customer interactions. With intuitive dashboards, interactive forms,
          and seamless navigation, managing relationships has never been easier.
          Empower your team, enhance productivity, and nurture lasting customer
          connections.From streamlined lead management and robust contact lists
          to efficient task tracking and insightful analytics, our CRM
          components are crafted to enhance every facet of your customer
          relationships.
        </p>
        <router-link class="a" to="/crmweb">
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

    <!-- gaming content -->
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      class="cont-container"
    >
      <div class="textContent">
        <h2>Gaming Wonderland.</h2>
        <h4>Level Up Your Gaming Interface!</h4>
        <p>
          In the world of gaming, user engagement is key. At Web-Gleams-Code,
          our UI elements are designed to create immersive experiences on gaming
          websites. From dynamic portfolio cards to engaging interactive
          elements and notification cards, our components level up your
          website's design.<br />

          Level Up Your Gaming Interface! Our gaming-oriented UI elements offer
          immersive experiences. Dynamic game cards, interactive leaderboards,
          and engaging user profiles enhance gameplay. Delight players,
          encourage social interaction, and create a gaming world like no other.
          Level Up with Us!
        </p>

        <router-link class="a" to="/gamingweb">
          <a
            >Gaming site UI Elements
            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span
          ></a>
        </router-link>
      </div>
      <div class="mediaContent">
        <img class="ui-img" src="@/assets/categoriesMedia/gaming.png" alt="" />
      </div>
    </div>

    <!-- analytics content -->
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      class="cont-container"
    >
      <div class="mediaContent bg-color">
        <div class="image">
          <img src="@/assets/categoriesMedia/seokeywrds.png" alt="" />
        </div>
      </div>
      <div class="textContent bg-color">
        <h2>
          Analytics Website Components: Unraveling Insights, One Component at a
          Time
        </h2>
        <h4>Explore Our Cutting-Edge Analytics Website Components!</h4>
        <p>
          At our Analytics Website, we believe in turning raw data into
          actionable insights. Our array of advanced components are meticulously
          designed to empower you with the tools needed to decipher complex data
          sets. From intuitive charts and interactive maps to machine learning
          algorithms and real-time monitoring, our components enable you to
          unlock the full potential of your data, transforming it into valuable
          business intelligence. In the world of data and analytics, clarity is
          essential. At Web-Gleams-Code, our UI elements are meticulously
          designed to enhance analytics websites. From clean dashboard elements
          to data visualization cards and filterable search bars, our components
          make insights accessible and engaging.
        </p>
        <router-link class="a" to="/analyticsweb">
          <a
            >View and match your need.
            <span
              ><i
                class="fa fa-arrow-circle-o-right"
                aria-hidden="true"
              ></i></span
          ></a>
        </router-link>
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
h2 {
  padding: 10px 30px;
  background-color: #f1f1f1;
  color: #28b173;
}
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
  width: 60%;
  padding: 20px 30px;
  background-color: #f1f1f1;
}
.textContent h2 {
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #28b173;
}
.textContent h4 {
  color: #28b173;
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
  width: 40%;
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
.content h4 {
  color: #28b173;
  text-align: left;
}
.caption {
  display: flex;
  align-items: center;
  margin-left: 20%;
}
.caption h1 {
  color: #28b173;
}

@media screen and (max-width: 678px) {
  h2 {
    text-align: center;
    font-size: 1.1rem;
  }
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
  .media-content {
    height: 45vh;
  }
  .text-content {
    padding: 20px;
  }
  .text-content .empower h3 {
    font-size: 1.4rem;
  }
  .multi-lines {
    width: 95%;
  }
  .multi-lines h4 {
    font-size: 1rem;
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
  .textContent .a {
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
