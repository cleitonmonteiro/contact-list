import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { connect } from "react-redux";

import { deleteContact } from "../redux/acions";

const ListItem = ({ contact, deleteContact }) => {
  const handleDeleteContact = () => {
    deleteContact(contact.id);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>
      <IconButton
        style={styles.button}
        icon="delete"
        color="#e57373"
        onPress={handleDeleteContact}
      ></IconButton>
    </View>
  );
};

export default connect(null, { deleteContact })(ListItem);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#9e9e9e",
    paddingVertical: 10,
  },
  container: {
    flex: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 16,
  },
  button: {
    flex: 1,
  },
});
