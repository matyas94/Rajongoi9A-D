function AcceptCookies() {
  setCookie("acceptedCookies", "true", 180);
  document.getElementById("cookieBanner").classList.add("hidden");
}

function DenyCookies() {
  setCookie("acceptedCookies", "false", 3);
  document.getElementById("cookieBanner").classList.add("hidden");
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function ShowCookieBanner() {
  if (getCookie("acceptedCookies") == "") {
    document.getElementById("cookieBanner").classList.remove("hidden");
  }
}