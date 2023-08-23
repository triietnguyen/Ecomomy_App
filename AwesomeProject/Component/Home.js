import { Image, View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import * as React from "react";
import { Ionicons } from '@expo/vector-icons';
import Carousel from '../Component/Carousel';
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
          <Carousel />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 25, marginBottom: 20, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Air Max Collection</Text>
        </View>
        <View style={{ flex: 1, width: '90%', marginHorizontal: 20 }}>
          <ScrollView horizontal>
            <View style={styles.feature}>
              <Image style={styles.stretch} source={require('../assets/Feature_1.webp')}></Image>
              <Text>Air Max 270</Text>
            </View>
            <View style={styles.feature}>
              <Image style={styles.stretch} source={require('../assets/Feature_2.webp')}></Image>
              <Text>Air Max 95</Text>
            </View>
            <View style={styles.feature}>
              <Image style={styles.stretch} source={require('../assets/Feature_3.webp')}></Image>
              <Text>Air Max 97</Text>
            </View>
            <View style={styles.feature}>
              <Image style={styles.stretch} source={require('../assets/Feature_4.webp')}></Image>
              <Text>Air Max Plus</Text>
            </View>
            <View style={styles.feature}>
              <Image style={styles.stretch} source={require('../assets/Feature_5.webp')}></Image>
              <Text>Air Max 90</Text>
            </View>
            <View style={styles.feature}>
              <Image style={styles.stretch} source={require('../assets/Feature_6.webp')}></Image>
              <Text>Air Max 1</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20, marginHorizontal: 25, marginBottom: 20, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>The Essentials</Text>
        </View>
        <View style={{ flex: 1, width: '90%', marginHorizontal: 20, flexDirection: 'row' }}>
          <View style={styles.feature}>
            <Image style={styles.stretch} source={require('../assets/Men.webp')}></Image>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 20, height: 30, width: 60 }}>
              <Text>Men's</Text>
            </View>
          </View>
          <View style={styles.feature}>
            <Image style={styles.stretch} source={require('../assets/Women.webp')}></Image>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 20, height: 30, width: 70 }}>
              <Text>Women's</Text>
            </View>
          </View>
          <View style={styles.feature}>
            <Image style={styles.stretch} source={require('../assets/Kid.webp')}></Image>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 20, height: 30, width: 60 }}>
              <Text>Kid's</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  stretch: {
    width: 100,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 15,
    marginBottom: 5

  },
  feature: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})