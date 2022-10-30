export class bike {
  id!: number;
  category?: string;
  title?: string;
  companyId?: string;
}
export class car {
  id!: number;
  category?: string;
  title?: string;
  companyId?: string;
}
export class admin {
  id!: number;
  name?: string;
  password?: string;
}
export class user {
  id!: number;
  name?: string;
  password?: string;
}
export class bikeInfo {
  id!: number;
  companyId?: string;
  name?: string;
  cc!: number;
  kmpl!: number;
  bhp!: number;
  kg!: number;
  price!: number;
}
