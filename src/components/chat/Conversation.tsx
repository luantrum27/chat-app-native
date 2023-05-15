import React from "react";
import { View, Pressable } from "react-native";
import { Text } from "react-native-paper";
import AvatarUser from "../common/AvatarUser";
import { ChatScreenNavigationProp } from "../../../App";
import { IConversation } from "../../models";
interface IProps {
  navigation: ChatScreenNavigationProp;
  conversation: IConversation;
}
export default function Conversation(props: IProps) {
  return (
    <Pressable
      onPress={() => props.navigation.navigate("ChatScreen", props.conversation)}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 35,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AvatarUser
          avatar={require("../../assets/images/avt_1.jpg")}
          isOnline={true}
        />
        <View style={{ marginLeft: 15 }}>
          <Text
            style={{ fontWeight: "700", color: "#495057", marginBottom: 5 }}
          >
            {props.conversation.title}
          </Text>
          <Text style={{ color: "#7a7f9a" }}>okey sure 😅📢</Text>
        </View>
      </View>
      <View>
        <Text style={{ color: "#7a7f9a" }}>02:50</Text>
      </View>
    </Pressable>
  );
}
