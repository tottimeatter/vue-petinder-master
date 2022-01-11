import "@/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore();

export default db;

export async function addPet(pet) {
  const petCollection = collection(db, "pets");
  // contingut
  try {
    const ref = doc(petCollection);

    pet.id = ref.id;
    const docRef = await addDoc(petCollection, {
      bio: pet.bio,
      birth_date: pet.birth_date,
      handle_status: pet.handle_status,
      id: pet.id,
      image_url: pet.image_url,
      info_notes: pet.info_notes,
      location: pet.location,
      name: pet.name,
      personality: pet.personality,
      sex: pet.sex,
      size: pet.size,
      species: pet.species,
      status: pet.status,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAllPets() {
  const petCollection = collection(db, "pets");

  try {
    let pets = [];
    let response = await getDocs(petCollection);
    response.forEach((p) => {
      pets.push(p.data());
    });
    if (pets) return pets;
  } catch (e) {
    console.log(e);
    console.log(`Error getting data from "pets"`);
  }
}

export async function getPetsByName(name) {
  try {
    const q = query(collection(db, "pets"), where("name", "==", name));

    const querySnapshot = await getDocs(q);
    let pets = [];
    querySnapshot.forEach((doc) => {
      pets.push(doc.data());
    });
    return pets;
  } catch (e) {
    console.log(e);
  }
}

export async function getPetsByAdvancedSearch(queryParams) {
  let species = queryParams.species;
  let gender = queryParams.gender;
  let size = queryParams.size;
  try {
    let q = query(collection(db, "pets"));

    if (species != "all" && gender != "all" && species != "all") {
      q = query(
        collection(db, "pets"),
        where("species", "==", species),
        where("sex", "==", gender),
        where("size", "==", size)
      );
    } else if (species == "all" && gender == "all" && size !== "all") {
      q = query(collection(db, "pets"), where("size", "==", size));
    } else if (species == "all" && size == "all" && gender != "all") {
      q = query(collection(db, "pets"), where("sex", "==", gender));
    } else if (gender == "all" && size == "all" && species != "all") {
      q = query(collection(db, "pets"), where("species", "==", species));
    } else if (species == "all" && gender != "all" && size != "all") {
      q = query(
        collection(db, "pets"),
        where("sex", "==", gender),
        where("size", "==", size)
      );
    } else if (species != "all" && gender == "all" && size != "all") {
      q = query(
        collection(db, "pets"),
        where("species", "==", species),
        where("size", "==", size)
      );
    } else if (species != "all" && gender != "all" && size == "all") {
      q = query(
        collection(db, "pets"),
        where("species", "==", species),
        where("sex", "==", gender)
      );
    }

    let pets = [];
    const querySpeciesSnapshot = await getDocs(q);

    querySpeciesSnapshot.forEach((doc) => {
      if (!pets.includes(doc.data())) {
        pets.push(doc.data());
      }
    });

    return pets;
  } catch (e) {
    console.log(e);
  }
}
