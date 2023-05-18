import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AvatarUser from "../components/common/AvatarUser";
import Message from "../components/chat/Message";
import { ChatScreenNavigationProp, ChatScreenRouteProp } from "../../App";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectUserProfile } from "../store/userSlice";
import { socket } from "../context/socket/config";
import { IConversation, IMessage } from "../models";
import { getMessages, getConversation } from "../services/conversation.service";
import {
  selectMessages,
  updateListMessage,
  selectConversation,
  updateListConversation,
  updateConversationSelected,
} from "../store/conversationSlice";
import { selectFriend } from "../store/userSlice";
import { createConversation } from "../services/conversation.service";
import { ESocketEvent } from "../models/socket";
interface IMessageInfor {
  messages: IMessage[];
  count: Number;
}
export default function ChatScreen({
  navigation,
  route,
}: {
  navigation: ChatScreenNavigationProp;
  route: ChatScreenRouteProp;
}) {
  const handleBackScreen = () => {
    navigation.goBack();
  };
  const dispatch = useAppDispatch();
  const userProfileStore = useAppSelector(selectUserProfile);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessageInfor>();
  const [conversation, setConversation] = useState<IConversation>();
  const [isMyMessage, setIsMyMessage] = useState(false);
  const { listMessage } = useAppSelector(selectMessages);
  const useProfileStore = useAppSelector(selectUserProfile);
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollTo({
      y: 2000,
      animated: true,
    });
  };

  React.useEffect(() => {
    const data = route.params;
    const getListMessage = async () => {
      const res = await getMessages({ id: data.id });
      setMessages(res);
      dispatch(updateListMessage(res));
    };
    getListMessage();
    setConversation(data);
  }, [route, listMessage]);

  React.useEffect(() => {
    socket.off(ESocketEvent.GET_MESSAGE);
    socket.on(ESocketEvent.GET_MESSAGE, ({ user, message }) => {
      if (message.conversation === conversation?.id) {
        const newMessage = {
          ...message,
          sender: user,
          isLastOne: true,
        };
        if (!messages) return null;
        const newListMessage = pushNewMessage(messages?.messages, newMessage);
        dispatch(updateListMessage(newListMessage));
      }
    });
  }, [listMessage]);

  const handleSendMessage = async () => {
    socket.emit(ESocketEvent.SEND_MESSAGE, {
      userId: userProfileStore?.id,
      conversationId: conversation?.id,
      text: message,
    });
    setMessage("");
    console.log(message);
    
    const data = route.params;
    const getListMessage = async () => {
      const res = await getMessages({ id: data.id });
      setMessages(res);
      dispatch(updateListMessage(res));
    };
    getListMessage();
    scrollToBottom();
  };
  function pushNewMessage(listMessage: IMessage[], newMessage: IMessage) {
    const newListMessage = [...listMessage];

    if (!listMessage.length) {
      newListMessage.push(newMessage);
      return newListMessage;
    }

    const lastListMessage = newListMessage[newListMessage.length - 1];

    const isUpdateOwnMessage =
      lastListMessage.sender.id === newMessage.sender.id;

    if (isUpdateOwnMessage) {
      newListMessage[newListMessage.length - 1] = Object.assign(
        {},
        lastListMessage,
        {
          isLastOne: false,
        }
      );
    }

    newListMessage.push(newMessage);
    return newListMessage;
  }

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View
        style={{
          height: 72,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 32,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: 20,
        }}
      >
        <AntDesign onPress={handleBackScreen} name="left" color={"#93979C"} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <AvatarUser
            avatar={require("../assets/images/avt_1.jpg")}
            isOnline={false}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontWeight: "600", width: 130, color: "#93979C" }}
          >
            {conversation?.title}
          </Text>
        </View>
        <AntDesign name="search1" color={"#93979C"} size={24} />
        <Entypo name="dots-three-horizontal" size={18} color={"#93979C"} />
      </View>
      <ScrollView style={{ height: 300, paddingHorizontal: 16 }} ref={scrollViewRef}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            paddingVertical: 50,
          }}
        >
          {messages?.messages
            .slice()
            .reverse()
            .map(({ id, sender, message, createdAt}: IMessage) => {
              const isMyMessage = sender.id === useProfileStore?.id;
              return (
                <Message key={id} message={message} isMyMessage={isMyMessage} time={createdAt}/>
              );
            })}
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopColor: "#93979C",
        }}
      >
        <TextInput
          value={message}
          onChangeText={(value) => setMessage(value)}
          style={{
            backgroundColor: "#E6EBF5",
            paddingHorizontal: 16,
            paddingVertical: 5,
            borderRadius: 8,
            width: 200,
          }}
          placeholder="Enter Message..."
          placeholderTextColor={"#7A90C0"}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <FontAwesome name="smile-o" size={18} color={"#7269EF"} />
          <Entypo name="attachment" size={18} color={"#7269EF"} />
          <Entypo name="image" size={18} color={"#7269EF"} />
          <Pressable
            onPress={handleSendMessage}
            style={{
              width: 50,
              height: 50,
              borderRadius: 8,
              backgroundColor: "#7269EF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="send" size={18} color={"#fff"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
