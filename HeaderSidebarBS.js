// Sidebar toggle functionality for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  // Toggle sidebar on mobile
  sidebarToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    sidebar.classList.toggle("show");
    sidebarOverlay.classList.toggle("show");
  });

  // Close sidebar when clicking overlay
  sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.remove("show");
    sidebarOverlay.classList.remove("show");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    if (window.innerWidth <= 575.98) {
      if (
        !sidebar.contains(event.target) &&
        !sidebarToggle.contains(event.target)
      ) {
        sidebar.classList.remove("show");
        sidebarOverlay.classList.remove("show");
      }
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 575.98) {
      sidebar.classList.remove("show");
      sidebarOverlay.classList.remove("show");
    }
  });

  // Set active navigation item based on current page
  setActiveNavItem();
});

// Function to set active navigation item
function setActiveNavItem() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (
      href === currentPage ||
      (currentPage === "index.html" && href === "StudentDashboardBS.html")
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
