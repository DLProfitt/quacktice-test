// Import the necessary hooks from the React library
import { createContext, useContext, useState } from "react";

// Create an AuthContext using the createContext() function
const AuthContext = createContext();

// Define a custom hook named useAuth that returns the current context value
// This custom hook will be used by components to access the authentication data and methods
export const useAuth = () => {
  return useContext(AuthContext);
};

// Define an AuthProvider component that will be used to wrap the application and provide the authentication context
export const AuthProvider = ({ children }) => {
  // Initialize the user state with a null value, which represents no user being logged in
  const [user, setUser] = useState(null);

  // Define a login function that takes userData as an argument and updates the user state with the provided data
  const login = (userData) => {
    setUser(userData);
  };

  // Define a logout function that resets the user state to null, representing no user being logged in
  const logout = () => {
    setUser(null);
  };

  // Create an object named value that holds the current user state and the login and logout functions
  // This object will be provided as the context value
  const value = {
    user,
    login,
    logout,
  };

  // Return the AuthContext.Provider component with the value object as its value prop
  // The children prop is passed down so that the AuthProvider can wrap around the entire application
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};