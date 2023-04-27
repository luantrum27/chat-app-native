import React from "react";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { EFriendStatus, IFriendStatusState, IUserItemResult } from "../../models";
import { ESocketEvent } from "../../models/socket";
import { selectUserProfile } from "../../store/userSlice";
import { useAppSelector } from "../../hooks";
import { socket } from "../../context/socket/config";
import { cancelFriendRequest, sendFriendRequest } from "../../services/user.service";
import debounce from "../../utils/debounce";

function UserItem(user: IUserItemResult) {
  const [isCancel, setIsCancel] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [friendStatus, setFriendStatus] =
    React.useState<IFriendStatusState | null>(null);
  const userProfileStore = useAppSelector(selectUserProfile);

  const handleAddFriend = async (id: string) => {
    setIsLoading(true);

    try {
      const result = await sendFriendRequest(id);
      setFriendStatus(result);
      setIsLoading(false);
      setIsCancel(false);
      socket.emit(ESocketEvent.FRIEND_REQUEST, {
        ownerId: userProfileStore?.id,
        userTargetId: id,
      });
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleCancelRequest = async (id: string) => {
    setIsLoading(true);

    try {
      await cancelFriendRequest(id);
      setFriendStatus(null);
      setIsLoading(false);
      setIsCancel(true);
      socket.emit(ESocketEvent.FRIEND_REQUEST, {
        ownerId: userProfileStore?.id,
        userTargetId: id,
      });
    } catch (err) {
      setIsLoading(false);
    }
  };

  const debounceAddRequest = React.useMemo(() => {
    return debounce(handleAddFriend, 500);
  }, []);

  const debounceCancelRequest = React.useMemo(() => {
    return debounce(handleCancelRequest, 500);
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
        <View>
          <Text style={{ fontSize: 15, color: "#495057", fontWeight: "600" }}>
            {user.username}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#7a7f9a",
              fontWeight: "400",
              marginTop: 2,
            }}
          >
            {user.location}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 8, gap: 8 }}>
          {friendStatus?.status === EFriendStatus.REQUESTED ||
            (user.friendStatus?.status === EFriendStatus.REQUESTED && !isCancel) ? (
            <Button
              textColor="#495057"
              style={{ backgroundColor: "#e4e6eb" }}
              labelStyle={{ fontWeight: "600" }}
              onPress={() => debounceCancelRequest(user.id)}
            >
              Delete
            </Button>
          ) : user.friendStatus?.status !== EFriendStatus.ACCEPTED ? (
            <Button
              textColor="#fff"
              style={{ backgroundColor: "#7269ef" }}
              labelStyle={{ fontWeight: "600" }}
              onPress={() => debounceAddRequest(user.id)}
            >
              Add friend
            </Button>
          ) : null}

        </View>
      </View>
    </View>
  );
}

export default UserItem;
