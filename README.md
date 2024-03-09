# x-login-react
X/Twitter User login authentication / ReactJs

# Node.js Express Authentication Server

This README provides an overview of a Node.js Express server designed for handling authentication, with session management and MongoDB as a database for storing user information. It showcases integration with Passport.js for authentication strategies and cookie sessions for session management.

## Features

- **Express Server**: Utilizes Express.js for the server framework, enabling efficient handling of HTTP requests.
- **MongoDB Integration**: Connects to MongoDB using Mongoose for storing and managing user data.
- **Passport.js Authentication**: Implements Passport.js for handling user authentication.
- **Cookie Session Management**: Uses cookie sessions to manage user sessions securely.
- **CORS Enabled**: Configures Cross-Origin Resource Sharing (CORS) to allow requests from specified origins.
- **Authentication Routes**: Includes a set of routes under `/auth` for handling authentication processes.

## Dependencies

- `express`: Web framework for Node.js.
- `cookie-session`: Middleware for session management using cookies.
- `passport`: Middleware for authenticating users.
- `express-session`: Session middleware for Express.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `cors`: Middleware to enable CORS with various options.
- `cookie-parser`: Middleware to parse cookie header and populate `req.cookies` with an object keyed by cookie names.

## Configuration

Before running the server, ensure you have the following configurations set in `./config/keys.js`:

- `MONGODB_URI`: Your MongoDB connection string.
- `COOKIE_KEY`: A secret key used to sign the session cookie.

## Usage

To start the server, run the following command in your terminal:

```bash
server/node index.js


# HomePage Component Documentation

The `HomePage` component is a React component designed to display a user's homepage once they are authenticated. It showcases user-specific information fetched from a backend server.

## Features

- Dynamic user authentication check.
- Displays personalized user information upon successful authentication.
- Fetches user data from a specified endpoint (`http://localhost:4000/`) with credentials included for session handling.

## Component Structure

- **Header**: A component imported from `./Header` that may contain navigation and branding.
- **PropTypes**: Defines the types of props expected to be passed into the `HomePage` component, ensuring the integrity of user data.
- **State Management**: Manages state for user data, authentication status, and error handling.

### State Variables

- `user`: An object holding user information such as name, profile image URL, Twitter ID, screen name, Ethereum address, and a unique identifier.
- `error`: Captures and displays any errors encountered during the authentication process or data fetch.
- `authenticated`: A boolean indicating the user's authentication status.

### Lifecycle Methods

- `componentDidMount`: Used to fetch user data from the server upon component mounting. It handles user authentication and updates the component's state with user data or error information accordingly.

### Rendering

- Conditionally renders content based on the user's authentication status.
- Upon successful authentication, displays:
  - A personalized welcome message.
  - User's Twitter ID, screen name, profile image URL, and Ethereum address.

### Utility Functions

- `_handleNotAuthenticated`: A method to update the state to reflect that the user is not authenticated.

## Usage

To utilize the `HomePage` component, ensure it is properly imported into your application. It requires a backend endpoint to fetch user data and handle authentication.

## Styling

Styling can be customized as per requirement. This documentation does not cover styling specifics.

## Dependencies

- React and PropTypes for component construction and prop type validation.
- An external `Header` component for page navigation and layout (not detailed here).

## Security Notes

- The component includes credentials in the fetch request. Ensure your application handles session data securely.
- Always sanitize and validate user data to prevent security vulnerabilities.

For further customization and functionality, consider extending the component to suit your application's specific needs.
