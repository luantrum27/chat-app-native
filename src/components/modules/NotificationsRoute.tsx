import React from "react";
import { Avatar, Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import RequestFriendItem from "../common/RequestFriendItem";
import { getFriends } from "../../services/user.service";
import { EFriendStatus, IFriendRequest, IUserItemResult } from "../../models";
import { ESocketEvent } from "../../models/socket";
import { socket } from "../../context/socket/config";

export default function ContactsRoute() {
  const [active, setActive] = React.useState(true);

  const handleBtnAllActive = React.useCallback(() => {
    setActive(true);
  }, [active]);

  const handleBtnUnreadActive = React.useCallback(() => {
    setActive(false);
  }, [active]);

  const [newFriendRequest, setNewFriendRequest] =
    React.useState<IUserItemResult>();

  const [listFriendRequest, setListFriendRequest] = React.useState<
    IFriendRequest[]
  >([]);
  React.useEffect(() => {
    const getListRequestFriend = async () => {
      try {
        const result = await getFriends({ status: EFriendStatus.REQUESTED });
        setListFriendRequest(result.friends);
      } catch (err) {
        console.log(err);
      }
    };
    getListRequestFriend();
  }, [newFriendRequest]);

  React.useEffect(() => {
    socket.on(ESocketEvent.GET_FRIEND_REQUEST, ({ user }) => {
      setNewFriendRequest(user);
    });
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={[styles.heading]}>
        <Text style={[styles.title]}>Notifications</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 12, paddingLeft: 24 }}>
        <Button
          textColor={active ? "#7269ef" : "#7a7f9a"}
          labelStyle={{ fontWeight: "600", fontSize: 15 }}
          style={[
            { paddingHorizontal: 12, marginRight: 8 },
            active && { backgroundColor: "rgb(232, 222, 248)" },
          ]}
          onPress={handleBtnAllActive}
        >
          All
        </Button>
        <Button
          labelStyle={{ fontWeight: "600", fontSize: 15 }}
          textColor={!active ? "#7269ef" : "#7a7f9a"}
          style={[
            { paddingHorizontal: 12 },
            !active && { backgroundColor: "rgb(232, 222, 248)" },
          ]}
          onPress={handleBtnUnreadActive}
        >
          Unread
        </Button>
      </View>
      <Text
        style={{
          marginTop: 16,
          paddingLeft: 24,
          fontSize: 16,
          fontWeight: "600",
          color: "rgb(73, 80, 87)",
        }}
      >
        Earlier
      </Text>
      <View style={{ paddingHorizontal: 24, marginTop: 12 }}>
        {
          listFriendRequest.map((friendRequest, index) => (
            <RequestFriendItem {...friendRequest} key={index} />
          ))
        }
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
});
