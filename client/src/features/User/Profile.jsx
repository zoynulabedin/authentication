
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { loggOut } from "./userApi";

const Profile = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleUserLoggout = (e) => {
		e.preventDefault();
		dispatch(loggOut()).then(() => {
		navigate("/login")
		})
	};



	return (
		<div className="profile-body">
			<div className="profile-wraper">
				<div className="profile-info">
					<div className="user info">
						<img src={avatar} alt="" />
						<h3>zoynul</h3>
					</div>

					<div className="user-menu">
						<ul>
							<li className="active">
								<Link to="/">
									<i className="fa fa-user-md"></i> Profile
								</Link>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-edit"></i> Edit
								</a>
							</li>
							<li>
								<Link to="/change-password">
									<i className="fa fa-unlock-alt"></i> Change Password
								</Link>
							</li>
							<li>
								<Link to="/change-photo">
									<i className="fa fa-camera"></i> Profile Photo
								</Link>
							</li>
							<li>
								<a href="#" onClick={handleUserLoggout}>
									<i className="fa fa-sign-out"></i> Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="profile-box">
					<div className="profile-details">
						<div className="profile-photo">
							<img src={avatar} alt="" />
							<h2>zoynul</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
