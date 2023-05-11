import { useState } from 'react';
// import {
// 	createUserWithEmailAndPassword,
// 	signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { auth } from '../../firebase/config';
import { register } from '../../services/auth';

export const Register = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		// createUserWithEmailAndPassword(auth, values.email, values.password)
		// 	.then((userCredential) => {
		// 		// Signed in
		// 		const user = userCredential.user;
		// 		// ...

		// 		console.log(user);
		// 	})
		// 	.catch((error) => {
		// 		const errorCode = error.code;
		// 		const errorMessage = error.message;
		// 		// ..
		// 		console.log(errorCode, errorMessage);
		// 	});
		// try {
		// 	const userCredential = await createUserWithEmailAndPassword(
		// 		auth,
		// 		values.email,
		// 		values.password
		// 	);

		// 	const { user } = userCredential;
		// 	console.log(user);
		// } catch (error) {
		// 	const errorCode = error.code;
		// 	const errorMessage = error.message;
		// 	// ..
		// 	console.log(errorCode, errorMessage);
		// }

		const user = await register(values);
		console.log(user);
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<input
					type="email"
					value={values.email}
					onChange={handleChange}
					name="email"
				/>
			</div>
			<div>
				<input
					type="password"
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
			</div>
			<button type="submit">Crear Cuenta</button>
		</form>
	);
};
