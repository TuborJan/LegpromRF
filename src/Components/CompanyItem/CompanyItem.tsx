import React from "react";
import "./CompanyItem.scss";
import { ICompanyItem } from "../../Types/Company";
import CompanyLogo from "../../assets/CompanyLogoExample.png";

interface ICompanyItemProps {
  companyData: ICompanyItem;
}

const CompanyItem: React.FC<ICompanyItemProps> = ({ companyData }) => {
  return (
    <div className="company_item">
      <div className="company_item__img">
        <img src={CompanyLogo} alt="CompanyLogo" />
      </div>
      <div className="company_item__info">
        <h2>{companyData.name}</h2>
        <p>{companyData.description}</p>
        <p>Вид деятельности: {companyData.typeOfActivity}</p>
        <p>
          Дата регистрации: {companyData.dateOfRegistration} Уставный капитал:{" "}
          {companyData.capital.registredCapital}
          {companyData.capital.currency}
        </p>
        <p>{companyData.contacts.address}</p>
        <p>
          Телефон: {companyData.contacts.phone} Почта:{" "}
          {companyData.contacts.mail}
        </p>
        <div className="company_item__info_link">
          <a href="#">Перейти</a>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
