import { db } from "../config/firebase";
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

const getJeansData = async () => {
  const collectionRef = collection(db, "jeans")
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => ({id: doc.id, ... doc.data()}))
  return data
} 

export const getJeansByID = async (id) => {
  const jeansRef = doc(db, "jeans", id)
  const querySnapshot = await getDoc(jeansRef)
  if(!querySnapshot.exists()) {
    throw new Error("Product not found")
  }
  return {id: querySnapshot.id, ...querySnapshot.data()}
}

export const getVariantsByID = async (id) => {
  const sizeRef = collection(db, "jeans", id, "size")
  const querySnapshot = await getDocs(sizeRef);
  querySnapshot.forEach((doc) => {
  });
  const data = querySnapshot.docs.map((doc) => ({id: doc.id, ... doc.data()}))
  return data
}
// export const decrementStockByID
export default getJeansData