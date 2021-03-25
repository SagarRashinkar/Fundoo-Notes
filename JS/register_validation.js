function validateFirstName() {
    let fName = document.getElementById('firstname').value;
    let pattern = RegExp("[A-Z][a-z]{2,}");
    if (pattern.test(fName)) {
    } else {
        d3.select("#fNameError").text("enter valid first name");
        let border = document.getElementById("firstname");
        border.style.borderColor = "red";
    }
}
function validateLastName() {
    let lName = document.getElementById('lastname').value;
    let pattern = RegExp("[A-Z][a-z]{2,}");
    if (pattern.test(lName)) {
    } else {
        d3.select("#lNameError").text("enter valid last name");
        let border = document.getElementById("lastname");
        border.style.borderColor = "red";
    }
}
function validateEmail() {
    let email = document.getElementById('username').value;
    let pattern = RegExp("^[a-zA-Z]{4,}[a-zA-Z0-9\.\!\_]*\@[a-z]*\.(co|in|com)$");
    if (pattern.test(email)) {
    } else {
        d3.select("#emailError").text("enter valid email address");
        let border = document.getElementById("username");
        border.style.borderColor = "red";
    }
}
function validatePassword() {
    let passwd = document.getElementById('password').value;
    let pattern = RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@#$%^&-+=()]).{8,}$");
    if (pattern.test(passwd)) {
    } else {
        d3.select("#passwordError").text("enter valid password");
        let border = document.getElementById("password");
        border.style.borderColor = "red";
    }
}
function validateConfirmPassword() {
    let pass = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirm').value;
    if (pass === confirmPass) {
    }
    else {
        d3.select("#confirmPasswordError").text("password didn't matched");
        let border = document.getElementById("confirm");
        border.style.borderColor = "red";
    }
}
function showPassword() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirm");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}