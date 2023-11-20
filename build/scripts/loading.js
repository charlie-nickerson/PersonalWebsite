window.addEventListener("load", function () {
    const loadingBar = document.querySelector(".lds-dual-ring");
    loadingBar.style.display = "none"; // Hide the loading bar
    const mainContent = document.querySelector(".main-content");
    mainContent.style.display = "block"; // Show the main content after loading
  });


window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    let parallaxSections = document.querySelectorAll(".parallax-section");
  
    parallaxSections.forEach(function (section) {
      let speed = section.dataset.speed; // Get the speed value from the data-speed attribute
      section.style.transform = `translateY(${scrolled * speed}px)`;
    });
});