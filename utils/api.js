import axios from 'axios';

export const fetchData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=b8562fadbb5ef059b34ee6c139107c29`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const fetchLocationId = async city => {
//   const response = await fetch(
//     `https://www.metaweather.com/api/location/search/?query=${city}`,
//   );
//   const locations = await response.json();
//   return locations[0].woeid;
// };

// export const fetchWeather = async woeid => {
//   const response = await fetch(
//     `https://www.metaweather.com/api/location/${woeid}/`,
//   );
//   const { title, consolidated_weather } = await response.json();
//   const { weather_state_name, the_temp } = consolidated_weather[0];

//   return {
//     location: title,
//     weather: weather_state_name,
//     temperature: the_temp,
//   };
// };
