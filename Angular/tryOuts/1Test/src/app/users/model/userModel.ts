export class users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  country: string;
  state: string;
  city: string;
  type: string;



  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: number,
    country: string,
    state: string,
    city: string,
    type: string,

  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.country = country;
    this.state = state;
    this.city = city;
    this.type = type;

  }


}
