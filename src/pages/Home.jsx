import { useEffect } from 'react';
import { getUserTodos } from '../services/todos';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Home = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { user } = useContext(UserContext);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getUserTodos(user);
				setTodos(data);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, []);

	return (
		<div>
			{error && <p>There was an error</p>}
			{loading && <p>Loading...</p>}
			{todos.map((todo) => (
				<div key={todo.id}>
					<p>{todo.name}</p>
				</div>
			))}
			{!loading && !todos.length && <p>No todos</p>}
		</div>
	);
};
