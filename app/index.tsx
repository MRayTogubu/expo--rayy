import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Persegi Panjang dengan Teks */}
      <View style={styles.rectangle}>
        <Text style={styles.nameText}>M. RAY TOGUBU</Text>
      </View>

      {/* Bentuk Pil (Kapsul) dengan NIM */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>105841111322</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 50,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue",
  },
  rectangle: {
    width: 250,
    height: 80,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  nameText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  pill: {
    backgroundColor: "#0066cc",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
  },
  pillText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
