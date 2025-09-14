import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton/CustomButton.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';
// import SearchBar from './components/SearchBar/SearchBar.jsx';
import { SearchBar } from '@rneui/themed';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Type Here..." />
      {/* <SearchBar placeholder="Search..." /> */}
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
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
