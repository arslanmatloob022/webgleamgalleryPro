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
        <p>Vue Instance</p>
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
        Vue.js, often referred to as Vue, is a progressive JavaScript framework
        for building user interfaces. It is designed to be incrementally
        adoptable, meaning you can use as much or as little of it as you want.
        Vue.js is particularly popular for its simplicity and flexibility,
        making it a favorite choice for both beginners and experienced
        developers.
      </p>
      <h5>What is Vue.js?</h5>
      <p>
        Vue.js is an open-source JavaScript framework for building user
        interfaces. It was created by Evan You and first released in 2014.
        Vue.js focuses on the view layer of applications, providing a simple and
        flexible way to manage the UI of web applications.
      </p>
      <h5>2. Key Features:</h5>
      <p>
        <b>Declarative Rendering:</b> Vue.js uses a simple and intuitive
        template syntax to declaratively render data to the DOM.<br /><br />

        <b>Component-Based Architecture:</b> Vue.js allows developers to create
        encapsulated and reusable components, making it easier to manage complex
        UIs.<br /><br />
        <b>Directives and Two-Way Binding:</b> Vue.js provides built-in
        directives like v-bind for data binding and v-on for event handling.
        Two-way data binding is a core feature. <br /><br />
        <B>Vue CLI:</B> Vue CLI is a full-featured command-line tool for
        scaffolding Vue.js projects. It streamlines the development process and
        provides useful features like project generation, plugin management, and
        more.<br /><br />
        <b>Vue Router:</b> Vue Router is the official router for Vue.js. It
        deeply integrates with Vue.js core to provide a seamless Single Page
        Application (SPA) experience.<br /><br />
        <b>Vuex:</b> Vuex is Vue's official state management library. It
        provides a centralized store for managing application state, making it
        easier to handle data in larger applications.<br /><br />
        <b>Vue Devtools:</b> Vue Devtools is a browser extension that allows
        developers to inspect and debug Vue.js applications. It provides a
        visual component tree, state inspector, and event tracker for easier
        debugging.
      </p>

      <h5>3. Why Vue.js?</h5>
      <p>
        <b>Approachable:</b> Vue.js has a gentle learning curve, making it easy
        for newcomers to get started. Its straightforward documentation and
        simple API make it accessible to developers of all skill levels.<br />

        <b>Flexibility:</b> Vue.js is designed to be flexible and adaptable. You
        can use it to build small interactive parts of a website or scale it up
        to create complex Single Page Applications.<br />

        <b>Performance:</b> Vue.js optimizes rendering and update mechanisms,
        ensuring efficient DOM manipulations. This leads to better performance
        in applications, even when dealing with dynamic content and real-time
        updates.<br />

        <b>Active Community:</b> Vue.js has a vibrant and active community. This
        community-driven nature ensures continuous improvement, extensive
        resources, and a plethora of plugins and extensions.<br />
      </p>

      <h5>Conclusion:</h5>
      <p>
        Vue.js has gained widespread adoption in the web development community
        due to its simplicity, flexibility, and robust features. Whether you're
        building a small project or a large-scale application, Vue.js provides
        the tools and capabilities to create elegant and responsive user
        interfaces efficiently. Its balanced approach to simplicity and power
        makes it an excellent choice for modern web development projects.
      </p>
    </section>

    <section class="sec-text" id="section2">
      <h3>Vue Instance</h3>
      <h5>1. Vue Instance Creation:</h5>
      <div class="example-code">
        <p>
          Creating a Vue Instance: You create a Vue instance by instantiating
          the Vue class.<br />
          For example
        </p>
        <pre>
        
<code>var vm = new Vue(
  { // options }
  ); </code>
</pre>
      </div>
      <h5>2. Vue Instance Properties:</h5>
      <div class="example-code">
        <p>
          <b>Data:</b> Vue instances have a data option where you can define the
          data properties. These properties are reactive, meaning changes to
          them trigger re-rendering of the DOM. .<br />
          For example
        </p>
        <pre>
      <code>
var vm = new Vue({
  data: {
    message: 'Hello, Vue!'
  }
});</code></pre>
      </div>
      <div class="example-code">
        <p>
          <b>Methods:</b> Vue instances can have methods, which are functions
          that can be called in response to user events or other aspects of your
          application. For example:
        </p>
        <pre>
      <code>
var vm = new Vue({
  methods: {
    greet: function() {
      alert(this.message);
    }
  }
});</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b>Computed Properties:</b> Computed properties are based on the
          values of other properties and are re-evaluated when those properties
          change. Computed properties are cached and only re-run when necessary.
          For example:
        </p>
        <pre>
      <code>
var vm = new Vue({
  data: {
    firstName: 'John',
    lastName: 'Doe'
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
});
</code></pre>
      </div>

      <h5>3. Vue Instance Methods:</h5>
      <p>
        <b>$mount():</b><br />
        <b> Usage: </b>`vm.$mount(element)`<br />
        <b>Description:</b>Manually mounts the Vue instance to a DOM element. If
        you don't use this method, Vue automatically mounts the instance when
        you create it. This method is useful when you want to delay the mounting
        of the Vue instance to a specific element.<br /><br />

        <b>$destroy():</b><br />
        <b> Usage:</b> `vm.$destroy()` <br />
        <b>Description:</b>Destroys the Vue instance, cleaning up all its
        directives and child instances. It's particularly useful when you want
        to remove a Vue instance and its associated event listeners, watchers,
        and computed properties from the memory to prevent memory leaks.<br /><br />

        <b>$set(object, key, value):</b><br />
        <b> Usage:</b> Vue.set(object, key, value) or this.$set(object, key,
        value) within a Vue instance<br />
        <b>Description:</b> Sets a property on an object. This method is used to
        add new reactive properties to an object. When you add a new property to
        an object directly using the assignment operator, Vue might not be able
        to detect it. $set ensures that the new property becomes reactive.<br /><br />

        <b>$delete(object, key)</b><br />
        <b> Usage:</b> Vue.delete(object, key) or this.$delete(object, key)
        within a Vue instance<br />
        <b>Description:</b> Deletes a property from an object, making it
        non-reactive. Similar to $set, this method ensures that Vue recognizes
        the change and updates the DOM accordingly.<br /><br />

        <b>$watch(expOrFn, callback, options)</b><br />
        <b> Usage:</b> vm.$watch(expression, callback, options) or
        this.$watch(expression, callback, options) within a Vue instance<br />
        <b>Description:</b>Watches a property or an expression and triggers a
        callback function when the property or expression changes. The expOrFn
        parameter can be a string (for a property) or a function (for an
        expression). The callback function will be called whenever the watched
        property or expression changes. You can also provide options to
        customize the behavior of the watcher.<br /><br />
      </p>

      <h5>4. Vue Lifecycle Hooks:</h5>
      <p>
        Vue instances have a series of lifecycle hooks that allow you to execute
        code at specific stages during the instance's lifecycle:<br /><br />

        <b>beforeCreate():</b> Called synchronously immediately after the
        instance has been initialized, before data observation and event/watcher
        setup.<br /><br />

        <b>created():</b> Called synchronously after the instance is created. At
        this stage, the instance has finished processing the options, and the
        data observation, computed properties, methods, watch/event callbacks
        have been set up.<br /><br />

        <b>beforeMount():</b> Called right before the mounting begins: the
        render function is about to be called for the first time.<br /><br />

        <b>mounted():</b> Called after the instance has been mounted, where el
        is replaced by the newly created vm.$el.<br /><br />

        <b>beforeUpdate():</b> Called when the data changes, before the virtual
        DOM is re-rendered and patched.<br /><br />

        <b>updated():</b> Called after a data change causes the virtual DOM to
        be re-rendered and patched.<br /><br />

        <b>beforeDestroy():</b> Called right before a Vue instance is destroyed.
        At this stage, the instance is still fully functional.<br /><br />

        <b>destroyed():</b> Called after a Vue instance has been destroyed.
        Cleanup goes here.<br /><br />

        Understanding and utilizing Vue instances is crucial for building Vue.js
        applications. They encapsulate the data, methods, and behavior of your
        application components, enabling a reactive and interactive user
        experience.
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
import "prismjs";
import "prismjs/themes/prism.css";
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
  background-color: #f2f2f2;
  padding: 6px 16px;
}
.example-code {
  display: flex;
  width: 100%;
  background-color: #f9f9f9;
}
.example-code p {
  width: 60%;
}
.example-code pre {
  width: 40%;
  border-radius: 6px;
  padding: 10px 10px;
  background-color: #333;
  color: #f2f2f2;
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
  .sec-text h2 {
    text-decoration: none;
  }
  .sec-text p {
    font-size: 0.8rem;
  }
}
</style>
