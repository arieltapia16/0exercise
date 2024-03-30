import React from 'react';
import CountriesCheckboxList from './components/countriesSelection/CountriesCheckboxList';
import { Container } from '@mui/material';

const App: React.FC = () => {
  const countries = ['India', 'Usa', 'France'];

  return (
    <Container>
      <h1>Country Selector</h1>
      <CountriesCheckboxList countries={countries} />
    </Container>
  );
};

export default App;