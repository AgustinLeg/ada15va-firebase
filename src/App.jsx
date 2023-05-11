import { Route } from 'react-router-dom';
import './App.css';
import { Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/auth/Register';

import { CreateTodo } from './pages/CreateTodo';

function App() {
	return (
		<main>
			<h1>Firebase</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create-todo" element={<CreateTodo />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</main>
	);
}

export default App;
