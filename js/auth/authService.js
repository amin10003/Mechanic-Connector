import { loadUser, saveUser } from "../storage/userRepository.js";
import { showMessage } from "../ui/message.js";

function validatePassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    showMessage("Passwords do not match");
    return false;
  }

  return true;
}

export function registerUser(role, user, confirmPassword) {
  if (!validatePassword(user.password, confirmPassword)) {
    return false;
  }

  const normalizedUser = {
    ...user,
    id: user.id || crypto.randomUUID(),
    location: user.location || user.address || "",
  };

  // ================= PREVENT DUPLICATE USERS =================
  const users = loadUser(role);
  const exists = users.find((u) => u.email === user.email);

  if (exists) {
    showMessage("User already exists");
    return false;
  }

  saveUser(role, normalizedUser);
  showMessage("Registration successful");
  return true;
}

export function loginUser(role, credentials) {
  // const savedUser = loadUser(role);
  const users = loadUser(role);
  // if (!savedUser) {
  //   showMessage("No user found. Please register first.");
  //   return false;
  // }
  if (!users || users.length === 0) {
    showMessage("No user found. Please register first.");
    return false;
  }

  // FIND matching user (IMPORTANT FIX)
  const user = users.find(
    (u) => u.email === credentials.email && u.password === credentials.password,
  );

  // if (
  //   credentials.email !== savedUser.email ||
  //   credentials.password !== savedUser.password
  // ) {
  //   showMessage("Invalid credentials");
  //   return false;
  // }

  // If no match found
  if (!user) {
    showMessage("Invalid credentials", "error");
    return false;
  }

  showMessage("Login successful", "success");
  return true;
}
