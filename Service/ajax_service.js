
/*----------------------------------------------- User Register API Call ----------------------------------------------------------*/

function postData(userData) {
    console.log("In Server...");
    console.log(userData);
    $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        data: JSON.stringify(userData),
        success: function (data) {
            console.log(data);
            showSnackBar("User registered sucessfully");
            window.location.href = "../HTML/sign_in.html";
        },
        error: function (err) {
            console.log(err);
            showSnackBar("Already registered with given email");
        }
    })
}

/*----------------------------------------------- Login API Call ----------------------------------------------------------*/

function loginUser(loginData) {
    console.log("In Server...");
    console.log(loginData);
    $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/login',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        data: JSON.stringify(loginData),
        success: function (data) {
            console.log(data);
            showSnackBar("Login sucessfully");
        },
        error: function (err) {
            showSnackBar("Please provide valid credentials...")
            console.log(err);
        }
    })
}

/*----------------------------------------------- Reset Password API Call ----------------------------------------------------------*/

function resetPassword(emailData) {
    console.log("In Server...");
    console.log(emailData);
    $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/reset',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        data: JSON.stringify(emailData),
        success: function (data) {
            console.log(data);
            showSnackBar("Reset link sent sucessfully");
        },
        error: function (err) {
            showSnackBar("Email address not registered...")
            console.log(err);
        }
    })
}
