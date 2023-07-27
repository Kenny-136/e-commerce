import { db } from "../config/firebase";
import { collection, doc, getDoc, getDocs, updateDoc, setDoc, arrayUnion, increment, arrayRemove } from 'firebase/firestore'


const getCustomerData = async () => {
  const collectionRef = collection(db, "customer")
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => ({id: doc.id, ... doc.data()}))
  // At the moment I'm only working with 1 Customer, Hence I use [0], to use customer1,
  // this will return an object with customer id and cart array and in this instance i will only use cart data.
  return data[0]
} 



export const addItemToCartDB = async (itemObject) => {
  const custRef = doc(db, "customer", "cart")
  await updateDoc(custRef, {
    items : arrayUnion(itemObject)
  })
  return getCustomerData()
}

export const removeItemFromCartDB = async (itemObject) => {
  const custRef = doc(db, "customer", "cart")
  await updateDoc(custRef, {
    items : arrayRemove(itemObject)
  })
  return getCustomerData()
}

export default getCustomerData