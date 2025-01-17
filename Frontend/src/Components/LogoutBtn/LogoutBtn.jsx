import React, {useState} from "react";
import {resetUser} from "../../states/UserState/UserState";
import {useDispatch, useSelector} from "react-redux";
import {Avatar} from "@mui/material";

const LogoutBtn = () => {
	const [clicked, setClicked] = useState(false);

	const user = useSelector((state) => state.UserState);
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(resetUser());
	};

	return (
		<div style={{display: "flex", alignItems: "center", position: "relative", height: "40px"}}>
			<Avatar onClick={() => setClicked(!clicked)} style={{cursor: "pointer"}}/>
			<p style={{marginLeft: "10px", color: "white"}}>{user.user.name}</p>
			{clicked && (
				<button
					onClick={clickHandler}
					style={{
						background: "none",
						fontSize: "15px",
						marginLeft: "5px",
						position: "absolute",
						left: "0",
						top: "50px",
						border: "none",
						backgroundColor: "#fff",
						borderRadius: "8px",
						padding: "8px 15px",
						color: "black",
                        cursor: "pointer"
					}}>
					Logout
				</button>
			)}
		</div>
	);
};

export default LogoutBtn;
