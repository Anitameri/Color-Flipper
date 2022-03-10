document.body.style.backgroundColor = "red";
const boton = document.getElementById("Boton");
boton.addEventListener("click",() =>{
    console.log("click color");
});
let color = ["red", "blue", "yellow", "green", "gray"];

function Titulo() {
    let maxim = color.length;
    let aleatorio = Math.floor(Math.random() * maxim);
    document.getElementById("Color").innerHTML = color[aleatorio];
}