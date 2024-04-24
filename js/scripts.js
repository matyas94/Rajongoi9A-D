import(cookie.js);

function ChLang(lang, destination) {
    if (getCookie("acceptedCookies") == "true") {
        setCookie("language", lang, 180);
    }
    window.location.replace("../" + lang + "/" + destination);
}

function RedirectFromIndex() {
    if (getCookie("language") == "English") {
        window.location.replace("./English/mainpage.html");
    }
    else {
        window.location.replace("./Magyar/fooldal.html");
    }
}