import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';
import {fetchData} from './utils/api';

const App = () => {
  const [location, setLocation] = useState('Moscow');

  // update the data received according the location
  const [data, setData] = useState({});

  const handleLocationChange = location => {
    // get the location from searchInput
    setLocation(location);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const apiData = await fetchData(location);
        setData(apiData);
      } catch (error) {
        // handle error;
        console.log(error);
      }
    };

    getData();
  }, [location]);

  console.log(data);

  // coverting the kelvin to celsuis
  function convertKelvinToCel(n) {
    return Math.round(n - 273.15);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>
            {data.weather[0].description}
          </Text>
          <Text style={[styles.largeText, styles.textStyle]}>
            {convertKelvinToCel(data.main.temp)}°c
          </Text>
          <SearchInput
            placeHolder="Search any city"
            handleLocation={handleLocationChange}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
