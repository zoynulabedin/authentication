import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Registration from "../components/Auth/Registration";
import Profile from "../components/Profile/Profile";
import Changepassword from "../components/Profile/ChangePassword";
import ChangePhoto from "../components/Profile/ChangePhoto";


const publicRouter = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Registration />,
	},
	{
		path: "/",
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
]);

export default publicRouter;
