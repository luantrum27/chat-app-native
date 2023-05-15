import React from "react";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { IFriendRequest } from "../../models";
import { useAppSelector } from "../../hooks";
import { selectUserProfile } from "../../store/userSlice";
import { ESocketEvent } from "../../models/socket";
import { socket } from "../../context/socket/config";
import { acceptRequestFriend, cancelFriendRequest } from "../../services/user.service";
import debounce from "../../utils/debounce";

function RequestFriendItem({ owner }: IFriendRequest) {
  const [isCancelOrAccept, setIsCancelOrAccept] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const userProfileStore = useAppSelector(selectUserProfile);

  const setStateAndEmitEventSocket = () => {
    setIsLoading(false);
    setIsCancelOrAccept(true);
    socket.emit(ESocketEvent.CANCEL_OR_ACCEPT_FRIEND_REQUEST, {
      userId: userProfileStore?.id,
    });


  };

  const handleCancelRequest = async (id: string) => {
    setIsLoading(true);
    try {
      await cancelFriendRequest(id);
      setStateAndEmitEventSocket();
      console.log('clicked!!!');

    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleAcceptRequest = async (id: string) => {
    setIsLoading(true);
    try {
      await acceptRequestFriend(id);
      setStateAndEmitEventSocket();
      console.log('clicked!!!');
    } catch (err) {
      setIsLoading(false);
    }
  };

  const debounceCancelRequest = React.useMemo(() => {
    return debounce(handleCancelRequest, 500);
  }, []);

  const debounceAcceptRequest = React.useMemo(() => {
    return debounce(handleAcceptRequest, 500);
  }, []);
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
            {owner.username}{" "}
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
            onPress={() => debounceAcceptRequest(owner.id)}
          >
            Confirm
          </Button>
          <Button
            textColor="#495057"
            style={{ backgroundColor: "#e4e6eb" }}
            labelStyle={{ fontWeight: "600" }}
            onPress={() => debounceCancelRequest(owner.id)}
          >
            Delete
          </Button>
        </View>
      </View>
    </View>
  );
}

export default RequestFriendItem;
