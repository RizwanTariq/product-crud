import { extend } from "vee-validate";
import { required, alpha, numeric } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters",
});
extend("numeric", {
  ...numeric,
  message: "This field must only contain numbers",
});
