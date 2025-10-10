window.onload = function() {
  // alert('JavaScript is fully loaded.');

  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }

}

// ==========================================================

// NOTE: Replace these with your actual latitude, longitude, and API Key!
const LAT = 42.7298;
const LON = 73.6789;
// DONT LOOK AT THIS :D
const API_KEY = "c24e364f8679bc72ef1e962dd5ece75d"; // Use a secure method for real applications!

const API_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;
// NOTE: OpenWeatherMap now recommends the "One Call API 3.0" which is slightly different. 
// I've kept the structure close to your example response.

function kelvinToCelsius(K) {
    return (K - 273.15).toFixed(1); // One decimal place
}

async function fetchWeatherData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // --- Current Weather Data ---
        const current = data.current;
        document.getElementById('location-data').textContent = data.timezone; // Using timezone as a pseudo-location
        document.getElementById('temp-data').textContent = `${kelvinToCelsius(current.temp)} °C`;
        document.getElementById('feels-like-data').textContent = `${kelvinToCelsius(current.feels_like)} °C`;
        document.getElementById('description-data').textContent = current.weather[0].description;
        document.getElementById('humidity-data').textContent = `${current.humidity} %`;
        document.getElementById('wind-speed-data').textContent = `${current.wind_speed} m/s`;
        
        // Weather Icon
        const iconCode = current.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.src = iconUrl;
        weatherIcon.alt = current.weather[0].description + " icon";

        // --- Daily Forecast Summary ---
        if (data.daily && data.daily.length > 0) {
            document.getElementById('daily-summary').textContent = data.daily[0].summary;
        }

        // --- Weather Alerts ---
        const alertsContainer = document.getElementById('weather-alerts');
        alertsContainer.innerHTML = ''; // Clear the initial 'No active alerts' message

        if (data.alerts && data.alerts.length > 0) {
            data.alerts.forEach(alert => {
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert-item';
                
                const event = document.createElement('h4');
                event.textContent = alert.event;
                
                const sender = document.createElement('p');
                sender.textContent = `Source: ${alert.sender_name}`;
                
                const description = document.createElement('p');
                description.textContent = alert.description.substring(0, 150) + '...'; // Truncate description
                
                alertDiv.appendChild(event);
                alertDiv.appendChild(sender);
                alertDiv.appendChild(description);
                alertsContainer.appendChild(alertDiv);
            });
        } else {
            document.getElementById('no-alerts-message').style.display = 'block'; // Show the default message
        }

    } catch (error) {
        console.error("Error fetching or parsing weather data:", error);
        document.getElementById('current-weather').innerHTML = '<p>Error loading weather data. Please try again later.</p>';
    }
}

fetchWeatherData();