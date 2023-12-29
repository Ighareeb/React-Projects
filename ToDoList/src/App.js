import './App.css';
import ToDoList from './ToDoList';
import ToDo from './ToDo';
import { v4 } from 'uuid';

import { useState, useRef, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {
	const initial = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
	const [todos, setTodos] = useState(initial ? initial : []);
	const ref = useRef();

	// useEffect(() => {
	// 	const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

	// 	if (storedTodos) {
	// 		setTodos(storedTodos);
	// 	}
	// }, []);

	useEffect(() => {
		todos && localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);
	function handleAdd(e) {
		const name = ref.current.value;
		if (name === '') return;
		setTodos((prevTodos) => {
			return [...prevTodos, { id: v4(), name: name, complete: false }];
		});
		ref.current.value = null;
	}

	function toggle(id) {
		const copyTodos = [...todos];
		const todo = copyTodos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(copyTodos);
	}

	function clearToDos() {
		const copyTodos = todos.filter((todo) => !todo.complete);
		setTodos(copyTodos);
	}
	return (
		<>
			<ToDoList todos={todos} toggle={toggle} />
			<input ref={ref} type="text" placeholder="Enter a task" />
			<button onClick={handleAdd}>Add Todo</button>
			<button onClick={clearToDos}>Clear completed Todos</button>
			<div>{todos.filter((todo) => !todo.complete).length} left to do</div>
		</>
	);
}

export default App;
