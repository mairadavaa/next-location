import { database } from "./index";
import { doc, getDoc, getDocs, collection, addDoc, deleteDoc } from "firebase/firestore";

export async function getUser(
    userid = "M0xKi9F4VF2eIqLCwtjr") {
    const docRef = doc(database, "staff", userid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
}
export async function getUsers() {
    const docRef = collection(database, "staff");
    const docSnap = await getDocs(docRef);
    docSnap.forEach(user => {
        console.log(user.data());
    })
}
export async function getCollection(path: string) {
    const docRef = collection(database, path);
    const docSnap = await getDocs(docRef);
}
export async function createDriver() {
    const driver = await addDoc(collection(database, 'driver'), {
      firstname: "bataa",
      lastName: "hah"
    });
    console.log(`${driver.id} tai hun nemegdlee`)
}
export async function deleteDocument(id: string) {
    const response = await deleteDoc(doc(database, 'driver', id));
    return response;
};