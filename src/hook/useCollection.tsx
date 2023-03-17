import { useEffect, useState } from 'react';
import {collection, getDocs, doc, onSnapshot} from 'firebase/firestore';
import { database } from '../firebase/index';
const useCollection = (path: string) => {
    const [data, setData] = useState<{
        position: {
            latitude: number,
            longitude: number
        },
        name: string,
        email: string,
        phoneNumber: number,
    }>()
    // useEffect(() => {
    //     async function getCollection() {
    //         const docRef = collection(database, path);
    //         const docSnap = await getDocs(docRef);
    //         setData(docSnap.docs.map(doc => doc.data()));
    //     }
    //     getCollection()
    // }, [path]);
    // return data;
    useEffect(() => {
        const unsub = onSnapshot(doc(database, "staff", "zfbWCQ8wM3KAe0hGizHJ"), (doc) => {
            console.log(doc.data(),'docdata')
            setData(doc.data());
          });
        //   const jj = onSnapshot(collection(database, "staff"), (doc) => {
        //       console.log(doc,'doc')
        //   });
        return () => unsub()       
     }, []);
     return data;
}

export default useCollection;