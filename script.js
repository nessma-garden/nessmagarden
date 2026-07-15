// ======================
// NESSMA GARDEN
// script.js
// ======================

let cart = [];

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.10)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";
    }
});

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    displayCart();
    alert("🌹 Produit ajouté au panier");
}

function displayCart() {
    let box = document.getElementById("cart-items");
    let total = document.getElementById("total");
    let count = document.getElementById("cart-count");

    box.innerHTML = "";

    let sum = 0;

    if (cart.length === 0) {
        box.innerHTML = "<p>Your basket is empty</p>";
    }

    cart.forEach((product, index) => {
        sum += product.price;

        box.innerHTML += `
            <div class="cart-item">
                <span>${product.name}</span>
                <span class="cart-item-right">
                    ${product.price} MAD
                    <button class="remove-item-btn" onclick="removeFromCart(${index})" title="Retirer cet article">✕</button>
                </span>
            </div>
        `;
    });

    total.innerHTML = sum;
    count.innerHTML = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function openCart() {
    document.getElementById("cart").classList.toggle("active");
}

function cancelOrder() {
    if (cart.length === 0) {
        alert("Le panier est déjà vide");
        return;
    }

    cart = [];
    displayCart();
    alert("🗑️ Commande annulée, le panier a été vidé");
}

function confirmOrder() {
    if (cart.length === 0) {
        alert("Votre panier est vide");
        return;
    }

    let message = "🌹 Nessma Garden%0A";
    message += "Nouvelle commande:%0A%0A";

    cart.forEach(product => {
        message += "🌸 " + product.name + " - " + product.price + " MAD%0A";
    });

    message += "%0A💰 Total: " + document.getElementById("total").innerHTML + " MAD";

    window.open(
        "https://wa.me/212776437241?text=" + message,
        "_blank"
    );
}