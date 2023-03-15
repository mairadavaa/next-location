import { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { database } from '@/firebase';
const useCollection = (path: string) => {
    const [data, setData] = useState<any[]>()
    useEffect(() => {
        async function getCollection() {
            const docRef = collection(database, path);
            const docSnap = await getDocs(docRef);
            setData(docSnap.docs.map(doc => doc.data()));
        }
        getCollection()
    }, [path]);
    return data;
}

export default useCollection;