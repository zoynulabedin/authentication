import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "toastr";
import "./App.css";
import "./assets/style.css";
import { userLogin } from "./features/User/userApi";
import publicRouter from "./routes/publicRoute";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const token = Cookies.get("accessToken");
		dispatch(userLogin(token));
	}, [dispatch]);

	return (
		<>
			<RouterProvider router={publicRouter} />
		</>
	);
}

export default App;
