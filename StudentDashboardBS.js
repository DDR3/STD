// Sidebar toggle functionality for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");

  // Toggle sidebar on mobile
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    if (window.innerWidth < 576) {
      if (
        !sidebar.contains(event.target) &&
        !sidebarToggle.contains(event.target)
      ) {
        sidebar.classList.remove("show");
      }
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 576) {
      sidebar.classList.remove("show");
    }
  });

  // Set active navigation item based on current page
  setActiveNavItem();
});

// Function to set active navigation item
function setActiveNavItem() {
  const currentPage =
    window.location.pathname.split("/").pop() || "StudentDashboardBS.html";
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
