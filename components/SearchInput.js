import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const SearchInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        placeholder={props.placeHolder}
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
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
