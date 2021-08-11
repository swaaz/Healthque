
<p>
  <div align="center">
    <img src="./readme/header.png" width="100%"/>
   </div>
 </p>
 

 
 # About 📌
 A location tracking application for mobile devices built by The Boys as Minor Project. MapMe tracks your location and give you details on the route, average speed,time and distance covered. To track just tap on 'Start Tracking' and the app will now start collecting your coordinates and starts to draw PolyLines which are used to depict a route from one place to another. You can also view your tracked history and all these details are not collected by us, it is safely stored on your personal device.
 
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
