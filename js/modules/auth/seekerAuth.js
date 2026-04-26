// Refactor note: moved seeker authentication code from js/models/seekerLog.js
// This file exists to keep registration/login logic isolated by responsibility.
export function initSeekerAuth() {
  const registerAnchor = document.getElementById("registerAnchor");
  const loginAnchor = document.getElementById("loginAnchor");
  const CustomerSection = document.getElementById("CustomerSection");
  const loginCustomerSection = document.getElementById("loginCustomerSection");
  const CustomerRegister = document.getElementById("CustomerRegister");
  const loginForm = document.getElementById("logInForm");

  // Guard clause so this module runs only on the seeker auth page.
  if (
    !registerAnchor ||
    !loginAnchor ||
    !CustomerSection ||
    !loginCustomerSection ||
    !CustomerRegister ||
    !loginForm
  ) {
    return;
  }

  console.log("JS loaded");

  registerAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked signup");

    CustomerSection.classList.remove("hidden");
    loginCustomerSection.classList.add("hidden");
  });

  loginAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked login");

    CustomerSection.classList.add("hidden");
    loginCustomerSection.classList.remove("hidden");
  });

  CustomerRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("Fullname").value;
    const emailInput = document.getElementById("email").value;
    const passInput = document.getElementById("password").value;
    const conPass = document.getElementById("Confirmpassword").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const defaultyAddress = document.getElementById("defaultyAddress").value;
    const serviceInput = document.getElementById("services").value;

    if (passInput !== conPass) {
      alert("Passwords do not match");
      return;
    }

    const seeker = {
      name: nameInput,
      email: emailInput,
      password: passInput,
      phone: phoneNumber,
      address: defaultyAddress,
      service: serviceInput,
    };

    localStorage.setItem("seekers", JSON.stringify(seeker));

    alert("Registration successful");

    window.location.href = "/html/serviceSeeker/dashboard.html";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const logEmail = document.getElementById("logEmail").value;
    const logPass = document.getElementById("logPassword").value;

    const loginseeker = {
      email: logEmail,
      password: logPass,
    };

    const getSavedseeker = localStorage.getItem("seekers");

    if (!getSavedseeker) {
      alert("No user found. Please register first.");
      return;
    }

    const savedseekerData = JSON.parse(getSavedseeker);

    console.log("LOGIN:", loginseeker);
    console.log("SAVED:", savedseekerData);

    if (
      loginseeker.email !== savedseekerData.email ||
      loginseeker.password !== savedseekerData.password
    ) {
      alert("Invalid credentials");
      return;
    }

    alert("Login successful");

    window.location.href = "/html/serviceSeeker/dashboard.html";
  });
}
