const pName = document.querySelector(".name");
const pMail = document.querySelector(".email");
const pPass = document.querySelector(".password");
const logoutBtn = document.querySelector(".log-out");
const userDet = JSON.parse(localStorage.getItem("user"));

pName.innerHTML = `Full Name : ${localStorage.getItem("name")}`;
pMail.innerHTML = `Email : ${localStorage.getItem("email")}`;
pPass.innerHTML = `Password : ${localStorage.getItem("password")}`;

logoutBtn.addEventListener("click", () => {
   localStorage.setItem("name", null);
   localStorage.setItem("email", null);
   localStorage.setItem("password", null);
   localStorage.setItem("access-token", null);
});

console.log("profile");