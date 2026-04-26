// Refactor note: moved request page heading UI logic from js/ui/requestPage.js
// This file exists to isolate request-page specific UI updates.
export function initRequestPage() {
  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");

  const serviceHeading = document.getElementById("selectedService");

  // Guard clause so this module runs only where the heading exists.
  if (!serviceHeading) {
    return;
  }

  if (service) {
    serviceHeading.textContent = `Selected Service: ${service}`;
  } else {
    serviceHeading.textContent = "Selected Service: Not specified";
  }
}
