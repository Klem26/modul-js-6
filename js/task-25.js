const getUserWithEmail = (users, email) => {
  const userEmail =  users. find((user) => user.email === email);
  return userEmail
};