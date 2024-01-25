let searchCounter = 0;
function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function displayCookies() {
    let cookies = document.cookie;
    const displayArea = document.getElementById('cookieDisplay');
    if (cookies) {
        displayArea.textContent = "Cookies: " + cookies;
    } else {
        displayArea.textContent = "No cookies found";
    }
}

document.getElementById('setCookieBtn').addEventListener('click', function() {
    const now = new Date();
    now.setTime(now.getTime() + (24 * 60 * 60 * 1000)); // Set cookie expiry for 1 day
    document.cookie = `testCookie=TestValue; expires=${now.toUTCString()}; path=/`;
    displayCookies();
});

document.getElementById('showAllCookiesBtn').addEventListener('click', displayCookies);

document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value;
    const now = new Date();
    now.setTime(now.getTime() + (24 * 60 * 60 * 1000)); // Set cookie expiry for 1 day
    searchCounter++; // Increment the counter for each search
    document.cookie = `search${searchCounter}=${encodeURIComponent(searchQuery)}; expires=${now.toUTCString()}; path=/`;
    displayCookies();
});

window.onload = displayCookies;
