console.log("JS loaded");

const registerAnchor = document.getElementById("RegisterAnchor");

console.log(registerAnchor)
const loginAnchor = document.getElementById("logAnchor");

const registerSection = document.getElementById("registrationSection");
console.log(registerSection);
const loginSection = document.getElementById("ServiceloginSection");

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

const registrationForm = document.getElementById("ServiceRegister");
const loginForm = document.getElementById("logInForm");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("Fullname").value;
  const emailInput = document.getElementById("email").value;
  const passInput = document.getElementById("password").value;
  const conPass = document.getElementById("Confirmpassword").value;
  const garageInput = document.getElementById("garage").value;
  const locationInput = document.getElementById("location").value;
  const serviceInput = document.getElementById("services").value;

  // ✅ Check password match
  if (passInput !== conPass) {
    alert("Passwords do not match");
    return;
  }

  // ✅ Create object
  const provider = {
    name: nameInput,
    email: emailInput,
    password: passInput,
    garage: garageInput,
    location: locationInput,
    service: serviceInput,
  };

  console.log(provider);

  // ✅ Save to localStorage

  localStorage.setItem("providers", JSON.stringify(provider));

  console.log("Saved:", provider);

  alert("Registration successful");

  //✅ Redirect (optional)

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

  const getSavedProvider = localStorage.getItem("providers");

  if (!getSavedProvider) {
    alert("No user found. Please register first.");
    return;
  }

  const savedProviderData = JSON.parse(getSavedProvider);

  console.log("LOGIN:", loginProvider);
  console.log("SAVED:", savedProviderData);

  // ✅ FIXED LOGIC
  if (
    loginProvider.email !== savedProviderData.email ||
    loginProvider.password !== savedProviderData.password
  ) {
    alert("Invalid credentials");
    return;
  }

  console.log("email match:", loginProvider.email === savedProviderData.email);
  console.log(
    "password match:",
    loginProvider.password === savedProviderData.password,
  );
  alert("Login successful");

  window.location.href = "/html/serviceProvider/dashboard.html";
});
