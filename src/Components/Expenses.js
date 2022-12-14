import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
	// Output each items in object using props and index
	const [year, setYear] = useState("2021");
	const filterChangeHandler = (selectedYear) => {
		setYear(selectedYear);
	};
	return (
		<>
			<Card className='expenses'>
				<ExpensesFilter
					selected={year}
					filterChangeHandler={filterChangeHandler}
				/>
				{props.items.map((expense, i) => (
					<ExpenseItem
						// key={i}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
				{/* <ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>

				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>

				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}
				/> */}
			</Card>
		</>
	);
};

export default Expenses;
