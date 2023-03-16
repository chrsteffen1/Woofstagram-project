import { StyleSheet, ScrollView } from 'react-native';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SignUp></SignUp>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  },
});
