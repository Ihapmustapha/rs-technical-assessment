export function validateInput(inputProps) {
   const { value, name, validators } = inputProps;
   const minInputLength = 3;
   const maxInputLength = 100;

   // regex rules
   const containsNumber = /\d/;
   const containsSpecialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
   const isEmailAddress = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const isStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

   let validatorsMap = {};
   validators.forEach((validator) => (validatorsMap[validator] = validator));

   if (validatorsMap["isRequired"] && !value) {
      return {
         ...inputProps,
         isValid: false,
         error: "this field is required",
      };
   }

   if (value.length > maxInputLength) {
      return {
         ...inputProps,
         isValid: false,
         error: `${name} is too long`,
      };
   }

   if (value.length < minInputLength) {
      return {
         ...inputProps,
         isValid: false,
         error: `${name} is too short`,
      };
   }

   if (
      validatorsMap["onlyText"] &&
      (containsNumber.test(value) || containsSpecialChars.test(value))
   ) {
      return {
         ...inputProps,
         isValid: false,
         error: `${name} should only contain letters`,
      };
   }

   if (validatorsMap["isEmail"] && !isEmailAddress.test(value)) {
      return {
         ...inputProps,
         isValid: false,
         error: "email address is not valid",
      };
   }

   if (
      validatorsMap["isStrongPassword"] &&
      value.length < 8 &&
      !isStrongPassword.test(value)
   ) {
      return {
         ...inputProps,
         isValid: false,
         error:
            "A minimum 8 characters password contains a combination of uppercase and lowercase letter, special character and number are required.",
      };
   }

   return {
      ...inputProps,
      isValid: true,
   };
}

export function validate(formInputs) {
   return formInputs
      .map((input) => validateInput(input))
      .filter((input) => !input.isValid);
}
