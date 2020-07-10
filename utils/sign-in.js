import { validate } from "./validation.js";
import {
   showErrorForInput,
   showHideSuccess,
   showHideError,
   setButtonLoading,
   clearFieldsOf,
} from "./ui-feedback.js";

export default function () {
   const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
   const API_PATH_SIGNIN = "/auth/login";

   const signInForm = document.getElementById("signInForm");
   signInForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const signInFormData = new FormData(signInForm);
      const signInFormInputs = [
         {
            id: "signInEmail",
            name: "email",
            value: signInFormData.get("email"),
            type: "text",
            validators: ["isRequired", "isEmail"],
            error: null,
            errorMessageId: "signInEmailErrorMessage",
         },
         {
            id: "signInPassword",
            name: "password",
            value: signInFormData.get("password"),
            type: "text",
            validators: ["isRequired"],
            error: null,
            errorMessageId: "signInPasswordErrorMessage",
         },
      ];

      const signInFormInvalidInputs = validate(signInFormInputs);
      if (signInFormInvalidInputs.length > 0) {
         signInFormInvalidInputs.forEach(function (invalidInputProps) {
            showErrorForInput(invalidInputProps);
         });

         const invalidDOMElements = document
            .getElementById("signInForm")
            .querySelectorAll(".is-invalid");

         invalidDOMElements.forEach(function (element) {
            element.addEventListener("input", function () {
               this.classList.remove("is-invalid");
            });
         });
         return;
      }

      setButtonLoading("signInButton", "start");
      fetch(`${API_URL}${API_PATH_SIGNIN}`, {
         method: "POST",
         body: signInFormData,
      })
         .then(function () {
            setButtonLoading("signInButton", "stop", "Sign In");
            showHideSuccess("User signed in successfully", "show");
            clearFieldsOf([...signInFormInputs.map((input) => input.id)]);

            setTimeout(() => {
               showHideSuccess(null, "hide");
            }, 5000);
         })
         .catch(function () {
            showHideError("Faild to sign in, try again!", "show");
         });
   });
}
