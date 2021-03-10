
var valtA = "";
var valtB = "";
var osszeg = "";
function osszead(){
    valtA = Number(document.getElementById("a").value);
    valtB = Number(document.getElementById("b").value);
    osszeg = valtA + valtB;
}
function kivon(){
    valtA = Number(document.getElementById("a").value);
    valtB = Number(document.getElementById("b").value);
    osszeg = valtA - valtB;
}
function szoroz(){
    valtA = Number(document.getElementById("a").value);
    valtB = Number(document.getElementById("b").value);
    osszeg = valtA * valtB;
}
function oszt(){
    valtA = Number(document.getElementById("a").value);
    valtB = Number(document.getElementById("b").value);
    osszeg = valtA / valtB;
}

function szamolas() {
    var valtJel = document.getElementById("muv").value;  
    if (valtJel==="+") {
        osszead();
    }else if (valtJel==="-") {
        kivon();
    }else if (valtJel==="*") {
        szoroz();
    }else if (valtJel==="/") {
        oszt();
    }else{
        osszeg = "HIBA";
    }
    
    document.getElementById("szoveg").innerHTML = osszeg;
}

