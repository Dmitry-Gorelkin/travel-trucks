import { Button } from '../UI/Button/Button.styled';
import {
  CatalogFiltersContainer,
  CatalogFiltersLocationIcon,
  CatalogFiltersLocationInput,
  CatalogFiltersLocationInputContainer,
  CatalogFiltersLocationTitle,
  CatalogFiltersTypeCaption,
  CatalogFiltersTypeContainer,
  CatalogFiltersTypeIcon,
  CatalogFiltersTypeItem,
  CatalogFiltersTypeList,
  CatalogFiltersTypeText,
  CatalogFiltersTypeTitle,
} from './CatalogFilters.styled';
import { useState } from 'react';
import icon from '../../assets/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../redux/trucks/operations';
import { selectTrucksFilter } from '../../redux/trucks/selectors';
import { PAGE_DEFAULT } from '../../constants/trucks';

const CatalogFilters = ({ onPageStart }) => {
  const dispatch = useDispatch();
  const initialFilter = useSelector(selectTrucksFilter);
  const [filter, setFilter] = useState(initialFilter);

  const handleFilterChangeImput = event => {
    const { name, value } = event.target;

    setFilter(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterClickEquipment = filterName => {
    setFilter(prev => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleFilterClickTransmission = filterName => {
    setFilter(prev =>
      prev.transmission === filterName
        ? {
            ...prev,
            transmission: null,
          }
        : {
            ...prev,
            transmission: filterName,
          }
    );
  };

  const handleFilterClickForm = filterName => {
    setFilter(prev =>
      prev.form === filterName
        ? {
            ...prev,
            form: null,
          }
        : {
            ...prev,
            form: filterName,
          }
    );
  };

  const handleFilterSubmit = () => {
    dispatch(fetchTrucks(filter));
    onPageStart(PAGE_DEFAULT);
  };

  return (
    <CatalogFiltersContainer>
      <div>
        <CatalogFiltersLocationTitle>Location</CatalogFiltersLocationTitle>
        <CatalogFiltersLocationInputContainer>
          <CatalogFiltersLocationInput
            placeholder="City"
            value={filter.location}
            onChange={handleFilterChangeImput}
            name="location"
          />
          <CatalogFiltersLocationIcon isfilled={filter.location}>
            <use href={`${icon}#map`}></use>
          </CatalogFiltersLocationIcon>
        </CatalogFiltersLocationInputContainer>
      </div>

      <CatalogFiltersTypeContainer>
        <CatalogFiltersTypeTitle>Filters</CatalogFiltersTypeTitle>
        <div>
          <CatalogFiltersTypeCaption>Vehicle equipment</CatalogFiltersTypeCaption>

          <CatalogFiltersTypeList>
            <CatalogFiltersTypeItem
              active={filter.AC.toString()}
              onClick={() => handleFilterClickEquipment('AC')}
            >
              <CatalogFiltersTypeIcon>
                <use href={`${icon}#ac`}></use>
              </CatalogFiltersTypeIcon>
              <CatalogFiltersTypeText>AC</CatalogFiltersTypeText>
            </CatalogFiltersTypeItem>
            <CatalogFiltersTypeItem
              active={(filter.transmission === 'automatic').toString()}
              onClick={() => handleFilterClickTransmission('automatic')}
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
              active={filter.TV.toString()}
              onClick={() => handleFilterClickEquipment('TV')}
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

      <div>
        <Button onClick={handleFilterSubmit}>Search</Button>
      </div>
    </CatalogFiltersContainer>
  );
};

export default CatalogFilters;
