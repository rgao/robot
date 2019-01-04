$(document).ready(function () {
    
    var usernameInput = $("input#login-username");
    var passwordInput = $("input#login-password");

    $("form.login").on("submit", function (event) {
        event.preventDefault();

        var userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username) {
            usernameInput.css("border", "solid 2px indigo");
            $("#username-feedback").text("Please enter your username.");
            return;
        }

        if (!userData.password) {
            passwordInput.css("border", "solid 2px indigo");
            $("#password-feedback").text("Please enter your password.");
            return;
        }

        loginUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    function loginUser(username, password) {
        $.post("/users/login", {
            username: username,
            password: password
        }).then(function (data) {
            window.location.replace(data);
        }).catch(function (error) {
            $("#password-feedback").text("Incorrect Username or Password");
        });
    }

});