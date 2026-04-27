import { listRequests, setRequestStatus } from "../services/requestService.js";

function getStatusClass(status) {
  if (status === "Pending") {
    return "bg-yellow-100 text-yellow-700";
  }
  if (status === "Accepted") {
    return "bg-blue-100 text-blue-700";
  }
  return "bg-green-100 text-green-700";
}

function getActionButtonLabel(status) {
  if (status === "Pending") {
    return "Accept";
  }
  if (status === "Accepted") {
    return "Complete";
  }
  return null;
}

function getNextStatus(status) {
  if (status === "Pending") {
    return "Accepted";
  }
  if (status === "Accepted") {
    return "Completed";
  }
  return "Completed";
}

export function initProviderTasksPage() {
  const tasksTable = document.querySelector("tbody");
  if (!tasksTable || !document.getElementById("tasksTableBody")) {
    return;
  }

  const requests = listRequests();

  if (requests.length === 0) {
    tasksTable.innerHTML =
      '<tr class="border-t"><td class="p-3" colspan="5">No service requests yet.</td></tr>';
    return;
  }

  tasksTable.innerHTML = requests
    .map((request) => {
      const actionLabel = getActionButtonLabel(request.status);
      return `
        <tr class="border-t">
          <td class="p-3">${request.numberPlate || "Unknown Customer"}</td>
          <td class="p-3">${request.serviceType || "General Service"}</td>
          <td class="p-3">${new Date(request.createdAt).toLocaleDateString()}</td>
          <td class="p-3">
            <span class="${getStatusClass(request.status)} px-3 py-1 rounded-full text-sm">
              ${request.status}
            </span>
          </td>
          <td class="p-3 text-center">
            ${
              actionLabel
                ? `<button data-request-id="${request.id}" data-next-status="${getNextStatus(request.status)}" class="bg-blue-500 text-white px-3 py-1 rounded">${actionLabel}</button>`
                : '<span class="text-gray-400">Done</span>'
            }
          </td>
        </tr>
      `;
    })
    .join("");

  tasksTable.querySelectorAll("button[data-request-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const requestId = button.dataset.requestId;
      const nextStatus = button.dataset.nextStatus;
      setRequestStatus(requestId, nextStatus);
      initProviderTasksPage();
    });
  });
}
