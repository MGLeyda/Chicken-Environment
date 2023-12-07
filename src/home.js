const { response } = require('express');
const path = require('path');
var firebase = require('firebase/app');
const {getDatabase, ref, onValue, set, update, get, child} = require('firebase/database');
const { async } = require('@firebase/util');
const { getMessaging } = require('firebase/messaging');

const firebaseConfig = {
	apiKey: "AIzaSyA6-lMRa5FR14yM7yNa5RtGljLmQDiquQ0",
	authDomain: "iotproject-ba130.firebaseapp.com",
	databaseURL: "https://iotproject-ba130-default-rtdb.firebaseio.com",
	projectId: "iotproject-ba130",
	storageBucket: "iotproject-ba130.appspot.com",
	messagingSenderId: "128269021904",
	appId: "1:128269021904:web:95bd4d29d84a873a61a4d5"
};
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); 
const database = getDatabase();
const dbRef = ref(database);

//get the data from firebase and returns it as a list
const home = async () => {
	// get the minTemp from firebase
	let snapshot = await get(child(dbRef, 'minTemp'));
	const minTemp = snapshot.val();

	// get maxTemp from firebase
	snapshot = await get(child(dbRef, 'maxTemp'));
	const maxTemp = snapshot.val();

	// get numChickens from firebase
	snapshot = await get(child(dbRef, 'numChickens'));
	const numChickens = snapshot.val();

	// get email from firebase
	snapshot = await get(child(dbRef, 'email'));
	const email = snapshot.val();
	
	return [minTemp, maxTemp, numChickens, email, temperature];
};

module.exports = home;   
