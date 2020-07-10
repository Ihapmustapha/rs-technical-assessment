"use strict";

import { applyMediaQueries } from "./media-queries.js";
import { applyNavigation } from "./navigation.js";
import handleSignIn from "./sign-in.js";
import handleSignUp from "./sign-up.js";

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
