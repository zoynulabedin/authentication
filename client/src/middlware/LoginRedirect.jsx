import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getAllusersdata } from "../features/User/userSlice";


const LoginRedirect = () => {
   
const { loginState } = useSelector(getAllusersdata);
 return loginState ? <Outlet /> : Navigate("/login");

}

export default LoginRedirect;
