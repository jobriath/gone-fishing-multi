import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function MainActivity() {
  return (
    <View style={styles.container}>
      <Text>Open up App.jss to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f33',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
