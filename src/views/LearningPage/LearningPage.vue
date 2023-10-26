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
        <p>Template Syntax</p>
      </li>
      <li @click="scrollToSection('section4')">
        4.
        <p>Conditional Rendering</p>
      </li>
      <li @click="scrollToSection('section5')">
        5.
        <p>List Rendering:</p>
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
      <h3>Template Syntax</h3>
      <h5>1.Interpolation:</h5>
      <div class="example-code">
        <p>
          Interpolation in Vue.js is a way to bind data to HTML elements. It is
          achieved using double curly braces {{ message1 }}. When you place data
          or expressions inside these curly braces, Vue replaces them with the
          actual values from your data properties. It allows you to display
          dynamic content on your web page.<br />
          For example<br />
          In this example, will be replaced with the value of the message data
          property, and any changes to message will automatically update the
          displayed content.
        </p>

        <pre><code>
        <h6>{{messages}}</h6>
      
      </code></pre>
      </div>
      <h5>2. Directives:</h5>
      <p>
        <b>Description:</b> Vue directives are special tokens in the markup that
        tell the library to do something to a DOM element. They are prefixed
        with v- and are used to apply reactive behavior to the rendered DOM.
        Directives are Vue.js’s way of extending HTML functionality.<br />
      </p>
      <h6>Common Directives:</h6>
      <div class="example-code">
        <p>
          <b> v-bind:</b> Binds an attribute to an expression. For example,
          v-bind:href="url" binds the href attribute of a link to the url data
          property.
        </p>
        <pre> 
      <code> {{ vbind }}
</code></pre>
      </div>
      <div class="example-code">
        <p>
          <b> v-model:</b> Creates a two-way binding on form inputs. It binds
          the input value to a data property, allowing changes in the input to
          update the property and vice versa.
        </p>
        <pre>
      <code>{{ vmodel }}
</code></pre>
      </div>
      <div class="example-code">
        <p>
          <b>v-for:</b> Renders a list of items by iterating over an array or
          object. For example, v-for="item in items" renders elements for each
          item in the items array.
        </p>
        <pre>
      <code>{{ vfor }}
</code></pre>
      </div>
      <div class="example-code">
        <p>
          <b>v-if and v-else:</b>
          Conditionally renders elements based on the truthiness of an
          expression.
        </p>
        <pre>
      <code>{{ vifelse }}
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b>v-on:</b>
          Listens to DOM events and triggers methods or expressions when the
          event occurs.
        </p>
        <pre>
      <code>{{ vOn }}
</code></pre>
      </div>
    </section>

    <section class="sec-text" id="section4">
      <h3>Coditional Rendering</h3>
      <p>
        Conditional rendering in Vue.js allows you to display or hide elements
        based on certain conditions. There are several directives for
        conditional rendering:
      </p>
      <div class="example-code">
        <p>
          <b>v-if:</b> This directive renders the element if the expression
          inside it evaluates to true. If the expression is false, the element
          is not included in the DOM.
        </p>

        <pre><code>
        {{ vIfcode }}
      </code></pre>
      </div>

      <div class="example-code">
        <p>
          <b>v-else-if:</b> Used in conjunction with v-if, this directive allows
          you to chain multiple conditions. If the preceding v-if or v-else-if
          directive evaluates to false, v-else-if checks its condition. If true,
          the element is rendered.
        </p>
        <pre> 
      <code> {{ velseif }}
</code></pre>
      </div>
      <div class="example-code">
        <p>
          <b>v-else:</b> This directive follows v-if or v-else-if and renders
          the element if none of the preceding conditions are met.
        </p>
        <pre>
      <code>{{ vElse }}
</code></pre>
      </div>
      <div class="example-code">
        <p>
          <b>v-show:</b> This directive toggles the display CSS property of the
          element based on the truthiness of the expression. If the expression
          is true, the element is displayed; if false, it's hidden.
        </p>
        <pre>
      <code>{{ vShow }}
</code></pre>
      </div>
    </section>

    <section class="sec-text" id="section5">
      <h3>List Rendering:</h3>
      <p>
        List rendering in Vue.js is accomplished using the v-for directive. It
        allows you to render a list of items by iterating over an array. Here's
        a detailed explanation with examples.<br />
        <b>v-for:</b> The v-for directive is used to loop through an array and
        render each item inside a template block. It takes the syntax
        v-for="item in items", where item is the variable representing the
        current element in the iteration, and items is the array you want to
        loop through.
      </p>
      <div class="example-code">
        <p>Suppose you have an array of items in your Vue data:</p>

        <pre><code>
        {{ first }}
      </code></pre>
      </div>

      <div class="example-code">
        <p>You can use v-for to render a list of items like this:</p>
        <pre> 
      <code> {{ sec }}
</code></pre>
      </div>
      <div class="example-code">
        <p>
          In this example, Vue.js will create a list item ({{ li }}) for each
          item in the items array, resulting in an unordered list with four list
          items.<br />

          <b>v-for</b> with Index:<br />
          You can also access the index of the current item by using (item,
          index) in items syntax
        </p>
        <pre>
      <code>{{ vForList }}<br>
        In this case, index represents the index of the current item in the iteration, starting from 0.

</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b> v-for with Objects:</b><br />
          <b>v-for </b>can also iterate through the properties of an object:
        </p>
        <pre>
      <code>{{ passlist }}
</code></pre>
      </div>

      <div class="example-code">
        <p>
          Here, key represents the property name, and value represents the
          corresponding value in the user object
        </p>
        <pre>
      <code>{{ keyval }}
</code></pre>
      </div>
      <p>
        List rendering with v-for is a powerful feature in Vue.js, allowing you
        to dynamically generate UI elements based on the data in your
        application. It's essential for displaying dynamic content, such as
        product lists, user-generated data, or any other scenario where you need
        to display a collection of items.
      </p>
    </section>
  </section>
</template>
<script>
export default {
  name: "FeaturesPage",
  data() {
    return {
      showNavbar: true,
      messages: "<p>{{ message }}</p>",
      message1: "{{ }}",
      vbind: `<a v-bind:href="link">Link</a>`,
      vmodel: `<input v-model="message">`,
      vfor: `<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>`,
      vifelse: `<div v-if="isVisible">Visible Content</div>
                <div v-else>Hidden Content</div>`,
      vOn: `<button v-on:click="doSomething">Click me</button>`,
      vIfcode: `<div v-if="isActive">This is visible if isActive is true.</div>`,
      velseif: `<div v-if="type === 'A'">Type A</div>
    <div v-else-if="type === 'B'">Type B</div>
  <div v-else>Type C</div>`,
      vElse: `<div v-if="isSpecial">Special</div>
<div v-else>Normal</div>`,
      vShow: `<div v-show="isVisible">This can be toggled on and off.</div>`,
      first: `data: {
          items: ['Apple', 'Banana', 'Cherry', 'Date']
        }`,
      sec: `<ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>`,
      li: `<li>`,
      vForList: `<ul>
  <li v-for="(item, index) in items">{{ index + 1 }}. {{ item }}</li>
</ul>`,
      passlist: `data: {
        user: {
          name: 'John',
          age: 30,
          occupation: 'Developer'
        }
      }`,
      keyval: `<ul>
  <li v-for="(value, key) in user">{{ key }}: {{ value }}</li>
</ul>`,
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
  mounted() {},
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
}
.example-code p {
  width: 50%;
}
.example-code pre {
  width: 50%;
  display: flex;
  border-radius: 6px;
  padding: 10px 10px;
  background-color: #333;
  color: #f2f2f2;
}
.example-code pre::-webkit-scrollbar {
  display: none;
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
  .example-code {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .example-code p {
    width: 100%;
  }
  .example-code pre {
    width: 100%;
    display: flex;
  }
  .example-code pre code {
    font-size: 0.6rem;
    overflow-wrap: break-word;
  }
}
</style>
