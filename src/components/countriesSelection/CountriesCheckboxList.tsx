import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import CountryCheckbox from './CountryCheckbox';

interface CountriesCheckboxListProps {
  countries: string[];
}

const CountriesCheckboxList: React.FC<CountriesCheckboxListProps> = ({
  countries,
}) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCountries.length === countries.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedCountries, countries]);

  const handleCountryToggle = (country: string) => {
    if (selectedCountries.includes(country)) {
      const updatedCountries = selectedCountries.filter(
        (selectedCountry) => selectedCountry !== country
      );
      setSelectedCountries(updatedCountries);
      setSelectAll(false);
    } else {
      const updatedCountries = [...selectedCountries, country];
      setSelectedCountries(updatedCountries);
      if (updatedCountries.length === countries.length) {
        setSelectAll(true);
      }
    }
  };

  const handleSelectAllToggle = () => {
    if (selectAll) {
      setSelectedCountries([]);
      setSelectAll(false);
    } else {
      setSelectedCountries(countries);
      setSelectAll(true);
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={selectAll}
            onChange={handleSelectAllToggle}
          />
        }
        label="Select All"
      />
      {countries.map((country) => (
        <CountryCheckbox
          key={country}
          country={country}
          isSelected={selectedCountries.includes(country)}
          onToggle={handleCountryToggle}
        />
      ))}
    </FormGroup>
  );
};

export default CountriesCheckboxList;
