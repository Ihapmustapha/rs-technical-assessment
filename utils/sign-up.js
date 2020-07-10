import { validate } from "./validation.js";
import {
   showErrorForInput,
   showHideSuccess,
   showHideError,
   showHideHelpersFor,
   setButtonLoading,
} from "./ui-feedback.js";

export default function () {
   const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
   const API_PATH_SIGNUP = "/auth/register";

   const signUpForm = document.getElementById("signUpForm");
   signUpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const signUpFormData = new FormData(signUpForm);
      const signUpFormInputs = [
         {
            id: "signUpFullName",
            name: "full name",
            value: signUpFormData.get("fullName"),
            type: "text",
            validators: ["isRequired", "onlyText"],
            error: null,
            errorMessageId: "signUpFullNameErrorMessage",
         },
         {
            id: "signUpEmail",
            name: "email",
            value: signUpFormData.get("email"),
            type: "email",
            validators: ["isRequired", "isEmail"],
            error: null,
            errorMessageId: "signUpEmailErrorMessage",
         },
         {
            id: "signUpUsername",
            name: "username",
            value: signUpFormData.get("username"),
            type: "text",
            validators: ["isRequired"],
            error: null,
            errorMessageId: "signUpUsernameErrorMessage",
         },
         {
            id: "signUpPassword",
            name: "password",
            value: signUpFormData.get("password"),
            type: "password",
            validators: ["isRequired", "isStrongPassword"],
            error: null,
            errorMessageId: "signUpPasswordErrorMessage",
         },
      ];

      const signUpFormInvalidInputs = validate(signUpFormInputs);

      if (signUpFormInvalidInputs.length > 0) {
         signUpFormInvalidInputs.forEach(function (invalidInputProps) {
            showErrorForInput(invalidInputProps);
         });

         const invalidDOMElements = document
            .getElementById("signUpForm")
            .querySelectorAll(".is-invalid");

         invalidDOMElements.forEach(function (element) {
            element.addEventListener("input", function () {
               this.classList.remove("is-invalid");
               if (this.id === "password")
                  showHideHelpersFor("passwordHelp", "show");
               if (this.id === "username")
                  showHideHelpersFor("usernameHelp", "show");
            });
         });
         return;
      }

      setButtonLoading("signUpButton", "start");
      fetch(`${API_URL}${API_PATH_SIGNUP}`, {
         method: "POST",
         body: signUpFormData,
      })
         .then(function () {
            setButtonLoading("signUpButton", "stop", "Sign Up");
            showHideSuccess("User signed up successfully", "show");

            setTimeout(() => {
               showHideSuccess(null, "hide");
            }, 5000);
         })
         .catch(function () {
            showHideError("Faild to create account, try again!", "show");
         });
   });
}
