<template>
  <section class="footerRibbon row">
    <div class="col-lg-3 col-md-6 col-sm-6 col-6 ribbonSection">
      <h6 class="developer">Developed By:</h6>
      <h5>Arslan Matloob</h5>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6 col-6 ribbonSection">
      <i class="uil uil-envelope"> </i
      ><a href="mailto:raoarslanmatloob@gmail.com">Send Email</a>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6 col-6 ribbonSection">
      <i class="uil uil-linkedin"> </i>
      <a href="https://www.linkedin.com/in/raoarslanmatloob" target="_blank"
        >My LinkedIn</a
      >
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6 col-6 ribbonSection">
      <i class="uil uil-phone"></i>
      <a href="tel:+9230076626555 ">Phone Number</a>
    </div>
  </section>
</template>

<!-- This is Script Section -->
<script>
export default {
  name: "AppFooter",
  components: {},
};
</script>
<style scoped>
/* Footer menu stylings*/
.footerMenu {
  width: 100%;
  height: auto;
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

/* footer ribbon styling*/
.footerRibbon {
  margin: 0;

  background-color: whitesmoke;
  height: auto;
}
.ribbonSection {
  display: flex;
  justify-content: center;
  align-items: center;
}
.developer {
  text-decoration: wavy;
  color: #1f998b;
}
.ribbonSection h5 {
  font-weight: bold;
  color: #1f998b;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.ribbonSection i {
  margin-right: 8px;
  font-size: 24px;
  color: #1f998b;
}
.ribbonSection a {
  color: #1f998b;
  text-decoration: none;
}
</style>
