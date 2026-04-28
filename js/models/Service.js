export class Service {
  constructor({ id = crypto.randomUUID(), name, description, price }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = Number(price) || 0;
  }
}
