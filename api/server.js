const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoDBConnection = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");

// environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

/**
 * set middleware
 */

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
// error handler
app.use(errorHandler);

// server listening

app.listen(PORT, () => {
	mongoDBConnection();
	console.log(`server listening on port ${PORT}`.bgGreen.bold);
});
