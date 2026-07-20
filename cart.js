 
// Get Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

// Display Cart Items


function displayCart() {

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <tr>
            <td colspan="3" class="empty">
                Your Cart is Empty
            </td>
        </tr>`;

        total.innerText = "0";
        return;
    }

    cart.forEach((item, index) => {

        let price = parseInt(item.price.replace("₹", ""));

        totalPrice += price;

        cartItems.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
                <button class="remove-btn"
                onclick="removeItem(${index})">
                Remove
                </button>
            </td>
        </tr>
        `;

    });

    total.innerText = totalPrice;

}

 
// Remove Item
 

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}
 
// Checkout
 

checkoutBtn.addEventListener("click",()=>{

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    window.location.href="checkout.html";

});

 
// Load Cart

displayCart();