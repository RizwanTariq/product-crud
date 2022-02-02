<template>
  <div class="card my-3 p-3 rounded" style="height: 25rem">
    <img :src="product.picture" class="card-img-top" />
    <div class="card-body">
      <nuxt-link :to="`products/${product.id}`">
        <h4 class="card-title">{{ product.name }}</h4>
      </nuxt-link>
      <div class="card-text">
        {{ product.brand }}
      </div>
      <h4 class="card-text">
        <strong>$ {{ product.price }}</strong>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
    },
  },
};
</script>
