// IMPORTAR DADES A FIREBASE (mètode casolà)

const firebase = require("firebase/app");
const { getFirestore, addDoc, collection } = require("firebase/firestore");
const petsJson = require("./src/json/pets.json");

// les teves dades de configuració:
firebase.initializeApp({
  apiKey: "AIzaSyD10UB_Dther21RE0wAemdl1hBG7p-1Fx4",
  authDomain: "petinder-56f80.firebaseapp.com",
  projectId: "petinder-56f80",
  storageBucket: "petinder-56f80.appspot.com",
  messagingSenderId: "172451802919",
  appId: "1:172451802919:web:2f73a098fd2343047b4302",
});

var db = getFirestore();

// per cada element del json, afegeix una nova mascota a la base de dades
petsJson.data.forEach(function (obj) {
  addDoc(collection(db, "pets"), {
    id: obj.id,
    name: obj.name,
    image_url: obj.image_url,
    location: obj.location,
    species: obj.species,
    sex: obj.sex,
    size: obj.size,
    birth_date: obj.birth_date,
    handle_status: obj.handle_status,
    bio: obj.bio,
    status: obj.status,
    personality: obj.personality,
    info_notes: obj.info_notes,
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
