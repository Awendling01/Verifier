import React, { useState } from "react";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const App = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [successVisible, setSuccessVisible] = useState<boolean>(false);
	const [failureVisible, setFailureVisible] = useState<boolean>(false);

	const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.currentTarget.value);
	};
	const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const showSuccess = () => {
		setSuccessVisible(true);
	};
	const hideSuccess = () => {
		setSuccessVisible(false);
	};
	const showFailure = () => {
		setFailureVisible(true);
	};
	const hideFailure = () => {
		setFailureVisible(false);
	};

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const emailIsValid = emailRegex.test(username);
		const passwordIsValid = passwordRegex.test(password);
		if (emailIsValid && passwordIsValid) {
			showSuccess();
		} else {
			showFailure();
		}
	};

	return (
		<form>
			{successVisible ? (
				<div>
					Success!<button onClick={hideSuccess}>Close</button>
				</div>
			) : null}
			{failureVisible ? (
				<div>
					NOPE!<button onClick={hideFailure}>Close</button>
				</div>
			) : null}
			<input
				type="text"
				value={username}
				placeholder="username"
				onChange={changeUsername}
			/>
			<input
				type="password"
				value={password}
				placeholder="password"
				onChange={changePassword}
			/>
			<button type="submit" onClick={onSubmit}>
				submit
			</button>
		</form>
	);
};

export default App;
