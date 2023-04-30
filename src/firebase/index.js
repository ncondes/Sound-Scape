import { initializeApp } from 'firebase/app'


// const firebaseConfig = {
//    apiKey: import.meta.env.FB_API_KEY,
//    authDomain: import.meta.env.FB_AUTH_DOMAIN,
//    projectId: import.meta.env.FB_PROJECT_ID,
//    storageBucket: import.meta.env.FB_STORAGE_BUCKET,
//    messagingSenderId: import.meta.env.FB_MESSAGING_SENDER_ID,
//    appId: import.meta.env.FB_APP_ID
// }

const firebaseConfig = {
   apiKey: 'AIzaSyCkhIuAcBlBZZaumzmxEMmFquamouv8_d4',
   authDomain: 'sound-scape-51ca3.firebaseapp.com',
   projectId: 'sound-scape-51ca3',
   storageBucket: 'sound-scape-51ca3.appspot.com',
   messagingSenderId: '236720184294',
   appId: '1:236720184294:web:6e9a67084bcc55838d1427'
}

const app = initializeApp(firebaseConfig)

export { app }
