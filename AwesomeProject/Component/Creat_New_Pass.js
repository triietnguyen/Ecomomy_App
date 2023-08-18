import { StyleSheet, Image, Text, TouchableOpacity, View, TextInput, SafeAreaView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Verification_Code() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [checkValidConfirmPass, setCheckValidConfirmPass] = useState(true)


    const handleCheckConfirmPass = (text) => {
        setConfirmPassword(text)
        if (text === password) {
            setCheckValidConfirmPass(true);
        }
        else {
            setCheckValidConfirmPass(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={{ flex: 1, backgroundColor: '#141416' }}>
                    <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 15 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Creat new password</Text>
                        <Text style={{ color: 'grey' }}>Your new password must be different
                            from previously used password</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {/* Password */}
                        <View style={styles.wrapI_T}>
                            <TextInput value={password} onChangeText={password => setPassword(password)} placeholder={'Password'} placeholderTextColor={'grey'} secureTextEntry={true} style={styles.txt_ip}></TextInput>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text></Text>
                        </View>
                        <View style={styles.wrapI_T}>
                            <TextInput value={confirmPassword} onChangeText={confirmPassword => handleCheckConfirmPass(confirmPassword)} placeholder={'Confirm Password'} placeholderTextColor={'grey'} secureTextEntry={true} style={styles.txt_ip}></TextInput>
                        </View>
                        {!checkValidConfirmPass ? (
                            <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 220, marginTop: 10 }}> Pass not compare</Text>
                        ) : (
                            <Text></Text>
                        )}
                    </View>

                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { Sign_up() }} style={styles.btn_sign_up}>
                            <Text style={{ color: '#333', fontSize: 20, fontWeight: 'bold' }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    wrapI_T: {
        marginTop: 10,
        borderBottomColor: '#3B3C41',
        borderBottomWidth: 1,
        width: '90%',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt_ip: {
        color: 'white',
        height: '100%',
        width: '90%',
        paddingRight: 40,
        fontSize: 25
    },
    btn_sign_up: {
        width: '40%',
        height: '20%',
        borderColor: '#37D9FE',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_login: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})