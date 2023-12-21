document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies-btn");

    function hasUserAcceptedCookies() {
        return localStorage.getItem("cookiesAccepted");
    }
    function hideCookieBanner() {
        cookieBanner.style.bottom = "-100%";
    }
    function showCookieBanner() {
        cookieBanner.style.bottom = "0";
    }

    if (hasUserAcceptedCookies()) {
        hideCookieBanner();
    }
    acceptCookiesBtn.addEventListener("click", function() {
        hideCookieBanner();
        localStorage.setItem("cookiesAccepted", true);
    });
});
