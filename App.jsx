import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton/CustomButton.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductCard
        name="Card"
        price="12"
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
