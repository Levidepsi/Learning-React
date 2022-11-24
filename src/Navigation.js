import React from "react";
import { Link } from "react-router-dom";
import "./Pages/navigation.css";
import Card from "./UI/Card";

const Navigation = () => {
	return (
		<Card className='navigation flex max-w-screen-2xl py-10 shadow-white'>
			<ul className='flex'>
				<li className='px-2 '>
					<Link to='/'>Home</Link>
				</li>
				<li className='px-2'>
					<Link to='/about'>About</Link>
				</li>
				<li className='px-2'>
					<Link to='/expense-screen'>Expense</Link>
				</li>
			</ul>
		</Card>
	);
};

export default Navigation;
