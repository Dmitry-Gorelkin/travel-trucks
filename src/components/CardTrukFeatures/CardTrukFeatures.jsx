import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TrukCategoriesList from '../TrukCategoriesList/TrukCategoriesList';
import {
  CardTrukFeaturesContainer,
  CardTrukFeaturesList,
  CardTrukFeaturesItem,
  CardTrukFeaturesText,
  CardTrukFeaturesTitle,
  CardTrukFeaturesContainerLoader,
} from './CardTrukFeatures.styled';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';

const CardTrukFeatures = () => {
  const { id } = useParams();
  const [truk, setTruk] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const respons = await axios(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);

        setTruk(respons.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return (
    <CardTrukFeaturesContainer>
      {loading ? (
        <CardTrukFeaturesContainerLoader>
          <LoaderPuff />
        </CardTrukFeaturesContainerLoader>
      ) : (
        <>
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
        </>
      )}
    </CardTrukFeaturesContainer>
  );
};

export default CardTrukFeatures;
