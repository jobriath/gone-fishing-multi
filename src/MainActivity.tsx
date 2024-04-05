import { io } from "socket.io-client"

import { StatusBar } from 'expo-status-bar'
import * as React from "react"
import { useState } from "react"
import { StyleSheet, Text, View, Pressable, Modal } from "react-native"

const socket = io("http://192.168.1.167:3000");  // TODO: Lifecycle
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

type FisherState =
  | "logging-in"
  | "waiting"
  | "reeling";

export function MainActivity() {
  const [ state, setState ] = useState<FisherState>("logging-in");

  const name = "test";
  const image = "sea";
  const handleLogin = async (name: string) => {
    await socket.emit("login", { name });
    setState("waiting");
  };
  const handleTouch = () => {
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={state === "logging-in"}
        onRequestClose={() => handleLogin("anonymous")}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleLogin("named" /* get name */)}>
              <Text style={styles.textStyle}>go fishing</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text>{name}</Text>
      <Text>{image}</Text>
      <Pressable style={styles.touch} onPress={handleTouch}><Text>Button</Text></Pressable>

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

  touch: {
    backgroundColor: "#9999ff",
  },

    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
