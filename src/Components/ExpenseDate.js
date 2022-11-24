import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
	// create a variable for each year
	// change it to toLocale String
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const year = props.date.toLocaleString("en-US", { year: "numeric" });
	const day = props.date.toLocaleString("en-US", { month: "numeric" });
	return (
		<div className='expense-date'>
			<span className='expense-date__month'>{month}</span>
			<span className='expense-date__year'>{year}</span>
			<span className='expense-date__day'>{day}</span>
		</div>
	);
};

export default ExpenseDate;
