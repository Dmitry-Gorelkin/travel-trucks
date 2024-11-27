import TruckCategoriesList from '../TruckCategoriesList/TruckCategoriesList';
import {
  CardTruckFeaturesContainer,
  CardTruckFeaturesList,
  CardTruckFeaturesItem,
  CardTruckFeaturesText,
  CardTruckFeaturesTitle,
} from './CardTruckFeatures.styled';
import { useSelector } from 'react-redux';
import { selectTruckCard } from '../../redux/trucks/selectors';

const CardTruckFeatures = () => {
  const truck = useSelector(selectTruckCard);

  return (
    <CardTruckFeaturesContainer>
      <>
        <TruckCategoriesList truck={truck} />

        <div>
          <CardTruckFeaturesTitle>Vehicle details</CardTruckFeaturesTitle>
          <CardTruckFeaturesList>
            <CardTruckFeaturesItem>
              <CardTruckFeaturesText>Form</CardTruckFeaturesText>
              <CardTruckFeaturesText>{truck.form}</CardTruckFeaturesText>
            </CardTruckFeaturesItem>
            <CardTruckFeaturesItem>
              <CardTruckFeaturesText>Length</CardTruckFeaturesText>
              <CardTruckFeaturesText>{truck.length}</CardTruckFeaturesText>
            </CardTruckFeaturesItem>
            <CardTruckFeaturesItem>
              <CardTruckFeaturesText>Width</CardTruckFeaturesText>
              <CardTruckFeaturesText>{truck.width}</CardTruckFeaturesText>
            </CardTruckFeaturesItem>
            <CardTruckFeaturesItem>
              <CardTruckFeaturesText>Height</CardTruckFeaturesText>
              <CardTruckFeaturesText>{truck.height}</CardTruckFeaturesText>
            </CardTruckFeaturesItem>
            <CardTruckFeaturesItem>
              <CardTruckFeaturesText>Tank</CardTruckFeaturesText>
              <CardTruckFeaturesText>{truck.tank}</CardTruckFeaturesText>
            </CardTruckFeaturesItem>
            <CardTruckFeaturesItem>
              <CardTruckFeaturesText>Consumption</CardTruckFeaturesText>
              <CardTruckFeaturesText>{truck.consumption}</CardTruckFeaturesText>
            </CardTruckFeaturesItem>
          </CardTruckFeaturesList>
        </div>
      </>
    </CardTruckFeaturesContainer>
  );
};

export default CardTruckFeatures;
