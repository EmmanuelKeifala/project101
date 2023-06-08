/** @format */

import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/globals/Topbar";
import Sidebar from "./scenes/globals/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Birth from "./scenes/birth";
import Death from "./scenes/death";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import useApplicationsStore from "./store";
import LoginPage from "./scenes/Login";
import SignupPage from "./scenes/SignUp";
import ActivationPage from "./components/ActivationPage";
import Store from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import { loadUser } from "./redux/actions/user";
function App() {
	const setDataToStore = useApplicationsStore((state) => state.setApplications);

	useEffect(() => {
		fetch("http://localhost:3001/api/listings")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error retrieving listings");
				}
				return response.json();
			})
			.then((data) => {
				setDataToStore(data);
			})
			.catch((error) => {
				console.error("Error:", error.message);
			});

		Store.dispatch(loadUser());
	}, []);
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/sign-up" element={<SignupPage />} />
				<Route
					path="/activation/:activation_token"
					element={<ActivationPage />}
				/>
			</Routes>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</BrowserRouter>
	);
}

export default App;
