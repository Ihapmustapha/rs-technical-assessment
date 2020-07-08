export function applyMediaQueries() {
   // removing Signup card borders on mobile screens
   const mobileScreenMQ = window.matchMedia("(max-width: 420px)");
   if (mobileScreenMQ.matches)
      document.getElementById("containerCard").classList.remove("card");
}
