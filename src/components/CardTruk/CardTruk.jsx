import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import icon from '../../assets/icons.svg';
import CardTrukReviews from '../CardTrukReviews/CardTrukReviews';
import CardTrukFeatures from '../CardTrukFeatures/CardTrukFeatures';
import CardTrukBooking from '../CardTrukBooking/CardTrukBooking';
import {
  CardTrukTitleContainer,
  CardTrukTitle,
  CardTrukReviewsLocationContainer,
  CardTrukReviewsLocationBox,
  CardTrukReviewsLocationIcon,
  CardTrukReviewsLocationText,
  CardTrukPrice,
  CardTrukImageList,
  CardTrukImage,
  CardTrukDescriptionText,
  CardTrukFeaturesReviewsList,
  CardTrukFeaturesReviewsItem,
  CardTrukFeaturesReviewsBookingContainer,
} from './CardTruk.styled';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';

const CardTruk = () => {
  const { id } = useParams();
  const [truk, setTruk] = useState({});
  const [section, setSection] = useState('features');
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

  const handleSectionClick = section => {
    setSection(section);
  };

  return (
    <>
      {loading ? (
        <LoaderPuff />
      ) : (
        <div>
          <CardTrukTitleContainer>
            <CardTrukTitle>{truk.name}</CardTrukTitle>

            <CardTrukReviewsLocationContainer>
              <CardTrukReviewsLocationBox>
                <CardTrukReviewsLocationIcon>
                  <use href={`${icon}#star-gold`}></use>
                </CardTrukReviewsLocationIcon>
                <CardTrukReviewsLocationText>
                  {truk.rating}({truk.reviews ? truk.reviews.length : null} Reviews)
                </CardTrukReviewsLocationText>
              </CardTrukReviewsLocationBox>

              <CardTrukReviewsLocationBox>
                <CardTrukReviewsLocationIcon>
                  <use href={`${icon}#map`}></use>
                </CardTrukReviewsLocationIcon>
                <CardTrukReviewsLocationText>{truk.location}</CardTrukReviewsLocationText>
              </CardTrukReviewsLocationBox>
            </CardTrukReviewsLocationContainer>

            <CardTrukPrice>{`€${truk.price}.00`}</CardTrukPrice>
          </CardTrukTitleContainer>
          <CardTrukImageList>
            {truk.gallery
              ? truk.gallery.slice(0, 4).map(e => (
                  <li key={e.thumb}>
                    <CardTrukImage src={e.thumb} alt="photo of a truck" />
                  </li>
                ))
              : null}
          </CardTrukImageList>
          <CardTrukDescriptionText>{truk.description}</CardTrukDescriptionText>
          <CardTrukFeaturesReviewsList>
            <CardTrukFeaturesReviewsItem
              isactive={`${section === 'features'}`}
              onClick={() => handleSectionClick('features')}
            >
              Features
            </CardTrukFeaturesReviewsItem>
            <CardTrukFeaturesReviewsItem
              isactive={`${section === 'reviews'}`}
              onClick={() => handleSectionClick('reviews')}
            >
              Reviews
            </CardTrukFeaturesReviewsItem>
          </CardTrukFeaturesReviewsList>
          <CardTrukFeaturesReviewsBookingContainer>
            {section === 'features' && <CardTrukFeatures truk={truk} />}
            {section === 'reviews' && <CardTrukReviews reviews={truk.reviews} />}

            <CardTrukBooking />
          </CardTrukFeaturesReviewsBookingContainer>
        </div>
      )}
    </>
  );
};

export default CardTruk;
