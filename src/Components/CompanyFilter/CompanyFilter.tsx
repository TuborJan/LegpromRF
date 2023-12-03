import { useState, useEffect } from "react";
import { ICompanyItem } from "../../Types/Company";
import "./CompanyFilter.scss";

interface ICompanyFilterProps {
  onFilterChange: (filter: ICompanyItem) => void;
}

const initialFilter: ICompanyItem = {
  name: "",
  description: "",
  typeOfActivity: "",
  dateOfRegistration: "",
  region: "",
  city: "",
  numberOfStaff: 0,
  capital: {
    registredCapital: 0,
    gain: 0,
    currency: "",
  },
  contacts: {
    address: "",
    phone: "",
    mail: "",
  },
};

const CompanyFilter: React.FC<ICompanyFilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<ICompanyItem>(initialFilter);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ICompanyItem | string
  ) => {
    const { value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...(field.startsWith("capital.")
        ? {
            capital: {
              ...prevFilter.capital,
              [field.split(".")[1]]: value,
            },
          }
        : {
            [field]: value,
          }),
    }));
  };

  const handleNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ICompanyItem | string
  ) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
    console.log(field);
    console.log(value);
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...(field.startsWith("capital.")
        ? {
            capital: {
              ...prevFilter.capital,
              [field.split(".")[1]]: value,
            },
          }
        : {
            [field]: value,
          }),
    }));
  };

  const applyFilter = () => {
    onFilterChange(filter);
  };

  const resetFilter = () => {
    setFilter(initialFilter);
    onFilterChange(initialFilter);
  };

  return (
    <div className="company_filter">
      <div className="company_filter__filters">
        <div className="company_filter__filter">
          <label>Название</label>
          <input
            type="text"
            value={filter.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Регион</label>
          <input
            type="text"
            value={filter.region}
            onChange={(e) => handleInputChange(e, "region")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Город</label>
          <input
            type="text"
            value={filter.city}
            onChange={(e) => handleInputChange(e, "city")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Описание</label>
          <input
            type="text"
            value={filter.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Вид деятельности</label>
          <input
            type="text"
            value={filter.typeOfActivity}
            onChange={(e) => handleInputChange(e, "typeOfActivity")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Уставный капитал</label>
          <input
            type="number"
            value={filter.capital.registredCapital || ""}
            onChange={(e) =>
              handleNumberInputChange(e, "capital.registredCapital")
            }
          />
        </div>
        <div className="company_filter__filter">
          <label>Выручка</label>
          <input
            type="number"
            value={filter.capital.gain || ""}
            onChange={(e) => handleNumberInputChange(e, "capital.gain")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Валюта</label>
          <input
            type="text"
            value={filter.capital.currency}
            onChange={(e) => handleInputChange(e, "capital.currency")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Дата основания</label>
          <input
            type="date"
            value={filter.dateOfRegistration}
            onChange={(e) => handleInputChange(e, "dateOfRegistration")}
          />
        </div>
        <div className="company_filter__filter">
          <label>Штат</label>
          <input
            type="number"
            value={filter.numberOfStaff || ""}
            onChange={(e) => handleNumberInputChange(e, "numberOfStaff")}
          />
        </div>
      </div>
      <div className="company_filter__buttons">
        <button
          className="company_filter__button"
          onClick={() => applyFilter()}
        >
          Apply Filter
        </button>
        <button className="company_filter__button" onClick={resetFilter}>
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default CompanyFilter;
