import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import "toastr";
import "./App.css";
import "./assets/style.css";
import publicRouter from "./routes/publicRoute";

function App() {
	return (
		<>
			<RouterProvider router={publicRouter} />
		</>
	);
}

export default App;
