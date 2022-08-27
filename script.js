/* fetch ()

let parrafo= document.getElementById("para1");
console.log(parrafo);

console.log(parrafo1.textcontent);

let listaDesordenada = document.createElement("ul");
document.body.appendChild(listaDesordenada);
 */
async function getIp() {
    try{
        let response = await fetch("https://api.ipify.org?format=json");
        let ipResponse = await response.json();
        console.log(ipResponse);

        let responseLocation =await fetch ("http://ip-api.com/json/"+ ipResponse.ip);
        let locationResponse = await responseLocation.json();
        console.log(locationResponse);
        console.log(locationResponse.lat);

        let weather = await fetch ("http://api.openweathermap.org/data/3.0/onecall?lat="+locationResponse.lat+"&lon="+locationResponse.lon+"&exclude="+current+"&appid=82f377eba1003bad75793254d942930d")
        let weatherResponse = await responseWeather.json();
        console.log(weatherResponse);
        } catch {
            console.log("Algo paso, no se pudo resolver...")
        }   
}
getIp();

