/** @format */

import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../src/styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
// import logo from "../../src/assets/logo1.png";
const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [district, setDistrict] = useState("");

	const [password, setPassword] = useState("");
	const [visible, setVisible] = useState(false);
	const [avatar, setAvatar] = useState(null);
	const [isOnline, setIsOnline] = useState(window.navigator.onLine);

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];

		setAvatar(file);
	};

	useEffect(() => {
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
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isOnline) {
			toast.error("Please connect your Lan or check your wifi");
		}
		const config = { headers: { "Content-Type": "multipart/form-data" } };

		const newForm = new FormData();

		newForm.append("file", avatar);
		newForm.append("name", name);
		newForm.append("email", email);
		newForm.append("password", password);

		axios
			.post(`${server}/user/create-user`, newForm, config)
			.then((res) => {
				toast.success(res.data.message);
				setName("");
				setPassword("");
				setEmail("");
				setAvatar(null);
				setDistrict("");
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	};
	return (
		<div className="m-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md ">
				{/* <img
					src={logo}
					alt="logo"
					className="w-[150px] h-[100px] object-contain align-middle flex justify-center rounded-full"
				/> */}
				<h2 className="mt-6  text-3xl text-center font-extrabold text-gray-900">
					Create your Account!
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow-lg shadow-gray-400 sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-900">
								Full Name
							</label>
							<div className="mt-1">
								<input
									type="name"
									name="name"
									autoComplete="name"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
									className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
									placeholder="eg. John Doe"
								/>
							</div>
						</div>
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
									placeholder="example@gmail.com"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-900">
								District
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="email"
									autoComplete="email"
									required
									value={district}
									onChange={(e) => setDistrict(e.target.value)}
									className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
									placeholder="example@gmail.com"
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
									<AiOutlineEyeInvisible
										size={25}
										className="absolute right-2 top-2 cursor-pointer"
										onClick={() => setVisible(false)}
									/>
								) : (
									<AiOutlineEye
										size={25}
										className="absolute right-2 top-2 cursor-pointer"
										onClick={() => setVisible(true)}
									/>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="avatar"
								className="block text-sm font-medium text-gray-700"></label>
							<div className="mt-2 flex items-center ">
								<span className="inline-block h-8 w-8 rounded-full overflow-hidden">
									{avatar ? (
										<img
											src={URL.createObjectURL(avatar)}
											alt="profile pic"
											className="h-full  w-full object-cover rounded-full"
										/>
									) : (
										<RxAvatar className="w-8 h-8" />
									)}
								</span>
								<label
									htmlFor="file-input"
									className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
									<span>Upload a file</span>
									<input
										type="file"
										name="avatar"
										id="file-input"
										accept="image/*"
										onChange={handleFileInputChange}
										className="sr-only"
									/>
								</label>
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
							<h4>Already have an Account </h4>
							<Link to="/login" className="text-blue-600">
								Sign In
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
