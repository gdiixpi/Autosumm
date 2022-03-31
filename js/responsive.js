
function showResponsive() {
    var x = document.getElementById("navmenu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var x = document.getElementById("content");
    if (x != null)
    {
        if (x.className === "main_content") {
            x.className += " responsive";
        } else {
            x.className = "main_content";
        }
    }
}
