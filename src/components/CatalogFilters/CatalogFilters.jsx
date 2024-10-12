import {
  CatalogFilterContainer,
  CatalogFilterTitle,
  CatalogFilterCaption,
  CatalogFilterList,
  CatalogFilterItem,
  CatalogFilterIcon,
  CatalogFilterText,
} from './CatalogFilters.styled';
import icon from '../../assets/icons.svg';
import { useState } from 'react';

const initialFilter = {
  ac: false,
  automatic: false,
  kitchen: false,
  tv: false,
  bathroom: false,
  type: '',
};

const CatalogFilters = () => {
  const [filter, setFilter] = useState(initialFilter);

  const handleFilterClickEquipment = filterName => {
    setFilter(prev => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleFilterClickType = filterName => {
    setFilter(prev =>
      prev.type === filterName
        ? {
            ...prev,
            type: '',
          }
        : {
            ...prev,
            type: filterName,
          }
    );
  };

  return (
    <CatalogFilterContainer>
      <CatalogFilterTitle>Filters</CatalogFilterTitle>

      <div>
        <CatalogFilterCaption>Vehicle equipment</CatalogFilterCaption>

        <CatalogFilterList>
          <CatalogFilterItem active={filter.ac} onClick={() => handleFilterClickEquipment('ac')}>
            <CatalogFilterIcon>
              <use href={`${icon}#wind`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>AC</CatalogFilterText>
          </CatalogFilterItem>
          <CatalogFilterItem
            active={filter.automatic}
            onClick={() => handleFilterClickEquipment('automatic')}
          >
            <CatalogFilterIcon>
              <use href={`${icon}#diagram`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>Automatic</CatalogFilterText>
          </CatalogFilterItem>
          <CatalogFilterItem
            active={filter.kitchen}
            onClick={() => handleFilterClickEquipment('kitchen')}
          >
            <CatalogFilterIcon>
              <use href={`${icon}#cup-hot`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>Kitchen</CatalogFilterText>
          </CatalogFilterItem>
          <CatalogFilterItem active={filter.tv} onClick={() => handleFilterClickEquipment('tv')}>
            <CatalogFilterIcon>
              <use href={`${icon}#tv`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>TV</CatalogFilterText>
          </CatalogFilterItem>
          <CatalogFilterItem
            active={filter.bathroom}
            onClick={() => handleFilterClickEquipment('bathroom')}
          >
            <CatalogFilterIcon>
              <use href={`${icon}#bi_droplet`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>Bathroom</CatalogFilterText>
          </CatalogFilterItem>
        </CatalogFilterList>
      </div>

      <div>
        <CatalogFilterCaption>Vehicle type</CatalogFilterCaption>

        <CatalogFilterList>
          <CatalogFilterItem
            active={filter.type === 'van'}
            onClick={() => handleFilterClickType('van')}
          >
            <CatalogFilterIcon>
              <use href={`${icon}#bi_grid-1x2`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>Van</CatalogFilterText>
          </CatalogFilterItem>
          <CatalogFilterItem
            active={filter.type === 'fullyIntegrated'}
            onClick={() => handleFilterClickType('fullyIntegrated')}
          >
            <CatalogFilterIcon>
              <use href={`${icon}#bi_grid`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>Fully Integrated</CatalogFilterText>
          </CatalogFilterItem>
          <CatalogFilterItem
            active={filter.type === 'alcove'}
            onClick={() => handleFilterClickType('alcove')}
          >
            <CatalogFilterIcon>
              <use href={`${icon}#bi_grid-3x3-gap`}></use>
            </CatalogFilterIcon>
            <CatalogFilterText>Alcove</CatalogFilterText>
          </CatalogFilterItem>
        </CatalogFilterList>
      </div>
    </CatalogFilterContainer>
  );
};

export default CatalogFilters;
