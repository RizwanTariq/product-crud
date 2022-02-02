<template>
  <product-form :productId="$route.params.id" />
</template>

<script>
import ProductForm from "~/components/ProductForm.vue";
export default {
  name: "Home",
  components: {
    ProductForm,
  },
};
</script>
