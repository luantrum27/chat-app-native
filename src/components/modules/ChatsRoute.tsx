import { FlatList, StyleSheet, ScrollView } from "react-native";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { usersOnline } from "../../store";
import Conversation from "../chat/Conversation";
import UserOnline from "../chat/UserOnline";
import { ChatScreenNavigationProp } from "../../../App";

export default function ChatsRoute({
  navigation,
}: {
  navigation: ChatScreenNavigationProp;
}) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Chats</Text>
      <TextInput
        style={[styles.inputSearch, { marginTop: 20 }]}
        placeholder="Search messages or users"
        placeholderTextColor={"#7a7f9a"}
        outlineColor="#e6ebf5"
        activeOutlineColor="#e6ebf5"
        mode="outlined"
        left={<TextInput.Icon icon="magnify" iconColor="#7a7f9a" />}
      />
      <ScrollView>
        <FlatList
          style={{ marginTop: 20, flexGrow: 0 }}
          horizontal
          data={usersOnline}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <UserOnline key={index} {...item} />}
        />
        <Text
          style={{
            color: "#495057",
            fontSize: 18,
            fontWeight: "700",
            marginTop: 18,
            marginBottom: 20,
          }}
        >
          Recent
        </Text>

        {usersOnline.map((user, index) => (
          <Conversation navigation={navigation} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  inputSearch: {
    borderRadius: 4,
    backgroundColor: "#E6EBF5",
  },
  title: {
    color: "#495057",
    fontWeight: "700",
    fontSize: 24,
  },
});
