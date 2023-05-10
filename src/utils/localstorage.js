export const getStoredUsers = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : [];
};

export const setStoredUsers = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeStoredUsers = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('users');
};

export const getActiveUserId = () => {
  const activeUser = localStorage.getItem('activeUser');
  return activeUser ? JSON.parse(activeUser).id : null;
};
