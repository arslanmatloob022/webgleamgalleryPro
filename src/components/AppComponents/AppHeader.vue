<template>
  <section class="Headers" ref="dropdown">
    <div class="header" ref="dropdown">
      <div class="logo-div">
        <router-link class="linker" to="/">
          <img class="logo" src="@/assets/SingleHi.png" alt="Web Dazzels" />
        </router-link>
        <h3>Web Dazzels</h3>
      </div>
      <div class="links" :class="{ active: linksActive }">
        <router-link class="linker" to="/">
          <a class="link">Home</a>
        </router-link>
        <div class="linker">
          <router-link class="linker" to="/categories"
            ><a class="link">Categories</a></router-link
          >
          <span class="arrow" @click="toggleDropdown('dropdown1')">
            {{ ShowDropdown === "dropdown1" ? "&#11165;" : "&#11167;" }}</span
          >
        </div>
        <transition name="dropdown-slide">
          <div
            v-if="ShowDropdown === 'dropdown1'"
            class="dropdown-menu features-dd"
          >
            <div class="dropdown-content">
              <div class="row dropdown">
                <!-- First column -->
                <div class="dropdown-list col-lg-6 col-md-6 col-sm-6 col-6">
                  <h4 class="drop-heading">By Websites</h4>
                  <router-link class="dropdown-link" to="/ecomweb">
                    <div class="row link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >eCommerce</a
                      >

                      <p
                        class="link-description-text col-lg-12 col-md-12 col-sm-12"
                      >
                        All Elements of Commerce Websites
                      </p>
                    </div>
                  </router-link>
                  <router-link class="dropdown-link" to="/crmweb">
                    <div class="row link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >C-R-M</a
                      >

                      <p
                        class="link-description-text col-lg-12 col-md-12 col-sm-12"
                      >
                        All Elements of C-R-M Websites
                      </p>
                    </div></router-link
                  >

                  <router-link class="dropdown-link" to="/analyticsweb">
                    <div class="row link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Analytics</a
                      >

                      <p
                        class="link-description-text col-lg-12 col-md-12 col-sm-12"
                      >
                        Elements About The Analytical Views
                      </p>
                    </div>
                  </router-link>

                  <router-link class="dropdown-link" to="/gamingweb">
                    <div class="row link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Gaming</a
                      >

                      <p
                        class="link-description-text col-lg-12 col-md-12 col-sm-12"
                      >
                        All Elements Of Gaming Domain
                      </p>
                    </div>
                  </router-link>
                </div>

                <!-- Second Column -->
                <div class="dropdown-list col-lg-6 col-md-6 col-sm-6 col-6">
                  <h4 class="drop-heading">Website Gleams</h4>
                  <!-- <div class="row link-tab">
                    <a
                      class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                      href=""
                      >Animations</a
                    >
                    <p
                      class="link-description-text col-lg-12 col-md-12 col-sm-12"
                    >
                      All Types Of Animation That Use To Gleam Websites
                    </p>
                  </div> -->
                  <router-link to="/loaders" class="linker">
                    <div class="row link-tab">
                      <a class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        >Loaders</a
                      >

                      <p
                        class="link-description-text col-lg-12 col-md-12 col-sm-12"
                      >
                        Multiple Types Of Website Loaders With Multiple Styles
                      </p>
                    </div></router-link
                  >

                  <router-link to="/aimations" class="linker">
                    <div class="row link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Anim Screens</a
                      >

                      <p
                        class="link-description-text col-lg-12 col-md-12 col-sm-12"
                      >
                        For Atracting The Users And Glow The Content
                      </p>
                    </div></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="linker">
          <router-link class="linker" to="/elements"
            ><a class="link">UI Elements</a> </router-link
          ><span class="arrow" @click="toggleDropdown('dropdown2')">{{
            ShowDropdown === "dropdown2" ? "&#11165;" : "&#11167;"
          }}</span>
        </div>
        <transition name="dropdown-slide">
          <div
            v-if="ShowDropdown === 'dropdown2'"
            class="dropdown-menu elements-dd"
          >
            <div class="dropdown-content">
              <div class="row dropdown">
                <!-- First column of UI elemets-->
                <div class="dropdown-list col-lg-6 col-md-6 col-sm-6 col-6">
                  <h4 class="drop-heading single-tab">UI Elements</h4>
                  <router-link class="dropdown-link" to="/headers">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link single-gap col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Headers</a
                      >
                    </div>
                  </router-link>
                  <router-link class="dropdown-link" to="/searchbars">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Searchbars</a
                      >
                    </div></router-link
                  >
                  <router-link class="dropdown-link" to="/sidebars">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Sidebars</a
                      >
                    </div></router-link
                  >
                  <router-link class="dropdown-link" to="/productcards">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Cards</a
                      >
                    </div>
                  </router-link>
                  <router-link class="dropdown-link" to="/gamingweb">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Buttons</a
                      >
                    </div></router-link
                  >
                  <router-link class="dropdown-link" to="/gamingweb">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Charts</a
                      >
                    </div>
                  </router-link>
                </div>

                <!-- Second Column UI Elements-->
                <div class="dropdown-list col-lg-6 col-md-6 col-sm-6 col-6">
                  <h4 class="drop-heading single-tab">Web Forms</h4>
                  <router-link class="dropdown-link" to="/loginpages">
                    <div class="row single-tab link-tab">
                      <a class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                        >Login/SignUp</a
                      >
                    </div>
                  </router-link>

                  <div class="row single-tab link-tab">
                    <a
                      class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                      href=""
                      >Survey Forms</a
                    >
                  </div>

                  <div class="row single-tab link-tab">
                    <a
                      class="dropdown-link col-lg-12 col-md-12 col-sm-12"
                      href=""
                      >Customer Forms</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="linker">
          <router-link class="linker" to="/learningspage"
            ><a class="link">Learnings</a></router-link
          ><span class="arrow" @click="toggleDropdown('dropdown3')">
            {{ ShowDropdown === "dropdown3" ? "&#11165;" : "&#11167;" }}
          </span>
        </div>
        <transition name="dropdown-slide">
          <div
            v-if="ShowDropdown === 'dropdown3'"
            class="dropdown-menu elements-dd"
          >
            <div class="dropdown-content">
              <div class="row dropdown">
                <!-- First column of UI elemets-->
                <div class="dropdown-list col-lg-6 col-md-6 col-sm-12 col-12">
                  <h4 class="drop-heading single-tab">Frameworks</h4>
                  <router-link class="dropdown-link" to="/learnings">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link single-gap col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Learn Vue.js</a
                      >
                    </div></router-link
                  >
                </div>
                <div class="dropdown-list col-lg-6 col-md-6 col-sm-12 col-12">
                  <h4 class="drop-heading single-tab">Roadmaps</h4>
                  <router-link class="dropdown-link" to="/fullstack">
                    <div class="row single-tab link-tab">
                      <a
                        class="dropdown-link single-gap col-lg-12 col-md-12 col-sm-12"
                        href=""
                        >Full Stack Roadmaps</a
                      >
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <router-link class="linker" to="/about"
          ><a class="link">About</a></router-link
        >
      </div>

      <div
        v-if="(user, userId) in $store.state.users"
        :key="userId"
        class="user"
      >
        <p>Welcome, {{ user.username }}</p>
        <button @click="$store.dispatch('logout')">Logout</button>
      </div>

      <div class="nav-buttons">
        <button @click="LoginSignup" class="login-btn">Signup</button>
        <router-link to="/subscribe"
          ><button class="subs-btn">Order Now</button></router-link
        >
      </div>
      <div class="menu-btn" @click="toggleLinks">&#9776;</div>
    </div>

    <login-signup-vue
      @closeLoginForm="closeForm"
      v-if="showForm"
    ></login-signup-vue>
  </section>
</template>

<script>
import LoginSignupVue from "./LoginSignup.vue";
export default {
  name: "AppHeader",

  data() {
    return {
      linksActive: false,
      ShowDropdown: null,
      setTimeId: null,
      showForm: false,
    };
  },
  components: {
    LoginSignupVue,
  },
  methods: {
    toggleLinks() {
      this.linksActive = !this.linksActive;
    },
    closedropdown() {
      this.ShowDropdown = null;
    },

    toggleDropdown(DropdownId) {
      if (this.ShowDropdown === DropdownId) {
        this.ShowDropdown = null;
      } else {
        this.ShowDropdown = DropdownId;
        if (this.setTimeId) {
          clearTimeout(this.setTimeId);
        }
        this.setTimeId = setTimeout(() => {
          this.ShowDropdown = false;
        }, 4000);
      }
    },
    closeOnOutsideClick(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.ShowDropdown = null;
      }
    },

    LoginSignup() {
      this.showForm = !this.showForm;
    },
    closeForm() {
      this.showForm = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeOnOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeOnOutsideClick);
  },
};
</script>

<style scoped>
.arrow {
  position: relative;
  cursor: pointer;
  color: #f4ede4;
  border-radius: 20%;
  background-color: #29bdab;
  font-size: 14px;
  left: 2px;
  padding: 0px 6px;
}
.header {
  z-index: 1000;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #2a9d8f;
  padding: 10px 20px;
}

.logo-div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.logo-div h3 {
  margin-top: 10px;
  font-weight: 500;
  color: #ffa916;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.logo {
  height: 45px;
  width: 45px;
}
.links {
  display: flex;
  gap: 25px;
  transition: rollup 3.3s;
}
.link {
  font-size: 20px;
  font-family: "DM Serif Display", serif;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  animation: rollup 1.6s;
}

.linker {
  text-decoration: none;
}

.linker:hover {
  transition: all 0.1s ease-in-out;
  transform: scale(1.05);
}

.nav-buttons {
  display: flex;
  gap: 10px;
}
.nav-buttons button {
  cursor: pointer;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.nav-buttons button:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.05);
}
.login-btn {
  padding: 12px 16px;
  border-radius: 10px 0px 0px 10px;
  background-color: #f26419;
}
.subs-btn {
  background-color: #e4960f;
  border-radius: 0px 10px 10px 0px;
}
.menu-btn {
  display: none;
  cursor: pointer;
  font-size: 20px;
}
@media screen and (max-width: 867px) {
  .nav-buttons button {
    font-size: 0.6rem;
  }
  .links {
    gap: 10px;
  }
  .link {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 768px) {
  .links {
    display: none;
    flex-direction: column;
    background-color: #2aa395;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    padding: 5px 0;
    text-align: center;
    z-index: 1000;
    animation: rollup 0.6s;
  }
  .linker {
    margin-top: 5px;
    padding: 0;
    margin: 0;
  }
  .links {
    margin-top: 5px;
    padding: 0;
    margin: 0;
  }
  .links.active {
    display: flex;
  }

  .menu-btn {
    color: #f26419;
    display: block;
  }
  .nav-buttons button {
    font-weight: 500;
    font-size: 10px;
    padding: 4px 6px;
  }
  .login-btn {
    display: none;
  }
  .subs-btn {
    display: none;
  }
  .logo-div h3 {
    font-size: 1.3rem;
  }
  .logo {
    height: 35px;
    width: 35px;
    margin: 10px;
  }
}

/*  Drop down styling*/

.dropdown-menu {
  backdrop-filter: blur(5px);
  position: absolute;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  background-color: #25aa9b;
  z-index: 1000;
}
.drop-heading {
  font-weight: bold;
  color: #f7f7f7;
  font-family: Arial, Helvetica, sans-serif;
}
.link-tab:hover {
  transform: scaleY(1.03);
  border-radius: 6px;
  background-color: #07b6a1;
  transition: all 0.2s ease-in-out;
}

.single-link {
  margin-top: 16px;
}
.dropdown-link {
  font-size: calc(8px + 1vw);
  color: #ffffff;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.dropdown-link:hover {
  color: #fff7f7;
  cursor: pointer;
}
.link-description-text {
  font-family: Arial, Helvetica, sans-serif;
  color: #363636;
  font-size: 0.7rem;
}

.elements-dd {
  width: 50%;
  left: 25%;
}
.features-dd {
  width: 50%;
  left: 25%;
}

.dropdown-content {
  z-index: 1000;
  border-radius: 16px;
  gap: 10px;
  padding: 16px;
  background-color: #25aa9b;
}
.dropdown-list {
  overflow: auto;
  word-wrap: break-word;
}
.single-tab {
  margin-bottom: 8px;
}

/* Dropdown Menu anmation*/
.dropdown-slide-enter-active {
  animation: slideDown 0.3s;
}

@keyframes rollup {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  20% {
    opacity: 0;
    transform: translateY(-75px);
  }
  50% {
    opacity: 50%;
    transform: translateY(-50px);
  }
  50% {
    opacity: 100%;
    transform: translateY(0);
  }
}

.dropdown-slide-leave-active {
  animation: slideUp 0.3s;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}

@media screen and (max-width: 867px) {
  .nav-buttons button {
    font-size: 0.6rem;
  }
  .links {
    gap: 10px;
  }
  .link {
    font-size: 0.9rem;
  }
  .dropdown-menu {
    width: 90%;
    left: 5%;
  }
  .drop-heading {
    font-size: 1.3rem;
  }
  .link-description-text {
    display: none;
  }
  .master-column {
    display: none;
  }
  .master-link-tab {
    margin-top: 8px;
  }
  .single-link {
    margin-top: 10px;
  }
  .dropdown-link {
    font-size: 0.8rem;
  }
  .master-heading {
    margin-top: 4pt;
  }
  .ai-feature-heading h5 {
    font-size: 0.8rem;
  }
  .drop-heading {
    font-size: 1rem;
  }
}
</style>
