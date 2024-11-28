import { useState } from 'react';
import icon from '../../assets/icons.svg';
import {
  CatalogFiltersLocationTitle,
  CatalogFiltersLocationInputContainer,
  CatalogFiltersLocationInput,
  CatalogFiltersLocationIcon,
} from './CatalogFiltersLocation.styled';

const CatalogFiltersLocation = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value.trim());
  };

  return (
    <div>
      <CatalogFiltersLocationTitle>Location</CatalogFiltersLocationTitle>
      <CatalogFiltersLocationInputContainer>
        <CatalogFiltersLocationInput
          placeholder="City"
          value={inputValue}
          onChange={handleInputChange}
        />
        <CatalogFiltersLocationIcon isfilled={inputValue}>
          <use href={`${icon}#map`}></use>
        </CatalogFiltersLocationIcon>
      </CatalogFiltersLocationInputContainer>
    </div>
  );
};

export default CatalogFiltersLocation;
