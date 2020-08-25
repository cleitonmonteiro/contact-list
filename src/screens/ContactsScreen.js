import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FAB } from "react-native-paper";
import { connect } from "react-redux";

import ListItem from "../components/ListItem";
import { getContacts } from "../redux/selectors";
import { addContact, deleteContact } from "../redux/acions";

const ContactsScreen = ({ navigation, contacts }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ListItem contact={item} />}
        keyExtractor={(item) => `contact-${item.id}`}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate("NewContact");
        }}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const contacts = getContacts(state);
  return { contacts };
};

export default connect(mapStateToProps, {
  addContact,
  deleteContact,
})(ContactsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
