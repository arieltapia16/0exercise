import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface CountryCheckboxProps {
  country: string;
  isSelected: boolean;
  onToggle: (country: string) => void;
}

const CountryCheckbox: React.FC<CountryCheckboxProps> = ({
  country,
  isSelected,
  onToggle,
}) => {
  const handleCheckboxChange = () => {
    onToggle(country);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isSelected}
            onChange={handleCheckboxChange}
          />
        }
        label={country}
      />
    </FormGroup>
  );
};

export default CountryCheckbox;
