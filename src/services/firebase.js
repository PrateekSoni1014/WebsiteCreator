import {db} from '../firebase';
import { getDoc, doc } from 'firebase/firestore/lite';

async function getAllData(db,colName,docName){
    const docRef = doc(db, colName, docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return {}
    }
}

export async function getDocData(currentDomain){

    let result = await getAllData(db,'Websites',currentDomain);
    if(result.config){
        return result.config
    }
    return {}
}
