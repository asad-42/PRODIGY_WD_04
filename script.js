// =====================
// MENU BUTTON TOGGLE
// =====================
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Close menu when clicking any navigation link
navigationItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

// =====================
// STICKY HEADER
// =====================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// =====================
// SCROLL TO TOP BUTTON
// =====================
const scrollBtn = document.createElement("div");
scrollBtn.classList.add("scrollToTop-btn");
scrollBtn.innerHTML = "&#8679;"; // Up arrow symbol
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// =====================
// OPTIONAL: SMOOTH SCROLLING (if you want)
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Only scroll if the anchor has a hash and matches a section
    if (this.getAttribute('href').length > 1) {
      e.preventDefault();
      const targetID = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // adjust for header
          behavior: "smooth"
        });
      }
    }
  });
});
