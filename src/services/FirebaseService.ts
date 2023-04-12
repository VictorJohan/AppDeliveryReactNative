import { Firebase } from "../utils/Firebase";

export class FirebaseService {

   protected firebase: Firebase = new Firebase(); 

   async saveProfileImage(image: Blob, imageName: string) {
      const url = await this.firebase.saveProfileImage(image, 'ProfileImage'+imageName);

      return url;
   }

   async saveProductImage(image: Blob, imageName: string) {
      const url = await this.firebase.saveProductImage(image, 'ProductImage/'+imageName);

      return url;
   }
}