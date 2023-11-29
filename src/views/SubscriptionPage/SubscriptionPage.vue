<template>
  <section>
    <div class="contact">
      <h2>Contact Us</h2>
      <p>To get the customize template your complete website.</p>
      <form name="contact" @submit.prevent="submitForm" method="POST" netlify>
        <p>
          <label
            >Name :
            <input class="inputs" type="text" v-model="name" name="name"
          /></label>
        </p>
        <p>
          <label
            >Email :
            <input class="inputs" type="email" v-model="email" name="email"
          /></label>
        </p>
        <p>
          <label
            >Message:
            <input class="inputs" type="text" v-model="message" name="message"
          /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <div class="result">{{ responseMessage }}</div>
    </div>
    <a href="mailto:raoarslanmatloob@gmail.com">
      <button class="mailbtn">
        Mail Us <i class="fa fa-envelope" aria-hidden="true"></i></button
    ></a>
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
  name: "SubscritionPage",
  data() {
    return {
      responseMessage: "",

      name: "",
      email: "",
      message: "",

      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      const formData = new FormData(this.$refs.fileForm);
      fetch("/", {
        body: formData,
        method: "POST",
      })
        .then(() => {
          this.responseMessage = "Thank You! We will respond you ASAP!";
          this.$router.push("/subscribe");
        })
        .catch((error) => {
          this.responseMessage = `Failed: ${error}`;
        });
    },
  },
};
</script>

<style scoped>
section {
  background-color: #f1f1f1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.mailbtn {
  padding: 4px 16px;
  color: rgb(18, 216, 121);
  border-radius: 6px;
  border: 2px solid rgb(18, 216, 121);
  transition: box-shadow 0.3s ease-in-out;
}
.mailbtn:hover {
  box-shadow: 0 0 8px 2px rgb(18, 216, 121);
}
form {
  padding: 20px;
}
.inputs {
  width: 100%;
}
h2 {
  color: rgb(18, 216, 121);
}
.contact {
  background-color: #fcfcfc;
  border: 2px solid #333;
  border-radius: 6px;
  padding: 10px;
  margin: 10px;
}
button {
  border-radius: 4px;
  padding: 2px 16px;
}
</style>
