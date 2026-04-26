// Refactor note: moved provider authentication code from js/models/providerLog.js

import { load, save } from "../../storage/storage";

// This file exists to isolate provider auth flow from other page logic.
export function initProviderAuth() {
  const registerAnchor = document.getElementById("RegisterAnchor");
  const loginAnchor = document.getElementById("logAnchor");
  const registerSection = document.getElementById("registrationSection");
  const loginSection = document.getElementById("ServiceloginSection");
  const registrationForm = document.getElementById("ServiceRegister");
  const loginForm = document.getElementById("logInForm");

  // Guard clause so this module runs only on the provider auth page.
  if (
    !registerAnchor ||
    !loginAnchor ||
    !registerSection ||
    !loginSection ||
    !registrationForm ||
    !loginForm
  ) {
    return;
  }

  console.log("JS loaded");
  console.log(registerAnchor);
  console.log(registerSection);

  registerAnchor.addEventListener("click", (e) => {
    console.log("clicked Signup tag");
    registerSection.classList.remove("hidden");
    loginSection.classList.add("hidden");
    console.log(loginSection.classList);
  });

  loginAnchor.addEventListener("click", (e) => {
    console.log("clicked login tag");
    registerSection.classList.add("hidden");
    loginSection.classList.remove("hidden");

    console.log(loginSection.classList);
  });

  console.log("..................");

  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("Fullname").value;
    const emailInput = document.getElementById("email").value;
    const passInput = document.getElementById("password").value;
    const conPass = document.getElementById("Confirmpassword").value;
    const garageInput = document.getElementById("garage").value;
    const locationInput = document.getElementById("location").value;
    const serviceInput = document.getElementById("services").value;

    if (passInput !== conPass) {
      alert("Passwords do not match");
      return;
    }

    const provider = {
      name: nameInput,
      email: emailInput,
      password: passInput,
      garage: garageInput,
      location: locationInput,
      service: serviceInput,
    };

    console.log(provider);

    save("providers", provider);

    console.log("Saved:", provider);

    alert("Registration successful");

    window.location.href = "/html/serviceProvider/dashboard.html";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const logEmail = document.getElementById("logEmail").value;
    const logPass = document.getElementById("logPassword").value;

    const loginProvider = {
      email: logEmail,
      password: logPass,
    };

    const getSavedProvider = load("providers");

    if (!getSavedProvider) {
      alert("No user found. Please register first.");
      return;
    }

    const savedProviderData = getSavedProvider;

    console.log("LOGIN:", loginProvider);
    console.log("SAVED:", savedProviderData);

    if (
      loginProvider.email !== savedProviderData.email ||
      loginProvider.password !== savedProviderData.password
    ) {
      alert("Invalid credentials");
      return;
    }

    console.log(
      "email match:",
      loginProvider.email === savedProviderData.email,
    );
    console.log(
      "password match:",
      loginProvider.password === savedProviderData.password,
    );
    alert("Login successful");

    window.location.href = "/html/serviceProvider/dashboard.html";
  });
}
