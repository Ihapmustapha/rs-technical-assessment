"use strict";

import { getInvalidFormInputs } from "./validation.js";
import {
   showErrorForInput,
   showHideSuccess,
   showHideError,
   showHideHelpersFor,
} from "./ui-feedback.js";
import { applyMediaQueries } from "./media-queries.js";

document.addEventListener("DOMContentLoaded", function () {
   const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
   const API_PATH_SIGNUP = "/auth/register";
   const API_PATH_SIGNIN = "/auth/login";

   // media queries
   applyMediaQueries();

   // Sign Up
   const signUpForm = document.getElementById("signUpForm");
   signUpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const signUpFormData = new FormData(signUpForm);
      const signUpFormInvalidInputs = getInvalidFormInputs(signUpFormData);

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

      fetch(`${API_URL}${API_PATH_SIGNUP}`, {
         method: "POST",
         body: signUpFormData,
      })
         .then(function (response) {
            showHideSuccess(response.message, "show");

            setTimeout(() => {
               showHideSuccess(null, "hide");
            }, 5000);
         })
         .catch(function () {
            showHideError("Faild to create account, try again!", "hide");
         });
   });
});
