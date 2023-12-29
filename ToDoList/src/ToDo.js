import React from 'react';

export default function ToDo(props) {
	function handleToDoClick() {
		props.toggle(props.todo.id);
	}

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={props.todo.complete}
					onChange={handleToDoClick}
				/>
				{props.todo.name}
			</label>
		</div>
	);
}
