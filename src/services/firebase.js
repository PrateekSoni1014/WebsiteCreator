import {db} from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

async function getAllData(db){
    const websiteCol = collection(db, 'Websites');
    const websiteSnapshot = await getDocs(websiteCol);
    const websiteList = websiteSnapshot.docs.map(doc => doc.data());
    return websiteList;
}

export async function getDocData(websiteTag){
   let result = await getAllData(db);
    if(result[0][`${websiteTag}`]){
        return result[0][`${websiteTag}`]
    }
    return {}
}
