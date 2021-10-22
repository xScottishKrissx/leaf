import { async } from "@firebase/util";
import { firestore } from "./firebase";

const getPlants = async () => {
    const snapshot = await firestore.collections("plants").get()
    snapshot.docs.forEach(
        doc => console.log(doc.data)
    )
}

export {getPlants}