import { Service } from "./Service.js";

export class Garage {
  constructor({
    id = crypto.randomUUID(),
    name,
    location = "",
    services = [],
  }) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.services = services.map((service) =>
      service instanceof Service ? service : new Service(service)
    );
  }
}
