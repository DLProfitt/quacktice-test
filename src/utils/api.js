// src/utils/api.js
const API_URL = "http://localhost:8088"; // Replace with your json-server URL

export const registerUser = async (user) => {
  return fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
}

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/users?email=${email}`);

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const users = await response.json();
  const user = users.find((user) => user.email === email && user.password_hash === password);

  if (!user) {
    throw new Error('Invalid email or password');
  }

  return user;
}