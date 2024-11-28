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
import { useEffect, useState } from 'react';

const initialFilter = {
  ac: false,
  automatic: false,
  kitchen: false,
  tv: false,
  bathroom: false,
  form: '',
};

const CatalogFiltersType = () => {
  const [filter, setFilter] = useState(initialFilter);

  const handleFilterClickEquipment = filterName => {
    setFilter(prev => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleFilterClickForm = filterName => {
    setFilter(prev =>
      prev.form === filterName
        ? {
            ...prev,
            form: '',
          }
        : {
            ...prev,
            form: filterName,
          }
    );
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

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
              <use href={`${icon}#ac`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>AC</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={filter.automatic.toString()}
            onClick={() => handleFilterClickEquipment('automatic')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#automatic`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Automatic</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={filter.kitchen.toString()}
            onClick={() => handleFilterClickEquipment('kitchen')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#kitchen`}></use>
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
              <use href={`${icon}#bathroom`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Bathroom</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
        </CatalogFiltersTypeList>
      </div>

      <div>
        <CatalogFiltersTypeCaption>Vehicle type</CatalogFiltersTypeCaption>

        <CatalogFiltersTypeList>
          <CatalogFiltersTypeItem
            active={(filter.form === 'panelTruck').toString()}
            onClick={() => handleFilterClickForm('panelTruck')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#van`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Van</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={(filter.form === 'fullyIntegrated').toString()}
            onClick={() => handleFilterClickForm('fullyIntegrated')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#fullyIntegrated`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Fully Integrated</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
          <CatalogFiltersTypeItem
            active={(filter.form === 'alcove').toString()}
            onClick={() => handleFilterClickForm('alcove')}
          >
            <CatalogFiltersTypeIcon>
              <use href={`${icon}#alcove`}></use>
            </CatalogFiltersTypeIcon>
            <CatalogFiltersTypeText>Alcove</CatalogFiltersTypeText>
          </CatalogFiltersTypeItem>
        </CatalogFiltersTypeList>
      </div>
    </CatalogFiltersTypeContainer>
  );
};

export default CatalogFiltersType;
