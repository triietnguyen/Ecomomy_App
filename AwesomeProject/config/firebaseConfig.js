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



