export function authGet(url) {
  return fetch(url, {
    credentials: 'include',
  });
}

export function authPost(url, data) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
  })
}
