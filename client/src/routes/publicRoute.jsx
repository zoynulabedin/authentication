import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";

import Profile from "../components/Profile/Profile";
import Changepassword from "../components/Profile/ChangePassword";
import ChangePhoto from "../components/Profile/ChangePhoto";
import User from "../features/User/User";
import Adduser from "../features/User/Adduser";


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
