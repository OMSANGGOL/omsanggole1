const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


setInterval(() => {
const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const day = time.getDay();

dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);
if(localStorage.when != null
    && parseInt(localStorage.when) + 10000 > Date.now()) {
    let freshness = Math.round((Date.now() - localStorage.when)/1000) + " second(s)";
    document.querySelector(".city").innerText = "Weather in Amber Valley";
        document.querySelector(".icon").src= 'http://openweathermap.org/img/wn/'+localStorage.icon+'@2x.png';

         document.querySelector(".description").innerText=localStorage.weather_description;
         document.querySelector(".temp").innerText = localStorage.weather_temperature+ "°C";
         document.querySelector(".humidity").innerText = "Humidity: " + localStorage.Humidity + "% ";
         document.querySelector(".wind").innerText = "Wind speed: " + localStorage.weather_Wind + "km/h ";
 
         document.querySelector(".weather").classList.remove("loading");
         document.querySelector(".pressure").innerText = "Pressure:" + localStorage.pressure + "hPa";
         document.body.style.backgroundImage = 'URL("//source.unsplash.com/1600x900/?background/clouds/")';
    } else {
    // the city's weather may be retrieved using an API.
    fetch("http://localhost/weatherApp/myapi.php?city=Pine%20Creek")
    // Response string to JSON object conversion
    .then(response => response.json())
    .then(response => {
    // Replicate a portion of your response in our HTML paragraph.
    document.querySelector(".city").innerText = "Weather in Amber Valley";
        document.querySelector(".icon").src= 'http://openweathermap.org/img/wn/'+response.icon+'@2x.png';

        document.querySelector(".description").innerText=response.weather_description;
        document.querySelector(".temp").innerText = response.weather_temperature+ "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + response.Humidity + "% ";
        document.querySelector(".wind").innerText = "Wind speed: " + response.weather_Wind + "km/h ";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".pressure").innerText = "Pressure:" + response.pressure + "hPa";
        document.body.style.backgroundImage = 'URL("//source.unsplash.com/1600x900/?background/clouds/")';
 
 // saving updated information with a fresh timestamp
    localStorage.icon = response.icon;
    localStorage.weather_description = response.weather_description;
    localStorage.weather_temperature = response.weather_temperature;
    localStorage.Humidity = response.Humidity;
    localStorage.weather_Wind = response.weather_Wind;
    localStorage.pressure = response.pressure;
    localStorage.when = Date.now(); // milliseconds since January 1 1970
    })
    .catch(err => {
    // In the console, display errors
    console.log(err);
    });
    }
let weather = {
    apiKey:"c719daf8f860b188baba5d32ea7c2e04",
    fetchWeather: function(city){
        fetch(
            'http://localhost/weatherApp/myapi.php?city=Pine%20Creek'
         )
            .then((response)=> response.json())
            .then((data) => this.displayWeather(data));
       
             },
    displayWeather: function(data) {

        document.querySelector(".city").innerText = "Weather in Amber Valley";
        document.querySelector(".icon").src= 'http://openweathermap.org/img/wn/'+data.icon+'@2x.png';

        document.querySelector(".description").innerText=data.weather_description;
        document.querySelector(".temp").innerText = data.weather_temperature+ "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + data.Humidity + "% ";
        document.querySelector(".wind").innerText = "Wind speed: " + data.weather_Wind + "km/h ";

        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".pressure").innerText = "Pressure:" + data.pressure + "hPa";
        document.body.style.backgroundImage = 'URL("//source.unsplash.com/1600x900/?background/clouds/")';


     },
      search: function (){
      this.fetchWeather (document.querySelector(".search-bar").value);
       }
       };

     document.querySelector(".search-button")
     .addEventListener("click",  function (){
        weather.search();

      } );
      document.querySelector(".search-bar")
      .addEventListener("keyup",  function (event){
       if (event.key=="Enter"){
       weather.search(); 
       }

        });

           weather.fetchWeather("Amber valley");
