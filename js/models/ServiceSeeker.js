import { User } from "/js/models/User.js";

export class serviceSeeker extends User {
  constructor(name, email, passward) {
    super(name, email, passward);
  }
  getRole() {
    return "ServiceSeeker";
  }
}
