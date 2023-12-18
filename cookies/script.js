document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies-btn");

    // Function to check if the user has already accepted cookies
    function hasUserAcceptedCookies() {
        return localStorage.getItem("cookiesAccepted");
    }

    // Function to hide the cookie banner
    function hideCookieBanner() {
        cookieBanner.style.bottom = "-100%";
    }

    // Function to show the cookie banner
    function showCookieBanner() {
        cookieBanner.style.bottom = "0";
    }

    // Check if the user has already accepted cookies
    if (hasUserAcceptedCookies()) {
        // If the user has accepted cookies, hide the banner
        hideCookieBanner();
    }

    // Event listener for the "Accept Cookies" button
    acceptCookiesBtn.addEventListener("click", function() {
        // Hide the banner
        hideCookieBanner();

        // Set a flag in localStorage to remember the user's choice
        localStorage.setItem("cookiesAccepted", true);
    });
});
