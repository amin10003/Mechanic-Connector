export class Request {
  constructor({
    id = crypto.randomUUID(),
    serviceSeekerId = "",
    garageId = "",
    serviceId = "",
    status = "Pending",
    paymentMethod = "",
    location = "",
    ...details
  }) {
    this.id = id;
    this.serviceSeekerId = serviceSeekerId;
    this.garageId = garageId;
    this.serviceId = serviceId;
    this.status = status;
    this.paymentMethod = paymentMethod;
    this.location = location;
    Object.assign(this, details);
  }
}
