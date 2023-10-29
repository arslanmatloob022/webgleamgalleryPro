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
        <p>List Rendering</p>
      </li>
      <li @click="scrollToSection('section6')">
        6.
        <p>Event Handeling</p>
      </li>
      <li @click="scrollToSection('section7')">
        7.
        <p>Computed Prop and Watchers</p>
      </li>
      <li @click="scrollToSection('section8')">
        8.
        <p>Components</p>
      </li>
      <li @click="scrollToSection('section9')">
        9.
        <p>Directives</p>
      </li>
      <li @click="scrollToSection('section10')">
        10.
        <p>Transitions and Animations</p>
      </li>
      <li @click="scrollToSection('section11')">
        11.
        <p>Routing</p>
      </li>
      <li @click="scrollToSection('section12')">
        12.
        <p>Vuex</p>
      </li>
      <li @click="scrollToSection('section13')">
        13.
        <p>Vue CLI and Tools</p>
      </li>
      <li @click="scrollToSection('section14')">
        14.
        <p>Miscellaneous</p>
      </li>
      <li @click="scrollToSection('section14')">
        <p>Thank You</p>
      </li>
      <li @click="scrollToSection('section14')">
        <p>Never Stop Learning!</p>
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
      <div class="content">
        <h5>What is Vue.js?</h5>
        <p>
          Vue.js is an open-source JavaScript framework for building user
          interfaces. It was created by Evan You and first released in 2014.
          Vue.js focuses on the view layer of applications, providing a simple
          and flexible way to manage the UI of web applications.
        </p>
        <h5>2. Key Features:</h5>
        <p>
          <b>Declarative Rendering:</b> Vue.js uses a simple and intuitive
          template syntax to declaratively render data to the DOM.<br /><br />

          <b>Component-Based Architecture:</b> Vue.js allows developers to
          create encapsulated and reusable components, making it easier to
          manage complex UIs.<br /><br />
          <b>Directives and Two-Way Binding:</b> Vue.js provides built-in
          directives like v-bind for data binding and v-on for event handling.
          Two-way data binding is a core feature. <br /><br />
          <B>Vue CLI:</B> Vue CLI is a full-featured command-line tool for
          scaffolding Vue.js projects. It streamlines the development process
          and provides useful features like project generation, plugin
          management, and more.<br /><br />
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
      </div>

      <div class="content">
        <h5>3. Why Vue.js?</h5>
        <p>
          <b>Approachable:</b> Vue.js has a gentle learning curve, making it
          easy for newcomers to get started. Its straightforward documentation
          and simple API make it accessible to developers of all skill
          levels.<br />

          <b>Flexibility:</b> Vue.js is designed to be flexible and adaptable.
          You can use it to build small interactive parts of a website or scale
          it up to create complex Single Page Applications.<br />

          <b>Performance:</b> Vue.js optimizes rendering and update mechanisms,
          ensuring efficient DOM manipulations. This leads to better performance
          in applications, even when dealing with dynamic content and real-time
          updates.<br />

          <b>Active Community:</b> Vue.js has a vibrant and active community.
          This community-driven nature ensures continuous improvement, extensive
          resources, and a plethora of plugins and extensions.<br />
        </p>
      </div>

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
      <div class="content">
        <h5>1. Vue Instance Creation:</h5>
        <div class="example-code">
          <p>
            Creating a Vue Instance: You create a Vue instance by instantiating
            the Vue class.<br />
            For example
          </p>
          <pre><code>var vm = new Vue(
  { // options }
  ); </code>
</pre>
        </div>
      </div>

      <div class="content">
        <h5>2. Vue Instance Properties:</h5>
        <div class="example-code">
          <p>
            <b>Data:</b> Vue instances have a data option where you can define
            the data properties. These properties are reactive, meaning changes
            to them trigger re-rendering of the DOM. .<br />
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
      </div>

      <div class="content">
        <div class="example-code">
          <p>
            <b>Methods:</b> Vue instances can have methods, which are functions
            that can be called in response to user events or other aspects of
            your application. For example:
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
      </div>

      <div class="content">
        <div class="example-code">
          <p>
            <b>Computed Properties:</b> Computed properties are based on the
            values of other properties and are re-evaluated when those
            properties change. Computed properties are cached and only re-run
            when necessary. For example:
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
      </div>

      <div class="content">
        <h5>3. Vue Instance Methods:</h5>
        <p>
          <b>$mount():</b><br />
          <b> Usage: </b>`vm.$mount(element)`<br />
          <b>Description:</b>Manually mounts the Vue instance to a DOM element.
          If you don't use this method, Vue automatically mounts the instance
          when you create it. This method is useful when you want to delay the
          mounting of the Vue instance to a specific element.<br /><br />

          <b>$destroy():</b><br />
          <b> Usage:</b> `vm.$destroy()` <br />
          <b>Description:</b>Destroys the Vue instance, cleaning up all its
          directives and child instances. It's particularly useful when you want
          to remove a Vue instance and its associated event listeners, watchers,
          and computed properties from the memory to prevent memory leaks.<br /><br />

          <b>$set(object, key, value):</b><br />
          <b> Usage:</b> Vue.set(object, key, value) or this.$set(object, key,
          value) within a Vue instance<br />
          <b>Description:</b> Sets a property on an object. This method is used
          to add new reactive properties to an object. When you add a new
          property to an object directly using the assignment operator, Vue
          might not be able to detect it. $set ensures that the new property
          becomes reactive.<br /><br />

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
      </div>

      <div class="content">
        <h5>4. Vue Lifecycle Hooks:</h5>
        <p>
          Vue instances have a series of lifecycle hooks that allow you to
          execute code at specific stages during the instance's lifecycle:<br /><br />

          <b>beforeCreate():</b> Called synchronously immediately after the
          instance has been initialized, before data observation and
          event/watcher setup.<br /><br />

          <b>created():</b> Called synchronously after the instance is created.
          At this stage, the instance has finished processing the options, and
          the data observation, computed properties, methods, watch/event
          callbacks have been set up.<br /><br />

          <b>beforeMount():</b> Called right before the mounting begins: the
          render function is about to be called for the first time.<br /><br />

          <b>mounted():</b> Called after the instance has been mounted, where el
          is replaced by the newly created vm.$el.<br /><br />

          <b>beforeUpdate():</b> Called when the data changes, before the
          virtual DOM is re-rendered and patched.<br /><br />

          <b>updated():</b> Called after a data change causes the virtual DOM to
          be re-rendered and patched.<br /><br />

          <b>beforeDestroy():</b> Called right before a Vue instance is
          destroyed. At this stage, the instance is still fully functional.<br /><br />

          <b>destroyed():</b> Called after a Vue instance has been destroyed.
          Cleanup goes here.<br /><br />

          Understanding and utilizing Vue instances is crucial for building
          Vue.js applications. They encapsulate the data, methods, and behavior
          of your application components, enabling a reactive and interactive
          user experience.
        </p>
      </div>
    </section>

    <section class="sec-text" id="section3">
      <h3>Template Syntax</h3>
      <div class="content">
        <h5>1.Interpolation:</h5>
        <div class="example-code">
          <p>
            Interpolation in Vue.js is a way to bind data to HTML elements. It
            is achieved using double curly braces {{ message1 }}. When you place
            data or expressions inside these curly braces, Vue replaces them
            with the actual values from your data properties. It allows you to
            display dynamic content on your web page.<br />
            For example<br />
            In this example, will be replaced with the value of the message data
            property, and any changes to message will automatically update the
            displayed content.
          </p>

          <pre><code>
        <h5>{{messages}}</h5>
      
      </code></pre>
        </div>
      </div>
      <div class="content">
        <h5>2. Directives:</h5>
        <p>
          <b>Description:</b> Vue directives are special tokens in the markup
          that tell the library to do something to a DOM element. They are
          prefixed with v- and are used to apply reactive behavior to the
          rendered DOM. Directives are Vue.js’s way of extending HTML
          functionality.<br />
        </p>
      </div>

      <div class="content">
        <h5>Common Directives:</h5>
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
      </div>
      <div class="content">
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
      </div>

      <div class="content">
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
      </div>

      <div class="content">
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
      </div>

      <div class="content">
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

    <section class="sec-text" id="section6">
      <h3>Event Handling</h3>
      <p>
        In Vue.js, you can handle DOM events using the v-on directive. This
        directive allows you to attach event listeners to specific DOM events
        and execute methods or expressions when those events occur. Here's a
        detailed explanation of event handling in Vue.js:<br />
        v-on: The v-on directive is used for event binding. It listens to DOM
        events and triggers the specified methods or expressions when the events
        occur. It can be used in several ways:
      </p>
      <div class="example-code">
        <p>
          <b>Method Call:</b><br />

          In this example, the handleClick method will be called when the button
          is clicked.
        </p>

        <pre>
      <code>{{ cliky }}<br>
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b>Method Call with Parameters:</b><br />

          Here, the <b>handleClick</b> method is called with the argument
          <b>'Hello'</b> when the button is clicked
        </p>
        <pre>
      <code>{{ click }}<br>
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b> Inline Expression:</b><br />
          In this case, the <b>counter</b> variable is incremented when the
          button is clicked. You can use any valid JavaScript expression here
        </p>
        <pre>
      <code>{{ counter }}
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b><b>Event Object:</b></b
          ><br />
          You can access the event object in the method by passing $event
        </p>
        <pre>
      <code>{{ clickme }}
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b><b>Shorthand:</b></b
          ><br />
          Vue provides a shorthand for <b>v-on</b>. Instead of
          <b>v-on:click,</b> you can use <b>@click:</b>
        </p>
        <pre>
      <code>{{ shorthand }}
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b><b>Preventing Default Behavior:</b></b
          ><br />
          You can prevent the default behavior of an event using the
          <b>event.preventDefault()</b> method in the event handler:
        </p>
        <pre>
      <code>{{ clickprevent }}
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b><b>Event Modifiers:</b></b
          ><br />
          Vue provides event modifiers to simplify common tasks. For example,
          <b>.stop</b> to call <b>event.stopPropagation()</b>,<b>.prevent</b>to
          call
          <b>event.preventDefault()</b>
          and <b>.once</b> to ensure the event listener is triggered only once
        </p>
        <pre>
      <code>{{ handlesubmit }}
</code></pre>
      </div>

      <div class="example-code">
        <p>
          <b><b>Key Modifiers:</b></b
          ><br />
          You can listen for specific key events using key modifiers like<b>
            .enter, .tab, .delete,</b
          >
          etc
        </p>
        <pre>
      <code>{{  entersub}}
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

    <section class="sec-text" id="section7">
      <h3>Computed Properties and Watchers:</h3>

      <p>
        In Vue.js, both computed properties and watchers are tools provided to
        handle changes in data properties and perform actions in response. They
        are powerful features that enhance reactivity and allow developers to
        create more complex and responsive applications.
      </p>

      <div class="content">
        <h5>Computed Properties</h5>
        <p>
          Description: Computed properties are properties in a Vue instance that
          are derived from the existing data properties. They are calculated
          based on the values of one or more data properties and are cached.
          Computed properties are reactive, meaning they automatically recompute
          whenever their dependent properties change. They help in keeping the
          template clean by encapsulating complex logic.
        </p>
      </div>
      <div class="example-code">
        <p>
          <b>Example:</b><br />

          In this example, the area computed property is calculated based on the
          radius data property. Whenever radius changes, area is automatically
          recomputed without the need for explicit calls.
        </p>

        <pre>
      <code>{{ compute }}<br>
</code></pre>
      </div>

      <div class="content">
        <h5>Watchers:</h5>
        <p>
          Description: Watchers in Vue.js allow you to perform asynchronous or
          expensive operations in response to data changes. Unlike computed
          properties, watchers are more flexible and can handle complex logic,
          including asynchronous tasks. You define a watcher by specifying a
          property to watch and a callback function to execute when the property
          changes.
        </p>
      </div>
      <div class="example-code">
        <p>
          <b>Example Usage:</b><br />
          In this example, the value property is being watched. Whenever value
          changes, the specified function is executed. Watchers are particularly
          useful when you need to perform actions such as making API calls or
          handling animations after a property changes.
        </p>
        <pre>
      <code>{{ watchto.replace('monging', "`Value changed from ${oldValue} to ${newValue}`") }}<br>
</code></pre>
      </div>

      <div class="content">
        <h5>Computed Properties vs. Watchers:</h5>
        <h5>Use Computed Properties When:</h5>
        <p>
          <b><b>*</b></b> You want to perform calculations based on data
          properties.<br />
          <b><b>*</b></b> You want to keep your template clean and readable.<br />
          <b><b>*</b></b> You want to take advantage of Vue's reactivity system
          for automatic updates.
        </p>
      </div>

      <div class="content">
        <h5>Use Watchers When:</h5>
        <p>
          <b><b>*</b></b> You want to perform asynchronous tasks or complex
          operations in response to property changes.<br />
          <b><b>*</b></b> You need to respond to changes in multiple data
          properties.<br />
          <b><b>*</b></b> You want fine-grained control over when the logic is
          executed
        </p>
      </div>
      <p>
        Understanding the distinction between computed properties and watchers
        is essential for building efficient and responsive Vue.js applications.
        Computed properties handle simple calculations and reactivity, while
        watchers handle more complex, asynchronous, or multiple-property
        dependent tasks. Choosing the right tool for the job is crucial for
        maintaining a clean and performant codebase.
      </p>
    </section>

    <section class="sec-text" id="section8">
      <h3>Components:</h3>

      <p>
        Vue components are the building blocks of Vue.js applications. They
        allow you to create reusable and encapsulated pieces of UI and logic.
        Here's an in-depth explanation of components and related concepts:
      </p>

      <div class="content">
        <h5>Vue Components:</h5>
        <div class="example-code">
          <p>
            <b>Description:</b> Vue components are custom elements that
            encapsulate a specific piece of UI and its corresponding logic. They
            are created using the Vue.component method or the .vue file format.
            Components are modular, making it easier to manage complex
            applications by breaking them down into smaller, reusable parts
            <br />
            <b>Example:</b>
          </p>

          <pre>
      <code>{{ vueComp }}<br>
</code></pre>
        </div>
      </div>

      <div class="content">
        <h5>Props:</h5>
        <div class="example-code">
          <p>
            Description: Props are custom properties that can be passed from a
            parent component to a child component. They allow the parent
            component to communicate with the child component by passing data
            down. Props are read-only in the child component, meaning they
            cannot be modified by the child component.<br />
          </p>
          <pre>
      <code>{{ prop }}<br> </code></pre>
        </div>
        <pre>
      <code> <p style="width:100%; background-color:#7a7a7a; border-radius: 10px 10px 0px 0px">html</p> <br>{{ prophtml }}
</code></pre>
      </div>

      <div class="content">
        <h5>Custom Events:</h5>
        <div class="example-code">
          <p>
            Description: Custom events allow communication from child components
            to parent components. Child components can emit custom events, which
            are then listened to and handled by the parent component. Custom
            events enable parent-child communication and enable child components
            to signal that something significant has happened.<br />
          </p>
          <pre>
      <code>{{ custev }}<br> 
</code></pre>
        </div>
        <pre><code><p style="width:100%; background-color:#7a7a7a; border-radius: 10px 10px 0px 0px">html</p> <br>{{ custhtml }}</code></pre>
      </div>

      <div class="content">
        <h5>Slots:</h5>
        <div class="example-code">
          <p>
            <b>Description:</b> Slots are placeholders inside a component's
            template that allow the parent component to inject content into the
            child component. They provide a way for parent components to pass
            HTML or other components into a child component's template.
            <b>Usage Example:</b><br />
          </p>
          <pre>
      <code>{{ slot }}<br> </code></pre>
        </div>
        <pre><code><p style="width:100%; background-color:#7a7a7a; border-radius: 10px 10px 0px 0px">html</p> <br>{{ slothtml }}
</code></pre>
      </div>

      <p>
        Understanding and effectively using components, props, custom events,
        and slots are essential for building maintainable and scalable Vue.js
        applications. Components enable you to create modular, reusable, and
        manageable code, facilitating the development of complex user
        interfaces.
      </p>
    </section>

    <section class="sec-text" id="section9">
      <h3>Directives:</h3>

      <p>
        In Vue.js, directives are special tokens in the markup that tell the
        library to do something to a DOM element. They are prefixed with v- and
        are used to add dynamic behavior to the DOM. While Vue.js provides
        several built-in directives like v-bind, v-model, v-for, and v-on, you
        can also create your own custom directives using the Vue.directive
        method.
      </p>

      <div class="content">
        <h5>Custom Directives:</h5>
        <div class="example-code">
          <p>
            Description: Custom directives are created using the Vue.directive
            method. They allow you to encapsulate and reuse DOM manipulations in
            a declarative way. Custom directives can be useful when you find
            yourself repeating the same DOM manipulations in multiple places
            within your application.
            <br />
            <b>Example:</b><br />
          </p>

          <pre>
      <code>{{ custDir }} <br> </code></pre>
        </div>
        <pre>
      <code><p style="width:100%; background-color:#7a7a7a; border-radius: 10px 10px 0px 0px">html</p> <br> {{custHtmlDir}}<br>
</code></pre>
      </div>

      <div class="content">
        <h5>Custom Events:</h5>
        <div class="codes">
          <div class="example-code">
            <p>
              Description: Custom events allow communication from child
              components to parent components. Child components can emit custom
              events, which are then listened to and handled by the parent
              component. Custom events enable parent-child communication and
              enable child components to signal that something significant has
              happened.<br />
            </p>

            <pre>
      <code>{{ custev }}<br> </code></pre>
          </div>
          <pre>
      <code> <p style="width:100%; background-color:#7a7a7a; border-radius: 10px 10px 0px 0px">html</p> <br>{{ custhtml }}
</code></pre>
        </div>

        <div class="codex">
          <p>
            In this example, the custom directive v-custom-directive changes the
            text color of the element to red. The value 'red' passed to the
            directive is bound to binding value.<br />
            <b>Note:</b>Custom directives provide a way to encapsulate complex
            behavior and make your templates more readable and maintainable.
            However, it's important to use them judiciously and prefer
            components when appropriate, as components are often more expressive
            and self-contained than custom directives.
          </p>
        </div>
      </div>
    </section>

    <section class="sec-text" id="section10">
      <h3>Transitions and Animations:</h3>

      <p>
        Transitions and animations in Vue.js provide a way to add smooth,
        visually appealing effects when elements enter or leave the DOM. Vue.js
        offers two main components for handling transitions: {{ trans }} and
        {{ transg }}. Let's explore these concepts in detail:
      </p>

      <div class="content">
        <h5>{{ trans }} and {{ transg }}</h5>

        <div class="example-code">
          <p>
            Description: {{ trans }} and {{ transg }} are wrapper components
            provided by Vue.js. They allow you to apply entering and leaving
            transitions to elements when they are added or removed from the DOM.
            {{ trans }} is used for single elements, while {{ transg }} is used
            for multiple elements (such as lists).
            <br />
          </p>

          <pre>
        <code>
          {{ singcode }} <br>
        </code>
      </pre>
        </div>
      </div>

      <div class="codex">
        <p>
          In this example, when the show data property changes, the
          {{ divo }} element inside the {{ trans }} component will smoothly fade
          in or out.
        </p>
      </div>

      <div class="content">
        <h5>Props:</h5>

        <div class="example-code">
          <p>
            <b>Usage Example (Multiple Elements with {{ transg }}): </b><br />
            Here, the {{ transg }} component applies transitions to the
            {{ lis }}elements generated by the v-for loop.
          </p>

          <pre>
        <code>{{ licode }}
        </code>
      </pre>
        </div>
      </div>
    </section>

    <section class="sec-text" id="section11">
      <h3>Routing:</h3>

      <p>
        Routing in Vue.js is facilitated by the official Vue Router, which
        allows you to build Single Page Applications (SPA) with client-side
        navigation. Vue Router provides a way to navigate between different
        views or components without reloading the entire page, creating a smooth
        and dynamic user experience.
      </p>

      <div class="content">
        <h5>Vue Router:</h5>
        <div class="example-code">
          <p>
            Description: Vue Router is the official routing library for Vue.js.
            It deeply integrates with Vue.js core to provide a seamless and
            efficient way to handle navigation in your applications. Vue Router
            allows you to map URLs to different components, enabling the
            creation of complex and dyn amic UIs while maintaining a single-page
            application structure.<br />
            In this example, the Vue Router is initialized with two routes: one
            for the home page (/) and another for the about page (/about). Each
            route maps to a specific component (Home and About).
          </p>

          <pre>
          <code>{{ routecode }}
          </code>
        </pre>
        </div>
      </div>

      <div class="content">
        <h5>Routing in Template:</h5>
        <div class="example-code">
          <p>
            In the template, {{ linker }} components are used for navigation,
            and {{ routview }} is a placeholder where the matched component will
            be rendered based on the current route.
          </p>

          <pre>
          <code>{{ tempcodes }}
          </code>
        </pre>
        </div>
      </div>

      <div class="codex">
        <p>
          Vue Router also supports advanced features like nested routes, route
          parameters, programmatic navigation, and route guards. These features
          provide flexibility and control over the navigation flow in your
          Vue.js applications, making it a powerful tool for building dynamic
          and responsive SPAs.
        </p>
      </div>
    </section>

    <section class="sec-text" id="section12">
      <h3>State Management: Vuex</h3>

      <p>
        State management in Vue.js applications, especially larger ones, can
        become complex. To address this, Vuex, the official state management
        library for Vue.js, provides a robust solution. Vuex allows you to
        manage the state of your application in a centralized store, making it
        accessible to all components. Let's delve into the details with a
        comprehensive example.
      </p>

      <div class="content">
        <h5>Vuex Store:</h5>
        <div class="example-code">
          <p>
            Description: The Vuex store is a centralized state management
            container for Vue.js applications. It enables you to manage the
            state in a predictable and organized manner. The store consists of
            state, mutations, actions, and getters.<br />
            <b>Usage Example:</b><br />
            In this example:<br />

            <b><b>*</b> state:</b> Represents the data of your application.<br />
            <b><b>*</b> mutations:</b> Defines functions to directly modify the
            state. They must be synchronous.<br />
            <b><b>*</b> actions:</b> Contains functions that can have
            asynchronous operations before committing mutations.<br />
            <b><b>*</b> getters:</b> Computes derived state based on the current
            state
          </p>

          <pre>
          <code>{{ vuexcode }}
          </code>
        </pre>
        </div>
      </div>

      <div class="content">
        <h5>Usage in Components:</h5>
        <h6>Component Example 1 (Using State):</h6>
        <h6>Component Example 2 (Using Actions and Getters):</h6>
        <div class="example-code">
          <p>
            In these components, the first one uses the state directly to
            display the count and commits mutations for increment and decrement.
            The second one uses a getter to compute squared count and an action
            to increment the count asynchronously.<br />
            <br />
            Vuex provides a clear, predictable, and centralized way to handle
            state in Vue.js applications, making it especially powerful for
            managing complex data flows and interactions in larger applications.
            Understanding and utilizing Vuex can greatly enhance your Vue.js
            development experience, especially for applications that require a
            scalable state management solution.
          </p>

          <pre>
          <code>{{ vuexstate.replace("oooo","") }}
          </code>
        </pre>
        </div>
      </div>
    </section>

    <section class="sec-text" id="section13">
      <h3>Vue CLI and Tools:</h3>
      <div class="content">
        <h5>Vue CLI:</h5>
        <div class="example-code">
          <p>
            Description: Vue CLI is a command-line tool for creating, managing,
            and developing Vue.js projects. It streamlines the process of
            setting up a new Vue.js application by providing a configurable and
            feature-rich scaffolding system. Vue CLI includes a variety of
            plugins and presets to simplify tasks like routing, state
            management, and CSS preprocessing.<br /><br />
            <b>Note:</b> Vue CLI provides a convenient and efficient way to
            bootstrap Vue.js projects, enabling developers to focus on building
            features instead of worrying about project configuration
          </p>

          <pre>
          <code>{{ clicode }}
          </code>
        </pre>
        </div>
        <p></p>
      </div>

      <div class="content">
        <h5>Vue Devtools:</h5>
        <p>
          Description: Vue Devtools is a browser extension available for Chrome,
          Firefox, and other modern browsers. It allows developers to inspect
          Vue.js components, state, props, events, and actions, making debugging
          and development more manageable.<br />
          <br />
          <b> Installation:</b><br />
          <a
            href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
            target="_blank"
            >Dev Tool for chrome</a
          ><br />
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/"
            target="_blank"
            >Dev Tool for Firefox</a
          ><br />

          <b>Usage:</b><br />
          <b>1.</b> Install Vue Devtools extension in your browser.<br />
          <b>2.</b> Open the Developer Tools in your Vue.js application (usually
          by pressing F12 or Ctrl+Shift+I).<br />
          <b>3.</b> Navigate to the "Vue" tab to inspect your Vue.js components,
          state, and events.<br /><br />

          Vue Devtools greatly simplifies the debugging process by providing
          insights into your Vue.js application's internal state, allowing you
          to track component lifecycles, inspect props, and debug events.<br /><br />

          Both Vue CLI and Vue Devtools are essential tools for Vue.js
          development. Vue CLI simplifies project setup and configuration, while
          Vue Devtools enhances your debugging capabilities, ensuring a smooth
          development experience for Vue.js applications.
        </p>
      </div>
    </section>

    <section class="sec-text" id="section14">
      <h3>Miscellaneous::</h3>
      <div class="content">
        <h5>Filters:</h5>
        <div class="example-code">
          <p>
            Description: Filters in Vue.js are a way to apply common text
            formatting or transformations to the output in templates. They are
            usable in two places: mustache interpolations and v-bind
            expressions.<br />
            <b>Usage Example:</b><br />
            In this example, the uppercase filter converts the message to
            uppercase before displaying it in the template.
          </p>

          <pre>
          <code>{{ filters }}
          </code>
        </pre>
        </div>
      </div>

      <div class="content">
        <h5>Mixins:</h5>
        <div class="example-code">
          <p>
            Description: Mixins are a way to distribute reusable functionalities
            for Vue components. A mixin object can contain any component
            options. When a component uses a mixin, all options in the mixin
            will be "mixed" into the component.<br />
            <b>Usage Example:</b><br />
            In this example, the myMixin object provides a message data property
            and a logMessage method. When the component uses this mixin, it
            gains access to these properties and methods.
          </p>

          <pre>
          <code>{{ mixins }}
          </code>
        </pre>
        </div>
      </div>

      <div class="content">
        <h5>Provide/Inject:</h5>
        <div class="example-code">
          <p>
            Description: Provide/Inject is an advanced dependency injection
            system in Vue.js. It allows you to provide values or objects from a
            parent component and inject them into child components without the
            need to pass them as props explicitly.<br />
            <b>Usage Example:</b><br />
            In this example, the parent component provides a sharedData
            property. The child component injects sharedData and can use it
            without explicitly passing it as a prop.
          </p>

          <pre>
          <code>{{ injection }}
          </code>
        </pre>
        </div>
      </div>
      <p>
        These features in Vue.js provide powerful mechanisms for enhancing the
        modularity, reusability, and flexibility of your components. Filters
        allow you to format data directly in templates, mixins enable code reuse
        across components, and Provide/Inject provides a flexible way to share
        data between components without tight coupling. Understanding and
        effectively using these features can greatly improve your Vue.js
        development workflow.
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
      click: `<button v-on:click="handleClick('Hello')">Click me</button>`,
      counter: `<button v-on:click="counter++">Increment</button>`,
      clickme: `<button v-on:click="handleClick($event)">Click me</button>`,
      shorthand: `<button @click="handleClick">Click me</button>`,
      clickprevent: `<a @click.prevent="handleClick" href="#">Click me</a>`,
      handlesubmit: `<form @submit.prevent.once="handleSubmit">Submit</form>`,
      entersub: `<input @keyup.enter="submitForm">`,
      cliky: `<button v-on:click="handleClick">Click me</button>`,
      compute: `data: {
  radius: 5
},
computed: {
  area: function() {
    return Math.PI * this.radius * this.radius;
  }
}
`,
      watchto: `data: {
  value: 10
},
watch: {
  value: function(newValue, oldValue) {
    console.log(monging);
    // Perform complex operations or asynchronous tasks here
  }
}
`,
      vueComp: `Vue.component('my-component', {
  template: '<div>A custom component!</div>'
});
`,
      prop: `Vue.component('child-component', {
  props: ['message'],
  template: '<div>{{ message }}</div>'
});

new Vue({
  el: '#app',
  data: {
    parentMessage: 'Hello from parent!'
  }
});
`,
      prophtml: `<div id="app">
  <child-component :message="parentMessage"></child-component>
</div>
`,
      custev: `Vue.component('child-component', {
  template: '<button @click="sendMessage">Click me!</button>',
  methods: {
    sendMessage: function() {
      this.$emit('custom-event', 'Hello from child!');
    }
  }
});

new Vue({
  el: '#app',
  data: {
    messageFromChild: ''
  },
  methods: {
    handleCustomEvent: function(message) {
      this.messageFromChild = message;
    }
  }
});
`,

      custhtml: `<div id="app">
  <child-component @custom-event="handleCustomEvent"></child-component>
  <p>Message from child: {{ messageFromChild }}</p>
</div>
`,

      slot: `Vue.component('my-component', {
  template: '<div><slot></slot></div>'
});
`,
      slothtml: `<my-component>
  <p>This content will be injected into the component.</p>
</my-component>
`,

      custDir: `Vue.directive('custom-directive', {
  bind(el, binding) {
    // This hook is called once when the directive is first bound to the element.
    // You can perform initial setup here.
    el.style.color = binding.value;
  },
  update(el, binding) {
    // This hook is called when the bound element's value changes.
    // You can react to value changes here.
    el.style.color = binding.value;
  },
  unbind(el) {
    // This hook is called once when the directive is unbound from the element.
    // You can perform cleanup here.
  }
});
`,
      custHtmlDir: `<div v-custom-directive="'red'">This text will be red</div>`,
      trans: `<transition>`,
      transg: `<transition-group>`,
      transcode: `<transition name="fade">
  <div v-if="show">This element will fade in and out</div>
</transition>
`,
      singcode: `Usage Example (Single Element):
      <transition name="fade">
        <div v-if="show">This element will fade in and out</div>
      </transition>
`,
      divo: `<div>`,
      lis: `<li>`,
      licode: `<transition-group name="list" tag="ul">
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</transition-group>
`,
      routecode: `// main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
`,
      tempcodes: `<!-- App.vue -->
<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
  </div>
</template>
`,

      linker: `<router-link>`,
      routview: `<router-view>`,
      vuexcode: `// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  },
  getters: {
    squaredCount: state => state.count ** 2
  }
});
`,
      vuexstate: `// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  },
  getters: {
    squaredCount: state => state.count ** 2
  }
});

//second example

// Counter.vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<scrioooopt>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  }
};
</scrioooopt>

`,
      clicode: `Installation:
npm install -g @vue/cli
# or
yarn global add @vue/cli

//Creating a New Project:

vue create my-project
# or with Vue 2 or Vue 3
vue create my-project --preset vuejs/vue2

//Project development
cd my-project
npm run serve
# or
yarn serve`,
      filters: `// main.js
Vue.filter('uppercase', function(value) {
  if (!value) return '';
  return value.toUpperCase();
});

//html

<!-- Template -->
<div>{{ message | uppercase }}</div>
`,
      mixins: `// mixin.js
export const myMixin = {
  data() {
    return {
      message: 'Hello from mixin!'
    };
  },
  methods: {
    logMessage() {
      console.log(this.message);
    }
  }
};

// Component using the mixin
import { myMixin } from './mixin.js';

export default {
  mixins: [myMixin],
  created() {
    this.logMessage(); // Outputs: "Hello from mixin!"
  }
};
`,
      injection: `// Parent Component
export default {
  data() {
    return {
      sharedValue: 'Shared data from parent'
    };
  },
  provide() {
    return {
      sharedData: this.sharedValue
    };
  }
};

// Child Component
export default {
  inject: ['sharedData'],
  created() {
    console.log(this.sharedData); // Outputs: "Shared data from parent"
  }
};
`,
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
};
</script>

<style scoped>
.main {
  padding-left: 4dvw;
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
  height: 92vh;
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
.side-bar:hover ~ ::-webkit-scrollbar-track {
  background-color: #fff;
}
.side-bar ul {
  padding: 0;
  margin: 0;
}

.side-bar ul li {
  display: flex;
  overflow: hidden;
  list-style: none;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #238075;
}

.side-bar ul li:hover {
  background-color: rgb(30, 143, 130);
}
.side-bar ul li:active {
  background-color: rgb(30, 143, 130);
}
.sec-text {
  padding: 0px 6px;
  background-color: #f2f2f2;
  margin-top: 16px;
}
.sec-text h3 {
  text-decoration: underline;
}
.sec-text p {
  padding: 6px 16px;
}
.content {
  margin-top: 10px;
}
.content pre {
  border-radius: 6px;
  padding: 10px 10px;
  background-color: #333;
  color: #f2f2f2;
}
.example-code {
  margin-top: 6px;
  border: 1px solid #999;
  background-color: #f1f1f1;
  border-radius: 6px;
  display: flex;
  width: 100%;
}
.example-code p {
  width: 50%;
}
.example-code .codex {
  width: 100%;
}
.example-code pre {
  width: 50%;
  display: flex;
  border-radius: 6px 6px 3px 3px;
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
