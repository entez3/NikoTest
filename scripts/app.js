let icon = document.getElementById("list-icon")
let menu = document.getElementById("menu");
let exit_menu = document.querySelector(".exit-icon")

icon.addEventListener("click", function() {

    menu.style.left = "0";
})

exit_menu.addEventListener("click", function() {

    menu.style.left = "-200px";
})