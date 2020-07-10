"use strict";

import {
   applyMediaQueries,
   applyNavigation,
   handleSignIn,
   handleSignUp,
} from "./utils/index.js";

document.addEventListener("DOMContentLoaded", function () {
   // media queries
   applyMediaQueries();

   // navigation
   applyNavigation();

   // Sign In
   handleSignIn();

   // Sign Up
   handleSignUp();
});
