import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View, TextInput, SafeAreaView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";

<><script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script></>


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_1cqzefFOU-nTpsdfS9cyAvzYIXCdrhY",
  authDomain: "rnauthentication-63005.firebaseapp.com",
  projectId: "rnauthentication-63005",
  storageBucket: "rnauthentication-63005.appspot.com",
  messagingSenderId: "227905700356",
  appId: "1:227905700356:web:773d424b8e401666d32b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = initializeAuth();

const auth = getAuth(app);
// const analytics = getAnalytics(app);



export default Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [seePassword, setSeePassWord] = useState(true)
  const [checkValidEmail, setCheckValidEmail] = useState(false)
  const auth = getAuth();


  const Sign_in = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("User Login Successfully");
        console.log("user data,", user);
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        console.log("Error,", errorMessage);
      });
  }

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);

    if (re.test(text) || regex.test(text)) {

      setCheckValidEmail(false);
    }
    else {

      setCheckValidEmail(true);
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={{ flex: 1, backgroundColor: '#141416' }}>
          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginHorizontal: 20 }}>
            {/* <Image source={require('../assets/logo.png')} style={styles.img} /> */}
            <Text style={{ color: 'white', fontSize: 25, marginVertical: 10, fontWeight: 'bold' }}>Log into</Text>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>your account</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Email */}
            <View style={styles.wrapI_T}>
              <Ionicons name='person-outline' style={{ fontSize: 25, color: 'grey' }}></Ionicons>
              <TextInput placeholder={'Email'} placeholderTextColor={'grey'} value={email} onChangeText={text => handleCheckEmail(text)} style={styles.txt_ip}></TextInput>
            </View>
            {checkValidEmail ? (
              <Text style={{ color: 'red', fontWeight: 'bold', paddingStart: 215 }}> Wrong format email</Text>
            ) : (
              <Text></Text>
            )}
            {/* Password */}
            <View style={styles.wrapI_T}>
              <Ionicons name='key-outline' style={{ fontSize: 25, color: 'grey' }}></Ionicons>
              <TextInput placeholder={'Password'} placeholderTextColor={'grey'} value={password} onChangeText={password => setPassword(password)} secureTextEntry={seePassword} style={styles.txt_ip}></TextInput>
              {password == '' ? ("") : (
                <TouchableOpacity style={styles.eye} onPress={() => { setSeePassWord(!seePassword) }}>
                  {!seePassword ?
                    <Ionicons name='eye-outline' style={styles.icon}></Ionicons> : <Ionicons name='eye-off-outline' style={styles.icon}>
                    </Ionicons>}
                </TouchableOpacity>
              )
              }
            </View>
            {/* Forget pass */}
            <TouchableOpacity style={styles.forget} onPress={() => navigation.navigate('Forgot_Pass')}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'red' }}>Forget your password ?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'space-around' }}>
            {/* Sign in */}
            {(email == '' || password == "") ? (
              <TouchableOpacity disabled style={styles.btn_sign_in_disable}>
                <Text style={{ color: '#333', fontSize: 20, fontWeight: 'bold' }}>Log in</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => { Sign_in() }} style={styles.btn_sign_in}>
                <Text style={{ color: '#333', fontSize: 20, fontWeight: 'bold' }}>Log in</Text>
              </TouchableOpacity>
            )}

            <View>
              <Text style={{ fontSize: 15, color: 'grey' }}>or log in with</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '40%', height: '20%' }}>
              <TouchableOpacity>
                <Ionicons name='logo-facebook' style={{ fontSize: 30, color: 'blue' }}></Ionicons>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name='logo-google' style={{ fontSize: 30, color: 'red' }}></Ionicons>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 15, color: 'grey' }}>
                Don't have an account?
              </Text>
              <TouchableOpacity style={styles.btn_sign_up} onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: '#333', fontSize: 15, fontWeight: 'bold', color: 'grey', borderBottomWidth: 1, borderBottomColor: 'red' }}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Sign up */}
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
  image: {
    width: '100%',
    height: '100%',
  },
  img: {
    borderRadius: 30,
    height: '60%',
    width: '60%'
  },

  wrapI_T: {
    marginVertical: 10,
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
    paddingLeft: 10,
    height: '100%',
    width: '90%',
    textAlign: 'left',
    paddingRight: 40,
    fontSize: 25
  },
  eye: {
    height: '100%',
    width: 35,
    position: 'absolute',
    right: 10,
    top: 5
  },
  icon: {
    fontSize: 35,
    width: '100%',
    height: '100%'
  },
  btn_sign_in: {
    width: '40%',
    height: '20%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#37D9FE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_sign_in_disable: {
    width: '40%',
    height: '20%',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  forget: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  btn_sign_up: {
    justifyContent: 'center',
    alignItems: 'center',
  },

})
