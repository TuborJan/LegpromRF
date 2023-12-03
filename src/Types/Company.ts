export interface ICompanyItem {
  name: string;
  description: string;
  typeOfActivity: string;
  dateOfRegistration: string;
  region: string;
  city: string;
  numberOfStaff: number;
  capital: {
    registredCapital: number;
    gain: number;
    currency: string;
  };
  contacts: {
    address: string;
    phone: string;
    mail: string;
  };
}
