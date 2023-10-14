<template>
  <div class="filters-and-sorting">
    <div class="filters">
      <select name="filtercatory" v-model="filters.category">
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Homedecore">Home Decore</option>
        <!-- Add more categories -->
      </select>
      <select name="filtercategory" v-model="filters.priceRange">
        <option value="">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-150">$100 - $150</option>
        <option value="150-200">$100 - $150</option>
        <!-- Add more price ranges -->
      </select>
      <select name="filtercattegory" v-model="filters.color">
        <option value="">All Colors</option>
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
        <option value="Brown">Brown</option>
        <!-- Add more colors -->
      </select>
    </div>

    <div class="sorting">
      <select name="sorting" v-model="sortBy">
        <option value="">Sort By</option>
        <option
          v-for="option in sortOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filters: Object,
    sortOptions: Array,
  },
  data() {
    return {
      sortBy: "",
    };
  },
  watch: {
    sortBy(newSort) {
      this.$emit("apply-filters", { ...this.filters });
    },
  },
};
</script>

<style scoped>
/* Your filters and sorting styles */
.filters-and-sorting {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filters select,
.sorting select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.sorting select {
  background-color: #e44d26;
  color: white;
}

.sorting select option {
  background-color: white;
  color: #e44d26;
}
</style>
