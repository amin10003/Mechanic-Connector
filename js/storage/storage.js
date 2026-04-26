export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data ? JSON.parse(data) : null;
}
