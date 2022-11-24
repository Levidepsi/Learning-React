import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
	const [title, setTItle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = (e) => {
		setTItle(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: title,
			amount: amount,
			date: new Date(date),
		};
		// console.log(expenseData);

		props.saveDate(expenseData);
		setTItle("");
		setAmount("");
		setDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>TItle</label>
					<input type='text' value={title} onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='text'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
						value={amount}
					/>
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-09'
						max='2022-12-11'
						onChange={dateChangeHandler}
						value={date}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default NewExpenseForm;
