let temperature = 20;

setInterval(() => {
  temperature += 1;
  document.getElementById("valeur").innerText =
    "Température : " + temperature + " °C";
}, 1000);
