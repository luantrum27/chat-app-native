import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'
import { AvatarImageSource } from 'react-native-paper/src/components/Avatar/AvatarImage';
import AvatarUser from '../common/AvatarUser';
interface IUserOnline {
    name: string;
    avatar: AvatarImageSource
}
export default function UserOnline({ name, avatar }: IUserOnline) {
    return (
        <View style={[styles.userOnlineContainer, { marginTop: 20, marginRight: 10 }]}>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', top: -20 }}>
                <AvatarUser avatar={avatar} isOnline={true} />
                <Text style={{ fontSize: 13, fontWeight: '700', color: '#495057', marginTop: 5 }}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userOnlineContainer: {
        width: 70,
        backgroundColor: '#E6EBF5',
        borderRadius: 10
    }
})
