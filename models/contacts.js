// Require necessary modules
const fs = require("fs/promises");
const path = require("path");

// Define the path to the JSON file that stores contact data
const contactsPath = path.join(__dirname, "contacts.json");

// Function to list all contacts
const listContacts = async () => {
  try {
    // Read the JSON data from the 'contacts.json' file
    const data = await fs.readFile(contactsPath, "utf-8");
    // Parse the data as JSON and return it
    return JSON.parse(data);
  } catch (error) {
    // If there's an error reading the file, return the error
    return error;
  }
};

// Function to get a contact by its ID
const getContactById = async (contactId) => {
  // Implementation for getting a contact by ID goes here
};

// Function to remove a contact by its ID
const removeContact = async (contactId) => {
  // Implementation for removing a contact by ID goes here
};

// Function to add a new contact
const addContact = async (body) => {
  // Implementation for adding a new contact goes here
};

// Function to update a contact by its ID
const updateContact = async (contactId, body) => {
  // Implementation for updating a contact goes here
};

// Export the functions as an object, making them available for use in other parts of your application
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
