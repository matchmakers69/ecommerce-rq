type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type Geo = {
  lat: string;
  lng: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
};
