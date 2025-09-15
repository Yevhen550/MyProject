import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton/CustomButton.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import SearchBarComponent from './components/SearchBar/SearchBar.jsx';
import Header from './components/Header/Header.jsx';
import alertMessage from './helpers/alert.js';
import products from './Data/products.js';
import categories from './Data/categories.js';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import { useState } from 'react';

const App = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleCategoryPress = categoryName => {
    setActiveCategory(categoryName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Coffee store ☕️" logo="" />
      <SearchBarComponent />
      <CategoryList
        categories={categories}
        activeCategory={activeCategory}
        onCategoryPress={handleCategoryPress}
      />

      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Add more"
          onPress={() => {
            alertMessage();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e2d0',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
});

export default App;
