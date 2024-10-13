import TrukCategoriesList from '../TrukCategoriesList/TrukCategoriesList';
import { CardTrukFeaturesContainer } from './CardTrukFeatures.styled';

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
        <p>Vehicle details</p>

        <ul>
          <li>Form {truk.form}</li>
          <li>Length {truk.length}</li>
          <li>Width {truk.width}</li>
          <li>Height {truk.height}</li>
          <li>Tank {truk.tank}</li>
          <li>Consumption {truk.consumption}</li>
        </ul>
      </div>
    </CardTrukFeaturesContainer>
  );
};

export default CardTrukFeatures;
