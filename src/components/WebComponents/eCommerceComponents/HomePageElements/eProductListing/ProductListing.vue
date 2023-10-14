<template>
  <div class="product-listing">
    <div class="container">
      <FilterAndSorting
        :filters="filters"
        :sortOptions="sortOptions"
        @apply-filters="applyFilters"
      />
      <div class="row">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          class="col-lg-2 col-md-3 col-sm-6 col-12"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterAndSorting from "./FilterAndSorting.vue";
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    FilterAndSorting,
    ProductCard,
  },
  data() {
    return {
      filters: {
        category: "",
        priceRange: "",
        color: "",
      },
      sortOptions: [
        { label: "Price Low to High", value: "priceLowToHigh" },
        { label: "Price High to Low", value: "priceHighToLow" },
      ],
      products: [
        {
          id: 1,
          name: "Laptop",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e2.jpg"),
          price: 49.99,
          category: "Electronics",
          color: "White",
        },
        {
          id: 2,
          name: "Earphone",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e3.jpg"),
          price: 29.99,
          category: "Electronics",
          color: "White",
        },
        {
          id: 3,
          name: "Camera",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e4.jpg"),
          price: 99.99,
          category: "Electronics",
          color: "Black",
        },
        {
          id: 4,
          name: "Headphone",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e1.jpg"),
          price: 99.99,
          category: "Electronics",
          color: "Black",
        },
        {
          id: 5,
          name: "Game Rem",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e7.jpg"),
          price: 99.99,
          category: "Electronics",
          color: "White",
        },
        {
          id: 6,
          name: "Game Remo",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e8.jpg"),
          price: 99.99,
          category: "Electronics",
          color: "White",
        },
        {
          id: 7,
          name: "Headphone",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e9.jpg"),
          price: 79.99,
          category: "Electronics",
          color: "Blue",
        },
        {
          id: 8,
          name: "Mobile Phone",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/e10.jpg"),
          price: 79.99,
          category: "Electronics",
          color: "Black",
        },
        {
          id: 9,
          name: "Black Gawn",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/f2.jpg"),
          price: 139.99,
          category: "Fashion",
          color: "Black",
        },
        {
          id: 10,
          name: "Skirt",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/f4.jpg"),
          price: 19.99,
          category: "Fashion",
          color: "White",
        },
        {
          id: 11,
          name: "Party Skirt",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/f7.jpg"),
          price: 199.99,
          category: "Fashion",
          color: "Blue",
        },
        {
          id: 12,
          name: "Winter Coat",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/f1.jpg"),
          price: 179.99,
          category: "Fashion",
          color: "Brown",
        },
        {
          id: 13,
          name: "Baby Skirt",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/f3.png"),
          price: 179.99,
          category: "Fashion",
          color: "Black",
        },
        {
          id: 14,
          name: "Bribel Skirt",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/f5.jpg"),
          price: 69.99,
          category: "Fashion",
          color: "White",
        },
        {
          id: 15,
          name: "Formal Gawn",
          image: require("@/components/WGGComponents/ByWebsiteComponents/eCommerceComponents/Images/f6.jpg"),
          price: 19.99,
          category: "Fashion",
          color: "White",
        },
        // ... Add more products
      ],
    };
  },
  computed: {
    filteredProducts() {
      let filtered = [...this.products];

      if (this.filters.category) {
        filtered = filtered.filter(
          (product) => product.category === this.filters.category
        );
      }

      if (this.filters.priceRange) {
        const [min, max] = this.filters.priceRange.split("-");
        filtered = filtered.filter(
          (product) =>
            parseInt(product.price.slice(1)) >= parseInt(min) &&
            parseInt(product.price.slice(1)) <= parseInt(max)
        );
      }

      if (this.filters.color) {
        filtered = filtered.filter(
          (product) => product.color === this.filters.color
        );
      }

      if (this.sortBy) {
        if (this.sortBy === "priceLowToHigh") {
          filtered.sort(
            (a, b) =>
              parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
          );
        } else if (this.sortBy === "priceHighToLow") {
          filtered.sort(
            (a, b) =>
              parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
          );
        }
      }

      return filtered;
    },
  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
    },
  },
};
</script>

<style scoped>
.product-listing {
  padding: 10px 0;
}

.container {
  max-width: 100%;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}
</style>
