import { createBrowserRouter } from "react-router-dom";


import Changepassword from "../features/User/ChangePassword";
import ChangePhoto from "../features/User/ChangePhoto";
import Profile from "../features/User/Profile";
import Adduser from "../features/User/Adduser";
import Login from "../features/User/Login";
import User from "../features/User/User";


const publicRouter = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Adduser />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/change-password",
		element: <Changepassword />,
	},
	{
		path: "/change-photo",
		element: <ChangePhoto />,
	},
	{
		path: "/",
		element: <User />,
	},
]);

export default publicRouter;
