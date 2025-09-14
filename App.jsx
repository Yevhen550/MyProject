import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton/CustomButton.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import SwitchComponent from './components/SearchBar/SearchBar.jsx';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SwitchComponent />
      <ProductCard
        name="Капучино"
        price="12.00"
        imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        onPress={() => {}}
      />
      <CustomButton title="Add more" onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
  },
  inputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 40,
  },
});

export default App;
