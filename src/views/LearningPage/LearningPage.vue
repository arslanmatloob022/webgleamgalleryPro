<template>
  <div class="side-bar">
    <i class="fa fa-book" aria-hidden="true"></i>
    <ul>
      <li @click="scrollToSection('section1')">
        1.
        <p>Introduction</p>
      </li>
      <li @click="scrollToSection('section2')">
        2.
        <p>Brief</p>
      </li>
      <li @click="scrollToSection('section3')">
        3.
        <p>Descriptiomn</p>
      </li>
    </ul>
  </div>

  <section class="main">
    <section class="sec-text" id="section1">
      <h3>Introduction</h3>
      <p>
        7. Manual Restart: As a workaround, you can manually stop the
        development server and start it again whenever changes in
        loginPagesView.vue are not being picked up. While this is not an ideal
        solution, it can help you keep working on your project until you find a
        more permanent fix. By carefully checking these points and making
        adjustments where necessary, you should be able to diagnose and resolve
        the issue preventing your loginPagesView.vue component from being
        recompiled properly.
      </p>
    </section>
    <section class="sec-text" id="section2">
      <p>
        5. Check for Errors: Terminal/Console Errors: Look for any errors or
        warnings in your terminal/console when you save changes to
        loginPagesView.vue. These errors might provide useful information about
        what's going wrong. Browser Console: If your application runs in the
        browser, check the browser console for any JavaScript errors that might
        be preventing the recompilation.
      </p>
    </section>
    <section class="sec-text" id="section3">
      <p>
        2. Check File System Watcher: The issue might be with the file system
        watcher. Sometimes, file system watchers can misbehave, especially in
        certain environments. Restart Your Development Server: Sometimes, simply
        restarting your development server can resolve file watcher issues.
        Increase File Watcher Limit: If you are working on a large project, you
        might be hitting your system's file watcher limit. You can increase the
        limit by adjusting system settings or configuring Webpack's watchOptions
        in your Webpack configuration.
      </p>
    </section>
    <section class="sec-text" id="introduction"><p>Intro</p></section>
  </section>
</template>
<script>
export default {
  name: "FeaturesPage",
  data() {
    return {
      showNavbar: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  components: {},
};
</script>

<style scoped>
.main {
  padding-left: 5dvw;
}
.side-bar i {
  font-size: 18px;
  margin-left: 40%;
  margin-top: 1dvh;
  color: #fff;
}
.side-bar {
  word-wrap: break-word;
  overflow: scroll;
  padding-left: 6px;
  z-index: 1;
  width: 3.9dvw;
  height: 100vh;
  background-color: #2a9d8f;
  display: flex;
  position: fixed;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
}
.side-bar::-webkit-scrollbar {
  display: none;
}
.side-bar:hover {
  width: 15dvw;
}
.side-bar ul {
  padding: 0;
  margin: 0;
}

.side-bar li {
  display: flex;
  overflow: hidden;
  list-style: none;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #238075;
}

li:hover {
  background-color: rgb(30, 143, 130);
}
.sec-text h3 {
  text-decoration: underline;
}
.sec-text p {
  font-size: 1rem;
}
@media screen and (max-width: 768px) {
  .main {
    padding-left: 9dvw;
  }
  .side-bar {
    z-index: 1;
    width: 8dvw;
  }
  .side-bar:hover {
    width: 35dvw;
  }
  .side-bar ul li {
    font-size: 0.8rem;
  }
  .side-bar ul li p {
    font-size: 0.8rem;
  }
  .sec-text h3 {
    text-decoration: underline;
  }
  .sec-text p {
    font-size: 0.8rem;
  }
}
</style>
