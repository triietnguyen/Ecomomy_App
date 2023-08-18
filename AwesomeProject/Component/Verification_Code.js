import { StyleSheet, Image, Text, TouchableOpacity, View, TextInput, SafeAreaView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Verification_Code() {


    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={{ flex: 1, backgroundColor: '#141416' }}>
                    <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 15 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Verification code </Text>
                        <Text style={{ color: 'grey' }}>Please enter the verification code we sent to your email address</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ height: '50%', width: '20%', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput keyboardType='number-pad' maxLength={1} style={{ fontSize: 40, color: 'white' }} ></TextInput>
                        </View>
                        <View style={{ height: '50%', width: '20%', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput keyboardType='number-pad' maxLength={1} style={{ fontSize: 40, color: 'white' }}  ></TextInput>
                        </View>
                        <View style={{ height: '50%', width: '20%', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput keyboardType='number-pad' maxLength={1} style={{ fontSize: 40, color: 'white' }} ></TextInput>
                        </View>
                        <View style={{ height: '50%', width: '20%', borderRadius: 100, borderWidth: 1, borderColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput keyboardType='number-pad' maxLength={1} style={{ fontSize: 40, color: 'white' }} ></TextInput>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
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
})