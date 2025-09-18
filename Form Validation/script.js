
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", function (dets) {
    
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

    let isEmailValid = emailRegex.test(email.value);
    let isPassValid = passwordRegex.test(password.value);

    let isValid = true;

    // email is not valid
    if (!isEmailValid) {
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    // password is not valid
    if (!isPassValid) {
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Everything is correct";
    }
});
