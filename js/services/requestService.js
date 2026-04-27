import {
  addRequest,
  getRequests,
  updateRequestStatus,
} from "../storage/requestRepository.js";

export function createRequest(payload) {
  return {
    id: crypto.randomUUID(),
    serviceType: payload.serviceType,
    vehicleModel: payload.vehicleModel,
    vehicleType: payload.vehicleType,
    urgency: payload.urgency,
    numberPlate: payload.numberPlate,
    location: payload.location,
    problemDescription: payload.problemDescription,
    landmark: payload.landmark,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
}

export function submitRequest(payload) {
  const request = createRequest(payload);
  addRequest(request);
  return request;
}

export function listRequests() {
  return getRequests();
}

export function setRequestStatus(requestId, status) {
  updateRequestStatus(requestId, status);
}
