const BASE_URL = 'http://rstinder.com/clone-tinder-api';
//const BASE_URL = 'http://localhost:2249/clone-tinder-api';

// proxy list to solve CORS error
// https://cors-anywhere.herokuapp.com/
// https://thingproxy.freeboard.io/fetch/

export const addUser = async (data) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const login = async (data) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  const [user = {}] = await response.json() || [];
  const { password, ...userAuth } = user;
  localStorage.setItem('clone-tinder-user', userAuth.id ? JSON.stringify(userAuth) : null);
  return user;
};

export const logout = () => {
  localStorage.setItem('clone-tinder-user', null);
};

export const updateUser = async (data, id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  const [user = {}] = await response.json() || [];
  const { password, ...userAuth } = user;
  localStorage.setItem('clone-tinder-user', userAuth.id ? JSON.stringify(userAuth) : null);
  return user;
};

export const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const resp = await response.json();
  localStorage.setItem('clone-tinder-user', null);
  return resp;
};

export const addLike = async (data) => {
  const response = await fetch(`${BASE_URL}/users/like`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const getPairs = async (id) => {
  const response = await fetch(`${BASE_URL}/pairs/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

const getAuthorizedUser = () => JSON.parse(localStorage.getItem('clone-tinder-user'));
const currentUser = getAuthorizedUser();

const getAllUsers = async () => {
  const users = await getUsers();
  return users;
};

export const addLikesFromAllUsers = async () => {
  const allUsers = await getAllUsers();
  allUsers.forEach((user) => {
    if (user.gender_id !== currentUser.gender_id) {
      const data = { sender: user.id, recipient: currentUser.id, like: 'like' };
      addLike(data);
    }
  });
};

export const getWorksheets = async (id) => {
  const response = await fetch(`${BASE_URL}/worksheets/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });
  return response.json();
};

export const getPassions = async () => {
  const response = await fetch(`${BASE_URL}/passions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
