
let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "8e1b80df880a70de880b2881fd0bd091";

const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if (jsonData.cod == 400) {
        alert("Please Enter Location");
        image.src = "error1.jpeg";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
        return;
    }
    if (jsonData.cod == 404) {
        alert("Please Enter Correct Location");
        image.src = "error2.jpeg";
        city.innerHTML = search;
        temp.innerHTML = "";
        type.innerHTML = "";
        return;
    }

    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;

    if (type.innerHTML == "Clouds") {
        image.src = "Clouds.png";
        document.body.style.backgroundImage = "url('cloudy.jpg')";
    } else if (type.innerHTML == "Clear") {
        image.src = "clears.png";
        document.body.style.backgroundImage = "url('clear.jpg')";
    } else if (type.innerHTML == "Rain") {
        image.src = "rain.png";
        document.body.style.backgroundImage = "url('Rain.jpg')";
    } else if (type.innerHTML == "Snow") {
        image.src = "snow.png";
        document.body.style.backgroundImage = "url('snowy.jpg')";
    } else if (type.innerHTML == "Haze") {
        image.src = "haze.png";
        document.body.style.backgroundImage = "url('haze.jpg')";
    } else if (type.innerHTML == "Storm") {
        image.src = "strom.png";
        document.body.style.backgroundImage = "url('storm.jpg')";
    }
    else if (type.innerHTML == "mist") {
        image.src = "mist.png";
        document.body.style.backgroundImage = "url('mist.jpg')";
    }
    input.value = "";
}

function myFun() {
    let search = input.value;
    data(search);
}

 