const signinbtn = document.querySelector("#sign-in-btn");
const signupbtn = document.querySelector("#sign-up-btn");
const contanier = document.querySelector(".container");

signupbtn.addEventListener('click', () => {
    contanier.classList.remove("sign-up-mode");
})

signinbtn.addEventListener('click', () => {
    contanier.classList.remove("sign-up-mode");
})