import { Outlet } from 'react-router-dom';
import icon from '../../assets/icons.svg';
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

const CardTruk = ({ truk, loading }) => {
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
            <CardTrukFeaturesReviewsItem to="features">Features</CardTrukFeaturesReviewsItem>
            <CardTrukFeaturesReviewsItem to="reviews">Reviews</CardTrukFeaturesReviewsItem>
          </CardTrukFeaturesReviewsList>
          <CardTrukFeaturesReviewsBookingContainer>
            <Outlet />
            <CardTrukBooking />
          </CardTrukFeaturesReviewsBookingContainer>
        </div>
      )}
    </>
  );
};

export default CardTruk;
