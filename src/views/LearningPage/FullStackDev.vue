<template>
  <section class="main">
    <section class="content">
      <h3>1. MERN Stack:</h3>
      <h5>
        MERN stands for <b>MongoDB</b>, <b>Express.js</b>, <b>React</b>, and
        <b>Node.js</b>.
      </h5>
      <div class="stacks">
        <div class="tech">
          <div class="number">1</div>
          <b>MongoDB:</b> A NoSQL database that stores data in JSON-like
          documents.
        </div>
        <div class="tech">
          <div class="number">2</div>
          <b>Express.js:</b> A minimalist web application framework for Node.js.
        </div>
        <div class="tech">
          <div class="number">3</div>
          <b>React:</b> A JavaScript library for building user interfaces.<br />
        </div>
        <div class="tech">
          <div class="number">4</div>
          <b>Node.js:</b> A JavaScript runtime built on Chrome's V8 JavaScript
          engine for server-side programming.
        </div>
      </div>

      <div class="learning">
        <h3>Learning Steps and Procedures:</h3>
        <div class="tech">
          <div class="icons">
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </div>
          <img
            src="@/assets/LearningsMedia/mongodb.png"
            alt="mongoDb"
            srcset=""
          />
          <b>MongoDB:</b> A NoSQL database that stores data in JSON-like
          documents.
        </div>
        <div class="tech">
          <div class="icons">
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </div>
          <img
            src="@/assets/LearningsMedia/express.png"
            alt="mongoDb"
            srcset=""
          />
          <b>Express.js:</b> A minimalist web application framework for Node.js.
        </div>
        <div class="tech">
          <div class="icons">
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </div>
          <img
            src="@/assets/LearningsMedia/reactjs.png"
            alt="mongoDb"
            srcset=""
          />
          <b>React:</b> A JavaScript library for building user interfaces.<br />
        </div>
        <div class="tech">
          <div class="icons">
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </div>
          <img
            src="@/assets/LearningsMedia/nodeJs.png"
            alt="mongoDb"
            srcset=""
          />
          <b>Node.js:</b> A JavaScript runtime built on Chrome's V8 JavaScript
          engine for server-side programming.
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "fullstack",
};
</script>
<style scoped>
.content {
  background-color: #f2f2f2;
  padding: 20px 30px;
}
.content h3,
h5 {
  color: #1f915e;
}

.stacks {
  border: none;
  border-collapse: collapse;
}
.tech {
  position: relative;
  padding: 16px 20px;

  border-left: 4px solid #28b173;
}
.tech img {
  width: 30px;
  height: 30px;
}
.tech b {
  color: #28b173;
}
.tech .number {
  position: absolute;
  top: 30%;
  z-index: 1;
  left: -15px;
  color: #28b173;
  padding: 0px 8px;
  background-color: #f1f1f1;
  border: 1px solid #28b173;
  border-radius: 50%;
}
.icons {
  position: absolute;
  top: 30%;
  z-index: 1;
  left: -15px;
  color: #28b173;
  padding: 0px 5px;
  background-color: #f1f1f1;
  border: 1px solid #28b173;
  border-radius: 50%;
}
.learning {
  margin-top: 10px;
}
</style>
