// ================= GET SERVICE FROM URL =================
const params = new URLSearchParams(window.location.search);
const service = params.get("service");

// ================= SELECT H2 =================
const serviceHeading = document.getElementById("selectedService"); // FIXED ID MATCH

// ================= UPDATE UI =================
if (serviceHeading) {
  // safety check
  if (service) {
    serviceHeading.textContent = `Selected Service: ${service}`;
  } else {
    serviceHeading.textContent = "Selected Service: Not specified";
  }
}

console.log(serviceHeading);
