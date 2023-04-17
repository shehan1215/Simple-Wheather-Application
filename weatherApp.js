
const apiKey = "5537c0615614832f49115af6b55a0f95&";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkW(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    // To handle the error massage
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data); // Print on the console like Json format.
    
        // To print those values in Application
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp ) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h ";
    
        // To change the images according to the weather conditions
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "snow.png";
        }
    
        // If search any city after that shows the details
        document.querySelector(".weather").style.display = "block";

        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkW(search.value);
})
 