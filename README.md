
<p>
  <div align="center">
    <img src="./readme/header.png" width="100%"/>
   </div>
 </p>
 

 
 # About 📌
 An Electronic Health Record is collection of various medical records during one’s lifespan. These life time records need to be maintained with some standards else it would be very difficult to bring together the records from different hospitals or health care centres together. 
The main purpose of this project is to provide people with the ease to access their health record anywhere anytime at any hospital or health centre so that the doctor can have  the complete  history and give proper medication or treatment required  faster. Hence, the need for interoperability. This will interconnect all health care centres across the country and with the appropriate authorisation the health records could be accessed.
 
 # What's in here? 🤔
 - React Native :atom:
 - Redux 🗄️
 - Firebase 🗺️

 
# How to Build the App 📱

## Fork the repo 🍴

## Clone the repo 🔻
```
git clone <url>
```
- example : `git clone https://github.com/swaaz/Mapme.git`

## Add API key before building 🔑
### Open [Google Firebase](https://firebase.google.com/)
Go to firebase console and create a project, add web as project and copy the API key and paste it inside the `~Healthque/firebase.js` after creating.
```
// firebase.js

import * as firebase from 'firebase'

import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

const auth = firebase.auth();
const db = app.firestore();
const storage = app.storage();

export { auth, db, storage };
```

## Install Dependencies ⚛️
```
expo install
or 
npm install
```
## Now you're good to go! 🔥
```
expo build
```


### Resources 📚
- [Expo Documentation](https://docs.expo.io/)
- [React Native](https://reactnative.dev/)
- [Redux](https://redux.js.org/)
- [Expo Firebase](https://docs.expo.dev/guides/using-firebase/)
