export class user {
  public id: number;
  public username: string;
  public email: string;
  public password: string;
  public role: string;

  constructor(
    id: number, username: string, email: string, password: string, role: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

}
