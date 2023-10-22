<template>
  <section class="page">
    <div class="cont-container">
      <div class="main">
        <div class="media-content">
          <video playsinline autoplay muted loop poster="">
            <source src="@/assets/AppMedia/networkbg.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <div class="content">
            <h4>{{ typedText }}</h4>
          </div>
          <div class="text-content">
            <div class="empower">
              <h3>Empowering Developers:</h3>
            </div>
            <div class="caption">
              <h2>{{ cap }}</h2>
              <h1>
                {{ typedCaption }}
              </h1>
            </div>
            <div class="multi-lines">
              <h4>
                Empower Your Web Development with Effortless UI Integration –
                Your Source for Copy-Paste Perfection!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cont-container">
      <div class="textContent">
        <h2>Empowering Developers, Inspiring Designs</h2>
        <h4>You Apply and build logics leave UI on us.</h4>
        <p>
          As our concern we are here to serve you with the code of each UI
          Element that you think will be use in your website's frontend
          development. You must attend to the logics and learn the more and
          small ways out to the probelms and save your precious Time!
        </p>

        <a href=""
          >Visit and check UI Elements
          <span
            ><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span
        ></a>
      </div>
      <div class="mediaContent">
        <img
          class="ui-img"
          src="@/assets/AppMedia/webdevtree.png"
          alt="UI Element Image"
        />
      </div>
    </div>

    <div class="cont-container">
      <div class="mediaContent bg-color">
        <img src="@/assets/AppMedia/animrem.png" alt="" />
      </div>
      <div class="textContent bg-color">
        <h2>Modern and Attractive Animations</h2>
        <h4>Eyecatching Animatoins available for each element.</h4>
        <p>
          Crafting Digital Dreams: Welcome to a World Where Imagination Meets
          Code. Explore Our Treasury of Seamless UI Elements and Expert Web
          Development Tools. Your Journey to Exceptional Websites Starts Here!"
        </p>

        <a href=""
          >Visit and check UI Elements
          <span
            ><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span
        ></a>
      </div>
    </div>

    <div class="cont-container">
      <div class="textContent">
        <h2>
          Your Ultimate Source for Seamless UI Elements and Web Development
          Magic!
        </h2>
        <h4>
          Revealing all technologies by creating all element of all types of
          website.
        </h4>
        <p>
          As our concern we are here to serve you with the code of each UI
          Element that you think will be use in your website's frontend
          development. You must attend to the logics and learn the more and
          small ways out to the probelms and save your precious Time!
        </p>

        <a href=""
          >Visit and check UI Elements
          <span
            ><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span
        ></a>
      </div>
      <div class="mediaContent">
        <img class="ui-img" src="@/assets/AppMedia/allteach.png" alt="" />
      </div>
    </div>

    <div class="cont-container">
      <div class="mediaContent bg-color">
        <img src="@/assets/AppMedia/teambuild.png" alt="" />
      </div>
      <div class="textContent bg-color">
        <h2>Unleashing Creativity, Empowering Futures</h2>
        <h4>
          Explore Expert Web Development Tools and Learn Frontend and Backend
          Mastery!
        </h4>
        <p>
          Your Gateway to Expert Web Development Tools, Comprehensive Frontend
          and Backend Learning Resources. Transform Ideas into Interactive
          Reality! <br />From our platform you can get access to all of your
          require resources because We also offers you a single page learning
          materials and resources you might need in your web-development
          journey.
        </p>

        <a href=""
          >View Learninig gateway and Resources.

          <span
            ><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span
        ></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      /* Hero Banner Code*/
      text: "Web Gleam Gallery!",
      typedText: "",
      capText: "Your Gateway to Effortless Web Design-",
      cap: "",
      caption: ["Explore,", "Copy,", "Create!"],
      typedCaption: "",
      currentPartIndex: 0,
    };
  },

  mounted() {
    // hero banner
    this.typeText();
    this.typeCap();
    setTimeout(() => {
      this.typeCaption();
    }, 6000);
  },
  methods: {
    // Hero banner
    typeText() {
      let i = 0;
      const typingInterval = setInterval(() => {
        this.typedText += this.text[i];
        i++;
        if (i === this.text.length) {
          clearInterval(typingInterval);
        }
      }, 80);
    },
    typeCap() {
      let i = 0;
      const typingInterval = setInterval(() => {
        this.cap += this.capText[i];
        i++;
        if (i === this.capText.length) {
          clearInterval(typingInterval);
        }
      }, 150);
    },

    async typeCaption() {
      while (true) {
        for (let i = 0; i < this.caption.length - 1; i++) {
          this.typedCaption = this.caption[i];
          await this.sleep(1500);
          this.currentPartIndex = (i + 1) % this.caption.length;
          this.typedCaption = this.caption[this.currentPartIndex];
          this.typedCaption += " ";
          await this.sleep(1500);
        }
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
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
  font-size: 1.2rem;
  padding: 0pt 10pt;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.textContent a {
  font-weight: 600;
  margin-left: 20%;
  text-align: center;
  text-decoration: none;
  color: #28b173;
}

.mediaContent {
  width: 50%;
  padding: 10px 10px;
  background-color: #f1f1f1;
}
.ui-img {
  width: 80%;
  height: 400px;
}
.mediaContent img {
  width: 80%;
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
.media-content {
  width: 100%;
  height: 70vh;
  background-color: #000;
  position: relative;
}
.media-content video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
}
.media-content .content {
  z-index: 1;
  position: relative;
  width: 100%;
  text-align: center;
  justify-content: center;
  color: #fff4ef;
  padding: 20px;
  border-right: 2px solid #222222; /* Cursor style */
  white-space: nowrap;
  animation: typing 0.3s steps(30);
  display: inline-block;
}
.text-content {
  padding: 30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  color: rgb(255, 255, 230);
}
.multi-lines {
  width: 60%;
}
.multi-lines h4 {
  color: #2beb95;
}
.text-content h3 {
  font-size: 32pt;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
    opacity: 0;
  }
}

@media screen and (max-width: 678px) {
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
    font-size: 0.8rem;
  }
  .textContent a {
    font-size: 0.7rem;
  }

  .mediaContent {
    width: 100%;
    padding: 10px 16px;
  }
  .ui-img {
    width: 80%;
    height: 200px;
  }
}
</style>
