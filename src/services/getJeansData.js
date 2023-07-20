import { db } from "../config/firebase";
import { collection, getDocs } from 'firebase/firestore'

const getJeansData = async () => {
  const collectionRef = collection(db, "jeans")
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => ({id: doc.id, ... doc.data()}))
  return data
} 
export default getJeansData