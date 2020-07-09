// input error
export function showErrorForInput(inputProps) {
   const { name, value } = inputProps;

   const selectedInput = document.querySelector(`[name=${name}]`);
   selectedInput.classList.add("is-invalid");

   const selectedInputErrorMessage = document.getElementById(
      `${name}ErrorMessage`
   );

   if (!value) {
      selectedInputErrorMessage.innerHTML = "this field is required";
      showHideHelpersFor("usernameHelp", "hide");
      showHideHelpersFor("passwordHelp", "hide");
   } else {
      if (name === "fullName") {
         selectedInputErrorMessage.innerHTML =
            "full name must not contain numbers nor exceed 100 character in length";
      } else if (name === "email") {
         selectedInputErrorMessage.innerHTML = "email is invalid";
      } else if (name === "username") {
         selectedInputErrorMessage.innerHTML =
            "username must not exceed 100 characters in length";
         showHideHelpersFor("usernameHelp", "hide");
      } else if (name === "password") {
         selectedInputErrorMessage.innerHTML =
            "A minimum 8 characters password contains a combination of uppercase and lowercase letter, special character and number are required.";
         showHideHelpersFor("passwordHelp", "hide");
      }
   }
}

export function showHideHelpersFor(id, state = "hide") {
   if (!id) return;
   if (state === "show") {
      document.getElementById(id).classList.remove("d-none");
   } else {
      document.getElementById(id).classList.add("d-none");
   }
}

// error-success messages (alerts)
export function showHideSuccess(message, state) {
   const successFeedbackMessage = document.getElementById(
      "successFeedbackMessage"
   );
   if (message) successFeedbackMessage.innerHTML = message;

   if (state === "show") successFeedbackMessage.classList.remove("d-none");
   else if (state === "hide") successFeedbackMessage.classList.add("d-none");
}

export function showHideError(message, state) {
   const errorFeedbackMessage = document.getElementById("errorFeedbackMessage");
   if (message) errorFeedbackMessage.innerHTML = message;

   if (state === "show") errorFeedbackMessage.classList.remove("d-none");
   else if (state === "hide") errorFeedbackMessage.classList.add("d-none");
}
