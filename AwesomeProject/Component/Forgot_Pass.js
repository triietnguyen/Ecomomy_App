import { StyleSheet, Image, Text, TouchableOpacity, View, TextInput, SafeAreaView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Forgot_Pass() {


  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={{ flex: 1, backgroundColor: '#141416' }}>
          <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Forgot password?</Text>
            <Text style={{ color: 'grey' }}>Enter email associated with your account and we’ll send and email with intructions to reset your password</Text>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: "center" }}>
            <View style={{ flexDirection: 'row', borderBottomColor: '#3B3C41', borderBottomWidth: 1 }}>
              <Ionicons name='mail-outline' style={{ fontSize: 25, color: 'grey', marginRight: 10 }}></Ionicons>
              <TextInput placeholder={'enter your email here'} placeholderTextColor={'grey'} style={{ color: 'white' }} ></TextInput>
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