
// ================= MESSAGE DISPLAY FUNCTION =================
export function showMessage(message, type = "success") {
  const messageBox = document.getElementById("formMessage");

  if (!messageBox) return;

  messageBox.textContent = message;

  // Reset styles
  messageBox.className = "p-3 rounded-lg text-center font-semibold";

  // Apply type styles
  if (type === "error") {
    messageBox.classList.add("bg-red-100", "text-red-700");
  } else if (type === "warning") {
    messageBox.classList.add("bg-yellow-100", "text-yellow-700");
  } else {
    messageBox.classList.add("bg-green-100", "text-green-700");
  }

  messageBox.classList.remove("hidden");

  // Auto-hide after 3 seconds
  setTimeout(() => {
    messageBox.classList.add("hidden");
  }, 4000);
}