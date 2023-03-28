const homeBtn = document.getElementById("home-btn");
const signUpBtn = document.getElementById("signup-btn");
const logInBtn = document.getElementById("login-btn");

const changeColor = (event) => {
    event.target.style.backgroundColor="purple";
    event.target.style.color="white";
};

const returnColor = (event) => {
    event.target.style="none";
};

homeBtn.addEventListener("mouseover",changeColor);
homeBtn.addEventListener("mouseleave",returnColor);
logInBtn.addEventListener("mouseover",changeColor);
logInBtn.addEventListener("mouseleave",returnColor);
signUpBtn.addEventListener("mouseover",changeColor);
signUpBtn.addEventListener("mouseleave",returnColor);