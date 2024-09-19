document.addEventListener('DOMContentLoaded', function() {
    const weatherBtn = document.getElementById('weatherBtn');
    const weatherDisplay = document.getElementById('weatherDisplay');
    const cityInput = document.getElementById('cityInput');

    weatherBtn.addEventListener('click', function() {
        const city = cityInput.value;
        if (city) {
            // Fetching weather data from an API
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
                .then(response => response.json()) // Parsing the JSON response
                .then(data => {
                    if (data.cod === 200) {
                        // Displaying the weather information on the webpage
                        weatherDisplay.textContent = `Temperature in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
                    } else {
                        weatherDisplay.textContent = 'City not found. Please try again.';
                    }
                })
                .catch(error => {
                    // Handling errors
                    weatherDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                    console.error('Error fetching weather data:', error);
                });
        } else {
            weatherDisplay.textContent = 'Please enter a city name.';
        }
    });
});
