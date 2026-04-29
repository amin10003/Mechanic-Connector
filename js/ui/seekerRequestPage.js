import { submitRequest } from "../services/requestService.js";
import { showMessage } from "./message.js";

function setSelectedServiceHeading() {
  const heading = document.getElementById("selectedService");
  if (!heading) {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get("service");
  heading.textContent = selectedService
    ? `Selected Service: ${selectedService}`
    : "Selected Service: Not specified";

  return selectedService;
}

export function initSeekerRequestPage() {
  const requestForm = document.getElementById("RequestForm");
  const selectedService = setSelectedServiceHeading();

  if (!requestForm) {
    return;
  }

  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    submitRequest({
      serviceType: selectedService,
      vehicleModel: document.getElementById("VehicleModel").value,
      vehicleType: document.getElementById("VehicleType").value,
      urgency: document.getElementById("Urgency").value,
      numberPlate: document.getElementById("NumberPlate").value,
      location: document.getElementById("Location").value,
      problemDescription: document.getElementById("problemDescription").value,
      landmark: document.getElementById("Landmark").value,
    });

    requestForm.reset();
    showMessage("Service request submitted");
  });
}
