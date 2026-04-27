import { User } from "/js/models/User.j";

export class serviceSeeker extends User {
  constructor(name, email, passward) {
    super(name, email, passward);
  }
  getRole() {
    return "ServiceSeeker";
  }
}
