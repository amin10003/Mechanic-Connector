import { loginUser, registerUser } from "./authService.js";

export function initProviderAuth() {
  const registerAnchor = document.getElementById("RegisterAnchor");
  const loginAnchor = document.getElementById("logAnchor");
  const registerSection = document.getElementById("registrationSection");
  const loginSection = document.getElementById("ServiceloginSection");
  const registrationForm = document.getElementById("ServiceRegister");
  const loginForm = document.getElementById("logInForm");

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

  registerAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    registerSection.classList.remove("hidden");
    loginSection.classList.add("hidden");
  });

  loginAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    registerSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
  });

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
      name: document.getElementById("Fullname").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      garage: document.getElementById("garage").value,
      location: document.getElementById("location").value,
      serviceType: document.getElementById("services").value,
    };
    const confirmPassword = document.getElementById("Confirmpassword").value;

    const registered = registerUser("provider", user, confirmPassword);
    if (registered) {
      window.location.href = "/html/serviceProvider/dashboard.html";
    }
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const credentials = {
      email: document.getElementById("logEmail").value,
      password: document.getElementById("logPassword").value,
    };

    const authenticated = loginUser("provider", credentials);
    if (authenticated) {
      window.location.href = "/html/serviceProvider/dashboard.html";
    }
  });
}
