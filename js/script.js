var sun = document.querySelector(".sun");
var moon = document.querySelector(".moon");
var html = document.querySelector(".html");
var themeVal = html.getAttribute('data-bs-theme');

moon.addEventListener('click', function(){
    html.setAttribute("data-bs-theme", "dark");
})

sun.addEventListener('click', function(){
    html.setAttribute("data-bs-theme", "light");
})

function getVal(){
    var themeVal = html.getAttribute('data-bs-theme');
    localStorage.setItem('theme', themeVal);
}
setInterval(getVal, 100);

var theme = localStorage.getItem('theme');
html.setAttribute("data-bs-theme", theme);
