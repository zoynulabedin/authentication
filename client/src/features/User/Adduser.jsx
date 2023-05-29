import { useState } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RegisterImg from "../../assets/images/02.jpg";
import { createNewUser } from "./userApi";

const Adduser = () => {
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
	});

	const dispatch = useDispatch();
	// handle input changes
	const handleInptuChange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmitRegister = (e) => {
		e.preventDefault();
		dispatch(createNewUser(input));
	};

	return (
		<>
			<div className="auth-body">
				<div className="auth-wraper">
					<div className="auth-featured">
						<img src={RegisterImg} alt="" />
					</div>
					<div className="auth-form">
						<h2>Sign Up</h2>
						<div className="form-wraper">
							<form onSubmit={handleSubmitRegister}>
								<div className="form-group">
									<label htmlFor="">Name</label>
									<input
										type="text"
										value={input.name}
										name="name"
										onChange={handleInptuChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="">Email</label>
									<input
										type="text"
										value={input.email}
										name="email"
										onChange={handleInptuChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="">Password</label>
									<input
										type="password"
										value={input.password}
										name="password"
										onChange={handleInptuChange}
									/>
								</div>
								<div className="form-group">
									<button type="submit">Create an account</button>
								</div>
							</form>
						</div>
						<div className="utility">
							<Link to="#">Forgot password</Link>
							<Link to="/login">Log In now</Link>
						</div>
						<div className="social-login">
							<Link to="#">
								<BsFacebook />
							</Link>
							<Link to="#">
								<BsGoogle />
							</Link>
							<Link to="#">
								<BsGithub />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Adduser;
