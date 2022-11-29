const PeopleLists = ({ people, deleteProfile }) => {
	// loop through the object data of people
	return (
		<div className='people__list'>
			{people.map((person, i) => {
				return (
					<div className='person flex justify-between' key={i}>
						<div className='name'>
							{person.name} - {i}
						</div>
						<div className='people_filter flex justify-between '>
							<h1 className='px-2'>edit</h1>
							<button
								className='px-2'
								onClick={(e) => {
									deleteProfile(i);
								}}
							>
								Delete
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PeopleLists;
