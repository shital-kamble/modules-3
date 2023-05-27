const fname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const warn = document.querySelector(".warn");
const success = document.querySelector(".success");

const signUp = document.getElementById("sign-up");
console.log("index");

signUp.addEventListener("click", () => {
   if (
      fname.value.trim() == "" ||
      email.value.trim() == "" ||
      password.value.trim() == "" ||
      cPassword.value.trim() == ""
   ) {
      success.innerHTML = "";
      warn.innerHTML = "Error : All the fields are mandatory";
   } else if (password.value !== cPassword.value) {
      alert("Passwords do not match");
      return;
   } else {
      function generateRandomString() {
         const array = new Uint8Array(16);
         window.crypto.getRandomValues(array);
         const randomString = Array.from(array, (byte) =>
            ("0" + byte.toString(16)).slice(-2)
         ).join("");
         return randomString;
      }

      localStorage.setItem("name", fname.value.trim());
      localStorage.setItem("email", email.value.trim());
      localStorage.setItem("password", password.value.trim());
      localStorage.setItem("access-token", generateRandomString());

      if (localStorage.getItem("access-token")) {
         document
            .getElementById("probtn")
            .setAttribute("href", "./profile.html");
      }

      warn.innerHTML = "";
      success.innerHTML = "Successfully Signed Up!";

      setTimeout(function () {
         window.location.href = "./profile.html";
      }, 2000);
   }
});

// function access() {
//    if (localStorage.getItem("access-token") != null) {
//       document.getElementById("probtn").setAttribute("href", "./profile.html");
//    } else {
//       document.getElementById("probtn").setAttribute("href", "#");
//    }
// }

localStorage.setItem("name", null);
localStorage.setItem("email", null);
localStorage.setItem("password", null);
localStorage.setItem("access-token", null);

if (localStorage.getItem("access-token") === null) {
   document.getElementById("probtn").setAttribute("href", "./index.html");
}

// (function access() {
//    if (localStorage.getItem("access-token") != null) {
//    } else {
//    }
// })();

// function renderDetails() {
//    const pName = document.querySelector(".name");
//    const pMail = document.querySelector(".email");
//    const pPass = document.querySelector(".password");
//    const logoutBtn = document.querySelector(".log-out");
//    const userDet = JSON.parse(localStorage.getItem("user"));

//    pName.innerHTML = `Full Name : ${localStorage.getItem("name")}`;
//    pMail.innerHTML = `Email : ${localStorage.getItem("email")}`;
//    pPass.innerHTML = `Password : ${localStorage.getItem("password")}`;

//    logoutBtn.addEventListener("click", () => {
//       ocalStorage.setItem("name", null);
//       localStorage.setItem("email", null);
//       localStorage.setItem("password", null);
//       localStorage.setItem("access-token", null);
//    });
// }