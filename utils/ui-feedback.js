// input error
export function showErrorForInput(inputProps) {
   const { id, errorMessageId, error } = inputProps;

   const selectedInput = document.getElementById(id);
   selectedInput.classList.add("is-invalid");

   const selectedInputErrorMessage = document.getElementById(
      `${errorMessageId}`
   );

   selectedInputErrorMessage.innerHTML = error;

   if (id === "signUpUsername") showHideHelpersFor("usernameHelp", "hide");
   if (id === "signUpPassword") showHideHelpersFor("passwordHelp", "hide");
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

export function setButtonLoading(buttonId, state, stopInnerHTML) {
   // selected button
   const button = document.getElementById(buttonId);

   if (state === "start") {
      // loading elm
      const loadingElm = document.createElement("span");
      loadingElm.setAttribute("class", "spinner-border spinner-border-sm");
      loadingElm.setAttribute("role", "status");
      loadingElm.setAttribute("aria-hidden", "true");

      button.innerHTML = ``;
      button.appendChild(loadingElm);
      button.setAttribute("disabled", true);
   } else if (state === "stop" && stopInnerHTML) {
      button.innerHTML = stopInnerHTML;
      button.removeAttribute("disabled");
   }
}

export function clearFieldsOf(fieldsIds) {
   fieldsIds.forEach(
      (fieldId) => (document.getElementById(fieldId).value = "")
   );
}
