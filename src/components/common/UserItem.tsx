import React from "react";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";

function UserItem() {
  return (
    <View style={{ flexDirection: "row", marginBottom: 24 }}>
      <View>
        <Avatar.Image
          size={56}
          source={require("../../assets/images/avatar.jpg")}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 16 }}>
        <View>
          <Text style={{ fontSize: 15, color: "#495057", fontWeight: "600" }}>
            Lê Văn Duy{" "}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#7a7f9a",
              fontWeight: "400",
              marginTop: 2,
            }}
          >
            Da Nang, Viet Nam
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 8, gap: 8 }}>
          <Button
            textColor="#fff"
            style={{ backgroundColor: "#7269ef" }}
            labelStyle={{ fontWeight: "600" }}
          >
            Add friend
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

export default UserItem;
