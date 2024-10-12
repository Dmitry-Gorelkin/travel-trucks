import { useState } from 'react';
import icon from '../../assets/icons.svg';
import {
  CatalogLocationTitle,
  CatalogLocationInputContainer,
  CatalogLocationInput,
  CatalogLocationIcon,
} from './CatalogLocation.styled';

const CatalogLocation = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <CatalogLocationTitle>Location</CatalogLocationTitle>
      <CatalogLocationInputContainer>
        <CatalogLocationInput placeholder="City" value={inputValue} onChange={handleInputChange} />
        <CatalogLocationIcon isFilled={inputValue}>
          <use href={`${icon}#map`}></use>
        </CatalogLocationIcon>
      </CatalogLocationInputContainer>
    </div>
  );
};

export default CatalogLocation;
