const searchParams = new URLSearchParams(window.location.search);
const kraken = searchParams.get("kraken");
// "1"
window.nzxt.v1.height;
//640x640
const kraken = window.location.search.includes("kraken=1");
if (kraken) {
  // On Kraken Browser
  window.addEventListener("storage", (event) => {
    if (event.key === "greeting") {
      console.log(event.newValue);
    }
  });
} else {
  // On Configration Browser
  window.localStorage.setItem("greeting", "hello from kraken");
}
// Kraken and Configuration Browsers
window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
      const { cpus, gpus, ram, kraken } = data;
    }
  }
};
