import {db} from '../firebase';
import { getDoc, doc, setDoc ,collection, updateDoc } from 'firebase/firestore/lite';

async function getAllData(db,colName,docName){
    const docRef = doc(db, colName, docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        // const newDocRef = collection(db, colName);
        // let resultData = {
        //     config: {
        //         logo:'test',
        //         navElements:[],
        //         title:docName
        //     } }
        // await setDoc(doc(newDocRef, docName), resultData);
        // return resultData;
        window.location.assign(process.env.REACT_APP_CREATION_PAGE);
    }
}

async function updateData(db,colName,docName, data){
    
    try {
        const docRef = collection(db, colName);
        let dataKey = 'config.'+Object.keys(data)[0];
        let resultData = { [dataKey] : data[Object.keys(data)[0]] }
        await updateDoc(doc(docRef, docName), resultData);    
        return resultData;
    } catch (error) {
        console.log("🚀 ~ updateData ~ error", error)
    }
}
async function createData(db,colName,docName, config){
    const docRef = collection(db, colName);
    let resultData = { config }
    await setDoc(doc(docRef, docName), resultData);
    return resultData;
}

export async function getDocData(currentDomain){

    let result = await getAllData(db,'Websites',currentDomain);
    console.log("🚀 ~ getDocData ~ result", result)
    if(result.config){
        return result.config
    }
    return {}
}

export async function updateDocData({currentDomain,data}){
    return await updateData(db,'Websites',currentDomain, data);
}

export async function createDocData({domain,data}){   
    await createData(db,'Websites',domain, data);
}

