// JavaScript Document

//CHECK SESSION STORAGE UPON REVISIT
function siteColorPreference(){
    if (typeof(Storage) != "undefined"){
        var siteStylesheet = document.getElementById("color_stylesheet");
        if (localStorage.color){
            if (localStorage.color == "rgb"){
                siteStylesheet.setAttribute("href","test_rgb.css");
            } else if (localStorage.color == "cmyk"){
                siteStylesheet.setAttribute("href","test_cmyk.css");
            } else if (localStorage.color == "grayscale"){
                siteStylesheet.setAttribute("href","test_grayscale.css");
            } 
        } else {
                siteStylesheet.setAttribute("href","test_cmyk.css");
               }
        
    } else{
        console.log("No local storage!");
    }
}

//MAIN EVENT LISTENERS

document.getElementById("about").addEventListener("click",function(){expandBox("about");}, false);
document.getElementById("comics").addEventListener("click",function(){expandBox("comics");}, false);
document.getElementById("illustration").addEventListener("click",function(){expandBox("illustration");}, false);
document.getElementById("etc").addEventListener("click",function(){expandBox("etc");}, false);
/*document.getElementById("about").addEventListener("click",function(){expandBox("about");}, false);
document.getElementById("comics").addEventListener("click",function(){expandBox("comics");}, false);
document.getElementById("illustration").addEventListener("click",function(){expandBox("illustration");}, false);
document.getElementById("etc").addEventListener("click",function(){expandBox("etc");}, false);*/

//STORAGE EVENT LISTENERS
document.getElementById("cmyk").addEventListener("click",function(){changeSiteColor("cmyk")}, false);
	document.getElementById("rgb").addEventListener("click",function(){changeSiteColor("rgb")}, false);
	document.getElementById("grayscale").addEventListener("click",function(){changeSiteColor("grayscale")}, false);


document.getElementById("back").addEventListener("click",goBack,false);


var quadrants = new Array("about","comics","illustration","etc");


/* NAVIGATION FUNCTIONS */
function expandBox(id){

    
    for (i = 0; i < quadrants.length; i++){
    
        quadrantTest = quadrants[i];
        
        
        if (quadrantTest == id){
            loadedTheHTML = document.getElementById("main_text_" + id).innerHTML;
            
            document.getElementById(quadrantTest).className = "centered_box_" + id;
            document.getElementById(quadrantTest).innerHTML = loadedTheHTML;
            
            for (y = 0; y < quadrants.length; y++){
                if (y != i){
                    document.getElementById(quadrants[y]).style.display = "none";
                }
            }
        }
        
    }
    
    showBack();
}

function showBack(){
    if (document.getElementById("back").className == "hide"){
        document.getElementById("back").className = "back";
    }
}

function goBack(){
    if (document.getElementById("back").className == "back"){
        for (i = 0; i < quadrants.length; i++){
            quadrantTest = quadrants[i];
            if (document.getElementById(quadrantTest).className == "centered_box_" + quadrantTest){
                document.getElementById(quadrantTest).className = quadrantTest;
                if (quadrantTest == "illustration"){
                    document.getElementById(quadrantTest).innerHTML = "<div class='push_small'>illustration</div>";
                } else if (quadrantTest == "etc"){
                    document.getElementById(quadrantTest).innerHTML = "<div class='push'>" + quadrantTest + ".</div>";
                } else {
                    document.getElementById(quadrantTest).innerHTML = "<div class='push'>" + quadrantTest + "</div>";
                }
            }
            for (y = 0; y < quadrants.length; y++){
                if (y != i){
                    document.getElementById(quadrants[y]).style.display = "block";
                }
            }
            
        }
        document.getElementById("back").className = "hide";
    }
}

//CHANGE SITE COLOR + STORE AS SESSION STORAGE
function changeSiteColor(color){
    var whichStylesheet = document.getElementById("color_stylesheet");
    if (color == "cmyk"){
        whichStylesheet.setAttribute("href","test_cmyk.css");
        localStorage.color = "cmyk";
    } else if (color == "rgb"){
        whichStylesheet.setAttribute("href","test_rgb.css");
        localStorage.color = "rgb";
    } else if (color == "grayscale"){
        whichStylesheet.setAttribute("href","test_grayscale.css");
        localStorage.color = "grayscale";
    }
    var whatCookieIsThis = getCookie(color);
    console.log(whatCookieIsThis);
}

		


/* POP-UP */
var facepopup;
function openPopup(){
    facepopup = window.open('popup_face.html', 'popup', 'width=500px, height=500px');}

