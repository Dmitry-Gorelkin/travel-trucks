import { Outlet } from 'react-router-dom';
import icon from '../../assets/icons.svg';
import CardTruckBooking from '../CardTruckBooking/CardTruckBooking';
import {
  CardTruckTitleContainer,
  CardTruckTitle,
  CardTruckReviewsLocationContainer,
  CardTruckReviewsLocationBox,
  CardTruckReviewsLocationIcon,
  CardTruckReviewsLocationText,
  CardTruckPrice,
  CardTruckImageList,
  CardTruckImage,
  CardTruckDescriptionText,
  CardTruckFeaturesReviewsList,
  CardTruckFeaturesReviewsItem,
  CardTruckFeaturesReviewsBookingContainer,
} from './CardTruck.styled';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';

const CardTruck = ({ truck, loading }) => {
  const { name, rating, reviews, location, price, gallery, description } = truck;

  return (
    <>
      {loading ? (
        <LoaderPuff />
      ) : (
        <div>
          <CardTruckTitleContainer>
            <CardTruckTitle>{name}</CardTruckTitle>

            <CardTruckReviewsLocationContainer>
              <CardTruckReviewsLocationBox>
                <CardTruckReviewsLocationIcon>
                  <use href={`${icon}#star-gold`}></use>
                </CardTruckReviewsLocationIcon>
                <CardTruckReviewsLocationText>
                  {rating}({reviews ? reviews.length : null} Reviews)
                </CardTruckReviewsLocationText>
              </CardTruckReviewsLocationBox>

              <CardTruckReviewsLocationBox>
                <CardTruckReviewsLocationIcon>
                  <use href={`${icon}#map`}></use>
                </CardTruckReviewsLocationIcon>
                <CardTruckReviewsLocationText>{location}</CardTruckReviewsLocationText>
              </CardTruckReviewsLocationBox>
            </CardTruckReviewsLocationContainer>

            <CardTruckPrice>{`€${price}.00`}</CardTruckPrice>
          </CardTruckTitleContainer>
          <CardTruckImageList>
            {gallery
              ? gallery.slice(0, 4).map(e => (
                  <li key={e.thumb}>
                    <CardTruckImage src={e.thumb} alt="photo of a truck" />
                  </li>
                ))
              : null}
          </CardTruckImageList>
          <CardTruckDescriptionText>{description}</CardTruckDescriptionText>
          <CardTruckFeaturesReviewsList>
            <CardTruckFeaturesReviewsItem to="features">Features</CardTruckFeaturesReviewsItem>
            <CardTruckFeaturesReviewsItem to="reviews">Reviews</CardTruckFeaturesReviewsItem>
          </CardTruckFeaturesReviewsList>
          <CardTruckFeaturesReviewsBookingContainer>
            <Outlet />
            <CardTruckBooking />
          </CardTruckFeaturesReviewsBookingContainer>
        </div>
      )}
    </>
  );
};

export default CardTruck;
