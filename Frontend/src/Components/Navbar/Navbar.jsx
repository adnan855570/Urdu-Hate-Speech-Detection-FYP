import {Avatar} from "@mui/material";
import "./Navbar.css";
import {useDispatch, useSelector} from "react-redux";
import {resetUser} from "../../states/UserState/UserState";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import {Link} from "react-router-dom";

export const Navbar = () => {
	const user = useSelector((state) => state.UserState);

	return (
		<div className="navbar">
			<div className="navbar_sub">
				<Link to={'/'}>
					<p className="navbar_link">Home</p>
				</Link>
				<Link to={'/teachniques'}>
					<p className="navbar_link">Techniques</p>
				</Link>
				<Link to={"/models"}>
					<p className="navbar_link">Models</p>
				</Link>

				{user.userActive && <LogoutBtn />}
			</div>
		</div>
	);
};
