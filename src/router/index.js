import { createRouter, createWebHashHistory } from "vue-router";
import AboutUsPageVue from "@/views/AboutUsPage/AboutUsPage.vue";
import CategoriesPageVue from "@/views/CategoriesPage/CategoriesPage.vue";
import LandingPageVue from "@/views/LandingPage/LandingPage.vue";
import FeaturesPageVue from "@/views/FeaturesPage/FeaturesPage.vue";
import SubscritionPage from "@/views/SubscriptionPage/SubscriptionPage.vue";
import ElementsPageVue from "@/views/ElementsPage/ElementsPage.vue";
import AnalyticsWebPageVue from "@/views/WebComponents/AnalyticalPage/AnalyticsWebPage.vue";
import CrmWebPageVue from "@/views/WebComponents/CrmPage/CrmWebPage.vue";
import EComWeb from "@/views/WebComponents/ECommercePage/EcomWebPage.vue";
import EntertainmentWebPageVue from "@/views/WebComponents/EntertainmentPage/EntertainmentWebPage.vue";
import GamingWebPageVue from "@/views/WebComponents/GamingPage/GamingWebPage.vue";
import ShippingAndBillingVue from "@/components/WebComponents/eCommerceComponents/eComCheckOut/ShippingAndBilling.vue";
import ShippingOptionsVue from "@/components/WebComponents/eCommerceComponents/eComCheckOut/ShippingOptions.vue";
import PaymentMethodVue from "@/components/WebComponents/eCommerceComponents/eComCheckOut/PaymentMethod.vue";
import OrderSummaryVue from "@/components/WebComponents/eCommerceComponents/eComCheckOut/OrderSummary.vue";
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
    path: "/features",
    name: "features",
    component: FeaturesPageVue,
  },
  {
    path: "/subscribe",
    name: "subscribe",
    component: SubscritionPage,
  },

  // Web components Pages
  {
    path: "/analyticsweb",
    name: "analyticsweb",
    component: AnalyticsWebPageVue,
  },

  {
    path: "/crmweb",
    name: "crmweb",
    component: CrmWebPageVue,
  },

  {
    path: "/ecomweb",
    name: "ecomweb",
    component: EComWeb,
  },

  {
    path: "/entertainmentweb",
    name: "entertainmentweb",
    component: EntertainmentWebPageVue,
  },

  {
    path: "/gamingweb",
    name: "gamingweb",
    component: GamingWebPageVue,
  },

  // Order Replacement Components
  {
    path: "/checkout",
    name: "checkout",
    component: ShippingAndBillingVue,
  },
  {
    path: "/shipping-options",
    name: "shipping-options",
    component: ShippingOptionsVue,
  },
  {
    path: "/payment-methods",
    name: "payment-methods",
    component: PaymentMethodVue,
  },
  {
    path: "/summary",
    name: "summary",
    component: OrderSummaryVue,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
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
