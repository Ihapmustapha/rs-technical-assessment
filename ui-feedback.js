export function showErrorForInput(inputProps) {
   const { name, value } = inputProps;

   const selectedInput = document.querySelector(`[name=${name}]`);
   selectedInput.classList.add("is-invalid");

   const selectedInputErrorMessage = document.getElementById(
      `${name}ErrorMessage`
   );

   if (!value) {
      selectedInputErrorMessage.innerHTML = "this field is required";
   } else {
      if (name === "fullName") {
         selectedInputErrorMessage.innerHTML =
            "full name must not contain numbers nor exceed 100 character in length";
      } else if (name === "email") {
         selectedInputErrorMessage.innerHTML = "email is invalid";
      } else if (name === "username") {
         selectedInputErrorMessage.innerHTML =
            "username must not exceed 100 characters in length";
      } else if (name === "password") {
         selectedInputErrorMessage.innerHTML =
            "A minimum 8 characters password contains a combination of uppercase and lowercase letter, special character and number are required.";
      }
   }
}
