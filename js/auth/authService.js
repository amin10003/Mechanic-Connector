import { loadUser, saveUser } from "../storage/userRepository.js";

function validatePassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}

export function registerUser(role, user, confirmPassword) {
  if (!validatePassword(user.password, confirmPassword)) {
    return false;
  }

  saveUser(role, user);
  alert("Registration successful");
  return true;
}

export function loginUser(role, credentials) {
  const savedUser = loadUser(role);

  if (!savedUser) {
    alert("No user found. Please register first.");
    return false;
  }

  if (
    credentials.email !== savedUser.email ||
    credentials.password !== savedUser.password
  ) {
    alert("Invalid credentials");
    return false;
  }

  alert("Login successful");
  return true;
}
