import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, FlatList, Pressable } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AvatarUser from "../components/common/AvatarUser";
import Message from "../components/chat/Message";
import { ChatScreenNavigationProp } from "../../App";
import { messages } from "../store/messages";
export default function ChatScreen({
  navigation,
}: {
  navigation: ChatScreenNavigationProp;
}) {
  const handleBackScreen = () => {
    navigation.goBack()
  }
  const [message, setMessage] = useState('')
  const handleSendMessage = () => {
    messages.push({
      message,
      isMyMessage: true
    })
  }
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View style={{ height: 72, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 32, shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, }}>
        <AntDesign onPress={handleBackScreen} name="left" color={'#93979C'} />
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <AvatarUser avatar={require("../assets/images/avt_1.jpg")} isOnline={false} />
          <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: '600', width: 130, color: '#93979C' }}>Hoang The Luan</Text>
        </View>
        <AntDesign name="search1" color={'#93979C'} size={24} />
        <Entypo name="dots-three-horizontal" size={18} color={'#93979C'} />
      </View>
      <ScrollView style={{ height: 300, paddingHorizontal: 16 }}>
        <View style={{ display: "flex", flexDirection: 'column', gap: 10, paddingVertical: 50 }}>
          {
            messages.map((item, index) => (
              <Message key={index} {...item} />
            ))
          }
        </View>
      </ScrollView>
      <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10, borderTopColor: '#93979C' }}>
        <TextInput defaultValue="" value={message} onChangeText={value => setMessage(value)} style={{ backgroundColor: '#E6EBF5', paddingHorizontal: 16, paddingVertical: 5, borderRadius: 8, width: 200 }} placeholder="Enter Message..." placeholderTextColor={'#7A90C0'} />
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <FontAwesome name="smile-o" size={18} color={'#7269EF'} />
          <Entypo name="attachment" size={18} color={'#7269EF'} />
          <Entypo name="image" size={18} color={'#7269EF'} />
          <Pressable onPress={handleSendMessage} style={{ width: 50, height: 50, borderRadius: 8, backgroundColor: '#7269EF', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name="send" size={18} color={'#fff'} />
          </Pressable>
        </View>
      </View>
    </View >
  )
}
