const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://rstinder.com/clone-tinder-api';

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

export const getWorksheets = async (id) => {
  const response = await fetch(`${BASE_URL}/worksheets/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
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
