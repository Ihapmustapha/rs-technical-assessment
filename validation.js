export function formInputIsValid(inputProps) {
   const { type, value, name, isRequired } = inputProps;
   const minInputLength = 8;
   const maxInputLength = 100;

   if (isRequired && value.length === 0) return false;

   // regex rules
   const containsNumber = /\d/;
   const isEmailAddress = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const isStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

   switch (type) {
      case "text":
         return (
            (name === "fullName" ? !containsNumber.test(value) : value) &&
            value.length <= maxInputLength &&
            isRequired
         );

      case "email":
         return isEmailAddress.test(value) && isRequired;

      case "password":
         return (
            value.length >= minInputLength &&
            value.length <= maxInputLength &&
            isStrongPassword.test(value) &&
            isRequired
         );

      default:
         break;
   }
}

export function getInvalidFormInputs(formData) {
   const formInputsProps = [
      {
         name: "fullName",
         value: formData.get("fullName"),
         type: "text",
         isRequired: true,
      },
      {
         name: "email",
         value: formData.get("email"),
         type: "email",
         isRequired: true,
      },
      {
         name: "username",
         value: formData.get("username"),
         type: "text",
         isRequired: true,
      },
      {
         name: "password",
         value: formData.get("password"),
         type: "password",
         isRequired: true,
      },
   ];

   const invalidInputs = formInputsProps.filter(
      (inputProps) => !formInputIsValid(inputProps)
   );
   return invalidInputs;
}
