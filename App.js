import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.c}>
      <Text style={styles.t}>iOS build test ✅</Text>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  c: { flex: 1, backgroundColor: '#0B0F14', alignItems: 'center', justifyContent: 'center' },
  t: { color: '#22D3EE', fontSize: 20, fontWeight: '700' },
});
