import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPerson = (props) => {
	const [value, setValue] = useState(null);
	const navigate = useNavigate();

	const addSubmit = (e) => {
		e.preventDefault();
		// call addPerson using props and create an object with key of name and the value you put in input
		props.addPerson({
			name: e.target[0].value,
		});
		navigate(props.AddPerson);
	};
	return (
		<form className='flex justify-between' onSubmit={addSubmit}>
			<input className='border-black message' type='text' required />
			<button>Add People</button>
		</form>
	);
};

export default AddPerson;
