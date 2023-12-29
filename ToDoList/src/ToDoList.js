import { useState } from 'react';
import ToDo from './ToDo';
export default function ToDoList({ todos, toggle }) {
	return (
		<>
			{todos.map((todo) => (
				<ToDo key={todo.id} todo={todo} toggle={toggle} />
			))}
		</>
	);
}
