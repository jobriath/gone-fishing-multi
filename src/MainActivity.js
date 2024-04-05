import { io } from "socket.io-client"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React } from 'react-native';

const socket = io("http://192.168.1.167:3000");  // TODO: Lifecycle
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

export function MainActivity() {

  socket.emit("ping", "arg");
  console.log("pinged");

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
