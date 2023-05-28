import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

const Changepassword = () => {
	return (
		<div className="profile-body">
			<div className="profile-wraper">
				<div className="profile-info">
					<div className="user info">
						<img src={avatar} alt="" />
						<h3>Asraful Haque</h3>
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
								<a href="#">
									<i className="fa fa-sign-out"></i> Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="profile-box">
					<div className="box-content">
						<h2>Change Password</h2>

						<div className="form-wraper">
							<form action="">
								<div className="form-group">
									<label htmlFor="">Old Password</label>
									<input type="text" />
								</div>
								<div className="form-group">
									<label htmlFor="">New Password</label>
									<input type="password" />
								</div>

								<div className="form-group">
									<label htmlFor="">Confirm Password</label>
									<input type="password" />
								</div>
								<div className="form-group">
									<button>Update</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Changepassword;
