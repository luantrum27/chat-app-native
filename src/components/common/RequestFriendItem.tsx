import React from "react";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";

function RequestFriendItem() {
  return (
    <View style={{ flexDirection: "row", marginBottom: 24 }}>
      <View>
        <Avatar.Image
          size={56}
          source={require("../../assets/images/avatar.jpg")}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text>
          <Text style={{ fontSize: 15, color: "#495057", fontWeight: "600" }}>
            Lê Văn Duy{" "}
          </Text>
          <Text style={{ fontSize: 15, color: "#7a7f9a", fontWeight: "400" }}>
            sent you a friend request.
          </Text>
        </Text>
        <View style={{ flexDirection: "row", marginTop: 12, gap: 8 }}>
          <Button
            textColor="#fff"
            style={{ backgroundColor: "#7269ef" }}
            labelStyle={{ fontWeight: "600" }}
          >
            Confirm
          </Button>
          <Button
            textColor="#495057"
            style={{ backgroundColor: "#e4e6eb" }}
            labelStyle={{ fontWeight: "600" }}
          >
            Delete
          </Button>
        </View>
      </View>
    </View>
  );
}

export default RequestFriendItem;
