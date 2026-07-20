const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("foodieUser"));

    if (user == null) {

        alert("No account found");

        return;

    }

    if (email === user.email && password === user.password) {

        localStorage.setItem("isLoggedIn", "true");

        alert("Login Successful");

        window.location.href = "index.html";

    }

    else {

        alert("Invalid Email or Password");

    }

});