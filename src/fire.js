import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDc1FbWyJjH2Cg5vWX8IMVA7AcH811hjKU',
  authDomain: 'medicine-logger.firebaseapp.com',
  databaseURL: 'https://medicine-logger.firebaseio.com',
  projectId: 'medicine-logger',
  storageBucket: 'medicine-logger.appspot.com',
  messagingSenderId: '60924652691'
}

const fire = firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default fire
