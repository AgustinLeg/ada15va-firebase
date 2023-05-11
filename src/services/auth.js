import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/config';

export const loginWithEmail = ({ email, password }) => {
	// const {email, password} = data

	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			console.log(errorCode, errorMessage);
		});
};

export const register = async ({ email, password }) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		const { user } = userCredential;

		return user;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
		console.log(errorCode, errorMessage);
	}
};
