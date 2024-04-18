let city1Date = moment().tz("America/Los_angeles").format("MMMM DD yy");
let dateElement = document.querySelector("#date");
dateElement.innerHTML = city1Date;
let city2Date = moment().tz("Australia/Sydney").format("MMMM DD yy");
let date2Element = document.querySelector("#date");
date2Element.innerHTML = city2Date;
