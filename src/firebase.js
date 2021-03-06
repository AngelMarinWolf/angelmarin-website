import { firebase } from '@firebase/app'
import '@firebase/firestore'
import '@firebase/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBHnqljD0_dI5ZBRrE7NSgsMddIhQvctEg',
  authDomain: 'angel-marin.firebaseapp.com',
  databaseURL: 'https://angel-marin.firebaseio.com',
  projectId: 'angel-marin',
  storageBucket: 'angel-marin.appspot.com',
  messagingSenderId: 290340122419,
  timestampsInSnapshots: true
})

const db = firebaseApp.firestore()
db.settings({timestampsInSnapshots: true})

const storage = firebaseApp.storage()

export {db, storage}
