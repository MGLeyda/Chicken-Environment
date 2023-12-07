const { response } = require('express');
const path = require('path');
var firebase = require('firebase/app');

const {getDatabase, ref, onValue, set, update, get, child} = require('firebase/database');

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

const addFood = (request, response) => {
	// Capture the input field
	let date = request.body.addDate;
	let cups = request.body.add_food;

  let tempDate = date.split("-");
  console.log(tempDate);
	cups = parseInt(cups);
	// adds a feeding to Firebase with the date as the child of feedings and cups added as the 
	// child of the date
	set(child(dbRef, 'Feedings/' + date),{cupsAdded: cups});
	response.redirect('/home');
}

module.exports = addFood;   
