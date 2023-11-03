<template>
  <!-- First Forms -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>1.</b>Login/Signup Form</h3>
        <button class="showBtn" @click="showLoginForm(1)">Show Forms</button>
      </div>

      <div class="form-imgs">
        <img src="@/assets/ComponentsImages/11.png" alt="login form" />
        <img src="@/assets/ComponentsImages/12.png" alt="login form" />
      </div>

      <first-login-form
        v-if="showFormById === 1"
        @closeLoginForm="closeLoginForm"
      ></first-login-form>
    </div>
    <div class="text-content">
      <h3>Login/Signup Forms</h3>
      <p>
        Simple and attractive Login/Signup Forms, with black and green
        eye-catching combo. Forms cotains little and attractive details to catch
        the intentions of the user. Froms also contains the functionality of
        hide/show option for password fields. Login form will appear first but
        when you will click the <b>Register Now</b> link the Singup form will
        appear.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf1/vanilla1.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vanilla Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf1/react1.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">React.Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf1/vue1.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vue.Js</button></a
        >
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Second Forms -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>2.</b> Login/Signup Forms</h3>
        <button class="showBtn" @click="showLoginForm(2)">Show Forms</button>
      </div>

      <div class="form-imgs">
        <img src="@/assets/ComponentsImages/21.png" alt="login form" />
        <img src="@/assets/ComponentsImages/22.png" alt="login form" />
      </div>
      <second-login-vue
        v-if="showFormById === 2"
        @closeLoginForm="closeLoginForm"
      >
      </second-login-vue>
    </div>
    <div class="text-content">
      <h3>Login and Signup Forms</h3>
      <p>
        Here you got another Simple and attractive Login/Signup Forms, with
        light red and white eye-catching combination.When you will open the
        form, the forms will appear by zoom-out animmation Forms cotains little
        and attractive details to catch the intentions of the user. Froms also
        contains the functionality of hide/show option for password fields.
        Login form will appear first but when you will click the
        <b>Register Now</b> link the Singup form will appear.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf2/vanilla2.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vanilla Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf2/react2.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">React.Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf2/vue2.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vue.Js</button></a
        >
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Third Forms -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>3.</b>Login/Signup Forms</h3>
        <button class="showBtn" @click="showLoginForm(3)">Show Forms</button>
      </div>

      <div class="form-imgs">
        <img src="@/assets/ComponentsImages/31.png" alt="login form" />
        <img src="@/assets/ComponentsImages/32.png" alt="login form" />
      </div>

      <third-login-form-vue
        v-if="showFormById === 3"
        @closeLoginForm="closeLoginForm"
      >
      </third-login-form-vue>
    </div>
    <div class="text-content">
      <h3>Login and Signup Forms</h3>
      <p>
        Simple and attractive Login/Signup Forms, with gray, pink and white
        eye-catching combo. The registeration form require some more details
        from the user and it shows the uses of the registration from for some
        special and secure system. Froms also contains the functionality of
        hide/show option for password fields. Login form will appear first but
        when you will click the <b>Register Now</b> link the Singup form will
        appear.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf3/vanilla3.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vanilla Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf3/react3.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">React.Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf3/vue3.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vue.Js</button></a
        >
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Fourth Forms -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>4.</b>Login/Signup Forms</h3>
        <button class="showBtn" @click="showLoginForm(4)">Show Forms</button>
      </div>

      <div class="form-imgs">
        <img src="@/assets/ComponentsImages/41.png" alt="login form" />
        <img src="@/assets/ComponentsImages/42.png" alt="login form" />
      </div>

      <fourth-login-form-vue
        v-if="showFormById === 4"
        @closeLoginForm="closeLoginForm"
      >
      </fourth-login-form-vue>
    </div>
    <div class="text-content">
      <h3>Login and Signup Forms</h3>
      <p>
        Here you got the attractive Login/Signup Forms, with blue and white
        eye-catching gradient combination. As all the above contains the
        necessary funtionalities these forms contains the social media login and
        registeration process by click on the single button. The Social Media
        buttons got some austhetic animation on hover of the cursor. Login form
        will appear first but when you will click the
        <b>Register Now</b> link the Singup form will appear.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf4/vanilla4.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vanilla Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf4/react4.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">React.Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf4/vue4.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vue.Js</button></a
        >
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Fifth Forms -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>5.</b>Login/Signup Forms</h3>
        <button class="showBtn" @click="showLoginForm(5)">Show Forms</button>
      </div>

      <div class="form-imgs">
        <img src="@/assets/ComponentsImages/51.png" alt="login form" />
        <img src="@/assets/ComponentsImages/52.png" alt="login form" />
      </div>

      <fifth-login-form-vue
        v-if="showFormById === 5"
        @closeLoginForm="closeLoginForm"
      >
      </fifth-login-form-vue>
    </div>
    <div class="text-content">
      <h3>Login and Signup Forms</h3>
      <p>
        Dual case charming Login/Signup Forms, with white and dusty-green
        background image. Forms cotains showcases to the users for providing
        some attentive and necessary information to motivate the visitors. Froms
        also contains the functionality of hide/show option for password fields.
        Login form will appear first but when you will click the
        <b>Register Now</b> link the Singup form will appear.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf5/vanilla5.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vanilla Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf5/react5.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">React.Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf5/vue5.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vue.Js</button></a
        >
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Sixth Forms  -->
  <div class="container-box">
    <div class="media">
      <div class="media-header">
        <h3><b>6.</b> Login/Signup Forms</h3>
        <button class="showBtn" @click="showLoginForm(6)">Show Forms</button>
      </div>

      <div class="form-imgs">
        <img src="@/assets/ComponentsImages/61.png" alt="login form" />
        <img src="@/assets/ComponentsImages/62.png" alt="login form" />
      </div>

      <sixth-login-form-vue
        v-if="showFormById === 6"
        @closeLoginForm="closeLoginForm"
      ></sixth-login-form-vue>
    </div>
    <div class="text-content">
      <h3>Login and Signup Forms</h3>
      <p>
        Dual case charming Login/Signup Forms, with white and light-blue
        background gradient. Forms cotains showcases to the users for providing
        some attentive and necessary information to motivate the visitors. Froms
        also contains the functionality of hide/show option for password fields.
        Login form will appear first but when you will click the
        <b>Register Now</b> link the Singup form will appear.
        <br />
        Here you can select any of the following frameworks you are working on
        to get you desired code format or watch the tutorial to get full
        understanding of the code.
      </p>
      <div class="links">
        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf6/vanilla6.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vanilla Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf6/react6.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">React.Js</button></a
        >

        <a
          href="https://github.com/arslanmatloob022/webgleamcode/blob/main/LoginForms/lf6/vue6.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="code-btn">Vue.Js</button></a
        >
        <button class="tutorial-btn">
          Watch Tuttorial
          <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FirstLoginForm from "@/components/WebGleams/LoginForms/FirstLoginForm.vue";
import SecondLoginVue from "@/components/WebGleams/LoginForms/SecondLogin.vue";
import ThirdLoginFormVue from "@/components/WebGleams/LoginForms/ThirdLoginForm.vue";
import FourthLoginFormVue from "@/components/WebGleams/LoginForms/FourthLoginForm.vue";
import FifthLoginFormVue from "@/components/WebGleams/LoginForms/FifthLoginForm.vue";
import SixthLoginFormVue from "@/components/WebGleams/LoginForms/SixthLoginForm.vue";

export default {
  name: "LoginPagesView",
  data() {
    return {
      showFormById: null,
    };
  },
  components: {
    FirstLoginForm,
    SecondLoginVue,
    ThirdLoginFormVue,
    FourthLoginFormVue,
    FifthLoginFormVue,
    SixthLoginFormVue,
  },

  methods: {
    showLoginForm(id) {
      if (!this.showFormById) {
        this.showFormById = id;
      } else {
        this.showFormById = null;
      }
    },
    closeLoginForm() {
      this.showFormById = null;
    },
  },
};
</script>

<style scoped>
section {
  background-color: #eeeeee;
}

.container-box {
  margin-top: 20pt;
  width: 100%;
  display: -webkit-flex;
  height: max-content;
  background-color: #e9e9e9;
}
.media {
  width: 50%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  padding: 20pt 20pt;
  background-color: #e9e9e9;
}
.media-header {
  padding: 2px 8px;
  width: 100%;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
}
.showBtn {
  padding: 4pt 6pt;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 3px solid #57bd8f;
  color: #57bd8f;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
}
.showBtn:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 8px #afafaf;
}
.media-header h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #42b983;
}
.form-imgs {
  width: 100%;
  padding: 10px 30px;
  background-color: #e9e9e9;
  display: -webkit-flex;
  border-radius: 8px;
  gap: 26px;
}
.form-imgs img {
  width: 50%;
  height: 260pt;
}
.media button {
  margin: 20px;
}
.text-content {
  margin-top: 50px;
  padding: 40pt;
  width: 50%;
  background-color: #e9e9e9;
}
.text-content p {
  font-family: "Onest", "AR One Sans", sans-serif;
  font-size: 1.2rem;
}
.links {
  display: -webkit-flex;
  gap: 12pt;
}
.links button {
  border-radius: 6px;
  padding: 4pt 6pt;
  transition: all 0.2s ease-in-out;
}
.code-btn {
  background-color: transparent;
  color: #267ff3;
  border: 3px solid #267ff3;
}
.tutorial-btn {
  border: 3px solid #b2071d;
  color: #b2071d;
  background-color: transparent;
}

.links button:hover {
  transform: scale(1.02);
}

@media screen and (max-width: 868px) {
  .container-box {
    flex-direction: column;
  }
  .media {
    width: 100%;
    height: 50%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8pt 6pt;
  }
  .showBtn {
    padding: 2pt 4pt;
  }
  .media-header h3 {
    font-size: 1.2rem;
  }
  .form-imgs {
    width: 100%;
    padding: 10px 10px;
    gap: 26px;
  }

  .form-imgs img {
    width: 120pt;
    height: 160pt;
  }
  .text-content {
    padding: 10pt;
    width: 100%;
  }
  .text-content p {
    font-size: 0.7rem;
  }
  .links {
    display: -webkit-flex;
    gap: 8pt;
  }
  .links button {
    border-radius: 4px;
    padding: 2pt 4pt;
    font-size: 0.8rem;
  }
}
</style>
