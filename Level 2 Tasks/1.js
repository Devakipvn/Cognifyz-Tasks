// Get elements
const profileIcon = document.getElementById("profile-icon");
const dropdown = document.getElementById("dropdown");
const saveButton = document.getElementById("save-button");
const cancelButton = document.getElementById("cancel-button");
const fullNameInput = document.getElementById("full-name");
const profilePictureInput = document.getElementById("profile-picture");
const menuToggle = document.getElementById("menu-toggle");
const navbarMenu = document.getElementById("navbar-menu");
const displayName = document.getElementById("display-name");

// Toggle profile dropdown
profileIcon.addEventListener("click", () => {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// Save profile details
saveButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission

  // Get user input
  const name = document.getElementById("full-name").value;
  const pictureInput = document.getElementById("profile-picture");
  const picture = pictureInput.files[0];

  // Display name below profile icon
  if (name) {
      displayName.textContent = name;
  }

  // Update profile picture
  if (picture) {
      const reader = new FileReader();
      reader.onload = function (e) {
          profileIcon.src = e.target.result; // Set profile image dynamically
      };
      reader.readAsDataURL(picture);
  }

  // Hide dropdown after saving
  dropdown.style.display = "none";
});

   

// Cancel and hide dropdown
cancelButton.addEventListener("click", () => {
    dropdown.style.display = "none";
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== profileIcon) {
        dropdown.style.display = "none";
    }
});

// Menu toggle for smaller screens
menuToggle.addEventListener("click", () => {
    if (navbarMenu.style.display === "block") {
        navbarMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "block";
    }
});

// Close menu if clicked outside
document.addEventListener("click", (e) => {
    if (!navbarMenu.contains(e.target) && e.target !== menuToggle) {
        navbarMenu.style.display = "none";
    }
});