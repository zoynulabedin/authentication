import { createBrowserRouter } from "react-router-dom";


import Adduser from "../features/User/Adduser";
import Login from "../features/User/Login";
import Profile from "../features/User/Profile";
import User from "../features/User/User";
import LoginRedirect from "../middlware/LoginRedirect";
import LogoutRdirect from "../middlware/LogoutRdirect";
const publicRouter = createBrowserRouter([
	{
		element: <LoginRedirect />,
		children: [
			{
				path: "/profile",
				element: <Profile />,
			},
			
		],
	},
	{
		element: <LogoutRdirect />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Adduser />,
			},
			{
				path: "/",
				element: <User />,
			},
		],
	},
]);

export default publicRouter;
