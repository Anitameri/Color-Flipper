
let color = ["red", "blue", "yellow", "green", "gray","pink","orange"];

const boton = document.getElementById("Boton");
boton.addEventListener("click",() => {
    // console.log("click color");
    // let maxim = color.length;
    let aleatorio = Math.floor(Math.random() * color.length);
    document.getElementById("Color").innerHTML = color[aleatorio];
    document.body.style.backgroundColor = color[aleatorio];
});
// function Titulo() {
   
// }
