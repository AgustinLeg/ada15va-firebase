import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getAllTodos = async () => {
	const data = await getDocs(collection(db, 'todos'));

	let todos = [];

	data.forEach((doc) => {
		// console.log(doc.data(), doc.id);

		todos.push({
			...doc.data(),
			id: doc.id,
		});
	});

	// console.log(todos);
	return todos;
};

export const createTodo = async (name, uid) => {
	const doc = await addDoc(collection(db, 'todos'), {
		name,
		uid,
		isCompleted: false,
	});

	return doc;
};

export const getUserTodos = async (uid) => {
	const q = query(collection(db, 'todos'), where('uid', '==', uid));

	const data = await getDocs(q);
	let todos = [];

	data.forEach((doc) => {
		// console.log(doc.data(), doc.id);

		todos.push({
			...doc.data(),
			id: doc.id,
		});
	});

	// console.log(todos);
	return todos;
};
