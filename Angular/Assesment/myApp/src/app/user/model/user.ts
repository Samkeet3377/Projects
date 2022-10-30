export class user {
  public id: number;
  public username: string;
  public email: string;
  public password: string;

  constructor(
    id: number, username: string, email: string, password: string
  ){
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  getId(): number {
    return this.id;
  }
  getUsername(): string {
    return this.username;
  }
  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
}
