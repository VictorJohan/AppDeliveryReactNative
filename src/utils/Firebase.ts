import { initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const FirebaseManager = () => {

    let storage: FirebaseStorage = {} as FirebaseStorage;

    const firebaseConfig = {
        apiKey: "AIzaSyDQONbUyV8hEs1B2o4Lxhuug5opQfINwLU",
        authDomain: "deliveryapp-4ca5c.firebaseapp.com",
        projectId: "deliveryapp-4ca5c",
        storageBucket: "deliveryapp-4ca5c.appspot.com",
        messagingSenderId: "716761969040",
        appId: "1:716761969040:web:d7583ae926aa21f7780315"
    };

    // Initialize Firebase

    const init = () => {
        const app = initializeApp(firebaseConfig);
        // Initialize Cloud Storage and get a reference to the service
        storage = getStorage(app);

    }


    const upload = async (file: Blob, imageName: string) => {
       
        init();

        const storageRef = ref(storage, `images/Carros/${imageName}`);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then(async (snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
            const downloadURL = await getDownloadURL(storageRef);
        });
    }
    return {
        upload
    }
}
