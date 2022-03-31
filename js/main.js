$(window).on('load', function () {
    document.getElementById("ed").click();
    if (isIEorEDGE() == true) {
        media = document.getElementsByClassName("media");
        for (i = 0; i < media.length; i++) {
            $(media[i]).css("display", "block");
        }
    }
    
    $('#navmenu').find(".nav_el").each(function () {
        $(this).click(function () {
            
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 600);
            return false;
        });
    });
    
    $('#main-frame').find(".lrn-btn").each(function () {
        $(this).click(function () {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 600);
            return false;
        });
    });
});

$(document).ready(function(){
    $("li").click(function(){
        id = $(this)[0].id;
        document.getElementById("phone-feature").src="img/screen_" + id + ".png";
        //change color of icons
        icons = document.getElementsByClassName("circle-icon");
        for (i = 0; i < icons.length; i++) {
            $(icons[i]).css("background-color", "#FFF");
            $(icons[i]).css("color", "#0084ff");
            $(icons[i]).css("box-shadow", "0px 9px 32px 0px rgba(0, 0, 0, 0.05)");
        }
        icon = "#icon-" + id
        $(icon).css("background-color", "#0084ff");
        $(icon).css("box-shadow", "0px 9px 32px 0px rgba(0, 0, 0, 0.07)");
        $(icon).css("color", "#FFF");
    });
});

function isIEorEDGE(){
  return navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && (navigator.appVersion.indexOf('Edge') > -1 || navigator.userAgent.indexOf("Trident/7.0") > -1));
}

function showResponsive() {
    var x = document.getElementById("navmenu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var x = document.getElementById("content");
    if (x.className === "main_content") {
        x.className += " responsive";
    } else {
        x.className = "main_content";
    }
}


function openTab(evt, tabName, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}