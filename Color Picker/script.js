var show = document.getElementById("show")
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")

function forbody(){
    show.style.backgroundColor = "white"
    var text = "Ready to paint your digital canvas? Select your hue!"
    // text.style.color = "Black"
    show.innerHTML = text

}
    // Funcations for Changing the Color 
function first(){
    show.style.backgroundColor = box1.style.backgroundColor
    show.innerHTML = ""
}
function second(){
    show.style.backgroundColor = box2.style.backgroundColor
    show.innerHTML = ""
}
function third(){
    show.style.backgroundColor = box3.style.backgroundColor
    show.innerHTML = ""
}
function fourth(){
    show.style.backgroundColor = box4.style.backgroundColor
    show.innerHTML = ""
}
function fifht(){
    show.style.backgroundColor = box5.style.backgroundColor
    show.innerHTML = ""
}

