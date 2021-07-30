let clickedfirst = () => {
    alert("cliqueaste la primera")
    }
let clickedsecond = () => {
    console.warn("cliqueaste el segundo")
    }
let clickedthird = () => {
    console.log("cliqueaste la tercera")
    }

document.getElementById("hotelbutton1").addEventListener("click", clickedfirst );
document.getElementById("hotelbutton2").addEventListener("click", clickedsecond );
document.getElementById("hotelbutton3").addEventListener("click", clickedthird );

