import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const changeTitleHandler = (e) => {
		e.preventDefault();

		setTitle("Panget Ons");
		console.log("Initials State", title);
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2 className='expense-item h2'>{title}</h2>
				<span className='expense-item__price '>{props.amount}</span>
			</div>
			<button className='m-2 p-2 text-white' onClick={changeTitleHandler}>
				Change Title
			</button>
		</Card>
	);
};

export default ExpenseItem;
