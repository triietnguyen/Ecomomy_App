import React, { useState } from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View, TextInput, SafeAreaView, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

export default Register = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [checkValidEmail, setCheckValidEmail] = useState(true)
  const [checkValidConfirmPass, setCheckValidConfirmPass] = useState(true)


  const auth = getAuth();

  const Sign_up = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("User Login Successfully");
        console.log("user data,", user);
        navigation.navigate("Login");
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

      setCheckValidEmail(true);
    }
    else {

      setCheckValidEmail(false);
    }
  };

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
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginHorizontal: 20 }}>
            <Text style={{ fontSize: 25, marginVertical: 10, fontWeight: 'bold' }}>Creat</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>your account</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            {/* Email and PassWord */}
            <View style={styles.e_p}>
              {/* Email */}
              <View style={styles.wrapI_T}>
                <TextInput value={email} onChangeText={email => handleCheckEmail(email)} placeholder={'Email'} placeholderTextColor={'grey'} style={styles.txt_ip}></TextInput>
              </View>
              {!checkValidEmail ? (
                <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 220, marginTop: 10 }}> Wrong format email</Text>
              ) : (
                <Text></Text>
              )}
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
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => { Sign_up() }} style={styles.btn_sign_up}>
              <Text style={{ color: '#333', fontSize: 20, fontWeight: 'bold' }}>Sign up</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 15, color: 'grey' }}>
                Already have account?
              </Text>
              <TouchableOpacity style={styles.btn_login} onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}> Sign in</Text>
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
    marginBottom: 40,
    height: 160,
    width: 160
  },
  e_p: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: '100%',
    width: '90%',
    paddingRight: 40,
    fontSize: 25
  },
  icon: {
    fontSize: 35,
    width: '100%',
    height: '100%'
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
