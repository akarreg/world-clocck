setInterval(function () {
  let city1Element = document.querySelector("#cities1");
  let cityDateElement = city1Element.querySelector("#date");
  let cityTimeElement = city1Element.querySelector("#time");

  let city1Time = moment().tz("America/Los_angeles").format("h:mm:ss a ");
  let city1Date = moment().tz("America/Los_angeles").format("MMMM DD yyy");
  cityDateElement.innerHTML = city1Date;
  cityTimeElement.innerHTML = city1Time;
  let city2Element = document.querySelector("#cities2");
  let cityDate2Element = city2Element.querySelector("#date");
  let cityTime2Element = city2Element.querySelector("#time");

  let city2Time = moment().tz("Australia/Sydney").format("h:mm:ss a ");
  let city2Date = moment().tz("Australia/Sydney").format("MMMM DD yyy");
  cityDate2Element.innerHTML = city2Date;
  cityTime2Element.innerHTML = city2Time;

  let city3Element = document.querySelector("#cities3");
  let cityDate3Element = city3Element.querySelector("#date");
  let cityTime3Element = city3Element.querySelector("#time");

  let city3Time = moment().tz("Europe/Lisbon").format("h:mm:ss:SSS a ");
  let city3Date = moment().tz("Europe/Lisbon").format("MMMM DD yyy");
  cityDate3Element.innerHTML = city3Date;
  cityTime3Element.innerHTML = city3Time;
}, 10);
function update(event) {
  let cityTimeZone = event.target.value;

  cities1.innerHTML = cityTimeZone;
}

let citySelect = document.querySelector("#search");
citySelect.addEventListener("change", update);
