let city1Date = moment().tz("America/Los_angeles").format("MMMM DD yy");
let city1Element = document.querySelector(" #cities1");
let cityDateElement = cities1.querySelector("#date");

cityDateElement.innerHTML = city1Date;

let city1Time = moment().tz("America/Los_angeles").format(" h:mm:ss a ");

let city1TimeElement = document.querySelector("#cities1");
let cityTimeElement = cities1.querySelector("#time");
cityTimeElement.innerHTML = city1Time;

let city2Date = moment().tz("Australia/Sydney").format("MMMM DD yy");
let city2Element = document.querySelector(" #cities2");
let cityDate2Element = cities2.querySelector("#date");

cityDate2Element.innerHTML = city2Date;

let city2Time = moment().tz("Australia/Sydney").format(" h:mm:ss a ");

let city2TimeElement = document.querySelector("#cities2");
let cityTime2Element = cities2.querySelector("#time");
cityTime2Element.innerHTML = city2Time;

let city3Date = moment().tz("Europe/Lisbon").format("MMMM DD yy");
let city3Element = document.querySelector(" #cities3");
let cityDate3Element = cities3.querySelector("#date");

cityDate3Element.innerHTML = city3Date;

let city3Time = moment().tz("Europe/Lisbon").format(" h:mm:ss a ");

let city3TimeElement = document.querySelector("#cities3");
let cityTime3Element = cities3.querySelector("#time");
cityTime3Element.innerHTML = city3Time;
