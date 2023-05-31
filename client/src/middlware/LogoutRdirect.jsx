import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getAllusersdata } from "../features/User/userSlice";

const LogoutRdirect = () => {

	const { loginState } = useSelector(getAllusersdata);
	return loginState ? <Navigate to="/profile" /> : <Outlet />;
};

export default LogoutRdirect;
