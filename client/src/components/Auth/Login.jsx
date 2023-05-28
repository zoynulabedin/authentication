
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

import { Link } from "react-router-dom";
import loginImg from "../../assets/images/01.jpg";

const Login = () => {




	return (
		<>
			<div className="auth-body">
				<div className="auth-wraper">
					<div className="auth-featured">
						<img src={loginImg} alt="" />
					</div>
					<div className="auth-form">
						<h2>Sign In</h2>
						<div className="form-wraper">
							<form >
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										id="email"
										value=""
										name="email"
										onChange=""
										type="text"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="pass">Password</label>
									<input
										id="pass"
										value=""
										name="password"
										onChange=""
										type="password"
									/>
								</div>
								<div className="form-group">
									<button type="submit">Log In</button>
								</div>
							</form>
						</div>
						<div className="utility">
							<Link to="#">Forgot password</Link>
							<Link to="/register">Create an account</Link>
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

export default Login;
