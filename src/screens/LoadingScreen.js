import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Loading data...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
