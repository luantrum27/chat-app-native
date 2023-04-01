import React from 'react'
import { View } from 'react-native'
import { Avatar } from 'react-native-paper'
import { AvatarImageSource } from 'react-native-paper/src/components/Avatar/AvatarImage'

export default function AvatarUser({ avatar, isOnline }: { avatar: AvatarImageSource, isOnline: boolean }) {
    return (
        <View style={{ position: 'relative' }}>
            <Avatar.Image size={40} source={avatar} />
            {
                isOnline ? <View style={{ width: 10, height: 10, backgroundColor: '#06D6A0', borderRadius: 20, borderWidth: 1.2, borderColor: '#fff', position: 'absolute', bottom: 0, right: 0 }}></View> : <></>
            }
        </View>
    )
}
