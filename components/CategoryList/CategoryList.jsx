import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const CategoryList = ({ categories }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.category}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 20,
    margin: 8,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CategoryList;
