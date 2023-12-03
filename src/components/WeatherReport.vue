<template>

  <div class="weather-container">
    <label class="toggle">
      <input class="toggle-input" type="checkbox" />
      <span class="toggle-label" data-off="°F" data-on="°C"></span>
      <span class="toggle-handle"></span>
    </label>

    <div id="currentDate">
      <h1 id="date"></h1>
    </div>

    <div id="locationContainer" class="inline-location">
      <h1 id="weather-location">Location</h1>
    </div>

    <div id="weatherContainer">
      <h1 id="temperature" class="inline"></h1>
      <h1 id="divide-line" class="inline">|</h1>
      <h1 id="condition" class="inline"></h1>
      <img alt="condition-logo" class="condition-image" />
    </div>

    <div class="additional-info">
      <div class="feels-like">
        <img src="../assets/feels-like.png" alt="feels-like" />
        <div class="feels-like-text">
          <span id="feelsLikeTemp"></span>
          <br />
          <span class="feelsLikeText">Feels Like</span>
        </div>
      </div>

      <div class="humidity">
        <img src="../assets/humidity.png" alt="humidity" />
        <div class="humidity-text">
          <span id="humidity"></span>
          <br />
          <span class="humidityText">Humidity</span>
        </div>
      </div>

      <div class="pressure">
        <img src="../assets/pressure.png" alt="pressure" />
        <div class="pressure-text">
          <span id="pressure"></span>
          <br />
          <span class="pressureText">Pressure</span>
        </div>
      </div>

      <div class="wind-speed">
        <img src="../assets/wind-speed.png" alt="wind-speed" />
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
export default {};
</script>
