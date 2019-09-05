//Array contains all hex values required to generate a color
var col = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var col1 = document.querySelector("#colI");
var col2 = document.querySelector("#colII");
var change = document.querySelector("#change");
var code = document.querySelector("#code");
var bdy = document.getElementsByTagName("style");
var grd = document.getElementById("css");
var colr1 = "#2BC0E4";
var colr2 = "#EAECC6";
var colr = "( to right , " + colr1 + " ," + colr2 + " );";
var style = "background: linear-gradient(to right,#2BC0E4 10%,#EAECC6 90%);";

//make a function to generate a number between 0 to 15
function rndm() {
    return Math.floor(Math.random()*16);
}

//function to generate a color
function color(){
    var hex = ["#"];
    for (let i = 0; i < 6; i++) {
        hex = hex + col[rndm()];
    }
    return hex;
}


function Change(){
    var r = Math.ceil(Math.random()*9)*10;
    colr1 = color();
    colr2 = color();
    col1.textContent = colr1;
    col2.textContent = colr2;
    document.querySelector("#displaycode").style.opacity = "0";
    colr = "( to right ," + colr1 +" ," + colr2 +" );";
    style = "background: linear-gradient" + colr;

        bdy[0].innerHTML = "body{"+style+"}" ;
};

function Code(){
    grd.innerHTML = style;
    document.getElementById("displaycode").style.opacity = "1";
};

function Copy(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");

    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        alert("text copied");
    }
}