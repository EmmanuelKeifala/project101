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
import { useSelector, useDispatch } from "react-redux";
import {
	fetchListingsRequest,
	fetchListingsSuccess,
	fetchListingsFailure,
} from "./actions";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
	const dispatch = useDispatch();
	const { listings, loading, error } = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchListingsRequest());

		fetch("http://localhost:3000/api/listings")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error retrieving listings");
				}
				return response.json();
			})
			.then((data) => {
				dispatch(fetchListingsSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchListingsFailure(error.message));
			});
	}, [dispatch]);
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<div className="app">
							<Sidebar isSidebar={isSidebar} />
							<main className="content">
								<Topbar setIsSidebar={setIsSidebar} />
								<Routes>
									<Route path="/" element={<Dashboard />} />
									<Route path="/team" element={<Team />} />
									<Route path="/birth" element={<Birth />} />
									<Route path="/death" element={<Death />} />
									<Route path="/invoices" element={<Invoices />} />
									<Route path="/form" element={<Form />} />
									<Route path="/bar" element={<Bar />} />
									<Route path="/pie" element={<Pie />} />
									<Route path="/line" element={<Line />} />
									<Route path="/faq" element={<FAQ />} />
									<Route path="/calendar" element={<Calendar />} />
									<Route path="/geography" element={<Geography />} />
								</Routes>
							</main>
						</div>
					</ThemeProvider>
				</ColorModeContext.Provider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
