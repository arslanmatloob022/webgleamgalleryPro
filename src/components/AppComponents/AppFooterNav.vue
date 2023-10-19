<template>
  <section class="footerSection">
    <div class="row footerTop">
      <h1 class="footer-heading">
        See all you accomplish with WebGleamGallery
      </h1>
      <div class="row buttons"></div>
    </div>

    <div class="footerMenu row">
      <div class="col-lg-2 col-md-4 col-sm-12 col-12 footerLogo">
        <img src="" />
      </div>

      <!-- Why Slack section -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">Features</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">Channels</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Engagement</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Scale</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Watch Demo</p>
        </div>
      </div>
      <!-- Product Line -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">UI Elements</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">Integrations</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Enterprise</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Solutions</p>
        </div>
      </div>

      <!-- Resources List -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">Get Supers</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">Partners</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Developers</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Community</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Apps</p>
        </div>
        <div class="row">
          <p class="col-lg-12">BLog</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Help Center</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Events</p>
        </div>
      </div>
      <!-- Company Section -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">SERVICES</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">About Us</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Leadership</p>
        </div>
        <div class="row">
          <p class="col-lg-12">News</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Media Kit</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Careers</p>
        </div>
      </div>

      <!-- Pricing section -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">ABOUT</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">Plans</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Paid vs. Free</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppFooterNav",
};
</script>

<style scoped>
.footerSection {
  margin-top: 20px;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.footerTop {
  height: 280px;
  width: 100%;
  background-color: #27a596;
  border-radius: 0% 0% 50% 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scaleX(1.1);
}
.footerTop h1 {
  margin-top: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  font-size: calc(36px + 1vw);
}
.buttons {
  margin-top: 40px;
  width: 30%;
}
.footer-heading {
  text-align: center;
  word-wrap: break-word;
}
.trysalebtn {
  width: 100%;
}

/* Footer menu stylings*/
.footerMenu {
  width: 100%;
  height: auto;
  margin-top: 40px;
}
.footerLogo img {
  height: 60px;
  width: 60px;
}
.footHeading {
  font-weight: bold;
}
.menuText {
  margin-top: 10px;
  text-align: left;
}
@media (max-width: 667px) {
  .menuText {
    padding-left: 40px;
  }
}
.menuText .row p {
  display: inline-block;
  cursor: pointer;
}
</style>
