
import { setStoredUsers } from "./localstorage";

const API_URL = 'http://localhost:8088';

export const registerUser = async (user) => {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/users?email=${email}`);

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const users = await response.json();
  const user = users.find(
    (user) => user.email === email && user.password_hash === password
  );

  if (!user) {
    throw new Error('Invalid email or password');
  }

  setStoredUsers(user);
  return user;
};

export const updateUser = async (id, updatedUser) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  });

  if (!response.ok) {
    throw new Error('Error updating user');
  }

  return await response.json();
};
