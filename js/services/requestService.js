import {
  addRequest,
  getRequests,
  updateRequestStatus,
} from "../storage/requestRepository.js";
import { loadUser } from "../storage/userRepository.js";
import { Request } from "../models/Request.js";

export function createRequest(payload) {
  const seeker = loadUser("seeker");

  return new Request({
    id: payload.id || crypto.randomUUID(),
    serviceSeekerId: payload.serviceSeekerId || seeker?.id || "",
    garageId: payload.garageId || "",
    serviceId: payload.serviceId || "",
    paymentMethod: payload.paymentMethod || "",
    serviceType: payload.serviceType,
    vehicleModel: payload.vehicleModel,
    vehicleType: payload.vehicleType,
    urgency: payload.urgency,
    numberPlate: payload.numberPlate,
    location: payload.location,
    problemDescription: payload.problemDescription,
    landmark: payload.landmark,
    status: payload.status || "Pending",
    createdAt: new Date().toISOString(),
  });
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
