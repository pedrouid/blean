import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBr63XleuTWhV1bvYjVxdnuIBaH-bLlTc4',
  authDomain: 'blean-156a0.firebaseapp.com',
  databaseURL: 'https://blean-156a0.firebaseio.com',
  projectId: 'blean-156a0',
  storageBucket: 'blean-156a0.appspot.com',
  messagingSenderId: '588708656671'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
