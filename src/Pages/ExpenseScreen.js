import React, { useState } from "react";
import Expenses from "../Components/Expenses";
import NewExpense from "../Components/NewExpense/NewExpense";

const expenseData = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const ExpenseScreen = (props) => {
	const [expenses, setExpenses] = useState(expenseData);

	const addExpense = (expense) => {
		// console.log("New Expense ADded");
		console.log(expenses);
		setExpenses((prevExpense) => {
			return [expense, ...prevExpense];
		});
	};
	return (
		<>
			<NewExpense addExpense={addExpense} />
			<Expenses items={expenses} />
		</>
	);
};

export default ExpenseScreen;
