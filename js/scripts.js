import(cookie.js);

function ChLang(lang, destination){
    if(getCookie("acceptedCookies") == "true"){
    setCookie("language",lang,180);
    }
    window.location.replace(Root() + "/" + lang + "/" + destination);
}

function Root(){
    return location.protocol + '//' + location.host + "/Rajongoi9A-D";
}

function AutomaticRedirectFromRoot(){
    if(getCookie("language") == "English"){
        window.location.replace(Root()+ "/" + "English" + "/" + "mainpage.html");
    }
    else{
        window.location.replace(Root()+ "/" + "Magyar" + "/" + "fooldal.html");
    }
}