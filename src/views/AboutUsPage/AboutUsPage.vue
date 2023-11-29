<template>
  <section>
    <div class="content">
      <div class="text-content">
        <h1>What we conclude:</h1>
        <h3>
          <i class="fa fa-arrow-right" aria-hidden="true"></i> Full-Stack Web
          Development
        </h3>
        <br />
        <h3>
          <i class="fa fa-arrow-right" aria-hidden="true"></i> Frontend Web
          Development
        </h3>
        <br />
        <h3>
          <i class="fa fa-arrow-right" aria-hidden="true"></i> Backend Web
          Development
        </h3>
        <br />
        <h3>
          <i class="fa fa-arrow-right" aria-hidden="true"></i> All website
          components and templates
        </h3>
        <br />
        <h3>
          <i class="fa fa-arrow-right" aria-hidden="true"></i> Access to all
          website utilities
        </h3>
        <br />
        <h3>
          <i class="fa fa-arrow-right" aria-hidden="true"></i> Web Development
          Roadmaps and learnings
        </h3>
      </div>
      <div class="media-content">
        <img
          src="@/assets/Aboutus/webprocess.png"
          alt="web development"
          srcset=""
        />
      </div>
    </div>

    <div class="wd-content">
      <h3>For all these archives you got!</h3>
      <h1>Web Dazzels</h1>
    </div>

    <div class="content">
      <div class="text-content">
        <h1>How we solve:</h1>
        <h3>We Enforce Web Development</h3>
        <p>
          Enforce Web-Developers by giving them access to the Web-Development
          materials with source code.
        </p>
        <h3>Frontend Web Development</h3>
        <p>
          We offer the free website components and the custom website templates
          to our precious clients.
        </p>
        <h3>Backend Web Development</h3>
        <p>
          We offer the learning materials and roadmaps for the Backend
          Web-Developers, as well as the Roadmaps and Emerging technologies at
          single plateform
        </p>
        <h3>All website components and templates</h3>
        <p>
          We offer free website components to our visitors and full customise
          websites' templates.
        </p>
        <h3>Give access to all website utilities</h3>
        <p>
          In web Web-Development process the developers always need many
          utilities in the form of links or packages and we give acces to all of
          them.
        </p>
        <h3>Web Development Roadmaps and learnings</h3>
        <p>
          For web developer as the development is very necessary part of their
          journey as well as the learning is best and important part of the web
          development journey.
        </p>
      </div>
      <div class="media-content">
        <img
          src="@/assets/Aboutus/fullstack.png"
          alt="full stack development"
          srcset=""
        />
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
  </section>
</template>
<script>
export default {
  name: "AboutUsPage",
  head() {
    return {
      title: "",
    };
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  display: flex;
  background-color: #f1f1f1;
  margin-bottom: 30px;
}
.text-content {
  width: 60%;
  padding: 20px;
}
.text-content h1 {
  font-size: 3.4dvw;
  color: #eb9411;
}
.text-content h3 {
  font-size: 1.6dvw;
  padding-left: 18px;
}
.text-content p {
  font-size: 1.2dvw;
  padding-left: 28px;
}
.media-content {
  padding: 30px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.media-content img {
  width: 100%;
  height: fit-content;
}
.wd-content {
  margin-bottom: 20px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  background-color: #f1f1f1;
}
.wd-content h1 {
  background-image: url("@/assets/Aboutus/neogirl.jpg");
  background-attachment: fixed;
  color: transparent;
  background-clip: text;
  font-size: 8dvw;
  background-position: center;
  background-size: 100dvw 100dvh;
  background-repeat: no-repeat;
  text-align: center;
}
.wd-content h3 {
  text-align: center;
}

@media screen and (max-width: 768px) {
  .content {
    width: 100%;
    flex-direction: column;
  }
  .text-content {
    width: 100%;
  }
  .media-content {
    width: 100%;
  }
  .media-content img {
    width: 60%;
  }
}
</style>
