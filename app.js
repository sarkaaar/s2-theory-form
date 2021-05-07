function checkEmail() {
    let email = document.getElementById('email');
    if (email.value.length < 3) {
        email.style.borderColor = "red";
        document.getElementById('email-p').innerText = "Invalid Email";
        return false;
    } else {
        document.getElementById('email-p').innerText = "";
        password.style.borderColor = "green";
        return true;
    }
}

function checkPassword() {
    let password = document.getElementById('password');
    if (password.value.length < 6) {
        password.style.borderColor = "red";
        document.getElementById('password-p').innerText = "Password must be 6 characters long";
        return false;
    } else {
        document.getElementById('password-p').innerText = "";
        password.style.borderColor = "green";
        return true;
    }
}


function submit() {
    checkEmail();
    checkPassword();

    if (checkEmail() && checkPassword()) {
        console.log("Return");
    } else return;
}