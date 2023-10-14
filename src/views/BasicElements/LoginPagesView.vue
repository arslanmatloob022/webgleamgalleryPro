<template>
  <section>
    <!-- First Forms -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Check Login/Signup Forms</h3>
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
        <h3>Login and Signup Forms</h3>
        <p>
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms.<br />login/Signup froms are the
          first major component of the Web Application are developed by Web
          Frontend Developers and Secured by Backend Wed Developers.<br />
          So here we offers all types of Login/Signup forms for all types of
          Applications. <br />Here we present you a simple, responsive and
          attractive Login/Signup forms. And you can text them clicking on
          <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Second Forms -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Check Login/Signup Forms</h3>
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
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms.<br />login/Signup froms are the
          first major component of the Web Application are developed by Web
          Frontend Developers and Secured by Backend Wed Developers.<br />
          So here we offers all types of Login/Signup forms for all types of
          Applications. <br />Here we present you a simple, responsive and
          attractive Login/Signup forms. And you can text them clicking on
          <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Third Forms -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Check Login/Signup Forms</h3>
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
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms.<br />login/Signup froms are the
          first major component of the Web Application are developed by Web
          Frontend Developers and Secured by Backend Wed Developers.<br />
          So here we offers all types of Login/Signup forms for all types of
          Applications. <br />Here we present you a simple, responsive and
          attractive Login/Signup forms. And you can text them clicking on
          <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Fourth Forms -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Check Login/Signup Forms</h3>
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
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms.<br />login/Signup froms are the
          first major component of the Web Application are developed by Web
          Frontend Developers and Secured by Backend Wed Developers.<br />
          So here we offers all types of Login/Signup forms for all types of
          Applications. <br />Here we present you a simple, responsive and
          attractive Login/Signup forms. And you can text them clicking on
          <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Fifth Forms -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Check Login/Signup Forms</h3>
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
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms.<br />login/Signup froms are the
          first major component of the Web Application are developed by Web
          Frontend Developers and Secured by Backend Wed Developers.<br />
          So here we offers all types of Login/Signup forms for all types of
          Applications. <br />Here we present you a simple, responsive and
          attractive Login/Signup forms. And you can text them clicking on
          <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>

    <!-- Sixth Forms  -->
    <div class="container-box">
      <div class="media">
        <div class="media-header">
          <h3>Check Login/Signup Forms</h3>
          <button class="showBtn" @click="showLoginForm(6)">Show Forms</button>
        </div>

        <div class="form-imgs">
          <img src="@/assets/ComponentsImages/61.png" alt="login form" />
          <img src="@/assets/ComponentsImages/62.png" alt="login form" />
        </div>

        <sixth-login-form-vue
          v-if="showFormById === 6"
          @closeLoginForm="closeLoginForm"
        >
        </sixth-login-form-vue>
      </div>
      <div class="text-content">
        <h3>Login and Signup Forms</h3>
        <p>
          Authentication and Autherization in any Application are the process
          are done by Login and Signup forms.<br />login/Signup froms are the
          first major component of the Web Application are developed by Web
          Frontend Developers and Secured by Backend Wed Developers.<br />
          So here we offers all types of Login/Signup forms for all types of
          Applications. <br />Here we present you a simple, responsive and
          attractive Login/Signup forms. And you can text them clicking on
          <b>Show Forms</b> buttons
        </p>
        <div class="links">
          <button class="code-btn">Get Source Code</button>
          <button class="tutorial-btn">
            Watch Tuttorial For Full Understanding
          </button>
        </div>
      </div>
    </div>
  </section>
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
  components: {
    FirstLoginForm,
    SecondLoginVue,
    ThirdLoginFormVue,
    FourthLoginFormVue,
    FifthLoginFormVue,
    SixthLoginFormVue,
  },
  data() {
    return {
      showFormById: null,
    };
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
  background-color: #ececec;
}
.container-box {
  margin-top: 20pt;
  width: 100%;
  display: -webkit-flex;
  height: max-content;
  background-color: #54b497;
}
.media {
  width: 50%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  padding: 20pt 20pt;
  background-color: #f7fffe;
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
  border-radius: 4px;
  font-size: 0.8rem;
  background-color: #f26419;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.showBtn:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 1px 1px #f26419;
}
.media-header h3 {
  font-family: "Playfair Display", "AR One Sans", sans-serif;
  color: #f26419;
}
.form-imgs {
  width: 100%;
  padding: 10px 30px;
  background-color: #fff;
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
  padding: 40pt;
  width: 50%;
  background-color: #f7fffe;
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

  color: #ffffff;
  transition: all 0.2s ease-in-out;
}
.code-btn {
  border: #1370eb;
  background-color: #267ff3;
}
.tutorial-btn {
  border: #b2071d;
  background-color: #b2071d;
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
    font-family: "Playfair Display", "AR One Sans", sans-serif;
    color: #0055c5;
    font-size: 1.2rem;
  }

  .form-imgs img {
    width: 140pt;
    height: 160pt;
  }
  .text-content {
    padding: 10pt;
    width: 100%;
  }
  .text-content p {
    font-family: "Onest", "AR One Sans", sans-serif;
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
