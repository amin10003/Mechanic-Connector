import { load, save } from "./storage.js";

const SEEKERS_KEY = "serviceSeekers";
const PROVIDERS_KEY = "serviceProviders";
const LEGACY_SEEKERS_KEY = "seekers";
const LEGACY_PROVIDERS_KEY = "providers";

function getKeyByRole(role) {
  return role === "provider" ? PROVIDERS_KEY : SEEKERS_KEY;
}

function getLegacyKeyByRole(role) {
  return role === "provider" ? LEGACY_PROVIDERS_KEY : LEGACY_SEEKERS_KEY;
}

// export function saveUser(role, user) {
//   save(getKeyByRole(role), user);
// }

export function saveUser(role, user) {
  const key = getKeyByRole(role);

  // Load existing users
  const users = load(key) || [];

  // Ensure it's an array (safety)
  if (!Array.isArray(users)) {
    console.warn("Corrupted data, resetting to array");
    save(key, [user]);
    return;
  }

  // Add new user
  users.push(user);

  // Save back
  save(key, users);
}

// export function loadUser(role) {
//   return load(getKeyByRole(role)) || load(getLegacyKeyByRole(role));
// }

export function loadUser(role) {
  const key = getKeyByRole(role);
  const legacyKey = getLegacyKeyByRole(role);

  const data = load(key);

  if (data && data.length > 0) {
    return data;
  }

  return load(legacyKey) || [];
}
