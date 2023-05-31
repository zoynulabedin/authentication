

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { loggOut } from "./userApi";
import { getAllusersdata } from "./userSlice";

const Profile = () => {

	const dispatch = useDispatch();
	const {users} = useSelector(getAllusersdata);

	const handleUserLoggout = (e) => {
		e.preventDefault();
		dispatch(loggOut());
	};




	return (
		<div className="profile-body">
			<div className="profile-wraper">
				<div className="profile-info">
					<div className="user info">
						<img src={avatar} alt="" />
						{users?.name && <h3>{users?.name}</h3>}
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
							{users?.name && <h2>{users?.name}</h2>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
