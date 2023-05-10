export const getStoredUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const setStoredUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getActiveUserId = () => {
  const activeUser = localStorage.getItem('activeUser');
  return activeUser ? JSON.parse(activeUser).id : null;
};
