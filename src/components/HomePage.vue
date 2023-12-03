<template>
  <div>
    <div class="container">
      <h1 id="title">Weather App</h1>
      <div class="app-image">
        <img src="../assets/rainy-day.png" alt="rainy-day" />
      </div>
      <div class="input-group">
        <input
          type="text"
          id="city"
          placeholder="Enter City Name"
          v-model="inputValue"
        />
        <button id="location" @click="getLocation()">
          <img src="../assets/location.png" alt="Location Icon" />
        </button>
      </div>
      <button id="info" type="button" @click="getWeatherReport()">
        Get Weather Report
      </button>
      <h3 id="weatherData"></h3>
    </div>

    <button id="toggleButton" @click="changeTheme()">
      <div id="image-container">
        <img id="toggleImage" src="../assets/night-mode.png" alt="Moon Icon" />
      </div>
    </button>
  </div>
</template>

<script>
var coordinates = "";

export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    getWeatherReport() {
      this.$router.push("/weatherdetails");
    },
    getLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var latitude = position.coords.latitude.toString();
          var longitude = position.coords.longitude.toString();
          coordinates = latitude + "," + longitude;
          console.log(coordinates);
        });
        console.log(this.inputValue);
        this.inputValue = coordinates;
      }
    },

    changeTheme() {
      var element = document.body;
      element.classList.toggle("night-mode");

      var image = document.getElementById("toggleImage");
      if (image.src.endsWith("night-mode.png")) {
        // If it's night mode image, change it to the day mode image
        image.src = "../assets/day-mode.png";
      } else {
        // If it's day mode image, change it back to the night mode image
        image.src = "../assets/night-mode.png";
      }
    },
  },
};
</script>
