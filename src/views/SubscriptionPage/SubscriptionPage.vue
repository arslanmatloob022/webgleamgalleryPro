<template>
  <section>
    <h2>Contact Us</h2>
    <p>To get the customize template your complete website.</p>
    <form name="contact" @submit.prevent="submitForm" method="POST" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <input type="text" name="message" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <div class="result">{{ responseMessage }}</div>
  </section>
</template>
<script>
export default {
  name: "SubscritionPage",
  data() {
    return {
      responseMessage: "",
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
          this.responseMessage = `Thank You! <br />We will respond you ASAP!`;
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
h1 {
  color: brown;
}
</style>
