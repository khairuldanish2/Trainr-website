let likedTrainers = 0;

function openModal(role) {
  const modal = document.getElementById("waitlistModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const roleSelect = document.getElementById("userRole");

  modal.classList.add("show");

  document.getElementById("waitlistForm").style.display = "grid";
  document.getElementById("successMessage").style.display = "none";

  if (role === "trainer") {
    title.textContent = "Grow with Trainr.";
    description.textContent =
      "Join the waitlist for fitness professionals and get notified when Trainr launches.";

    roleSelect.value = "trainer";
  } else {
    title.textContent = "Find your Trainr.";
    description.textContent =
      "Be among the first to discover coaches who match your goals.";

    roleSelect.value = "client";
  }
}

function closeModal() {
  document.getElementById("waitlistModal").classList.remove("show");
}

function submitForm(event) {
  event.preventDefault();

  document.getElementById("waitlistForm").style.display = "none";
  document.getElementById("successMessage").style.display = "block";

  console.log("Prototype signup:");
  console.log("Name:", document.getElementById("name").value);
  console.log("Email:", document.getElementById("email").value);
  console.log("Role:", document.getElementById("userRole").value);
}

function demoLike() {
  likedTrainers++;

  document.getElementById("matchMessage").textContent =
    "♥ You liked this trainer! (" + likedTrainers + ")";
}

function demoPass() {
  document.getElementById("matchMessage").textContent =
    "Next trainer coming up →";
}

// Close modal when clicking outside it
document.getElementById("waitlistModal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeModal();
  }
});

// Close modal using Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
