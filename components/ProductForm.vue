<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="onSubmit">
            <fieldset>
              <div class="form-group has-danger">
                <label for="productName" class="form-label mt-2"
                  >Product Name</label
                >
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors[0] }"
                    id="productName"
                    v-model="name"
                  />
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
              <div class="form-group has-danger">
                <label for="brandName" class="form-label mt-2"
                  >Brand Name</label
                >
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors[0] }"
                    id="brandName"
                    v-model="brand"
                  />
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
              <div class="form-group has-danger">
                <label for="productPrice" class="form-label mt-2">$Price</label>
                <ValidationProvider
                  rules="required|numeric"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors[0] }"
                    id="productPrice"
                    v-model="price"
                  />
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
              <div class="form-group has-danger">
                <label for="productCategory" class="form-label mt-2"
                  >Category</label
                >
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <select
                    class="form-select"
                    :class="{ 'is-invalid': errors[0] }"
                    id="productCategory"
                    v-model="category"
                  >
                    <option value="" selected disabled>
                      Choose category...
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Books">Books</option>
                    <option value="Handmade">Handmade</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Video Games">Video Games</option>
                    <option value="Computers">Computers</option>
                  </select>
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="productImage" class="form-label mt-2"
                  >Product Picture</label
                >

                <input
                  class="form-control"
                  type="file"
                  accept="image/*"
                  id="productImage"
                  @change="handleImgUpload"
                />
                <small class="text-info">{{
                  validatePicture ? "Picture is mandatory" : ""
                }}</small>
              </div>

              <div class="form-group has-danger">
                <label for="productDescription" class="form-label mt-2"
                  >Description</label
                >
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <textarea
                    class="form-control"
                    id="productDescription"
                    :class="{ 'is-invalid': errors[0] }"
                    rows="3"
                    v-model="description"
                  ></textarea>
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-3"
                :class="{ disabled: invalid || validatePicture }"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </ValidationObserver>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "ProductForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      brand: "",
      price: null,
      category: "",
      description: "",
      picture: null,
      validatePicture: true,
    };
  },
  methods: {
    handleImgUpload(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.picture = e.target.result;
        this.validatePicture = false;
      };
    },
    onSubmit(e) {
      if (this.validatePicture) return null;
      const product = {
        id: Date.now().toString(),
        name: this.name,
        brand: this.brand,
        price: this.price,
        category: this.category,
        description: this.description,
        picture: this.picture,
      };
      console.log(product);
    },
  },
};
</script>

<style></style>
