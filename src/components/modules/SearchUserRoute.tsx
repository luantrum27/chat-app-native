import React from "react";
import { Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import UserItem from "../common/UserItem";

export default function SearchUserRoute() {
  const [active, setActive] = React.useState(true);

  return (
    <View style={[styles.container]}>
      <View style={[styles.heading]}>
        <Text style={[styles.title]}>Search User</Text>
      </View>
      <View style={{ paddingHorizontal: 24, marginBottom: 12 }}>
        <TextInput
          style={[styles.inputSearch, { marginTop: 20 }]}
          placeholder="Search messages or users"
          placeholderTextColor={"#7a7f9a"}
          outlineColor="#e6ebf5"
          activeOutlineColor="#e6ebf5"
          mode="outlined"
          left={<TextInput.Icon icon="magnify" iconColor="#7a7f9a" />}
        />
      </View>
      <View style={{ paddingHorizontal: 24, marginTop: 12 }}>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f7fb",
    height: "100%",
  },
  heading: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flexDirection: "row",
  },
  title: {
    color: "#495057",
    fontWeight: "600",
    fontSize: 21,
  },
  inputSearch: {
    borderRadius: 4,
    backgroundColor: "#E6EBF5",
  },
});
