import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const SearchInput = props => {
  const [searchText, setSearchText] = useState('');

  function handleChangeText(data) {
    // update the new location
    setSearchText(data);
  }

  function handleInputSubmit() {
    // send the data to the parent component
    props.handleLocation(searchText);
  }

  return (
    <View style={styles.container}>
      <TextInput
        // value={searchText}
        autoCorrect={false}
        placeholder={props.placeHolder}
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleInputSubmit}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});
