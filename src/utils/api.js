// src/utils/api.js
const API_URL = "http://localhost:3001"; // Replace with your json-server URL

export const registerUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/users?email=${email}`);

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const users = await response.json();
    const user = users.find((user) => user.email === email && atob(user.password_hash) === password);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
