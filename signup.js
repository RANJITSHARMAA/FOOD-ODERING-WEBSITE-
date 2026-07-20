const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirm = document.getElementById("confirm").value;

    if (password !== confirm) {

        alert("Passwords do not match");

        return;

    }

    const user = {

        name,

        email,

        password

    };

    localStorage.setItem("foodieUser", JSON.stringify(user));

    alert("Account Created Successfully");

    window.location.href = "login.html";

});