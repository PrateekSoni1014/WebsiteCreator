import {db} from '../firebase';
import { getDoc, doc, setDoc ,collection } from 'firebase/firestore/lite';

async function getAllData(db,colName,docName){
    const docRef = doc(db, colName, docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        const newDocRef = collection(db, colName);
        let resultData = {
            config: {
                logo:'test',
                navElements:[],
                title:docName
            } }
        await setDoc(doc(newDocRef, docName), resultData);
        return resultData;
    }
}

export async function getDocData(currentDomain){

    let result = await getAllData(db,'Websites',currentDomain);
    console.log("🚀 ~ getDocData ~ result", result)
    if(result.config){
        return result.config
    }
    return {}
}
