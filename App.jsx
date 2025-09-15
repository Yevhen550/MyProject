import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton/CustomButton.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import SwitchComponent from './components/SearchBar/SearchBar.jsx';
import Header from './components/Header/Header.jsx';
import alertMessage from './helpers/alert.js';
import products from './Data/products.js';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Coffee" logo="" />
      <SwitchComponent />

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
