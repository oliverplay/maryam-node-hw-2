// Import the 'app' module from a file named 'app'
const app = require("./app");

// Start the server and listen on port 3000
app.listen(3000, () => {
  // Display a message when the server is running
  console.log("Server is running. Use our API on port: 3000");
});
