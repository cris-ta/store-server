export interface Users {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipCode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
