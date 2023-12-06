<template>
  <div>
    <div class="container">
      <h1 id="title">Weather App</h1>
      <div class="app-image">
        <img src="/rainy-day.png" alt="rainy-day" />
      </div>
      <div class="input-group">
        <input
          type="text"
          id="city"
          placeholder="Enter City Name"
          v-model="inputValue"
        />
        <button id="location" @click="getLocation()">
          <img src="/location.png" alt="Location Icon" />
        </button>
      </div>
      <button id="info" type="button" @click="getWeatherReport()">
        Get Weather Report
      </button>
      <h3 id="weatherData"></h3>
    </div>

    <button id="toggleButton" @click="changeTheme()">
      <div id="image-container">
        <img id="toggleImage" src="/night-mode.png" alt="Moon Icon" />
      </div>
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      inputValue: "",
    };
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
        console.log("Geolocation is not supported by your browser.");
      }
    },

    changeTheme() {
      var element = document.body;
      element.classList.toggle("night-mode");

      var image = document.getElementById("toggleImage");
      if (image.src.endsWith("night-mode.png")) {
        image.src = "src/assets/day-mode.png";
      } else {
        image.src = "src/assets/night-mode.png";
      }
    },
  },
};
</script>
