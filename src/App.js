import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import About from "./Pages/About";
import ExpenseScreen from "./Pages/ExpenseScreen";
import Home from "./Pages/Home";

function App(props) {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/about'
					state={{ data: props.people }}
					element={<About />}
				/>
				<Route path='/expense-screen' element={<ExpenseScreen />} />
			</Routes>
		</>
	);
}

export default App;
