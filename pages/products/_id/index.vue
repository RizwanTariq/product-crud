<template>
  <div class="container my-3">
    <nuxt-link to="/products" class="btn btn-outline-primary mb-4"
      >Go Back</nuxt-link
    >
    <div class="row">
      <div class="col col-md-5">
        <img :src="product.picture" :alt="product.name" class="img-fluid" />
      </div>
      <div class="col col-md-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h3>{{ product.name }}</h3>
          </li>
          <li class="list-group-item">
            <p>
              <span class="fw-bold">Description:</span>
              {{ product.description }}
            </p>
          </li>
          <li class="list-group-item">
            <p>
              <span class="fw-bold">Brand:</span>
              {{ product.brand }}
            </p>
          </li>
          <li class="list-group-item">
            <p>
              <span class="fw-bold">Price:</span>
              <span class="fs-3 fw-bolder text-info">${{ product.price }}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="col col-md-3">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <div class="col">Price:</div>
                <div class="col">
                  <span class="fs-4 fw-bold">${{ product.price }}</span>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col">Status:</div>
                <div class="col">
                  <span
                    :class="
                      product.countInStock > 0 ? 'text-success' : 'text-danger'
                    "
                    >{{
                      product.countInStock > 0 ? "In Stock" : "Out Of Stock"
                    }}</span
                  >
                </div>
              </div>
            </li>
            <li class="list-group-item d-grid">
              <nuxt-link as="button" :to="`/${product.id}`" class="btn btn-info"
                >Update Product</nuxt-link
              >
            </li>
            <li class="list-group-item d-grid">
              <button
                type="button"
                @click.prevent="onDelete"
                class="btn btn-danger"
              >
                Delete Product
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      product: {},
    };
  },
  async created() {
    this.product = this.$store.getters.product(this.$route.params.id);
  },
  methods: {
    async onDelete() {
      this.$store.dispatch({
        type: "deleteProduct",
        id: this.$route.params.id,
      });
      this.$router.push({ path: "/products" });
    },
  },
};
</script>
