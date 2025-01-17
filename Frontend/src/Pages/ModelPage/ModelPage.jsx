import "./ModelPage.css";
import ModelNavLinks from "../../Components/ModelNavLinks/ModelNavLinks";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Avatar} from "@mui/material";
import { resetUser } from "../../states/UserState/UserState";
import { useEffect } from "react";
import LogoutBtn from "../../Components/LogoutBtn/LogoutBtn";

export const ModelPage = () => {
	const user = useSelector((state) => state.UserState);
	
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(resetUser());
	};
	const navigate = useNavigate()
	useEffect(() => {
		if (!user.userActive) {
			navigate("/")
		}
	}, [user])

	return (
		<div className="model_page">
			<div className="model_nav">
				<div className="model_nav_main">
					<div className="model_nav_text">
						<p>Hate Speech</p>
						<p>Detection</p>
					</div>
					{user.userActive && (
						<LogoutBtn />
					)}
				</div>
				<ModelNavLinks />
			</div>
			<div className="model_main">
				<Outlet />
			</div>
		</div>
	);
};
