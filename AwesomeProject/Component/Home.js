import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const tabs = ['post', 'comments', 'albums']
export default function Home() {
  const [check, setCheck] = useState(false)
  const [type, setType] = useState('')


  return (
    <View style={{ height: "100%", width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Toggle"
        color="#841584"
        onPress={() => setCheck(!check)}
      />
      <View style={{ flexDirection: 'row' }}>
        {check && tabs.map(tab => (

          <Button
            key={tab}
            title={tab}
            {...tab === type ? {
              color: "#333"
            } : {}}
            onPress={() => setType(tab)}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tg: {
    borderColor: 'red',
    borderWidth: 10,

  }
})