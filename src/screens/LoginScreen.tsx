import React, { useState } from 'react'
import { Pressable } from 'react-native';
import { StyleSheet, View, Image, Text } from 'react-native'
import { TextInput, Checkbox, Button } from 'react-native-paper'
import { ECheckBox } from '../interfaces/ECheckBox'


function HomeScreen() {
    const [icon, setIcon] = useState('eye-off');
    const [hidePassword, setHidePassword] = useState(true);
    const [status, setStatus] = useState(ECheckBox.UNCHECKED)
    const changeIcon = () => {
        icon !== 'eye-off'
            ? (setIcon('eye-off'), setHidePassword(false))
            : (setIcon('eye'), setHidePassword(true));
    };
    const changeStatus = () => {
        status !== ECheckBox.UNCHECKED
            ? setStatus(ECheckBox.UNCHECKED)
            : setStatus(ECheckBox.CHECKED);
    };
    return (
        <View style={[styles.container]}>
            <View style={[styles.logoWrapper]}>
                <Image style={[styles.logo]} source={require('../assets/images/logo_app.png')} alt={'logo_app'} />
            </View>
            <View>
                <Text style={styles.signInTitle}>Sign in</Text>
                <Text style={styles.signInDesc}>Sign in to continue to Chatvia</Text>
            </View>
            <View style={[styles.formSignIn]}>
                <View>
                    <View style={styles.formField}>
                        <Text style={[styles.labelForm]}>Email</Text>
                        <TextInput style={[styles.inputForm]}
                            placeholder='Enter email'
                            placeholderTextColor={'#7a7f9a'}
                            outlineColor='#e6ebf5'
                            activeOutlineColor='#e6ebf5'
                            mode='outlined'
                            left={<TextInput.Icon icon='account' iconColor='#7a7f9a' />}
                        />
                    </View>
                    <View style={styles.formField}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.labelForm]}>Password</Text>
                            <Text style={{ color: '#7a7f9a', fontSize: 13 }}>Forgot password?</Text>
                        </View>
                        <TextInput
                            secureTextEntry
                            style={[styles.inputForm]}
                            placeholder='Enter password'
                            placeholderTextColor={'#7a7f9a'}
                            outlineColor='#e6ebf5'
                            activeOutlineColor='#e6ebf5'
                            mode='outlined'
                            left={<TextInput.Icon icon='lock' iconColor='#7a7f9a' />}
                            right={<TextInput.Icon onPress={() => changeIcon()} icon={icon} iconColor='#7a7f9a' />}
                        />
                    </View>
                    <View style={[styles.formField]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox.Item
                                color="#7269ef"
                                status={status}
                                style={{ paddingHorizontal: 0, paddingVertical: 0, marginLeft: -8 }}
                                position='leading'
                                label="Remember password"
                                labelVariant='labelLarge'

                                labelStyle={{ marginLeft: -4 }}
                                uncheckedColor="#5b54bf"
                                onPress={() => changeStatus()}
                            />
                        </View>
                    </View>
                    <Button textColor='#fff' style={[styles.btnSignIn]}>Sign in</Button>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 48, marginBottom: 16 }}>
                <Text style={{ color: '#7a7f9a', fontSize: 15 }}>Don't have an account?</Text>
                <Pressable style={{ marginLeft: 2 }}><Text style={{ color: '#7269ef', fontSize: 15 }}>Signup now</Text></Pressable>
            </View>
            <Text style={{ textAlign: 'center', color: '#7a7f9a', fontSize: 15 }}>@ 2023 Chatvia. Crafted with 💓 by DreamTech</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: '#f7f7ff',
        paddingVertical: 48,
        flex: 1
    },
    logoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        width: 123,
        height: 30
    },
    titleWrapper: {
        textAlign: 'center'

    },
    signInTitle: {
        color: '#495057',
        fontWeight: "600",
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 48,
        marginBottom: 8
    },
    signInDesc: {
        color: '#7a7f9a',
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 24
    },
    formSignIn: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 40
    },
    inputForm: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderColor: '#e6ebf5',
    },
    labelForm: {
        fontWeight: '500',
        color: '#495057',
        fontSize: 15
    },
    formField: {
        marginBottom: 16
    },
    checkbox: {
        width: 15,
        height: 15
    },
    btnSignIn: {
        backgroundColor: '#7269ef',
        marginTop: 10,
        color: '#fff'
    }
})

export default HomeScreen