// Handle menu button
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// Function to open a specific modal (projects)
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden'); // Show the modal
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  }
}

// Function to close a specific modal (projects)
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden'); // Hide the modal
    document.body.style.overflow = ''; // Restore body scroll
  }
}