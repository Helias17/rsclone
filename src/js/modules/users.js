const BASE_URL = 'https://rsclone-tinder.glitch.me';

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
  console.log(resp.message);
  localStorage.setItem('clone-tinder-user', null);
};
