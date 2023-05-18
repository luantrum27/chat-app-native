import { FlatList, StyleSheet, ScrollView } from "react-native";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { usersOnline } from "../../store/users-online";
import Conversation from "../chat/Conversation";
import UserOnline from "../chat/UserOnline";
import { ChatScreenNavigationProp } from "../../../App";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getConversation, getMessages } from "../../services/conversation.service";
import { EFriendStatus, IConversation, IFriendAccept } from "../../models";
import { getListMessageFailed, getListMessageStart, getListMessageSuccess, selectConversation, selectMessages, updateConversationSelected, updateListConversation, updateListMessage } from "../../store/conversationSlice";
import { deleteFriendSelected } from "../../store/userSlice";
import { getFriends } from "../../services/user.service";
import { socket } from "../../context/socket/config";
import { ESocketEvent } from "../../models/socket";

export default function ChatsRoute({
  navigation,
}: {
  navigation: ChatScreenNavigationProp;
}) {
  const { listMessage } = useAppSelector(selectMessages);
  const dispatch = useAppDispatch();
  const [activeConversation, setActiveConversation] = useState('');
  const [clickConversation, setClickConversation] =
    useState<boolean>(false);
  const [changeConversation, setChangeConversation] = useState(false);
  
  useEffect(() => {
    const newListMessage = [...listMessage];
    newListMessage.forEach((message, index) => {
      if (message.sender.id !== newListMessage[index + 1]?.sender.id) {
        newListMessage[index] = Object.assign({}, newListMessage[index], {
          isLastOne: true,
        });
      }
    });
    dispatch(updateListMessage(newListMessage));
  }, [clickConversation]);
  const [listFriend, setListFriend] = useState<
    IFriendAccept[]
  >([]);

  const { listConversation, selectedConversation } =
    useAppSelector(selectConversation);
  useEffect(() => {
    const getListConvertion = async () => {
      const res = await getConversation();
      dispatch(updateListConversation(res.conversations));
    };

    getListConvertion();
  }, [changeConversation]);
  useEffect(() => {
    const getListFriend = async () => {
      try {
        const result = await getFriends({ status: EFriendStatus.ACCEPTED });
        setListFriend(result.friends);
      } catch (err) {
        console.log(err);
      }
    };
    getListFriend();
  }, []);
  useEffect(() => {
    listFriend.forEach((friend, index) => {
      console.log(friend);
      socket.emit('join', { friend })
    })
  }, [listFriend])

  const handleClick = async (conversation: IConversation) => {
    dispatch(updateConversationSelected(conversation));
    setActiveConversation('active');
    dispatch(deleteFriendSelected());
    dispatch(getListMessageStart());
    try {
      const result = await getMessages({ id: conversation.id });
      dispatch(getListMessageSuccess(result.messages));
      dispatch(updateConversationSelected(conversation));
      setClickConversation((prev) => !prev);
    } catch (err) {
      dispatch(getListMessageFailed());
    }
  };

  const onHandleClick = useCallback((conversation: IConversation) => {
    return () => handleClick(conversation);
  }, []);
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
          data={listFriend}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <UserOnline navigation={navigation} key={index} friendRequest={item} />}
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
        {listConversation.map((conversation, index) => (
          <Conversation changeConversation={setChangeConversation} navigation={navigation} key={index} conversation={conversation} />
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


