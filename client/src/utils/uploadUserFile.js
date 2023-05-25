import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase.config';

export const uploadUserFile = async (file, currentUser, finalName, folder) => {
	const directory = currentUser.uid;
	const storageRef = ref(storage, `${directory}/${folder}/${finalName}`);
	await uploadBytes(storageRef, file);
	const finalUrl = await getDownloadURL(storageRef);
	return finalUrl;
};
