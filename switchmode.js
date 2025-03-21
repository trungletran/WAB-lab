document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector("#darkModeToggle");
    
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");

        // Save preference in local storage
        if (document.body.classList.contains("darkmode")) {
            localStorage.setItem("darkmode", "enabled");
        } else {
            localStorage.setItem("darkmode", "disabled");
        }
    });

    // Load dark mode preference
    if (localStorage.getItem("darkmode") === "enabled") {
        document.body.classList.add("darkmode");
    }
});