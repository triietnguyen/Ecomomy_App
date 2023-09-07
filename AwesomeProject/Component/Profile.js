import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={require('../assets/person.jpg')} style={{ width: '30%', height: '70%', borderRadius: 20 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Triet Nguyen</Text>
                    <Text>admin@gmail.com</Text>
                </View>
            </View>
            <View style={{ flex: 4, backgroundColor: 'white', alignItems: 'center', }}>
                <View style={{ height: '15%', width: '90%', flexDirection: 'row', alignItems: 'center', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderColor: 'grey', borderWidth: 2 }}>
                    <Ionicons name="person-outline" style={{ fontSize: 25, marginHorizontal: 20 }} />
                    <Text>My profile</Text>
                </View>
                <View style={{ height: '15%', width: '90%', flexDirection: 'row', alignItems: 'center', borderColor: 'grey', borderWidth: 2 }}>
                    <Ionicons name="star-outline" style={{ fontSize: 25, marginHorizontal: 20 }} />
                    <Text>Rate this app</Text>
                </View>
                <View style={{ height: '15%', width: '90%', flexDirection: 'row', alignItems: 'center', borderColor: 'grey', borderWidth: 2 }}>
                    <Ionicons name="settings-outline" style={{ fontSize: 25, marginHorizontal: 20 }} />
                    <Text>Setting</Text>
                </View>
                <View style={{ height: '15%', width: '90%', flexDirection: 'row', alignItems: 'center', borderColor: 'grey', borderWidth: 2 }}>
                    <Ionicons name="mail-outline" style={{ fontSize: 25, marginHorizontal: 20 }} />
                    <Text>Support</Text>
                </View>
                <View style={{ height: '15%', width: '90%', flexDirection: 'row', alignItems: 'center', borderColor: 'grey', borderWidth: 2 }}>
                    <Ionicons name="information-circle-outline" style={{ fontSize: 25, marginHorizontal: 20 }} />
                    <Text>About us</Text>
                </View>
                <View style={{ height: '15%', width: '90%', flexDirection: 'row', alignItems: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: 'grey', borderWidth: 2 }}>
                    <Ionicons name="log-out-outline" style={{ fontSize: 25, marginHorizontal: 20 }} />
                    <Text>Log out</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})