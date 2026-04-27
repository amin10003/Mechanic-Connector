import { User } from "/js/models/User.js";

export class serviceProvider extends User {
  constructor(name, email, passward) {
    super(name, email, passward);
  }
  getRole() {
    return "ServiceProvider";
  }
}
