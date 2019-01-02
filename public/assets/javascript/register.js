$(document).ready(function () {

    var usernameInput = $("input#username-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    usernameInput.bind('input propertychange', function () {
        if (usernameInput.val().trim().length < 6) {
            $("#username-form").removeClass("has-success");

            $("#username-form").addClass("has-error");
            $("#username-feedback").text("Username must be at least 4 characters long");
        } else {
            $("#username-form").removeClass("has-error");

            $("#username-form").addClass("has-success");
            $("#username-feedback").text("Available");
        }
    });

    emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    emailInput.bind('input propertychange', function () {
        if (!emailRegEx.test($(this).val())) {
            $("#email-form").removeClass("has-success");

            $("#email-form").addClass("has-error");
            $("#email-feedback").text("Invalid Email");
            $("#email-example").text("Ex: grant@69thirst.com");

        } else {
            $("#email-form").removeClass("has-error");

            $("#email-form").addClass("has-success");
            $("#email-feedback").text("Valid Email!");
            $("#email-example").text("");
        }
    });


    var passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    passwordInput.bind('input propertychange', function () {
        if (!passwordRegEx.test($(this).val())) {
            $("#password-form").removeClass("has-success");

            $("#password-form").addClass("has-error");
            $("#password-feedback").text("Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.");
        } else {
            $("#password-form").removeClass("has-error");

            $("#password-form").addClass("has-success");
            $("#password-feedback").text("Password set correctly!");
        }
    });

    var signUpBtn = $("#signupbtn");

    signUpBtn.on("click", function(event) {
        event.preventDefault();
    
        var userData = {
          username: usernameInput.val().trim(),
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
    
        if (!userData.username || !userData.email || !userData.password) {
          return alert("Please fill out all fields.");
        }
    
        signUpUser(userData.username, userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
        usernameInput.val("");
      });

    function signUpUser(username, email, password) {
        $.post("/users/register", {
            username: username,
            email: email,
            password: password
        }).then(function (data) {
            if (data.duplicateUser) {
                alert("Username unavailable");
            } else {
                window.location = data.redirect;
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

});