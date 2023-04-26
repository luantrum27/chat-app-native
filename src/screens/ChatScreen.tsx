import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, FlatList } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AvatarUser from "../components/common/AvatarUser";
import Message from "../components/chat/Message";
import { ChatScreenNavigationProp } from "../../App";
export default function ChatScreen({
  navigation,
}: {
  navigation: ChatScreenNavigationProp;
}) {
  const handleBackScreen = () => {
    navigation.goBack()
  }
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View style={{ height: '72px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '32px', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, }}>
        <AntDesign onPress={handleBackScreen} name="left" color={'#93979C'} />
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <AvatarUser avatar={require("../assets/images/avt_1.jpg")} isOnline={false} />
          <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: '600', width: '130px', color: '#93979C' }}>Hoang The Luan</Text>
        </View>
        <AntDesign name="search1" color={'#93979C'} size={24} />
        <Entypo name="dots-three-horizontal" size={18} color={'#93979C'} />
      </View>
      <ScrollView style={{ height: '300px', padding: '16px' }}>
        <View style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
          {
            [true, false, true, false, true, false, true, false, true, false, true, false, true].map((item, index) => (
              <Message key={index} message="Hello" isMyMessage={item} />
            ))
          }
        </View>
      </ScrollView>
      <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '10px', paddingVertical: '10px', borderTopWidth: 1, borderTopColor: '#93979C' }}>
        <TextInput style={{ backgroundColor: '#E6EBF5', paddingHorizontal: '16px', paddingVertical: '16px', borderRadius: 8 }} placeholder="Enter Message..." placeholderTextColor={'#7A90C0'} />
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <FontAwesome name="smile-o" size={18} color={'#7269EF'} />
          <Entypo name="attachment" size={18} color={'#7269EF'} />
          <Entypo name="image" size={18} color={'#7269EF'} />
          <View style={{ width: '50px', height: '50px', borderRadius: 8, backgroundColor: '#7269EF', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name="send" size={18} color={'#fff'} />
          </View>
        </View>
      </View>
    </View >
  )
}
