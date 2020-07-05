"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
   const API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
   const API_PATH_SIGNUP = "/auth/register";
   const API_PATH_SIGNIN = "/auth/login";

   const signUpForm = document.getElementById("signUpForm");

   signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const signUpFormData = new FormData(signUpForm);

      fetch(`${API_URL}${API_PATH_SIGNUP}`, {
         method: "POST",
         body: signUpFormData,
      })
         .then((response) => console.log(response))
         .catch((error) => console.log(error));
   });
});
