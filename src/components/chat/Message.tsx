import React from "react";
import { View, Text } from "react-native";
import AvatarUser from "../common/AvatarUser";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

interface IProps {
  message: string;
  isMyMessage: boolean;
}

function Message({ message, isMyMessage }: IProps) {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 15,
        },
        isMyMessage && {
          justifyContent: "flex-start",
          flexDirection: "row-reverse",
        },
      ]}
    >
      <AvatarUser
        avatar={require("../../assets/images/avt_1.jpg")}
        isOnline={false}
      />
      <View>
        <View
          style={[
            { display: "flex", flexDirection: "row", alignItems: "center" },
            isMyMessage && { flexDirection: "row-reverse" },
          ]}
        >
          <View
            style={{
              maxWidth: 250,
              paddingHorizontal: 16,
              paddingVertical: 20,
              backgroundColor: "#7269EF",
              borderRadius: 8,
              position: "relative",
            }}
          >
            <Text style={{ color: "#fff" }}>{message}</Text>
          </View>
          <Entypo name="dots-three-vertical" size={18} color={"#333"} />
        </View>
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: 5,
            },
            isMyMessage && {},
          ]}
        >
          <AntDesign name="clockcircleo" color={"#333"} />
          <Text style={{ color: "#333" }}>10:31</Text>
        </View>
      </View>
    </View>
  );
}

export default Message;
