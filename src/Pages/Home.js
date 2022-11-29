import React, { useState } from "react";
import AddPerson from "../Components/AddPerson";
import PeopleLists from "../Components/PeopleLists";

const data = [
	{
		name: "logan",
	},
	{
		name: "lev",
	},
	{
		name: "levi",
	},
	{
		name: "levis",
	},
];
const Home = (props) => {
	// call your data to state in order to access in child component
	const [people, setPeople] = useState(data);

	const addPerson = (person) => {
		// set your new state people then access the people that have data and the parameter person
		if (person && person.name !== undefined) {
			setPeople([...people, person]);
		}
	};

	const deleteProfile = (index) => {
		// create a function inside setPeople then return people with filter function with an argument of value and i then condition
		setPeople((people) => {
			return people.filter((value, i) => i !== index);
		});
		// console.log(setPeople);
	};

	return (
		<div className='people max-w-3xl'>
			<h1>Poeples List</h1>
			<header className='flex justify-between'>
				<div className='person__count'>{people.length}</div>
			</header>

			<PeopleLists people={people} deleteProfile={deleteProfile} />
			<AddPerson addPerson={addPerson} />
		</div>
	);
};

export default Home;
