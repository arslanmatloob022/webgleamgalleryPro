import { createRouter, createWebHashHistory } from "vue-router";
import AboutUsPageVue from "@/views/AboutUsPage/AboutUsPage.vue";
import CategoriesPageVue from "@/views/CategoriesPage/CategoriesPage.vue";
import LandingPageVue from "@/views/LandingPage/LandingPage.vue";
import learningsPageVue from "@/views/LearningPage/LearningPage.vue";
import ElementsPageVue from "@/views/ElementsPage/ElementsPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPageVue,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUsPageVue,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesPageVue,
  },
  {
    path: "/elements",
    name: "elements",
    component: ElementsPageVue,
  },
  {
    path: "/learnings",
    name: "learnings",
    component: learningsPageVue,
  },
  {
    path: "/learningspage",
    name: "learningspage",
    component: () =>
      import(/*"learningspage"*/ "@/views/LearningPage/learningMainPage.vue"),
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: () =>
      import(/*"subscribe"*/ "@/views/SubscriptionPage/SubscriptionPage.vue"),
  },

  // Web components Pages
  {
    path: "/analyticsweb",
    name: "analyticsweb",
    component: () =>
      import(
        /* "analyticsweb"*/ "@/views/WebComponents/AnalyticalPage/AnalyticsWebPage.vue"
      ),
  },

  {
    path: "/crmweb",
    name: "crmweb",
    component: () =>
      import(/* "crmweb"*/ "@/views/WebComponents/CrmPage/CrmWebPage.vue"),
  },

  {
    path: "/ecomweb",
    name: "ecomweb",
    component: () =>
      import(
        /*"ecomweb" */ "@/views/WebComponents/ECommercePage/EcomWebPage.vue"
      ),
  },

  {
    path: "/gamingweb",
    name: "gamingweb",
    component: () =>
      import(
        /*"gamingweb" */ "@/views/WebComponents/GamingPage/GamingWebPage.vue"
      ),
  },

  // Order Replacement Components
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(
        /* "checkout "*/ "@/components/WebComponents/eCommerceComponents/eComCheckOut/ShippingAndBilling.vue"
      ),
  },
  {
    path: "/shipping-options",
    name: "shipping-options",
    component: () =>
      import(
        /*"shipping-options" */ "@/components/WebComponents/eCommerceComponents/eComCheckOut/ShippingOptions.vue"
      ),
  },
  {
    path: "/payment-methods",
    name: "payment-methods",
    component: () =>
      import(
        /* "payment-methods" */ "@/components/WebComponents/eCommerceComponents/eComCheckOut/PaymentMethod.vue"
      ),
  },
  {
    path: "/summary",
    name: "summary",
    component: () =>
      import(
        /*"summary"*/ "@/components/WebComponents/eCommerceComponents/eComCheckOut/OrderSummary.vue"
      ),
  },

  // Basic elements

  // WebGleams
  {
    path: "/loginpages",
    name: "loginpages",
    component: () =>
      import(/*"loginpages"*/ "@/views/WebGleams/LoginPagesView.vue"),
  },
  {
    path: "/aimations",
    name: "animations",
    component: () =>
      import(/*"animations"*/ "@/views/WebGleams/AnimationsView.vue"),
  },
  {
    path: "/headers",
    name: "headers",
    component: () => import(/*"headers"*/ "@/views/WebGleams/HeadersView.vue"),
  },
  {
    path: "/productcards",
    name: "productcards",
    component: () =>
      import(/*"productcards"*/ "@/views/WebGleams/ProductCradsView.vue"),
  },
  {
    path: "/loaders",
    name: "loaders",
    component: () => import(/*"loaders"*/ "@/views/WebGleams/LoadersView.vue"),
  },
  {
    path: "/searchbars",
    name: "searchbars",
    component: () =>
      import(/*"searchbars"*/ "@/views/WebGleams/SearchbarsView.vue"),
  },
  {
    path: "/sidebars",
    name: "sidebars",
    component: () =>
      import(/*"searchbars"*/ "@/views/WebGleams/SidebarsView.vue"),
  },
  {
    path: "/fullstack",
    name: "fullstack",
    component: () =>
      import(/*"fullstack"*/ "@/views/LearningPage/FullStackDev.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPoistion) {
    return { top: 0 };
  },
});

export default router;

// {
//   path: '/',
//   name: 'home',
//   component: HomeView
// },
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }
