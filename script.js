// funcion que captura datos del registro
/* const getVaueInput = () => {
let inputValue1 = document.querySelector("#name").value;
let inputValue2 = document.querySelector("#dni").value;
let inputValue3 = document.querySelector("#tel").value;
let inputValue4 = document.querySelector("#politic").value;
console.log(inputValue4);
} */

//funcion que recibe evento click
function onClick(event) {
event.preventDefault();

const mensaje = {
    name: document.getElementById("name").value,
    dni: document.getElementById("dni").value,
    tel: document.getElementById("tel").value,
    mensaje: document.getElementById("textarea").value,
}    
console.log(mensaje);

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
})
    .then((response) => response.json())
    .then((json) => {
    console.log(json);
    Swal.fire("Enviado", "Gracias por tu comentario", "success");
    cleanForm();
      /* redirectUrl(); */
    })
    .catch((err) => console.log(err));
}

function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectUrl(){
    window.location.href = "https://google.com";    
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);



//prueba de promesa
/* fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then((json) => console.log(json));
 */


// funcion asinconica de tres pasos, 1 busca ip, 2 busca ubicacion geografica, 3 busca informacion del clima
async function getIp() {
try {
    let response = await fetch("https://api.ipify.org?format=json");
    let ipResponse = await response.json();
    console.log(ipResponse);

    let responseLocation = await fetch(
    "http://ip-api.com/json/" + ipResponse.ip
    );
    let locationResponse = await responseLocation.json();
    console.log(locationResponse);

    let responseWeather = await fetch("http://api.openweathermap.org/data/2.5/weather?lat="+locationResponse.lat+"&lon="+locationResponse.lon+"&exclude=current&appid=82f377eba1003bad75793254d942930d");
    //let responseWeather = await fetch ("http://api.openweathermap.org/data/2.5/weather?lat=-24.18325&lon=-65.33134&exclude=current&appid=82f377eba1003bad75793254d942930d")
    let weatherResponse = await responseWeather.json();
    console.log(weatherResponse);
  } catch {
    console.log("Algo paso, no se pudo resolver...");
  }
}
getIp();
