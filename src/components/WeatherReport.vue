<template>
  <div class="weather-container">
    <label class="toggle">
      <input class="toggle-input" type="checkbox" />
      <span class="toggle-label" data-off="°F" data-on="°C"></span>
      <span class="toggle-handle"></span>
    </label>

    <div id="currentDate">
      <h1 id="date">{{ currentDate }}</h1>
    </div>

    <div id="locationContainer" class="inline-location">
      <span id="weather-location">{{ locationName }}</span>
    </div>

    <div id="weatherContainer">
      <h1 id="temperature" class="inline">{{ temperature }}</h1>
      <h1 id="divide-line" class="inline">|</h1>
      <h1 id="condition" class="inline">{{ condition }}</h1>
      <img alt="condition-logo" :src="srcCondition" class="condition-image" />
    </div>

    <div class="additional-info">
      <div class="feels-like">
        <img src="feels-like.png" alt="feels-like" />
        <div class="feels-like-text">
          <span id="feelsLikeTemp"></span>
          <br />
          <span class="feelsLikeText">Feels Like</span>
        </div>
      </div>

      <div class="humidity">
        <img src="humidity.png" alt="humidity" />
        <div class="humidity-text">
          <span id="humidity"></span>
          <br />
          <span class="humidityText">Humidity</span>
        </div>
      </div>

      <div class="pressure">
        <img src="pressure.png" alt="pressure" />
        <div class="pressure-text">
          <span id="pressure"></span>
          <br />
          <span class="pressureText">Pressure</span>
        </div>
      </div>

      <div class="wind-speed">
        <img src="wind-speed.png" alt="wind-speed" />
        <div class="wind-sped-text">
          <span id="windSpeed"></span>
          <br />
          <span class="wind-speedText">Wind Speed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      locationName: "",
      currentDate: "",
      temperature: "",
      condition: "",
      srcCondition: "",
    };
  },
  created() {
    if (this.$route.query.locationName) {
      this.locationName = this.$route.query.locationName;
      console.log(this.locationName);

      axios
        .post("/api/sendData", { location: this.locationName })
        .then((response) => {
          // Handle the response from the Go backend
          this.currentDate = response.data.date;
          var cityName = response.data.location.name;
          var regionName = response.data.location.region;
          var countryName = response.data.location.country;
          this.locationName = `${cityName}, ${regionName}, ${countryName}\n`;
          this.temperature = response.data.current.temp_c;
          this.condition = response.data.current.condition.text;

          this.inputValue = cityName;
          console.log(cityName);
          console.log(response.data);


          if (this.condition == "Sunny") {
            this.srcCondition= "/sunny.png";
          } else if (this.condition == "Partly cloudy") {
            this.srcCondition= "/partly-cloudy.png";
          } else if (this.condition == "Cloudy") {
            this.srcCondition= "/cloudy.png";
          } else if (this.condition == "Overcast") {
            this.srcCondition= "/overcast.png";
          } else if (this.condition == "Mist") {
            this.srcCondition= "/mist.png";
          } else if (this.condition == "Patchy rain possible") {
            this.srcCondition= "/light-rain.png";
          } else if (this.condition == "Patchy snow possible") {
            this.srcCondition= "/patchy-snow-possible.png";
          } else if (this.condition == "Patchy sleet possible") {
            this.srcCondition= "/patchy-sleet-possible.png";
          } else if (this.condition == "Patchy freezing drizzle possible") {
            this.srcCondition= "/patchy-freezing-drizzle-possible.png";
          } else if (this.condition == "Thundery outbreaks possible") {
            this.srcCondition= "/thundery-outbreaks-possible.png";
          } else if (this.condition == "Blowing snow") {
            this.srcCondition= "/blowing-snow.png";
          } else if (this.condition == "Blizzard") {
            this.srcCondition= "/blizzard.png";
          } else if (this.condition == "Fog") {
            this.srcCondition= "/fog.png";
          } else if (this.condition == "Freezing fog") {
            this.srcCondition= "/freezing-fog.png";
          } else if (this.condition == "Patchy light drizzle") {
            this.srcCondition= "/patchy-light-drizzle.png";
          } else if (this.condition == "Light drizzle") {
            this.srcCondition= "/light-drizzle.png";
          } else if (this.condition == "Freezing drizzle") {
            this.srcCondition= "/freezing-drizzle.png";
          } else if (this.condition == "Heavy freezing drizzle") {
            this.srcCondition= "/heavy-freezing-drizzle.png";
          } else if (this.condition == "Patchy light rain") {
            this.srcCondition= "/patchy-light-rain.png";
          } else if (this.condition == "Light rain") {
            this.srcCondition= "/light-rain.png";
          } else if (this.condition == "Moderate rain at times") {
            this.srcCondition= "/moderate-rain-at-times.png";
          } else if (this.condition == "Moderate rain") {
            this.srcCondition= "/moderate-rain.png";
          } else if (this.condition == "Heavy rain at times") {
            this.srcCondition= "/heavy-rain-at-times.png";
          } else if (this.condition == "Clear") {
            this.srcCondition= "/clear.png";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  },
  methods: {
    getWeatherReport() {
      var cityName = this.inputValue;
      if (cityName == "") {
        alert("Please enter a city name");
        return;
      }

      var locationData = {
        location: cityName,
      };

      this.$router.push({
        path: "/weatherdetails",
        query: { locationName: locationData.location },
      });
    },

    getLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          var latitude = position.coords.latitude.toString();
          var longitude = position.coords.longitude.toString();

          var data = {
            latitude: latitude,
            longitude: longitude,
          };

          axios
            .post("/api/sendData", data)
            .then((response) => {
              // Handle the response from the Go backend

              var cityName = response.data.location.name;

              this.inputValue = cityName;
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
  },
};
</script>
