/** @format */

import { React, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Login = () => {
	const location = useLocation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const [rememberMeCheckbox, setRememberMeCheckbox] = useState();
	const [isOnline, setIsOnline] = useState(window.navigator.onLine);

	// const rememberMeCheckbox = document.getElementById("rememberMe");

	// Load saved login credentials from cookie or local storage

	useEffect(() => {
		if (location.pathname === "/login") {
			const savedCredentials = JSON.parse(
				localStorage.getItem("savedCredentials"),
			);
			if (savedCredentials) {
				setEmail(savedCredentials.username);
				setPassword(savedCredentials.password);
				setRememberMeCheckbox(true);
			}
		}
		function handleOnline() {
			setIsOnline(true);
		}

		function handleOffline() {
			setIsOnline(false);
		}

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isOnline) {
			toast.error("Please connect your Lan or check your wifi");
		}
		await axios
			.post(
				`${server}/user/login-user`,
				{
					email,
					password,
				},
				{ withCredentials: true },
			)
			.then((res) => {
				toast.success("Login Success!");
				navigate("/");
				window.location.reload(true);
			})
			.catch((err) => {
				toast.error(err?.response?.data?.message);
			});
		if (rememberMeCheckbox) {
			const savedCredentials = {
				username: email,
				password: password,
			};
			localStorage.setItem(
				"savedCredentials",
				JSON.stringify(savedCredentials),
			);
		} else {
			localStorage.removeItem("savedCredentials");
		}
	};
	return (
		<div className="m-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 login-pattern">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6  text-3xl text-center font-extrabold text-gray-900">
					Login to your account!
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow-lg shadow-gray-400 sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-900">
								Email Address
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="email"
									autoComplete="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
									placeholder="email"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-900">
								Password
							</label>
							<div className="mt-1 relative">
								<input
									type={visible ? "text" : "password"}
									name="password"
									autoComplete="current-password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
									placeholder="password"
								/>
								{visible ? (
									<AiOutlineEye
										size={25}
										className="absolute right-2 top-2 cursor-pointer"
										onClick={() => setVisible(false)}
									/>
								) : (
									<AiOutlineEyeInvisible
										size={25}
										className="absolute right-2 top-2 cursor-pointer"
										onClick={() => setVisible(true)}
									/>
								)}
							</div>
						</div>
						<div className={`${styles.normalFlex} justify-between`}>
							<div className={`${styles.normalFlex}`}>
								<input
									type="checkbox"
									name="rememberMe"
									value={rememberMeCheckbox}
									onChange={(e) => setRememberMeCheckbox(e.target.checked)}
									id="rememberMe"
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="rememberMe"
									className="ml-2 block text-sm text-gray-900">
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<a
									href=".forgot-password"
									className="font-medium text-blue-600 hover:text-blue-500 ">
									Forget Password
								</a>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#146C94] hover:bg-[#19A7CE]">
								Submit
							</button>
						</div>
						<div className={`${styles.normalFlex} w-full gap-3`}>
							<h4>Don't have an account </h4>
							<Link
								to="/sign-up"
								onClick={() => navigate("/sign-up")}
								className="text-blue-600">
								Sign Up
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
