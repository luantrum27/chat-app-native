import { Box, FormControl, Icon, Image, Input, Text, WarningOutlineIcon } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function HomeScreen() {
    return (
        <Box height={'100%'} style={[styles.container]}>
            <Box style={[styles.logoWrapper]}>
                <Image style={[styles.logo]} source={require('../assets/images/logo_app.png')} alt={'logo_app'} />
            </Box>
            <Box>
                <Text style={styles.signInTitle}>Sign in</Text>
                <Text style={styles.signInDesc}>Sign in to continue to Chatvia</Text>
            </Box>
            <Box style={[styles.formSignIn]}>
                <FormControl>
                    <Box>
                        <FormControl.Label style={[styles.labelForm]}>Username</FormControl.Label>
                        <Input
                            InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
                            placeholder='Ex: hoangtheluan@gmail.com' />
                    </Box>
                    <Box>
                        <FormControl.Label style={[styles.labelForm]}>Password</FormControl.Label>
                        <Input placeholder="Enter password" type='password' />
                    </Box>
                </FormControl>

            </Box>
        </Box >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: '#f7f7ff',
        paddingVertical: 48
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

    },
    labelForm: {
        fontWeight: '500',
        marginBottom: 8,
        color: '#495057'
    }
})

export default HomeScreen