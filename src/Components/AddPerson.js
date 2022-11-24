import React, { useState } from "react";

const AddPerson = (props) => {
	const [value, setValue] = useState(null);

	const addSubmit = (e) => {
		e.preventDefault();
		// call addPerson using props and create an object with key of name and the value you put in input
		props.addPerson({
			name: e.target[0].value,
		});
	};
	return (
		<form className='flex justify-between' onSubmit={addSubmit}>
			<input className='border-black message' type='text' required />
			<button>Add People</button>
		</form>
	);
};

export default AddPerson;
