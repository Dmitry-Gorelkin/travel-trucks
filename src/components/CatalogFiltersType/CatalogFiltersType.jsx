import {
  CatalogFiltersTypeContainer,
  CatalogFiltersTypeTitle,
  CatalogFiltersTypeCaption,
  CatalogFiltersTypeList,
  CatalogFiltersTypeItem,
  CatalogFiltersTypeIcon,
  CatalogFiltersTypeText,
} from './CatalogFiltersType.styled';
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

const CatalogFiltersType = () => {
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
    <CatalogFiltersTypeContainer>
      <CatalogFiltersTypeTitle>Filters</CatalogFiltersTypeTitle>

      <div>
        <CatalogFiltersTypeCaption>Vehicle equipment</CatalogFiltersTypeCaption>

        <CatalogFiltersTypeList>
          <CatalogFiltersTypeItem
            active={filter.ac.toString()}
            onClick={() => handleFilterClickEquipment('ac')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#wind`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>AC</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={filter.automatic.toString()}
            onClick={() => handleFilterClickEquipment('automatic')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#diagram`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Automatic</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={filter.kitchen.toString()}
            onClick={() => handleFilterClickEquipment('kitchen')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#cup-hot`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Kitchen</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={filter.tv.toString()}
            onClick={() => handleFilterClickEquipment('tv')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#tv`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>TV</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={filter.bathroom.toString()}
            onClick={() => handleFilterClickEquipment('bathroom')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#bi_droplet`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Bathroom</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
        </CatalogFiltersTypeList>
      </div>

      <div>
        <CatalogFiltersTypeCaption>Vehicle type</CatalogFiltersTypeCaption>

        <CatalogFiltersTypeList>
          <CatalogFiltersTypeItem
            active={(filter.type === 'van').toString()}
            onClick={() => handleFilterClickType('van')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#bi_grid-1x2`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Van</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={(filter.type === 'fullyIntegrated').toString()}
            onClick={() => handleFilterClickType('fullyIntegrated')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#bi_grid`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Fully Integrated</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={(filter.type === 'alcove').toString()}
            onClick={() => handleFilterClickType('alcove')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#bi_grid-3x3-gap`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Alcove</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
        </CatalogFiltersTypeList>
      </div>
    </CatalogFiltersTypeContainer>
  );
};

export default CatalogFiltersType;
