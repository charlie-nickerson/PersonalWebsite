window.addEventListener("load", function () {
    const loadingBar = document.querySelector(".lds-dual-ring");
    loadingBar.style.display = "none"; // Hide the loading bar
    const mainContent = document.querySelector(".main-content");
    mainContent.style.display = "block"; // Show the main content after loading
  });