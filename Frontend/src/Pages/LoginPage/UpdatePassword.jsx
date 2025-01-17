import React, {useState} from "react";
import "./LoginPage.css";
import {useSearchParams} from "react-router-dom";

export const UpdatePassword = () => {
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [params] = useSearchParams();

	console.log(params.get("user"));
	console.log(input);

	const clickHandler = async() => {
		
	}

	return (
		<div className={`container sign-up-mode}`}>
			<div className="forms-container">
				<div className="sigin-signup">
					<div className="form-div sign-in-form">
						<h2 className="title">Change Password</h2>
						{/* {error && <p>{errMsg}</p>} */}
						<div className="input-field">
							{/* <i className="fas fa-user"></i> */}
							<input type="text" placeholder="Password" onChange={(e) => setInput(e.target.value)} />
						</div>
						{/* <div className="input-field">
							<input type="password" placeholder="Confirm Password" />
						</div> */}
						<button className="btn solid" onClick={clickHandler}>Change</button>
					</div>
				</div>
				<div className="panels-container"></div>
			</div>
		</div>
	);
};
