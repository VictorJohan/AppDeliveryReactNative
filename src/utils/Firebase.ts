import { initializeApp } from "firebase/app";
import {
  FirebaseStorage,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export const FirebaseManager = () => {
  let storage: FirebaseStorage = {} as FirebaseStorage;

  const firebaseConfig = {
    apiKey: "AIzaSyDQONbUyV8hEs1B2o4Lxhuug5opQfINwLU",
    authDomain: "deliveryapp-4ca5c.firebaseapp.com",
    projectId: "deliveryapp-4ca5c",
    storageBucket: "deliveryapp-4ca5c.appspot.com",
    messagingSenderId: "716761969040",
    appId: "1:716761969040:web:d7583ae926aa21f7780315",
  };

  // Initialize Firebase

  const uriToBlob = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    return blob;
  };

  const init = () => {
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Storage and get a reference to the service
    storage = getStorage(app);
  };

  const uploadImageProfile = async (uri: string, imageName: string) => {
    init();

    const storageRef = ref(storage, `Usuarios/${imageName}`);

    // 'file' comes from the Blob or File API
    let url = await uploadBytes(storageRef, await uriToBlob(uri)).then(async (snapshot) => {
      return await getDownloadURL(storageRef);
    });

    return url;
  };

  const uploadImageProducts = async (uri: string, imageName: string) => {
    init();

    const storageRef = ref(storage, `Productos/${imageName}`);

    // 'file' comes from the Blob or File API
    let url = await uploadBytes(storageRef, await uriToBlob(uri)).then(async (snapshot) => {
      return await getDownloadURL(storageRef);
    });

    return url;
  };

  return {
    uploadImageProfile,
    uploadImageProducts
  };
};
