var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
var lastUpdated = document.querySelector("#last-updated");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "flex";
      mobileMenuBtn.innerHTML = "Close";
    } else {
      mobileMenu.style.display = "none";
      mobileMenuBtn.innerHTML = "Menu";
    }
  });
}

if (lastUpdated) {
  var modifiedDate = new Date(document.lastModified);

  if (!Number.isNaN(modifiedDate.getTime())) {
    lastUpdated.textContent = modifiedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}
