const PeopleLists = ({ people, deleteProfile }) => {
	return (
		<div className='people__list'>
			{people.map((person, value) => {
				return (
					<div className='person flex justify-between' key={value}>
						<div className='name'>
							{person.name} - {value}
						</div>
						<div className='people_filter flex justify-between '>
							<h1 className='px-2'>edit</h1>
							<button
								className='px-2'
								onClick={(e) => {
									deleteProfile(value);
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
