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
        <img src="@/components/Media/Images/finalgleam.png" />
      </div>

      <!-- first column section -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">Features</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">Responsive UI</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Reactive Website</p>
        </div>
        <div class="row">
          <p class="col-lg-12">UI Elements</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Frontend Web</p>
        </div>
      </div>

      <!-- Second column -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">UI Elements</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">Login/Signup</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Cards</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Headers</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Footers</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Others</p>
        </div>
      </div>

      <!-- third List -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">Web Gleams</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">Background Anims</p>
        </div>
        <div class="row">
          <p href="/animations" class="col-lg-12">Loaders</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Elements Anims</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Links Anim</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Buttons Anim</p>
        </div>
      </div>

      <!-- Company Section -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">Web Devs</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">FE Utilities</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Pratices</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Utilities Links</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Learning Resources</p>
        </div>
        <div class="row">
          <p class="col-lg-12"></p>
        </div>
      </div>

      <!-- Pricing section -->
      <div class="col-lg-2 col-md-4 col-sm-6 col-6 menuText">
        <div class="row">
          <h6 class="col-lg-12 footHeading">ABOUT</h6>
        </div>
        <div class="row">
          <p class="col-lg-12">What we offers</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Paid vs. Free</p>
        </div>
        <div class="row">
          <p class="col-lg-12">Hire our team</p>
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
  font-size: calc(4rem + 1vw);
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
.menuText h6 {
  color: #27a596;
}
@media (max-width: 768px) {
  .footerTop {
    height: 180px;
  }
  .footerTop h1 {
    margin-top: 40px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: white;
    font-size: calc(1.6rem + 1vw);
  }
  .menuText {
    padding-left: 40px;
  }
}
.menuText .row p {
  display: inline-block;
  cursor: pointer;
}
</style>
