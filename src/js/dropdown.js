window.onload = function () {
    dropdown = document.getElementById("DropDown")
    dropdown.style.display = "none"
}
function dropDown() {
    var dropdown = document.getElementById("DropDown")
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block"
    } else {
        dropdown.style.display = "none"
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.dropimg')) {
        let dropdowns = document.getElementsByClassName("dropdown-content")
        for (const dropdown of dropdowns) {
            dropdown.classList.remove('show')
        }
    }
}