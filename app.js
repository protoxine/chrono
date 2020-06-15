                                        //fonctionnement du chrono

let heure = 0, minute = 0, seconde = 0, inter;
let afficheHeure = document.getElementById("heure")
let afficheMinute = document.getElementById("minute")
let afficheSeconde = document.getElementById("seconde")
document.getElementById("start").addEventListener("click", start)
document.getElementById("stop").addEventListener("click", stopChrono)
document.getElementById("reset").addEventListener("click", resetChrono)
document.getElementById("reset").setAttribute("disabled", true)
document.getElementById("stop").setAttribute("disabled", true)

function start(){
    inter = setInterval(chronometre, 1000)
    document.getElementById("reset").setAttribute("disabled", true)
}

function chronometre(){
    document.getElementById("start").setAttribute("disabled", true)
    document.getElementById("stop").removeAttribute("disabled")
    seconde++
        if(seconde == 60){
            seconde = 0
            minute ++
        }
        if(minute == 60){
            minute = 0
            heure ++
        }
    afficheHeure.innerHTML = heure < 10 ? "0"+ heure : heure
    afficheMinute.innerHTML = minute < 10 ? "0"+ minute : minute
    afficheSeconde.innerHTML = seconde < 10 ? "0"+ seconde : seconde
}

function stopChrono(){
    document.getElementById("start").removeAttribute("disabled")
    document.getElementById("reset").removeAttribute("disabled")
    document.getElementById("stop").setAttribute("disabled", true)
    clearInterval(inter)
}

function resetChrono(){
    document.getElementById("reset").setAttribute("disabled", true)
    heure = 0, minute = 0, seconde = 0;
    afficheHeure.innerHTML = "0" + heure
    afficheMinute.innerHTML = "0" + minute
    afficheSeconde.innerHTML = "0" + seconde
}