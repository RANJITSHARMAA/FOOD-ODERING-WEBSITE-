
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cart Counter

const cartIcon = document.querySelector(".fa-cart-shopping");
let counter;

if (cartIcon) {

    counter = document.createElement("span");
    counter.className = "cart-counter";

    counter.style.background = "red";
    counter.style.color = "white";
    counter.style.borderRadius = "50%";
    counter.style.padding = "2px 8px";
    counter.style.fontSize = "12px";
    counter.style.marginLeft = "5px";

    cartIcon.after(counter);

    updateCartCounter();
}

function updateCartCounter() {

    if (counter) {
        counter.innerText = cart.length;
    }

}


// Add To Cart


document.querySelectorAll(".food-card button").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.parentElement;

        const item = {

            name: card.querySelector("h3").innerText,
            price: card.querySelector("p").innerText

        };

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCounter();

        alert(item.name + " added to cart!");

    });

});


// Hero Button


const heroButton = document.querySelector(".hero button");

if (heroButton) {

    heroButton.addEventListener("click", () => {

        document.querySelector("#menu").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// Offer Button

const offerBtn = document.querySelector(".offer button");

if (offerBtn) {

    offerBtn.addEventListener("click", () => {

        alert("Coupon Applied: FOOD50");

    });

}


// Contact Form


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! We will contact you soon.");

        form.reset();

    });

}

// Search Food


const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

function searchFood() {

    if (!searchBox) return;

    const value = searchBox.value.trim().toLowerCase();

    document.querySelectorAll(".food-card").forEach(food => {

        const title = food.querySelector("h3").innerText.toLowerCase();

        food.style.display =
            title.includes(value) || value === "" ? "block" : "none";

    });

}

if (searchBox) {

    searchBox.addEventListener("keyup", searchFood);

}

if (searchBtn) {

    searchBtn.addEventListener("click", searchFood);

}

 
// Smooth Navigation
 

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", (e) => {

        const href = link.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });

});

 
// Mobile Menu
 

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

 
// Login Greeting
 
const loginButton = document.querySelector(".icons button");

if (loginButton && localStorage.getItem("isLoggedIn")) {

    const user = JSON.parse(localStorage.getItem("foodieUser"));

    if (user) {

        loginButton.innerText = "Hi, " + user.name;

    }

}

// ===============================
// Page Loaded
// ===============================

window.addEventListener("load", () => {

    console.log("Food Ordering Website Loaded Successfully");

});