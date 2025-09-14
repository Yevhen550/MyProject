import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 10,
    margin: 16,
    width: width * 0.9,
    alignSelf: 'center',
  },
  input: {
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
    // backgroundColor: Colors.secondary,
  },
});

export default SearchBar;
