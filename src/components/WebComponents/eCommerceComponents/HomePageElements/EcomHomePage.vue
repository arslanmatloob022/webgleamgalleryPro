<template>
  <section class="row main">
    <ecom-web-header-two
      class="col-lg-12 col-md-12 col-sm-12 col-12"
    ></ecom-web-header-two>

    <hero-banner
      class="col-lg-12 col-md-12 col-sm-12 col-12 margin-btm"
    ></hero-banner>

    <deals-and-promotions class="col-lg-12"></deals-and-promotions>

    <div class="row bgwhite">
      <h1 class="col-lg-12 col-md-12 col-sm-12 col-12 margin-btm">
        Our Categories
      </h1>
      <products-categories
        class="col-lg-2 col-md-4 col-sm-4 col-6 margin-btm"
        v-for="categories in productcategories"
        :key="categories.id"
        :categories="categories"
      ></products-categories>
    </div>

    <h1 class="col-lg-12 col-md-12 col-sm-12 col-12">Featured Products</h1>
    <featured-product
      class="fproduct col-lg-3 col-md-4 col-sm-4 col-6 margin-btm"
      v-for="fproduct in featuredProducts"
      :key="fproduct.id"
      :fproduct="fproduct"
    ></featured-product>

    <h1 class="col-lg-12 col-md-12 col-sm-12 col-12">Products List</h1>
    <product-listing-vue class="margin-btm"></product-listing-vue>

    <div class="row bgwhite">
      <h1 class="col-lg-12 col-md-12 col-sm-12 col-12">Reviews Abuot Us</h1>
      <testimonials-view
        v-for="testimony in testimonials"
        :key="testimony.id"
        :testimony="testimony"
        class="col-lg-4 col-md-6 col-sm-12 col-12 margin-btm"
      >
      </testimonials-view>
    </div>
  </section>
</template>

<script>
import EcomWebHeaderTwo from "@/components/WebComponents/eCommerceComponents/eComHeaders/EcomWebHeaderTwo.vue";
import HeroBanner from "@/components/WebComponents/eCommerceComponents/HomePageElements/HeroBanner.vue";
import ProductsCategories from "@/components/WebComponents/eCommerceComponents/HomePageElements/ProductsCategories.vue";
import DealsAndPromotions from "./DealsAndPromotions.vue";
import FeaturedProduct from "./FeaturedProduct.vue";
import TestimonialsView from "./TestimonialsView.vue";
import ProductListingVue from "./eProductListing/ProductListing.vue";
export default {
  name: "EcomHomePage",
  data() {
    return {
      price: 49.99,
      disc: 0.2,
      featuredProducts: [
        {
          id: 1,
          name: "Laptops",
          image: require("../Images/e2.jpg"),
          price: 49.99,
          disc: 0.2,
        },
        {
          id: 2,
          name: "Laptops",
          image: require("../Images/e3.jpg"),
          price: 49.99,
          disc: 0.2,
        },
        {
          id: 3,
          name: "Laptops",
          image: require("../Images/e1.jpg"),
          price: 49.99,
          disc: 0.2,
        },
        {
          id: 4,
          name: "Laptops",
          image: require("../Images/e4.jpg"),
          price: 49.99,
          disc: 0.2,
        },
      ],

      computed: {
        DiscountedPrice() {
          let discount = this.price * (1 - this.disc);
          return discount.toFixed(2);
        },
      },

      // Catgories of products data
      productcategories: [
        {
          id: 1,
          name: "Headphones",
          icon: "fa fa-headphones",
        },
        {
          id: 4,
          name: "Ear-Phones",
          icon: "fa fa-assistive-listening-systems",
        },
        {
          id: 2,
          name: "Laptops",
          icon: "fa fa-laptop",
        },
        {
          id: 3,
          name: "Mobiles",
          icon: "fa fa-mobile",
        },

        {
          id: 5,
          name: "Accesories",
          icon: "fa fa-cubes",
        },
        {
          id: 6,
          name: "Extensions",
          icon: "fa fa-external-link",
        },

        // Add more categories here
      ],

      // Testimonials Data
      testimonials: [
        {
          id: 1,
          name: "John Doe",
          image: require("../Images/testi1.jpg"),
          text: "Great products and amazing customer service. Highly recommended!",
        },
        {
          id: 2,
          name: "Vancy Clark",
          image: require("../Images/testi2.jpg"),
          text: "Great products and amazing customer service. Highly recommended!",
        },
        {
          id: 3,
          name: "Meghan Fox",
          image: require("../Images/testi3.jpg"),
          text: "Great products and amazing customer service. Highly recommended!",
        },
        // Add more testimonials here
      ],
    };
  },
  components: {
    HeroBanner,
    DealsAndPromotions,
    FeaturedProduct,
    ProductsCategories,
    TestimonialsView,
    ProductListingVue,
    EcomWebHeaderTwo,
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  margin: 0;
  padding: 0;
}
.bgwhite {
  width: 100%;
  background-color: #ffffffd5;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 10px;
  border-collapse: collapse;
}
.hero-baner {
  width: 100%;
}
.margin-btm {
  margin-bottom: 30px;
}
h1 {
  color: rgba(3, 158, 49, 0.75);
  text-decoration: wavy;
  text-align: center;
  font-family: "PT Serif", serif;
}
/* .flexing {
  display: flex;
}*/
</style>
