export class User {
  constructor({
    id = crypto.randomUUID(),
    name,
    email,
    password,
    location = "",
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.location = location;
  }

  getRole() {
    return "User";
  }
}

