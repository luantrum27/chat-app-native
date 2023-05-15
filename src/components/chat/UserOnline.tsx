import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import AvatarUser from '../common/AvatarUser';
import { IFriendAccept } from '../../models';
import { useAppSelector } from '../../hooks';
import { selectUserProfile } from '../../store/userSlice';
import { ChatScreenNavigationProp } from '../../../App';
import apiRequest from '../../api/apiRequest';
import { createConversation } from '../../services/conversation.service';

interface IProps {
    navigation: ChatScreenNavigationProp;
    friendRequest: IFriendAccept;
}
export default function UserOnline(props: IProps) {
    const [username, setUsername] = React.useState('');
    const [yourId, setYourId] = React.useState('');
    const userProfileStore = useAppSelector(selectUserProfile);
    React.useEffect(() => {
        const userTarget = props.friendRequest.userTarget;
        const owner = props.friendRequest.owner;
        const name = userProfileStore?.id === userTarget?.id ? owner.username : userTarget?.username;
        setYourId(userProfileStore?.id === owner?.id ? userTarget.id : owner?.id);
        setUsername(name);
    }, [props.friendRequest, userProfileStore]);

    return (
        <Pressable onPress={async () => {

            const coversation = await createConversation({
                title: username,
                members: [yourId, userProfileStore?.id || '']
            });

            props.navigation.navigate('ChatScreen', coversation)
        }}
            style={[styles.userOnlineContainer, { marginTop: 20, marginRight: 10 }]}>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', top: -20 }}>
                <AvatarUser avatar={require('../../assets/images/avt_1.jpg')} isOnline={true} />
                <Text style={{ fontSize: 13, fontWeight: '700', color: '#495057', marginTop: 5 }}>{username}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    userOnlineContainer: {
        width: 70,
        backgroundColor: '#E6EBF5',
        borderRadius: 10
    }
})
