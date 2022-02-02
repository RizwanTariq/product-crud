import Vuex from "vuex";
import {
  getProducts,
  removeProduct,
  createProduct as createProductService,
  updateProduct as updateProductService,
} from "~/services/productService";
const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
    },
    mutations: {
      SET_PRODUCTS(state, products) {
        state.products = products;
      },
    },
    actions: {
      async fetchProducts(vuexContext) {
        const products = await getProducts();
        vuexContext.commit("SET_PRODUCTS", products);
      },
      async deleteProduct(vuexContext, { id }) {
        await removeProduct(id);
        const products = await getProducts();
        vuexContext.commit("SET_PRODUCTS", products);
      },
      async createProduct(vuexContext, { product }) {
        await createProductService(product);
        const products = await getProducts();
        vuexContext.commit("SET_PRODUCTS", products);
      },
      async updateProduct(vuexContext, { id, product }) {
        await updateProductService(id, product);
        const products = await getProducts();
        vuexContext.commit("SET_PRODUCTS", products);
      },
    },
    getters: {
      product: (state) => (id) => {
        return state.products.find((p) => p.id === id);
      },
    },
  });
};

export default createStore;
