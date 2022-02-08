<template>
  <div class="container">
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col col-sm-12 col-md-6 col-lg-4 col-xl-3"
      >
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  name: "ProductList",

  async created() {
    this.$store.dispatch("fetchProducts");
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
