import { useState, useEffect } from "react";
import CompanyFilter from "../../Components/CompanyFilter/CompanyFilter";
import CompanyItem from "../../Components/CompanyItem/CompanyItem";
import { ICompanyItem } from "../../Types/Company";
import ExampleImg from "../../assets/ExampleImg.png";
import "./CompanyCatalog.scss";

const CompanyCatalog = () => {
  const companyDataExample: ICompanyItem[] = [
    {
      name: "Company1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum, sed commodi debitis non voluptatem officiis animi labore voluptatum repellat?",
      typeOfActivity: "Деятельность в области информационных услуг прочая",
      dateOfRegistration: "2011-08-31",
      region: "Москва",
      city: "Москва",
      numberOfStaff: 5,
      capital: {
        registredCapital: 300000000,
        gain: 300000000,
        currency: "руб",
      },
      contacts: {
        address: "1600 Amphitheatre Parkway Mountain View, CA 94043",
        phone: "650-253-0000",
        mail: "mail@mail.com",
      },
    },
    {
      name: "Company2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque.",
      typeOfActivity: "Деятельность финансовая и страховая",
      dateOfRegistration: "2015-08-31",
      region: "Краснодарский край",
      city: "Краснодар",
      numberOfStaff: 10,
      capital: {
        registredCapital: 600000,
        gain: 30000000000,
        currency: "руб",
      },
      contacts: {
        address: "1600 Amphitheatre Parkway Mountain View, CA 94043",
        phone: "77000000000",
        mail: "mailmail@mail.com",
      },
    },
    {
      name: "Company3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque.",
      typeOfActivity: "Информационное образование",
      dateOfRegistration: "2011-11-31",
      region: "Волгоградская область",
      city: "Волгоград",
      numberOfStaff: 15,
      capital: {
        registredCapital: 12345678,
        gain: 30000000,
        currency: "usd",
      },
      contacts: {
        address: "1600 Amphitheatre Parkway Mountain View, CA 94043",
        phone: "71234567890",
        mail: "asdqwuejd@mail.com",
      },
    },
    {
      name: "Company4",
      description: "Описание Описание Описание Описание",
      typeOfActivity: "Информационное образование",
      dateOfRegistration: "2011-11-31",
      region: "Москва",
      city: "Москва",
      numberOfStaff: 25,
      capital: {
        registredCapital: 12345678,
        gain: 3000000000,
        currency: "Руб",
      },
      contacts: {
        address: "Москва москва москва",
        phone: "71234567890",
        mail: "asdqwuejd@mail.com",
      },
    },
  ];

  const [filteredCompanies, setFilteredCompanies] =
    useState<ICompanyItem[]>(companyDataExample);

  const handleFilterChange = (filter: ICompanyItem) => {
    const filtered = companyDataExample.filter((company) => {
      return (
        company.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        company.description
          .toLowerCase()
          .includes(filter.description.toLowerCase()) &&
        company.typeOfActivity
          .toLowerCase()
          .includes(filter.typeOfActivity.toLowerCase()) &&
        company.region.toLowerCase().includes(filter.region.toLowerCase()) &&
        company.city.toLowerCase().includes(filter.city.toLowerCase()) &&
        company.capital.currency
          .toLowerCase()
          .includes(filter.capital.currency.toLowerCase()) &&
        company.capital.registredCapital >= filter.capital.registredCapital &&
        company.capital.gain >= filter.capital.gain &&
        (filter.dateOfRegistration !== ""
          ? new Date(company.dateOfRegistration) >=
            new Date(filter.dateOfRegistration)
          : company.dateOfRegistration) &&
        company.numberOfStaff >= filter.numberOfStaff
      );
    });
    setFilteredCompanies(filtered);
    console.log(filtered);
  };

  return (
    <div className="catalog">
      <h1>Каталог компаний</h1>
      <div className="catalog__map">
        <img className="" src={ExampleImg} alt="map" />
      </div>
      <div className="catalog__information">
        <div className="catalog__company">
          {filteredCompanies.map((item, index) => (
            <CompanyItem companyData={item} key={index} />
          ))}
        </div>
        <div className="catalog__filters">
          <CompanyFilter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default CompanyCatalog;
