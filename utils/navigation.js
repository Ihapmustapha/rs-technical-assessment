export function applyNavigation() {
   const registerAnchor = document.getElementById("registerAnchor");
   const signInAnchor = document.getElementById("signInAnchor");
   const cardTitle = document.querySelector(".card-title");
   const signUpForm = document.getElementById("signUpForm");
   const signInForm = document.getElementById("signInForm");
   const signUpFormHelperText = document.getElementById("signUpFormHelp");
   const signInFormHelperText = document.getElementById("signInFormHelp");

   // register
   registerAnchor.addEventListener("click", function () {
      cardTitle.innerHTML = "Sign Up";
      //   hide sign up form and show sign in form
      signUpForm.classList.remove("d-none");
      signInForm.classList.add("d-none");
      //    hide sign in helper text and show sign up helper text
      signUpFormHelperText.classList.remove("d-none");
      signInFormHelperText.classList.add("d-none");
   });

   // sign in
   signInAnchor.addEventListener("click", function () {
      cardTitle.innerHTML = "Sign In";
      //   hide sign up form and show sign in form
      signInForm.classList.remove("d-none");
      signUpForm.classList.add("d-none");
      //    hide sign up helper text and show sign in helper text
      signInFormHelperText.classList.remove("d-none");
      signUpFormHelperText.classList.add("d-none");
   });
}
