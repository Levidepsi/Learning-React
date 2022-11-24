import React, { useState } from "react";

const AddPerson = (props) => {
	const [value, setValue] = useState(null);

	const addSubmit = (e) => {
		e.preventDefault();

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
