function signIn() {
    var uname = btoa(document.getElementById("user").value);
    var passw = btoa(document.getElementById("pass").value);
    if (uname == "dHJ1ZXByb2JsZW1hdGlj" & passw == "c2FtYXgzMzM=") {
        setCookie("signin", "KnNlY3JldEtleSEhMTIzKg==", 1);
        window.location = 'landing.html';
    } else if (uname == "Z3Vlc3Q=" & passw == "cGFzc3dvcmQ=") {
        setCookie("signin", "KnNlY3JldEtleSEhMTIzKg==", 1);
        window.location = 'landing.html';
    } else {

    }
}

function homePage() {
    console.log("HELLO");
    window.location = 'index.html';
}

function repair() {
    console.log("Repair request form opened");
    window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSepG2hFEUdOpcTV3EpBfJyftrWDuWXSjow9XU39r8SxGvMl0Q/viewform?usp=sf_link';
}

function check() {
    var mode = getCookie("mode");
    // alert(mode);
    if (mode == "dark") {
        darkMode();
    } else {
        lightMode();
    }
}

function check2() {
    var mode = getCookie("mode");
    var log = getCookie("signin");
    // alert(mode);
    if (log != "KnNlY3JldEtleSEhMTIzKg==") {
    } else {
        window.location = 'landing.html';
    }
}

function mobileCheck() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (width < height) {
        location.replace("mobile.html");
    }
}

function mobileCheck2() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if (width > height) {
        location.replace("index.html");
    }
}

function menuHover(){
    document.getElementById('p1').style.width = "85vw";
    document.getElementById('p2').style.width = "85vw";
    document.getElementById('p3').style.width = "85vw";
    document.getElementById('p1').style.left = "10vw";
    document.getElementById('p2').style.left = "10vw";
    document.getElementById('p3').style.left = "10vw";
    document.getElementById('p1').style.transition = "width 0.7s";
    document.getElementById('p2').style.transition = "width 0.7s";
    document.getElementById('p3').style.transition = "width 0.7s";
}

function menuUnhover(){
    document.getElementById('p1').style.width = "90vw";
    document.getElementById('p2').style.width = "90vw";
    document.getElementById('p3').style.width = "90vw";
    document.getElementById('p1').style.left = "5vw";
    document.getElementById('p2').style.left = "5vw";
    document.getElementById('p3').style.left = "5vw";
    document.getElementById('p1').style.transition = "width 0.7s";
    document.getElementById('p2').style.transition = "width 0.7s";
    document.getElementById('p3').style.transition = "width 0.7s";
}

function darkMode() {
    document.getElementById('seeinlight').style.right = '-100vw';
    document.getElementById('seeindark').style.right = '2vw';
    document.getElementById('body').style.background = "#262626";
    document.getElementById('h1').style.background = "linear-gradient(#ff7200, #ff4800)";
    document.getElementById('h1text').style.color = "#000000";
    document.getElementById('h1text').style.textShadow = "1px 1px white";
    document.getElementById('body').style.color = "#FAFAFF";
    // document.getElementById('menu').style.backgroundImage = "linear-gradient(#ff720000, #ff4800, #ff4800)";
    document.getElementById('menu').style.backgroundColor = "#262626";
    document.getElementById('menuTxt').style.color = "#FAFAFF";
    document.getElementById('men1').style.color = "#FAFAFF";
    document.getElementById('men2').style.color = "#FAFAFF";
    document.getElementById('men3').style.color = "#FAFAFF";
    document.getElementById('men4').style.color = "#FAFAFF";
    document.getElementById('men5').style.color = "#FAFAFF";
    document.getElementsByClassName('black').style.color = "#FAFAFF";
    setCookie("mode", "dark", 30);
}

function lightMode() {
    document.getElementById('seeindark').style.right = '-100vw';
    document.getElementById('seeinlight').style.right = '2vw';
    document.getElementById('body').style.background = "#FAFAFF";
    document.getElementById('h1').style.background = "linear-gradient(#2176FF, #33A1FD)";
    document.getElementById('h1text').style.color = "#FAFAFF";
    document.getElementById('h1text').style.textShadow = "2px 2px black";
    document.getElementById('body').style.color = "#000000";
    // document.getElementById('menu').style.backgroundImage = "linear-gradient(#2176FF00, #33A1FD, #6bbcff)";
    document.getElementById('menu').style.backgroundColor = "#FAFAFF";
    document.getElementById('menuTxt').style.color = "#262626";
    document.getElementById('men1').style.color = "#262626";
    document.getElementById('men2').style.color = "#262626";
    document.getElementById('men3').style.color = "#262626";
    document.getElementById('men4').style.color = "#262626";
    document.getElementById('men5').style.color = "#262626";
    document.getElementsByClassName('black').style.color = "#262626";
    setCookie("mode", "light", 30);

}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
