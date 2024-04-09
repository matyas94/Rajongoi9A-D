import(cookie.js);

function ChLang(lang, destination){
    if(getCookie("acceptedCookies") == "true"){
    setCookie("language",lang,180);
    }
    window.location.replace(Root() + "/" + lang + "/" + destination);
}

function Root(){
    return location.protocol + '//' + location.host;
}