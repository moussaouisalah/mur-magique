export async function getCurrentUser() {
  return fetch("http://localhost:3001/users/1").then((response) => {
    if (!response.ok) return null;
    return response.json();
  });
}

export async function editCurrentUser() {}

export async function doLogin() {}

export async function doRegister() {}

export async function logout() {}

export async function getFiles() {
  return fetch("http://localhost:3001/files").then((response) =>
    response.json()
  );
}

export async function uploadFiles() {}
