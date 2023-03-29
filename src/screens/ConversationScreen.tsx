import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Avatar, Text, TextInput } from 'react-native-paper'

export default function ConversationScreen() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>Chats</Text>
            <TextInput style={[styles.inputSearch, { marginTop: 20 }]}
                placeholder='Search messages or users'
                placeholderTextColor={'#7a7f9a'}
                outlineColor='#e6ebf5'
                activeOutlineColor='#e6ebf5'
                mode='outlined'
                left={<TextInput.Icon icon='magnify' iconColor='#7a7f9a' />}
            />
            <View style={[styles.userOnlineContainer, { marginTop: 20 }]}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', top: -18 }}>
                    <View style={{ position: 'relative' }}>
                        <Avatar.Image size={36} source={require('../assets/images/avt_1.jpg')} />
                        <View style={{ width: 10, height: 10, backgroundColor: '#06D6A0', borderRadius: 20, borderWidth: 1.2, borderColor: '#fff', position: 'absolute', bottom: 0, right: 0 }}></View>
                    </View>
                    <Text style={{ fontSize: 13, fontWeight: '700', color: '#495057', marginTop: 5 }}>Patrick</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        flex: 1,
        backgroundColor: '#F5F7FB'
    },
    inputSearch: {
        borderRadius: 4,
        backgroundColor: '#E6EBF5'
    },
    title: {
        color: '#495057',
        fontWeight: '700',
        fontSize: 24
    },
    userOnlineContainer: {
        width: 70,
        height: 50,
        backgroundColor: '#E6EBF5',
        borderRadius: 10
    }
})
