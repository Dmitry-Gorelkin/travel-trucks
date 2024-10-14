import TrukCategoriesList from '../TrukCategoriesList/TrukCategoriesList';
import {
  CardTrukFeaturesContainer,
  CardTrukFeaturesList,
  CardTrukFeaturesItem,
  CardTrukFeaturesText,
  CardTrukFeaturesTitle,
} from './CardTrukFeatures.styled';

const CardTrukFeatures = ({ truk }) => {
  return (
    <CardTrukFeaturesContainer>
      <TrukCategoriesList
        transmission={truk.transmission}
        engine={truk.engine}
        kitchen={truk.kitchen}
        ac={truk.AC}
        tv={truk.TV}
        radio={truk.radio}
        bathroom={truk.bathroom}
      />

      <div>
        <CardTrukFeaturesTitle>Vehicle details</CardTrukFeaturesTitle>

        <CardTrukFeaturesList>
          <CardTrukFeaturesItem>
            <CardTrukFeaturesText>Form</CardTrukFeaturesText>
            <CardTrukFeaturesText>{truk.form}</CardTrukFeaturesText>
          </CardTrukFeaturesItem>
          <CardTrukFeaturesItem>
            <CardTrukFeaturesText>Length</CardTrukFeaturesText>
            <CardTrukFeaturesText>{truk.length}</CardTrukFeaturesText>
          </CardTrukFeaturesItem>
          <CardTrukFeaturesItem>
            <CardTrukFeaturesText>Width</CardTrukFeaturesText>
            <CardTrukFeaturesText>{truk.width}</CardTrukFeaturesText>
          </CardTrukFeaturesItem>
          <CardTrukFeaturesItem>
            <CardTrukFeaturesText>Height</CardTrukFeaturesText>
            <CardTrukFeaturesText>{truk.height}</CardTrukFeaturesText>
          </CardTrukFeaturesItem>
          <CardTrukFeaturesItem>
            <CardTrukFeaturesText>Tank</CardTrukFeaturesText>
            <CardTrukFeaturesText>{truk.tank}</CardTrukFeaturesText>
          </CardTrukFeaturesItem>
          <CardTrukFeaturesItem>
            <CardTrukFeaturesText>Consumption</CardTrukFeaturesText>
            <CardTrukFeaturesText>{truk.consumption}</CardTrukFeaturesText>
          </CardTrukFeaturesItem>
        </CardTrukFeaturesList>
      </div>
    </CardTrukFeaturesContainer>
  );
};

export default CardTrukFeatures;
