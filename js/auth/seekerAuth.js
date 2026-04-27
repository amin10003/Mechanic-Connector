import { loginUser, registerUser } from "./authService.js";

export function initSeekerAuth() {
  const registerAnchor = document.getElementById("registerAnchor");
  const loginAnchor = document.getElementById("loginAnchor");
  const seekerRegisterSection = document.getElementById("CustomerSection");
  const seekerLoginSection = document.getElementById("loginCustomerSection");
  const seekerRegisterForm = document.getElementById("CustomerRegister");
  const seekerLoginForm = document.getElementById("logInForm");

  if (
    !registerAnchor ||
    !loginAnchor ||
    !seekerRegisterSection ||
    !seekerLoginSection ||
    !seekerRegisterForm ||
    !seekerLoginForm
  ) {
    return;
  }

  registerAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    seekerRegisterSection.classList.remove("hidden");
    seekerLoginSection.classList.add("hidden");
  });

  loginAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    seekerRegisterSection.classList.add("hidden");
    seekerLoginSection.classList.remove("hidden");
  });

  seekerRegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
      name: document.getElementById("Fullname").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      phone: document.getElementById("phoneNumber").value,
      address: document.getElementById("defaultyAddress").value,
      accountType: document.getElementById("services").value,
    };
    const confirmPassword = document.getElementById("Confirmpassword").value;

    const registered = registerUser("seeker", user, confirmPassword);
    if (registered) {
      window.location.href = "/html/serviceSeeker/dashboard.html";
    }
  });

  seekerLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const credentials = {
      email: document.getElementById("logEmail").value,
      password: document.getElementById("logPassword").value,
    };

    const authenticated = loginUser("seeker", credentials);
    if (authenticated) {
      window.location.href = "/html/serviceSeeker/dashboard.html";
    }
  });
}
