import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const saveData = (EnteredExpenseData) => {
		const expenseData = {
			...EnteredExpenseData,
			id: Math.random().toString(),
		};
		props.addExpense(expenseData);
	};
	return (
		<div className='new-expense '>
			<NewExpenseForm saveDate={saveData} />
		</div>
	);
};

export default NewExpense;
