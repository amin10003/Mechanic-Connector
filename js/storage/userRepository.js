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

export function saveUser(role, user) {
  save(getKeyByRole(role), user);
}

export function loadUser(role) {
  return load(getKeyByRole(role)) || load(getLegacyKeyByRole(role));
}
