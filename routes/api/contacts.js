// Require necessary modules
const express = require("express");

// Import the 'contactsData' module for working with contact data
const contactsData = require("../../models/contacts");

// Create an Express Router instance
const router = express.Router();

// Define a route to handle GET requests to the root path ("/api/contacts")
router.get("/", async (req, res, next) => {
  try {
    // Use the 'listContacts' method from 'contactsData' to fetch contacts
    const contacts = await contactsData.listContacts();

    // Respond with a JSON object containing a success status, HTTP status code 200, and the list of contacts
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    // If there's an error, pass it to the next middleware to handle
    next(error);
  }
});

// Export the router, making it available for use in other parts of your application
module.exports = router;
