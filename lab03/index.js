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

document.addEventListener('DOMContentLoaded', () => {
    // --- CONSTANTS AND CONFIGURATION ---
    const OPEN_WEATHER_API_KEY = "c24e364f8679bc72ef1e962dd5ece75d"; 
    const OPEN_WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

    // CORS Proxy Base URL
    const CORS_PROXY_BASE = "https://corsproxy.io/?url=";

    // SECOND API: ZenQuotes API
    const ZENQUOTES_API_URL = `${CORS_PROXY_BASE}https://zenquotes.io/api/random`; 

    // Default location for the assignment
    const DEFAULT_CITY = "Troy, US"; 

    // DOM Elements
    const weatherContent = document.getElementById('weather-data-content');
    const secondApiContent = document.getElementById('second-api-data-content');
    const weatherLocationSpan = document.getElementById('weather-location');
    const refreshQuoteBtn = document.getElementById('refresh-quote-btn'); 
    const messageBox = document.getElementById('message-box');

    // --- UTILITY FUNCTIONS ---

    function showMessage(text, type = 'info') {
        messageBox.textContent = text;
        messageBox.className = 'mt-4 p-3 max-w-lg w-full text-center text-sm rounded-lg';
        messageBox.classList.remove('hidden');

        if (type === 'error') {
            messageBox.classList.add('bg-red-900/50', 'text-amber-400', 'border', 'border-red-800');
        } else if (type === 'success') {
            messageBox.classList.add('bg-blue-900', 'text-blue-300', 'border', 'border-blue-600');
        } else { // info/default
            messageBox.classList.add('bg-blue-800', 'text-sky-300', 'border', 'border-sky-600');
        }
        setTimeout(() => messageBox.classList.add('hidden'), 5000);
    }

    function kelvinToCelsius(k) {
        return (k - 273.15).toFixed(1);
    }

    // --- WX API LOGIC ---

    async function fetchWeatherData(params) {
        const originalUrlParams = new URLSearchParams({
            appid: OPEN_WEATHER_API_KEY, 
            ...params
        });
        const originalUrl = `${OPEN_WEATHER_BASE_URL}?${originalUrlParams.toString()}`;
        const proxiedUrl = `${CORS_PROXY_BASE}${originalUrl}`;

        weatherContent.innerHTML = '<div class="spinner mx-auto"></div><p class="text-gray-400 text-center mt-2">Awaiting WX report...</p>';

        try {
            const response = await fetch(proxiedUrl);
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Unknown API error' }));
                let errorMessage = errorData.message || 'Server did not return weather data.';
                if (response.status === 401 && OPEN_WEATHER_API_KEY === "YOUR_OPENWEATHERMAP_API_KEY") {
                    errorMessage = "API Key Missing! Please replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual key.";
                }
                throw new Error(`Status ${response.status}: ${errorMessage}`);
            }
            
            const data = await response.json();
            updateWeatherUI(data);

        } catch (error) {
            console.error("Error fetching WX data:", error);
            weatherContent.innerHTML = `<p class="text-red-400 text-center">WX Failed: ${error.message}</p>`;
        }
    }

    function updateWeatherUI(data) {
        const tempC = kelvinToCelsius(data.main.temp);
        const description = data.weather[0].description;
        const windSpeed = data.wind.speed.toFixed(1);
        const humidity = data.main.humidity;
        const clouds = data.clouds.all;
        const location = `${data.name}, ${data.sys.country}`;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherLocationSpan.textContent = location;

        // Pilot terminology and high-contrast styling
        weatherContent.innerHTML = `
            <div class="flex items-center justify-between">
                <!-- Temperature and Icon -->
                <div class="flex items-center">
                    <img src="${iconUrl}" onerror="this.onerror=null; this.src='https://placehold.co/80x80/1e3a8a/e0f2f1?text=WX+ICON'" alt="${description}" class="w-20 h-20 filter drop-shadow-lg">
                    <p class="text-6xl font-light ml-2 text-white">${tempC}<span class="text-3xl align-top text-blue-300">°C</span></p>
                </div>
                <!-- Details -->
                <div class="text-right space-y-2 text-gray-300">
                    <p class="text-xl font-medium capitalize text-blue-400">${description}</p>
                    <div class="flex justify-end items-center text-sm">
                        <span class="mr-2 text-amber-300">Surface Wind:</span>
                        <span class="font-semibold">${windSpeed}</span> m/s
                    </div>
                    <div class="flex justify-end items-center text-sm">
                        <span class="mr-2 text-amber-300">Humidity:</span>
                        <span class="font-semibold">${humidity}</span>%
                    </div>
                    <div class="flex justify-end items-center text-sm">
                        <span class="mr-2 text-amber-300">Cloud Cover:</span>
                        <span class="font-semibold">${clouds}</span>%
                    </div>
                </div>
            </div>
        `;
    }

    async function fetchSecondAPIData() {
        secondApiContent.innerHTML = '<div class="spinner mx-auto"></div><p class="text-gray-400 text-center mt-2">Loading inspiration...</p>';
        
        try {
            const response = await fetch(ZENQUOTES_API_URL);
            if (!response.ok) {
                    throw new Error(`ZenQuotes API (via proxy) returned status ${response.status}.`);
            }
            
            const data = await response.json(); 
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error("API returned an empty or unexpected response.");
            }
            
            updateSecondAPIUI(data[0]);
        } catch (error) {
            console.error("Error fetching ZenQuotes API data:", error);
            secondApiContent.innerHTML = `<p class="text-red-400 text-center">Failed to fetch quote: ${error.message}.</p>`;
        }
    }

    function updateSecondAPIUI(data) {
        const quoteContent = data.q || "Despite everything, it's still you.";
        const quoteAuthor = data.a || "Toby Fox";
        
        secondApiContent.innerHTML = `
            <div class="text-left p-4 bg-blue-800 rounded-lg border-l-4 border-amber-400">
                <blockquote class="text-xl italic mb-3 text-white">
                    "${quoteContent}"
                </blockquote>
                <p class="text-right font-semibold text-amber-400">
                    — ${quoteAuthor}
                </p>
            </div>
        `;
    }

    fetchWeatherData({ q: DEFAULT_CITY });
    fetchSecondAPIData(); 
});