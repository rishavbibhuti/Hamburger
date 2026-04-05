// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// CART
let total = 0;

function addToCart(item, price) {
  const cartItems = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("total");

  const li = document.createElement("li");
  li.textContent = item + " - ₹" + price;
  cartItems.appendChild(li);

  total += price;
  totalDisplay.textContent = total;
}

// SCROLL ANIMATION
const elements = document.querySelectorAll(".section, .card");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});