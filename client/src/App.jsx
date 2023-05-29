import "bootstrap/dist/css/bootstrap.min.css";
import cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "toastr";
import "./App.css";
import "./assets/style.css";
import publicRouter from "./routes/publicRoute";

function App() {

	const dispatch = useDispatch();
	useEffect(() => {
		const storedAccessToken = cookies.get("accessToken");
		if (storedAccessToken) {
			dispatch(storedAccessToken);
		}
	}, [dispatch]);
	console.log(cookies.get("accessToken"));
	return (
		<>
			<RouterProvider router={publicRouter} />
		</>
	);
}

export default App;
