// Require necessary modules
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// Import the 'contactsRouter' from a file named 'contacts'
const contactsRouter = require("./routes/api/contacts");

// Create an instance of the Express application
const app = express();

// Determine the format for the logger based on the environment
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// Middleware: Log HTTP requests using the 'morgan' logger
app.use(logger(formatsLogger));

// Middleware: Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware: Parse JSON request bodies
app.use(express.json());

// Route handling: Use the 'contactsRouter' for requests starting with '/api/contacts'
app.use("/api/contacts", contactsRouter);

// Error handling: Handle requests that do not match any defined routes with a 404 Not Found response
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// Error handling: Handle server errors with a 500 Internal Server Error response and provide the error message
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Export the 'app' module for use in other parts of your application
module.exports = app;
