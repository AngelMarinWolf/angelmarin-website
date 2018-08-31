import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBHnqljD0_dI5ZBRrE7NSgsMddIhQvctEg',
  authDomain: 'angel-marin.firebaseapp.com',
  databaseURL: 'https://angel-marin.firebaseio.com',
  projectId: 'angel-marin',
  storageBucket: 'angel-marin.appspot.com',
  messagingSenderId: 290340122419
})

export const db = firebaseApp.firestore()
