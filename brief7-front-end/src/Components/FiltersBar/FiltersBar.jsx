import Datepicker from "react-tailwindcss-datepicker";
import { useContext, useEffect, useState } from "react";

import { FiltersContext } from "@/app/FiltersContext";
import RequestMaker from "@/js/class/RequestMaker";

export default function FiltersBar() {
  const { filters } = useContext(FiltersContext);

  // Value is used by react-tailwindcss-datepicker
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  // handleValueChange is used by react-tailwindcss-datepicker
  const handleValueChange = (newValue) => {
    setValue(newValue);
    filters.startDate = newValue.startDate;
    filters.endDate = newValue.endDate;
  };

  return (
    <section className="py-0 dark:bg-dark">
      <div className="container -py-6">
        <div className="-mx-4 flex flex-wrap">
          <DefaultColumn>
            <SelectDestination />
          </DefaultColumn>

          <DefaultColumn>
            <CategorySelect />
          </DefaultColumn>

          <DefaultColumn>
            <label htmlFor="Date" className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Date
            </label>
            <Datepicker
              inputName="Date"
              value={value}
              onChange={handleValueChange}
              popoverDirection="down"
              inputClassName={
                "w-full rounded border border-stroke px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 mb-6"
              }
              toggleClassName="absolute bg-blue-600 rounded-r text-white right-0 h-[49px] px-[10px] text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
              showFooter={true}
              placeholder={"Sélectionnez une date ici"}
              separator=" -> "
              displayFormat="D/MM/YYYY"
              i18n="fr"
              configs={{
                footer: {
                  cancel: "Quitter",
                  apply: "Appliquer",
                },
              }}
            />
          </DefaultColumn>
        </div>
      </div>
    </section>
  );
}

const DefaultColumn = ({ children }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 mt-0">
      <div className="mb-12">{children}</div>
    </div>
  );
};

const SelectDestination = () => {
  const { filters } = useContext(FiltersContext);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    new RequestMaker("http://127.0.0.1:8000/api/destinations", "GET").send().then((data) => setDestinations(data));
  }, []);

  function buildOptions() {
    return destinations.map((destination) => (
      <option key={destination.id} value={destination.id} className="dark:bg-dark-2">
        {destination.city + " - " + destination.country}
      </option>
    ));
  }

  return (
    <>
      <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">Destination</label>
      <div className="relative z-20">
        <span className="absolute top-1/2 left-4 -translate-y-1/2">
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity={0.8}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                fill="#9CA3AF"
              />
            </g>
          </svg>
        </span>
        <select
          id="destination"
          className="relative z-20 w-full appearance-none rounded-md border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
          onChange={() => {
            filters.destination = document.getElementById("destination").value;
            console.log(filters);
          }}
        >
          {buildOptions()} // dynamically generated options from the API
        </select>
        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity={0.8}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill="#9CA3AF"
              />
            </g>
          </svg>
        </span>
      </div>
    </>
  );
};

const CategorySelect = () => {
  const { filters } = useContext(FiltersContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    new RequestMaker("http://127.0.0.1:8000/api/categories", "GET").send().then((data) => {
      setCategories(data);
    });
  }, []);

  function buildOptions() {
    return categories.map((category) => (
      <option key={category.id} value={category.id} className="dark:bg-dark-2">
        {category.name}
      </option>
    ));
  }

  return (
    <>
      <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">Category</label>
      <div className="relative z-20">
        <select
          id="category"
          className="relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
          onChange={() => (filters.category = document.getElementById("category").value)}
        >
          {buildOptions()}
        </select>
        <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
      </div>
    </>
  );
};
