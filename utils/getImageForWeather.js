/* eslint-disable global-require */

const getImageForWeather = weather => {
  switch (weather) {
    case 'Clear':
      return require('../assets/clear.png');
    case 'haze':
      return require('../assets/haze.jpg');
    case 'overcast clouds':
      return require('../assets/heavy-cloud.png');
    case 'light rain':
      return require('../assets/light-cloud.png');
    case 'heavy rain':
      return require('../assets/heavy-rain.png');
    case 'scattered clouds':
      return require('../assets/light-rain.png');
    case 'moderate rain':
      return require('../assets/showers.png');
    case 'Sleet':
      return require('../assets/sleet.png');
    case 'Snow':
      return require('../assets/snow.png');
    case 'thunderstorm':
      return require('../assets/thunder.png');
    default:
      return require('../assets/clear.png');
  }
};

export default getImageForWeather;

// const images = {
//   Clear: require('../assets/clear.png'),
//   Hail: require('../assets/hail.png'),
//   'Heavy Cloud': require('../assets/heavy-cloud.png'),
//   'Light Cloud': require('../assets/light-cloud.png'),
//   'Heavy Rain': require('../assets/heavy-rain.png'),
//   'Light Rain': require('../assets/light-rain.png'),
//   Showers: require('../assets/showers.png'),
//   Sleet: require('../assets/sleet.png'),
//   Snow: require('../assets/snow.png'),
//   Thunder: require('../assets/thunder.png'),
// };

// export default weather => images[weather];
