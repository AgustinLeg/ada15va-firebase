import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/config';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				setUser(uid);
			} else {
				// User is signed out
				// ...
				// console.log('no estaba logueado');
				setUser(null);
			}
		});
	}, []);

	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	);
};
