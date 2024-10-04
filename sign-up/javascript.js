let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        confirmPassword.style.borderColor = "red";
    }
    else {
        confirmPassword.setCustomValidity("");
        confirmPassword.style.borderColor = "black";
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;