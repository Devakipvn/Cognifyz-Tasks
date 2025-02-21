let cartItems = [];
let totalAmount = 0;
let wishlist = [];

function addToCart(price) {
  // Add item to cart
  cartItems.push(price);
  totalAmount += price;

  // Update cart display
  document.getElementById("cart-count").innerText = cartItems.length;
  document.getElementById("total-amount").innerText = totalAmount.toFixed(2);

  // Open cart modal
  showCart();
}

// JavaScript to handle cart modal

function showCart() {
  let cartModal = document.getElementById("cart-modal");
  let cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = '';

  cartItems.forEach((item, index) => {
    cartItemsContainer.innerHTML += `<p>Item ${index + 1}: $${item.toFixed(2)}</p>`;
  });

  cartModal.style.display = "block";
}


function closeModal() {
  document.getElementById("cart-modal").style.display = "none";
}

// Add item to wishlist
function addToWish(productName) {
  if (wishlist.includes(productName)) {
    alert(productName + ' is already in your wishlist!');
    return;
  }

  wishlist.push(productName);
  updateWishlistDisplay();
}
// Update the wishlist display
function updateWishlistDisplay() {
  const wishlistContainer = document.getElementById('wishlist');
  wishlistContainer.innerHTML = '';

  wishlist.forEach(item => {
    const wishlistItem = document.createElement('li');
    wishlistItem.classList.add('wishlist-item');
    wishlistItem.innerHTML = `
      ${item} 
      <button onclick="removeFromWishlist('${item}')">Remove</button>
    `;
    wishlistContainer.appendChild(wishlistItem);
  });

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<li>No books added to wishlist yet.</li>';
  }
}

// Remove item from wishlist
function removeFromWishlist(productName) {
  wishlist = wishlist.filter(item => item !== productName);
  updateWishlistDisplay();
}

function closeLogin() {
  document.getElementById("login-form").style.display = "none";
}

function editProfile() {
  const userName = prompt("Enter your name:");
  if (userName) {
    document.getElementById("user-name").innerText = userName;
  }
}

function savePreferences() {
  const genre = document.getElementById("fav-genre").value;
  const goal = document.getElementById("reading-goal").value;

  if (goal > 0) {
    alert(`Preferences saved!\nFavorite Genre: ${genre}\nReading Goal: ${goal} books/month`);
  } else {
    alert("Please enter a valid reading goal.");
  }
}

function logout() {
  alert("You have logged out.");
  // Redirect or clear session as needed
}

function deleteAccount() {
  const confirmDelete = confirm("Are you sure you want to delete your account?");
  if (confirmDelete) {
    alert("Your account has been deleted.");
    // Implement account deletion logic
  }
}

// Sample cart data
const cart = [
  { title: "To Kill a Mockingbird", price: 10.99 },
  { title: "1984", price: 9.99 }
];

// Update cart items
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  let total = 0;
  cartItemsList.innerHTML = '';

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
  });

  document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

// Handle form submission
document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const payment = document.getElementById('payment').value;

  // For simplicity, just log the order details
  console.log("Order Details:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Address: ${address}`);
  console.log(`Payment Method: ${payment}`);

  alert('Order submitted successfully!');
});

// Initialize cart
updateCart();

// Function to handle form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const review = document.getElementById('review').value;

  if (name && review) {
    const reviewList = document.getElementById('review-list');

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    const reviewHeader = document.createElement('h4');
    reviewHeader.textContent = name;
    reviewItem.appendChild(reviewHeader);

    const reviewText = document.createElement('p');
    reviewText.textContent = review;
    reviewItem.appendChild(reviewText);

    reviewList.appendChild(reviewItem);

    // Clear form after submission
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
  }
});
