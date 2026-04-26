// Refactor note: moved request submit/storage logic from js/Services/requestService.js

import { load, save } from "../../storage/storage";

// This file exists to isolate service request data handling.
export function initRequestService() {
  const RequestForm = document.getElementById("RequestForm");

  // Guard clause so this module runs only on the request page.
  if (!RequestForm) {
    return;
  }

  console.log("Service Request Functionality");

  RequestForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const selectedService = params.get("service");

    const VehicleModel = document.getElementById("VehicleModel").value;
    const VehicleType = document.getElementById("VehicleType").value;
    const urgency = document.getElementById("Urgency").value;
    const NumberPlate = document.getElementById("NumberPlate").value;
    const location = document.getElementById("Location").value;
    const ProblemDescription =
      document.getElementById("problemDescription").value;
    const landmark = document.getElementById("Landmark").value;

    const requestInfo = {
      ServiceId: crypto.randomUUID(),
      serviceType: selectedService,
      VehicleModel,
      VehicleType,
      urgency,
      NumberPlate,
      location,
      ProblemDescription,
      landmark,
    };

    const existing = load("Request Details") || [];

    existing.push(requestInfo);

    save("Request Details", existing);
    RequestForm.reset();
  });

  getRequestInfo();
}

// Function name kept exactly the same as original code.
function getRequestInfo() {
  return load("Request Details");
}
