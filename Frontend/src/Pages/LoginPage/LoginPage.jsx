import {useState} from "react";
import "./LoginPage.css";
import {signin, signup} from "../../lib/api/authentication";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { addUser } from "../../states/UserState/UserState";

export const LoginPage = () => {
    const navigatie = useNavigate()
	const dispatch = useDispatch()

	const [login, setLogin] = useState(true);
	const [credetials, setCredentials] = useState({});

	const [error, setError] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const [loading, setLoading] = useState(false);

	const inputHandler = (field, value) => {
		setCredentials({...credetials, [field]: value});
	};

	const authToggler = (login) => {
        setCredentials({})
		setError(false);
		setErrMsg('')
		if (login) {
			setLogin(true);
		} else {
			setLogin(false);
		}
	};

	const signupHandler = async () => {
		try {
			setLoading(true);
			setErrMsg("");
			setError(false);
			const {name, email, password} = credetials;
			if (name && email && password) {
				const response = await signup(credetials);
				console.log(response);
				dispatch(addUser({user: response.data.user}))
                authToggler(true);
			} else {
				setError(true);
				setErrMsg("Field is empty!");
			}
			setLoading(false);
		} catch (err) {
			setError(true);
			setErrMsg(err.response.data.msg);
			setLoading(false);
		}
	};

	const signinHandler = async () => {
		try {
			setLoading(true);
			setErrMsg("");
			setError(false);
			const {email, password} = credetials;
			if (email && password) {
				const response = await signin(credetials);
				console.log(response)
				dispatch(addUser({user: response.data.user[0]}))
                navigatie('/model/text')
			} else {
				setError(true);
				setErrMsg("Field is empty!");
			}
			setLoading(false);
		} catch (err) {
			setError(true);
			setErrMsg(err.response.data.msg);
			setLoading(false);
		}
	};

	return (
		<div className={`container ${!login && "sign-up-mode"}`}>
			<div className="forms-container">
				<div className="sigin-signup">
					<div className="form-div sign-in-form">
						<h2 className="title">Sign In</h2>
						{error && <p>{errMsg}</p>}
						<div className="input-field">
							{/* <i className="fas fa-user"></i> */}
							<input type="text" placeholder="Email" onChange={(e) => inputHandler("email", e.target.value)} />
						</div>
						<div className="input-field">
							{/* <i className="fas fa-lock"></i> */}
							<input type="password" placeholder="Password" onChange={(e) => inputHandler("password", e.target.value)} />
						</div>
<<<<<<< HEAD
						<button className="btn solid" onClick={signinHandler}>
                            {loading ? "Loading..." : "Sign In"}
=======
						{/* <p className="forgot-password">Forgot Password</p> */}
						<button className="btn solid" onClick={signinHandler}>
                            {loading ? "Loading..." : "Sigan In"}
>>>>>>> 07b73f7 (new)
						</button>
					</div>

					<div className="form-div sign-up-form">
						<h2 className="title">Sign Up</h2>
						{error && <p>{errMsg}</p>}
						<div className="input-field">
							{/* <i className="fas fa-user"></i> */}
							<input type="text" placeholder="Name" onChange={(e) => inputHandler("name", e.target.value)} />
						</div>
						<div className="input-field">
							{/* <i className="fas fa-envelope"></i> */}
							<input type="text" placeholder="Email" onChange={(e) => inputHandler("email", e.target.value)} />
						</div>
						<div className="input-field">
							{/* <i className="fas fa-lock"></i> */}
							<input type="password" placeholder="Password" onChange={(e) => inputHandler("password", e.target.value)} />
						</div>
						<button className="btn solid" onClick={signupHandler}>
							{loading ? "Loading..." : "Sign Up"}
						</button>
					</div>
				</div>

				<div className="panels-container">
					<div className="panel left-panel">
						<div className="content">
							<h3>New here ?</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae facilis voluptas?</p>
							<button className="btn transparent" id="sign-up-btn" onClick={() => authToggler(false)}>
								Sign Up
							</button>
						</div>
						{/* <img src="img/undraw_maker_launch_re_rq81.svg" className="image" alt=""/> */}
					</div>

					<div className="panel right-panel">
						<div className="content">
							<h3>One of us ?</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae facilis voluptas?</p>
							<button className="btn transparent" id="sign-in-btn" onClick={() => authToggler(true)}>
								Sign In
							</button>
						</div>
						{/* <img src="img/undraw_remotely_-2-j6y.svg" className="image" alt=""/> */}
					</div>
				</div>
			</div>
		</div>
	);
};
