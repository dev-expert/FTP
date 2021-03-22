const fetch = require('node-fetch');
var data;
fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=4d429cddbcd3d2fd3b9cd2c1ca5f3b05", {
  method: "GET", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
    keys=data;
  })
  .catch((error) => {
    console.error("Error:", error);
  });