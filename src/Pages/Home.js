import React, { useState } from "react";
import AddPerson from "../Components/AddPerson";
import PeopleLists from "../Components/PeopleLists";
import People from "../Components/Peoples";

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
const Home = (state) => {
	const [people, setPeople] = useState(data);

	const addPerson = (person) => {
		if (person && person.name !== undefined) {
			setPeople([...people, person]);
		}
	};

	const deleteProfile = (index) => {
		setPeople((people) => {
			return people.filter((value, i) => i !== index);
		});
	};

	return (
		<div className='people max-w-3xl'>
			<header className='flex justify-between'>
				<h1>Poeples List</h1>
				<div className='person__count'>{people.length}</div>
			</header>
			<PeopleLists people={people} deleteProfile={deleteProfile} />
			<AddPerson addPerson={addPerson} />
		</div>
	);
};

export default Home;
