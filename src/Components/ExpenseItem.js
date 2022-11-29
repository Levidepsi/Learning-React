import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2 className='expense-item h2'>{props.title}</h2>
				<span className='expense-item__price '>${props.amount}</span>
			</div>
			{/* <button className='m-2 p-2 text-white' onClick={changeTitleHandler}>
				Change Title
			</button> */}
		</Card>
	);
};

export default ExpenseItem;
