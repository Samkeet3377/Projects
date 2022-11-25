export class city {
  id!: number;
  name?: string;
  state_id!: number;
  state_code?: string;
  State_name?: string;
  country_id!: number;
  country_code?: string;
  country_name?: string;
}
export class state {
  id!: number;
  name?: string;
  country_id!: number;
  country_code?: string;
  country_name?: string;
  state_code?: string;
  type?: string;
}
export class country {
  id!: number;
  name?: string;
  iso3?: string;
  iso2?: string;
  numeric_code!: number;
  phone_code!: number;
  capital?: string;
  currency?: string;
  currency_name?: string;
  region?: string;
  subregion?: string;
}
