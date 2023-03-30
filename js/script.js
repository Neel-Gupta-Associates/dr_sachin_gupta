sun = document.querySelector(".sun");
moon = document.querySelector(".moon");
html = document.querySelector(".html");

moon.addEventListener('click', function(){
    html.setAttribute("data-bs-theme", "dark");
})

sun.addEventListener('click', function(){
    html.setAttribute("data-bs-theme", "light");
})