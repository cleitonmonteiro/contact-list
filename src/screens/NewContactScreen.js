import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

import SizedBox from "../components/SizedBox";
import { connect } from "react-redux";

import { addContact } from "../redux/acions";

const NewContactScreen = ({ navigation, addContact }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddContact = () => {
    if (name != "" && phoneNumber != "") {
      addContact(name, phoneNumber);
      navigation.pop();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <SizedBox height={10} />
      <TextInput
        mode="outlined"
        label="Phone"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <SizedBox height={10} />
      <Button icon="content-save" mode="contained" onPress={handleAddContact}>
        Save
      </Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default connect(null, { addContact })(NewContactScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "2%",
  },
});
