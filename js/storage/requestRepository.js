import { load, save } from "./storage.js";

const REQUESTS_KEY = "serviceRequests";
const LEGACY_REQUESTS_KEY = "Request Details";

export function getRequests() {
  return load(REQUESTS_KEY) || load(LEGACY_REQUESTS_KEY) || [];
}

// export function addRequest(request) {
//   const existingRequests = getRequests();
//   existingRequests.push(request);
//   save(REQUESTS_KEY, existingRequests);
// }
export function addRequest(request) {
  const existingRequests = getRequests();

  const newRequest = {
    ...request,
    id: request.id || crypto.randomUUID(),
    status: request.status || "pending", // 🔥 DEFAULT STATUS
  };

  existingRequests.push(newRequest);
  save(REQUESTS_KEY, existingRequests);
}
export function updateRequestStatus(requestId, status) {
  const existingRequests = getRequests();
  const updatedRequests = existingRequests.map((request) => {
    if (request.id !== requestId) {
      return request;
    }

    return { ...request, status };
  });

  save(REQUESTS_KEY, updatedRequests);
}
